use itertools::Itertools as _;

use re_entity_db::{EntityPath, InstancePathHash};
use re_log_types::Instance;
use re_query::range_zip_1x5;
use re_renderer::{LineDrawableBuilder, PickingLayerInstanceId, PointCloudBuilder};
use re_types::{
    archetypes::Points2D,
    components::{ClassId, Color, DrawOrder, KeypointId, Position2D, Radius, Text},
};
use re_viewer_context::{
    ApplicableEntities, IdentifiedViewSystem, QueryContext, ResolvedAnnotationInfos,
    SpaceViewSystemExecutionError, TypedComponentFallbackProvider, ViewContext,
    ViewContextCollection, ViewQuery, VisualizableEntities, VisualizableFilterContext,
    VisualizerQueryInfo, VisualizerSystem,
};

use crate::{
    contexts::SpatialSceneEntityContext,
    view_kind::SpatialSpaceViewKind,
    visualizers::{
        load_keypoint_connections, process_annotation_and_keypoint_slices, process_color_slice,
        process_radius_slice, UiLabel, UiLabelTarget,
    },
};

use super::{
    entity_iterator::clamped, filter_visualizable_2d_entities, SpatialViewVisualizerData,
    SIZE_BOOST_IN_POINTS_FOR_POINT_OUTLINES,
};

// ---

pub struct Points2DVisualizer {
    /// If the number of points in the batch is > max_labels, don't render point labels.
    pub max_labels: usize,
    pub data: SpatialViewVisualizerData,
}

impl Default for Points2DVisualizer {
    fn default() -> Self {
        Self {
            max_labels: 10,
            data: SpatialViewVisualizerData::new(Some(SpatialSpaceViewKind::TwoD)),
        }
    }
}

// NOTE: Do not put profile scopes in these methods. They are called for all entities and all
// timestamps within a time range -- it's _a lot_.
impl Points2DVisualizer {
    fn process_labels<'a>(
        entity_path: &'a EntityPath,
        positions: &'a [glam::Vec3],
        labels: &'a [Text],
        colors: &'a [egui::Color32],
        annotation_infos: &'a ResolvedAnnotationInfos,
    ) -> impl Iterator<Item = UiLabel> + 'a {
        let labels = clamped(labels, positions.len());
        itertools::izip!(annotation_infos.iter(), positions, labels, colors)
            .enumerate()
            .filter_map(move |(i, (annotation_info, point, label, color))| {
                let label = annotation_info.label(Some(label.as_str()));
                match (point, label) {
                    (point, Some(label)) => Some(UiLabel {
                        text: label,
                        color: *color,
                        target: UiLabelTarget::Point2D(egui::pos2(point.x, point.y)),
                        labeled_instance: InstancePathHash::instance(
                            entity_path,
                            Instance::from(i as u64),
                        ),
                    }),
                    _ => None,
                }
            })
    }

    fn process_data<'a>(
        &mut self,
        point_builder: &mut PointCloudBuilder<'_>,
        line_builder: &mut LineDrawableBuilder<'_>,
        query: &ViewQuery<'_>,
        entity_path: &EntityPath,
        ent_context: &SpatialSceneEntityContext<'_>,
        data: impl Iterator<Item = Points2DComponentData<'a>>,
    ) -> Result<(), SpaceViewSystemExecutionError> {
        for data in data {
            let num_instances = data.positions.len();

            let positions = data
                .positions
                .iter()
                .map(|p| glam::vec3(p.x(), p.y(), 0.0))
                .collect_vec();

            let picking_ids = (0..num_instances)
                .map(|i| PickingLayerInstanceId(i as _))
                .collect_vec();

            let (annotation_infos, keypoints) = process_annotation_and_keypoint_slices(
                query.latest_at,
                num_instances,
                positions.iter().copied(),
                data.keypoint_ids,
                data.class_ids,
                &ent_context.annotations,
            );

            let radii = process_radius_slice(entity_path, num_instances, data.radii);
            let colors =
                process_color_slice(entity_path, num_instances, &annotation_infos, data.colors);

            {
                let point_batch = point_builder
                    .batch(entity_path.to_string())
                    .depth_offset(ent_context.depth_offset)
                    .flags(
                        re_renderer::renderer::PointCloudBatchFlags::FLAG_DRAW_AS_CIRCLES
                            | re_renderer::renderer::PointCloudBatchFlags::FLAG_ENABLE_SHADING,
                    )
                    .world_from_obj(ent_context.world_from_entity)
                    .outline_mask_ids(ent_context.highlight.overall)
                    .picking_object_id(re_renderer::PickingLayerObjectId(entity_path.hash64()));

                let mut point_range_builder =
                    point_batch.add_points_2d(&positions, &radii, &colors, &picking_ids);

                // Determine if there's any sub-ranges that need extra highlighting.
                {
                    re_tracing::profile_scope!("marking additional highlight points");
                    for (highlighted_key, instance_mask_ids) in &ent_context.highlight.instances {
                        let highlighted_point_index = (highlighted_key.get()
                            < num_instances as u64)
                            .then_some(highlighted_key.get());
                        if let Some(highlighted_point_index) = highlighted_point_index {
                            point_range_builder = point_range_builder
                                .push_additional_outline_mask_ids_for_range(
                                    highlighted_point_index as u32
                                        ..highlighted_point_index as u32 + 1,
                                    *instance_mask_ids,
                                );
                        }
                    }
                }
            }

            self.data.add_bounding_box_from_points(
                entity_path.hash(),
                positions.iter().copied(),
                ent_context.world_from_entity,
            );

            load_keypoint_connections(line_builder, ent_context, entity_path, &keypoints)?;

            if num_instances <= self.max_labels {
                self.data.ui_labels.extend(Self::process_labels(
                    entity_path,
                    &positions,
                    data.labels,
                    &colors,
                    &annotation_infos,
                ));
            }
        }

        Ok(())
    }
}

// ---

#[doc(hidden)] // Public for benchmarks
pub struct Points2DComponentData<'a> {
    // Point of views
    pub positions: &'a [Position2D],

    // Clamped to edge
    pub colors: &'a [Color],
    pub radii: &'a [Radius],
    pub labels: &'a [Text],
    pub keypoint_ids: &'a [KeypointId],
    pub class_ids: &'a [ClassId],
}

impl IdentifiedViewSystem for Points2DVisualizer {
    fn identifier() -> re_viewer_context::ViewSystemIdentifier {
        "Points2D".into()
    }
}

impl VisualizerSystem for Points2DVisualizer {
    fn visualizer_query_info(&self) -> VisualizerQueryInfo {
        VisualizerQueryInfo::from_archetype::<Points2D>()
    }

    fn filter_visualizable_entities(
        &self,
        entities: ApplicableEntities,
        context: &dyn VisualizableFilterContext,
    ) -> VisualizableEntities {
        re_tracing::profile_function!();
        filter_visualizable_2d_entities(entities, context)
    }

    fn execute(
        &mut self,
        ctx: &ViewContext<'_>,
        view_query: &ViewQuery<'_>,
        context_systems: &ViewContextCollection,
    ) -> Result<Vec<re_renderer::QueueableDrawData>, SpaceViewSystemExecutionError> {
        let Some(render_ctx) = ctx.viewer_ctx.render_ctx else {
            return Err(SpaceViewSystemExecutionError::NoRenderContextError);
        };

        let mut point_builder = PointCloudBuilder::new(render_ctx);
        point_builder
            .radius_boost_in_ui_points_for_outlines(SIZE_BOOST_IN_POINTS_FOR_POINT_OUTLINES);

        // We need lines from keypoints. The number of lines we'll have is harder to predict, so we'll
        // go with the dynamic allocation approach.
        let mut line_builder = LineDrawableBuilder::new(render_ctx);
        line_builder
            .radius_boost_in_ui_points_for_outlines(SIZE_BOOST_IN_POINTS_FOR_POINT_OUTLINES);

        super::entity_iterator::process_archetype::<Self, Points2D, _>(
            ctx,
            view_query,
            context_systems,
            |ctx, entity_path, spatial_ctx, results| {
                re_tracing::profile_scope!(format!("{entity_path}"));

                use re_space_view::RangeResultsExt as _;

                let resolver = ctx.recording().resolver();

                let positions = match results.get_dense::<Position2D>(resolver) {
                    Some(positions) => positions?,
                    _ => return Ok(()),
                };

                let num_positions = positions
                    .range_indexed()
                    .map(|(_, positions)| positions.len())
                    .sum::<usize>();
                if num_positions == 0 {
                    return Ok(());
                }

                point_builder.reserve(num_positions)?;

                let colors = results.get_or_empty_dense(resolver)?;
                let radii = results.get_or_empty_dense(resolver)?;
                let labels = results.get_or_empty_dense(resolver)?;
                let class_ids = results.get_or_empty_dense(resolver)?;
                let keypoint_ids = results.get_or_empty_dense(resolver)?;

                let data = range_zip_1x5(
                    positions.range_indexed(),
                    colors.range_indexed(),
                    radii.range_indexed(),
                    labels.range_indexed(),
                    class_ids.range_indexed(),
                    keypoint_ids.range_indexed(),
                )
                .map(
                    |(_index, positions, colors, radii, labels, class_ids, keypoint_ids)| {
                        Points2DComponentData {
                            positions,
                            colors: colors.unwrap_or_default(),
                            radii: radii.unwrap_or_default(),
                            labels: labels.unwrap_or_default(),
                            class_ids: class_ids.unwrap_or_default(),
                            keypoint_ids: keypoint_ids.unwrap_or_default(),
                        }
                    },
                );

                self.process_data(
                    &mut point_builder,
                    &mut line_builder,
                    view_query,
                    entity_path,
                    spatial_ctx,
                    data,
                )
            },
        )?;

        Ok(vec![
            point_builder.into_draw_data()?.into(),
            line_builder.into_draw_data()?.into(),
        ])
    }

    fn data(&self) -> Option<&dyn std::any::Any> {
        Some(self.data.as_any())
    }

    fn as_any(&self) -> &dyn std::any::Any {
        self
    }

    fn as_fallback_provider(&self) -> &dyn re_viewer_context::ComponentFallbackProvider {
        self
    }
}

impl TypedComponentFallbackProvider<DrawOrder> for Points2DVisualizer {
    fn fallback_for(&self, _ctx: &QueryContext<'_>) -> DrawOrder {
        DrawOrder::DEFAULT_POINTS2D
    }
}

re_viewer_context::impl_component_fallback_provider!(Points2DVisualizer => [DrawOrder]);

// DO NOT EDIT! This file was auto-generated by crates/re_types_builder/src/codegen/rust/api.rs
// Based on "crates/re_types/definitions/rerun/archetypes/disconnected_space.fbs".

#![allow(trivial_numeric_casts)]
#![allow(unused_parens)]
#![allow(clippy::clone_on_copy)]
#![allow(clippy::iter_on_single_items)]
#![allow(clippy::map_flatten)]
#![allow(clippy::match_wildcard_for_single_variants)]
#![allow(clippy::needless_question_mark)]
#![allow(clippy::new_without_default)]
#![allow(clippy::redundant_closure)]
#![allow(clippy::too_many_arguments)]
#![allow(clippy::too_many_lines)]
#![allow(clippy::unnecessary_cast)]

/// **Archetype**: Specifies that the entity path at which this is logged is disconnected from its parent.
///
/// This is useful for specifying that a subgraph is independent of the rest of the scene.
///
/// If a transform or pinhole is logged on the same path, this archetype's components
/// will be ignored.
///
/// ## Example
///
/// ### Disconnected Space
/// ```ignore
/// fn main() -> Result<(), Box<dyn std::error::Error>> {
///     let (rec, storage) =
///         rerun::RecordingStreamBuilder::new("rerun_example_disconnected_space").memory()?;
///
///     // These two points can be projected into the same space..
///     rec.log(
///         "world/room1/point",
///         &rerun::Points3D::new([(0.0, 0.0, 0.0)]),
///     )?;
///     rec.log(
///         "world/room2/point",
///         &rerun::Points3D::new([(1.0, 1.0, 1.0)]),
///     )?;
///
///     // ..but this one lives in a completely separate space!
///     rec.log("world/wormhole", &rerun::DisconnectedSpace::new(true))?;
///     rec.log(
///         "world/wormhole/point",
///         &rerun::Points3D::new([(2.0, 2.0, 2.0)]),
///     )?;
///
///     rerun::native_viewer::show(storage.take())?;
///     Ok(())
/// }
/// ```
/// <center>
/// <picture>
///   <source media="(max-width: 480px)" srcset="https://static.rerun.io/disconnected_space/b8f95b0e32359de625a765247c84935146c1fba9/480w.png">
///   <source media="(max-width: 768px)" srcset="https://static.rerun.io/disconnected_space/b8f95b0e32359de625a765247c84935146c1fba9/768w.png">
///   <source media="(max-width: 1024px)" srcset="https://static.rerun.io/disconnected_space/b8f95b0e32359de625a765247c84935146c1fba9/1024w.png">
///   <source media="(max-width: 1200px)" srcset="https://static.rerun.io/disconnected_space/b8f95b0e32359de625a765247c84935146c1fba9/1200w.png">
///   <img src="https://static.rerun.io/disconnected_space/b8f95b0e32359de625a765247c84935146c1fba9/full.png" width="640">
/// </picture>
/// </center>
#[derive(Clone, Debug, Copy, PartialEq, Eq)]
pub struct DisconnectedSpace {
    pub disconnected_space: crate::components::DisconnectedSpace,
}

static REQUIRED_COMPONENTS: once_cell::sync::Lazy<[::re_types_core::ComponentName; 1usize]> =
    once_cell::sync::Lazy::new(|| ["rerun.components.DisconnectedSpace".into()]);

static RECOMMENDED_COMPONENTS: once_cell::sync::Lazy<[::re_types_core::ComponentName; 1usize]> =
    once_cell::sync::Lazy::new(|| ["rerun.components.DisconnectedSpaceIndicator".into()]);

static OPTIONAL_COMPONENTS: once_cell::sync::Lazy<[::re_types_core::ComponentName; 1usize]> =
    once_cell::sync::Lazy::new(|| ["rerun.components.InstanceKey".into()]);

static ALL_COMPONENTS: once_cell::sync::Lazy<[::re_types_core::ComponentName; 3usize]> =
    once_cell::sync::Lazy::new(|| {
        [
            "rerun.components.DisconnectedSpace".into(),
            "rerun.components.DisconnectedSpaceIndicator".into(),
            "rerun.components.InstanceKey".into(),
        ]
    });

impl DisconnectedSpace {
    pub const NUM_COMPONENTS: usize = 3usize;
}

/// Indicator component for the [`DisconnectedSpace`] [`::re_types_core::Archetype`]
pub type DisconnectedSpaceIndicator = ::re_types_core::GenericIndicatorComponent<DisconnectedSpace>;

impl ::re_types_core::Archetype for DisconnectedSpace {
    type Indicator = DisconnectedSpaceIndicator;

    #[inline]
    fn name() -> ::re_types_core::ArchetypeName {
        "rerun.archetypes.DisconnectedSpace".into()
    }

    #[inline]
    fn indicator() -> ::re_types_core::MaybeOwnedComponentBatch<'static> {
        static INDICATOR: DisconnectedSpaceIndicator = DisconnectedSpaceIndicator::DEFAULT;
        ::re_types_core::MaybeOwnedComponentBatch::Ref(&INDICATOR)
    }

    #[inline]
    fn required_components() -> ::std::borrow::Cow<'static, [::re_types_core::ComponentName]> {
        REQUIRED_COMPONENTS.as_slice().into()
    }

    #[inline]
    fn recommended_components() -> ::std::borrow::Cow<'static, [::re_types_core::ComponentName]> {
        RECOMMENDED_COMPONENTS.as_slice().into()
    }

    #[inline]
    fn optional_components() -> ::std::borrow::Cow<'static, [::re_types_core::ComponentName]> {
        OPTIONAL_COMPONENTS.as_slice().into()
    }

    #[inline]
    fn all_components() -> ::std::borrow::Cow<'static, [::re_types_core::ComponentName]> {
        ALL_COMPONENTS.as_slice().into()
    }

    #[inline]
    fn from_arrow(
        arrow_data: impl IntoIterator<
            Item = (::arrow2::datatypes::Field, Box<dyn ::arrow2::array::Array>),
        >,
    ) -> ::re_types_core::DeserializationResult<Self> {
        re_tracing::profile_function!();
        use ::re_types_core::{Loggable as _, ResultExt as _};
        let arrays_by_name: ::std::collections::HashMap<_, _> = arrow_data
            .into_iter()
            .map(|(field, array)| (field.name, array))
            .collect();
        let disconnected_space = {
            let array = arrays_by_name
                .get("rerun.components.DisconnectedSpace")
                .ok_or_else(::re_types_core::DeserializationError::missing_data)
                .with_context("rerun.archetypes.DisconnectedSpace#disconnected_space")?;
            <crate::components::DisconnectedSpace>::from_arrow_opt(&**array)
                .with_context("rerun.archetypes.DisconnectedSpace#disconnected_space")?
                .into_iter()
                .next()
                .flatten()
                .ok_or_else(::re_types_core::DeserializationError::missing_data)
                .with_context("rerun.archetypes.DisconnectedSpace#disconnected_space")?
        };
        Ok(Self { disconnected_space })
    }
}

impl ::re_types_core::AsComponents for DisconnectedSpace {
    fn as_component_batches(&self) -> Vec<::re_types_core::MaybeOwnedComponentBatch<'_>> {
        re_tracing::profile_function!();
        use ::re_types_core::Archetype as _;
        [
            Some(Self::indicator()),
            Some((&self.disconnected_space as &dyn ::re_types_core::ComponentBatch).into()),
        ]
        .into_iter()
        .flatten()
        .collect()
    }

    #[inline]
    fn num_instances(&self) -> usize {
        1
    }
}

impl DisconnectedSpace {
    pub fn new(disconnected_space: impl Into<crate::components::DisconnectedSpace>) -> Self {
        Self {
            disconnected_space: disconnected_space.into(),
        }
    }
}

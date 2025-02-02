use std::ops::RangeInclusive;

use egui::NumExt as _;
use re_types::datatypes;

/// Generic editor for a [`re_types::datatypes::Float32`] value from zero to max float.
pub fn edit_f32_zero_to_max(
    _ctx: &re_viewer_context::ViewerContext<'_>,
    ui: &mut egui::Ui,
    value: &mut impl std::ops::DerefMut<Target = datatypes::Float32>,
) -> egui::Response {
    edit_f32_float_raw_impl(ui, &mut value.deref_mut().0, 0.0..=f32::MAX)
}

/// Generic editor for a raw f32 value from zero to max float.
pub fn edit_f32_zero_to_max_float_raw(
    _ctx: &re_viewer_context::ViewerContext<'_>,
    ui: &mut egui::Ui,
    value: &mut impl std::ops::DerefMut<Target = f32>,
) -> egui::Response {
    edit_f32_float_raw_impl(ui, value, 0.0..=f32::MAX)
}

/// Generic editor for a raw f32 value from min to max float.
pub fn edit_f32_min_to_max_float_raw(
    _ctx: &re_viewer_context::ViewerContext<'_>,
    ui: &mut egui::Ui,
    value: &mut impl std::ops::DerefMut<Target = f32>,
) -> egui::Response {
    edit_f32_float_raw_impl(ui, value, f32::MIN..=f32::MAX)
}

/// Non monomorphized implementation for f32 float editing.
fn edit_f32_float_raw_impl(
    ui: &mut egui::Ui,
    value: &mut f32,
    range: RangeInclusive<f32>,
) -> egui::Response {
    let speed = (*value * 0.01).at_least(0.001);
    ui.add(
        egui::DragValue::new(value)
            .clamp_to_range(false)
            .range(range)
            .speed(speed),
    )
}

/// Generic editor for a [`re_types::datatypes::Float32`] value from zero to one float.
pub fn edit_f32_zero_to_one(
    _ctx: &re_viewer_context::ViewerContext<'_>,
    ui: &mut egui::Ui,
    value: &mut impl std::ops::DerefMut<Target = datatypes::Float32>,
) -> egui::Response {
    edit_f32_zero_to_one_raw(ui, &mut value.deref_mut().0)
}

/// Non monomorphized implementation of [`edit_f32_zero_to_one`].
fn edit_f32_zero_to_one_raw(ui: &mut egui::Ui, value: &mut f32) -> egui::Response {
    ui.add(
        egui::DragValue::new(value)
            .clamp_to_range(false)
            .range(0.0..=1.0)
            .speed(0.005)
            .fixed_decimals(2),
    )
}

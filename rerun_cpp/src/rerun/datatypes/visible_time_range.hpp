// DO NOT EDIT! This file was auto-generated by crates/re_types_builder/src/codegen/cpp/mod.rs
// Based on "crates/re_types/definitions/rerun/datatypes/visible_time_range.fbs".

#pragma once

#include "../result.hpp"
#include "visible_time_range_boundary.hpp"

#include <cstdint>
#include <memory>

namespace arrow {
    class Array;
    class DataType;
    class StructBuilder;
} // namespace arrow

namespace rerun::datatypes {
    /// **Datatype**: Visible time range bounds for a timelines.
    ///
    /// This datatype does not specify whether it's a time or sequence based timeline.
    struct VisibleTimeRange {
        /// Low time boundary for sequence timeline.
        rerun::datatypes::VisibleTimeRangeBoundary start;

        /// High time boundary for sequence timeline.
        rerun::datatypes::VisibleTimeRangeBoundary end;

      public:
        VisibleTimeRange() = default;
    };
} // namespace rerun::datatypes

namespace rerun {
    template <typename T>
    struct Loggable;

    /// \private
    template <>
    struct Loggable<datatypes::VisibleTimeRange> {
        static constexpr const char Name[] = "rerun.datatypes.VisibleTimeRange";

        /// Returns the arrow data type this type corresponds to.
        static const std::shared_ptr<arrow::DataType>& arrow_datatype();

        /// Serializes an array of `rerun::datatypes::VisibleTimeRange` into an arrow array.
        static Result<std::shared_ptr<arrow::Array>> to_arrow(
            const datatypes::VisibleTimeRange* instances, size_t num_instances
        );

        /// Fills an arrow array builder with an array of this type.
        static rerun::Error fill_arrow_array_builder(
            arrow::StructBuilder* builder, const datatypes::VisibleTimeRange* elements,
            size_t num_elements
        );
    };
} // namespace rerun
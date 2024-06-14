// DO NOT EDIT! This file was auto-generated by crates/re_types_builder/src/codegen/cpp/mod.rs
// Based on "crates/re_types/definitions/rerun/components/aggregation_policy.fbs".

#pragma once

#include "../result.hpp"

#include <cstdint>
#include <memory>

namespace arrow {
    class Array;
    class DataType;
    class SparseUnionBuilder;
} // namespace arrow

namespace rerun::components {
    /// **Component**: Configures a policy for aggregation of values.
    ///
    /// This is used for lines in plots when the X axis distance of individual points goes below a single pixel,
    /// i.e. a single pixel covers more than one tick worth of data. It can greatly improve performance
    /// (and readability) in such situations as it prevents overdraw.
    enum class AggregationPolicy : uint8_t {

        /// No aggregation.
        Off = 1,

        /// Average all points in the range together.
        Average = 2,

        /// Keep only the maximum values in the range.
        Max = 3,

        /// Keep only the minimum values in the range.
        Min = 4,

        /// Keep both the minimum and maximum values in the range.
        ///
        /// This will yield two aggregated points instead of one, effectively creating a vertical line.
        MinMax = 5,

        /// Find both the minimum and maximum values in the range, then use the average of those.
        MinMaxAverage = 6,
    };
} // namespace rerun::components

namespace rerun {
    template <typename T>
    struct Loggable;

    /// \private
    template <>
    struct Loggable<components::AggregationPolicy> {
        static constexpr const char Name[] = "rerun.components.AggregationPolicy";

        /// Returns the arrow data type this type corresponds to.
        static const std::shared_ptr<arrow::DataType>& arrow_datatype();

        /// Serializes an array of `rerun::components::AggregationPolicy` into an arrow array.
        static Result<std::shared_ptr<arrow::Array>> to_arrow(
            const components::AggregationPolicy* instances, size_t num_instances
        );

        /// Fills an arrow array builder with an array of this type.
        static rerun::Error fill_arrow_array_builder(
            arrow::SparseUnionBuilder* builder, const components::AggregationPolicy* elements,
            size_t num_elements
        );
    };
} // namespace rerun

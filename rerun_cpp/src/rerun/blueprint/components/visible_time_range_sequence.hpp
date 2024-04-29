// DO NOT EDIT! This file was auto-generated by crates/re_types_builder/src/codegen/cpp/mod.rs
// Based on "crates/re_types/definitions/rerun/blueprint/components/visible_time_range_sequence.fbs".

#pragma once

#include "../../blueprint/datatypes/visible_time_range.hpp"
#include "../../result.hpp"

#include <cstdint>
#include <memory>

namespace rerun::blueprint::components {
    /// **Component**: The range of values on time timelines that will be included in a space view query.
    struct VisibleTimeRangeSequence {
        rerun::blueprint::datatypes::VisibleTimeRange value;

      public:
        VisibleTimeRangeSequence() = default;

        VisibleTimeRangeSequence(rerun::blueprint::datatypes::VisibleTimeRange value_)
            : value(value_) {}

        VisibleTimeRangeSequence& operator=(rerun::blueprint::datatypes::VisibleTimeRange value_) {
            value = value_;
            return *this;
        }

        /// Cast to the underlying VisibleTimeRange datatype
        operator rerun::blueprint::datatypes::VisibleTimeRange() const {
            return value;
        }
    };
} // namespace rerun::blueprint::components

namespace rerun {
    static_assert(
        sizeof(rerun::blueprint::datatypes::VisibleTimeRange) ==
        sizeof(blueprint::components::VisibleTimeRangeSequence)
    );

    /// \private
    template <>
    struct Loggable<blueprint::components::VisibleTimeRangeSequence> {
        static constexpr const char Name[] = "rerun.blueprint.components.VisibleTimeRangeSequence";

        /// Returns the arrow data type this type corresponds to.
        static const std::shared_ptr<arrow::DataType>& arrow_datatype() {
            return Loggable<rerun::blueprint::datatypes::VisibleTimeRange>::arrow_datatype();
        }

        /// Serializes an array of `rerun::blueprint:: components::VisibleTimeRangeSequence` into an arrow array.
        static Result<std::shared_ptr<arrow::Array>> to_arrow(
            const blueprint::components::VisibleTimeRangeSequence* instances, size_t num_instances
        ) {
            return Loggable<rerun::blueprint::datatypes::VisibleTimeRange>::to_arrow(
                &instances->value,
                num_instances
            );
        }
    };
} // namespace rerun
// DO NOT EDIT! This file was auto-generated by crates/re_types_builder/src/codegen/cpp/mod.rs
// Based on "crates/re_types/definitions/rerun/testing/components/fuzzy.fbs".

#pragma once

#include "../datatypes/affix_fuzzer3.hpp"

#include <cstdint>
#include <memory>
#include <rerun/collection.hpp>
#include <rerun/data_cell.hpp>
#include <rerun/result.hpp>
#include <utility>

namespace arrow {
    class DataType;
    class ListBuilder;
    class MemoryPool;
} // namespace arrow

namespace rerun::components {
    struct AffixFuzzer16 {
        rerun::Collection<rerun::datatypes::AffixFuzzer3> many_required_unions;

        /// Name of the component, used for serialization.
        static const char NAME[];

      public:
        AffixFuzzer16() = default;

        AffixFuzzer16(rerun::Collection<rerun::datatypes::AffixFuzzer3> many_required_unions_)
            : many_required_unions(std::move(many_required_unions_)) {}

        AffixFuzzer16& operator=(
            rerun::Collection<rerun::datatypes::AffixFuzzer3> many_required_unions_
        ) {
            many_required_unions = std::move(many_required_unions_);
            return *this;
        }

        /// Returns the arrow data type this type corresponds to.
        static const std::shared_ptr<arrow::DataType>& arrow_datatype();

        /// Creates a new array builder with an array of this type.
        static Result<std::shared_ptr<arrow::ListBuilder>> new_arrow_array_builder(
            arrow::MemoryPool* memory_pool
        );

        /// Fills an arrow array builder with an array of this type.
        static rerun::Error fill_arrow_array_builder(
            arrow::ListBuilder* builder, const AffixFuzzer16* elements, size_t num_elements
        );

        /// Creates a Rerun DataCell from an array of AffixFuzzer16 components.
        static Result<rerun::DataCell> to_data_cell(
            const AffixFuzzer16* instances, size_t num_instances
        );
    };
} // namespace rerun::components

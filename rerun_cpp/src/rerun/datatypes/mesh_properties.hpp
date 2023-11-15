// DO NOT EDIT! This file was auto-generated by crates/re_types_builder/src/codegen/cpp/mod.rs
// Based on "crates/re_types/definitions/rerun/datatypes/mesh_properties.fbs".

#pragma once

#include "../collection.hpp"
#include "../result.hpp"

#include <cstdint>
#include <memory>
#include <optional>
#include <utility>

namespace arrow {
    class DataType;
    class MemoryPool;
    class StructBuilder;
} // namespace arrow

namespace rerun::datatypes {
    /// **Datatype**: Optional triangle indices for a mesh.
    struct MeshProperties {
        /// A flattened array of vertex indices that describe the mesh's triangles.
        ///
        /// Its length must be divisible by 3.
        std::optional<rerun::Collection<uint32_t>> indices;

      public:
        MeshProperties() = default;

        MeshProperties(std::optional<rerun::Collection<uint32_t>> indices_)
            : indices(std::move(indices_)) {}

        MeshProperties& operator=(std::optional<rerun::Collection<uint32_t>> indices_) {
            indices = std::move(indices_);
            return *this;
        }

        /// Returns the arrow data type this type corresponds to.
        static const std::shared_ptr<arrow::DataType>& arrow_datatype();

        /// Creates a new array builder with an array of this type.
        static Result<std::shared_ptr<arrow::StructBuilder>> new_arrow_array_builder(
            arrow::MemoryPool* memory_pool
        );

        /// Fills an arrow array builder with an array of this type.
        static rerun::Error fill_arrow_array_builder(
            arrow::StructBuilder* builder, const MeshProperties* elements, size_t num_elements
        );
    };
} // namespace rerun::datatypes

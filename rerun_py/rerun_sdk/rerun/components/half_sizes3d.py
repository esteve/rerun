# DO NOT EDIT! This file was auto-generated by crates/re_types_builder/src/codegen/python/mod.rs
# Based on "crates/re_types/definitions/rerun/components/half_sizes3d.fbs".

# You can extend this class by creating a "HalfSizes3DExt" class in "half_sizes3d_ext.py".

from __future__ import annotations

from .. import datatypes
from .._baseclasses import (
    ComponentBatchMixin,
    ComponentMixin,
)

__all__ = ["HalfSizes3D", "HalfSizes3DBatch", "HalfSizes3DType"]


class HalfSizes3D(datatypes.Vec3D, ComponentMixin):
    """
    **Component**: Half-size (radius) of a 3D box.

    Measured in its local coordinate system.

    The box extends both in negative and positive direction along each axis.
    Negative sizes indicate that the box is flipped along the respective axis, but this has no effect on how it is displayed.
    """

    _BATCH_TYPE = None
    # You can define your own __init__ function as a member of HalfSizes3DExt in half_sizes3d_ext.py

    # Note: there are no fields here because HalfSizes3D delegates to datatypes.Vec3D
    pass


class HalfSizes3DType(datatypes.Vec3DType):
    _TYPE_NAME: str = "rerun.components.HalfSizes3D"


class HalfSizes3DBatch(datatypes.Vec3DBatch, ComponentBatchMixin):
    _ARROW_TYPE = HalfSizes3DType()


# This is patched in late to avoid circular dependencies.
HalfSizes3D._BATCH_TYPE = HalfSizes3DBatch  # type: ignore[assignment]

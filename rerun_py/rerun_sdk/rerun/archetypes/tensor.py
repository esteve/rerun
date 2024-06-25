# DO NOT EDIT! This file was auto-generated by crates/re_types_builder/src/codegen/python/mod.rs
# Based on "crates/re_types/definitions/rerun/archetypes/tensor.fbs".

# You can extend this class by creating a "TensorExt" class in "tensor_ext.py".

from __future__ import annotations

from attrs import define, field

from .. import components
from .._baseclasses import (
    Archetype,
)
from .tensor_ext import TensorExt

__all__ = ["Tensor"]


@define(str=False, repr=False, init=False)
class Tensor(TensorExt, Archetype):
    """
    **Archetype**: An N-dimensional array of numbers.

    Example
    -------
    ### Simple tensor:
    ```python
    import numpy as np
    import rerun as rr

    tensor = np.random.randint(0, 256, (8, 6, 3, 5), dtype=np.uint8)  # 4-dimensional tensor

    rr.init("rerun_example_tensor", spawn=True)

    # Log the tensor, assigning names to each dimension
    rr.log("tensor", rr.Tensor(tensor, dim_names=("width", "height", "channel", "batch")))
    ```
    <center>
    <picture>
      <source media="(max-width: 480px)" srcset="https://static.rerun.io/tensor_simple/baacb07712f7b706e3c80e696f70616c6c20b367/480w.png">
      <source media="(max-width: 768px)" srcset="https://static.rerun.io/tensor_simple/baacb07712f7b706e3c80e696f70616c6c20b367/768w.png">
      <source media="(max-width: 1024px)" srcset="https://static.rerun.io/tensor_simple/baacb07712f7b706e3c80e696f70616c6c20b367/1024w.png">
      <source media="(max-width: 1200px)" srcset="https://static.rerun.io/tensor_simple/baacb07712f7b706e3c80e696f70616c6c20b367/1200w.png">
      <img src="https://static.rerun.io/tensor_simple/baacb07712f7b706e3c80e696f70616c6c20b367/full.png" width="640">
    </picture>
    </center>

    """

    # __init__ can be found in tensor_ext.py

    def __attrs_clear__(self) -> None:
        """Convenience method for calling `__attrs_init__` with all `None`s."""
        self.__attrs_init__(
            data=None,  # type: ignore[arg-type]
        )

    @classmethod
    def _clear(cls) -> Tensor:
        """Produce an empty Tensor, bypassing `__init__`."""
        inst = cls.__new__(cls)
        inst.__attrs_clear__()
        return inst

    data: components.TensorDataBatch = field(
        metadata={"component": "required"},
        converter=components.TensorDataBatch._required,  # type: ignore[misc]
    )
    # The tensor data
    #
    # (Docstring intentionally commented out to hide this field from the docs)

    __str__ = Archetype.__str__
    __repr__ = Archetype.__repr__  # type: ignore[assignment]

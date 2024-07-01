(function() {var type_impls = {
"re_renderer":[],
"rerun":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-NativeType-for-i16\" class=\"impl\"><a href=\"#impl-NativeType-for-i16\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"rerun/external/arrow2/types/trait.NativeType.html\" title=\"trait rerun::external::arrow2::types::NativeType\">NativeType</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.i16.html\">i16</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedconstant.PRIMITIVE\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.PRIMITIVE\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"rerun/external/arrow2/types/trait.NativeType.html#associatedconstant.PRIMITIVE\" class=\"constant\">PRIMITIVE</a>: <a class=\"enum\" href=\"rerun/external/arrow2/datatypes/enum.PrimitiveType.html\" title=\"enum rerun::external::arrow2::datatypes::PrimitiveType\">PrimitiveType</a> = PrimitiveType::Int16</h4></section></summary><div class='docblock'>The corresponding variant of <a href=\"rerun/external/arrow2/datatypes/enum.PrimitiveType.html\" title=\"enum rerun::external::arrow2::datatypes::PrimitiveType\"><code>PrimitiveType</code></a>.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Bytes\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Bytes\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"rerun/external/arrow2/types/trait.NativeType.html#associatedtype.Bytes\" class=\"associatedtype\">Bytes</a> = [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.array.html\">2</a>]</h4></section></summary><div class='docblock'>Type denoting its representation as bytes.\nThis is <code>[u8; N]</code> where <code>N = size_of::&lt;T&gt;</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.to_le_bytes\" class=\"method trait-impl\"><a href=\"#method.to_le_bytes\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rerun/external/arrow2/types/trait.NativeType.html#tymethod.to_le_bytes\" class=\"fn\">to_le_bytes</a>(&amp;self) -&gt; &lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.i16.html\">i16</a> as <a class=\"trait\" href=\"rerun/external/arrow2/types/trait.NativeType.html\" title=\"trait rerun::external::arrow2::types::NativeType\">NativeType</a>&gt;::<a class=\"associatedtype\" href=\"rerun/external/arrow2/types/trait.NativeType.html#associatedtype.Bytes\" title=\"type rerun::external::arrow2::types::NativeType::Bytes\">Bytes</a></h4></section></summary><div class='docblock'>To bytes in little endian</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.to_be_bytes\" class=\"method trait-impl\"><a href=\"#method.to_be_bytes\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rerun/external/arrow2/types/trait.NativeType.html#tymethod.to_be_bytes\" class=\"fn\">to_be_bytes</a>(&amp;self) -&gt; &lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.i16.html\">i16</a> as <a class=\"trait\" href=\"rerun/external/arrow2/types/trait.NativeType.html\" title=\"trait rerun::external::arrow2::types::NativeType\">NativeType</a>&gt;::<a class=\"associatedtype\" href=\"rerun/external/arrow2/types/trait.NativeType.html#associatedtype.Bytes\" title=\"type rerun::external::arrow2::types::NativeType::Bytes\">Bytes</a></h4></section></summary><div class='docblock'>To bytes in big endian</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_le_bytes\" class=\"method trait-impl\"><a href=\"#method.from_le_bytes\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rerun/external/arrow2/types/trait.NativeType.html#tymethod.from_le_bytes\" class=\"fn\">from_le_bytes</a>(bytes: &lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.i16.html\">i16</a> as <a class=\"trait\" href=\"rerun/external/arrow2/types/trait.NativeType.html\" title=\"trait rerun::external::arrow2::types::NativeType\">NativeType</a>&gt;::<a class=\"associatedtype\" href=\"rerun/external/arrow2/types/trait.NativeType.html#associatedtype.Bytes\" title=\"type rerun::external::arrow2::types::NativeType::Bytes\">Bytes</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.i16.html\">i16</a></h4></section></summary><div class='docblock'>From bytes in little endian</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_be_bytes\" class=\"method trait-impl\"><a href=\"#method.from_be_bytes\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rerun/external/arrow2/types/trait.NativeType.html#tymethod.from_be_bytes\" class=\"fn\">from_be_bytes</a>(bytes: &lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.i16.html\">i16</a> as <a class=\"trait\" href=\"rerun/external/arrow2/types/trait.NativeType.html\" title=\"trait rerun::external::arrow2::types::NativeType\">NativeType</a>&gt;::<a class=\"associatedtype\" href=\"rerun/external/arrow2/types/trait.NativeType.html#associatedtype.Bytes\" title=\"type rerun::external::arrow2::types::NativeType::Bytes\">Bytes</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.i16.html\">i16</a></h4></section></summary><div class='docblock'>From bytes in big endian</div></details></div></details>","NativeType","rerun::external::re_renderer::DepthOffset"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-DictionaryKey-for-i16\" class=\"impl\"><a href=\"#impl-DictionaryKey-for-i16\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"rerun/external/arrow2/array/trait.DictionaryKey.html\" title=\"trait rerun::external::arrow2::array::DictionaryKey\">DictionaryKey</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.i16.html\">i16</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedconstant.KEY_TYPE\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.KEY_TYPE\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"rerun/external/arrow2/array/trait.DictionaryKey.html#associatedconstant.KEY_TYPE\" class=\"constant\">KEY_TYPE</a>: <a class=\"enum\" href=\"rerun/external/arrow2/datatypes/enum.IntegerType.html\" title=\"enum rerun::external::arrow2::datatypes::IntegerType\">IntegerType</a> = IntegerType::Int16</h4></section></summary><div class='docblock'>The corresponding <a href=\"rerun/external/arrow2/datatypes/enum.IntegerType.html\" title=\"enum rerun::external::arrow2::datatypes::IntegerType\"><code>IntegerType</code></a> of this key</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_usize\" class=\"method trait-impl\"><a href=\"#method.as_usize\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a href=\"rerun/external/arrow2/array/trait.DictionaryKey.html#method.as_usize\" class=\"fn\">as_usize</a>(self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Represents this key as a <code>usize</code>. <a href=\"rerun/external/arrow2/array/trait.DictionaryKey.html#method.as_usize\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.always_fits_usize\" class=\"method trait-impl\"><a href=\"#method.always_fits_usize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rerun/external/arrow2/array/trait.DictionaryKey.html#method.always_fits_usize\" class=\"fn\">always_fits_usize</a>() -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>If the key type always can be converted to <code>usize</code>.</div></details></div></details>","DictionaryKey","rerun::external::re_renderer::DepthOffset"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Simd-for-i16\" class=\"impl\"><a href=\"#impl-Simd-for-i16\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"rerun/external/arrow2/types/simd/trait.Simd.html\" title=\"trait rerun::external::arrow2::types::simd::Simd\">Simd</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.i16.html\">i16</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Simd\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Simd\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"rerun/external/arrow2/types/simd/trait.Simd.html#associatedtype.Simd\" class=\"associatedtype\">Simd</a> = <a class=\"struct\" href=\"rerun/external/arrow2/types/simd/struct.i16x32.html\" title=\"struct rerun::external::arrow2::types::simd::i16x32\">i16x32</a></h4></section></summary><div class='docblock'>The SIMD type associated with this trait.\nThis type supports SIMD operations</div></details></div></details>","Simd","rerun::external::re_renderer::DepthOffset"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Index-for-i16\" class=\"impl\"><a href=\"#impl-Index-for-i16\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"rerun/external/arrow2/types/trait.Index.html\" title=\"trait rerun::external::arrow2::types::Index\">Index</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.i16.html\">i16</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.to_usize\" class=\"method trait-impl\"><a href=\"#method.to_usize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rerun/external/arrow2/types/trait.Index.html#tymethod.to_usize\" class=\"fn\">to_usize</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Convert itself to <a href=\"https://doc.rust-lang.org/1.76.0/std/primitive.usize.html\" title=\"primitive usize\"><code>usize</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_usize\" class=\"method trait-impl\"><a href=\"#method.from_usize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rerun/external/arrow2/types/trait.Index.html#tymethod.from_usize\" class=\"fn\">from_usize</a>(value: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.usize.html\">usize</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.i16.html\">i16</a>&gt;</h4></section></summary><div class='docblock'>Convert itself from <a href=\"https://doc.rust-lang.org/1.76.0/std/primitive.usize.html\" title=\"primitive usize\"><code>usize</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_as_usize\" class=\"method trait-impl\"><a href=\"#method.from_as_usize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rerun/external/arrow2/types/trait.Index.html#tymethod.from_as_usize\" class=\"fn\">from_as_usize</a>(value: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.usize.html\">usize</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.i16.html\">i16</a></h4></section></summary><div class='docblock'>Convert itself from <a href=\"https://doc.rust-lang.org/1.76.0/std/primitive.usize.html\" title=\"primitive usize\"><code>usize</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.range\" class=\"method trait-impl\"><a href=\"#method.range\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rerun/external/arrow2/types/trait.Index.html#method.range\" class=\"fn\">range</a>(start: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.usize.html\">usize</a>, end: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.usize.html\">usize</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"rerun/external/arrow2/types/struct.IndexRange.html\" title=\"struct rerun::external::arrow2::types::IndexRange\">IndexRange</a>&lt;Self&gt;&gt;</h4></section></summary><div class='docblock'>An iterator from (inclusive) <code>start</code> to (exclusive) <code>end</code>.</div></details></div></details>","Index","rerun::external::re_renderer::DepthOffset"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SizeBytes-for-i16\" class=\"impl\"><a class=\"src rightside\" href=\"src/re_types_core/size_bytes.rs.html#206\">source</a><a href=\"#impl-SizeBytes-for-i16\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"rerun/trait.SizeBytes.html\" title=\"trait rerun::SizeBytes\">SizeBytes</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.i16.html\">i16</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.heap_size_bytes\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/re_types_core/size_bytes.rs.html#206\">source</a><a href=\"#method.heap_size_bytes\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rerun/trait.SizeBytes.html#tymethod.heap_size_bytes\" class=\"fn\">heap_size_bytes</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u64.html\">u64</a></h4></section></summary><div class='docblock'>Returns the total size of <code>self</code> on the heap, in bytes.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_pod\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/re_types_core/size_bytes.rs.html#206\">source</a><a href=\"#method.is_pod\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rerun/trait.SizeBytes.html#method.is_pod\" class=\"fn\">is_pod</a>() -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Is <code>Self</code> just plain old data? <a href=\"rerun/trait.SizeBytes.html#method.is_pod\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.total_size_bytes\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/re_types_core/size_bytes.rs.html#15\">source</a><a href=\"#method.total_size_bytes\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rerun/trait.SizeBytes.html#method.total_size_bytes\" class=\"fn\">total_size_bytes</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u64.html\">u64</a></h4></section></summary><div class='docblock'>Returns the total size of <code>self</code> in bytes, accounting for both stack and heap space.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.stack_size_bytes\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/re_types_core/size_bytes.rs.html#23\">source</a><a href=\"#method.stack_size_bytes\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rerun/trait.SizeBytes.html#method.stack_size_bytes\" class=\"fn\">stack_size_bytes</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u64.html\">u64</a></h4></section></summary><div class='docblock'>Returns the total size of <code>self</code> on the stack, in bytes. <a href=\"rerun/trait.SizeBytes.html#method.stack_size_bytes\">Read more</a></div></details></div></details>","SizeBytes","rerun::external::re_renderer::DepthOffset"],["<section id=\"impl-IsEnabled-for-i16\" class=\"impl\"><a href=\"#impl-IsEnabled-for-i16\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"rerun/external/re_viewer_context/external/nohash_hasher/trait.IsEnabled.html\" title=\"trait rerun::external::re_viewer_context::external::nohash_hasher::IsEnabled\">IsEnabled</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.i16.html\">i16</a></h3></section>","IsEnabled","rerun::external::re_renderer::DepthOffset"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TensorDataTypeTrait-for-i16\" class=\"impl\"><a class=\"src rightside\" href=\"src/re_types/tensor_data.rs.html#261\">source</a><a href=\"#impl-TensorDataTypeTrait-for-i16\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"rerun/external/re_types/tensor_data/trait.TensorDataTypeTrait.html\" title=\"trait rerun::external::re_types::tensor_data::TensorDataTypeTrait\">TensorDataTypeTrait</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.i16.html\">i16</a></h3></section></summary><div class=\"impl-items\"><section id=\"associatedconstant.DTYPE\" class=\"associatedconstant trait-impl\"><a class=\"src rightside\" href=\"src/re_types/tensor_data.rs.html#262\">source</a><a href=\"#associatedconstant.DTYPE\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"rerun/external/re_types/tensor_data/trait.TensorDataTypeTrait.html#associatedconstant.DTYPE\" class=\"constant\">DTYPE</a>: <a class=\"enum\" href=\"rerun/external/re_types/tensor_data/enum.TensorDataType.html\" title=\"enum rerun::external::re_types::tensor_data::TensorDataType\">TensorDataType</a> = TensorDataType::I16</h4></section></div></details>","TensorDataTypeTrait","rerun::external::re_renderer::DepthOffset"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Primitive-for-i16\" class=\"impl\"><a href=\"#impl-Primitive-for-i16\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"rerun/external/image/trait.Primitive.html\" title=\"trait rerun::external::image::Primitive\">Primitive</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.i16.html\">i16</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedconstant.DEFAULT_MAX_VALUE\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.DEFAULT_MAX_VALUE\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"rerun/external/image/trait.Primitive.html#associatedconstant.DEFAULT_MAX_VALUE\" class=\"constant\">DEFAULT_MAX_VALUE</a>: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.i16.html\">i16</a> = 32_767i16</h4></section></summary><div class='docblock'>The maximum value for this type of primitive within the context of color.\nFor floats, the maximum is <code>1.0</code>, whereas the integer types inherit their usual maximum values.</div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.DEFAULT_MIN_VALUE\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.DEFAULT_MIN_VALUE\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"rerun/external/image/trait.Primitive.html#associatedconstant.DEFAULT_MIN_VALUE\" class=\"constant\">DEFAULT_MIN_VALUE</a>: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.i16.html\">i16</a> = -32_768i16</h4></section></summary><div class='docblock'>The minimum value for this type of primitive within the context of color.\nFor floats, the minimum is <code>0.0</code>, whereas the integer types inherit their usual minimum values.</div></details></div></details>","Primitive","rerun::external::re_renderer::DepthOffset"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-NumExt-for-i16\" class=\"impl\"><a href=\"#impl-NumExt-for-i16\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"rerun/external/eframe/egui/trait.NumExt.html\" title=\"trait rerun::external::eframe::egui::NumExt\">NumExt</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.i16.html\">i16</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.at_least\" class=\"method trait-impl\"><a href=\"#method.at_least\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rerun/external/eframe/egui/trait.NumExt.html#tymethod.at_least\" class=\"fn\">at_least</a>(self, lower_limit: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.i16.html\">i16</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.i16.html\">i16</a></h4></section></summary><div class='docblock'>More readable version of <code>self.max(lower_limit)</code></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.at_most\" class=\"method trait-impl\"><a href=\"#method.at_most\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rerun/external/eframe/egui/trait.NumExt.html#tymethod.at_most\" class=\"fn\">at_most</a>(self, upper_limit: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.i16.html\">i16</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.i16.html\">i16</a></h4></section></summary><div class='docblock'>More readable version of <code>self.min(upper_limit)</code></div></details></div></details>","NumExt","rerun::external::re_renderer::DepthOffset"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Numeric-for-i16\" class=\"impl\"><a href=\"#impl-Numeric-for-i16\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"rerun/external/eframe/egui/epaint/emath/trait.Numeric.html\" title=\"trait rerun::external::eframe::egui::epaint::emath::Numeric\">Numeric</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.i16.html\">i16</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedconstant.INTEGRAL\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.INTEGRAL\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"rerun/external/eframe/egui/epaint/emath/trait.Numeric.html#associatedconstant.INTEGRAL\" class=\"constant\">INTEGRAL</a>: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.bool.html\">bool</a> = true</h4></section></summary><div class='docblock'>Is this an integer type?</div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.MIN\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.MIN\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"rerun/external/eframe/egui/epaint/emath/trait.Numeric.html#associatedconstant.MIN\" class=\"constant\">MIN</a>: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.i16.html\">i16</a> = -32_768i16</h4></section></summary><div class='docblock'>Smallest finite value</div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.MAX\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.MAX\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"rerun/external/eframe/egui/epaint/emath/trait.Numeric.html#associatedconstant.MAX\" class=\"constant\">MAX</a>: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.i16.html\">i16</a> = 32_767i16</h4></section></summary><div class='docblock'>Largest finite value</div></details><section id=\"method.to_f64\" class=\"method trait-impl\"><a href=\"#method.to_f64\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rerun/external/eframe/egui/epaint/emath/trait.Numeric.html#tymethod.to_f64\" class=\"fn\">to_f64</a>(self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.f64.html\">f64</a></h4></section><section id=\"method.from_f64\" class=\"method trait-impl\"><a href=\"#method.from_f64\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rerun/external/eframe/egui/epaint/emath/trait.Numeric.html#tymethod.from_f64\" class=\"fn\">from_f64</a>(num: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.f64.html\">f64</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.i16.html\">i16</a></h4></section></div></details>","Numeric","rerun::external::re_renderer::DepthOffset"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()
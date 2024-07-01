(function() {var type_impls = {
"rerun":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SizeBytes-for-(T,+U)\" class=\"impl\"><a class=\"src rightside\" href=\"src/re_types_core/size_bytes.rs.html#216-219\">source</a><a href=\"#impl-SizeBytes-for-(T,+U)\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, U&gt; <a class=\"trait\" href=\"rerun/trait.SizeBytes.html\" title=\"trait rerun::SizeBytes\">SizeBytes</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.tuple.html\">(T, U)</a><div class=\"where\">where\n    T: <a class=\"trait\" href=\"rerun/trait.SizeBytes.html\" title=\"trait rerun::SizeBytes\">SizeBytes</a>,\n    U: <a class=\"trait\" href=\"rerun/trait.SizeBytes.html\" title=\"trait rerun::SizeBytes\">SizeBytes</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.heap_size_bytes\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/re_types_core/size_bytes.rs.html#222\">source</a><a href=\"#method.heap_size_bytes\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rerun/trait.SizeBytes.html#tymethod.heap_size_bytes\" class=\"fn\">heap_size_bytes</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u64.html\">u64</a></h4></section></summary><div class='docblock'>Returns the total size of <code>self</code> on the heap, in bytes.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_pod\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/re_types_core/size_bytes.rs.html#228\">source</a><a href=\"#method.is_pod\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rerun/trait.SizeBytes.html#method.is_pod\" class=\"fn\">is_pod</a>() -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Is <code>Self</code> just plain old data? <a href=\"rerun/trait.SizeBytes.html#method.is_pod\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.total_size_bytes\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/re_types_core/size_bytes.rs.html#15\">source</a><a href=\"#method.total_size_bytes\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rerun/trait.SizeBytes.html#method.total_size_bytes\" class=\"fn\">total_size_bytes</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u64.html\">u64</a></h4></section></summary><div class='docblock'>Returns the total size of <code>self</code> in bytes, accounting for both stack and heap space.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.stack_size_bytes\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/re_types_core/size_bytes.rs.html#23\">source</a><a href=\"#method.stack_size_bytes\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rerun/trait.SizeBytes.html#method.stack_size_bytes\" class=\"fn\">stack_size_bytes</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u64.html\">u64</a></h4></section></summary><div class='docblock'>Returns the total size of <code>self</code> on the stack, in bytes. <a href=\"rerun/trait.SizeBytes.html#method.stack_size_bytes\">Read more</a></div></details></div></details>","SizeBytes","rerun::external::eframe::egui_wgpu::wgpu::core::device::BufferMapPendingClosure","rerun::external::eframe::egui_wgpu::wgpu::core::naga::SpanContext"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()
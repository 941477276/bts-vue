const t="数据录入",d="data_input",n="Input",e="输入框",a="input",o=`<p>通过鼠标或键盘输入内容</p>
`,r=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>Input 属性</h3>
<div class="table-responsive"><table class="api-table table table-hover">
<thead class="thead-light">
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>modelValue(v-model)</td>
<td>输入框内容</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>id</td>
<td>输入框的 id</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用状态，默认为 false</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>readonly</td>
<td>是否只读，默认为 false</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>showPassword</td>
<td>是否显示切换密码图标，默认为 false</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>clearable</td>
<td>是否可以清空内容，默认为 false</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>deliveContextToFormItem</td>
<td>是否向<code>form-item</code>组件传递上下文信息，默认为 true</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>size</td>
<td>输入框大小。可选 <code>lg</code>、<code>sm</code></td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>type</td>
<td>声明 input 类型，同原生 input 标签的 type 属性，见：<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#%E5%B1%9E%E6%80%A7">MDN</a>(请直接使用 <code>&lt;a-textarea /&gt;</code> 代替 <code>type=&quot;textarea&quot;</code>)。</td>
<td>string</td>
<td><code>text</code></td>
</tr>
<tr>
<td>inputmode</td>
<td>输入框原生的inputmode属性</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>inputStyle</td>
<td>input输入框的样式</td>
<td>object</td>
<td><code>{}</code></td>
</tr>
<tr>
<td>placeholder</td>
<td>输入框的placeholder属性</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>name</td>
<td>输入框的name属性</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>ariaLabel</td>
<td>输入框的ariaLabel属性</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>compositionDisable</td>
<td>是否不对input当composition事件进行拦截，当值为true时在输入中文、日文等其他非英文时modelValue的值将会在input事件中实时更新</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>nativeAttrs</td>
<td>需要添加到input元素上的其他属性</td>
<td>object</td>
<td><code>{}</code></td>
</tr>
<tr>
<td>minlength</td>
<td>最小长度</td>
<td>number</td>
<td></td>
</tr>
<tr>
<td>maxlength</td>
<td>最大长度</td>
<td>number</td>
<td></td>
</tr>
<tr>
<td>prefix</td>
<td>带有前缀图标的 input</td>
<td><code>string</code>/<code>slot</code></td>
<td></td>
</tr>
<tr>
<td>showCount</td>
<td>是否显示字数</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>autoHeight</td>
<td>是否自动计算高度，仅在<code>type=textarea</code>时有效</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>minHeight</td>
<td>最小高度，值若小于等于0则无效，仅在<code>type=textarea</code>时有效</td>
<td>number</td>
<td>0</td>
</tr>
<tr>
<td>textareaEmptyHeightIsMinHeight</td>
<td>textarea值为空时的高度是否为minHeight，仅在<code>type=textarea</code>时有效</td>
<td>boolean</td>
<td>true</td>
</tr>
</tbody>
</table></div>
<h3>Input 事件</h3>
<div class="table-responsive"><table class="api-table table table-hover">
<thead class="thead-light">
<tr>
<th>事件名称</th>
<th>说明</th>
<th>回调参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>输入框内容变化时的回调</td>
<td>function(e)</td>
</tr>
<tr>
<td>clear</td>
<td>输入内容清空时到回调</td>
<td>function()</td>
</tr>
</tbody>
</table></div>
<h3>Input 插槽</h3>
<div class="table-responsive"><table class="api-table table table-hover">
<thead class="thead-light">
<tr>
<th>插槽名称</th>
<th>说明</th>
<th>版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>prefix</td>
<td>输入框头部内容</td>
<td></td>
</tr>
<tr>
<td>suffix</td>
<td>输入框尾部内容</td>
<td></td>
</tr>
<tr>
<td>prepend</td>
<td>输入框内容前置内容</td>
<td></td>
</tr>
<tr>
<td>append</td>
<td>输入框内容后置内容</td>
<td></td>
</tr>
<tr>
<td>text-count</td>
<td>输入框字数插槽，参数为: <code>{count: number, maxCount: number}</code></td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>Input 函数</h3>
<div class="table-responsive"><table class="api-table table table-hover">
<thead class="thead-light">
<tr>
<th>函数名称</th>
<th>说明</th>
<th>参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>setValidateStatus</td>
<td>设置输入框的校验状态，在封装自定义组件校验时非常有用</td>
<td><code>status</code>，可选值有：<code>validating</code>、<code>success</code>、<code>error</code></td>
</tr>
</tbody>
</table></div>
`,l={type:t,typeCode:d,title:n,subtitle:e,componentName:a,description:o,apiContent:r};export{r as apiContent,a as componentName,l as default,o as description,e as subtitle,n as title,t as type,d as typeCode};

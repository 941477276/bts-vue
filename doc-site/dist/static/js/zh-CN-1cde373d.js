const t="数据录入",n="data_input",d="InputNumber",e="数字输入框",r="input-number",a=`<p>通过鼠标或键盘，输入范围内的数值</p>
`,o=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>InputNumber 属性</h3>
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
<td>数字输入框内容</td>
<td><code>string</code>/<code>number</code></td>
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
<td>输入框类型</td>
<td><code>text</code>/<code>number</code></td>
<td>text</td>
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
<td>{}</td>
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
<td>keyboard</td>
<td>是否可以通过键盘改变值</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>step</td>
<td>步长，每次改变的步数，可以为小数</td>
<td>number</td>
<td>1</td>
</tr>
<tr>
<td>min</td>
<td>最小值</td>
<td>number</td>
<td></td>
</tr>
<tr>
<td>max</td>
<td>最大值</td>
<td>number</td>
<td></td>
</tr>
<tr>
<td>prefix</td>
<td>前缀文本</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>formatter</td>
<td>指定输入框展示值的格式</td>
<td>(value: number｜string) =&gt; string</td>
<td></td>
</tr>
<tr>
<td>parser</td>
<td>指定从 formatter 里转换回数字的方式，和 formatter 配合使用</td>
<td>(value: string) =&gt; number</td>
<td></td>
</tr>
<tr>
<td>precision</td>
<td>数值精度</td>
<td>number</td>
<td></td>
</tr>
<tr>
<td>controlInner</td>
<td>控制按钮是否在输入框内部</td>
<td>boolean</td>
<td>true</td>
</tr>
</tbody>
</table></div>
<h3>InputNumber 事件</h3>
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
<td>function(value: any)</td>
</tr>
</tbody>
</table></div>
<h3>InputNumber 插槽</h3>
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
<td>prepend</td>
<td>输入框内容前置内容</td>
<td></td>
</tr>
<tr>
<td>append</td>
<td>输入框内容后置内容</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>InputNumber 函数</h3>
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
<td>设置输入框的校验状态</td>
<td><code>status</code>，可选值有：<code>validating</code>、<code>success</code>、<code>error</code></td>
</tr>
</tbody>
</table></div>
`,l={type:t,typeCode:n,title:d,subtitle:e,componentName:r,description:a,apiContent:o};export{o as apiContent,r as componentName,l as default,a as description,e as subtitle,d as title,t as type,n as typeCode};

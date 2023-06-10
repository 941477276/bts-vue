const t="数据录入",d="data_input",n="Checkbox",e="多选框",a="checkbox",o=`<p>多选框</p>
`,r=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>Checkbox 属性</h3>
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
<td>单选框的值</td>
<td><code>string</code>/<code>number</code>/<code>boolean</code>/<code>array</code></td>
<td></td>
</tr>
<tr>
<td>checked</td>
<td>是否选中状态</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用状态</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>indeterminate</td>
<td>是否不确定状态</td>
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
<td>trueValue</td>
<td>选中时的值</td>
<td><code>string</code>/<code>number</code></td>
<td></td>
</tr>
<tr>
<td>falseValue</td>
<td>未选中时的值</td>
<td><code>string</code>/<code>number</code></td>
<td></td>
</tr>
<tr>
<td>label</td>
<td>radio显示名称</td>
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
<td>id</td>
<td>单选框的 id</td>
<td>string</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>Checkbox 事件</h3>
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
<td>多选框值变化时的回调</td>
<td>function(e: Event, value: any)</td>
</tr>
</tbody>
</table></div>
<h3>Checkbox 函数</h3>
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
<td>设置多选框的校验状态</td>
<td><code>status</code>，可选值有：<code>validating</code>/<code>success</code>/<code>error</code></td>
</tr>
</tbody>
</table></div>
<h3>CheckboxGroup 属性</h3>
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
<td>多选框的值，当值为<code>string</code>类型时会自动将值按逗号分割成数组</td>
<td><code>string</code>/<code>array</code></td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用状态，默认为 false</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>elTag</td>
<td>单选框组渲染元素的标签名称</td>
<td>string</td>
<td>div</td>
</tr>
<tr>
<td>min</td>
<td>可被勾选的 checkbox 的最小数量</td>
<td>number</td>
<td></td>
</tr>
<tr>
<td>max</td>
<td>可被勾选的 checkbox 的最大数量</td>
<td>number</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>CheckboxGroup 事件</h3>
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
<td>多选框值变化时的回调</td>
<td>function(value: [any])</td>
</tr>
</tbody>
</table></div>
`,l={type:t,typeCode:d,title:n,subtitle:e,componentName:a,description:o,apiContent:r};export{r as apiContent,a as componentName,l as default,o as description,e as subtitle,n as title,t as type,d as typeCode};

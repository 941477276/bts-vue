const t="数据录入",n="data_input",d="Radio",e="单选框",a="radio",o=`<p>单选框</p>
`,l=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>Radio 属性</h3>
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
<td><code>string</code>/<code>number</code>/<code>boolean</code></td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用状态，默认为 false</td>
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
<h3>Radio 事件</h3>
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
<td>单选框值变化时的回调</td>
<td>function(e: Event, value: any)</td>
</tr>
</tbody>
</table></div>
<h3>Radio 函数</h3>
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
<td>设置单选框的校验状态</td>
<td><code>status</code>，可选值有：<code>validating</code>/<code>success</code>/<code>error</code></td>
</tr>
</tbody>
</table></div>
<h3>RadioGroup 属性</h3>
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
<td><code>string</code>/<code>number</code>/<code>boolean</code></td>
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
</tbody>
</table></div>
<h3>RadioGroup 事件</h3>
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
<td>单选框值变化时的回调</td>
<td>function(value: any)</td>
</tr>
</tbody>
</table></div>
`,h={type:t,typeCode:n,title:d,subtitle:e,componentName:a,description:o,apiContent:l};export{l as apiContent,a as componentName,h as default,o as description,e as subtitle,d as title,t as type,n as typeCode};

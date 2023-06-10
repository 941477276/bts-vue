const t="通用",d="generic",n="Button",e="按钮",o="button",a=`<p>常用的按钮</p>
`,l=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>Button 属性</h3>
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
<td>type</td>
<td>按钮类型</td>
<td><code>primary</code>/ <code>secondary</code>/ <code>success</code>/ <code>danger</code>/ <code>warning</code>/ <code>info</code>/ <code>light</code>/ <code>dark</code> /<code>link</code></td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用状态，默认为 false</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>loading</td>
<td>是否为加载中状态，默认为 false</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>tag</td>
<td>标签名称</td>
<td>string</td>
<td>button</td>
</tr>
<tr>
<td>nativeType</td>
<td>原生按钮类型</td>
<td>string</td>
<td>button</td>
</tr>
<tr>
<td>clearable</td>
<td>是否可以清空内容，默认为 false</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>size</td>
<td>输入框大小。可选 <code>lg</code>、<code>sm</code></td>
<td>string</td>
<td>\`\`</td>
</tr>
<tr>
<td>plain</td>
<td>是否为朴素按钮</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>block</td>
<td>是否为块级按钮，块级按钮宽占满整个父级</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>round</td>
<td>是否圆角按钮</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>squared</td>
<td>是否平角按钮</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>disabledOnLoading</td>
<td>加载状态时按钮是否禁用</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>dropdownToggle</td>
<td>是否为下拉菜单切换按钮</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>showToggleSplit</td>
<td>是否为显示下拉菜单切换按钮分割线</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h3>Button 插槽</h3>
<div class="table-responsive"><table class="api-table table table-hover">
<thead class="thead-light">
<tr>
<th>插槽名称</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>loading</td>
<td>加载状态时的内容</td>
</tr>
</tbody>
</table></div>
`,r={type:t,typeCode:d,title:n,subtitle:e,componentName:o,description:a,apiContent:l};export{l as apiContent,o as componentName,r as default,a as description,e as subtitle,n as title,t as type,d as typeCode};

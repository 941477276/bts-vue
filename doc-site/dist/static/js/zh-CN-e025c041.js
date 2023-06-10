const t="反馈",n="feedback",d="Alert",e="警告",o="alert",a=`<p>警告提示，用于页面中展示重要的提示信息</p>
`,r=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>Alert 属性</h3>
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
<td>颜色类型</td>
<td><code>primary</code>/ <code>secondary</code>/ <code>success</code>/ <code>danger</code>/ <code>warning</code>/ <code>info</code>/ <code>light</code>/ <code>dark</code></td>
<td>primary</td>
</tr>
<tr>
<td>title</td>
<td>标题</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>description</td>
<td>辅助性文字。也可通过<code>description</code>插槽传入</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>closeable</td>
<td>是否可关闭</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>closeText</td>
<td>关闭按钮文本</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>beforeClose</td>
<td>关闭前的回调，若回调返回false，或返回Promise.reject则不会关闭</td>
<td>function</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>Alert 事件</h3>
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
<td>close</td>
<td>警告提示关闭时触发</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>Alert 插槽</h3>
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
<td>icon</td>
<td>图标插槽</td>
<td></td>
</tr>
<tr>
<td>description</td>
<td>辅助性文字插槽</td>
<td></td>
</tr>
<tr>
<td>default</td>
<td>在<code>props.description</code>有值，或者有<code>description</code>插槽时为标题插槽，否则为内容插槽</td>
<td></td>
</tr>
</tbody>
</table></div>
`,c={type:t,typeCode:n,title:d,subtitle:e,componentName:o,description:a,apiContent:r};export{r as apiContent,o as componentName,c as default,a as description,e as subtitle,d as title,t as type,n as typeCode};

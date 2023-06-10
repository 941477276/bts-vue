const t="数据展示",d="data_display",e="Tag",n="标签",o="tag",c=`<p>标签通常用来展示一些属性，或进行分类，或标记</p>
`,a=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>Tag 属性</h3>
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
<td>size</td>
<td>tag大小</td>
<td><code>lg</code>/<code>sm</code>/<code>mini</code></td>
<td></td>
</tr>
<tr>
<td>effect</td>
<td>主题</td>
<td><code>dark</code>/<code>light</code>/<code>plain</code></td>
<td>light</td>
</tr>
<tr>
<td>color</td>
<td>自定义颜色</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>closeable</td>
<td>是否可关闭</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h3>Tag 事件</h3>
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
<td>当标签关闭时触发，若函数返回<code>Promise</code>那么标签将在Promise状态变为<code>fulfilled</code>后关闭。若函数返回<code>false</code>标签将不会关闭</td>
<td></td>
</tr>
</tbody>
</table></div>
`,s={type:t,typeCode:d,title:e,subtitle:n,componentName:o,description:c,apiContent:a};export{a as apiContent,o as componentName,s as default,c as description,n as subtitle,e as title,t as type,d as typeCode};

const t="导航",n="navigation",d="Breadcrumb",e="面包屑导航",a="breadcrumb",o=`<p>显示当前页面的路径，并能向上返回</p>
`,r=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>Breadcrumb 属性</h3>
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
<td>separator</td>
<td>分割符</td>
<td>string</td>
<td>/</td>
</tr>
</tbody>
</table></div>
<h3>BreadcrumbItem 属性</h3>
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
<td>to</td>
<td>路由跳转对象，同<code>vue-router</code>的<code>to</code></td>
<td><code>string</code>/<code>object</code></td>
<td>/</td>
</tr>
<tr>
<td>replace</td>
<td>是否不将导航在历史记录中留下</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>isUrl</td>
<td>是否为普通链接</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>target</td>
<td><code>a</code>标签的target属性</td>
<td>string</td>
<td></td>
</tr>
</tbody>
</table></div>
`,s={type:t,typeCode:n,title:d,subtitle:e,componentName:a,description:o,apiContent:r};export{r as apiContent,a as componentName,s as default,o as description,e as subtitle,d as title,t as type,n as typeCode};

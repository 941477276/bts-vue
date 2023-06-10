const t="navigation",e="navigation",n="Breadcrumb",d="Breadcrumbs",a="breadcrumb",r=`<p>Display the path of the current page and return upwards</p>
`,o=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>Breadcrumb Properties</h3>
<div class="table-responsive"><table class="api-table table table-hover">
<thead class="thead-light">
<tr>
<th>Parameter</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>separator</td>
<td>separator</td>
<td>string</td>
<td>/</td>
</tr>
</tbody>
</table></div>
<h3>BreadcrumbItem property</h3>
<div class="table-responsive"><table class="api-table table table-hover">
<thead class="thead-light">
<tr>
<th>Parameter</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>to</td>
<td>Routing jump object, same as <code>to</code></td>
<td><code>string</code>/<code>object</code> of <code>vue-router</code></td>
<td>/</td>
</tr>
<tr>
<td>replace</td>
<td>Whether to not leave the navigation in the history</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>Whether to disable</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>isUrl</td>
<td>Whether it is a normal link</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>target</td>
<td>target attribute of <code>a</code> tag</td>
<td>string</td>
<td></td>
</tr>
</tbody>
</table></div>
`,s={type:t,typeCode:e,title:n,subtitle:d,componentName:a,description:r,apiContent:o};export{o as apiContent,a as componentName,s as default,r as description,d as subtitle,n as title,t as type,e as typeCode};

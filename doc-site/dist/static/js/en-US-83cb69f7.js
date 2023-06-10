const t="data display",e="data_display",d="Tag",n="label",o="tag",a=`<p>Labels are usually used to display some attributes, or to classify, or to mark</p>
`,c=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>Tag attribute</h3>
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
<td>type</td>
<td>button type</td>
<td><code>primary</code>/ <code>secondary</code>/ <code>success</code>/ <code>danger</code>/ <code>warning</code>/ <code>info</code>/ <code>light</code>/ <code>dark</code> /<code>link</code></td>
<td></td>
</tr>
<tr>
<td>size</td>
<td>tag size</td>
<td><code>lg</code>/<code>sm</code>/<code>mini</code></td>
<td></td>
</tr>
<tr>
<td>effect</td>
<td>theme</td>
<td><code>dark</code>/<code>light</code>/<code>plain</code></td>
<td>light</td>
</tr>
<tr>
<td>color</td>
<td>custom color</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>closeable</td>
<td>closeable</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h3>Tag event</h3>
<div class="table-responsive"><table class="api-table table table-hover">
<thead class="thead-light">
<tr>
<th>Event Name</th>
<th>Description</th>
<th>Callback Parameters</th>
</tr>
</thead>
<tbody>
<tr>
<td>close</td>
<td>Triggered when the tag is closed, if the function returns <code>Promise</code> then the tag will be closed after the Promise state becomes <code>fulfilled</code>. If the function returns <code>false</code> the label will not be closed</td>
<td></td>
</tr>
</tbody>
</table></div>
`,s={type:t,typeCode:e,title:d,subtitle:n,componentName:o,description:a,apiContent:c};export{c as apiContent,o as componentName,s as default,a as description,n as subtitle,d as title,t as type,e as typeCode};

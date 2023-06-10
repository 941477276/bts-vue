const t="feedback",n="feedback",e="Alert",d="Warning",o="alert",r=`<p>Warning prompt, used to display important prompt information on the page</p>
`,a=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>Alert property</h3>
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
<td>color type</td>
<td><code>primary</code>/ <code>secondary</code>/ <code>success</code>/ <code>danger</code>/ <code>warning</code>/ <code>info</code>/ <code>light</code>/ <code>dark</code></td>
<td>primary</td>
</tr>
<tr>
<td>title</td>
<td>title</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>description</td>
<td>Auxiliary text. Can also be passed in through the <code>description</code> slot</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>closeable</td>
<td>closeable</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>closeText</td>
<td>close button text</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>beforeClose</td>
<td>The callback before closing, if the callback returns false, or returns Promise.reject, it will not be closed</td>
<td>function</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>Alert Events</h3>
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
<td>Triggered when the warning prompt is closed</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>Alert Slot</h3>
<div class="table-responsive"><table class="api-table table table-hover">
<thead class="thead-light">
<tr>
<th>Slot Name</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>icon</td>
<td>icon slot</td>
<td></td>
</tr>
<tr>
<td>description</td>
<td>Auxiliary text slot</td>
<td></td>
</tr>
<tr>
<td>default</td>
<td>title slot if <code>props.description</code> has value, or <code>description</code> slot, otherwise content slot</td>
<td></td>
</tr>
</tbody>
</table></div>
`,s={type:t,typeCode:n,title:e,subtitle:d,componentName:o,description:r,apiContent:a};export{a as apiContent,o as componentName,s as default,r as description,d as subtitle,e as title,t as type,n as typeCode};

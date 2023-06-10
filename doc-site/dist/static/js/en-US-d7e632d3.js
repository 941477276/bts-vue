const t="data display",e="data_display",n="Collapse",d="Accordion panel",a="collapse",o=`<p>Content area that can be collapsed/expanded</p>
`,l=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>Collapse property</h3>
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
<td>modelValue(v-model)</td>
<td>The name of the currently active panel, you can use <code>v-model</code> two-way binding</td>
<td><code>string</code>/<code>number</code>/<code>string丨number[]</code></td>
<td></td>
</tr>
<tr>
<td>accordion</td>
<td>Whether to enable the accordion mode, after enabling at most one panel at a time</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>simple</td>
<td>Whether it is simple mode</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>headerFocusEffect</td>
<td>Whether to enable the head highlight effect</td>
<td>boolean</td>
<td>true</td>
</tr>
</tbody>
</table></div>
<h3>Collapse event</h3>
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
<td>change</td>
<td>Triggered when the panel is collapsed/expanded</td>
<td>function(name: string, expanded: boolean, value: any)</td>
</tr>
</tbody>
</table></div>
<h3>CollapseItem property</h3>
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
<td>title</td>
<td>title</td>
<td><code>string</code>/<code>number</code></td>
<td></td>
</tr>
<tr>
<td>name</td>
<td>name (the identifier corresponding to the bound value modelValue)</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>showArrow</td>
<td>Whether to show arrows</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>disabled</td>
<td>Whether to disable</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>arrowLeft</td>
<td>whether the arrow is on the left</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h3>CollapseItem slot</h3>
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
<td>title</td>
<td>title</td>
<td></td>
</tr>
</tbody>
</table></div>
`,r={type:t,typeCode:e,title:n,subtitle:d,componentName:a,description:o,apiContent:l};export{l as apiContent,a as componentName,r as default,o as description,d as subtitle,n as title,t as type,e as typeCode};

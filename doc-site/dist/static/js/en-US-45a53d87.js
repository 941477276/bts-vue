const t="universal",n="generic",d="Button",e="button",o="button",a=`<p>Commonly used buttons</p>
`,l=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>Button properties</h3>
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
<td>disabled</td>
<td>Whether to disable the state, the default is false</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>loading</td>
<td>Whether it is loading state, the default is false</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>tag</td>
<td>tag name</td>
<td>string</td>
<td>button</td>
</tr>
<tr>
<td>nativeType</td>
<td>native button type</td>
<td>string</td>
<td>button</td>
</tr>
<tr>
<td>clearable</td>
<td>Whether the content can be cleared, the default is false</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>size</td>
<td>Input box size. optional <code>lg</code>, <code>sm</code></td>
<td>string</td>
<td>\`\`</td>
</tr>
<tr>
<td>plain</td>
<td>Whether it is a plain button</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>block</td>
<td>Whether it is a block-level button, the width of the block-level button occupies the entire parent level</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>round</td>
<td>Whether to round the button</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>squared</td>
<td>whether flat button</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>disabledOnLoading</td>
<td>Whether the button is disabled when the state is loading</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>dropdownToggle</td>
<td>whether it is a dropdown menu toggle button</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>showToggleSplit</td>
<td>Whether to show the split line for the drop-down menu toggle button</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h3>Button slot</h3>
<div class="table-responsive"><table class="api-table table table-hover">
<thead class="thead-light">
<tr>
<th>Slot Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>loading</td>
<td>Contents of the loading state</td>
</tr>
</tbody>
</table></div>
`,s={type:t,typeCode:n,title:d,subtitle:e,componentName:o,description:a,apiContent:l};export{l as apiContent,o as componentName,s as default,a as description,e as subtitle,d as title,t as type,n as typeCode};

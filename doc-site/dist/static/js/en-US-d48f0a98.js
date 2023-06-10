const t="navigation",n="navigation",e="Pagination",d="pagination",a="pagination",o=`<p>Use pagination to separate long lists, and use paging to break up data</p>
`,r=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>Pagination property</h3>
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
<td>pageSize(v-model:pageSize)</td>
<td>The number of items displayed on each page, support v-model</td>
<td>number</td>
<td>10</td>
</tr>
<tr>
<td>currentPage(v-model:currentPage)</td>
<td>current page number, support v-model</td>
<td>number</td>
<td>1</td>
</tr>
<tr>
<td>total</td>
<td>total entries</td>
<td>number</td>
<td></td>
</tr>
<tr>
<td>pageSizes</td>
<td>Option settings for the number of selectors displayed per page</td>
<td>number[]</td>
<td>[10, 20, 30, 40, 50, 100]</td>
</tr>
<tr>
<td>pagerCount</td>
<td>The number of pager buttons that will collapse when the total number of pages exceeds this value (an odd number greater than or equal to 5 and less than or equal to 21)</td>
<td>number</td>
<td>7</td>
</tr>
<tr>
<td>disabledPage</td>
<td>disabled page number</td>
<td>number[]</td>
<td></td>
</tr>
<tr>
<td>size</td>
<td>Input box size. optional <code>lg</code>, <code>sm</code></td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>layout</td>
<td>component layout, subcomponent names separated by commas</td>
<td><code>total</code>/<code>pager</code>/<code>sizes</code>/<code>jumper</code>/<code>slot</code></td>
<td>'total,pager,sizes,jumper,slot'</td>
</tr>
<tr>
<td>prevText</td>
<td>The text of the &quot;previous page&quot; button</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>nextText</td>
<td>text of &quot;next page&quot; button</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>usePrev</td>
<td>whether to display the previous page button</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>useNext</td>
<td>Whether to show the next page button</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>hideOnSinglePage</td>
<td>Whether to hide when there is only one page</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h3>Pagination Events</h3>
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
<td>sizeChange</td>
<td>Triggered when the displayed number of each page changes</td>
<td></td>
</tr>
<tr>
<td>currentChange</td>
<td>Triggered when the current page number changes</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>Pagination slot</h3>
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
<td>prev</td>
<td>Previous button</td>
<td></td>
</tr>
<tr>
<td>next</td>
<td>Next page button</td>
<td></td>
</tr>
</tbody>
</table></div>
`,s={type:t,typeCode:n,title:e,subtitle:d,componentName:a,description:o,apiContent:r};export{r as apiContent,a as componentName,s as default,o as description,d as subtitle,e as title,t as type,n as typeCode};

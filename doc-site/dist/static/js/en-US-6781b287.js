const t="other",e="other",n="BackTop",d="back to top",o="backtop",r=`<p>An action that returns to the top of a page or container</p>
`,a=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>BackTop property</h3>
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
<td>target</td>
<td>Set the element whose scroll event needs to be monitored</td>
<td><code>string(css elector)</code>/<code>object(dom)</code>/<code>() =&gt; dom</code></td>
<td>window</td>
</tr>
<tr>
<td>visibilityHeight</td>
<td>The button will only be displayed when the scroll height reaches this parameter value, which supports fixed value and percentage</td>
<td><code>string</code>/<code>number</code></td>
<td>400</td>
</tr>
<tr>
<td>useFixedPosition</td>
<td>whether to use fixed position</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>duration</td>
<td>Scroll duration, unit: millisecond</td>
<td>number</td>
<td>150</td>
</tr>
<tr>
<td>top</td>
<td>trigger element's style.top value, support fixed value, percentage</td>
<td><code>string</code>/<code>number</code></td>
<td></td>
</tr>
<tr>
<td>right</td>
<td>trigger element's style.right value, support fixed value, percentage</td>
<td><code>string</code>/<code>number</code></td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>BackTop event</h3>
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
<td>complete</td>
<td>Scroll complete event</td>
<td></td>
</tr>
</tbody>
</table></div>
`,s={type:t,typeCode:e,title:n,subtitle:d,componentName:o,description:r,apiContent:a};export{a as apiContent,o as componentName,s as default,r as description,d as subtitle,n as title,t as type,e as typeCode};

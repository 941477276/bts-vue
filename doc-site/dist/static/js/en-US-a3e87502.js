const t="other",e="other",n="RelativeTime",d="relative time",a="relative-time",o=`<p>Displays how long the specified time has passed relative to the current time. It is often used to represent the time description of a few minutes ago, a few hours ago, etc. relative to this moment.</p>
`,r=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>RelativeTime property</h3>
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
<td>time</td>
<td>time</td>
<td><code>string</code>/<code>Date</code>/<code>number</code></td>
<td></td>
</tr>
<tr>
<td>viewType</td>
<td>display type</td>
<td><code>relative</code>/<code>date</code>/<code>datetime</code></td>
<td>relative</td>
</tr>
<tr>
<td>interval</td>
<td>automatic update time, unit: second</td>
<td>number</td>
<td>60</td>
</tr>
<tr>
<td>duration</td>
<td>Scroll duration, unit: millisecond</td>
<td>number</td>
<td>150</td>
</tr>
<tr>
<td>format</td>
<td>format template, only valid for date and datetime</td>
<td>string, refer to <a href="https://day.js.org/docs/en/parse/string-format">dayjs format</a></td>
<td></td>
</tr>
<tr>
<td>lang</td>
<td>language</td>
<td>string, supported languages refer to <a href="https://github.com/iamkun/dayjs/tree/dev/src/locale">dayjs local</a></td>
<td></td>
</tr>
</tbody>
</table></div>
`,i={type:t,typeCode:e,title:n,subtitle:d,componentName:a,description:o,apiContent:r};export{r as apiContent,a as componentName,i as default,o as description,d as subtitle,n as title,t as type,e as typeCode};

const t="feedback",e="feedback",d="Progress",n="progress bar",o="progress",r=`<p>Display the current progress of the operation, informing the user of the current status and expectations</p>
`,a=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>Progress property</h3>
<div class="table-responsive"><table class="api-table table table-hover">
<thead class="thead-light">
<tr>
<th>Parameters</th>
<th>Description</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>percentage</td>
<td>progress value</td>
<td><code>string</code>/<code>number</code></td>
<td>0</td>
</tr>
<tr>
<td>type</td>
<td>Progress bar type</td>
<td><code>line</code>/<code>circle</code>/<code>dashboard</code></td>
<td>line</td>
</tr>
<tr>
<td>multiple</td>
<td>Whether to display multiple progress bars</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>progresses</td>
<td>Multiple progress bars, only valid when <code>multiple=true</code></td>
<td>\`{percentage: number;colorType?: BsColorType;showText?: boolean;color?: string</td>
<td>Array&lt;{color: string;percentage:number} &gt;｜ColorFunctionType;textFormat?: (percentage: number) =&gt; string;striped?: boolean;animated?: boolean;}[]\`</td>
</tr>
<tr>
<td>showText</td>
<td>Whether to display the progress value</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>textFormat</td>
<td>Format the text content of the progress bar</td>
<td>function</td>
<td></td>
</tr>
<tr>
<td>color</td>
<td>Progress bar background color (only valid when type!=line, type is object)</td>
<td><code>string</code>/<code>array</code>/<code>function</code>/<code>object</code></td>
<td></td>
</tr>
<tr>
<td>colorType</td>
<td>Progress bar background color type</td>
<td><code>primary</code>/ <code>secondary</code>/ <code>success</code>/ <code>danger</code>/ <code>warning</code>/ <code>info</code>/ <code>light</code>/ <code>dark</code></td>
<td>primary</td>
</tr>
<tr>
<td>striped</td>
<td>Whether it is a striped progress bar</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>animated</td>
<td>Whether to display stripe animation</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<p><strong><code>type=circle</code></strong></p>
<div class="table-responsive"><table class="api-table table table-hover">
<thead class="thead-light">
<tr>
<th>Parameters</th>
<th>Description</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>strokeWidth</td>
<td>The width of the circular progress bar line, the unit is a percentage of the progress bar canvas width</td>
<td><code>number</code></td>
<td>6</td>
</tr>
<tr>
<td>strokeLinecap</td>
<td>The end style type of the progress bar</td>
<td><code>round</code>/<code>butt</code>/<code>square</code></td>
<td>round</td>
</tr>
<tr>
<td>status</td>
<td>status</td>
<td><code>success</code>/<code>warning</code>/<code>info</code>/<code>danger</code></td>
<td></td>
</tr>
</tbody>
</table></div>
<p><strong><code>type=dashboard</code></strong></p>
<div class="table-responsive"><table class="api-table table table-hover">
<thead class="thead-light">
<tr>
<th>Parameters</th>
<th>Description</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>gapDegree</td>
<td>The gap angle of the dashboard progress bar, the value can be 0 ~ 295</td>
<td><code>number</code></td>
<td>75</td>
</tr>
<tr>
<td>gapPosition</td>
<td>Dashboard progress bar gap position</td>
<td><code>top</code>/<code>left</code>/<code>bottom</code>/<code>right</code></td>
<td>bottom</td>
</tr>
</tbody>
</table></div>
`,s={type:t,typeCode:e,title:d,subtitle:n,componentName:o,description:r,apiContent:a};export{a as apiContent,o as componentName,s as default,r as description,n as subtitle,d as title,t as type,e as typeCode};

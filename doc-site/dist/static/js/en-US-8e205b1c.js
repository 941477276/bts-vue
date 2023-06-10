const t="feedback",e="feedback",n="Progress",d="progress bar",o="progress",r=`<p>Display the current progress of the operation, informing the user of the current status and expectations</p>
`,s=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>Progress property</h3>
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
<td>percentage</td>
<td>progress value</td>
<td><code>string</code>/<code>number</code></td>
<td>0</td>
</tr>
<tr>
<td>multiple</td>
<td>Whether to display multiple progress bars</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>progresses</td>
<td>multiple progress bars, only valid when <code>multiple=true</code></td>
<td><code>{percentage: number;colorType?: BsColorType;showText?: boolean;color?: string｜Array&lt;{color: string;percentage:number} &gt;｜ColorFunctionType;textFormat?: (percentage: number) =&gt; string;striped?: boolean;animated?: boolean;}[]</code></td>
<td>[]</td>
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
<td>progress bar background color</td>
<td><code>string</code>/<code>array</code>/<code>function</code></td>
<td></td>
</tr>
<tr>
<td>colorType</td>
<td>progress bar background color type</td>
<td><code>primary</code>/ <code>secondary</code>/ <code>success</code>/ <code>danger</code>/ <code>warning</code>/ <code>info</code>/ <code>light</code>/ <code>dark</code></td>
<td>primary</td>
</tr>
<tr>
<td>striped</td>
<td>whether it is a striped progress bar</td>
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
`,a={type:t,typeCode:e,title:n,subtitle:d,componentName:o,description:r,apiContent:s};export{s as apiContent,o as componentName,a as default,r as description,d as subtitle,n as title,t as type,e as typeCode};

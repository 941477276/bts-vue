const t="反馈",d="feedback",n="Progress",e="进度条",o="progress",c=`<p>展示操作的当前进度，告知用户当前状态和预期</p>
`,r=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>Progress 属性</h3>
<div class="table-responsive"><table class="api-table table table-hover">
<thead class="thead-light">
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>percentage</td>
<td>进度值</td>
<td><code>string</code>/<code>number</code></td>
<td>0</td>
</tr>
<tr>
<td>type</td>
<td>进度条类型</td>
<td><code>line</code>/<code>circle</code>/<code>dashboard</code></td>
<td>line</td>
</tr>
<tr>
<td>multiple</td>
<td>是否显示多个进度条</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>progresses</td>
<td>多个进度条，只有在<code>multiple=true</code>时有效</td>
<td><code>{percentage: number;colorType?: BsColorType;showText?: boolean;color?: string｜Array&lt;{color: string;percentage:number}&gt;｜ColorFunctionType;textFormat?: (percentage: number) =&gt; string;striped?: boolean;animated?: boolean;}[]</code></td>
<td>[]</td>
</tr>
<tr>
<td>showText</td>
<td>是否显示进度值</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>textFormat</td>
<td>格式化进度条文字内容</td>
<td>function</td>
<td></td>
</tr>
<tr>
<td>color</td>
<td>进度条背景色（仅在type!=line时类型为object才有效）</td>
<td><code>string</code>/<code>array</code>/<code>function</code>/<code>object</code></td>
<td></td>
</tr>
<tr>
<td>colorType</td>
<td>进度条背景色类型</td>
<td><code>primary</code>/ <code>secondary</code>/ <code>success</code>/ <code>danger</code>/ <code>warning</code>/ <code>info</code>/ <code>light</code>/ <code>dark</code></td>
<td>primary</td>
</tr>
<tr>
<td>striped</td>
<td>是否为条纹进度条</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>animated</td>
<td>是否为显示条纹动画</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<p><strong><code>type=circle</code></strong></p>
<div class="table-responsive"><table class="api-table table table-hover">
<thead class="thead-light">
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>strokeWidth</td>
<td>环形进度条线的宽度，单位是进度条画布宽度的百分比</td>
<td><code>number</code></td>
<td>6</td>
</tr>
<tr>
<td>strokeLinecap</td>
<td>进度条的末端样式类型</td>
<td><code>round</code>/<code>butt</code>/<code>square</code></td>
<td>round</td>
</tr>
<tr>
<td>status</td>
<td>状态</td>
<td><code>success</code>/<code>warning</code>/<code>info</code>/<code>danger</code></td>
<td></td>
</tr>
</tbody>
</table></div>
<p><strong><code>type=dashboard</code></strong></p>
<div class="table-responsive"><table class="api-table table table-hover">
<thead class="thead-light">
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>gapDegree</td>
<td>仪表盘进度条缺口角度，可取值 0 ~ 295</td>
<td><code>number</code></td>
<td>75</td>
</tr>
<tr>
<td>gapPosition</td>
<td>仪表盘进度条缺口位置</td>
<td><code>top</code>/<code>left</code>/<code>bottom</code>/<code>right</code></td>
<td>bottom</td>
</tr>
</tbody>
</table></div>
`,a={type:t,typeCode:d,title:n,subtitle:e,componentName:o,description:c,apiContent:r};export{r as apiContent,o as componentName,a as default,c as description,e as subtitle,n as title,t as type,d as typeCode};

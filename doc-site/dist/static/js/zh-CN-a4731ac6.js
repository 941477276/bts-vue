const t="其他",d="other",n="RelativeTime",e="相对时间",a="relative-time",o=`<p>显示指定时间相对于当前时间过去了多久，常用于表示几分钟前、几小时前等相对于此时此刻的时间描述。</p>
`,r=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>RelativeTime 属性</h3>
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
<td>time</td>
<td>时间</td>
<td><code>string</code>/<code>Date</code>/<code>number</code></td>
<td></td>
</tr>
<tr>
<td>viewType</td>
<td>显示类型</td>
<td><code>relative</code>/<code>date</code>/<code>datetime</code></td>
<td>relative</td>
</tr>
<tr>
<td>interval</td>
<td>自动更新时间，单位：秒</td>
<td>number</td>
<td>60</td>
</tr>
<tr>
<td>duration</td>
<td>滚动持续时间，单位：毫秒</td>
<td>number</td>
<td>150</td>
</tr>
<tr>
<td>format</td>
<td>格式化模板，只对date、datetime有效</td>
<td>string，参照<a href="https://day.js.org/docs/en/parse/string-format">dayjs format</a></td>
<td></td>
</tr>
<tr>
<td>lang</td>
<td>语言</td>
<td>string，支持的语言参照<a href="https://github.com/iamkun/dayjs/tree/dev/src/locale">dayjs local</a></td>
<td></td>
</tr>
</tbody>
</table></div>
`,i={type:t,typeCode:d,title:n,subtitle:e,componentName:a,description:o,apiContent:r};export{r as apiContent,a as componentName,i as default,o as description,e as subtitle,n as title,t as type,d as typeCode};

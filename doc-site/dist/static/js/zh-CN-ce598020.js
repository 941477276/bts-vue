const t="其他",n="other",d="BackTop",e="返回顶部",o="backtop",c=`<p>返回页面或容器顶部的操作</p>
`,s=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>BackTop 属性</h3>
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
<td>target</td>
<td>设置需要监听其滚动事件的元素</td>
<td><code>string(css elector)</code>/<code>object(dom)</code>/<code>() =&gt; dom</code></td>
<td>window</td>
</tr>
<tr>
<td>visibilityHeight</td>
<td>滚动高度达到此参数值才显示按钮，支持固定值、百分比</td>
<td><code>string</code>/<code>number</code></td>
<td>400</td>
</tr>
<tr>
<td>useFixedPosition</td>
<td>是否使用fixed定位</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>duration</td>
<td>滚动持续时间，单位：毫秒</td>
<td>number</td>
<td>150</td>
</tr>
<tr>
<td>top</td>
<td>触发元素的 style.top 值，支持固定值、百分比</td>
<td><code>string</code>/<code>number</code></td>
<td></td>
</tr>
<tr>
<td>right</td>
<td>触发元素的 style.right 值，支持固定值、百分比</td>
<td><code>string</code>/<code>number</code></td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>BackTop 事件</h3>
<div class="table-responsive"><table class="api-table table table-hover">
<thead class="thead-light">
<tr>
<th>事件名称</th>
<th>说明</th>
<th>回调参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>complete</td>
<td>滚动完成事件</td>
<td></td>
</tr>
</tbody>
</table></div>
`,a={type:t,typeCode:n,title:d,subtitle:e,componentName:o,description:c,apiContent:s};export{s as apiContent,o as componentName,a as default,c as description,e as subtitle,d as title,t as type,n as typeCode};

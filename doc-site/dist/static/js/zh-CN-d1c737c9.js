const t="导航",n="navigation",d="Pagination",e="分页",a="pagination",r=`<p>采用分页的形式分隔长列表，使用分页分解数据</p>
`,o=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>Pagination 属性</h3>
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
<td>pageSize(v-model:pageSize)</td>
<td>每页显示条目个数，支持v-model</td>
<td>number</td>
<td>10</td>
</tr>
<tr>
<td>currentPage(v-model:currentPage)</td>
<td>当前页码，支持v-model</td>
<td>number</td>
<td>1</td>
</tr>
<tr>
<td>total</td>
<td>总条目</td>
<td>number</td>
<td></td>
</tr>
<tr>
<td>pageSizes</td>
<td>每页显示个数选择器的选项设置</td>
<td>number[]</td>
<td>[10, 20, 30, 40, 50, 100]</td>
</tr>
<tr>
<td>pagerCount</td>
<td>页码按钮的数量，当总页数超过该值时会折叠（大于等于 5 且小于等于 21 的奇数）</td>
<td>number</td>
<td>7</td>
</tr>
<tr>
<td>disabledPage</td>
<td>禁用的页码</td>
<td>number[]</td>
<td></td>
</tr>
<tr>
<td>size</td>
<td>输入框大小。可选 <code>lg</code>、<code>sm</code></td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>layout</td>
<td>组件布局，子组件名用逗号分隔</td>
<td><code>total</code>/<code>pager</code>/<code>sizes</code>/<code>jumper</code>/<code>slot</code></td>
<td>'total,pager,sizes,jumper,slot'</td>
</tr>
<tr>
<td>prevText</td>
<td>&quot;上一页&quot;按钮的文字</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>nextText</td>
<td>&quot;下一页&quot;按钮的文字</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>usePrev</td>
<td>是否显示上一页按钮</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>useNext</td>
<td>是否显示下一页按钮</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>hideOnSinglePage</td>
<td>只有一页时是否隐藏</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h3>Pagination 事件</h3>
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
<td>sizeChange</td>
<td>每页显示个数变化时触发</td>
<td></td>
</tr>
<tr>
<td>currentChange</td>
<td>当前页码变化时触发</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>Pagination 插槽</h3>
<div class="table-responsive"><table class="api-table table table-hover">
<thead class="thead-light">
<tr>
<th>插槽名称</th>
<th>说明</th>
<th>版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>prev</td>
<td>上一页按钮</td>
<td></td>
</tr>
<tr>
<td>next</td>
<td>下一页按钮</td>
<td></td>
</tr>
</tbody>
</table></div>
`,s={type:t,typeCode:n,title:d,subtitle:e,componentName:a,description:r,apiContent:o};export{o as apiContent,a as componentName,s as default,r as description,e as subtitle,d as title,t as type,n as typeCode};

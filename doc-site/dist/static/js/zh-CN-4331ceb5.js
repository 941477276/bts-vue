const t="数据展示",n="data_display",d="Collapse",e="折叠面板",a="collapse",l=`<p>可以折叠/展开的内容区域</p>
`,o=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>Collapse 属性</h3>
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
<td>modelValue(v-model)</td>
<td>当前激活的面板的 name，可以使用<code>v-model</code>双向绑定</td>
<td><code>string</code>/<code>number</code>/<code>string丨number[]</code></td>
<td></td>
</tr>
<tr>
<td>accordion</td>
<td>是否开启手风琴模式，开启后每次至多展开一个面板</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>simple</td>
<td>是否为简洁模式</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>headerFocusEffect</td>
<td>是否开启头部高亮效果</td>
<td>boolean</td>
<td>true</td>
</tr>
</tbody>
</table></div>
<h3>Collapse 事件</h3>
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
<td>change</td>
<td>面板折叠/展开时触发</td>
<td>function(name: string, expanded: boolean, value: any)</td>
</tr>
</tbody>
</table></div>
<h3>CollapseItem 属性</h3>
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
<td>title</td>
<td>标题</td>
<td><code>string</code>/<code>number</code></td>
<td></td>
</tr>
<tr>
<td>name</td>
<td>名称（绑定值 modelValue 对应的标识符）</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>showArrow</td>
<td>是否显示箭头</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>arrowLeft</td>
<td>箭头是否在左侧</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h3>CollapseItem 插槽</h3>
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
<td>title</td>
<td>标题</td>
<td></td>
</tr>
</tbody>
</table></div>
`,s={type:t,typeCode:n,title:d,subtitle:e,componentName:a,description:l,apiContent:o};export{o as apiContent,a as componentName,s as default,l as description,e as subtitle,d as title,t as type,n as typeCode};

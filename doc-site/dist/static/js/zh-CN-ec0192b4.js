const t="通用",d="generic",n="Dropdown",e="下拉菜单",o="dropdown",r=`<p>可智能自动调整显示位置的、支持动态加载下拉内容的下拉菜单</p>
`,a=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>Dropdown 属性</h3>
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
<td>placement</td>
<td>下拉菜单弹出位置</td>
<td><code>left</code>/<code>top</code>/<code>bottom</code>/<code>right</code>/<code>leftCenter</code>/<code>leftEnd</code>/<code>topCenter</code>/<code>topEnd</code>/<code>bottomCenter</code>/<code>bottomEnd</code>/<code>rightCenter</code>/<code>rightEnd</code></td>
<td>bottom</td>
</tr>
<tr>
<td>tryReverseDirection</td>
<td>当在指定的<code>direction</code>位置下拉菜单不能完全显示时，是否尝试反方向显示</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>tryAllDirection</td>
<td>当在指定的<code>direction</code>位置下拉菜单不能完全显示时，是否尝试所有方向显示</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>trigger</td>
<td>触发下拉菜单显示的方式</td>
<td><code>click</code>/<code>hover</code>/<code>contextMenu</code></td>
<td>hover</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用状态</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>lazy</td>
<td>是否延迟渲染</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>teleported</td>
<td>是否使用 teleport，该值若为<code>true</code>，下拉菜单的dom会被传送到<code>appendTo</code>中</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>appendTo</td>
<td>下拉菜单dom节点即将传送到的父级元素</td>
<td>string</td>
<td>body</td>
</tr>
<tr>
<td>showToggleArrow</td>
<td>触发下拉菜单的目标元素是否显示向下三角</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>destroyOnHide</td>
<td>隐藏时是否销毁下拉菜单</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>dropdownClass</td>
<td>下拉菜单的额外class</td>
<td>string</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>Dropdown 事件</h3>
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
<td>show</td>
<td>下拉菜单显示时触发</td>
<td></td>
</tr>
<tr>
<td>hide</td>
<td>下拉菜单隐藏时触发</td>
<td></td>
</tr>
<tr>
<td>clickOutside</td>
<td>点击非下拉菜单及触发元素以外的地方触发</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>Dropdown 函数</h3>
<div class="table-responsive"><table class="api-table table table-hover">
<thead class="thead-light">
<tr>
<th>函数名称</th>
<th>说明</th>
<th>参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>show</td>
<td>显示下拉菜单</td>
<td></td>
</tr>
<tr>
<td>hide</td>
<td>隐藏下拉菜单</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>DropdownItem 属性</h3>
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
<td>disabled</td>
<td>是否禁用状态</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>divider</td>
<td>是否显示线条</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>active</td>
<td>是否为激活状态</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h3>DropdownItem 事件</h3>
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
<td>click</td>
<td>点击事件</td>
<td>(evt: ClickEvent)</td>
</tr>
</tbody>
</table></div>
`,l={type:t,typeCode:d,title:n,subtitle:e,componentName:o,description:r,apiContent:a};export{a as apiContent,o as componentName,l as default,r as description,e as subtitle,n as title,t as type,d as typeCode};

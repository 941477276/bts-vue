const t="导航",n="navigation",d="Menu",e="导航菜单",a="menu",l=`<p>为页面和功能提供导航的菜单列表</p>
`,h=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>Menu 属性</h3>
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
<td>selectedKeys(v-model:selectedKeys)</td>
<td>绑定值，选中的菜单项 key 数组</td>
<td><code>string</code>/<code>string[]</code></td>
<td>[]</td>
</tr>
<tr>
<td>mode</td>
<td>菜单类型</td>
<td><code>horizontal</code>/<code>vertical</code>/<code>h5</code></td>
<td>horizontal</td>
</tr>
<tr>
<td>subMenuDisplayMode</td>
<td>子菜单展现形式</td>
<td><code>collapse</code>/<code>dropdown</code>/<code>drawer</code></td>
<td></td>
</tr>
<tr>
<td>subMenuTrigger</td>
<td>子菜单打开的触发方式(只在<code>mode=horizontal</code>时有效)</td>
<td><code>click</code>/<code>hover</code></td>
<td></td>
</tr>
<tr>
<td>collapse</td>
<td>是否水平折叠收起菜单（仅在<code>mode=vertical</code>时可用）</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>uniqueOpened</td>
<td>是否只保持同级的子菜单只有一个展开</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>openedKeys</td>
<td>当前展开的 SubMenu 菜单项 key 数组</td>
<td>string[]</td>
<td>[]</td>
</tr>
<tr>
<td>indent</td>
<td>菜单为垂直模式时的缩进宽度</td>
<td>number</td>
<td>16</td>
</tr>
<tr>
<td>indentUnit</td>
<td>菜单为垂直模式时缩进宽度的单位</td>
<td>string</td>
<td>px</td>
</tr>
<tr>
<td>closeable</td>
<td>是否可关闭</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>autoScrollToSelectedMenu</td>
<td>是否自动滚动到选中的第一个菜单，仅在mode=vertical并且有滚动条的情况下有效</td>
<td>boolean</td>
<td>true</td>
</tr>
</tbody>
</table></div>
<h3>Menu 事件</h3>
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
<td>openChange</td>
<td>菜单展开/收起时触发</td>
<td>function(currentKeyIndex: any, isOpen: boolean, keyIndexPath: {keyIndex: any, name: stirng}[])</td>
</tr>
<tr>
<td>itemClick</td>
<td>菜单项点击时触发</td>
<td>function(itemInfo: {keyIndex: any, name: stirng}, event: MouseEvent)</td>
</tr>
<tr>
<td>select</td>
<td>菜单项选中或取消选中时触发</td>
<td>function(keyIndex: string, isSelected: boolean, keyIndexPath: {keyIndex: any, name: stirng}[])</td>
</tr>
</tbody>
</table></div>
<h3>MenuItem 属性</h3>
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
<td>label</td>
<td>标题</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>keyIndex</td>
<td>唯一标识，必填</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h3>MenuItem 事件</h3>
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
<td>菜单点击时触发</td>
<td>function(itemInfo: {keyIndex: any, name: stirng}, event: MouseEvent)</td>
</tr>
</tbody>
</table></div>
<h3>MenuItem 插槽</h3>
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
<td>icon</td>
<td>自定义图标</td>
<td></td>
</tr>
<tr>
<td>default</td>
<td>自定义标题</td>
<td></td>
</tr>
<tr>
<td>content</td>
<td>其他内容</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>SubMenu 属性</h3>
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
<td>label</td>
<td>标题</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>keyIndex</td>
<td>唯一标识，必填</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>dropdownClass</td>
<td>下拉子菜单的classname</td>
<td><code>string</code>/<code>array</code>/<code>object</code></td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>SubMenu 事件</h3>
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
<td>expand</td>
<td>菜单展开时触发</td>
<td>function(componentId: string)</td>
</tr>
</tbody>
</table></div>
<h3>SubMenu 插槽</h3>
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
<td>icon</td>
<td>自定义图标</td>
<td></td>
</tr>
<tr>
<td>title</td>
<td>自定义标题</td>
<td></td>
</tr>
<tr>
<td>arrow</td>
<td>三角箭头</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>SubMenu 函数</h3>
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
<td>expandSubmenu</td>
<td>展开/收起菜单</td>
<td><code>expand</code>，是否展开菜单，值为<code>true</code>则展开</td>
</tr>
</tbody>
</table></div>
<h3>MenuItemGroup 属性</h3>
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
<td>label</td>
<td>标题</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>keyIndex</td>
<td>唯一标识，必填</td>
<td>string</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>MenuItemGroup 插槽</h3>
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
<td>自定义标题</td>
<td></td>
</tr>
</tbody>
</table></div>
`,o={type:t,typeCode:n,title:d,subtitle:e,componentName:a,description:l,apiContent:h};export{h as apiContent,a as componentName,o as default,l as description,e as subtitle,d as title,t as type,n as typeCode};

const t="数据展示",d="data_display",n="Tree",e="树形控件",r="tree",o=`<p>树形结构的列表</p>
`,a=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>Tree 属性</h3>
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
<td>treeData</td>
<td>树数据</td>
<td><a href="#TreeNode">TreeNode</a></td>
<td>{}</td>
</tr>
<tr>
<td>checkedKeys(v-model:checkedKeys)</td>
<td>选中的节点的key数组（受控）</td>
<td><code>string[]</code>/<code>number[]</code></td>
<td>[]</td>
</tr>
<tr>
<td>nodeKey</td>
<td>每个树节点用来作为唯一标识的属性，整棵树应该是唯一的（比填）</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>props</td>
<td>子节点配置</td>
<td><a href="#props">props</a></td>
<td></td>
</tr>
<tr>
<td>showCheckbox</td>
<td>节点是否可以多选</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>checkStrictly</td>
<td>在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>checkboxName</td>
<td>复选框的name</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>checkOnClickNode</td>
<td>是否在点击节点的时候选中节点，默认值为 false。（即只有在点击复选框时才会选中节点）</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>expandOnClickNode</td>
<td>点击节点的时候展开或者收缩节点</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>showRadio</td>
<td>节点是否单选</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>radioName</td>
<td>单选框框的name</td>
<td>string</td>
<td>--</td>
</tr>
<tr>
<td>renderAfterExpand</td>
<td>是否在第一次展开某个树节点后才渲染其子节点</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>highlightCurrent</td>
<td>是否高亮当前选中节点</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>defaultExpandAll</td>
<td>默认是否展开所有节点</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>defaultExpandNodeLevelMax</td>
<td>默认展开节点级别的最大值，小于等于0无效</td>
<td>number</td>
<td>0</td>
</tr>
<tr>
<td>renderContent</td>
<td>树节点的内容区的渲染函数</td>
<td>(nodeData: object, nodeState: object) =&gt; vnode</td>
<td></td>
</tr>
<tr>
<td>expandedKeys</td>
<td>展开的节点的 key 的数组</td>
<td><code>string[]</code>/<code>number[]</code></td>
<td>[]</td>
</tr>
<tr>
<td>autoExpandParent</td>
<td>展开子节点的时候是否自动展开父节点</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>accordion</td>
<td>是否每次只展开一个同级树节点</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>lazy</td>
<td>是否懒加载子节点，需与<code>loadDataFn</code>方法结合使用</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>loadDataFn</td>
<td>异步加载节点数据函数</td>
<td>(nodeData: object, nodeState: object) =&gt; Promise&lt;any&gt;</td>
<td></td>
</tr>
<tr>
<td>filterMethod</td>
<td>节点过滤函数</td>
<td>(nodeData: object, filterText: string) =&gt; boolean</td>
<td></td>
</tr>
<tr>
<td>filterText</td>
<td>节点过滤文本，该文本将会传递给<code>filterMethod</code>函数使用</td>
<td><code>string</code>/<code>number</code></td>
<td></td>
</tr>
<tr>
<td>pageSize</td>
<td>子节点分页显示数量，值为0表示不使用分页，在有大量数据的情况下可以使用此功能</td>
<td>number</td>
<td>0</td>
</tr>
<tr>
<td>loadMoreChildButtonText</td>
<td>分页“显示更多”按钮文案</td>
<td>string</td>
<td>...显示更多</td>
</tr>
<tr>
<td>loadAllChildButtonText</td>
<td>分页“显示全部”按钮文案</td>
<td>string</td>
<td>显示全部</td>
</tr>
<tr>
<td>loading</td>
<td>是否正在加载树数据</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>loadingText</td>
<td>加载数据时显示的文案</td>
<td>string</td>
<td>加载中...</td>
</tr>
</tbody>
</table></div>
<h4>TreeNode 属性</h4>
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
<td>label(可随props.label改变)</td>
<td>节点标签</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>children(可随props.children改变)</td>
<td>节点的子节点</td>
<td>TreeNode[]</td>
<td>[]</td>
</tr>
<tr>
<td>disabled(可随props.disabled改变)</td>
<td>节点是否禁用</td>
<td>boolean</td>
<td></td>
</tr>
<tr>
<td>isLeaf(可随props.isLeaf改变)</td>
<td>节点是否禁用</td>
<td>boolean</td>
<td></td>
</tr>
</tbody>
</table></div>
<h4>props 属性</h4>
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
<td>节点标签属性在节点对象中的key</td>
<td>string</td>
<td>label</td>
</tr>
<tr>
<td>children</td>
<td>节点的子节点属性在节点对象中的key</td>
<td>string</td>
<td>children</td>
</tr>
<tr>
<td>disabled</td>
<td>节点是否禁用属性在节点对象中的key</td>
<td>string</td>
<td>disabled</td>
</tr>
<tr>
<td>isLeaf</td>
<td>节点是否为叶子节点属性在节点对象中的key</td>
<td>string</td>
<td>isLeaf</td>
</tr>
</tbody>
</table></div>
<h3>Tree 事件</h3>
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
<td>node-expand</td>
<td>节点展开/收起时触发</td>
<td>function(nodeData: TreeNode, expanded: boolean, nodeState: any)</td>
</tr>
<tr>
<td>check-change</td>
<td>节点选中/取消选中时触发</td>
<td>function(nodeData: TreeNode, isChecked: boolean)</td>
</tr>
<tr>
<td>node-click</td>
<td>节点点击时触发</td>
<td>function(nodeData: TreeNode, nodeState: any)</td>
</tr>
<tr>
<td>node-destroy</td>
<td>节点销毁时触发</td>
<td>function(nodeData: TreeNode)</td>
</tr>
</tbody>
</table></div>
<h3>Tree 插槽</h3>
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
<td>loading</td>
<td>树数据加载中的提示</td>
<td></td>
</tr>
<tr>
<td>empty</td>
<td>树没有数据的提示</td>
<td></td>
</tr>
<tr>
<td>switcher-icon</td>
<td>自定义图标</td>
<td></td>
</tr>
<tr>
<td>default</td>
<td>节点标题</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>Tree 函数</h3>
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
<td>getParentNodeByNodeValue</td>
<td>根据节点的值获取父节点</td>
<td><code>(nodeValue: string) =&gt; Record&lt;string, any&gt;｜null</code></td>
</tr>
<tr>
<td>getCheckedNodes</td>
<td>获取选中的节点</td>
<td><code>() =&gt; Record&lt;string, any&gt;[]</code></td>
</tr>
<tr>
<td>getCheckedKeys</td>
<td>获取选中的节点的key</td>
<td><code>() =&gt; string[]</code></td>
</tr>
<tr>
<td>getHalfCheckedNodes</td>
<td>获取半选中的节点</td>
<td><code>() =&gt; Record&lt;string, any&gt;[]</code></td>
</tr>
<tr>
<td>getHalfCheckedKeys</td>
<td>获取选中的节点的key</td>
<td><code>() =&gt; Record&lt;string, any&gt;[]</code></td>
</tr>
<tr>
<td>getCheckedNodes</td>
<td>获取选中的节点</td>
<td><code>Record&lt;string, any&gt;[]</code></td>
</tr>
<tr>
<td>getCheckedNodes</td>
<td>获取选中的节点</td>
<td><code>Record&lt;string, any&gt;[]</code></td>
</tr>
<tr>
<td>selectAll</td>
<td>选中当前表格中的所有节点（disabled的除外）</td>
<td></td>
</tr>
<tr>
<td>selectNone</td>
<td>取消选中当前表格中的所有节点（disabled的除外）</td>
<td><code>(force?: boolean) =&gt; void</code></td>
</tr>
<tr>
<td>addCheckedItem</td>
<td>选中指定节点</td>
<td><code>(rowKey: string, rowData?: Record&lt;string, any&gt;, forceSelect?: boolean) =&gt; void</code></td>
</tr>
<tr>
<td>removeCheckedItem</td>
<td>取消选中指定节点</td>
<td><code>(rowKey: string, rowData?: Record&lt;string, any&gt;, forceSelect?: boolean) =&gt; void</code></td>
</tr>
</tbody>
</table></div>
`,l={type:t,typeCode:d,title:n,subtitle:e,componentName:r,description:o,apiContent:a};export{a as apiContent,r as componentName,l as default,o as description,e as subtitle,n as title,t as type,d as typeCode};
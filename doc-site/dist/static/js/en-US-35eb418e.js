const t="data display",d="data_display",e="Tree",n="tree control",a="tree",o=`<p>tree-structured list</p>
`,r=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>Tree property</h3>
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
<td>treeData</td>
<td>tree data</td>
<td><a href="#TreeNode">TreeNode</a></td>
<td>{}</td>
</tr>
<tr>
<td>checkedKeys(v-model:checkedKeys)</td>
<td>key array of selected nodes (controlled)</td>
<td><code>string[]</code>/<code>number[]</code></td>
<td>[]</td>
</tr>
<tr>
<td>nodeKey</td>
<td>Each tree node is used as a unique identification attribute, the whole tree should be unique (by comparison)</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>props</td>
<td>child node configuration</td>
<td><a href="#props">props</a></td>
<td></td>
</tr>
<tr>
<td>showCheckbox</td>
<td>Whether the node can be multi-selected</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>checkStrictly</td>
<td>In the case of displaying checkboxes, whether to strictly follow the practice of parent-child disassociation, the default is false</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>checkboxName</td>
<td>the name of the checkbox</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>checkOnClickNode</td>
<td>Whether to check the node when the node is clicked, the default value is false. (i.e. the node will only be selected when the checkbox is clicked)</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>expandOnClickNode</td>
<td>Expand or collapse the node when the node is clicked</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>showRadio</td>
<td>Whether the node is radio selected</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>radioName</td>
<td>the name of the radio box</td>
<td>string</td>
<td>--</td>
</tr>
<tr>
<td>renderAfterExpand</td>
<td>Whether to render a tree node after its first expansion</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>highlightCurrent</td>
<td>whether to highlight the currently selected node</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>defaultExpandAll</td>
<td>Whether to expand all nodes by default</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>defaultExpandNodeLevelMax</td>
<td>The maximum value of the expanded node level by default, less than or equal to 0 is invalid</td>
<td>number</td>
<td>0</td>
</tr>
<tr>
<td>renderContent</td>
<td>The rendering function of the content area of the tree node</td>
<td>(nodeData: object, nodeState: object) =&gt; vnode</td>
<td></td>
</tr>
<tr>
<td>expandedKeys</td>
<td>Array of keys of expanded nodes</td>
<td><code>string[]</code>/<code>number[]</code></td>
<td>[]</td>
</tr>
<tr>
<td>autoExpandParent</td>
<td>Whether to automatically expand the parent node when expanding the child node</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>accordion</td>
<td>Whether to expand only one sibling tree node at a time</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>lazy</td>
<td>Whether to lazily load child nodes, it needs to be used in conjunction with <code>loadDataFn</code> method</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>loadDataFn</td>
<td>asynchronously load node data function</td>
<td>(nodeData: object, nodeState: object) =&gt; Promise&lt;any&gt;</td>
<td></td>
</tr>
<tr>
<td>filterMethod</td>
<td>node filter function</td>
<td>(nodeData: object, filterText: string) =&gt; boolean</td>
<td></td>
</tr>
<tr>
<td>filterText</td>
<td>node filter text, the text will be passed to the <code>filterMethod</code> function using</td>
<td><code>string</code>/<code>number</code></td>
<td></td>
</tr>
<tr>
<td>pageSize</td>
<td>The number of sub-node pagination display, the value is 0 means no paging is used, this function can be used when there is a large amount of data</td>
<td>number</td>
<td>0</td>
</tr>
<tr>
<td>loadMoreChildButtonText</td>
<td>pagination &quot;show more&quot; button text</td>
<td>string</td>
<td>...show more</td>
</tr>
<tr>
<td>loadAllChildButtonText</td>
<td>pagination &quot;show all&quot; button text</td>
<td>string</td>
<td>show all</td>
</tr>
<tr>
<td>loading</td>
<td>whether tree data is being loaded</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>loadingText</td>
<td>Text displayed when loading data</td>
<td>string</td>
<td>Loading...</td>
</tr>
</tbody>
</table></div>
<h4>TreeNode Properties</h4>
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
<td>label (can be changed with props.label)</td>
<td>node label</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>children (can be changed with props.children)</td>
<td>child nodes of the node</td>
<td>TreeNode[]</td>
<td>[]</td>
</tr>
<tr>
<td>disabled (can be changed with props.disabled)</td>
<td>whether the node is disabled</td>
<td>boolean</td>
<td></td>
</tr>
<tr>
<td>isLeaf (can be changed with props.isLeaf)</td>
<td>Whether the node is disabled</td>
<td>boolean</td>
<td></td>
</tr>
</tbody>
</table></div>
<h4>props attribute</h4>
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
<td>label</td>
<td>the key of the node label attribute in the node object</td>
<td>string</td>
<td>label</td>
</tr>
<tr>
<td>children</td>
<td>the key of the node's child node attribute in the node object</td>
<td>string</td>
<td>children</td>
</tr>
<tr>
<td>disabled</td>
<td>Whether the node disables the attribute's key in the node object</td>
<td>string</td>
<td>disabled</td>
</tr>
<tr>
<td>isLeaf</td>
<td>Whether the node is a leaf node attribute key in the node object</td>
<td>string</td>
<td>isLeaf</td>
</tr>
</tbody>
</table></div>
<h3>Tree Events</h3>
<div class="table-responsive"><table class="api-table table table-hover">
<thead class="thead-light">
<tr>
<th>Event Name</th>
<th>Description</th>
<th>Callback Parameters</th>
</tr>
</thead>
<tbody>
<tr>
<td>node-expand</td>
<td>Triggered when a node is expanded/collapsed</td>
<td>function(nodeData: TreeNode, expanded: boolean, nodeState: any)</td>
</tr>
<tr>
<td>check-change</td>
<td>Triggered when a node is checked/unchecked</td>
<td>function(nodeData: TreeNode, isChecked: boolean)</td>
</tr>
<tr>
<td>node-click</td>
<td>Triggered when a node is clicked</td>
<td>function(nodeData: TreeNode, nodeState: any)</td>
</tr>
<tr>
<td>node-destroy</td>
<td>Triggered when a node is destroyed</td>
<td>function(nodeData: TreeNode)</td>
</tr>
</tbody>
</table></div>
<h3>Tree slot</h3>
<div class="table-responsive"><table class="api-table table table-hover">
<thead class="thead-light">
<tr>
<th>Slot Name</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>loading</td>
<td>Hints in tree data loading</td>
<td></td>
</tr>
<tr>
<td>empty</td>
<td>A hint that the tree has no data</td>
<td></td>
</tr>
<tr>
<td>switcher-icon</td>
<td>custom icon</td>
<td></td>
</tr>
<tr>
<td>default</td>
<td>node title</td>
<td></td>
</tr>
</tbody>
</table></div>
`,i={type:t,typeCode:d,title:e,subtitle:n,componentName:a,description:o,apiContent:r};export{r as apiContent,a as componentName,i as default,o as description,n as subtitle,e as title,t as type,d as typeCode};

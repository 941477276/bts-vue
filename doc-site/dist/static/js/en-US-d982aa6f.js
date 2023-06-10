const t="data entry",e="data_input",d="TreeSelect",n="tree selector",o="tree-select",r=`<p>Tree selection control, similar to <code>Select</code> selection control, when the optional data structure is a tree structure, you can use <code>TreeSelect</code></p>
`,a=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>TreeSelect property</h3>
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
<td>modelValue(v-model:modelValue)</td>
<td>key array of selected nodes (controlled)</td>
<td><code>stirng</code>/<code>string[]</code>/<code>number[]</code></td>
<td>[]</td>
</tr>
<tr>
<td>treeData</td>
<td>tree data</td>
<td>same as <code>tree</code> component</td>
<td>{}</td>
</tr>
<tr>
<td>nodeKey</td>
<td>Each tree node is used as a unique identification attribute, the whole tree should be unique (by comparison)</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>checkStrictly</td>
<td>In the case of displaying checkboxes, whether to strictly follow the practice of parent-child disassociation, the default is false</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>checkOnClickNode</td>
<td>Whether to check the node when the node is clicked, the default value is false. (i.e. the node will only be selected when the checkbox is clicked)</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>checkboxVisible</td>
<td>Whether to display the checkbox</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>multiple</td>
<td>Whether to support multiple selection</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>multipleLimit</td>
<td>the maximum number that can be selected</td>
<td>number</td>
<td></td>
</tr>
<tr>
<td>clearable</td>
<td>Whether the content can be cleared</td>
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
<td>labels</td>
<td>The display name of the selected item in the input box, required when <code>lazy=true</code></td>
<td>{label: string; value: string; tagType?: string; tagClass?: string; tagEffect?: string;}</td>
<td>[]</td>
</tr>
<tr>
<td>radioVisible</td>
<td>Whether to display the radio button</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>filterable</td>
<td>whether searchable</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>filterMethod</td>
<td>node filter function</td>
<td>(nodeData: object, filterText: string) =&gt; boolean</td>
<td></td>
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
<tr>
<td>deliverContextToFormItem</td>
<td>Whether to deliver context information to the <code>form-item</code> component, the default is true</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>size</td>
<td>The tree selector size. optional <code>lg</code>, <code>sm</code></td>
<td>string</td>
<td>\`\`</td>
</tr>
<tr>
<td>placeholder</td>
<td>placeholder attribute of the input box</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>name</td>
<td>the name attribute of the input box</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>ariaLabel</td>
<td>ariaLabel property of the input box</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>id</td>
<td>id of the input box</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>treeProps</td>
<td>other properties of the tree component</td>
<td>all properties of the <code>tree</code> component</td>
<td>{}</td>
</tr>
<tr>
<td>defaultExpandCheckedNodesParent</td>
<td>Whether to expand the parent of checked nodes by default</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>emptyText</td>
<td>Text when there is no data</td>
<td>string</td>
<td>No data yet</td>
</tr>
<tr>
<td>loadingColorType</td>
<td>The color type of the loading icon</td>
<td><code>primary</code>/ <code>secondary</code>/ <code>success</code>/ <code>danger</code>/ <code>warning</code>/ <code>info</code>/ <code>light</code>/ <code>dark</code></td>
<td></td>
</tr>
<tr>
<td>tagType</td>
<td>type of tag component</td>
<td><code>primary</code>/ <code>secondary</code>/ <code>success</code>/ <code>danger</code>/ <code>warning</code>/ <code>info</code>/ <code>light</code>/ <code>dark</code></td>
<td>secondary</td>
</tr>
<tr>
<td>tagEffect</td>
<td>tag theme</td>
<td><code>dark</code>/<code>light</code>/<code>plain</code></td>
<td>light</td>
</tr>
<tr>
<td>tagCloseable</td>
<td>Whether the tag can be closed</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>maxTagCount</td>
<td>How many tags to display at most, less than or equal to 0 is invalid</td>
<td>number</td>
<td>0</td>
</tr>
<tr>
<td>dropdownClass</td>
<td>Extra classname for dropdown content</td>
<td><code>string</code>/<code>array</code>/<code>object</code></td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>TreeSelect event</h3>
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
<td>change</td>
<td>Triggered when the value of modelValue changes</td>
<td>function(value: stirng丨string[])</td>
</tr>
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
<tr>
<td>show</td>
<td>Triggered when the dropdown content is displayed</td>
<td></td>
</tr>
<tr>
<td>hide</td>
<td>Triggered when the dropdown content is hidden</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>TreeSelect slot</h3>
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
<td>tag</td>
<td>When multiple selection, the content of the tag</td>
<td></td>
</tr>
<tr>
<td>suffixIcon</td>
<td>down arrow icon</td>
<td></td>
</tr>
<tr>
<td>maxTagPlaceholder</td>
<td>In multi-selection, the content to be folded after the maximum number of tags displayed is exceeded</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>TreeSelect function</h3>
<div class="table-responsive"><table class="api-table table table-hover">
<thead class="thead-light">
<tr>
<th>function name</th>
<th>description</th>
<th>parameters</th>
</tr>
</thead>
<tbody>
<tr>
<td>setValidateStatus</td>
<td>Set the validation status of the selector</td>
<td><code>status</code>, optional values are: <code>validating</code>/<code>success</code>/<code>error</code></td>
</tr>
<tr>
<td>dropdownShow</td>
<td>Show picker dropdown menu</td>
<td></td>
</tr>
<tr>
<td>dropdownHide</td>
<td>Hide the selector dropdown menu</td>
<td></td>
</tr>
<tr>
<td>refreshDropdown</td>
<td>Refresh dropdown menu position</td>
<td></td>
</tr>
</tbody>
</table></div>
`,c={type:t,typeCode:e,title:d,subtitle:n,componentName:o,description:r,apiContent:a};export{a as apiContent,o as componentName,c as default,r as description,n as subtitle,d as title,t as type,e as typeCode};

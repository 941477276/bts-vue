const t="数据录入",d="data_input",n="Select",e="选择器",o="select",a=`<p>下拉选择器，当选项过多时，使用下拉菜单展示并选择内容</p>
`,r=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>Select 属性</h3>
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
<td>选择器的值</td>
<td><code>string</code>/<code>number</code>/<code>boolean</code>/<code>array</code></td>
<td></td>
</tr>
<tr>
<td>checked</td>
<td>是否选中状态</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用状态</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>deliveContextToFormItem</td>
<td>是否向<code>form-item</code>组件传递上下文信息，默认为 true</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>size</td>
<td>输入框大小。可选 <code>lg</code>、<code>sm</code></td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>label</td>
<td>radio显示名称</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>name</td>
<td>输入框的name属性</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>ariaLabel</td>
<td>输入框的ariaLabel属性</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>id</td>
<td>单选框的 id</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>placeholder</td>
<td>选择器的placeholder</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>clearable</td>
<td>是否可以清空内容</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>options</td>
<td>下拉选项数据，如果传递了则不需要手动构造 selectOption 节点</td>
<td>array&lt;{value, label, [disabled, title, disabled, tagType, tagClass, options]}&gt;</td>
<td></td>
</tr>
<tr>
<td>teleported</td>
<td>是否使用 teleport，如果该值为<code>true</code>，选择器的下拉内容dom节点将会传送到<code>appendTo</code>中</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>appendTo</td>
<td>下拉菜单dom节点的父级元素</td>
<td>string</td>
<td>body</td>
</tr>
<tr>
<td>multiple</td>
<td>是否支持多选</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>multipleLimit</td>
<td>多选时，可被选择的最大数量</td>
<td>number</td>
<td></td>
</tr>
<tr>
<td>maxTagCount</td>
<td>多选时，最多显示几个tag，值小于等于0无效</td>
<td>number</td>
<td>0</td>
</tr>
<tr>
<td>tagType</td>
<td>多选时，<code>tag</code>标签的颜色类型</td>
<td><code>primary</code>/ <code>secondary</code>/ <code>success</code>/ <code>danger</code>/ <code>warning</code>/ <code>info</code>/ <code>light</code>/ <code>dark</code></td>
<td>secondary</td>
</tr>
<tr>
<td>tagEffect</td>
<td>多选时，<code>tag</code>标签的主题</td>
<td>string</td>
<td>light</td>
</tr>
<tr>
<td>tagCloseable</td>
<td>多选时，<code>tag</code>是否可关闭</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>loading</td>
<td>是否正在加载数据</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>loadingText</td>
<td>正在加载数据时的提示文字</td>
<td>string</td>
<td>加载中...</td>
</tr>
<tr>
<td>loadingColorType</td>
<td>加载图标的颜色的类型</td>
<td><code>primary</code>/ <code>secondary</code>/ <code>success</code>/ <code>danger</code>/ <code>warning</code>/ <code>info</code>/ <code>light</code>/ <code>dark</code></td>
<td>加载中...</td>
</tr>
<tr>
<td>emptyText</td>
<td>下拉列表为空时显示的文字，也可以使用slot=&quot;empty&quot;设置</td>
<td>string</td>
<td>无数据</td>
</tr>
<tr>
<td>filterable</td>
<td>是否可以搜索</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>filterMethod</td>
<td>自定义搜索函数，符合筛选条件时，应返回<code>true</code>，反之则返回<code>false</code>。默认从<code>option</code>的<code>label</code>属性中进行搜索</td>
<td>function(text: string, option: option)</td>
<td></td>
</tr>
<tr>
<td>dropdownClass</td>
<td>下拉菜单的额外class</td>
<td>string</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>Select 事件</h3>
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
<td>选择器值变化时的回调</td>
<td>function(value: any)</td>
</tr>
<tr>
<td>selectLimit</td>
<td>多选时，选中项超出可选择的最大值时触发</td>
<td>function(multipleLimit: number)</td>
</tr>
<tr>
<td>visibleChange</td>
<td>选择器下拉菜单显示或隐藏时触发</td>
<td>function(isVisible: boolean, el: HTMLElement)</td>
</tr>
</tbody>
</table></div>
<h3>Select 插槽</h3>
<div class="table-responsive"><table class="api-table table table-hover">
<thead class="thead-light">
<tr>
<th>插槽名称</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>option</td>
<td><code>bs-option</code>组件的内容，仅当设置了<code>options</code>属性时有效</td>
</tr>
<tr>
<td>empty</td>
<td>下拉列表为空时显示的内容</td>
</tr>
<tr>
<td>loading</td>
<td>加载状态显示的内容</td>
</tr>
<tr>
<td>extra</td>
<td>扩展内容</td>
</tr>
<tr>
<td>tag</td>
<td>多选时，tag的内容</td>
</tr>
<tr>
<td>suffixIcon</td>
<td>向下箭头图标</td>
</tr>
<tr>
<td>maxTagPlaceholder</td>
<td>多选时，tag最大显示数量超过后折叠的内容</td>
</tr>
</tbody>
</table></div>
<h3>Select 函数</h3>
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
<td>setValidateStatus</td>
<td>设置选择器的校验状态</td>
<td><code>status</code>，可选值有：<code>validating</code>/<code>success</code>/<code>error</code></td>
</tr>
<tr>
<td>dropdownShow</td>
<td>显示选择器下拉菜单</td>
<td></td>
</tr>
<tr>
<td>dropdownHide</td>
<td>隐藏选择器下拉菜单</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>Option 属性</h3>
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
<td>value</td>
<td>下拉选项的值</td>
<td><code>string</code>/<code>number</code>/<code>boolean</code></td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用状态</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>label</td>
<td>下拉选项显示名称</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>tagType</td>
<td>多选时，<code>tag</code>标签的颜色类型</td>
<td><code>primary</code>/ <code>secondary</code>/ <code>success</code>/ <code>danger</code>/ <code>warning</code>/ <code>info</code>/ <code>light</code>/ <code>dark</code></td>
<td>secondary</td>
</tr>
<tr>
<td>tagClass</td>
<td>标签的classname</td>
<td>string</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>OptionGroup 属性</h3>
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
<td>label</td>
<td>分组名称</td>
<td>string</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>OptionGroup 插槽</h3>
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
<td>label</td>
<td>分组名称</td>
<td></td>
</tr>
</tbody>
</table></div>
`,l={type:t,typeCode:d,title:n,subtitle:e,componentName:o,description:a,apiContent:r};export{r as apiContent,o as componentName,l as default,a as description,e as subtitle,n as title,t as type,d as typeCode};

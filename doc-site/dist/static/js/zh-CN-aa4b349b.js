const t="数据录入",d="data_input",n="Cascader",e="极联选择",o="cascader",a=`<p>当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。</p>
`,r=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>Cascader 属性</h3>
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
<td>极联选择器的值</td>
<td><code>string</code>/<code>number</code>/<code>array</code></td>
<td></td>
</tr>
<tr>
<td>expandTrigger</td>
<td>次级菜单的展开方式</td>
<td><code>click</code>/<code>hover</code></td>
<td>hover</td>
</tr>
<tr>
<td>options</td>
<td>极联选择器下拉选项数据</td>
<td><code>[CascaderOption\\[\\]](#CascaderOption)</code></td>
<td>[]</td>
</tr>
<tr>
<td>id</td>
<td>极联选择器的 id</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用状态，默认为 false</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>checkStrictly</td>
<td>是否严格的遵守父子节点不互相关联</td>
<td>boolean</td>
<td>false</td>
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
<td>clearable</td>
<td>是否可以清空内容，默认为 false</td>
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
<td>\`\`</td>
</tr>
<tr>
<td>placeholder</td>
<td>输入框的placeholder属性</td>
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
<td>showAllLevels</td>
<td>输入框中是否显示选中值的完整路径</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>emitPath</td>
<td>在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值</td>
<td>boolean</td>
<td>true</td>
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
<td><code>dark</code>/<code>light</code>/<code>plain</code></td>
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
<td>displayRender</td>
<td>选择后展示在输入框或tag中的渲染函数</td>
<td>(checkedOptionsPathList: object[]) =&gt; string</td>
<td></td>
</tr>
<tr>
<td>dropdownClass</td>
<td>下拉菜单的额外class</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>lazy</td>
<td>是否动态加载子节点，需与 lazyLoad 方法结合使用</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>lazyLoadFn</td>
<td>懒加载动态数据的方法，仅在<code>lazy=true</code>时有效，数据加载完成后需调用<code>loadCallback</code>回调函数以告知数据加载完毕</td>
<td>(optionItem: any, loadCallback: (loadSuccess: boolean) =&gt; void) =&gt; any</td>
<td></td>
</tr>
<tr>
<td>setDropdownWidth</td>
<td>是否设置下拉菜单的宽度为参照元素的宽度</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>setDropdownMinWidth</td>
<td>是否设置下拉菜单的最小宽度为参照元素的宽度</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>checkboxName</td>
<td>复选框的name属性</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>radioName</td>
<td>单选框的name属性</td>
<td>string</td>
<td></td>
</tr>
</tbody>
</table></div>
<h4>CascaderOption</h4>
<pre><code class="language-ts">interface CascaderOption {
  label: string;
  value: string|number;
  disabled?: boolean;
  children?: CascaderOption[];
  leaf?: boolean; // 是否为叶子节点，\`lazy=true\`时有效
  tagType?: \`primary\`|\`secondary\`|\`success\`|\`danger\`|\`warning\`|\`info\`|\`light\`|\`dark\`;
  tagEffect?: \`dark\`|\`light\`|\`plain\`;
  tagClass?: string;
}
</code></pre>
<h3>Cascader 事件</h3>
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
<td>select</td>
<td>选项选中或取消选中时触发</td>
<td>function(optionItem: any, isSelected: boolean)</td>
</tr>
</tbody>
</table></div>
<h3>Cascader 插槽</h3>
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
<td>default</td>
<td>触发下拉菜单的元素</td>
<td></td>
</tr>
<tr>
<td>empty</td>
<td>自定义options无内容时的内容</td>
<td></td>
</tr>
<tr>
<td>loading</td>
<td>自定义加载数据时的内容</td>
<td></td>
</tr>
<tr>
<td>label</td>
<td>自定义选项label</td>
<td></td>
</tr>
<tr>
<td>tag</td>
<td>自定义tag的内容</td>
<td></td>
</tr>
<tr>
<td>maxTagPlaceholder</td>
<td>折叠标签自定义内容（当显示的标签数量超过限制时），参数为：<code>{ omittedCount: number }</code></td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>Cascader 函数</h3>
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
<td>dropdownShow</td>
<td>显示下拉菜单</td>
<td></td>
</tr>
<tr>
<td>dropdownHide</td>
<td>隐藏下拉菜单</td>
<td></td>
</tr>
</tbody>
</table></div>
`,c={type:t,typeCode:d,title:n,subtitle:e,componentName:o,description:a,apiContent:r};export{r as apiContent,o as componentName,c as default,a as description,e as subtitle,n as title,t as type,d as typeCode};

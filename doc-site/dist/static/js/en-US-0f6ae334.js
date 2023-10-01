const t="data entry",n="data_input",e="Cascader",a="Geeklink Selection",d="cascader",s=`<p>When a data set has a clear hierarchical structure, it can be viewed and selected step by step through the cascading selector.</p>
`,o=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>Cascader Properties</h3>
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
<td>modelValue(v-model)</td>
<td>the value of the grid selector</td>
<td><code>string</code>/<code>number</code>/<code>array</code></td>
<td></td>
</tr>
<tr>
<td>expandTrigger</td>
<td>How to expand the secondary menu</td>
<td><code>click</code>/<code>hover</code></td>
<td>hover</td>
</tr>
<tr>
<td>options</td>
<td>Cascade selector dropdown option data</td>
<td><code>[CascaderOption\\[\\]](#CascaderOption)</code></td>
<td>[]</td>
</tr>
<tr>
<td>id</td>
<td>id of the link selector</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>Whether to disable the state, the default is false</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>checkStrictly</td>
<td>Whether to strictly observe that parent and child nodes are not related to each other</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>teleported</td>
<td>Whether to use teleport, if the value is <code>true</code>, the selector's drop-down content dom node will be sent to <code>appendTo</code></td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>appendTo</td>
<td>the parent element of the drop-down menu dom node</td>
<td>string</td>
<td>body</td>
</tr>
<tr>
<td>clearable</td>
<td>Whether the content can be cleared, the default is false</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>deliverContextToFormItem</td>
<td>Whether to deliver context information to the <code>form-item</code> component, the default is true</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>size</td>
<td>Input box size. optional <code>lg</code>, <code>sm</code></td>
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
<td>showAllLevels</td>
<td>Whether to display the full path of the selected value in the input box</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>emitPath</td>
<td>When the selected node changes, whether to return an array composed of the values of the menus at all levels where the node is located, if set false, only return the value of the node</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>multiple</td>
<td>Whether to support multiple selection</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>multipleLimit</td>
<td>When multiple selection, the maximum number that can be selected</td>
<td>number</td>
<td></td>
</tr>
<tr>
<td>maxTagCount</td>
<td>When multiple selections are made, a maximum of several tags will be displayed, and the value less than or equal to 0 is invalid</td>
<td>number</td>
<td>0</td>
</tr>
<tr>
<td>tagType</td>
<td>Color type of <code>tag</code> when multiple selection</td>
<td><code>primary</code>/ <code>secondary</code>/ <code>success</code>/ <code>danger</code>/ <code>warning</code>/ <code>info</code>/ <code>light</code>/ <code>dark</code></td>
<td>secondary</td>
</tr>
<tr>
<td>tagEffect</td>
<td>When multiple selection, the theme of <code>tag</code> tag</td>
<td><code>dark</code>/<code>light</code>/<code>plain</code></td>
<td>light</td>
</tr>
<tr>
<td>tagCloseable</td>
<td>When multiple selection, whether <code>tag</code> can be closed</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>loading</td>
<td>whether data is being loaded</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>loadingText</td>
<td>Prompt text when data is loading</td>
<td>string</td>
<td>Loading...</td>
</tr>
<tr>
<td>loadingColorType</td>
<td>The color type of the loading icon</td>
<td><code>primary</code>/ <code>secondary</code>/ <code>success</code>/ <code>danger</code>/ <code>warning</code>/ <code>info</code>/ <code>light</code>/ <code>dark</code></td>
<td>Loading...</td>
</tr>
<tr>
<td>emptyText</td>
<td>The text displayed when the drop-down list is empty, you can also use slot=&quot;empty&quot; to set</td>
<td>string</td>
<td>no data</td>
</tr>
<tr>
<td>filterable</td>
<td>whether searchable</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>filterMethod</td>
<td>A custom search function, which should return <code>true</code> when the filter condition is met, and <code>false</code> otherwise. By default, search from the <code>label</code> attribute of <code>option</code></td>
<td>function(text: string, option: option)</td>
<td></td>
</tr>
<tr>
<td>displayRender</td>
<td>The rendering function displayed in the input box or tag after selection</td>
<td>(checkedOptionsPathList: object[]) =&gt; string</td>
<td></td>
</tr>
<tr>
<td>dropdownClass</td>
<td>extra class for dropdown</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>lazy</td>
<td>Whether to dynamically load child nodes, it needs to be used in conjunction with the lazyLoad method</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>lazyLoadFn</td>
<td>The method of lazy loading of dynamic data, only valid when <code>lazy=true</code>, after the data is loaded, the <code>loadCallback</code> callback function needs to be called to notify that the data is loaded</td>
<td>(optionItem: any, loadCallback: (loadSuccess: boolean) = &gt; void) =&gt; any</td>
<td></td>
</tr>
<tr>
<td>setDropdownWidth</td>
<td>Whether to set the width of the drop-down menu to the width of the reference element</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>setDropdownMinWidth</td>
<td>Whether to set the minimum width of the drop-down menu to the width of the reference element</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>checkboxName</td>
<td>The name property of the check box</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>radioName</td>
<td>the name attribute of the radio box</td>
<td>string</td>
<td></td>
</tr>
</tbody>
</table></div>
<h4>CascaderOption</h4>
<pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">CascaderOption</span> <span class="token punctuation">{</span>
   label<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
   value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">number</span><span class="token punctuation">;</span>
   disabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
   children<span class="token operator">?</span><span class="token operator">:</span> CascaderOption<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
   leaf<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// Whether it is a leaf node, valid when \`lazy=true\`</span>
   tagType<span class="token operator">?</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">primary</span><span class="token template-punctuation string">\`</span></span><span class="token operator">|</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">secondary</span><span class="token template-punctuation string">\`</span></span><span class="token operator">|</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">success</span><span class="token template-punctuation string">\`</span></span><span class="token operator">|</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">danger</span><span class="token template-punctuation string">\`</span></span><span class="token operator">|</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">warning</span><span class="token template-punctuation string">\`</span></span><span class="token operator">|</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">info</span><span class="token template-punctuation string">\`</span></span><span class="token operator">|</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">light</span><span class="token template-punctuation string">\`</span></span><span class="token operator">|</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">dark</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
   tagEffect<span class="token operator">?</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">dark</span><span class="token template-punctuation string">\`</span></span><span class="token operator">|</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">light</span><span class="token template-punctuation string">\`</span></span><span class="token operator">|</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">plain</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
   tagClass<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<h3>Cascader Events</h3>
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
<td>select</td>
<td>Fires when an option is selected or unselected</td>
<td>function(optionItem: any, isSelected: boolean)</td>
</tr>
</tbody>
</table></div>
<h3>Cascader Slots</h3>
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
<td>default</td>
<td>The element that triggers the dropdown menu</td>
<td></td>
</tr>
<tr>
<td>empty</td>
<td>custom options content when there is no content</td>
<td></td>
</tr>
<tr>
<td>loading</td>
<td>Customize content when loading data</td>
<td></td>
</tr>
<tr>
<td>label</td>
<td>custom option label</td>
<td></td>
</tr>
<tr>
<td>tag</td>
<td>custom tag content</td>
<td></td>
</tr>
<tr>
<td>maxTagPlaceholder</td>
<td>Collapse tag custom content (when the number of displayed tags exceeds the limit), the parameter is: <code>{ omittedCount: number }</code></td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>Cascader function</h3>
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
<td>dropdownShow</td>
<td>Show dropdown menu</td>
<td></td>
</tr>
<tr>
<td>dropdownHide</td>
<td>Hide the dropdown menu</td>
<td></td>
</tr>
</tbody>
</table></div>
`,r={type:t,typeCode:n,title:e,subtitle:a,componentName:d,description:s,apiContent:o};export{o as apiContent,d as componentName,r as default,s as description,a as subtitle,e as title,t as type,n as typeCode};

const t="数据录入",d="data_input",n="InputTags",e="标签输入框",a="input-tags",o=`<p>通常用来给事物定义属性或打标签</p>
`,r=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>InputTags 属性</h3>
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
<td>输入框内容</td>
<td>{ label: string; value: string｜number｜boolean; tagType?: string; tagClass?: string; disabled?: boolean; }</td>
<td>[]</td>
</tr>
<tr>
<td>id</td>
<td>输入框的 id</td>
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
<td>readonly</td>
<td>是否只读，默认为 false</td>
<td>boolean</td>
<td>false</td>
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
<td></td>
</tr>
<tr>
<td>inputType</td>
<td>声明 input 类型，同原生 input 标签的 type 属性，见：<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#%E5%B1%9E%E6%80%A7">MDN</a></td>
<td>string</td>
<td><code>text</code></td>
</tr>
<tr>
<td>maxTagCount</td>
<td>界面上最多显示几个tag，小于等于0无效（多余打标签会被折叠起来）</td>
<td>number</td>
<td>0</td>
</tr>
<tr>
<td>tagLimit</td>
<td>最多允许添加的tag个数，小于等于0无效</td>
<td>number</td>
<td>0</td>
</tr>
<tr>
<td>placeholder</td>
<td>输入框的placeholder属性</td>
<td>string</td>
<td>输入内容，按回车键确认</td>
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
<td>tagType</td>
<td>标签组件的type</td>
<td><code>primary</code>/ <code>secondary</code>/ <code>success</code>/ <code>danger</code>/ <code>warning</code>/ <code>info</code>/ <code>light</code>/ <code>dark</code> /</td>
<td>secondary</td>
</tr>
<tr>
<td>tagCloseable</td>
<td>标签是否可关闭</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>tagEffect</td>
<td>tag主题</td>
<td><code>dark</code>/<code>light</code>/<code>plain</code></td>
<td>light</td>
</tr>
<tr>
<td>showAddButton</td>
<td>是否显示添加按钮</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>minWidth</td>
<td>输入框最小宽度</td>
<td>number</td>
<td>100</td>
</tr>
</tbody>
</table></div>
<h3>InputTags 事件</h3>
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
<td>tag-close</td>
<td>标签关闭时触发</td>
<td>function(valueItem: object)</td>
</tr>
<tr>
<td>limited</td>
<td>标签数量超过限制时触发</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>InputTags 插槽</h3>
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
<td>tag</td>
<td>标签自定义内容</td>
<td></td>
</tr>
<tr>
<td>maxTagPlaceholder</td>
<td>折叠标签自定义内容（当显示的标签数量超过限制时），参数为：<code>{ omittedCount: number }</code></td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>InputTags 函数</h3>
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
<td>设置输入框的校验状态，参数可选值有：<code>validating</code>、<code>success</code>、<code>error</code></td>
<td></td>
</tr>
</tbody>
</table></div>
`,l={type:t,typeCode:d,title:n,subtitle:e,componentName:a,description:o,apiContent:r};export{r as apiContent,a as componentName,l as default,o as description,e as subtitle,n as title,t as type,d as typeCode};

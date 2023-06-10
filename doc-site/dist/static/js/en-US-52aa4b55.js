const t="data entry",e="data_input",n="InputTags",d="label input box",a="input-tags",o=`<p>Usually used to define attributes or label things</p>
`,r=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>InputTags property</h3>
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
<td>input box content</td>
<td>{ label: string; value: string｜number｜boolean; tagType?: string; tagClass?: string; disabled?: boolean; }</td>
<td>[]</td>
</tr>
<tr>
<td>id</td>
<td>id of the input box</td>
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
<td>readonly</td>
<td>Whether to read only, the default is false</td>
<td>boolean</td>
<td>false</td>
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
<td></td>
</tr>
<tr>
<td>inputType</td>
<td>Declare the input type, same as the type attribute of the original input tag, see: <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#property">MDN</a></td>
<td>string</td>
<td><code>text</code></td>
</tr>
<tr>
<td>maxTagCount</td>
<td>The maximum number of tags displayed on the interface, less than or equal to 0 is invalid (excessive tags will be folded)</td>
<td>number</td>
<td>0</td>
</tr>
<tr>
<td>tagLimit</td>
<td>The maximum number of tags allowed to be added, less than or equal to 0 is invalid</td>
<td>number</td>
<td>0</td>
</tr>
<tr>
<td>placeholder</td>
<td>placeholder attribute of the input box</td>
<td>string</td>
<td>input content, press Enter key to confirm</td>
</tr>
<tr>
<td>name</td>
<td>the name attribute of the input box</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>ariaLabel</td>
<td>ariaLabel attribute of the input box</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>tagType</td>
<td>type of tag component</td>
<td><code>primary</code>/ <code>secondary</code>/ <code>success</code>/ <code>danger</code>/ <code>warning</code>/ <code>info</code>/ <code>light</code>/ <code>dark</code> /</td>
<td>secondary</td>
</tr>
<tr>
<td>tagCloseable</td>
<td>Whether the tag can be closed</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>tagEffect</td>
<td>tag theme</td>
<td><code>dark</code>/<code>light</code>/<code>plain</code></td>
<td>light</td>
</tr>
<tr>
<td>showAddButton</td>
<td>whether to show the add button</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>minWidth</td>
<td>The minimum width of the input box</td>
<td>number</td>
<td>100</td>
</tr>
</tbody>
</table></div>
<h3>InputTags event</h3>
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
<td>tag-close</td>
<td>Triggered when the tag is closed</td>
<td>function(valueItem: object)</td>
</tr>
<tr>
<td>limited</td>
<td>Triggered when the number of tags exceeds the limit</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>InputTags slot</h3>
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
<td>tag custom content</td>
<td></td>
</tr>
<tr>
<td>maxTagPlaceholder</td>
<td>Collapse tag custom content (when the number of displayed tags exceeds the limit), the parameter is: <code>{ omittedCount: number }</code></td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>InputTags function</h3>
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
<td>Set the validation status of the input box, the optional values of the parameters are: <code>validating</code>, <code>success</code>, <code>error</code></td>
<td></td>
</tr>
</tbody>
</table></div>
`,i={type:t,typeCode:e,title:n,subtitle:d,componentName:a,description:o,apiContent:r};export{r as apiContent,a as componentName,i as default,o as description,d as subtitle,n as title,t as type,e as typeCode};

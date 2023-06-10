const t="data entry",n="data_input",e="Input",d="input box",o="input",a=`<p>Enter content with the mouse or keyboard</p>
`,r=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>Input property</h3>
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
<td>showPassword</td>
<td>whether to show switch password icon, default is false</td>
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
<td>type</td>
<td>Declare the input type, which is the same as the type attribute of the original input tag, see: <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#property">MDN</a> (please directly Use <code>&lt;a-textarea /&gt;</code> instead of <code>type=&quot;textarea&quot;</code>).</td>
<td>string</td>
<td><code>text</code></td>
</tr>
<tr>
<td>inputmode</td>
<td>The original inputmode attribute of the input box</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>inputStyle</td>
<td>The style of the input box</td>
<td>object</td>
<td><code>{}</code></td>
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
<td>ariaLabel attribute of the input box</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>compositionDisable</td>
<td>Whether to not intercept the input when the composition event, when the value is true when inputting Chinese, Japanese and other non-English, the value of modelValue will be updated in real time in the input event</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>nativeAttrs</td>
<td>Other attributes that need to be added to the input element</td>
<td>object</td>
<td><code>{}</code></td>
</tr>
<tr>
<td>minlength</td>
<td>minimum length</td>
<td>number</td>
<td></td>
</tr>
<tr>
<td>maxlength</td>
<td>maximum length</td>
<td>number</td>
<td></td>
</tr>
<tr>
<td>prefix</td>
<td>input with prefix icon</td>
<td><code>string</code>/<code>slot</code></td>
<td></td>
</tr>
<tr>
<td>showCount</td>
<td>Whether to display the word count</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>autoHeight</td>
<td>Whether to automatically calculate the height, only valid when <code>type=textarea</code></td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>minHeight</td>
<td>The minimum height, if the value is less than or equal to 0, it will be invalid, only valid when <code>type=textarea</code></td>
<td>number</td>
<td>0</td>
</tr>
<tr>
<td>textareaEmptyHeightIsMinHeight</td>
<td>Whether the height of textarea is minHeight when the value is empty, only valid when <code>type=textarea</code></td>
<td>boolean</td>
<td>true</td>
</tr>
</tbody>
</table></div>
<h3>Input event</h3>
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
<td>Callback when the content of the input box changes</td>
<td>function(e)</td>
</tr>
<tr>
<td>clear</td>
<td>Callback when the input content is cleared</td>
<td>function()</td>
</tr>
</tbody>
</table></div>
<h3>Input slot</h3>
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
<td>prefix</td>
<td>header content of input box</td>
<td></td>
</tr>
<tr>
<td>suffix</td>
<td>content at the end of the input box</td>
<td></td>
</tr>
<tr>
<td>prepend</td>
<td>prepend input box content</td>
<td></td>
</tr>
<tr>
<td>append</td>
<td>content after the input box</td>
<td></td>
</tr>
<tr>
<td>text-count</td>
<td>Input box word count slot, the parameter is: <code>{count: number, maxCount: number}</code></td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>Input function</h3>
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
<td>Set the validation status of the input box, very useful when encapsulating custom component validation</td>
<td><code>status</code>, optional values are: <code>validating</code>, <code>success</code>, <code>error</code></td>
</tr>
</tbody>
</table></div>
`,i={type:t,typeCode:n,title:e,subtitle:d,componentName:o,description:a,apiContent:r};export{r as apiContent,o as componentName,i as default,a as description,d as subtitle,e as title,t as type,n as typeCode};

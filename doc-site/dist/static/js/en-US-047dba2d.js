const t="data entry",n="data_input",e="InputNumber",d="Number input box",r="input-number",a=`<p>Enter the value within the range by mouse or keyboard</p>
`,o=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>InputNumber property</h3>
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
<td>Number input box content</td>
<td><code>string</code>/<code>number</code></td>
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
<td>input box type</td>
<td><code>text</code>/<code>number</code></td>
<td>text</td>
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
<td>{}</td>
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
<td>keyboard</td>
<td>Whether the value can be changed via the keyboard</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>step</td>
<td>step size, the number of steps changed each time, can be a decimal</td>
<td>number</td>
<td>1</td>
</tr>
<tr>
<td>min</td>
<td>minimum value</td>
<td>number</td>
<td></td>
</tr>
<tr>
<td>max</td>
<td>maximum value</td>
<td>number</td>
<td></td>
</tr>
<tr>
<td>prefix</td>
<td>prefix text</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>formatter</td>
<td>Specifies the format of the value displayed in the input box</td>
<td>(value: number｜string) =&gt; string</td>
<td></td>
</tr>
<tr>
<td>parser</td>
<td>Specifies the way to convert back to a number from the formatter, used in conjunction with the formatter</td>
<td>(value: string) =&gt; number</td>
<td></td>
</tr>
<tr>
<td>precision</td>
<td>numeric precision</td>
<td>number</td>
<td></td>
</tr>
<tr>
<td>controlInner</td>
<td>Whether the control button is inside the input box</td>
<td>boolean</td>
<td>true</td>
</tr>
</tbody>
</table></div>
<h3>InputNumber event</h3>
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
<td>function(value: any)</td>
</tr>
</tbody>
</table></div>
<h3>InputNumber slot</h3>
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
<td>prepend</td>
<td>prepend input box content</td>
<td></td>
</tr>
<tr>
<td>append</td>
<td>content after the input box</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>InputNumber function</h3>
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
<td>Set the validation status of the input box</td>
<td><code>status</code>, optional values are: <code>validating</code>, <code>success</code>, <code>error</code></td>
</tr>
</tbody>
</table></div>
`,i={type:t,typeCode:n,title:e,subtitle:d,componentName:r,description:a,apiContent:o};export{o as apiContent,r as componentName,i as default,a as description,d as subtitle,e as title,t as type,n as typeCode};

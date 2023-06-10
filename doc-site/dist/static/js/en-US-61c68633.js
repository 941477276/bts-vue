const t="data entry",e="data_input",n="Radio",d="radio button",a="radio",o=`<p>Single box</p>
`,r=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>Radio properties</h3>
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
<td>The value of the radio button</td>
<td><code>string</code>/<code>number</code>/<code>boolean</code></td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>Whether to disable the state, the default is false</td>
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
<td>label</td>
<td>radio display name</td>
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
<td>id of the radio button</td>
<td>string</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>Radio Events</h3>
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
<td>Callback when the radio button value changes</td>
<td>function(e: Event, value: any)</td>
</tr>
</tbody>
</table></div>
<h3>Radio functions</h3>
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
<td>Set the validation status of the radio box</td>
<td><code>status</code>, the optional values are: <code>validating</code>/<code>success</code>/<code>error</code></td>
</tr>
</tbody>
</table></div>
<h3>RadioGroup Properties</h3>
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
<td>The value of the radio button</td>
<td><code>string</code>/<code>number</code>/<code>boolean</code></td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>Whether to disable the state, the default is false</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>elTag</td>
<td>The tag name of the radio button group rendering element</td>
<td>string</td>
<td>div</td>
</tr>
</tbody>
</table></div>
<h3>RadioGroup Events</h3>
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
<td>Callback when the radio button value changes</td>
<td>function(value: any)</td>
</tr>
</tbody>
</table></div>
`,l={type:t,typeCode:e,title:n,subtitle:d,componentName:a,description:o,apiContent:r};export{r as apiContent,a as componentName,l as default,o as description,d as subtitle,n as title,t as type,e as typeCode};

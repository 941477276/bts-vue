const t="data entry",d="data_input",e="Form",n="form",o="form",r=`<p>Forms for data entry, validation, and data submission</p>
`,a=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>Form properties</h3>
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
<td>model</td>
<td>the value of the radio button</td>
<td>object</td>
<td></td>
</tr>
<tr>
<td>rules</td>
<td>validation rules</td>
<td>object</td>
<td></td>
</tr>
<tr>
<td>layout</td>
<td>form layout</td>
<td><code>vertical</code>/<code>horizontal</code>/<code>inline</code></td>
<td>vertical</td>
</tr>
<tr>
<td>showErrorMessage</td>
<td>Whether to display an error message when the form item validation fails</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>showLabel</td>
<td>whether to display label</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>labelClass</td>
<td>extra classname for label</td>
<td><code>string</code>/<code>array</code>/<code>object</code></td>
<td></td>
</tr>
<tr>
<td>labelWidth</td>
<td>width of label</td>
<td><code>string</code>/<code>number</code></td>
<td></td>
</tr>
<tr>
<td>labelAlign</td>
<td>The alignment of the label</td>
<td><code>left</code>/<code>center</code>/<code>right</code></td>
<td></td>
</tr>
<tr>
<td>contentClass</td>
<td>extra class for content part</td>
<td><code>string</code>/<code>array</code>/<code>object</code></td>
<td></td>
</tr>
<tr>
<td>size</td>
<td>Input box size. optional <code>lg</code>, <code>sm</code></td>
<td>string</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>Form function</h3>
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
<td>validate</td>
<td>validate the entire form</td>
<td>(callback?: (valid: boolean) =&gt; void) =&gt; Promise&lt;boolean&gt;</td>
</tr>
<tr>
<td>validateFields</td>
<td>Validate some form items</td>
<td>(names: string｜string[], callback?: (valid: boolean) =&gt; void) =&gt; Promise&lt;boolean&gt;</td>
</tr>
<tr>
<td>clearValidate</td>
<td>Remove the validation result of the whole form or part of the form items, and remove the validation result of the entire form if <code>names</code> is not passed</td>
<td>(names?: string｜string[]) =&gt; void</td>
</tr>
<tr>
<td>resetFields</td>
<td>Reset form values and remove form validation results</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>FormItem property</h3>
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
<td>value</td>
<td>The value of the current form item, only used when validating the current form item</td>
<td>any</td>
<td></td>
</tr>
<tr>
<td>rules</td>
<td>validation rules</td>
<td><code>object</code>/<code>array</code></td>
<td></td>
</tr>
<tr>
<td>name</td>
<td>the key of the field in the model</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>required</td>
<td>Whether it is required, if not set, it will be automatically generated according to the validation rules</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>hideRequiredAsterisk</td>
<td>Whether to hide the red asterisk next to the label for required fields</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>showLabel</td>
<td>whether to display label</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>labelClass</td>
<td>extra classname for label</td>
<td><code>string</code>/<code>array</code>/<code>object</code></td>
<td></td>
</tr>
<tr>
<td>labelWidth</td>
<td>width of label</td>
<td><code>string</code>/<code>number</code></td>
<td></td>
</tr>
<tr>
<td>labelAlign</td>
<td>The alignment of the label</td>
<td><code>left</code>/<code>center</code>/<code>right</code></td>
<td></td>
</tr>
<tr>
<td>labelFor</td>
<td>the for attribute of the label</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>contentClass</td>
<td>extra class for content part</td>
<td><code>string</code>/<code>array</code>/<code>object</code></td>
<td></td>
</tr>
<tr>
<td>size</td>
<td>Input box size. optional <code>lg</code>, <code>sm</code></td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>horizontal</td>
<td>Whether the label is displayed horizontally</td>
<td>boolean</td>
<td></td>
</tr>
<tr>
<td>hint</td>
<td>hint text</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>validSuccessText</td>
<td>Text after form validation is successful</td>
<td>string</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>FormItem slot</h3>
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
<td>label</td>
<td>custom label</td>
<td></td>
</tr>
<tr>
<td>hint</td>
<td>Customize <code>hint</code> hint information</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>FormItem function</h3>
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
<td>validate</td>
<td>Validate the form item, the parameter <code>trigger</code> is the trigger defined in <code>rules</code>, if trigger is specified, only the validation rule corresponding to the trigger will be executed, otherwise all validation rules will be executed</td>
<td><code>(trigger: string, callback?: (valid: boolean) =&gt; void) =&gt; void </code></td>
</tr>
<tr>
<td>clearValidate</td>
<td>Remove form item validation results</td>
<td></td>
</tr>
<tr>
<td>resetFields</td>
<td>Reset the value of the form item and remove the validation result</td>
<td></td>
</tr>
</tbody>
</table></div>
`,l={type:t,typeCode:d,title:e,subtitle:n,componentName:o,description:r,apiContent:a};export{a as apiContent,o as componentName,l as default,r as description,n as subtitle,e as title,t as type,d as typeCode};

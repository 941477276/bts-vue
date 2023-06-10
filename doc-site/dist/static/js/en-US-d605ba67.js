const t="data entry",e="data_input",d="Select",n="selector",o="select",a=`<p>Drop-down selector, when there are too many options, use the drop-down menu to display and select content</p>
`,r=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>Select property</h3>
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
<td>selector value</td>
<td><code>string</code>/<code>number</code>/<code>boolean</code>/<code>array</code></td>
<td></td>
</tr>
<tr>
<td>checked</td>
<td>Checked status</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>Whether to disable the state</td>
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
<tr>
<td>placeholder</td>
<td>placeholder of the selector</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>clearable</td>
<td>Whether the content can be cleared</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>options</td>
<td>drop-down option data, if passed, no need to manually construct selectOption node</td>
<td>array&lt;{value, label, [disabled, title, disabled, tagType, tagClass, options]}&gt;</td>
<td></td>
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
<td>The color type of <code>tag</code> for multiple selection</td>
<td><code>primary</code>/ <code>secondary</code>/ <code>success</code>/ <code>danger</code>/ <code>warning</code>/ <code>info</code>/ <code>light</code>/ <code>dark</code></td>
<td>secondary</td>
</tr>
<tr>
<td>tagEffect</td>
<td>The theme of <code>tag</code> when multiple selection</td>
<td>string</td>
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
<td>dropdownClass</td>
<td>extra class for dropdown</td>
<td>string</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>Select event</h3>
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
<td>Callback when selector value changes</td>
<td>function(value: any)</td>
</tr>
<tr>
<td>selectLimit</td>
<td>In multi-selection, trigger when the selected item exceeds the selectable maximum value</td>
<td>function(multipleLimit: number)</td>
</tr>
<tr>
<td>visibleChange</td>
<td>Triggered when the selector dropdown menu is shown or hidden</td>
<td>function(isVisible: boolean, el: HTMLElement)</td>
</tr>
</tbody>
</table></div>
<h3>Select slot</h3>
<div class="table-responsive"><table class="api-table table table-hover">
<thead class="thead-light">
<tr>
<th>Slot Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>option</td>
<td>The content of the <code>bs-option</code> component, only valid when the <code>options</code> attribute is set</td>
</tr>
<tr>
<td>empty</td>
<td>What to display when the dropdown list is empty</td>
</tr>
<tr>
<td>loading</td>
<td>content displayed in loading status</td>
</tr>
<tr>
<td>extra</td>
<td>extended content</td>
</tr>
<tr>
<td>tag</td>
<td>When multiple selection, the content of the tag</td>
</tr>
<tr>
<td>suffixIcon</td>
<td>down arrow icon</td>
</tr>
<tr>
<td>maxTagPlaceholder</td>
<td>When multiple selection, the maximum number of tags displayed exceeds the content to be folded</td>
</tr>
</tbody>
</table></div>
<h3>Select function</h3>
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
</tbody>
</table></div>
<h3>Option attribute</h3>
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
<td>The value of the dropdown option</td>
<td><code>string</code>/<code>number</code>/<code>boolean</code></td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>Whether to disable the state</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>label</td>
<td>dropdown option display name</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>tagType</td>
<td>The color type of <code>tag</code> for multiple selection</td>
<td><code>primary</code>/ <code>secondary</code>/ <code>success</code>/ <code>danger</code>/ <code>warning</code>/ <code>info</code>/ <code>light</code>/ <code>dark</code></td>
<td>secondary</td>
</tr>
<tr>
<td>tagClass</td>
<td>classname of the tag</td>
<td>string</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>OptionGroup property</h3>
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
<td>disabled</td>
<td>Whether to disable the state</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>label</td>
<td>group name</td>
<td>string</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>OptionGroup slot</h3>
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
<td>group name</td>
<td></td>
</tr>
</tbody>
</table></div>
`,l={type:t,typeCode:e,title:d,subtitle:n,componentName:o,description:a,apiContent:r};export{r as apiContent,o as componentName,l as default,a as description,n as subtitle,d as title,t as type,e as typeCode};

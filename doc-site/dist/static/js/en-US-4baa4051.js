const t="data entry",n="data_input",d="TimePicker",e="time picker",o="time-picker",r=`<p>Controls for entering or selecting a time</p>
`,a=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>TimePicker property</h3>
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
<td>current time</td>
<td><code>string</code>/<code>Date</code>/<a href="https://day.js.org/">dayjs</a></td>
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
<td>hourStep</td>
<td>hour option interval</td>
<td>number</td>
<td>1</td>
</tr>
<tr>
<td>minuteStep</td>
<td>minute option interval</td>
<td>number</td>
<td>1</td>
</tr>
<tr>
<td>secondStep</td>
<td>second option interval</td>
<td>number</td>
<td>1</td>
</tr>
<tr>
<td>disabledHours</td>
<td>Hours to be disabled</td>
<td>(hour: number, use12Hours: boolean) =&gt; boolean</td>
<td></td>
</tr>
<tr>
<td>disabledMinutes</td>
<td>minutes to be disabled</td>
<td>(hour: number, minute: number, use12Hours: boolean) =&gt; boolean</td>
<td></td>
</tr>
<tr>
<td>disabledSeconds</td>
<td>seconds to be disabled</td>
<td>(hour: number, minute: number, second: number, use12Hours: boolean) =&gt; boolean</td>
<td></td>
</tr>
<tr>
<td>hideDisabledOptions</td>
<td>Whether to hide disabled options</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>use12Hours</td>
<td>Whether to use 12-hour format</td>
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
<td>\`\`</td>
</tr>
<tr>
<td>inputmode</td>
<td>inputmode attribute of the input box</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>format</td>
<td>Display time format</td>
<td><code>string</code>, refer to <a href="https://day.js.org/docs/en/parse/string-format">dayjs format</a></td>
<td><code>HH:mm:ss</code></td>
</tr>
<tr>
<td>valueFormat</td>
<td>The format of the bound value, if not specified, the bound value will be <code>dayjs</code> object</td>
<td><code>string</code>, refer to <a href="https://day.js.org/docs/en/parse/string-format">dayjs format</a></td>
<td></td>
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
<td>dropdownClass</td>
<td>Extra classname for the dropdown window</td>
<td><code>string</code>/<code>array</code>/<code>object</code></td>
<td></td>
</tr>
<tr>
<td>showFooter</td>
<td>Whether to show the footer</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>showHeader</td>
<td>Whether to show the header</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h3>TimePicker Events</h3>
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
<td>callback when current value changes</td>
<td>function(time: any)</td>
</tr>
<tr>
<td>show</td>
<td>Triggered when the dropdown menu is shown</td>
<td></td>
</tr>
<tr>
<td>hide</td>
<td>Triggered when the dropdown menu is hidden</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>TimePicker slot</h3>
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
<td>trigger</td>
<td>The element that triggers the display of the drop-down menu</td>
<td></td>
</tr>
<tr>
<td>header</td>
<td>additional header content</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>TimePicker function</h3>
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
<td>function(status: <code>validating</code>/<code>success</code>/<code>error</code>)</td>
</tr>
</tbody>
</table></div>
`,s={type:t,typeCode:n,title:d,subtitle:e,componentName:o,description:r,apiContent:a};export{a as apiContent,o as componentName,s as default,r as description,e as subtitle,d as title,t as type,n as typeCode};

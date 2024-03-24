const t="data entry",e="data_input",d="DateRangePicker",n="date range picker",a="date-range-picker",o=`<p>Controls for entering or selecting a date range</p>
`,r=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>DateRangePicker property</h3>
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
<td>Bind date range value</td>
<td><code>string[]</code>/<code>Date[]</code>/<code>number[]</code>/<a href="https://day.js.org/">dayjs</a>[]</td>
<td>[]</td>
</tr>
<tr>
<td>id</td>
<td>The id of the input box</td>
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
<td>pickerType</td>
<td>Picker type</td>
<td><code>date</code>/<code>dateTime</code>/<code>month</code>/<code>year</code></td>
<td>date</td>
</tr>
<tr>
<td>mode</td>
<td>The state of the selector panel</td>
<td><code>date</code>/<code>dateTime</code>/<code>month</code>/<code>year</code></td>
<td></td>
</tr>
<tr>
<td>disabledDate</td>
<td>Function to set disabled date</td>
<td>\`({current: Dayjs, panel: 'start'</td>
<td>'end' }) =&gt; boolean\`</td>
</tr>
<tr>
<td>showSidebar</td>
<td>Whether to display the sidebar</td>
<td></td>
<td>false</td>
</tr>
<tr>
<td>sidebarInRight</td>
<td>Whether the sidebar is on the right</td>
<td></td>
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
<td>Whether to pass context information to the <code>form-item</code> component, the default is true</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>size</td>
<td>Input box size. Optional <code>lg</code>, <code>sm</code></td>
<td>string</td>
<td>\`\`</td>
</tr>
<tr>
<td>dateRender</td>
<td>Function to customize date cell content</td>
<td><code>(cellData: {dayjsIns: Dayjs; now: dayjs; cellIndex: number; rowIndex: number;}) =&gt; string丨vnode</code></td>
<td></td>
</tr>
<tr>
<td>format</td>
<td>Displayed time format</td>
<td><code>string[]</code>, refer to <a href="https://day.js.org/docs/en/parse/string-format">dayjs format</a></td>
<td></td>
</tr>
<tr>
<td>formatSpliter</td>
<td>Connector between format templates, only valid when pickerType=dateTime</td>
<td>string</td>
<td><code>' '</code></td>
</tr>
<tr>
<td>valueFormat</td>
<td>The format of the bound value. If not specified, the bound value will be a <code>Dayjs</code> object</td>
<td><code>string[]</code>, refer to [dayjs format](https://day.js.org/docs/en/parse/string -format)</td>
<td></td>
</tr>
<tr>
<td>valueFormatSpliter</td>
<td>Connector between format templates, only valid when pickerType=dateTime</td>
<td>string</td>
<td><code>' '</code></td>
</tr>
<tr>
<td>datePanelProps</td>
<td>Date picker props, only valid when pickerType=dateTime</td>
<td>object</td>
<td>{}</td>
</tr>
<tr>
<td>timePanelProps</td>
<td>Time picker props, only valid when pickerType=dateTime</td>
<td>object</td>
<td>{}</td>
</tr>
<tr>
<td>defaultTime</td>
<td>The default specific time after the selected date</td>
<td>string[]</td>
<td>[]</td>
</tr>
<tr>
<td>placeholder</td>
<td>placeholder attribute of input box</td>
<td>string[]</td>
<td></td>
</tr>
<tr>
<td>name</td>
<td>name attribute of input box</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>dropdownClass</td>
<td>Additional classname for drop-down pop-up window</td>
<td><code>string</code>/<code>array</code>/<code>object</code></td>
<td></td>
</tr>
<tr>
<td>showFooter</td>
<td>Whether to display the bottom</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>showHeader</td>
<td>Whether to display the header</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>yearButtonDisabled</td>
<td>Whether to disable the year button</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>monthButtonDisabled</td>
<td>Whether to disable the month button</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>teleported</td>
<td>Whether to use teleport. If set to true, the drop-down content will be appended to the position of <code>append-to</code></td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>appendTo</td>
<td>Indicates which web page element the drop-down content will be appended to</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>nativeAttrs</td>
<td>input native attributes</td>
<td>object</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>DateRangePicker Event</h3>
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
<h3>DateRangePicker slot</h3>
<div class="table-responsive"><table class="api-table table table-hover">
<thead class="thead-light">
<tr>
<th>Slot Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>default</td>
<td>The element that triggers the display of the drop-down menu</td>
</tr>
<tr>
<td>sidebar</td>
<td>sidebar, parameters: {date: Dayjs; show: function; hide: function }</td>
</tr>
<tr>
<td>dateRender</td>
<td>Custom cell content, parameters: {dayjsIns: Dayjs; now: Dayjs; cellIndex: number; rowIndex: number;}</td>
</tr>
<tr>
<td>header</td>
<td>additional header content</td>
</tr>
<tr>
<td>footer</td>
<td>bottom content</td>
</tr>
</tbody>
</table></div>
<h3>DateRangePicker function</h3>
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
<tr>
<td>setPanelViewDate</td>
<td>Set the date displayed on the panel</td>
<td>function(startDate?: Date/Dayjs, endDate?: Date/Dayjs)</td>
</tr>
<tr>
<td>setDate</td>
<td>Set the v-model binding value of the control</td>
<td>function([startDate: number/Date/Dayjs, endDate: number/Date/Dayjs])</td>
</tr>
</tbody>
</table></div>
`,s={type:t,typeCode:e,title:d,subtitle:n,componentName:a,description:o,apiContent:r};export{r as apiContent,a as componentName,s as default,o as description,n as subtitle,d as title,t as type,e as typeCode};

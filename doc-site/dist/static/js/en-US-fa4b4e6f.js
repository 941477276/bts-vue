const t="data entry",e="data_input",d="DatePicker",n="date picker",a="date-picker",o=`<p>A control for entering or selecting a date</p>
`,r=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>DatePicker property</h3>
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
<td>current date</td>
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
<td>pickerType</td>
<td>picker type</td>
<td><code>date</code>/<code>dateTime</code>/<code>week</code>/<code>month</code></td>
<td>date</td>
</tr>
<tr>
<td>mode</td>
<td>state of the picker panel</td>
<td><code>date</code>/<code>dateTime</code>/<code>week</code>/<code>month</code></td>
<td></td>
</tr>
<tr>
<td>panelViewDate</td>
<td>Default time when the selector is opened</td>
<td><code>string</code>/<code>Date</code>/<a href="https://day.js.org/">dayjs</a></td>
<td></td>
</tr>
<tr>
<td>disabledDate</td>
<td>disabled date</td>
<td>() =&gt; boolean</td>
<td></td>
</tr>
<tr>
<td>showSidebar</td>
<td>whether to show the sidebar</td>
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
<td>dateRender</td>
<td>Custom date cell content</td>
<td>(cellData: {dayjsIns: Dayjs; now: dayjs; cellIndex: number; rowIndex: number;}) =&gt; string丨vnode</td>
<td></td>
</tr>
<tr>
<td>format</td>
<td>Display time format</td>
<td><code>string</code>, refer to <a href="https://day.js.org/docs/en/parse/string-format">dayjs format</a></td>
<td><code>HH:mm:ss</code></td>
</tr>
<tr>
<td>formatSpliter</td>
<td>The connector between format templates, only valid when pickerType=dateTime</td>
<td>string</td>
<td><code>' '</code></td>
</tr>
<tr>
<td>valueFormat</td>
<td>The format of the bound value, if not specified, the bound value will be a <code>Dayjs</code> object</td>
<td><code>string</code>, refer to <a href="https://day.js.org/docs/en/parse/string-format">dayjs format</a></td>
<td></td>
</tr>
<tr>
<td>valueFormatSpliter</td>
<td>The connector between format templates, only valid when pickerType=dateTime</td>
<td>string</td>
<td><code>' '</code></td>
</tr>
<tr>
<td>datePanelProps</td>
<td>date picker props, only valid when pickerType=dateTime</td>
<td>object</td>
<td>{}</td>
</tr>
<tr>
<td>timePanelProps</td>
<td>time picker props, only valid when pickerType=dateTime</td>
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
<td>dropdownClass</td>
<td>Extra classname for dropdown</td>
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
<td>whether to show header</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h3>DatePicker Event</h3>
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
<h3>DatePicker slot</h3>
<div class="table-responsive"><table class="api-table table table-hover">
<thead class="thead-light">
<tr>
<th>Slot Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>trigger</td>
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
<h3>DatePicker function</h3>
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
<td>set the date displayed in the panel</td>
<td>function(date: Date/Dayjs)</td>
</tr>
</tbody>
</table></div>
`,s={type:t,typeCode:e,title:d,subtitle:n,componentName:a,description:o,apiContent:r};export{r as apiContent,a as componentName,s as default,o as description,n as subtitle,d as title,t as type,e as typeCode};

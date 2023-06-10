const t="data entry",d="data_input",n="Switch",e="switch",o="switch",c=`<p>Represents a switch between two opposing states, mostly used to trigger &quot;on/off&quot;</p>
`,r=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>Switch property</h3>
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
<td>value to which the switch is bound</td>
<td><code>string</code>/<code>number</code>/<code>boolean</code></td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>Whether to disable the state, the default is false</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>loading</td>
<td>whether it is loading</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>size</td>
<td>Input box size. optional <code>lg</code>, <code>sm</code></td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>colorType</td>
<td>background color type</td>
<td><code>primary</code>/ <code>secondary</code>/ <code>success</code>/ <code>danger</code>/ <code>warning</code>/ <code>info</code>/ <code>light</code>/ <code>dark</code></td>
<td></td>
</tr>
<tr>
<td>loadingColorType</td>
<td>The color type of the rotating icon during loading</td>
<td><code>primary</code>/ <code>secondary</code>/ <code>success</code>/ <code>danger</code>/ <code>warning</code>/ <code>info</code>/ <code>light</code>/ <code>dark</code></td>
<td>primary</td>
</tr>
<tr>
<td>activeValue</td>
<td>value when switch is on</td>
<td><code>string</code>/<code>number</code>/<code>boolean</code></td>
<td>true</td>
</tr>
<tr>
<td>inactiveValue</td>
<td>value when switch is off</td>
<td><code>string</code>/<code>number</code>/<code>boolean</code></td>
<td>false</td>
</tr>
<tr>
<td>activeText</td>
<td>text description when the switch is open</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>inactiveText</td>
<td>Text description when the switch is closed</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>activeColor</td>
<td>background color when the switch is open</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>inactiveColor</td>
<td>background color when switch is closed</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>name</td>
<td>the name property of the switch</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>extraData</td>
<td>Extra data, which will be passed when calling <code>beforeChange</code></td>
<td>any</td>
<td></td>
</tr>
<tr>
<td>beforeChange</td>
<td>The callback function before the switch state changes, if it returns false or promise.reject, it will not change</td>
<td>function</td>
<td></td>
</tr>
<tr>
<td>validateEvent</td>
<td>Whether to trigger form validation when changing the switch state</td>
<td>boolean</td>
<td>true</td>
</tr>
</tbody>
</table></div>
<h3>Switch Events</h3>
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
<td>Triggered when the switch value changes</td>
<td>function(val: string｜number｜boolean)</td>
</tr>
<tr>
<td>click</td>
<td>Triggered when clicked</td>
<td></td>
</tr>
</tbody>
</table></div>
`,a={type:t,typeCode:d,title:n,subtitle:e,componentName:o,description:c,apiContent:r};export{r as apiContent,o as componentName,a as default,c as description,e as subtitle,n as title,t as type,d as typeCode};

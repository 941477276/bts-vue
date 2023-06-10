const t="data entry",e="data_input",n="Slider",d="slider",o="slider",a=`<p>Slider</p>
`,r=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>Slider properties</h3>
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
<td><code>string</code>/<code>number</code>/<code>array</code></td>
<td>0</td>
</tr>
<tr>
<td>min</td>
<td>minimum value</td>
<td>number</td>
<td>0</td>
</tr>
<tr>
<td>max</td>
<td>maximum value</td>
<td>number</td>
<td>100</td>
</tr>
<tr>
<td>disabled</td>
<td>Whether to disable the state, the default is false</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>vertical</td>
<td>vertical mode</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>range</td>
<td>double slider mode</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>rangeMin</td>
<td>The minimum value of the difference between two slider values</td>
<td>number</td>
<td></td>
</tr>
<tr>
<td>rangeMax</td>
<td>maximum value of difference between two slider values</td>
<td>number</td>
<td></td>
</tr>
<tr>
<td>step</td>
<td>Step size, must be greater than 0. When marks is not an empty object, step can be set to null. At this time, the optional value of Slider is only the part marked by marks.</td>
<td>number</td>
<td>1</td>
</tr>
<tr>
<td>showSteps</td>
<td>whether to show breaks</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>included</td>
<td>When there are marks or showSteps, if the value is true, it means the value is included, and if false, it means parallel</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>enableCross</td>
<td>Whether to allow crossing, only valid in range mode</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>marks</td>
<td>Scale mark, the type of key must be number and the value must be in the closed interval [min, max], each label can be styled separately</td>
<td>{ number: string｜{label:string｜vnode; style: object; } }</td>
<td>{}</td>
</tr>
<tr>
<td>showToolTip</td>
<td>Whether to display the tooltip, if it is true, it will always be displayed, otherwise it will not be displayed</td>
<td>boolean</td>
<td></td>
</tr>
<tr>
<td>tooltipTransitionName</td>
<td>transition name of tooltip</td>
<td>string</td>
<td>scale</td>
</tr>
<tr>
<td>tooltipPlacement</td>
<td>Display position of tooltip</td>
<td><code>top</code>/<code>top-start</code>/<code>top-end</code>/<code>bottom</code>/<code>bottom-start</code>/<code>bottom-end</code>/<code>left</code>/<code>left-start</code>/ <code>left-end</code>/<code>right</code>/<code>right-start</code>/<code>right-end</code></td>
<td></td>
</tr>
<tr>
<td>tooltipClass</td>
<td>class name of tooltip</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>tooltipFormatter</td>
<td>tooltip display text formatting function, if return null, hide tooltip</td>
<td>(modelVal: any, percentage: number) =&gt; string｜number｜null｜void</td>
<td></td>
</tr>
<tr>
<td>tooltipRawContent</td>
<td>whether the content of tooltip is html text</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h3>Slider Events</h3>
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
<td>Callback when slider value changes</td>
<td>function(value: number｜string)</td>
</tr>
</tbody>
</table></div>
`,l={type:t,typeCode:e,title:n,subtitle:d,componentName:o,description:a,apiContent:r};export{r as apiContent,o as componentName,l as default,a as description,d as subtitle,n as title,t as type,e as typeCode};

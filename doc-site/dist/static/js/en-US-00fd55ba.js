const t="data display",n="data_display",e="Tabs",d="tab page",a="tabs",o=`<p>Data collections that are related but belong to different categories on separate content</p>
`,r=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>Tabs property</h3>
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
<td>Binding value, the name of the selected tab</td>
<td>string</td>
<td>0</td>
</tr>
<tr>
<td>tabPosition</td>
<td>position of the tab</td>
<td><code>top</code>/<code>left</code>/<code>right</code>/<code>bottom</code></td>
<td>top</td>
</tr>
<tr>
<td>triggerTypeOnOverflow</td>
<td>When the width of the tab navigation list exceeds the parent container, the way to select the overflow tab navigation</td>
<td><code>auto</code>/<code>more</code>/<code>button</code></td>
<td>auto</td>
</tr>
<tr>
<td>hiddenTabsGreaterThan</td>
<td>When triggerTypeOnOverflow is auto, 'more' will be used only when the number of hidden tab navigation reaches this threshold</td>
<td>number</td>
<td>10</td>
</tr>
<tr>
<td>tabBarMaxHeight</td>
<td>The maximum height of tab navigation, less than or equal to 0 is invalid</td>
<td><code>string</code>/<code>number</code></td>
<td>0</td>
</tr>
<tr>
<td>inkBarSpaceBetween</td>
<td>The length of the label navigation highlight bar extending to both ends, less than or equal to 0 is invalid</td>
<td>number</td>
<td>0</td>
</tr>
<tr>
<td>closeable</td>
<td>closeable</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h3>Tabs event</h3>
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
<td>close</td>
<td>Triggered when the tab is closed</td>
<td>function(tabName: string)</td>
</tr>
</tbody>
</table></div>
<h3>TabPane properties</h3>
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
<td>label</td>
<td>tab title</td>
<td><code>string</code>/<code>function</code></td>
<td></td>
</tr>
<tr>
<td>name</td>
<td>tab name (identifier corresponding to tab binding value modelValue)</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>closeable</td>
<td>closeable</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>Whether to disable</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>lazy</td>
<td>Whether to delay rendering of tab content</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>contentLazyRender</td>
<td>The content is rendered in a lazy manner, it will only be rendered after the first selection</td>
<td>boolean</td>
<td>true</td>
</tr>
</tbody>
</table></div>
<h3>TabPane slot</h3>
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
<td>left-extra</td>
<td>extra content on the left</td>
<td></td>
</tr>
<tr>
<td>right-extra</td>
<td>right extra content</td>
<td></td>
</tr>
<tr>
<td>label</td>
<td>tab title</td>
<td></td>
</tr>
</tbody>
</table></div>
`,l={type:t,typeCode:n,title:e,subtitle:d,componentName:a,description:o,apiContent:r};export{r as apiContent,a as componentName,l as default,o as description,d as subtitle,e as title,t as type,n as typeCode};

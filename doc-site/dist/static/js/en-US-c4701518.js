const t="feedback",n="feedback",d="Modal",e="Modal Popup",o="modal",r=`<p>Inform the user and host related operations while preserving the current page state</p>
`,a=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>Modal property</h3>
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
<td>visible(v-model:visible)</td>
<td>Used to control the pop-up window visible</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>teleported</td>
<td>Whether to use teleport. If set to true, it will be appended to the position of append-to</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>appendTo</td>
<td>Node to which the Modal dom will be appended</td>
<td><code>string</code>/<code>dom</code></td>
<td>body</td>
</tr>
<tr>
<td>transitionName</td>
<td>transition animation name</td>
<td>string</td>
<td>fade</td>
</tr>
<tr>
<td>title</td>
<td>title</td>
<td><code>string</code>/<code>() =&gt; stirng｜vnode</code>/<code>vnode</code></td>
<td></td>
</tr>
<tr>
<td>width</td>
<td>popup window width</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>size</td>
<td>popup window size</td>
<td><code>xl</code>(extra large)/<code>lg</code>(large)/<code>sm</code>(small)</td>
<td></td>
</tr>
<tr>
<td>centered</td>
<td>Whether to display in the center</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>mask</td>
<td>Whether to display the mask</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>keyboard</td>
<td>whether to support keyboard esc off</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>maskClosable</td>
<td>Whether the click mask is closed</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>lockScroll</td>
<td>Whether to lock the scroll bar</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>fullscreen</td>
<td>Whether full screen</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>draggable</td>
<td>Whether dragging is possible</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>boundary</td>
<td>Whether dragging cannot exceed the boundary</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>scrollable</td>
<td>Whether the content part of the popup window is scrollable</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>showFooter</td>
<td>whether to show the bottom</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>showClose</td>
<td>Whether to show the close button</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>lazy</td>
<td>whether the first render is delayed</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>destroyOnClose</td>
<td>Whether to destroy the elements of the popup when the popup is closed</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>confirmLoading</td>
<td>whether to disable closing, if the value is true, it cannot be closed in any way, this function can be used in the scene where data is being submitted</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>okText</td>
<td>OK button text</td>
<td>string</td>
<td>OK</td>
</tr>
<tr>
<td>cancelText</td>
<td>cancel button text</td>
<td>string</td>
<td>cancel</td>
</tr>
<tr>
<td>onOk</td>
<td>Confirm button click event, if the event function returns <code>Promise</code> after execution, the popup window will be closed after the state of Promise becomes <code>fulfilled</code></td>
<td>() =&gt; any</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>Modal Events</h3>
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
<td>open</td>
<td>Callback after the popup window is displayed</td>
<td></td>
</tr>
<tr>
<td>close</td>
<td>Callback after the popup window is closed</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>Modal slot</h3>
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
<td>header</td>
<td>header slot</td>
<td></td>
</tr>
<tr>
<td>close</td>
<td>close button content slot</td>
<td></td>
</tr>
<tr>
<td>footer</td>
<td>bottom button slot</td>
<td></td>
</tr>
</tbody>
</table></div>
`,l={type:t,typeCode:n,title:d,subtitle:e,componentName:o,description:r,apiContent:a};export{a as apiContent,o as componentName,l as default,r as description,e as subtitle,d as title,t as type,n as typeCode};

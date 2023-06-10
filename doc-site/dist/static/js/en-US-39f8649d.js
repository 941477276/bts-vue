const t="feedback",e="feedback",d="Drawer",n="drawer",o="drawer",r=`<p>The floating layer panel that slides out from the edge of the screen. Sometimes, the <code>Modal</code> component does not meet our needs, such as your form is very long, or you need to temporarily display some documents, <code>Drawer</code> has almost the same as <code>Modal</code> The API brings a different experience on the UI.</p>
`,a=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>Drawer property</h3>
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
<td>used to control the visibility of the drawer</td>
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
<td>Node to which Drawer dom will be appended</td>
<td><code>string</code>/<code>dom</code></td>
<td>body</td>
</tr>
<tr>
<td>transitionName</td>
<td>transition animation name</td>
<td>string</td>
<td>slide</td>
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
<td>placement</td>
<td>The orientation of the drawer</td>
<td><code>left</code>/<code>top</code>/<code>bottom</code>/<code>right</code></td>
<td>right</td>
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
<td>showHeader</td>
<td>Whether to show the header</td>
<td>boolean</td>
<td>true</td>
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
<td>closeDisabled</td>
<td>Whether to disable the close, if the value is true, it cannot be closed in any way, this function can be used in the scene of submitting data</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>drawerClass</td>
<td>extra classname</td>
<td><code>string</code>/<code>object</code>/<code>array</code></td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>Drawer Events</h3>
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
<td>callback after the drawer is displayed</td>
<td></td>
</tr>
<tr>
<td>close</td>
<td>callback after the drawer is closed</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>Drawer slot</h3>
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
<td>bottom slot</td>
<td></td>
</tr>
</tbody>
</table></div>
`,s={type:t,typeCode:e,title:d,subtitle:n,componentName:o,description:r,apiContent:a};export{a as apiContent,o as componentName,s as default,r as description,n as subtitle,d as title,t as type,e as typeCode};

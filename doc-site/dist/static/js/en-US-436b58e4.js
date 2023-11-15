const t="tool component",e="tool_component",n="DropdownTransition",d="drop down transition",o="dropdown-transition",r=`<p>The most basic drop-down component, you can use it to implement any component with drop-down function</p>
`,i=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>DropdownTransition property</h3>
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
<td>placement</td>
<td>drop-down menu popup position</td>
<td><code>left</code>/<code>top</code>/<code>bottom</code>/<code>right</code>/<code>leftEnd</code>/<code>topEnd</code>/<code>bottomEnd</code>/<code>rightEnd</code></td>
<td>bottom</td>
</tr>
<tr>
<td>referenceRef</td>
<td>Reference element (that is, the element that triggers the drop-down)</td>
<td>Ref&lt;HtmlElement｜VueComponent &gt;</td>
<td></td>
</tr>
<tr>
<td>willVisible</td>
<td>Whether the drop-down menu will be displayed soon, this value needs to be set <code>50ms</code> before the drop-down menu is displayed, so that the component can calculate the real display position of the drop-down menu more accurately</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>tryEndDirection</td>
<td>Whether to try the <code>end</code> direction of the <code>direction</code> direction when the drop-down menu cannot be fully displayed at the specified <code>direction</code> position</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>tryAllDirection</td>
<td>Whether to try to display in all directions when the dropdown menu cannot be fully displayed in the specified <code>direction</code></td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>useZoomTransition</td>
<td>Whether to use the zoom transition effect, if the value is <code>true</code>, then no matter where the drop-down menu is displayed, the drop-down menu will transition with the zoom effect</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>position</td>
<td>drop-down menu positioning method</td>
<td>string</td>
<td>absolute</td>
</tr>
<tr>
<td>setWidth</td>
<td>Whether to set the width of the drop-down menu equal to the width of the reference element</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>setMinWidth</td>
<td>Whether to set the minimum width of the drop-down menu equal to the width of the reference element</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>offset</td>
<td>The offset of the dropdown menu from the reference element</td>
<td>{ top?: number; left?: number; }</td>
<td>false</td>
</tr>
<tr>
<td>customTransitionName</td>
<td>drop-down menu custom transition name</td>
<td>(direction) =&gt; string</td>
<td></td>
</tr>
<tr>
<td>customStyle</td>
<td>custom drop-down menu style</td>
<td>(direction) =&gt; string</td>
<td></td>
</tr>
<tr>
<td>contextMenu</td>
<td>Whether it is a right-click menu</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>virtualMouseEvent</td>
<td>Virtual mouse event object, only valid when contextMenu=true</td>
<td><code>{ clientX: number; clientY: number; contextElement?: HTMLElement; // Context element }</code></td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>DropdownTransition event</h3>
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
<td>before-enter</td>
<td>Same as <code>transition</code> component before-enter event</td>
<td></td>
</tr>
<tr>
<td>enter</td>
<td>Same as <code>transition</code> component enter event</td>
<td></td>
</tr>
<tr>
<td>after-enter</td>
<td>same as <code>transition</code> component after-enter event</td>
<td></td>
</tr>
<tr>
<td>before-leave</td>
<td>same as <code>transition</code> component before-leave event</td>
<td></td>
</tr>
<tr>
<td>leave</td>
<td>Same as <code>transition</code> component leave event</td>
<td></td>
</tr>
<tr>
<td>after-leave</td>
<td>Same as <code>transition</code> component after-leave event</td>
<td></td>
</tr>
<tr>
<td>position-change</td>
<td>drop-down menu position information <code>change</code> event</td>
<td>function (positionInfo: object)</td>
</tr>
</tbody>
</table></div>
<h3>DropdownTransition function</h3>
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
<td>refresh</td>
<td>Refresh positioning</td>
<td></td>
</tr>
</tbody>
</table></div>
`,a={type:t,typeCode:e,title:n,subtitle:d,componentName:o,description:r,apiContent:i};export{i as apiContent,o as componentName,a as default,r as description,d as subtitle,n as title,t as type,e as typeCode};

const t="universal",n="generic",e="Dropdown",d="drop-down menu",o="dropdown",r=`<p>A drop-down menu that can intelligently and automatically adjust the display position and supports dynamic loading of drop-down content</p>
`,a=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>Dropdown property</h3>
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
<td>tryReverseDirection</td>
<td>Whether to try to display in the reverse direction when the drop-down menu cannot be fully displayed at the specified <code>direction</code></td>
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
<td>trigger</td>
<td>How to trigger the dropdown menu</td>
<td><code>click</code>/<code>hover</code>/<code>contextMenu</code></td>
<td>hover</td>
</tr>
<tr>
<td>disabled</td>
<td>Whether to disable the state</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>lazy</td>
<td>Whether to delay rendering</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>teleported</td>
<td>Whether to use teleport, if the value is <code>true</code>, the dom of the drop-down menu will be sent to <code>appendTo</code></td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>appendTo</td>
<td>the parent element to which the drop-down menu dom node will be sent</td>
<td>string</td>
<td>body</td>
</tr>
<tr>
<td>showToggleArrow</td>
<td>Whether the target element that triggers the dropdown menu shows a downward triangle</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>destroyOnHide</td>
<td>Whether to destroy the dropdown menu when hidden</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>dropdownClass</td>
<td>extra class for dropdown</td>
<td>string</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>Dropdown event</h3>
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
<td>show</td>
<td>Triggered when the dropdown menu is shown</td>
<td></td>
</tr>
<tr>
<td>hide</td>
<td>Triggered when the dropdown menu is hidden</td>
<td></td>
</tr>
<tr>
<td>clickOutside</td>
<td>Click on a place other than a drop-down menu and trigger element to trigger</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>Dropdown function</h3>
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
<td>show</td>
<td>Show drop-down menu</td>
<td></td>
</tr>
<tr>
<td>hide</td>
<td>Hide dropdown menu</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>DropdownItem property</h3>
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
<td>divider</td>
<td>Whether to display lines</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>active</td>
<td>whether it is active</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h3>DropdownItem event</h3>
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
<td>click</td>
<td>click event</td>
<td>(evt: ClickEvent)</td>
</tr>
</tbody>
</table></div>
`,h={type:t,typeCode:n,title:e,subtitle:d,componentName:o,description:r,apiContent:a};export{a as apiContent,o as componentName,h as default,r as description,d as subtitle,e as title,t as type,n as typeCode};

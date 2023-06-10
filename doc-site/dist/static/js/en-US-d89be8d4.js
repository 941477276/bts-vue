const t="navigation",n="navigation",e="Menu",d="Navigation Menu",a="menu",r=`<p>Menu list providing navigation for pages and functions</p>
`,o=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>Menu property</h3>
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
<td>selectedKeys(v-model:selectedKeys)</td>
<td>Binding value, selected menu item key array</td>
<td><code>string</code>/<code>string[]</code></td>
<td>[]</td>
</tr>
<tr>
<td>mode</td>
<td>menu type</td>
<td><code>horizontal</code>/<code>vertical</code>/<code>h5</code></td>
<td>horizontal</td>
</tr>
<tr>
<td>subMenuDisplayMode</td>
<td>Submenu display mode</td>
<td><code>collapse</code>/<code>dropdown</code>/<code>drawer</code></td>
<td></td>
</tr>
<tr>
<td>subMenuTrigger</td>
<td>The trigger method for submenu opening (only valid when <code>mode=horizontal</code>)</td>
<td><code>click</code>/<code>hover</code></td>
<td></td>
</tr>
<tr>
<td>collapse</td>
<td>Whether to collapse the collapsed menu horizontally (only available when <code>mode=vertical</code>)</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>uniqueOpened</td>
<td>Whether to keep only one opened submenu at the same level</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>openedKeys</td>
<td>The currently expanded SubMenu menu item key array</td>
<td>string[]</td>
<td>[]</td>
</tr>
<tr>
<td>indent</td>
<td>indent width of menu in vertical mode</td>
<td>number</td>
<td>16</td>
</tr>
<tr>
<td>indentUnit</td>
<td>The unit of the indent width when the menu is in vertical mode</td>
<td>string</td>
<td>px</td>
</tr>
<tr>
<td>closeable</td>
<td>closeable</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>autoScrollToSelectedMenu</td>
<td>Whether to automatically scroll to the first selected menu, only valid when mode=vertical and there is a scroll bar</td>
<td>boolean</td>
<td>true</td>
</tr>
</tbody>
</table></div>
<h3>Menu Events</h3>
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
<td>openChange</td>
<td>Triggered when the menu is expanded/collapsed</td>
<td>function(currentKeyIndex: any, isOpen: boolean, keyIndexPath: {keyIndex: any, name: stirng}[])</td>
</tr>
<tr>
<td>itemClick</td>
<td>Triggered when a menu item is clicked</td>
<td>function(itemInfo: {keyIndex: any, name: stirng}, event: MouseEvent)</td>
</tr>
<tr>
<td>select</td>
<td>Triggered when a menu item is selected or unselected</td>
<td>function(keyIndex: string, isSelected: boolean, keyIndexPath: {keyIndex: any, name: stirng}[])</td>
</tr>
</tbody>
</table></div>
<h3>MenuItem property</h3>
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
<td>title</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>keyIndex</td>
<td>unique identifier, required</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>Whether to disable</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h3>MenuItem Events</h3>
<p>| Event Name | Description | Callback Parameters |
|----------|---------|---------------------------- ---|
| click | Triggered when the menu is clicked | function(itemInfo: {keyIndex: any, name: stirng}, event: MouseEvent) |</p>
<h3>MenuItem slot</h3>
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
<td>icon</td>
<td>custom icon</td>
<td></td>
</tr>
<tr>
<td>default</td>
<td>custom title</td>
<td></td>
</tr>
<tr>
<td>content</td>
<td>other content</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>SubMenu property</h3>
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
<td>title</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>keyIndex</td>
<td>unique identifier, required</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>Whether to disable</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>dropdownClass</td>
<td>classname of the dropdown submenu</td>
<td><code>string</code>/<code>array</code>/<code>object</code></td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>SubMenu event</h3>
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
<td>expand</td>
<td>Triggered when the menu is expanded</td>
<td>function(componentId: string)</td>
</tr>
</tbody>
</table></div>
<h3>SubMenu slot</h3>
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
<td>icon</td>
<td>custom icon</td>
<td></td>
</tr>
<tr>
<td>title</td>
<td>custom title</td>
<td></td>
</tr>
<tr>
<td>arrow</td>
<td>triangular arrow</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>SubMenu function</h3>
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
<td>expandSubmenu</td>
<td>expand/collapse menu</td>
<td><code>expand</code>, whether to expand the menu, if the value is <code>true</code>, it will be expanded</td>
</tr>
</tbody>
</table></div>
<h3>MenuItemGroup property</h3>
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
<td>title</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>keyIndex</td>
<td>unique identifier, required</td>
<td>string</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>MenuItemGroup slot</h3>
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
<td>title</td>
<td>custom title</td>
<td></td>
</tr>
</tbody>
</table></div>
`,l={type:t,typeCode:n,title:e,subtitle:d,componentName:a,description:r,apiContent:o};export{o as apiContent,a as componentName,l as default,r as description,d as subtitle,e as title,t as type,n as typeCode};

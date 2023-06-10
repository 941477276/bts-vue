const t="feedback",n="feedback",d="Toast",o="Lightweight notification",e="toast",s=`<p>Display notification reminder information globally</p>
`,i=`<h2 class="api-h2" id="API_h2">API</h2>
<p>The component provides some static methods, the usage and parameters are as follows:</p>
<ul>
<li>BsToast(options: ToastOption, context?: AppContext) =&gt; {id: string; show: () =&gt; void;; show: () =&gt; void;}</li>
<li>BsToast.primary(options: ToastOption, context?: AppContext) =&gt; {id: string; show: () =&gt; void;; show: () =&gt; void;}</li>
<li>BsToast.secondary(options: ToastOption, context?: AppContext) =&gt; {id: string; show: () =&gt; void;; show: () =&gt; void;}</li>
<li>BsToast.success(options: ToastOption, context?: AppContext) =&gt; {id: string; show: () =&gt; void;; show: () =&gt; void;}</li>
<li>BsToast.danger(options: ToastOption, context?: AppContext) =&gt; {id: string; show: () =&gt; void;; show: () =&gt; void;}</li>
<li>BsToast.warning(options: ToastOption, context?: AppContext) =&gt; {id: string; show: () =&gt; void;; show: () =&gt; void;}</li>
<li>BsToast.info(options: ToastOption, context?: AppContext) =&gt; {id: string; show: () =&gt; void;; show: () =&gt; void;}</li>
<li>BsToast.light(options: ToastOption, context?: AppContext) =&gt; {id: string; show: () =&gt; void;; show: () =&gt; void;}</li>
<li>BsToast.dark(options: ToastOption, context?: AppContext) =&gt; {id: string; show: () =&gt; void;; show: () =&gt; void;}</li>
</ul>
<p>The <code>options</code> object properties are as follows</p>
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
<td>type</td>
<td>topic type</td>
<td><code>primary</code>/ <code>secondary</code>/ <code>success</code>/ <code>danger</code>/ <code>warning</code>/ <code>info</code>/ <code>light</code>/ <code>dark</code> /</td>
<td></td>
</tr>
<tr>
<td>title</td>
<td>title</td>
<td><code>string</code>/<code>vnode</code>/<code>() =&gt; vnode｜string </code></td>
<td></td>
</tr>
<tr>
<td>secondaryTitle</td>
<td>secondary title</td>
<td><code>string</code>/<code>vnode</code>/<code>() =&gt; vnode｜string</code></td>
<td></td>
</tr>
<tr>
<td>message</td>
<td>content</td>
<td><code>string</code>/<code>vnode</code>/<code>() =&gt; vnode｜string</code></td>
<td></td>
</tr>
<tr>
<td>placement</td>
<td>display position</td>
<td><code>top-left</code>/<code>top-right</code>/<code>top-center</code>/<code>bottom-left</code>/<code>bottom-right</code>/<code>bottom-center</code></td>
<td>top-right</td>
</tr>
<tr>
<td>id</td>
<td>message ID</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>style</td>
<td>custom style</td>
<td><code>string</code>/<code>object</code></td>
<td></td>
</tr>
<tr>
<td>fixed</td>
<td>Whether to use <code>fixed</code> positioning</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>dangerouslyUseHTMLString</td>
<td>Whether to treat the message attribute as an HTML fragment</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>duration</td>
<td>Display time in milliseconds. Set to 0 will not automatically close</td>
<td>number</td>
<td>3000</td>
</tr>
<tr>
<td>customClass</td>
<td>custom classname</td>
<td><code>string</code>/<code>object</code></td>
<td></td>
</tr>
<tr>
<td>showClose</td>
<td>Whether to show the close button</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>offsetTop</td>
<td>Toast's offset from the top of the window (unit: px)</td>
<td>number</td>
<td>20</td>
</tr>
<tr>
<td>offsetLeft</td>
<td>toast The offset from the right side of the window, if it is 0, it will not be set (unit: px)</td>
<td>number</td>
<td></td>
</tr>
<tr>
<td>teleported</td>
<td>Set the root element of the Message component, the default is document.body</td>
<td><code>string</code>/<code>HTMLElement</code></td>
<td>body</td>
</tr>
<tr>
<td>appendTo</td>
<td>Set the root element of the Message component, the default is document.body</td>
<td><code>string</code>/<code>HTMLElement</code></td>
<td>body</td>
</tr>
<tr>
<td>transitionName</td>
<td>transition effect name</td>
<td>stirng</td>
<td>bs-toast-fade</td>
</tr>
<tr>
<td>onShow</td>
<td>callback function when showing</td>
<td>(evt: Event) =&gt; void</td>
<td>false</td>
</tr>
<tr>
<td>onHide</td>
<td>callback function when closed</td>
<td>(evt: Event) =&gt; void</td>
<td>false</td>
</tr>
<tr>
<td>onClick</td>
<td>Callback function when clicked</td>
<td>(evt: Event) =&gt; void</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h3>Toast Events</h3>
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
<td>Callback function when displaying</td>
<td></td>
</tr>
<tr>
<td>hide</td>
<td>Callback function when closing</td>
<td></td>
</tr>
<tr>
<td>click</td>
<td>Callback function when clicked</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>Toast slot</h3>
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
<td>custom header</td>
<td></td>
</tr>
<tr>
<td>title</td>
<td>custom title (invalid when header slot is passed)</td>
<td></td>
</tr>
<tr>
<td>secondaryTitle</td>
<td>Custom secondary title (invalid when header slot is passed)</td>
<td></td>
</tr>
<tr>
<td>close</td>
<td>Custom close button</td>
<td></td>
</tr>
<tr>
<td>default</td>
<td>custom message</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>Toast other global methods</h3>
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
<td>BsToast.show</td>
<td>Show notification</td>
<td><code>toastId</code>, notification ID</td>
</tr>
<tr>
<td>BsToast.hide</td>
<td>hide notification</td>
<td><code>toastId</code>, notification ID</td>
</tr>
<tr>
<td>BsToast.hideAll</td>
<td>Hide all notifications</td>
<td></td>
</tr>
</tbody>
</table></div>
`,a={type:t,typeCode:n,title:d,subtitle:o,componentName:e,description:s,apiContent:i};export{i as apiContent,e as componentName,a as default,s as description,o as subtitle,d as title,t as type,n as typeCode};

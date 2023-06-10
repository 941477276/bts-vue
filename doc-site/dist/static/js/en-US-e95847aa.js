const t="feedback",e="feedback",d="PopConfirm",n="bubble confirmation",o="pop-confirm",r=`<p>Click on the element to pop up a bubble confirmation box</p>
`,a=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>PopConfirm property</h3>
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
<td>trigger</td>
<td>trigger method</td>
<td><code>click</code>/<code>hover</code>/<code>focus</code>/<code>contextmenu</code></td>
<td>hover</td>
</tr>
<tr>
<td>placement</td>
<td>display position, reference: <a href="https://popper.js.org/docs/v2/">popper.js parameters</a></td>
<td><code>top</code>/<code>top-start</code>/<code>top-end</code>/<code>bottom</code> /<code>bottom-start</code>/<code>bottom-end</code>/<code>left</code>/<code>left-start</code>/<code>left-end</code>/<code>right</code>/<code>right-start</code>/<code>right-end</code></td>
<td>bottom</td>
</tr>
<tr>
<td>teleported</td>
<td>Whether to use teleport. If set to true, it will be appended to <code>append-to</code></td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>appendTo</td>
<td>Specifies which element the PopConfirm dom will be appended to</td>
<td><code>string</code>/<code>dom</code></td>
<td>body</td>
</tr>
<tr>
<td>visible</td>
<td>Whether the tooltip is displayed, if the value is <code>boolean</code> type, then the tooltip is controlled mode</td>
<td><code>boolean</code></td>
<td>false</td>
</tr>
<tr>
<td>showCondition</td>
<td>The condition to display, if the function returns <code>false</code> it will not be displayed</td>
<td><code>() =&gt; boolean</code></td>
<td></td>
</tr>
<tr>
<td>hideCondition</td>
<td>The condition when hiding, if the function returns <code>false</code> it will not be displayed</td>
<td><code>() =&gt; boolean</code></td>
<td></td>
</tr>
<tr>
<td>content</td>
<td>The displayed content can also be passed to the DOM via <code>slot#content</code></td>
<td><code>string</code>/<code>number</code></td>
<td></td>
</tr>
<tr>
<td>isRawContent</td>
<td>Whether the content in content is processed as an HTML string</td>
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
<td>hideDisabled</td>
<td>Whether to disable</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>enterable</td>
<td>Whether the mouse can enter the tooltip</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>destroyOnHide</td>
<td>Whether to destroy the content after hiding</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>transitionName</td>
<td>The name of the transition animation</td>
<td>string</td>
<td>fade</td>
</tr>
<tr>
<td>showArrow</td>
<td>whether to show the triangle arrow</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>popperClass</td>
<td>extra classname for popper</td>
<td><code>string</code>/<code>array</code>/<code>object</code></td>
<td></td>
</tr>
<tr>
<td>popperStyle</td>
<td>style of popper</td>
<td><code>string</code>/<code>array</code>/<code>object</code></td>
<td></td>
</tr>
<tr>
<td>arrowClass</td>
<td>Triangular arrow extra classname</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>virtualTriggering</td>
<td>Whether to trigger by virtual elements, reference: <a href="https://popper.js.org/docs/v2/virtual-elements/">popper.js parameters</a></td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>virtualRef</td>
<td>The ref of the triggering element, only valid when <code>virtualTriggering=true</code>, reference: <a href="https://popper.js.org/docs/v2/virtual-elements/">popper.js parameters</a></td>
<td><code>string( css selector)</code>/<code>() =&gt; dom</code>/<code>dom</code>/<code>object</code></td>
<td></td>
</tr>
<tr>
<td>showDelay</td>
<td>display delay time, in milliseconds</td>
<td>number</td>
<td>100</td>
</tr>
<tr>
<td>hideDelay</td>
<td>hide delay time, in milliseconds</td>
<td>number</td>
<td>100</td>
</tr>
<tr>
<td>offset</td>
<td>The offset of where popper appears, refer to: <a href="https://popper.js.org/docs/v2/modifiers/offset/">popper.js parameters</a></td>
<td>number[]</td>
<td>[0, 8]</td>
</tr>
<tr>
<td>arrowOffset</td>
<td>The offset of the triangular arrow, reference: <a href="https://popper.js.org/docs/v2/modifiers/arrow/">popper.js parameters</a></td>
<td>number</td>
<td>5</td>
</tr>
<tr>
<td>strategy</td>
<td>popper positioning strategy, the default is absolute. If the reference element that triggers the popper is in a fixed positioned element, you should use fixed</td>
<td><code>absolute</code>/<code>fixed</code></td>
<td>absolute</td>
</tr>
<tr>
<td>gpuAcceleration</td>
<td>Whether to use GPU accelerated style to target popper. If enabled, transform: translate will be used for positioning, otherwise top/left will be used for positioning</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>popperOptions</td>
<td>For other parameters of popperjs, see: <a href="https://popper.js.org/docs/v2/">popper.js parameters</a></td>
<td>object</td>
<td>{}</td>
</tr>
<tr>
<td>width</td>
<td>maximum width</td>
<td><code>string</code>/<code>number</code></td>
<td></td>
</tr>
<tr>
<td>okText</td>
<td>Confirm button text</td>
<td>string</td>
<td>OK</td>
</tr>
<tr>
<td>okType</td>
<td>Confirm button type</td>
<td><code>primary</code>/ <code>secondary</code>/ <code>success</code>/ <code>danger</code>/ <code>warning</code>/ <code>info</code>/ <code>light</code>/ <code>dark</code> /<code>link</code></td>
<td>primary</td>
</tr>
<tr>
<td>okButtonProps</td>
<td>other parameters of the confirmation button</td>
<td>object</td>
<td>{}</td>
</tr>
<tr>
<td>cancelText</td>
<td>cancel button text</td>
<td>string</td>
<td>cancel</td>
</tr>
<tr>
<td>cancelType</td>
<td>cancel button type</td>
<td><code>primary</code>/ <code>secondary</code>/ <code>success</code>/ <code>danger</code>/ <code>warning</code>/ <code>info</code>/ <code>light</code>/ <code>dark</code> /<code>link</code></td>
<td></td>
</tr>
<tr>
<td>cancelButtonProps</td>
<td>other parameters of the cancel button</td>
<td>object</td>
<td>{}</td>
</tr>
<tr>
<td>showCancel</td>
<td>whether to show the cancel button</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>showIcon</td>
<td>whether to show icon</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>hideDisabled</td>
<td>Whether to disable hiding</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>hideOnConfirmed</td>
<td>Whether to hide automatically after confirmation is completed</td>
<td>boolean</td>
<td>true</td>
</tr>
</tbody>
</table></div>
<h3>PopConfirm event</h3>
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
<td>before-show</td>
<td>Triggered before the tooltip is displayed</td>
<td></td>
</tr>
<tr>
<td>show</td>
<td>Triggered after the tooltip is displayed</td>
<td></td>
</tr>
<tr>
<td>before-hide</td>
<td>trigger before tooltip is hidden</td>
<td></td>
</tr>
<tr>
<td>hide</td>
<td>Triggered after the tooltip is hidden</td>
<td></td>
</tr>
<tr>
<td>content-mouseenter</td>
<td>Triggered when the mouse moves into the tooltip content, same as the mouseenter event of DOM</td>
<td></td>
</tr>
<tr>
<td>content-mouseleave</td>
<td>Triggered when the mouse moves into the tooltip content, same as the mouseenter event of DOM</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>PopConfirm slot</h3>
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
<td>icon</td>
<td></td>
</tr>
<tr>
<td>content</td>
<td>content</td>
<td></td>
</tr>
<tr>
<td>cancel-button</td>
<td>cancel button</td>
<td></td>
</tr>
<tr>
<td>ok-button</td>
<td>OK button</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>PopConfirm function</h3>
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
<td>Show bubble card</td>
<td></td>
</tr>
<tr>
<td>hide</td>
<td>hide bubble card</td>
<td></td>
</tr>
</tbody>
</table></div>
`,c={type:t,typeCode:e,title:d,subtitle:n,componentName:o,description:r,apiContent:a};export{a as apiContent,o as componentName,c as default,r as description,n as subtitle,d as title,t as type,e as typeCode};

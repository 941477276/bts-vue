const t="feedback",e="feedback",n="Message",s="message prompt",d="message",o=`<p>Global display of operation feedback information, often used for feedback prompts after active operations</p>
`,a=`<h2 class="api-h2" id="API_h2">API</h2>
<p>The component provides some static methods, the usage and parameters are as follows:</p>
<ul>
<li>BsMessage(messageOrConfig: string|MessageConfig, context?: AppConfig)</li>
<li>BsMessage.success(messageOrConfig: string|MessageConfig, context?: AppConfig)</li>
<li>BsMessage.danger(messageOrConfig: string|MessageConfig, context?: AppConfig)</li>
<li>BsMessage.warning(messageOrConfig: string|MessageConfig, context?: AppConfig)</li>
<li>BsMessage.info(messageOrConfig: string|MessageConfig, context?: AppConfig)</li>
</ul>
<blockquote>
<p>The return value of the above function is messageId</p>
</blockquote>
<p><code>MessageConfig</code> object properties are as follows</p>
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
<td>message type</td>
<td><code>success</code>/ <code>danger</code>/ <code>warning</code>/ <code>info</code></td>
<td>info</td>
</tr>
<tr>
<td>id</td>
<td>message ID</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>message</td>
<td>message text</td>
<td><code>stirng</code>/<code>vnode</code>/<code>() =&gt; vnode</code></td>
<td></td>
</tr>
<tr>
<td>icon</td>
<td>icon</td>
<td>vnode</td>
<td></td>
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
<td>string</td>
<td></td>
</tr>
<tr>
<td>showClose</td>
<td>Whether to show the close button</td>
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
<td>offsetTop</td>
<td>Message offset from the top of the window (unit: px)</td>
<td>number</td>
<td>20</td>
</tr>
<tr>
<td>appendTo</td>
<td>Set the root element of the Message component, the default is document.body</td>
<td><code>string</code>/<code>HTMLElement</code></td>
<td>body</td>
</tr>
<tr>
<td>grouping</td>
<td>Whether to combine messages with the same content, VNode type messages are not supported (especially suitable when displaying ajax request error messages)</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>onClose</td>
<td>The callback function before the message is closed</td>
<td>(vm: VNode) =&gt; void</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h3>Message other global methods</h3>
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
<td>closeAllMessage</td>
<td>close all messages</td>
<td></td>
</tr>
<tr>
<td>closeMessage</td>
<td>Close the specified message, the parameter messageId is the message ID, userOnClose is the callback before the message is closed</td>
<td>(messageId: string, userOnClose?: (vm: VNode) =&gt; void): void</td>
</tr>
</tbody>
</table></div>
`,i={type:t,typeCode:e,title:n,subtitle:s,componentName:d,description:o,apiContent:a};export{a as apiContent,d as componentName,i as default,o as description,s as subtitle,n as title,t as type,e as typeCode};

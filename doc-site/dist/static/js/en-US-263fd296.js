const t="feedback",n="feedback",e="MessageBox",d="message box",o="message-box",s=`<p>A set of modal dialog components implemented by simulating the message prompt box of the system, used for message prompt, confirmation message and submission content</p>
`,i=`<h2 class="api-h2" id="API_h2">API</h2>
<p>The component provides some static methods, the usage and parameters are as follows:</p>
<ul>
<li>BsMessageBox(options: MessageBoxOptions)</li>
<li>BsMessageBox.success(titleOrOptions: string|MessageBoxOptions, message?: string, context?: AppConfig)</li>
<li>BsMessageBox.danger(titleOrOptions: string|MessageBoxOptions, message?: string, context?: AppConfig)</li>
<li>BsMessageBox.warning(titleOrOptions: string|MessageBoxOptions, message?: string, context?: AppConfig)</li>
<li>BsMessageBox.info(titleOrOptions: string|MessageBoxOptions, message?: string, context?: AppConfig)</li>
<li>BsMessageBox.prompt(titleOrOptions: string|MessageBoxOptions, message?: string, context?: AppConfig)</li>
</ul>
<blockquote>
<p>The return value of the above function is messageBoxId</p>
</blockquote>
<p><code>MessageBoxOptions</code> object properties are as follows</p>
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
<td>message popup type</td>
<td><code>success</code>/ <code>danger</code>/ <code>warning</code>/ <code>info</code>/<code>prompt</code></td>
<td>info</td>
</tr>
<tr>
<td>id</td>
<td>Message popup ID</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>title</td>
<td>title of message popup window</td>
<td><code>stirng</code>/<code>vnode</code>/<code>() =&gt; vnode</code></td>
<td></td>
</tr>
<tr>
<td>message</td>
<td>Message popup text</td>
<td><code>stirng</code>/<code>vnode</code>/<code>() =&gt; vnode</code></td>
<td></td>
</tr>
<tr>
<td>icon</td>
<td>icon</td>
<td><code>vnode</code>/<code>() =&gt; vnode</code></td>
<td></td>
</tr>
<tr>
<td>dangerouslyUseHTMLString</td>
<td>Whether to treat the message attribute as an HTML fragment</td>
<td>boolean</td>
<td>false</td>
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
<td>showOkButton</td>
<td>Whether to show the OK button</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>showCancelButton</td>
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
<td>mask</td>
<td>Whether to display the mask</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>onOkAutoClose</td>
<td>Whether the field is closed after clicking the OK button</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>dialogTheme</td>
<td>Whether to display as a pop-up window style</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>centered</td>
<td>Whether to display in the center</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>keyboard</td>
<td>whether to support keyboard esc off</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>closeOnClickModal</td>
<td>Whether to close the click mask</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>okLoading</td>
<td>Determine whether the button is in the loading state</td>
<td><code>boolean</code>/<code>Ref&lt;boolean&gt;</code></td>
<td>false</td>
</tr>
<tr>
<td>cannotCloseOnOkLoading</td>
<td>Do not allow closing when the OK button is in the loading state</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>okDisabled</td>
<td>Determine whether the button is disabled</td>
<td><code>boolean</code>/<code>Ref&lt;boolean&gt;</code></td>
<td>false</td>
</tr>
<tr>
<td>okType</td>
<td>Type of OK button</td>
<td><code>primary</code>/ <code>secondary</code>/ <code>success</code>/ <code>danger</code>/ <code>warning</code>/ <code>info</code>/ <code>light</code>/ <code>dark</code></td>
<td>primary</td>
</tr>
<tr>
<td>okText</td>
<td>Text of OK button</td>
<td>string</td>
<td>OK</td>
</tr>
<tr>
<td>okLoadingText</td>
<td>The text displayed in the loading state of the OK button</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>okLoadingText</td>
<td>The text displayed in the loading state of the OK button</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>okSize</td>
<td>OK button size. optional <code>lg</code>, <code>sm</code></td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>cancelText</td>
<td>text of the cancel button</td>
<td>string</td>
<td>cancel</td>
</tr>
<tr>
<td>cancelSize</td>
<td>The size of the cancel button. optional <code>lg</code>, <code>sm</code></td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>width</td>
<td>width</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>maxWidth</td>
<td>maximum width</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>inputLabel</td>
<td>The description text of the input box, only valid when <code>type=prompt</code></td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>inputType</td>
<td>The type of the input box, only valid when <code>type=prompt</code></td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>inputPlaceholder</td>
<td>The placeholder of the input box, only valid in <code>type=prompt</code></td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>inputValue</td>
<td>The initial value of the input box, only valid when <code>type=prompt</code></td>
<td><code>string</code>/<code>number</code></td>
<td></td>
</tr>
<tr>
<td>inputRules</td>
<td>The validation rules of the input box are consistent with the validation rules of &lt;bs-form-item&gt;, only valid when <code>type=prompt</code></td>
<td>object[]</td>
<td>[]</td>
</tr>
<tr>
<td>inputProps</td>
<td>Other properties of the input box, consistent with the validation rules of &lt;bs-form-item&gt;, only valid when <code>type=prompt</code></td>
<td>object</td>
<td>{}</td>
</tr>
<tr>
<td>inputBefore</td>
<td>The front content of the input box, only valid when <code>type=prompt</code></td>
<td><code>stirng</code>/<code>vnode</code>/<code>() =&gt; vnode</code></td>
<td></td>
</tr>
<tr>
<td>inputAfter</td>
<td>The after content of the input box, only valid when <code>type=prompt</code></td>
<td><code>stirng</code>/<code>vnode</code>/<code>() =&gt; vnode</code></td>
<td></td>
</tr>
<tr>
<td>onOk</td>
<td>Click OK callback, the parameter is the close function, when the promise is returned, it will be automatically closed after resolve, and it will not be closed if it returns false</td>
<td>function</td>
<td></td>
</tr>
<tr>
<td>onCancel</td>
<td>Click to cancel the callback, the parameter is the closing function, when the promise is returned, it will be automatically closed after resolve, and it will not be closed if it returns false</td>
<td>function</td>
<td></td>
</tr>
<tr>
<td>onClose</td>
<td>The callback function when closing, the parameter is the closing function, when the promise is returned, it will be automatically closed after resolving, and it will not be closed if it returns false</td>
<td>function</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>MessageBox other global methods</h3>
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
<td>closeAllMessageBox</td>
<td>Close all message popups</td>
<td></td>
</tr>
<tr>
<td>closeMessageBox</td>
<td>Close the specified message popup window, the parameter messageBoxId is the ID of the message popup window</td>
<td></td>
</tr>
</tbody>
</table></div>
`,r={type:t,typeCode:n,title:e,subtitle:d,componentName:o,description:s,apiContent:i};export{i as apiContent,o as componentName,r as default,s as description,d as subtitle,e as title,t as type,n as typeCode};

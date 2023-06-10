const t="反馈",d="feedback",n="MessageBox",e="消息弹框",o="message-box",s=`<p>模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容</p>
`,r=`<h2 class="api-h2" id="API_h2">API</h2>
<p>组件提供了一些静态方法，使用方式和参数如下：</p>
<ul>
<li>BsMessageBox(options: MessageBoxOptions)</li>
<li>BsMessageBox.success(titleOrOptions: string|MessageBoxOptions, message?: string, context?: AppConfig)</li>
<li>BsMessageBox.danger(titleOrOptions: string|MessageBoxOptions, message?: string, context?: AppConfig)</li>
<li>BsMessageBox.warning(titleOrOptions: string|MessageBoxOptions, message?: string, context?: AppConfig)</li>
<li>BsMessageBox.info(titleOrOptions: string|MessageBoxOptions, message?: string, context?: AppConfig)</li>
<li>BsMessageBox.prompt(titleOrOptions: string|MessageBoxOptions, message?: string, context?: AppConfig)</li>
</ul>
<blockquote>
<p>以上函数的返回值为 messageBoxId</p>
</blockquote>
<p><code>MessageBoxOptions</code>对象属性如下</p>
<div class="table-responsive"><table class="api-table table table-hover">
<thead class="thead-light">
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>type</td>
<td>消息弹窗类型</td>
<td><code>success</code>/ <code>danger</code>/ <code>warning</code>/ <code>info</code>/<code>prompt</code></td>
<td>info</td>
</tr>
<tr>
<td>id</td>
<td>消息弹窗ID</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>title</td>
<td>消息弹窗标题</td>
<td><code>stirng</code>/<code>vnode</code>/<code>() =&gt; vnode</code></td>
<td></td>
</tr>
<tr>
<td>message</td>
<td>消息弹窗文字</td>
<td><code>stirng</code>/<code>vnode</code>/<code>() =&gt; vnode</code></td>
<td></td>
</tr>
<tr>
<td>icon</td>
<td>图标</td>
<td><code>vnode</code>/<code>() =&gt; vnode</code></td>
<td></td>
</tr>
<tr>
<td>dangerouslyUseHTMLString</td>
<td>是否将 message 属性作为 HTML 片段处理</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>customClass</td>
<td>自定义classname</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>showClose</td>
<td>是否显示关闭按钮</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>showOkButton</td>
<td>是否显示确定按钮</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>showCancelButton</td>
<td>是否显示取消按钮</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>showIcon</td>
<td>是否显示图标</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>mask</td>
<td>是否显示遮罩</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>onOkAutoClose</td>
<td>点击确定按钮后是否字段关闭</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>dialogTheme</td>
<td>是否显示为弹窗样式</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>centered</td>
<td>是否居中显示</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>keyboard</td>
<td>是否支持键盘 esc 关闭</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>closeOnClickModal</td>
<td>点击遮罩是否关闭</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>okLoading</td>
<td>确定按钮是否处于loading状态</td>
<td><code>boolean</code>/<code>Ref&lt;boolean&gt;</code></td>
<td>false</td>
</tr>
<tr>
<td>cannotCloseOnOkLoading</td>
<td>当确定按钮为loading状态时不允许关闭</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>okDisabled</td>
<td>确定按钮是否为disabled状态</td>
<td><code>boolean</code>/<code>Ref&lt;boolean&gt;</code></td>
<td>false</td>
</tr>
<tr>
<td>okType</td>
<td>确定按钮的类型</td>
<td><code>primary</code>/ <code>secondary</code>/ <code>success</code>/ <code>danger</code>/ <code>warning</code>/ <code>info</code>/ <code>light</code>/ <code>dark</code></td>
<td>primary</td>
</tr>
<tr>
<td>okText</td>
<td>确定按钮的文本</td>
<td>string</td>
<td>确定</td>
</tr>
<tr>
<td>okLoadingText</td>
<td>确定按钮loading状态下显示的文本</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>okLoadingText</td>
<td>确定按钮loading状态下显示的文本</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>okSize</td>
<td>确认按钮大小。可选 <code>lg</code>、<code>sm</code></td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>cancelText</td>
<td>取消按钮的文本</td>
<td>string</td>
<td>取消</td>
</tr>
<tr>
<td>cancelSize</td>
<td>取消按钮的大小。可选 <code>lg</code>、<code>sm</code></td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>width</td>
<td>宽度</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>maxWidth</td>
<td>最大宽度</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>inputLabel</td>
<td>输入框的描述文本，仅在<code>type=prompt</code>有效</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>inputType</td>
<td>输入框的类型，仅在<code>type=prompt</code>有效</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>inputPlaceholder</td>
<td>输入框的placeholder占位符，仅在<code>type=prompt</code>有效</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>inputValue</td>
<td>输入框的初始值，仅在<code>type=prompt</code>有效</td>
<td><code>string</code>/<code>number</code></td>
<td></td>
</tr>
<tr>
<td>inputRules</td>
<td>输入框的校验规则，与&lt;bs-form-item&gt;的校验规则一致，仅在<code>type=prompt</code>有效</td>
<td>object[]</td>
<td>[]</td>
</tr>
<tr>
<td>inputProps</td>
<td>输入框的其他属性，与&lt;bs-form-item&gt;的校验规则一致，仅在<code>type=prompt</code>有效</td>
<td>object</td>
<td>{}</td>
</tr>
<tr>
<td>inputBefore</td>
<td>输入框的的前置内容，仅在<code>type=prompt</code>有效</td>
<td><code>stirng</code>/<code>vnode</code>/<code>() =&gt; vnode</code></td>
<td></td>
</tr>
<tr>
<td>inputAfter</td>
<td>输入框的的后置内容，仅在<code>type=prompt</code>有效</td>
<td><code>stirng</code>/<code>vnode</code>/<code>() =&gt; vnode</code></td>
<td></td>
</tr>
<tr>
<td>onOk</td>
<td>点击确定回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭，返回false不会关闭</td>
<td>function</td>
<td></td>
</tr>
<tr>
<td>onCancel</td>
<td>点击取消回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭，返回false不会关闭</td>
<td>function</td>
<td></td>
</tr>
<tr>
<td>onClose</td>
<td>关闭时的回调函数, 参数为关闭函数，返回 promise 时 resolve 后自动关闭，返回false则不会关闭</td>
<td>function</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>MessageBox 其他全局方法</h3>
<div class="table-responsive"><table class="api-table table table-hover">
<thead class="thead-light">
<tr>
<th>函数名称</th>
<th>说明</th>
<th>参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>closeAllMessageBox</td>
<td>关闭所有消息弹窗</td>
<td></td>
</tr>
<tr>
<td>closeMessageBox</td>
<td>关闭指定消息弹窗，参数messageBoxId为消息弹窗ID</td>
<td></td>
</tr>
</tbody>
</table></div>
`,c={type:t,typeCode:d,title:n,subtitle:e,componentName:o,description:s,apiContent:r};export{r as apiContent,o as componentName,c as default,s as description,e as subtitle,n as title,t as type,d as typeCode};

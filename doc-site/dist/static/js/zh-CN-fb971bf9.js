const t="反馈",n="feedback",d="Message",e="消息提示",s="message",o=`<p>全局展示操作反馈信息，常用于主动操作后的反馈提示</p>
`,a=`<h2 class="api-h2" id="API_h2">API</h2>
<p>组件提供了一些静态方法，使用方式和参数如下：</p>
<ul>
<li>BsMessage(messageOrConfig: string|MessageConfig, context?: AppConfig)</li>
<li>BsMessage.success(messageOrConfig: string|MessageConfig, context?: AppConfig)</li>
<li>BsMessage.danger(messageOrConfig: string|MessageConfig, context?: AppConfig)</li>
<li>BsMessage.warning(messageOrConfig: string|MessageConfig, context?: AppConfig)</li>
<li>BsMessage.info(messageOrConfig: string|MessageConfig, context?: AppConfig)</li>
</ul>
<blockquote>
<p>以上函数的返回值为 messageId</p>
</blockquote>
<p><code>MessageConfig</code>对象属性如下</p>
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
<td>消息类型</td>
<td><code>success</code>/ <code>danger</code>/ <code>warning</code>/ <code>info</code></td>
<td>info</td>
</tr>
<tr>
<td>id</td>
<td>消息ID</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>message</td>
<td>消息文字</td>
<td><code>stirng</code>/<code>vnode</code>/<code>() =&gt; vnode</code></td>
<td></td>
</tr>
<tr>
<td>icon</td>
<td>图标</td>
<td>vnode</td>
<td></td>
</tr>
<tr>
<td>dangerouslyUseHTMLString</td>
<td>是否将 message 属性作为 HTML 片段处理</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>duration</td>
<td>显示时间，单位为毫秒。 设为 0 则不会自动关闭</td>
<td>number</td>
<td>3000</td>
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
<td>showIcon</td>
<td>是否显示图标</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>offsetTop</td>
<td>Message 距离窗口顶部的偏移量(单位：px)</td>
<td>number</td>
<td>20</td>
</tr>
<tr>
<td>appendTo</td>
<td>设置Message消息组件的根元素，默认为document.body</td>
<td><code>string</code>/<code>HTMLElement</code></td>
<td>body</td>
</tr>
<tr>
<td>grouping</td>
<td>是否合并内容相同的消息，不支持 VNode 类型的消息（在显示ajax请求错误信息的时候特别适合）</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>onClose</td>
<td>消息关闭前的回调函数</td>
<td>(vm: VNode) =&gt; void</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h3>Message 其他全局方法</h3>
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
<td>closeAllMessage</td>
<td>关闭所有消息</td>
<td></td>
</tr>
<tr>
<td>closeMessage</td>
<td>关闭指定消息，参数messageId为消息ID，userOnClose为消息关闭前的回调</td>
<td>(messageId: string, userOnClose?: (vm: VNode) =&gt; void): void</td>
</tr>
</tbody>
</table></div>
`,i={type:t,typeCode:n,title:d,subtitle:e,componentName:s,description:o,apiContent:a};export{a as apiContent,s as componentName,i as default,o as description,e as subtitle,d as title,t as type,n as typeCode};

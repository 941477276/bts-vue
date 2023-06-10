const t="反馈",d="feedback",n="Toast",o="轻量通知",e="toast",s=`<p>全局展示通知提醒信息</p>
`,i=`<h2 class="api-h2" id="API_h2">API</h2>
<p>组件提供了一些静态方法，使用方式和参数如下：</p>
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
<p><code>options</code>对象属性如下</p>
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
<td>主题类型</td>
<td><code>primary</code>/ <code>secondary</code>/ <code>success</code>/ <code>danger</code>/ <code>warning</code>/ <code>info</code>/ <code>light</code>/ <code>dark</code> /</td>
<td></td>
</tr>
<tr>
<td>title</td>
<td>标题</td>
<td><code>string</code>/<code>vnode</code>/<code>() =&gt; vnode｜string </code></td>
<td></td>
</tr>
<tr>
<td>secondaryTitle</td>
<td>辅助标题</td>
<td><code>string</code>/<code>vnode</code>/<code>() =&gt; vnode｜string</code></td>
<td></td>
</tr>
<tr>
<td>message</td>
<td>内容</td>
<td><code>string</code>/<code>vnode</code>/<code>() =&gt; vnode｜string</code></td>
<td></td>
</tr>
<tr>
<td>placement</td>
<td>显示位置</td>
<td><code>top-left</code>/<code>top-right</code>/<code>top-center</code>/<code>bottom-left</code>/<code>bottom-right</code>/<code>bottom-center</code></td>
<td>top-right</td>
</tr>
<tr>
<td>id</td>
<td>消息ID</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>style</td>
<td>自定义样式</td>
<td><code>string</code>/<code>object</code></td>
<td></td>
</tr>
<tr>
<td>fixed</td>
<td>是否使用<code>fixed</code>定位</td>
<td>boolean</td>
<td>true</td>
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
<td><code>string</code>/<code>object</code></td>
<td></td>
</tr>
<tr>
<td>showClose</td>
<td>是否显示关闭按钮</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>offsetTop</td>
<td>Toast 距离窗口顶部的偏移量(单位：px)</td>
<td>number</td>
<td>20</td>
</tr>
<tr>
<td>offsetLeft</td>
<td>toast 距离窗口右侧的偏移量，如果为0则不设置(单位：px)</td>
<td>number</td>
<td></td>
</tr>
<tr>
<td>teleported</td>
<td>设置Message消息组件的根元素，默认为document.body</td>
<td><code>string</code>/<code>HTMLElement</code></td>
<td>body</td>
</tr>
<tr>
<td>appendTo</td>
<td>设置Message消息组件的根元素，默认为document.body</td>
<td><code>string</code>/<code>HTMLElement</code></td>
<td>body</td>
</tr>
<tr>
<td>transitionName</td>
<td>过渡效果名称</td>
<td>stirng</td>
<td>bs-toast-fade</td>
</tr>
<tr>
<td>onShow</td>
<td>显示时的回调函数</td>
<td>(evt: Event) =&gt; void</td>
<td>false</td>
</tr>
<tr>
<td>onHide</td>
<td>关闭时的回调函数</td>
<td>(evt: Event) =&gt; void</td>
<td>false</td>
</tr>
<tr>
<td>onClick</td>
<td>点击时的回调函数</td>
<td>(evt: Event) =&gt; void</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h3>Toast 事件</h3>
<div class="table-responsive"><table class="api-table table table-hover">
<thead class="thead-light">
<tr>
<th>事件名称</th>
<th>说明</th>
<th>回调参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>show</td>
<td>显示时的回调函数</td>
<td></td>
</tr>
<tr>
<td>hide</td>
<td>关闭时的回调函数</td>
<td></td>
</tr>
<tr>
<td>click</td>
<td>点击时的回调函数</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>Toast 插槽</h3>
<div class="table-responsive"><table class="api-table table table-hover">
<thead class="thead-light">
<tr>
<th>插槽名称</th>
<th>说明</th>
<th>版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>header</td>
<td>自定义头部</td>
<td></td>
</tr>
<tr>
<td>title</td>
<td>自定义标题（传递了header插槽时无效）</td>
<td></td>
</tr>
<tr>
<td>secondaryTitle</td>
<td>自定义辅助标题（传递了header插槽时无效）</td>
<td></td>
</tr>
<tr>
<td>close</td>
<td>自定义关闭按钮</td>
<td></td>
</tr>
<tr>
<td>default</td>
<td>自定义message</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>Toast 其他全局方法</h3>
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
<td>BsToast.show</td>
<td>显示通知</td>
<td><code>toastId</code>，通知ID</td>
</tr>
<tr>
<td>BsToast.hide</td>
<td>隐藏通知</td>
<td><code>toastId</code>，通知ID</td>
</tr>
<tr>
<td>BsToast.hideAll</td>
<td>隐藏所有通知</td>
<td></td>
</tr>
</tbody>
</table></div>
`,r={type:t,typeCode:d,title:n,subtitle:o,componentName:e,description:s,apiContent:i};export{i as apiContent,e as componentName,r as default,s as description,o as subtitle,n as title,t as type,d as typeCode};

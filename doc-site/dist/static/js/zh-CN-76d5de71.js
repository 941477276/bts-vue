const t="工具组件",n="tool_component",d="DropdownTransition",e="下拉过渡",o="dropdown-transition",r=`<p>最基础的下拉组件，你可以用它实现任何带有下拉功能的组件</p>
`,c=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>DropdownTransition 属性</h3>
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
<td>placement</td>
<td>下拉菜单弹出位置</td>
<td><code>left</code>/<code>top</code>/<code>bottom</code>/<code>right</code>/<code>leftCenter</code>/<code>leftEnd</code>/<code>topCenter</code>/<code>topEnd</code>/<code>bottomCenter</code>/<code>bottomEnd</code>/<code>rightCenter</code>/<code>rightEnd</code></td>
<td>bottom</td>
</tr>
<tr>
<td>referenceRef</td>
<td>参照元素(即触发下拉的元素)</td>
<td>Ref&lt;HtmlElement｜VueComponent  &gt;</td>
<td></td>
</tr>
<tr>
<td>willVisible</td>
<td>下拉菜单是否即将显示，该值需在下拉菜单显示前<code>50ms</code>进行设置，这样组件才能更准确的计算下拉菜单真实显示位置</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>tryEndDirection</td>
<td>当在指定的<code>direction</code>位置下拉菜单不能完全显示时，是否尝试<code>direction</code>方向的<code>end</code>方向</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>tryAllDirection</td>
<td>当在指定的<code>direction</code>位置下拉菜单不能完全显示时，是否尝试所有方向显示</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>useZoomTransition</td>
<td>是否使用zoom过渡效果，如果值为<code>true</code>，那么不管下拉菜单显示在哪个位置，下拉菜单都以zoom效果进行过渡</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>position</td>
<td>下拉菜单定位方式</td>
<td>string</td>
<td>absolute</td>
</tr>
<tr>
<td>setWidth</td>
<td>是否设置下拉菜单的宽度等于参照元素的宽度</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>setMinWidth</td>
<td>是否设置下拉菜单的最小宽度等于参照元素的宽度</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>offset</td>
<td>下拉菜单距参照元素的偏移量</td>
<td>{ top?: number; left?: number; }</td>
<td>false</td>
</tr>
<tr>
<td>customTransitionName</td>
<td>下拉菜单自定义transition name</td>
<td>(direction) =&gt; string</td>
<td></td>
</tr>
<tr>
<td>customStyle</td>
<td>自定义下拉菜单style</td>
<td>(direction) =&gt; string</td>
<td></td>
</tr>
<tr>
<td>contextMenu</td>
<td>是否为右键菜单</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>virtualMouseEvent</td>
<td>虚拟鼠标事件对象，仅在 contextMenu=true 时有效</td>
<td><code>{ clientX: number; clientY: number; contextElement?: HTMLElement; // 上下文元素 }</code></td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>DropdownTransition 事件</h3>
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
<td>before-enter</td>
<td>同<code>transition</code>组件before-enter事件</td>
<td></td>
</tr>
<tr>
<td>enter</td>
<td>同<code>transition</code>组件enter事件</td>
<td></td>
</tr>
<tr>
<td>after-enter</td>
<td>同<code>transition</code>组件after-enter事件</td>
<td></td>
</tr>
<tr>
<td>before-leave</td>
<td>同<code>transition</code>组件before-leave事件</td>
<td></td>
</tr>
<tr>
<td>leave</td>
<td>同<code>transition</code>组件leave事件</td>
<td></td>
</tr>
<tr>
<td>after-leave</td>
<td>同<code>transition</code>组件after-leave事件</td>
<td></td>
</tr>
<tr>
<td>position-change</td>
<td>下拉菜单位置信息<code>change</code>事件</td>
<td>function (positionInfo: object)</td>
</tr>
</tbody>
</table></div>
<h3>DropdownTransition 函数</h3>
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
<td>refresh</td>
<td>刷新定位</td>
<td></td>
</tr>
</tbody>
</table></div>
`,a={type:t,typeCode:n,title:d,subtitle:e,componentName:o,description:r,apiContent:c};export{c as apiContent,o as componentName,a as default,r as description,e as subtitle,d as title,t as type,n as typeCode};

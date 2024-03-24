const t="反馈",d="feedback",n="Modal",e="模态弹窗",o="modal",r=`<p>在保留当前页面状态的情况下，告知用户并承载相关操作</p>
`,a=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>Modal 属性</h3>
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
<td>visible(v-model:visible)</td>
<td>用于控制弹窗显隐</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>teleported</td>
<td>是否使用 teleport。设置成 true则会被追加到 append-to 的位置</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>appendTo</td>
<td>Modal dom将附加到的节点</td>
<td><code>string</code>/<code>dom</code></td>
<td>body</td>
</tr>
<tr>
<td>transitionName</td>
<td>过渡动画名称</td>
<td>string</td>
<td>fade</td>
</tr>
<tr>
<td>title</td>
<td>标题</td>
<td><code>string</code>/<code>() =&gt; stirng｜vnode</code>/<code>vnode</code></td>
<td></td>
</tr>
<tr>
<td>width</td>
<td>弹窗宽度</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>className</td>
<td>自定义class</td>
<td><code>string</code>/<code>object</code>/<code>array</code></td>
<td></td>
</tr>
<tr>
<td>size</td>
<td>弹窗大小</td>
<td><code>xl</code>(超大)/<code>lg</code>(大的)/<code>sm</code>(小的)</td>
<td></td>
</tr>
<tr>
<td>centered</td>
<td>是否居中显示</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>mask</td>
<td>是否显示遮罩</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>keyboard</td>
<td>是否支持键盘 esc 关闭</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>maskClosable</td>
<td>点击遮罩是否关闭</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>lockScroll</td>
<td>是否锁定滚动条</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>fullscreen</td>
<td>是否全屏</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>draggable</td>
<td>是否可以拖拽移动</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>boundary</td>
<td>拖拽时是否不能超出边界</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>scrollable</td>
<td>弹窗内容部分是否可滚动</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>showFooter</td>
<td>是否显示底部</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>showClose</td>
<td>是否显示关闭按钮</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>lazy</td>
<td>首次渲染是否延迟</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>destroyOnClose</td>
<td>关闭弹窗时是否销毁弹窗的元素</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>confirmLoading</td>
<td>是否禁用关闭，若值为true，则任何方式都关闭不了，此功能可用于正在提交数据的场景</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>okText</td>
<td>确定按钮文案</td>
<td>string</td>
<td>确定</td>
</tr>
<tr>
<td>cancelText</td>
<td>取消按钮文案</td>
<td>string</td>
<td>取消</td>
</tr>
<tr>
<td>onOk</td>
<td>确认按钮点击事件，如果事件函数执行后返回<code>Promise</code>，那么弹窗将在Promise的状态变为<code>fulfilled</code>后关闭</td>
<td>() =&gt; any</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>Modal 事件</h3>
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
<td>open</td>
<td>弹窗显示后的回调</td>
<td></td>
</tr>
<tr>
<td>close</td>
<td>弹窗关闭后的回调</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>Modal 插槽</h3>
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
<td>标题插槽</td>
<td></td>
</tr>
<tr>
<td>close</td>
<td>关闭按钮内容插槽</td>
<td></td>
</tr>
<tr>
<td>footer</td>
<td>底部按钮插槽</td>
<td></td>
</tr>
</tbody>
</table></div>
`,l={type:t,typeCode:d,title:n,subtitle:e,componentName:o,description:r,apiContent:a};export{a as apiContent,o as componentName,l as default,r as description,e as subtitle,n as title,t as type,d as typeCode};
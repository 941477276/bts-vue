const t="数据展示",d="data_display",n="Tooltip",e="文字提示",o="tooltip",r=`<p>常用于展示鼠标 hover 时的提示信息</p>
`,c=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>Tooltip 属性</h3>
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
<td>trigger</td>
<td>触发方式</td>
<td><code>click</code>/<code>hover</code>/<code>focus</code>/<code>contextmenu</code></td>
<td>hover</td>
</tr>
<tr>
<td>placement</td>
<td>显示位置，参考：<a href="https://popper.js.org/docs/v2/">popper.js参数</a></td>
<td><code>top</code>/<code>top-start</code>/<code>top-end</code>/<code>bottom</code>/<code>bottom-start</code>/<code>bottom-end</code>/<code>left</code>/<code>left-start</code>/<code>left-end</code>/<code>right</code>/<code>right-start</code>/<code>right-end</code></td>
<td>bottom</td>
</tr>
<tr>
<td>teleported</td>
<td>是否使用 teleport。设置成true则会被追加到<code>append-to</code>中</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>appendTo</td>
<td>指定 Tooltip 的dom将附加在哪一个元素上</td>
<td><code>string</code>/<code>dom</code></td>
<td>body</td>
</tr>
<tr>
<td>visible</td>
<td>tooltip是否显示，若该值为<code>boolean</code>类型，则该tooltip为受控模式</td>
<td><code>boolean</code></td>
<td>false</td>
</tr>
<tr>
<td>showCondition</td>
<td>显示时的条件，如果该函数返回<code>false</code>则不会显示</td>
<td><code>() =&gt; boolean</code></td>
<td></td>
</tr>
<tr>
<td>hideCondition</td>
<td>隐藏时的条件，如果该函数返回<code>false</code>则不会显示</td>
<td><code>() =&gt; boolean</code></td>
<td></td>
</tr>
<tr>
<td>theme</td>
<td>主题</td>
<td><code>dark</code>/<code>light</code>/<code>custom</code></td>
<td>dark</td>
</tr>
<tr>
<td>themeClass</td>
<td>自定义主题class</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>content</td>
<td>显示的内容，也可以通过<code>slot#content</code>传入 DOM</td>
<td><code>string</code>/<code>number</code></td>
<td></td>
</tr>
<tr>
<td>isRawContent</td>
<td>content中的内容是否作为 HTML 字符串处理</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>enterable</td>
<td>鼠标是否可进入到 tooltip 中</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>destroyOnHide</td>
<td>隐藏后是否销毁内容</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>transitionName</td>
<td>过渡动画的名称</td>
<td><code>fade</code>/<code>scale</code>/<code>string</code></td>
<td>fade</td>
</tr>
<tr>
<td>showArrow</td>
<td>是否显示三角箭头</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>popperClass</td>
<td>popper的额外classname</td>
<td><code>string</code>/<code>array</code>/<code>object</code></td>
<td></td>
</tr>
<tr>
<td>popperStyle</td>
<td>popper的样式</td>
<td><code>string</code>/<code>array</code>/<code>object</code></td>
<td></td>
</tr>
<tr>
<td>arrowClass</td>
<td>三角箭头额外的classname</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>virtualTriggering</td>
<td>是否由虚拟元素触发，参考：<a href="https://popper.js.org/docs/v2/virtual-elements/">popper.js参数</a></td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>virtualRef</td>
<td>触发元素的ref，仅在<code>virtualTriggering=true</code>时有效，参考：<a href="https://popper.js.org/docs/v2/virtual-elements/">popper.js参数</a></td>
<td><code>string(css selector)</code>/<code>() =&gt; dom</code>/<code>dom</code>/<code>object</code></td>
<td></td>
</tr>
<tr>
<td>showDelay</td>
<td>显示延迟时间，单位毫秒</td>
<td>number</td>
<td>100</td>
</tr>
<tr>
<td>hideDelay</td>
<td>隐藏延迟时间，单位毫秒</td>
<td>number</td>
<td>100</td>
</tr>
<tr>
<td>offset</td>
<td>popper出现位置的偏移量，参考：<a href="https://popper.js.org/docs/v2/modifiers/offset/">popper.js参数</a></td>
<td>number[]</td>
<td>[0, 8]</td>
</tr>
<tr>
<td>arrowOffset</td>
<td>三角箭头的偏移量，参考：<a href="https://popper.js.org/docs/v2/modifiers/arrow/">popper.js参数</a></td>
<td>number</td>
<td>5</td>
</tr>
<tr>
<td>strategy</td>
<td>popper定位策略，默认为absolute。如果触发popper的参考元素在fixed定位的元素中，则应该使用fixed</td>
<td><code>absolute</code>/<code>fixed</code></td>
<td>absolute</td>
</tr>
<tr>
<td>gpuAcceleration</td>
<td>是否使用 GPU 加速样式来定位 popper。如果开启了则会使用transform: translate来定位，否则使用top/left来定位</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>popperOptions</td>
<td>popperjs的其他参数，见：<a href="https://popper.js.org/docs/v2/">popper.js参数</a></td>
<td>object</td>
<td>{}</td>
</tr>
</tbody>
</table></div>
<h3>Tooltip 事件</h3>
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
<td>before-show</td>
<td>tooltip显示前触发</td>
<td></td>
</tr>
<tr>
<td>show</td>
<td>tooltip显示后触发</td>
<td></td>
</tr>
<tr>
<td>before-hide</td>
<td>tooltip隐藏前触发</td>
<td></td>
</tr>
<tr>
<td>hide</td>
<td>tooltip隐藏后触发</td>
<td></td>
</tr>
<tr>
<td>content-mouseenter</td>
<td>鼠标移入tooltip内容时触发，同dom的mouseenter事件</td>
<td></td>
</tr>
<tr>
<td>content-mouseleave</td>
<td>鼠标移入tooltip内容时触发，同dom的mouseenter事件</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>Tooltip 插槽</h3>
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
<td>content</td>
<td>tooltip显示的内容</td>
<td></td>
</tr>
</tbody>
</table></div>
`,s={type:t,typeCode:d,title:n,subtitle:e,componentName:o,description:r,apiContent:c};export{c as apiContent,o as componentName,s as default,r as description,e as subtitle,n as title,t as type,d as typeCode};

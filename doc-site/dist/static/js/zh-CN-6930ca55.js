const t="数据录入",d="data_input",n="Switch",e="开关",o="switch",c=`<p>表示两种相互对立的状态间的切换，多用于触发「开/关」</p>
`,r=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>Switch 属性</h3>
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
<td>modelValue(v-model)</td>
<td>开关绑定的值</td>
<td><code>string</code>/<code>number</code>/<code>boolean</code></td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用状态，默认为 false</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>loading</td>
<td>是否加载中</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>size</td>
<td>输入框大小。可选 <code>lg</code>、<code>sm</code></td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>colorType</td>
<td>背景色类型</td>
<td><code>primary</code>/ <code>secondary</code>/ <code>success</code>/ <code>danger</code>/ <code>warning</code>/ <code>info</code>/ <code>light</code>/ <code>dark</code></td>
<td></td>
</tr>
<tr>
<td>loadingColorType</td>
<td>加载中旋转图标的颜色类型</td>
<td><code>primary</code>/ <code>secondary</code>/ <code>success</code>/ <code>danger</code>/ <code>warning</code>/ <code>info</code>/ <code>light</code>/ <code>dark</code></td>
<td>primary</td>
</tr>
<tr>
<td>activeValue</td>
<td>switch 打开时的值</td>
<td><code>string</code>/<code>number</code>/<code>boolean</code></td>
<td>true</td>
</tr>
<tr>
<td>inactiveValue</td>
<td>switch 关闭时的值</td>
<td><code>string</code>/<code>number</code>/<code>boolean</code></td>
<td>false</td>
</tr>
<tr>
<td>activeText</td>
<td>switch 打开时的文字描述</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>inactiveText</td>
<td>switch 关闭时的文字描述</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>activeColor</td>
<td>switch 打开时的背景色</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>inactiveColor</td>
<td>switch 关闭时的背景色</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>name</td>
<td>switch的 name 属性</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>extraData</td>
<td>额外数据，调用<code>beforeChange</code>时会传递进去</td>
<td>any</td>
<td></td>
</tr>
<tr>
<td>beforeChange</td>
<td>switch状态改变前的回调函数，如果返回false或promise.reject则不会改变</td>
<td>function</td>
<td></td>
</tr>
<tr>
<td>validateEvent</td>
<td>改变 switch 状态时是否触发表单的校验</td>
<td>boolean</td>
<td>true</td>
</tr>
</tbody>
</table></div>
<h3>Switch 事件</h3>
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
<td>change</td>
<td>switch值改变时触发</td>
<td>function(val: string｜number｜boolean)</td>
</tr>
<tr>
<td>click</td>
<td>点击时触发</td>
<td></td>
</tr>
</tbody>
</table></div>
`,a={type:t,typeCode:d,title:n,subtitle:e,componentName:o,description:c,apiContent:r};export{r as apiContent,o as componentName,a as default,c as description,e as subtitle,n as title,t as type,d as typeCode};

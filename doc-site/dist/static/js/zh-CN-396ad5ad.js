const t="数据录入",d="data_input",n="TimePicker",e="时间选择器",r="time-picker",o=`<p>输入或选择时间的控件</p>
`,a=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>TimePicker 属性</h3>
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
<td>当前时间</td>
<td><code>string</code>/<code>Date</code>/<a href="https://day.js.org/">dayjs</a></td>
<td></td>
</tr>
<tr>
<td>id</td>
<td>输入框的 id</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用状态，默认为 false</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>hourStep</td>
<td>小时选项间隔</td>
<td>number</td>
<td>1</td>
</tr>
<tr>
<td>minuteStep</td>
<td>分钟选项间隔</td>
<td>number</td>
<td>1</td>
</tr>
<tr>
<td>secondStep</td>
<td>秒选项间隔</td>
<td>number</td>
<td>1</td>
</tr>
<tr>
<td>disabledHours</td>
<td>需禁用的小时项</td>
<td>(hour: number, use12Hours: boolean) =&gt; boolean</td>
<td></td>
</tr>
<tr>
<td>disabledMinutes</td>
<td>需禁用的分钟项</td>
<td>(hour: number, minute: number, use12Hours: boolean) =&gt; boolean</td>
<td></td>
</tr>
<tr>
<td>disabledSeconds</td>
<td>需禁用的秒项</td>
<td>(hour: number, minute: number, second: number, use12Hours: boolean) =&gt; boolean</td>
<td></td>
</tr>
<tr>
<td>hideDisabledOptions</td>
<td>是否隐藏禁用的选项</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>use12Hours</td>
<td>是否使用12小时制</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>clearable</td>
<td>是否可以清空内容，默认为 false</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>deliveContextToFormItem</td>
<td>是否向<code>form-item</code>组件传递上下文信息，默认为 true</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>size</td>
<td>输入框大小。可选 <code>lg</code>、<code>sm</code></td>
<td>string</td>
<td>\`\`</td>
</tr>
<tr>
<td>inputmode</td>
<td>输入框原生的inputmode属性</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>format</td>
<td>展示的时间格式</td>
<td><code>string</code>，参照<a href="https://day.js.org/docs/en/parse/string-format">dayjs format</a></td>
<td><code>HH:mm:ss</code></td>
</tr>
<tr>
<td>valueFormat</td>
<td>绑定值的格式，不指定则绑定值为<code>dayjs</code>对象</td>
<td><code>string</code>，参照<a href="https://day.js.org/docs/en/parse/string-format">dayjs format</a></td>
<td></td>
</tr>
<tr>
<td>placeholder</td>
<td>输入框的placeholder属性</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>name</td>
<td>输入框的name属性</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>dropdownClass</td>
<td>下拉弹窗的额外classname</td>
<td><code>string</code>/<code>array</code>/<code>object</code></td>
<td></td>
</tr>
<tr>
<td>showFooter</td>
<td>是否显示底部</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>showHeader</td>
<td>是否显示头部</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h3>TimePicker 事件</h3>
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
<td>当前值变化时的回调</td>
<td>function(time: any)</td>
</tr>
<tr>
<td>show</td>
<td>下拉菜单显示时触发</td>
<td></td>
</tr>
<tr>
<td>hide</td>
<td>下拉菜单隐藏时触发</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>TimePicker 插槽</h3>
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
<td>trigger</td>
<td>触发下拉菜单显示的元素</td>
<td></td>
</tr>
<tr>
<td>header</td>
<td>头部额外内容</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>TimePicker 函数</h3>
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
<td>setValidateStatus</td>
<td>设置输入框的校验状态</td>
<td>function(status: <code>validating</code>/<code>success</code>/<code>error</code>)</td>
</tr>
</tbody>
</table></div>
`,s={type:t,typeCode:d,title:n,subtitle:e,componentName:r,description:o,apiContent:a};export{a as apiContent,r as componentName,s as default,o as description,e as subtitle,n as title,t as type,d as typeCode};

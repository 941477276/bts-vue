const t="数据录入",d="data_input",n="DatePicker",e="日期选择器",a="date-picker",r=`<p>输入或选择日期的控件</p>
`,o=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>DatePicker 属性</h3>
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
<td>当前日期</td>
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
<td>pickerType</td>
<td>选择器类型</td>
<td><code>date</code>/<code>dateTime</code>/<code>week</code>/<code>month</code></td>
<td>date</td>
</tr>
<tr>
<td>mode</td>
<td>选择器面板的状态</td>
<td><code>date</code>/<code>dateTime</code>/<code>week</code>/<code>month</code></td>
<td></td>
</tr>
<tr>
<td>panelViewDate</td>
<td>选择器打开时默认显示的时间</td>
<td><code>string</code>/<code>Date</code>/<a href="https://day.js.org/">dayjs</a></td>
<td></td>
</tr>
<tr>
<td>disabledDate</td>
<td>禁用的日期</td>
<td>() =&gt; boolean</td>
<td></td>
</tr>
<tr>
<td>showSidebar</td>
<td>是否显示侧边栏</td>
<td></td>
<td>false</td>
</tr>
<tr>
<td>sidebarInRight</td>
<td>侧边栏是否在右边</td>
<td></td>
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
<td>dateRender</td>
<td>自定义日期单元格的内容</td>
<td>(cellData: {dayjsIns: Dayjs; now: dayjs; cellIndex: number; rowIndex: number;}) =&gt; string丨vnode</td>
<td></td>
</tr>
<tr>
<td>format</td>
<td>展示的时间格式</td>
<td><code>string</code>，参照<a href="https://day.js.org/docs/en/parse/string-format">dayjs format</a></td>
<td><code>HH:mm:ss</code></td>
</tr>
<tr>
<td>formatSpliter</td>
<td>格式模板之间的连接符，仅在pickerType=dateTime时有效</td>
<td>string</td>
<td><code>' '</code></td>
</tr>
<tr>
<td>valueFormat</td>
<td>绑定值的格式，不指定则绑定值为<code>Dayjs</code>对象</td>
<td><code>string</code>，参照<a href="https://day.js.org/docs/en/parse/string-format">dayjs format</a></td>
<td></td>
</tr>
<tr>
<td>valueFormatSpliter</td>
<td>格式模板之间的连接符，仅在pickerType=dateTime时有效</td>
<td>string</td>
<td><code>' '</code></td>
</tr>
<tr>
<td>datePanelProps</td>
<td>日期选择器props，仅在pickerType=dateTime时有效</td>
<td>object</td>
<td>{}</td>
</tr>
<tr>
<td>timePanelProps</td>
<td>时间选择器props，仅在pickerType=dateTime时有效</td>
<td>object</td>
<td>{}</td>
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
<h3>DatePicker 事件</h3>
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
<h3>DatePicker 插槽</h3>
<div class="table-responsive"><table class="api-table table table-hover">
<thead class="thead-light">
<tr>
<th>插槽名称</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>trigger</td>
<td>触发下拉菜单显示的元素</td>
</tr>
<tr>
<td>sidebar</td>
<td>侧边栏，参数：{date: Dayjs; show: function; hide: function }</td>
</tr>
<tr>
<td>dateRender</td>
<td>自定义单元格内容，参数：{dayjsIns: Dayjs; now: Dayjs; cellIndex: number; rowIndex: number;}</td>
</tr>
<tr>
<td>header</td>
<td>头部额外内容</td>
</tr>
<tr>
<td>footer</td>
<td>底部内容</td>
</tr>
</tbody>
</table></div>
<h3>DatePicker 函数</h3>
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
<tr>
<td>setPanelViewDate</td>
<td>设置面板显示的日期</td>
<td>function(date: Date/Dayjs)</td>
</tr>
</tbody>
</table></div>
`,s={type:t,typeCode:d,title:n,subtitle:e,componentName:a,description:r,apiContent:o};export{o as apiContent,a as componentName,s as default,r as description,e as subtitle,n as title,t as type,d as typeCode};

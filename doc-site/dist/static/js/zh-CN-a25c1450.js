const t="数据录入",d="data_input",n="DateRangePicker",e="日期范围选择器",a="date-range-picker",r=`<p>输入或选择日期范围的控件</p>
`,o=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>DateRangePicker 属性</h3>
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
<td>绑定的日期范围值</td>
<td><code>string[]</code>/<code>Date[]</code>/<code>number[]</code>/<a href="https://day.js.org/">dayjs</a>[]</td>
<td>[]</td>
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
<td><code>date</code>/<code>dateTime</code>/<code>month</code>/<code>year</code></td>
<td>date</td>
</tr>
<tr>
<td>mode</td>
<td>选择器面板的状态</td>
<td><code>date</code>/<code>dateTime</code>/<code>month</code>/<code>year</code></td>
<td></td>
</tr>
<tr>
<td>disabledDate</td>
<td>设置禁用日期的函数</td>
<td><code>({current: Dayjs, panel: 'start'｜'end' }) =&gt; boolean</code></td>
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
<td>自定义日期单元格内容的函数</td>
<td><code>(cellData: {dayjsIns: Dayjs; now: dayjs; cellIndex: number; rowIndex: number;}) =&gt; string丨vnode</code></td>
<td></td>
</tr>
<tr>
<td>format</td>
<td>展示的时间格式</td>
<td><code>string[]</code>，参照<a href="https://day.js.org/docs/en/parse/string-format">dayjs format</a></td>
<td></td>
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
<td><code>string[]</code>，参照<a href="https://day.js.org/docs/en/parse/string-format">dayjs format</a></td>
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
<td>defaultTime</td>
<td>选中日期后的默认具体时刻</td>
<td>string[]</td>
<td>[]</td>
</tr>
<tr>
<td>placeholder</td>
<td>输入框的placeholder属性</td>
<td>string[]</td>
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
<tr>
<td>yearButtonDisabled</td>
<td>是否禁用年份按钮</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>monthButtonDisabled</td>
<td>是否禁用月份按钮</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>teleported</td>
<td>是否使用 teleport。设置成true则下拉内容会被追加到<code>append-to</code>的位置</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>appendTo</td>
<td>指示下拉内容将附加在哪一个网页元素上</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>nativeAttrs</td>
<td>input原生属性</td>
<td>object</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>DateRangePicker 事件</h3>
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
<h3>DateRangePicker 插槽</h3>
<div class="table-responsive"><table class="api-table table table-hover">
<thead class="thead-light">
<tr>
<th>插槽名称</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>default</td>
<td>触发下拉菜单显示的元素</td>
</tr>
<tr>
<td>sidebar</td>
<td>侧边栏</td>
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
<h3>DateRangePicker 函数</h3>
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
<td>function(startDate?: Date/Dayjs, endDate?: Date/Dayjs)</td>
</tr>
<tr>
<td>setDate</td>
<td>设置控件的v-model绑定值</td>
<td>function([startDate: number/Date/Dayjs, endDate: number/Date/Dayjs])</td>
</tr>
</tbody>
</table></div>
`,s={type:t,typeCode:d,title:n,subtitle:e,componentName:a,description:r,apiContent:o};export{o as apiContent,a as componentName,s as default,r as description,e as subtitle,n as title,t as type,d as typeCode};

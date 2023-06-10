const t="数据录入",d="data_input",n="Slider",e="滑块",o="slider",r=`<p>滑动型输入器</p>
`,a=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>Slider 属性</h3>
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
<td>数字输入框内容</td>
<td><code>string</code>/<code>number</code>/<code>array</code></td>
<td>0</td>
</tr>
<tr>
<td>min</td>
<td>最小值</td>
<td>number</td>
<td>0</td>
</tr>
<tr>
<td>max</td>
<td>最大值</td>
<td>number</td>
<td>100</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用状态，默认为 false</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>vertical</td>
<td>是否垂直模式</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>range</td>
<td>是否为双滑块模式</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>rangeMin</td>
<td>两个滑块值的差的最小值</td>
<td>number</td>
<td></td>
</tr>
<tr>
<td>rangeMax</td>
<td>两个滑块值的差的最大值</td>
<td>number</td>
<td></td>
</tr>
<tr>
<td>step</td>
<td>步长，必须大于0。当 marks 不为空对象时，可以设置 step 为 null，此时 Slider 的可选值仅有 marks 标出来的部分。</td>
<td>number</td>
<td>1</td>
</tr>
<tr>
<td>showSteps</td>
<td>是否显示间断点</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>included</td>
<td>当有marks或showSteps时，值为 true 时表示值为包含关系，false 表示并列</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>enableCross</td>
<td>是否允许交叉，仅在range模式下有效</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>marks</td>
<td>刻度标记，key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标签可以单独设置样式</td>
<td>{ number: string｜{label:string｜vnode; style: object; } }</td>
<td>{}</td>
</tr>
<tr>
<td>showToolTip</td>
<td>是否显示tooltip，如果为true则总是显示，否则总是不显示</td>
<td>boolean</td>
<td></td>
</tr>
<tr>
<td>tooltipTransitionName</td>
<td>tooltip的过渡名称</td>
<td>string</td>
<td>scale</td>
</tr>
<tr>
<td>tooltipPlacement</td>
<td>tooltip的显示位置</td>
<td><code>top</code>/<code>top-start</code>/<code>top-end</code>/<code>bottom</code>/<code>bottom-start</code>/<code>bottom-end</code>/<code>left</code>/<code>left-start</code>/<code>left-end</code>/<code>right</code>/<code>right-start</code>/<code>right-end</code></td>
<td></td>
</tr>
<tr>
<td>tooltipClass</td>
<td>tooltip的class类名</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>tooltipFormatter</td>
<td>tooltip显示文本格式化函数，若返回null，则隐藏tooltip</td>
<td>(modelVal: any, percentage: number) =&gt; string｜number｜null｜void</td>
<td></td>
</tr>
<tr>
<td>tooltipRawContent</td>
<td>tooltip的内容是否为html文本</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h3>Slider 事件</h3>
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
<td>滑块值变化时的回调</td>
<td>function(value: number｜string)</td>
</tr>
</tbody>
</table></div>
`,l={type:t,typeCode:d,title:n,subtitle:e,componentName:o,description:r,apiContent:a};export{a as apiContent,o as componentName,l as default,r as description,e as subtitle,n as title,t as type,d as typeCode};

const t="数据展示",n="data_display",d="Tabs",e="标签页",a="tabs",o=`<p>分隔内容上有关联但属于不同类别的数据集合</p>
`,r=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>Tabs 属性</h3>
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
<td>绑定值，选中选项卡的 name</td>
<td>string</td>
<td>0</td>
</tr>
<tr>
<td>tabPosition</td>
<td>标签的位置</td>
<td><code>top</code>/<code>left</code>/<code>right</code>/<code>bottom</code></td>
<td>top</td>
</tr>
<tr>
<td>triggerTypeOnOverflow</td>
<td>当标签导航列表宽度超出父容器时选择超出部分标签导航的方式</td>
<td><code>auto</code>/<code>more</code>/<code>button</code></td>
<td>auto</td>
</tr>
<tr>
<td>hiddenTabsGreaterThan</td>
<td>当triggerTypeOnOverflow为auto时，隐藏掉的标签导航个数达到该阈值时才会使用'more'</td>
<td>number</td>
<td>10</td>
</tr>
<tr>
<td>tabBarMaxHeight</td>
<td>标签导航最大高度，小于等于0无效</td>
<td><code>string</code>/<code>number</code></td>
<td>0</td>
</tr>
<tr>
<td>inkBarSpaceBetween</td>
<td>标签导航高亮条向两端延伸的长度，小于等于0无效</td>
<td>number</td>
<td>0</td>
</tr>
<tr>
<td>closeable</td>
<td>是否可关闭</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table></div>
<h3>Tabs 事件</h3>
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
<td>close</td>
<td>标签页关闭时触发</td>
<td>function(tabName: string)</td>
</tr>
</tbody>
</table></div>
<h3>TabPane 属性</h3>
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
<td>label</td>
<td>选项卡标题</td>
<td><code>string</code>/<code>function</code></td>
<td></td>
</tr>
<tr>
<td>name</td>
<td>选项卡名称（与选项卡绑定值 modelValue 对应的标识符）</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>closeable</td>
<td>是否可关闭</td>
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
<td>lazy</td>
<td>选项卡内容是否延迟渲染</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>contentLazyRender</td>
<td>内容延迟渲染，只有在第一次选中后才会被渲染</td>
<td>boolean</td>
<td>true</td>
</tr>
</tbody>
</table></div>
<h3>TabPane 插槽</h3>
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
<td>left-extra</td>
<td>左侧额外的内容</td>
<td></td>
</tr>
<tr>
<td>right-extra</td>
<td>右侧额外的内容</td>
<td></td>
</tr>
<tr>
<td>label</td>
<td>选项卡标题</td>
<td></td>
</tr>
</tbody>
</table></div>
`,l={type:t,typeCode:n,title:d,subtitle:e,componentName:a,description:o,apiContent:r};export{r as apiContent,a as componentName,l as default,o as description,e as subtitle,d as title,t as type,n as typeCode};

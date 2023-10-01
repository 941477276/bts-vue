const n="数据展示",s="data_display",a="Table",t="表格",o="table",p=`<p>用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。</p>
`,e=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>Table 属性</h3>
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
<td>columns</td>
<td>表格列配置</td>
<td><code>BsTableColumn[]</code></td>
<td>[]</td>
</tr>
<tr>
<td>data</td>
<td>表格数据</td>
<td><code>Record&lt;string, any&gt;[]</code></td>
<td>[]</td>
</tr>
<tr>
<td>rowKey</td>
<td>行数据的 Key，用来优化 Table 的渲染，可以是字符串或一个函数，支持<code>user.info.id</code>形式，但不支持<code>user.info[0].id</code>，此种情况请使用<code>Function</code></td>
<td></td>
<td>false</td>
</tr>
<tr>
<td>size</td>
<td>表格大小。可选<code>sm</code></td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>stripe</td>
<td>是否为带斑马纹表格</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>border</td>
<td>是否为带边框</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>borderless</td>
<td>是否去掉边框</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>rowClassName</td>
<td>自定义表格数据行classname</td>
<td><code>string</code>/ <code>array</code>/ <code>object</code>/ <code>function</code></td>
<td></td>
</tr>
<tr>
<td>height</td>
<td>表格高度</td>
<td><code>string</code>/ <code>number</code></td>
<td></td>
</tr>
<tr>
<td>maxHeight</td>
<td>表格最大高度</td>
<td><code>string</code>/ <code>number</code></td>
<td></td>
</tr>
<tr>
<td>tableHover</td>
<td>鼠标移动到行上时是否改变行的背景色</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>allowExpand</td>
<td>是否允许展开</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>expandColumnWidth</td>
<td>展开列的宽度</td>
<td><code>string</code>/ <code>number</code></td>
<td>50</td>
</tr>
<tr>
<td>expandColumnLabel</td>
<td>展开列的列名称</td>
<td><code>string</code>/ <code>number</code>/<code>function</code></td>
<td></td>
</tr>
<tr>
<td>defaultExpandAllRows</td>
<td>默认是否展开所有行</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>defaultExpandedRowKeys</td>
<td>默认展开的行的key</td>
<td><code>string[]</code></td>
<td>[]</td>
</tr>
<tr>
<td>lazy</td>
<td>是否懒加载树状数据</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>load</td>
<td>懒加载数据函数</td>
<td><code>(rowData: Record&lt;string, any&gt;, resolve: (isLoadFailed?: boolean) =&gt; void) =&gt; any</code></td>
<td></td>
</tr>
<tr>
<td>selectionConfig</td>
<td>选择项配置</td>
<td><code>BsTableSelectionConfig</code></td>
<td>{}</td>
</tr>
<tr>
<td>selectedRowKeys</td>
<td>选中行的key</td>
<td><code>string[]</code></td>
<td>[]</td>
</tr>
<tr>
<td>emptyText</td>
<td>表格空数据提示文字</td>
<td><code>string</code>/ <code>number</code></td>
<td></td>
</tr>
<tr>
<td>footerRows</td>
<td>表格尾部行配置</td>
<td><code>BsTableFootRow[]</code></td>
<td>[]</td>
</tr>
<tr>
<td>footerMethod</td>
<td>高度自定义表格尾部列函数</td>
<td><code>(tableData: Record&lt;string, any&gt;[], columns: BsTableColumn[]) =&gt; BsTableFootRow[]</code></td>
<td></td>
</tr>
</tbody>
</table></div>
<h4><code>BsTableColumn</code></h4>
<pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">BsTableSortDirection</span> <span class="token operator">=</span> <span class="token string">'ascend'</span> <span class="token operator">|</span> <span class="token string">'descend'</span> <span class="token operator">|</span> <span class="token string">''</span><span class="token punctuation">;</span><span class="token comment">// 列支持的排序方式，支持\`ascend\`（升序）、\`descend\`（降序）</span>

<span class="token keyword">interface</span> <span class="token class-name">BsTableColumn</span> <span class="token punctuation">{</span>
  label<span class="token operator">:</span> <span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">number</span><span class="token operator">|</span><span class="token punctuation">(</span><span class="token punctuation">(</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> column<span class="token operator">:</span> BsTableColumn<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">number</span><span class="token operator">|</span>VNode<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 列名</span>
  prop<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 列数据字段名称</span>
  headSlotName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 头部单元格插槽名称</span>
  filterSlotName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 头部单元格筛选器插槽名称</span>
  colSpan<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token operator">|</span><span class="token punctuation">(</span><span class="token punctuation">(</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> column<span class="token operator">:</span> BsTableColumn<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 头部单元格合并数量</span>
  width<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">number</span><span class="token punctuation">;</span>
  minWidth<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">number</span><span class="token punctuation">;</span>
  fixed<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token operator">|</span><span class="token string">'left'</span><span class="token operator">|</span><span class="token string">'right'</span><span class="token punctuation">;</span> <span class="token comment">// 列是否固定住</span>
  align<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">'left'</span> <span class="token operator">|</span> <span class="token string">'center'</span> <span class="token operator">|</span> <span class="token string">'right'</span><span class="token punctuation">;</span> <span class="token comment">// 文字对齐方向</span>
  customHeadCellAttrs<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> column<span class="token operator">:</span> BsTableColumn<span class="token punctuation">)</span> <span class="token operator">=></span> Record<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">;</span> <span class="token comment">// 自定义头部单元格属性</span>
  customCell<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">,</span> cellIndex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> rowIndex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=></span> Record<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">;</span> <span class="token comment">// 自定义数据单元格内容</span>
  customCellAttrs<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">,</span> cellIndex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> rowIndex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> column<span class="token operator">:</span> BsTableColumn<span class="token punctuation">)</span> <span class="token operator">=></span> Record<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">;</span> <span class="token comment">// 自定义数据单元格属性及样式</span>
  cellClassName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">|</span><span class="token punctuation">(</span><span class="token punctuation">(</span>data<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">,</span> cellIndex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> rowIndex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> column<span class="token operator">:</span> BsTableColumn<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 自定义数据单元格class</span>
  <span class="token class-name">ellipsis</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// 文本溢出后是否显示3个点</span>
  showTooltip<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token operator">|</span>object<span class="token punctuation">;</span> <span class="token comment">// 文本溢出后是否显示tooltip</span>
  resizeable<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// 列宽是否可以拖拽</span>
  sorter<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>rowData1<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">,</span> rowData2<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// 行排序函数，参考 Array.sort 的 compareFunction</span>
  sortOrder<span class="token operator">?</span><span class="token operator">:</span> BsTableSortDirection<span class="token punctuation">;</span> <span class="token comment">// 列的排序方向（sorter执行后的排序方向），可设置为\`ascend\`（升序）、\`descend\`（降序），默认为升序</span>
  sortDirections<span class="token operator">?</span><span class="token operator">:</span> BsTableSortDirection<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 支持的排序方式，支持\`ascend\`（升序）、\`descend\`（降序）</span>
  defaultSortOrder<span class="token operator">?</span><span class="token operator">:</span> BsTableSortDirection<span class="token punctuation">;</span> <span class="token comment">// 默认排序顺序，设置该值后默认会对表格进行一次排序</span>
  showSorterTooltip<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token operator">|</span>object<span class="token punctuation">;</span> <span class="token comment">// 表头显示下一次排序的 tooltip 提示</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<h4><code>BsTableFootRow</code></h4>
<pre class="language-typescript"><code><span class="token comment">// 表尾行配置</span>
<span class="token keyword">interface</span> <span class="token class-name">BsTableFootRow</span> <span class="token punctuation">{</span>
  rowAttrs<span class="token operator">?</span><span class="token operator">:</span>Record<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>tableData<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> rowIndex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=></span> Record<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 自定义数据单元格属性及样式</span>
  columns<span class="token operator">:</span> BsTableFootColumn<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// 表尾列配置</span>
<span class="token keyword">interface</span> <span class="token class-name">BsTableFootColumn</span> <span class="token punctuation">{</span>
    label<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">number</span><span class="token operator">|</span><span class="token punctuation">(</span><span class="token punctuation">(</span>tableData<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> rowIndex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> columns<span class="token operator">:</span> BsTableColumn<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">number</span><span class="token operator">|</span>VNode<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 单元格显示的内容</span>
    cellAttrs<span class="token operator">?</span><span class="token operator">:</span>Record<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>tableData<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> rowIndex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> columns<span class="token operator">:</span> BsTableColumn<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> Record<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 自定义数据单元格属性及样式</span>
    fixed<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token operator">|</span><span class="token string">'left'</span><span class="token operator">|</span><span class="token string">'right'</span><span class="token punctuation">;</span> <span class="token comment">// 列是否固定住</span>
    slotName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 自定义内容插槽名称</span>
<span class="token punctuation">}</span>
</code></pre>
<h4><code>BsTableSelectionConfig</code></h4>
<pre class="language-typescript"><code>
<span class="token comment">// 行选择功能的配置项</span>
<span class="token keyword">interface</span> <span class="token class-name">BsTableSelectionConfig</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">'checkbox'</span><span class="token operator">|</span><span class="token string">'radio'</span><span class="token punctuation">;</span> <span class="token comment">// 选择框的类型</span>
  columnWidth<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// 选择列的宽度</span>
  columnTitle<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token operator">|</span>VNode<span class="token operator">|</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> VNode<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 选择列的标题</span>
  checkboxName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 复选框的name</span>
  checkStrictly<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false</span>
  radioName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 单选框框的name</span>
  <span class="token comment">// selectedRowKeys?: string[]; //  选中行的key</span>
  reserveSelectedRowKeys<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// 当数据更新后是否仍然保留之前选中行的key</span>
  rowDisabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>row<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">,</span> rowIndex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">boolean</span><span class="token operator">|</span><span class="token keyword">void</span><span class="token punctuation">;</span> <span class="token comment">// 行禁用函数</span>
  <span class="token comment">// onChange?: (selectedRowKeys: string[], selectedRows: Record&lt;string, any>[]) => void; // 选中项发生变化时的回调</span>
  onSelectChange<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>selection<span class="token operator">:</span> BsTableSelectionChangeResult<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span> <span class="token comment">// 用户手动选择/取消选择某列的回调</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">BsTableSelectionChangeResult</span> <span class="token punctuation">{</span>
    row<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span><span class="token operator">|</span><span class="token keyword">null</span><span class="token punctuation">;</span>
    isSelected<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    isHalfSelected<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    operateType<span class="token operator">:</span> <span class="token string">'selectSingle'</span> <span class="token operator">|</span> <span class="token string">'selectAll'</span> <span class="token operator">|</span> <span class="token string">'selectNone'</span><span class="token punctuation">;</span> <span class="token comment">// 操作类型</span>
    selectedRowKeys<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    selectedRows<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    halfSelectedRowKeys<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
    halfSelectedRows<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<h3>Table 事件</h3>
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
<td>expandChange</td>
<td>行展开/收起事件</td>
<td><code>(rowData: Record&lt;string, any&gt;, done: (isLoadFailed?: boolean) =&gt; void) =&gt; any</code></td>
</tr>
</tbody>
</table></div>
<h3>Table 插槽</h3>
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
<td>expandRow</td>
<td>展开行的内容插槽</td>
<td></td>
</tr>
<tr>
<td>expandCellIcon</td>
<td>展开行的图标</td>
<td></td>
</tr>
<tr>
<td>expandColumnHeader</td>
<td>展开列的头部自定义内容</td>
<td></td>
</tr>
<tr>
<td>selectionColumnHeader</td>
<td>选择列的头部自定义内容</td>
<td></td>
</tr>
<tr>
<td>selectionHeadExtra</td>
<td>选择列头部后面追加的额外内容</td>
<td></td>
</tr>
<tr>
<td>empty</td>
<td>空数据插槽</td>
<td></td>
</tr>
<tr>
<td>head</td>
<td>头部单元格插槽</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>Table 函数</h3>
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
<td>getSelectionInfo</td>
<td>获取选中行的信息</td>
<td></td>
</tr>
<tr>
<td>selectAll</td>
<td>选中当前表格中的所有行（disabled的除外）</td>
<td></td>
</tr>
<tr>
<td>selectNone</td>
<td>取消选中当前表格中的所有行（disabled的除外）</td>
<td></td>
</tr>
<tr>
<td>selectRow</td>
<td>选中指定行</td>
<td><code>(rowKey: string, rowData?: Record&lt;string, any&gt;, forceSelect?: boolean) =&gt; void</code></td>
</tr>
<tr>
<td>unSelectRow</td>
<td>取消选中指定行</td>
<td><code>(rowKey: string, rowData?: Record&lt;string, any&gt;, forceSelect?: boolean) =&gt; void</code></td>
</tr>
<tr>
<td>updateRow</td>
<td>更新行及children</td>
<td><code>(rowDataOrKey: Record&lt;string, any&gt;｜string) =&gt; any</code></td>
</tr>
<tr>
<td>doSort</td>
<td>排序</td>
<td><code>(columnId: string, sortDirection: BsTableSortDirection) =&gt; void</code></td>
</tr>
<tr>
<td>cancelSort</td>
<td>取消排序</td>
<td><code>(columnId: string, sortDirection?: BsTableSortDirection) =&gt; void</code></td>
</tr>
<tr>
<td>filter</td>
<td>过滤</td>
<td><code>(filterFn: (rowData: Record&lt;string, any&gt;, index: number) =&gt; boolean) = void</code></td>
</tr>
<tr>
<td>cancelSort</td>
<td>取消过滤</td>
<td><code>(columnId: string, sortDirection?: BsTableSortDirection) =&gt; void</code></td>
</tr>
</tbody>
</table></div>
`,c={type:n,typeCode:s,title:a,subtitle:t,componentName:o,description:p,apiContent:e};export{e as apiContent,o as componentName,c as default,p as description,t as subtitle,a as title,n as type,s as typeCode};

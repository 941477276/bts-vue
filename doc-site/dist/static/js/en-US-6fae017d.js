const n="data display",s="data_display",a="Tabs",t="tab page",o="table",e=`<p>Used to display multiple pieces of data with similar structures, and can be used to sort, filter, compare or perform other customized operations on the data.</p>
`,p=`<h2 class="api-h2" id="API_h2">API</h2>
<h3>Table property</h3>
<div class="table-responsive"><table class="api-table table table-hover">
<thead class="thead-light">
<tr>
<th>Parameter</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>columns</td>
<td>Table column configuration</td>
<td><code>BsTableColumn[]</code></td>
<td>[]</td>
</tr>
<tr>
<td>data</td>
<td>tabular data</td>
<td><code>Record&lt;string, any&gt;[]</code></td>
<td>[]</td>
</tr>
<tr>
<td>rowKey</td>
<td>Key of row data, used to optimize the rendering of Table. It can be a string or a function. It supports the form of <code>user.info.id</code>, but does not support <code>user.info[0].id</code>. In this case Please use <code>Function</code></td>
<td></td>
<td>false</td>
</tr>
<tr>
<td>size</td>
<td>Table size. Optional <code>sm</code></td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>stripe</td>
<td>Whether it is a zebra pattern table</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>border</td>
<td>Whether to have a border</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>borderless</td>
<td>Whether to remove borders</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>rowClassName</td>
<td>Custom table data row classname</td>
<td><code>string</code>/ <code>array</code>/ <code>object</code>/ <code>function</code></td>
<td></td>
</tr>
<tr>
<td>height</td>
<td>table height</td>
<td><code>string</code>/ <code>number</code></td>
<td></td>
</tr>
<tr>
<td>maxHeight</td>
<td>The maximum height of the table</td>
<td><code>string</code>/ <code>number</code></td>
<td></td>
</tr>
<tr>
<td>tableHover</td>
<td>Whether to change the background color of the row when the mouse moves over the row</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>allowExpand</td>
<td>Whether to allow expansion</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>expandColumnWidth</td>
<td>Expand column width</td>
<td><code>string</code>/ <code>number</code></td>
<td>50</td>
</tr>
<tr>
<td>expandColumnLabel</td>
<td>The column name of the expanded column</td>
<td><code>string</code>/<code>number</code>/<code>function</code></td>
<td></td>
</tr>
<tr>
<td>defaultExpandAllRows</td>
<td>Whether to expand all rows by default</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>defaultExpandedRowKeys</td>
<td>The keys of the default expanded rows</td>
<td><code>string[]</code></td>
<td>[]</td>
</tr>
<tr>
<td>lazy</td>
<td>Whether to lazily load tree data</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>load</td>
<td>Lazy loading data function</td>
<td><code>(rowData: Record&lt;string, any&gt;, resolve: (isLoadFailed?: boolean) =&gt; void) =&gt; any</code></td>
<td></td>
</tr>
<tr>
<td>selectionConfig</td>
<td>Selection configuration</td>
<td><code>BsTableSelectionConfig</code></td>
<td>{}</td>
</tr>
<tr>
<td>selectedRowKeys</td>
<td>The key of the selected row</td>
<td><code>string[]</code></td>
<td>[]</td>
</tr>
<tr>
<td>emptyText</td>
<td>Table empty data prompt text</td>
<td><code>string</code>/ <code>number</code></td>
<td></td>
</tr>
<tr>
<td>footerRows</td>
<td>Table footer row configuration</td>
<td><code>BsTableFootRow[]</code></td>
<td>[]</td>
</tr>
<tr>
<td>footerMethod</td>
<td>Highly customized table footer column function</td>
<td><code>(tableData: Record&lt;string, any&gt;[], columns: BsTableColumn[]) =&gt; BsTableFootRow[]</code></td>
<td></td>
</tr>
</tbody>
</table></div>
<h4><code>BsTableColumn</code></h4>
<pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">BsTableSortDirection</span> <span class="token operator">=</span> <span class="token string">'ascend'</span> <span class="token operator">|</span> <span class="token string">'descend'</span> <span class="token operator">|</span> <span class="token string">''</span><span class="token punctuation">;</span><span class="token comment">//The sorting method supported by the column, supports \`ascend\` (ascending order), \`descend\` (descending order)</span>

<span class="token keyword">interface</span> <span class="token class-name">BsTableColumn</span> <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">number</span><span class="token operator">|</span><span class="token punctuation">(</span><span class="token punctuation">(</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> column<span class="token operator">:</span> BsTableColumn<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">number</span><span class="token operator">|</span>VNode<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// column name</span>
    prop<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// Column data field name</span>
    headSlotName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// Head cell slot name</span>
    filterSlotName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// Header cell filter slot name</span>
    colSpan<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token operator">|</span><span class="token punctuation">(</span><span class="token punctuation">(</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> column<span class="token operator">:</span> BsTableColumn<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Number of merged header cells</span>
    width<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">number</span><span class="token punctuation">;</span>
    minWidth<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">number</span><span class="token punctuation">;</span>
    fixed<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token operator">|</span><span class="token string">'left'</span><span class="token operator">|</span><span class="token string">'right'</span><span class="token punctuation">;</span> <span class="token comment">// Is the column fixed?</span>
    align<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">'left'</span> <span class="token operator">|</span> <span class="token string">'center'</span> <span class="token operator">|</span> <span class="token string">'right'</span><span class="token punctuation">;</span> <span class="token comment">// Text alignment direction</span>
    customHeadCellAttrs<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> column<span class="token operator">:</span> BsTableColumn<span class="token punctuation">)</span> <span class="token operator">=></span> Record<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">;</span> <span class="token comment">// Customize the header cell attributes</span>
    customCell<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">,</span> cellIndex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> rowIndex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=></span> Record<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">;</span> <span class="token comment">// Customize data cell content</span>
    customCellAttrs<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">,</span> cellIndex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> rowIndex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> column<span class="token operator">:</span> BsTableColumn<span class="token punctuation">)</span> <span class="token operator">=></span> Record<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">;</span> <span class="token comment">// Customize data cell attributes and styles</span>
    cellClassName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">|</span><span class="token punctuation">(</span><span class="token punctuation">(</span>data<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">,</span> cellIndex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> rowIndex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> column<span class="token operator">:</span> BsTableColumn<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Custom data cell class</span>
    <span class="token class-name">ellipsis</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// Whether to display 3 dots after the text overflows</span>
    showTooltip<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token operator">|</span>object<span class="token punctuation">;</span> <span class="token comment">// Whether to display tooltip after text overflows</span>
    resizeable<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// Whether the column width can be dragged</span>
    sorter<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>rowData1<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">,</span> rowData2<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// Row sorting function, refer to compareFunction of Array.sort</span>
    sortOrder<span class="token operator">?</span><span class="token operator">:</span> BsTableSortDirection<span class="token punctuation">;</span> <span class="token comment">// The sorting direction of the column (the sorting direction after sorter is executed), can be set to \`ascend\` (ascending order), \`descend\` (descending order), the default is ascending order</span>
    sortDirections<span class="token operator">?</span><span class="token operator">:</span> BsTableSortDirection<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//Supported sorting methods, supports \`ascend\` (ascending order), \`descend\` (descending order)</span>
    defaultSortOrder<span class="token operator">?</span><span class="token operator">:</span> BsTableSortDirection<span class="token punctuation">;</span> <span class="token comment">//Default sort order, after setting this value, the table will be sorted once by default</span>
    showSorterTooltip<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token operator">|</span>object<span class="token punctuation">;</span> <span class="token comment">// The header displays the tooltip for the next sorting</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<h4><code>BsTableFootRow</code></h4>
<pre class="language-typescript"><code><span class="token comment">//Table tail row configuration</span>
<span class="token keyword">interface</span> <span class="token class-name">BsTableFootRow</span> <span class="token punctuation">{</span>
    rowAttrs<span class="token operator">?</span><span class="token operator">:</span>Record<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>tableData<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> rowIndex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=></span> Record<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Customize data cell attributes and styles</span>
    columns<span class="token operator">:</span> BsTableFootColumn<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">//Table tail column configuration</span>
<span class="token keyword">interface</span> <span class="token class-name">BsTableFootColumn</span> <span class="token punctuation">{</span>
    label<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">number</span><span class="token operator">|</span><span class="token punctuation">(</span><span class="token punctuation">(</span>tableData<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> rowIndex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> columns<span class="token operator">:</span> BsTableColumn<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">number</span><span class="token operator">|</span>VNode<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Content displayed by the cell</span>
    cellAttrs<span class="token operator">?</span><span class="token operator">:</span>Record<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>tableData<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> rowIndex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> columns<span class="token operator">:</span> BsTableColumn<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> Record<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Custom data cell Properties and styles</span>
    fixed<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token operator">|</span><span class="token string">'left'</span><span class="token operator">|</span><span class="token string">'right'</span><span class="token punctuation">;</span> <span class="token comment">// Is the column fixed?</span>
    slotName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// Custom content slot name</span>
<span class="token punctuation">}</span>
</code></pre>
<h4><code>BsTableSelectionConfig</code></h4>
<pre class="language-typescript"><code>
<span class="token comment">//Configuration items for row selection function</span>
<span class="token keyword">interface</span> <span class="token class-name">BsTableSelectionConfig</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">'checkbox'</span><span class="token operator">|</span><span class="token string">'radio'</span><span class="token punctuation">;</span> <span class="token comment">// Type of selection box</span>
    columnWidth<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// Select the width of the column</span>
    columnTitle<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token operator">|</span>VNode<span class="token operator">|</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> VNode<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Select the title of the column</span>
    checkboxName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// The name of the check box</span>
    checkStrictly<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// When the check box is displayed, whether to strictly follow the practice of parent and child not being related to each other, the default is false</span>
    radioName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// The name of the radio button</span>
    <span class="token comment">// selectedRowKeys?: string[]; // The key of the selected row</span>
    reserveSelectedRowKeys<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// Whether to retain the key of the previously selected row after the data is updated</span>
    rowDisabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>row<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">,</span> rowIndex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">boolean</span><span class="token operator">|</span><span class="token keyword">void</span><span class="token punctuation">;</span> <span class="token comment">// Row disable function</span>
    <span class="token comment">// onChange?: (selectedRowKeys: string[], selectedRows: Record&lt;string, any>[]) => void; // Callback when the selected item changes</span>
    onSelectChange<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>selection<span class="token operator">:</span> BsTableSelectionChangeResult<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span> <span class="token comment">// Callback for the user to manually select/deselect a column</span>
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
<h3>Table event</h3>
<div class="table-responsive"><table class="api-table table table-hover">
<thead class="thead-light">
<tr>
<th>Event Name</th>
<th>Description</th>
<th>Callback Parameters</th>
</tr>
</thead>
<tbody>
<tr>
<td>expandChange</td>
<td>Row expand/collapse events</td>
<td><code>(rowData: Record&lt;string, any&gt;, done: (isLoadFailed?: boolean) =&gt; void) =&gt; any</code></td>
</tr>
</tbody>
</table></div>
<h3>Table slot</h3>
<div class="table-responsive"><table class="api-table table table-hover">
<thead class="thead-light">
<tr>
<th>Slot Name</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>expandRow</td>
<td>Expand the row's content slot</td>
<td></td>
</tr>
<tr>
<td>expandCellIcon</td>
<td>Expand row icon</td>
<td></td>
</tr>
<tr>
<td>expandColumnHeader</td>
<td>Expand the custom content of the column header</td>
<td></td>
</tr>
<tr>
<td>selectionColumnHeader</td>
<td>Select the custom content of the header of the column</td>
<td></td>
</tr>
<tr>
<td>selectionHeadExtra</td>
<td>Extra content appended after the header of the selection column</td>
<td></td>
</tr>
<tr>
<td>empty</td>
<td>Empty data slot</td>
<td></td>
</tr>
<tr>
<td>head</td>
<td>Table header cell slot</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>Table function</h3>
<div class="table-responsive"><table class="api-table table table-hover">
<thead class="thead-light">
<tr>
<th>function name</th>
<th>description</th>
<th>parameters</th>
</tr>
</thead>
<tbody>
<tr>
<td>getSelectionInfo</td>
<td>Get selected row information</td>
<td></td>
</tr>
<tr>
<td>selectAll</td>
<td>Select all rows in the current table (except disabled ones)</td>
<td></td>
</tr>
<tr>
<td>selectNone</td>
<td>Uncheck all rows in the current table (except disabled ones)</td>
<td></td>
</tr>
<tr>
<td>selectRow</td>
<td>Select the specified row</td>
<td><code>(rowKey: string, rowData?: Record&lt;string, any&gt;, forceSelect?: boolean) =&gt; void</code></td>
</tr>
<tr>
<td>unSelectRow</td>
<td>Unselect the specified row</td>
<td><code>(rowKey: string, rowData?: Record&lt;string, any&gt;, forceSelect?: boolean) =&gt; void</code></td>
</tr>
<tr>
<td>updateRow</td>
<td>Update rows and children</td>
<td>\`(rowDataOrKey: Record&lt;string, any&gt;</td>
</tr>
<tr>
<td>doSort</td>
<td>Sort</td>
<td><code>(columnId: string, sortDirection: BsTableSortDirection) =&gt; void</code></td>
</tr>
<tr>
<td>cancelSort</td>
<td>Cancel sorting</td>
<td><code>(columnId: string, sortDirection?: BsTableSortDirection) =&gt; void</code></td>
</tr>
<tr>
<td>filter</td>
<td>Filter</td>
<td><code>(filterFn: (rowData: Record&lt;string, any&gt;, index: number) =&gt; boolean) = void</code></td>
</tr>
<tr>
<td>cancelSort</td>
<td>Cancel filtering</td>
<td><code>(columnId: string, sortDirection?: BsTableSortDirection) =&gt; void</code></td>
</tr>
</tbody>
</table></div>
`,c={type:n,typeCode:s,title:a,subtitle:t,componentName:o,description:e,apiContent:p};export{p as apiContent,o as componentName,c as default,e as description,t as subtitle,a as title,n as type,s as typeCode};

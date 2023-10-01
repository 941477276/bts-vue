---
category: Components
type: 数据展示
typeCode: data_display
title: Table
subtitle: 表格
startVersion: 0.1.2
---

用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。

## API

### Table 属性

| 参数               | 说明                                                                                             | 类型                                                                               | 默认值   |
|------------------|------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|-------|
| columns          | 表格列配置                                                                                          | `BsTableColumn[]`                                                                | []    |
| data         | 表格数据                                                                                           | `Record<string, any>[]`                                                          | []    |
| rowKey          | 行数据的 Key，用来优化 Table 的渲染，可以是字符串或一个函数，支持`user.info.id`形式，但不支持`user.info[0].id`，此种情况请使用`Function` |                                                                                  | false |
| size             | 表格大小。可选`sm`                                                                                    | string                                                                           |       |
| stripe        | 是否为带斑马纹表格                                                                                      | boolean                                                                          | false |
| border        | 是否为带边框                                                                                         | boolean                                                                          | false |
| borderless        | 是否去掉边框                                                                                         | boolean                                                                          | false |
| rowClassName        | 自定义表格数据行classname                                                                              | `string`/ `array`/ `object`/ `function`                                          |       |
| height        | 表格高度                                                                                           | `string`/ `number`                                                               |       |
| maxHeight        | 表格最大高度                                                                                         | `string`/ `number`                                                               |       |
| tableHover        | 鼠标移动到行上时是否改变行的背景色                                                                              | boolean                                                                          | true  |
| allowExpand        | 是否允许展开                                                                                         | boolean                                                                          | false |
| expandColumnWidth        | 展开列的宽度                                                                                         | `string`/ `number`                                                               | 50    |
| expandColumnLabel        | 展开列的列名称                                                                                        | `string`/ `number`/`function`                                                    |       |
| defaultExpandAllRows        | 默认是否展开所有行                                                                                      | boolean                                                                          | false |
| defaultExpandedRowKeys        | 默认展开的行的key                                                                                     | `string[]`                                                                       | []    |
| lazy | 是否懒加载树状数据                                                                                      | boolean                                                                          | false |
| load      | 懒加载数据函数                                                                                        | `(rowData: Record<string, any>, resolve: (isLoadFailed?: boolean) => void) => any` |       |
| selectionConfig    | 选择项配置                                                                                          | `BsTableSelectionConfig`                                                         | {}    |
| selectedRowKeys       | 选中行的key                                                                                        | `string[]`                                                                       | []    |
| emptyText     | 表格空数据提示文字                                                                                      | `string`/ `number`                                                               |       |
| footerRows      | 表格尾部行配置                                                                                        | `BsTableFootRow[]`                                                                                 | []    |
| footerMethod    | 高度自定义表格尾部列函数                                                                              | `(tableData: Record<string, any>[], columns: BsTableColumn[]) => BsTableFootRow[]`                                                                           |       |

#### `BsTableColumn`
```typescript
type BsTableSortDirection = 'ascend' | 'descend' | '';// 列支持的排序方式，支持`ascend`（升序）、`descend`（降序）

interface BsTableColumn {
  label: string|number|((index: number, column: BsTableColumn) => string|number|VNode); // 列名
  prop: string; // 列数据字段名称
  headSlotName?: string; // 头部单元格插槽名称
  filterSlotName?: string; // 头部单元格筛选器插槽名称
  colSpan?: number|((index: number, column: BsTableColumn) => number); // 头部单元格合并数量
  width?: string|number;
  minWidth?: string|number;
  fixed?: boolean|'left'|'right'; // 列是否固定住
  align?: 'left' | 'center' | 'right'; // 文字对齐方向
  customHeadCellAttrs?: (index: number, column: BsTableColumn) => Record<any, any>; // 自定义头部单元格属性
  customCell?: (data: Record<string, any>, cellIndex: number, rowIndex: number) => Record<any, any>; // 自定义数据单元格内容
  customCellAttrs?: (data: Record<string, any>, cellIndex: number, rowIndex: number, column: BsTableColumn) => Record<any, any>; // 自定义数据单元格属性及样式
  cellClassName?: string|string[]|((data: Record<string, any>, cellIndex: number, rowIndex: number, column: BsTableColumn) => (string|string[])); // 自定义数据单元格class
  ellipsis?: boolean; // 文本溢出后是否显示3个点
  showTooltip?: boolean|object; // 文本溢出后是否显示tooltip
  resizeable?: boolean; // 列宽是否可以拖拽
  sorter?: (rowData1: Record<string, any>, rowData2: Record<string, any>) => number; // 行排序函数，参考 Array.sort 的 compareFunction
  sortOrder?: BsTableSortDirection; // 列的排序方向（sorter执行后的排序方向），可设置为`ascend`（升序）、`descend`（降序），默认为升序
  sortDirections?: BsTableSortDirection[]; // 支持的排序方式，支持`ascend`（升序）、`descend`（降序）
  defaultSortOrder?: BsTableSortDirection; // 默认排序顺序，设置该值后默认会对表格进行一次排序
  showSorterTooltip?: boolean|object; // 表头显示下一次排序的 tooltip 提示
};
```

#### `BsTableFootRow`
```typescript
// 表尾行配置
interface BsTableFootRow {
  rowAttrs?:Record<any, any> | ((tableData: Record<string, any>[], rowIndex: number) => Record<any, any>); // 自定义数据单元格属性及样式
  columns: BsTableFootColumn[]
}

// 表尾列配置
interface BsTableFootColumn {
    label?: string|number|((tableData: Record<string, any>[], rowIndex: number, columns: BsTableColumn[]) => string|number|VNode); // 单元格显示的内容
    cellAttrs?:Record<any, any> | ((tableData: Record<string, any>[], rowIndex: number, columns: BsTableColumn[]) => Record<any, any>); // 自定义数据单元格属性及样式
    fixed?: boolean|'left'|'right'; // 列是否固定住
    slotName?: string; // 自定义内容插槽名称
}
```

#### `BsTableSelectionConfig`
```typescript

// 行选择功能的配置项
interface BsTableSelectionConfig {
  type: 'checkbox'|'radio'; // 选择框的类型
  columnWidth?: string|number; // 选择列的宽度
  columnTitle?: string|VNode|(() => VNode); // 选择列的标题
  checkboxName?: string; // 复选框的name
  checkStrictly?: boolean; // 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false
  radioName?: string; // 单选框框的name
  // selectedRowKeys?: string[]; //  选中行的key
  reserveSelectedRowKeys?: boolean; // 当数据更新后是否仍然保留之前选中行的key
  rowDisabled?: (row: Record<string, any>, rowIndex: number) => boolean|void; // 行禁用函数
  // onChange?: (selectedRowKeys: string[], selectedRows: Record<string, any>[]) => void; // 选中项发生变化时的回调
  onSelectChange?: (selection: BsTableSelectionChangeResult) => void; // 用户手动选择/取消选择某列的回调
}

interface BsTableSelectionChangeResult {
    row: Record<string, any>|null;
    isSelected: boolean;
    isHalfSelected: boolean;
    operateType: 'selectSingle' | 'selectAll' | 'selectNone'; // 操作类型
    selectedRowKeys: string[];
    selectedRows: Record<string, any>[];
    halfSelectedRowKeys: string[]
    halfSelectedRows: Record<string, any>[];
};
```



### Table 事件

| 事件名称    | 说明       | 回调参数                                                                          |
|---------|----------|-------------------------------------------------------------------------------|
| expandChange  | 行展开/收起事件 | `(rowData: Record<string, any>, done: (isLoadFailed?: boolean) => void) => any` |


### Table 插槽

| 插槽名称                  | 说明             | 版本  |
|-----------------------|----------------|-----|
| expandRow             | 展开行的内容插槽       |     |
| expandCellIcon        | 展开行的图标         |     |
| expandColumnHeader    | 展开列的头部自定义内容    |     |
| selectionColumnHeader | 选择列的头部自定义内容    |     |
| selectionHeadExtra    | 选择列头部后面追加的额外内容 |     |
| empty                 | 空数据插槽          |     |
| head                  | 头部单元格插槽        |     |


### Table 函数

| 函数名称             | 说明                         | 参数                                                                               |
|------------------|----------------------------|----------------------------------------------------------------------------------|
| getSelectionInfo | 获取选中行的信息                   |                                                                                  |
| selectAll        | 选中当前表格中的所有行（disabled的除外）   |                                                                                  |
| selectNone       | 取消选中当前表格中的所有行（disabled的除外） |                                                                                  |
| selectRow        | 选中指定行                      | `(rowKey: string, rowData?: Record<string, any>, forceSelect?: boolean) => void` |
| unSelectRow      | 取消选中指定行                    | `(rowKey: string, rowData?: Record<string, any>, forceSelect?: boolean) => void` |
| updateRow        | 更新行及children               | `(rowDataOrKey: Record<string, any>｜string) => any`                              |
| doSort        | 排序                         | `(columnId: string, sortDirection: BsTableSortDirection) => void`                |
| cancelSort       | 取消排序                       | `(columnId: string, sortDirection?: BsTableSortDirection) => void`               |
| filter       | 过滤                         | `(filterFn: (rowData: Record<string, any>, index: number) => boolean) = void`    |
| cancelSort       | 取消过滤                       | `(columnId: string, sortDirection?: BsTableSortDirection) => void`               |

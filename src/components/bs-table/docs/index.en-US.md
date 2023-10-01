---
category: Components
type: data display
typeCode: data_display
title: Tabs
subtitle: tab page
startVersion: 0.1.2
---

Used to display multiple pieces of data with similar structures, and can be used to sort, filter, compare or perform other customized operations on the data.

## API

### Table property

| Parameter | Description | Type | Default |
|------------------|------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|-------|
| columns | Table column configuration | `BsTableColumn[]` | [] |
| data | tabular data | `Record<string, any>[]` | [] |
| rowKey | Key of row data, used to optimize the rendering of Table. It can be a string or a function. It supports the form of `user.info.id`, but does not support `user.info[0].id`. In this case Please use `Function` | | false |
| size | Table size. Optional `sm` | string | |
| stripe | Whether it is a zebra pattern table | boolean | false |
| border | Whether to have a border | boolean | false |
| borderless | Whether to remove borders | boolean | false |
| rowClassName | Custom table data row classname | `string`/ `array`/ `object`/ `function` | |
| height | table height | `string`/ `number` | |
| maxHeight | The maximum height of the table | `string`/ `number` | |
| tableHover | Whether to change the background color of the row when the mouse moves over the row | boolean | true |
| allowExpand | Whether to allow expansion | boolean | false |
| expandColumnWidth | Expand column width | `string`/ `number` | 50 |
| expandColumnLabel | The column name of the expanded column | `string`/`number`/`function` | |
| defaultExpandAllRows | Whether to expand all rows by default | boolean | false |
| defaultExpandedRowKeys | The keys of the default expanded rows | `string[]` | [] |
| lazy | Whether to lazily load tree data | boolean | false |
| load | Lazy loading data function | `(rowData: Record<string, any>, resolve: (isLoadFailed?: boolean) => void) => any` | |
| selectionConfig | Selection configuration | `BsTableSelectionConfig` | {} |
| selectedRowKeys | The key of the selected row | `string[]` | [] |
| emptyText | Table empty data prompt text | `string`/ `number` | |
| footerRows | Table footer row configuration | `BsTableFootRow[]` | [] |
| footerMethod | Highly customized table footer column function | `(tableData: Record<string, any>[], columns: BsTableColumn[]) => BsTableFootRow[]` | |


#### `BsTableColumn`
```typescript
type BsTableSortDirection = 'ascend' | 'descend' | '';//The sorting method supported by the column, supports `ascend` (ascending order), `descend` (descending order)

interface BsTableColumn {
    label: string|number|((index: number, column: BsTableColumn) => string|number|VNode); // column name
    prop: string; // Column data field name
    headSlotName?: string; // Head cell slot name
    filterSlotName?: string; // Header cell filter slot name
    colSpan?: number|((index: number, column: BsTableColumn) => number); // Number of merged header cells
    width?: string|number;
    minWidth?: string|number;
    fixed?: boolean|'left'|'right'; // Is the column fixed?
    align?: 'left' | 'center' | 'right'; // Text alignment direction
    customHeadCellAttrs?: (index: number, column: BsTableColumn) => Record<any, any>; // Customize the header cell attributes
    customCell?: (data: Record<string, any>, cellIndex: number, rowIndex: number) => Record<any, any>; // Customize data cell content
    customCellAttrs?: (data: Record<string, any>, cellIndex: number, rowIndex: number, column: BsTableColumn) => Record<any, any>; // Customize data cell attributes and styles
    cellClassName?: string|string[]|((data: Record<string, any>, cellIndex: number, rowIndex: number, column: BsTableColumn) => (string|string[])); // Custom data cell class
    ellipsis?: boolean; // Whether to display 3 dots after the text overflows
    showTooltip?: boolean|object; // Whether to display tooltip after text overflows
    resizeable?: boolean; // Whether the column width can be dragged
    sorter?: (rowData1: Record<string, any>, rowData2: Record<string, any>) => number; // Row sorting function, refer to compareFunction of Array.sort
    sortOrder?: BsTableSortDirection; // The sorting direction of the column (the sorting direction after sorter is executed), can be set to `ascend` (ascending order), `descend` (descending order), the default is ascending order
    sortDirections?: BsTableSortDirection[]; //Supported sorting methods, supports `ascend` (ascending order), `descend` (descending order)
    defaultSortOrder?: BsTableSortDirection; //Default sort order, after setting this value, the table will be sorted once by default
    showSorterTooltip?: boolean|object; // The header displays the tooltip for the next sorting
};
```
#### `BsTableFootRow`
```typescript
//Table tail row configuration
interface BsTableFootRow {
    rowAttrs?:Record<any, any> | ((tableData: Record<string, any>[], rowIndex: number) => Record<any, any>); // Customize data cell attributes and styles
    columns: BsTableFootColumn[]
}

//Table tail column configuration
interface BsTableFootColumn {
    label?: string|number|((tableData: Record<string, any>[], rowIndex: number, columns: BsTableColumn[]) => string|number|VNode); // Content displayed by the cell
    cellAttrs?:Record<any, any> | ((tableData: Record<string, any>[], rowIndex: number, columns: BsTableColumn[]) => Record<any, any>); // Custom data cell Properties and styles
    fixed?: boolean|'left'|'right'; // Is the column fixed?
    slotName?: string; // Custom content slot name
}
```
#### `BsTableSelectionConfig`
```typescript

//Configuration items for row selection function
interface BsTableSelectionConfig {
    type: 'checkbox'|'radio'; // Type of selection box
    columnWidth?: string|number; // Select the width of the column
    columnTitle?: string|VNode|(() => VNode); // Select the title of the column
    checkboxName?: string; // The name of the check box
    checkStrictly?: boolean; // When the check box is displayed, whether to strictly follow the practice of parent and child not being related to each other, the default is false
    radioName?: string; // The name of the radio button
    // selectedRowKeys?: string[]; // The key of the selected row
    reserveSelectedRowKeys?: boolean; // Whether to retain the key of the previously selected row after the data is updated
    rowDisabled?: (row: Record<string, any>, rowIndex: number) => boolean|void; // Row disable function
    // onChange?: (selectedRowKeys: string[], selectedRows: Record<string, any>[]) => void; // Callback when the selected item changes
    onSelectChange?: (selection: BsTableSelectionChangeResult) => void; // Callback for the user to manually select/deselect a column
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



### Table event

| Event Name | Description | Callback Parameters |
|---------|----------|-------------------------------------------------------------------------------|
| expandChange  | Row expand/collapse events | `(rowData: Record<string, any>, done: (isLoadFailed?: boolean) => void) => any` |


### Table slot

| Slot Name             | Description | Version |
|-----------------------|----------------|-----|
| expandRow             | Expand the row's content slot | |
| expandCellIcon        | Expand row icon | |
| expandColumnHeader    | Expand the custom content of the column header | |
| selectionColumnHeader | Select the custom content of the header of the column | |
| selectionHeadExtra    | Extra content appended after the header of the selection column | |
| empty                 | Empty data slot | |
| head                  | Table header cell slot | |


### Table function

| function name | description | parameters |
|------------------|----------------------------|----------------------------------------------------------------------------------|
| getSelectionInfo | Get selected row information | |
| selectAll | Select all rows in the current table (except disabled ones) | |
| selectNone | Uncheck all rows in the current table (except disabled ones) | |
| selectRow | Select the specified row | `(rowKey: string, rowData?: Record<string, any>, forceSelect?: boolean) => void` |
| unSelectRow | Unselect the specified row | `(rowKey: string, rowData?: Record<string, any>, forceSelect?: boolean) => void` |
| updateRow | Update rows and children | `(rowDataOrKey: Record<string, any>|string) => any` |
| doSort | Sort | `(columnId: string, sortDirection: BsTableSortDirection) => void` |
| cancelSort | Cancel sorting | `(columnId: string, sortDirection?: BsTableSortDirection) => void` |
| filter | Filter | `(filterFn: (rowData: Record<string, any>, index: number) => boolean) = void` |
| cancelSort | Cancel filtering | `(columnId: string, sortDirection?: BsTableSortDirection) => void` |

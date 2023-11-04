---
category: Components
type: data display
typeCode: data_display
title: Tree
subtitle: tree control
---

tree-structured list

## API

### Tree property

| Parameter | Description | Type | Default |
|-------------------------------------|--------------------------------------------|----------------------------------------------------------|---------|
| treeData | tree data | [TreeNode](#TreeNode) | {} |
| checkedKeys(v-model:checkedKeys) | key array of selected nodes (controlled) | `string[]`/`number[]` | [] |
| nodeKey | Each tree node is used as a unique identification attribute, the whole tree should be unique (by comparison) | string | |
| props | child node configuration | [props](#props) | |
| showCheckbox | Whether the node can be multi-selected | boolean | false |
| checkStrictly | In the case of displaying checkboxes, whether to strictly follow the practice of parent-child disassociation, the default is false | boolean | false |
| checkboxName | the name of the checkbox | string | |
| checkOnClickNode | Whether to check the node when the node is clicked, the default value is false. (i.e. the node will only be selected when the checkbox is clicked) | boolean | false |
| expandOnClickNode | Expand or collapse the node when the node is clicked | boolean | true |
| showRadio | Whether the node is radio selected | boolean | false |
| radioName | the name of the radio box | string | -- |
| renderAfterExpand | Whether to render a tree node after its first expansion | boolean | true |
| highlightCurrent | whether to highlight the currently selected node | boolean | false |
| defaultExpandAll | Whether to expand all nodes by default | boolean | false |
| defaultExpandNodeLevelMax | The maximum value of the expanded node level by default, less than or equal to 0 is invalid | number | 0 |
| renderContent | The rendering function of the content area of the tree node | (nodeData: object, nodeState: object) => vnode | |
| expandedKeys | Array of keys of expanded nodes | `string[]`/`number[]` | [] |
| autoExpandParent | Whether to automatically expand the parent node when expanding the child node | boolean | true |
| accordion | Whether to expand only one sibling tree node at a time | boolean | false |
| lazy | Whether to lazily load child nodes, it needs to be used in conjunction with `loadDataFn` method | boolean | false |
| loadDataFn | asynchronously load node data function | (nodeData: object, nodeState: object) => Promise<any> | |
| filterMethod | node filter function | (nodeData: object, filterText: string) => boolean | |
| filterText | node filter text, the text will be passed to the `filterMethod` function using | `string`/`number` | |
| pageSize | The number of sub-node pagination display, the value is 0 means no paging is used, this function can be used when there is a large amount of data | number | 0 |
| loadMoreChildButtonText | pagination "show more" button text | string | ...show more |
| loadAllChildButtonText | pagination "show all" button text | string | show all |
| loading | whether tree data is being loaded | boolean | false |
| loadingText | Text displayed when loading data | string | Loading... |

#### TreeNode Properties

| Parameter | Description | Type | Default |
|-------------------------------------|---------------------|------------|---|
| label (can be changed with props.label) | node label | string | |
| children (can be changed with props.children) | child nodes of the node | TreeNode[] | [] |
| disabled (can be changed with props.disabled) | whether the node is disabled | boolean | |
| isLeaf (can be changed with props.isLeaf) | Whether the node is disabled | boolean | |

#### props attribute

| Parameter | Description | Type | Default |
|----------|---------------------|---------|------- |
| label | the key of the node label attribute in the node object | string | label |
| children | the key of the node's child node attribute in the node object | string | children |
| disabled | Whether the node disables the attribute's key in the node object | string | disabled |
| isLeaf | Whether the node is a leaf node attribute key in the node object | string | isLeaf |

### Tree Events

| Event Name | Description | Callback Parameters |
|---------------|---------------|---------------------------------------------------------------------|
| node-expand | Triggered when a node is expanded/collapsed | function(nodeData: TreeNode, expanded: boolean, nodeState: any) |
| check-change | Triggered when a node is checked/unchecked | function(nodeData: TreeNode, isChecked: boolean) |
| node-click | Triggered when a node is clicked | function(nodeData: TreeNode, nodeState: any) |
| node-destroy | Triggered when a node is destroyed | function(nodeData: TreeNode) |


### Tree slot

| Slot Name | Description | Version |
|---------------|-----------|-----|
| loading | Hints in tree data loading | |
| empty | A hint that the tree has no data | |
| switcher-icon | custom icon | |
| default | node title | |


### Tree function

| function name | description | parameters                                                                       |
|--------------------------|----------------------------|----------------------------------------------------------------------------------|
| getParentNodeByNodeValue | Get the parent node according to the value of the node | `(nodeValue: string) => Record<string, any>                                      |null` |
| getCheckedNodes | Get the selected nodes | `() => Record<string, any>[]`                                                    |
| getCheckedKeys | Get the key of the selected node | `() => string[]`                                                                 |
| getHalfCheckedNodes | Get half-selected nodes | `() => Record<string, any>[]`                                                    |
| getHalfCheckedKeys | Get the key of the selected node | `() => Record<string, any>[]`                                                    |
| getCheckedNodes | Get the selected nodes | `Record<string, any>[]`                                                          |
| getCheckedNodes | Get the selected nodes | `Record<string, any>[]`                                                          |
| selectAll | Select all nodes in the current table (except disabled ones) |                                                                                  |
| selectNone | Unselect all nodes in the current table (except disabled ones) | `(force?: boolean) => void`                                                                                  |
| addCheckedItem | Select the specified node | `(rowKey: string, rowData?: Record<string, any>, forceSelect?: boolean) => void` |
| removeCheckedItem | Uncheck the specified node | `(rowKey: string, rowData?: Record<string, any>, forceSelect?: boolean) => void` |

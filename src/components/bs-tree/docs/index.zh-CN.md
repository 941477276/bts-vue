---
category: Components
type: 数据展示
typeCode: data_display
title: Tree
subtitle: 树形控件
---

树形结构的列表

## API

### Tree 属性

| 参数                               | 说明                                         | 类型                                                    | 默认值     |
|----------------------------------|--------------------------------------------|-------------------------------------------------------|---------|
| treeData                         | 树数据                                        | [TreeNode](#TreeNode)                               | {}      |
| checkedKeys(v-model:checkedKeys) | 选中的节点的key数组（受控）                            | `string[]`/`number[]`                                 | []      |
| nodeKey                          | 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的（比填）             | string                                                |         |
| props                            | 子节点配置                                      | [props](#props)                                   |         |
| showCheckbox                     | 节点是否可以多选                                   | boolean                                               | false   |
| checkStrictly                    | 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false     | boolean                                               | false   |
| checkboxName                     | 复选框的name                                   | string                                                |         |
| checkOnClickNode                 | 是否在点击节点的时候选中节点，默认值为 false。（即只有在点击复选框时才会选中节点） | boolean                                               | false   |
| expandOnClickNode                | 点击节点的时候展开或者收缩节点                            | boolean                                               | true    |
| showRadio                        | 节点是否单选                                     | boolean                                               | false   |
| radioName                        | 单选框框的name                                  | string                                                | --      |
| renderAfterExpand                | 是否在第一次展开某个树节点后才渲染其子节点                      | boolean                                               | true    |
| highlightCurrent                 | 是否高亮当前选中节点                                 | boolean                                               | false   |
| defaultExpandAll                 | 默认是否展开所有节点                                 | boolean                                               | false   |
| defaultExpandNodeLevelMax        | 默认展开节点级别的最大值，小于等于0无效                       | number                                                | 0       |
| renderContent                    | 树节点的内容区的渲染函数                               | (nodeData: object, nodeState: object) => vnode        |         |
| expandedKeys                     | 展开的节点的 key 的数组                             | `string[]`/`number[]`                                 | []      |
| autoExpandParent                 | 展开子节点的时候是否自动展开父节点                          | boolean                                               | true    |
| accordion                        | 是否每次只展开一个同级树节点                             | boolean                                               | false   |
| lazy                             | 是否懒加载子节点，需与`loadDataFn`方法结合使用              | boolean                                               | false   |
| loadDataFn                       | 异步加载节点数据函数                                 | (nodeData: object, nodeState: object) => Promise<any> |         |
| filterMethod                     | 节点过滤函数                                     | (nodeData: object, filterText: string) => boolean     |         |
| filterText                       | 节点过滤文本，该文本将会传递给`filterMethod`函数使用          | `string`/`number`                                     |         |
| pageSize                         | 子节点分页显示数量，值为0表示不使用分页，在有大量数据的情况下可以使用此功能     | number                                                | 0       |
| loadMoreChildButtonText          | 分页“显示更多”按钮文案                               | string                                                | ...显示更多 |
| loadAllChildButtonText           | 分页“显示全部”按钮文案                               | string                                                | 显示全部    |
| loading                          | 是否正在加载树数据                                  | boolean                                               | false   |
| loadingText                      | 加载数据时显示的文案                                 | string                                                | 加载中...  |

#### TreeNode 属性

| 参数                               | 说明                  | 类型         | 默认值 |
|----------------------------------|---------------------|------------|---|
| label(可随props.label改变)           | 节点标签    | string     |   |
| children(可随props.children改变)     | 节点的子节点   | TreeNode[] | [] |
| disabled(可随props.disabled改变)     | 节点是否禁用    | boolean    |   |
| isLeaf(可随props.isLeaf改变)         | 节点是否禁用 | boolean     |   |

#### props 属性

| 参数       | 说明                  | 类型     | 默认值   |
|----------|---------------------|--------|-------|
| label    | 节点标签属性在节点对象中的key    | string | label |
| children | 节点的子节点属性在节点对象中的key    | string | children  |
| disabled | 节点是否禁用属性在节点对象中的key    | string |    disabled   |
| isLeaf   | 节点是否为叶子节点属性在节点对象中的key | string |    isLeaf   |

### Tree 事件

| 事件名称          | 说明           | 回调参数                                                             |
|---------------|--------------|------------------------------------------------------------------|
| node-expand   | 节点展开/收起时触发   | function(nodeData: TreeNode, expanded: boolean, nodeState: any)  |
| check-change  | 节点选中/取消选中时触发 | function(nodeData: TreeNode, isChecked: boolean) |
| node-click    | 节点点击时触发      | function(nodeData: TreeNode, nodeState: any) |
| node-destroy  | 节点销毁时触发      | function(nodeData: TreeNode) |


### Tree 插槽

| 插槽名称          | 说明        | 版本  |
|---------------|-----------|-----|
| loading       | 树数据加载中的提示 |     |
| empty         | 树没有数据的提示  |     |
| switcher-icon | 自定义图标     |     |
| default       | 节点标题      |     |



### Tree 函数

| 函数名称                     | 说明                         | 参数                                                                               |
|--------------------------|----------------------------|----------------------------------------------------------------------------------|
| getParentNodeByNodeValue | 根据节点的值获取父节点                | `(nodeValue: string) => Record<string, any>｜null`                                |
| getCheckedNodes | 获取选中的节点                    | `() => Record<string, any>[]`                                                    |
| getCheckedKeys | 获取选中的节点的key                | `() => string[]`                                                                 |
| getHalfCheckedNodes | 获取半选中的节点                   | `() => Record<string, any>[]`                                                    |
| getHalfCheckedKeys | 获取选中的节点的key                | `() => Record<string, any>[]`                                                    |
| getCheckedNodes | 获取选中的节点                    | `Record<string, any>[]`                                                          |
| getCheckedNodes | 获取选中的节点                    | `Record<string, any>[]`                                                          |
| selectAll                | 选中当前表格中的所有节点（disabled的除外）   |                                                                                  |
| selectNone               | 取消选中当前表格中的所有节点（disabled的除外） |                                                                                  |
| addCheckedItem                | 选中指定节点                     | `(rowKey: string, rowData?: Record<string, any>, forceSelect?: boolean) => void` |
| removeCheckedItem              | 取消选中指定节点                    | `(rowKey: string, rowData?: Record<string, any>, forceSelect?: boolean) => void` |

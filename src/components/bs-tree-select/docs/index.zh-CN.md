---
category: Components
type: 数据录入
typeCode: data_input
title: TreeSelect
subtitle: 树形选择器
---

树型选择控件，类似`Select`的选择控件，可选择的数据结构是一个树形结构时，可以使用`TreeSelect`

## API

### TreeSelect 属性

| 参数                                | 说明                                           | 类型                                                                                       | 默认值      |
|-----------------------------------|----------------------------------------------|------------------------------------------------------------------------------------------|----------|
| modelValue(v-model:modelValue)    | 选中的节点的key数组（受控）                              | `stirng`/`string[]`/`number[]`                                                           | []       |
| treeData                          | 树数据                                          | 同`tree`组件                                                                                | {}       |
| nodeKey                           | 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的（比填）               | string                                                                                   |          |
| checkStrictly                     | 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false       | boolean                                                                                  | false    |
| checkOnClickNode                  | 是否在点击节点的时候选中节点，默认值为 false。（即只有在点击复选框时才会选中节点） | boolean                                                                                  | false    |
| checkboxVisible                   | 是否显示复选框                                      | boolean                                                                                  | false    |
| multiple                          | 是否支持多选                                       | boolean                                                                                  | false    |
| multipleLimit                     | 可被选择的最大数量                                    | number                                                                                   |          |
| clearable                         | 是否可以清空内容                                     | boolean                                                                                  | false    |
| lazy                              | 是否懒加载子节点，需与`loadDataFn`方法结合使用                | boolean                                                                                  | false    |
| labels                              | 输入框中选中项的显示名称，当`lazy=true`时必填                 | {label: string; value: string; tagType?: string; tagClass?: string; tagEffect?: string;} | []       |
| radioVisible                      | 是否显示单选框                                      | boolean                                                                                  | false    |
| filterable                        | 是否可以搜索                                       | boolean                                                                                  | false    |
| filterMethod                      | 节点过滤函数                                       | (nodeData: object, filterText: string) => boolean                                        |          |
| loading                           | 是否正在加载树数据                                    | boolean                                                                                  | false    |
| loadingText                       | 加载数据时显示的文案                                   | string                                                                                   | 加载中...   |
| deliveContextToFormItem           | 是否向`form-item`组件传递上下文信息，默认为 true             | boolean                                                                                  | true     |
| size                              | 树形选择器大小。可选 `lg`、`sm`                         | string                                                                                   | ``       |
| placeholder                       | 输入框的placeholder属性                            | string                                                                                   |          |  |
| name                              | 输入框的name属性                                   | string                                                                                   |          |  |
| ariaLabel                         | 输入框的ariaLabel属性                              | string                                                                                   |          |  |
| id                                | 输入框的 id                                      | string                                                                                   |          |
| treeProps                         | tree组件的其他属性                                  | `tree`组件的所有属性                                                                            | {}       |
| defaultExpandCheckedNodesParent   | 默认是否展开选中节点的父级                                | boolean                                                                                  | true     |
| emptyText   | 无数据时的文案                                      | string                                                                                   | 暂无数据     |
| loadingColorType   | 加载图标的颜色的类型                                   | `primary`/ `secondary`/ `success`/ `danger`/ `warning`/ `info`/ `light`/ `dark`          |          |
| tagType   | 标签组件的type                                    | `primary`/ `secondary`/ `success`/ `danger`/ `warning`/ `info`/ `light`/ `dark`          | secondary |
| tagEffect   | tag主题                                        | `dark`/`light`/`plain`                                                                   | light    |
| tagCloseable   | tag是否可关闭                                     | boolean                                                                                  | true     |
| maxTagCount   | 最多显示几个tag，小于等于0无效                            | number                                                                                   | 0        |
| dropdownClass   | 下拉内容的额外classname                             | `string`/`array`/`object`                                                                |          |

### TreeSelect 事件

| 事件名称         | 说明               | 回调参数                                                         |
|--------------|------------------|--------------------------------------------------------------|
| change       | modelValue值变化时触发 | function(value: stirng丨string[])   |
| node-expand  | 节点展开/收起时触发       | function(nodeData: TreeNode, expanded: boolean, nodeState: any) |
| check-change | 节点选中/取消选中时触发     | function(nodeData: TreeNode, isChecked: boolean)             |
| node-click   | 节点点击时触发          | function(nodeData: TreeNode, nodeState: any)                 |
| node-destroy | 节点销毁时触发          | function(nodeData: TreeNode)                                 |
| show         | 下拉内容显示时触发        |                                |
| hide         | 下拉内容隐藏时触发        |                                |

### TreeSelect 插槽

| 插槽名称    | 说明                                   | 版本  |
|---------|--------------------------------------|-----|
| tag     | 多选时，tag的内容                           |     |
| suffixIcon     | 向下箭头图标                               |     |
| maxTagPlaceholder     | 多选时，tag最大显示数量超过后折叠的内容                |     |


### TreeSelect 函数

| 函数名称       | 说明         | 参数                                           |
|------------|------------|----------------------------------------------|
| setValidateStatus     | 设置选择器的校验状态 | `status`，可选值有：`validating`/`success`/`error` |
| dropdownShow     | 显示选择器下拉菜单  |                                              |
| dropdownHide     | 隐藏选择器下拉菜单  |                                              |
| refreshDropdown     | 刷新下拉菜单位置   |                                              |

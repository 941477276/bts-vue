---
category: Components
type: 数据录入
typeCode: data_input
title: Select
subtitle: 选择器
---

下拉选择器，当选项过多时，使用下拉菜单展示并选择内容

## API

### Select 属性

| 参数                      | 说明                                                                | 类型                                                                             | 默认值       |
|-------------------------|-------------------------------------------------------------------|--------------------------------------------------------------------------------|-----------|
| modelValue(v-model)     | 选择器的值                                                             | `string`/`number`/`boolean`/`array`                                            |           |
| checked                 | 是否选中状态                                                            | boolean                                                                        | false     |
| disabled                | 是否禁用状态                                                            | boolean                                                                        | false     |
| deliveContextToFormItem | 是否向`form-item`组件传递上下文信息，默认为 true                                  | boolean                                                                        | true      |
| size                    | 输入框大小。可选 `lg`、`sm`                                                | string                                                                         |        |
| label                   | radio显示名称                                                         | string                                                                         |           |     |
| name                    | 输入框的name属性                                                        | string                                                                         |           |     |
| ariaLabel               | 输入框的ariaLabel属性                                                   | string                                                                         |           |     |
| id                      | 单选框的 id                                                           | string                                                                         |           |
| placeholder             | 选择器的placeholder                                                   | string                                                                         |           |
| clearable               | 是否可以清空内容                                                          | boolean                                                                        | false     |
| options                 | 下拉选项数据，如果传递了则不需要手动构造 selectOption 节点                              | array<{value, label, [disabled, title, disabled, tagType, tagClass, options]}> |           |
| teleported              | 是否使用 teleport，如果该值为`true`，选择器的下拉内容dom节点将会传送到`appendTo`中           | boolean                                                                        | false     |
| appendTo                | 下拉菜单dom节点的父级元素                                                    | string                                                                         | body      |
| multiple                | 是否支持多选                                                            | boolean                                                                        | false     |
| multipleLimit           | 多选时，可被选择的最大数量                                                     | number                                                                         |           |
| maxTagCount             | 多选时，最多显示几个tag，值小于等于0无效                                            | number                                                                         | 0         |
| tagType                 | 多选时，`tag`标签的颜色类型                                                  |    `primary`/ `secondary`/ `success`/ `danger`/ `warning`/ `info`/ `light`/ `dark`         | secondary |
| tagEffect                | 多选时，`tag`标签的主题                                                    | string                                                                         | light     |
| tagCloseable             | 多选时，`tag`是否可关闭                                                    | boolean                                                                        | true      |
| loading                 | 是否正在加载数据                                                          | boolean                                                                        | false     |
| loadingText             | 正在加载数据时的提示文字                                                      | string                                                                         | 加载中...    |
| loadingColorType        | 加载图标的颜色的类型                                                        | `primary`/ `secondary`/ `success`/ `danger`/ `warning`/ `info`/ `light`/ `dark`     | 加载中...    |
| emptyText               | 下拉列表为空时显示的文字，也可以使用slot="empty"设置                                  | string                                                                         | 无数据       |
| filterable              | 是否可以搜索                                                            | boolean                                                                        | false     |
| filterMethod            | 自定义搜索函数，符合筛选条件时，应返回`true`，反之则返回`false`。默认从`option`的`label`属性中进行搜索 | function(text: string, option: option)                                         |           |
| dropdownClass            | 下拉菜单的额外class                                                      | string                                                                         |           |


### Select 事件

| 事件名称   | 说明                  | 回调参数                                 |
|--------|---------------------|--------------------------------------|
| change | 选择器值变化时的回调          | function(value: any)                 | 
| selectLimit | 多选时，选中项超出可选择的最大值时触发 | function(multipleLimit: number)      |
| visibleChange | 选择器下拉菜单显示或隐藏时触发     | function(isVisible: boolean, el: HTMLElement) |

### Select 插槽

| 插槽名称    | 说明                                   |
|---------|--------------------------------------|
| option  | `bs-option`组件的内容，仅当设置了`options`属性时有效 |
| empty   | 下拉列表为空时显示的内容                         |
| loading | 加载状态显示的内容                            |
| extra   | 扩展内容                                 |
| tag     | 多选时，tag的内容                           |
| suffixIcon     | 向下箭头图标                               |
| maxTagPlaceholder     | 多选时，tag最大显示数量超过后折叠的内容                |


### Select 函数

| 函数名称       | 说明         | 参数                                           |
|------------|------------|----------------------------------------------|
| setValidateStatus     | 设置选择器的校验状态 | `status`，可选值有：`validating`/`success`/`error` |
| dropdownShow     | 显示选择器下拉菜单  |                                              | 
| dropdownHide     | 隐藏选择器下拉菜单  |                                              |


### Option 属性

| 参数           | 说明               | 类型                                                                             | 默认值       |
|--------------|------------------|--------------------------------------------------------------------------------|-----------|
| value        | 下拉选项的值           | `string`/`number`/`boolean`                                            |           |
| disabled     | 是否禁用状态           | boolean                                                                        | false     |
| label        | 下拉选项显示名称        | string                                                                         |           |     |
| tagType      | 多选时，`tag`标签的颜色类型 |    `primary`/ `secondary`/ `success`/ `danger`/ `warning`/ `info`/ `light`/ `dark`         | secondary |
| tagClass     | 标签的classname     | string                                                                         |

### OptionGroup 属性

| 参数           | 说明     | 类型          | 默认值       |
|--------------|--------|-------------|-----------|
| disabled     | 是否禁用状态 | boolean     | false     |
| label        | 分组名称   | string      |           |     |

### OptionGroup 插槽

| 插槽名称    | 说明   | 版本  |
|---------|------|-----|
| label  | 分组名称 |     |

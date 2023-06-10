---
category: Components
type: 数据录入
typeCode: data_input
title: Cascader
subtitle: 极联选择
---

当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。

## API

### Cascader 属性

| 参数                             | 说明                                                                | 类型                                                                              | 默认值       |
|--------------------------------|-------------------------------------------------------------------|---------------------------------------------------------------------------------|-----------|
| modelValue(v-model)            | 极联选择器的值                                                           | `string`/`number`/`array`                                                       |           |
| expandTrigger                             | 次级菜单的展开方式                                                         | `click`/`hover`                                                                 | hover     |
| options                             | 极联选择器下拉选项数据                                                       | `[CascaderOption\[\]](#CascaderOption)`                                                       | []        |
| id                             | 极联选择器的 id                                                         | string                                                                          |           |
| disabled                       | 是否禁用状态，默认为 false                                                  | boolean                                                                         | false     |
| checkStrictly              | 是否严格的遵守父子节点不互相关联                                                  | boolean                                                                         | false     |
| teleported              | 是否使用 teleport，如果该值为`true`，选择器的下拉内容dom节点将会传送到`appendTo`中           | boolean                                                                         | false     |
| appendTo                | 下拉菜单dom节点的父级元素                                                    | string                                                                          | body      |
| clearable                      | 是否可以清空内容，默认为 false                                                | boolean                                                                         | false     |
| deliveContextToFormItem        | 是否向`form-item`组件传递上下文信息，默认为 true                                  | boolean                                                                         | true      |
| size                           | 输入框大小。可选 `lg`、`sm`                                                | string                                                                          | ``        | 
| placeholder                    | 输入框的placeholder属性                                                 | string                                                                          |           |     |
| name                           | 输入框的name属性                                                        | string                                                                          |           |     |
| ariaLabel                      | 输入框的ariaLabel属性                                                   | string                                                                          |           |     |
| showAllLevels                | 输入框中是否显示选中值的完整路径                                                  | boolean                                                                         | true      |     |
| emitPath                | 在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值              | boolean                                                                         | true      | 
| multiple                | 是否支持多选                                                            | boolean                                                                         | false     |
| multipleLimit           | 多选时，可被选择的最大数量                                                     | number                                                                          |           |
| maxTagCount             | 多选时，最多显示几个tag，值小于等于0无效                                            | number                                                                          | 0         |
| tagType                 | 多选时，`tag`标签的颜色类型                                                  | `primary`/ `secondary`/ `success`/ `danger`/ `warning`/ `info`/ `light`/ `dark` | secondary |     |
| tagEffect                | 多选时，`tag`标签的主题                                                    | `dark`/`light`/`plain`                                                                          | light     | 
| tagCloseable             | 多选时，`tag`是否可关闭                                                    | boolean                                                                         | true      | 
| loading                 | 是否正在加载数据                                                          | boolean                                                                         | false     |
| loadingText             | 正在加载数据时的提示文字                                                      | string                                                                          | 加载中...    | 
| loadingColorType        | 加载图标的颜色的类型                                                        | `primary`/ `secondary`/ `success`/ `danger`/ `warning`/ `info`/ `light`/ `dark` | 加载中...    |
| emptyText               | 下拉列表为空时显示的文字，也可以使用slot="empty"设置                                  | string                                                                          | 无数据       | 
| filterable              | 是否可以搜索                                                            | boolean                                                                         | false     |
| filterMethod            | 自定义搜索函数，符合筛选条件时，应返回`true`，反之则返回`false`。默认从`option`的`label`属性中进行搜索 | function(text: string, option: option)                                          |           |
| displayRender            | 选择后展示在输入框或tag中的渲染函数                                               | (checkedOptionsPathList: object[]) => string                                    |           |
| dropdownClass            | 下拉菜单的额外class                                                      | string                                                                          |           | 
| lazy            | 是否动态加载子节点，需与 lazyLoad 方法结合使用                                      | boolean                                                                         | false     |
| lazyLoadFn            | 懒加载动态数据的方法，仅在`lazy=true`时有效，数据加载完成后需调用`loadCallback`回调函数以告知数据加载完毕 | (optionItem: any, loadCallback: (loadSuccess: boolean) => void) => any          |           |
| setDropdownWidth            | 是否设置下拉菜单的宽度为参照元素的宽度                                               | boolean                                                                         | false     |
| setDropdownMinWidth            | 是否设置下拉菜单的最小宽度为参照元素的宽度                                             | boolean                                                                         | false     |
| checkboxName            | 复选框的name属性                                                        | string                                                                          |           |
| radioName            | 单选框的name属性                                                        | string                                                                          |           |

#### CascaderOption
```ts
interface CascaderOption {
  label: string;
  value: string|number;
  disabled?: boolean;
  children?: CascaderOption[];
  leaf?: boolean; // 是否为叶子节点，`lazy=true`时有效
  tagType?: `primary`|`secondary`|`success`|`danger`|`warning`|`info`|`light`|`dark`;
  tagEffect?: `dark`|`light`|`plain`;
  tagClass?: string;
}
```

### Cascader 事件

| 事件名称   | 说明           | 回调参数                                           |
|--------|--------------|------------------------------------------------|
| select | 选项选中或取消选中时触发 | function(optionItem: any, isSelected: boolean) |

### Cascader 插槽

| 插槽名称    | 说明                | 版本  |
|---------|-------------------|-----|
| default | 触发下拉菜单的元素         |     |
| empty   | 自定义options无内容时的内容 |     |
| loading | 自定义加载数据时的内容       |     |
| label   | 自定义选项label        |     |
| tag     | 自定义tag的内容         |     |
| maxTagPlaceholder     | 折叠标签自定义内容（当显示的标签数量超过限制时），参数为：`{ omittedCount: number }` |     |


### Cascader 函数

| 函数名称       | 说明     | 参数  |
|------------|--------|-----|
| dropdownShow     | 显示下拉菜单 |     |
| dropdownHide     | 隐藏下拉菜单 |     |

---
category: Components
type: 数据录入
typeCode: data_input
title: InputTags
subtitle: 标签输入框
---

通常用来给事物定义属性或打标签

## API

### InputTags 属性

| 参数                        | 说明                                                                                                            | 类型                                                                               | 默认值       |
|---------------------------|---------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|-----------|
| modelValue(v-model)       | 输入框内容                                                                                                         | { label: string; value: string｜number｜boolean; tagType?: string; tagClass?: string; disabled?: boolean; } |     []   |
| id                        | 输入框的 id                                                                                                       | string                                                                           |           |
| disabled                  | 是否禁用状态，默认为 false                                                                                              | boolean                                                                          | false     |
| readonly                  | 是否只读，默认为 false                                                                                                | boolean                                                                          | false     |
| clearable                 | 是否可以清空内容，默认为 false                                                                                            | boolean                                                                          | false     |
| deliveContextToFormItem   | 是否向`form-item`组件传递上下文信息，默认为 true                                                                              | boolean                                                                          | true      |
| size                      | 输入框大小。可选 `lg`、`sm`                                                                                            | string                                                                           |           |
| inputType                 | 声明 input 类型，同原生 input 标签的 type 属性，见：[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#属性) | string                                                                           | `text`    |
| maxTagCount               | 界面上最多显示几个tag，小于等于0无效（多余打标签会被折叠起来）                                                                             | number                                                                           | 0         | 
| tagLimit                  | 最多允许添加的tag个数，小于等于0无效                                                                                                  | number                                                                           | 0         |
| placeholder               | 输入框的placeholder属性                                                                                             | string                                                                           | 输入内容，按回车键确认 |
| name                      | 输入框的name属性                                                                                                    | string                                                                           |           | 
| ariaLabel                 | 输入框的ariaLabel属性                                                                                               | string                                                                           |           |
| tagType                   | 标签组件的type                                | `primary`/ `secondary`/ `success`/ `danger`/ `warning`/ `info`/ `light`/ `dark` / | secondary |     |
| tagCloseable              | 标签是否可关闭                                                                                            | boolean                                                                          | true      |     |
| tagEffect                 | tag主题                                                                                                          | `dark`/`light`/`plain`                                                           | light     |
| showAddButton             | 是否显示添加按钮                                                                                                          | boolean                                                                          | true      |
| minWidth                  | 输入框最小宽度                                                                                               | number                                                                           | 100       | 

### InputTags 事件

| 事件名称   | 说明          | 回调参数                        |
|--------|-------------|-----------------------------|
| tag-close | 标签关闭时触发     | function(valueItem: object) | 
| limited  | 标签数量超过限制时触发 |               |

### InputTags 插槽

| 插槽名称       | 说明                                                      | 版本  |
|------------|---------------------------------------------------------|-----|
| tag        | 标签自定义内容                                                 |     |
| maxTagPlaceholder     | 折叠标签自定义内容（当显示的标签数量超过限制时），参数为：`{ omittedCount: number }` |     |

### InputTags 函数

| 函数名称       | 说明                                               | 参数                                         |
|------------|--------------------------------------------------|--------------------------------------------|
| setValidateStatus     | 设置输入框的校验状态，参数可选值有：`validating`、`success`、`error` | 

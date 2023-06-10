---
category: Components
type: 数据录入
typeCode: data_input
title: InputNumber
subtitle: 数字输入框
---

通过鼠标或键盘，输入范围内的数值

## API

### InputNumber 属性

| 参数                      | 说明                                       | 类型                               | 默认值 |
|-------------------------|------------------------------------------|----------------------------------|---|
| modelValue(v-model)     | 数字输入框内容                                  | `string`/`number`                |   |
| id                      | 输入框的 id                                  | string                           |   |
| disabled                | 是否禁用状态，默认为 false                         | boolean                          | false |
| readonly                | 是否只读，默认为 false                           | boolean                          | false |
| deliveContextToFormItem | 是否向`form-item`组件传递上下文信息，默认为 true         | boolean                          | true |
| size                    | 输入框大小。可选 `lg`、`sm`                       | string                           |   |
| type                    | 输入框类型                                    | `text`/`number`                  | text |
| inputmode               | 输入框原生的inputmode属性                        | string                           |   |
| inputStyle              | input输入框的样式                              | object                           | {} |
| placeholder             | 输入框的placeholder属性                        | string                           |   |
| name                    | 输入框的name属性                               | string                           |   |
| ariaLabel               | 输入框的ariaLabel属性                          | string                           |   |
| keyboard                | 是否可以通过键盘改变值                              | boolean                          | true |
| step                    | 步长，每次改变的步数，可以为小数                         | number                           | 1 |
| min                     | 最小值                                      | number                           |   |
| max                     | 最大值                                      | number                           |   | 
| prefix                  | 前缀文本                                     | string                           |   |
| formatter               | 指定输入框展示值的格式                              | (value: number｜string) => string |   |
| parser                  | 指定从 formatter 里转换回数字的方式，和 formatter 配合使用 | (value: string) => number        |   |
| precision               | 数值精度                                     | number                           |   |
| controlInner            | 控制按钮是否在输入框内部                             | boolean                          | true |

### InputNumber 事件

| 事件名称   | 说明          | 回调参数                 |
|--------|-------------|----------------------|
| change | 输入框内容变化时的回调 | function(value: any) |

### InputNumber 插槽

| 插槽名称    | 说明                                               | 版本  |
|---------|--------------------------------------------------|-----|
| prepend | 输入框内容前置内容                                        |     |
| append  | 输入框内容后置内容                                        |     |

### InputNumber 函数

| 函数名称       | 说明                         | 参数                                         |
|------------|----------------------------|--------------------------------------------|
| setValidateStatus     | 设置输入框的校验状态 | `status`，可选值有：`validating`、`success`、`error` |

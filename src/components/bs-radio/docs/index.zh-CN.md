---
category: Components
type: 数据录入
typeCode: data_input
title: Radio
subtitle: 单选框
---

单选框

## API

### Radio 属性

| 参数                      | 说明                               | 类型                          | 默认值   |
|-------------------------|----------------------------------|-----------------------------|-------|
| modelValue(v-model)     | 单选框的值                            | `string`/`number`/`boolean` |       |
| disabled                | 是否禁用状态，默认为 false                 | boolean                     | false |
| deliveContextToFormItem | 是否向`form-item`组件传递上下文信息，默认为 true | boolean                     | true  |
| label                   | radio显示名称                        | string                      |       |     |
| name                    | 输入框的name属性                       | string                      |       |     |
| ariaLabel               | 输入框的ariaLabel属性                  | string                      |       |     |
| id                      | 单选框的 id                          | string                      |       |

### Radio 事件

| 事件名称   | 说明         | 回调参数                           |
|--------|------------|--------------------------------|
| change | 单选框值变化时的回调 | function(e: Event, value: any) |

### Radio 函数

| 函数名称       | 说明          | 参数                                           |
|------------|-------------|----------------------------------------------|
| setValidateStatus     | 设置单选框的校验状态  | `status`，可选值有：`validating`/`success`/`error` |

### RadioGroup 属性

| 参数                      | 说明               | 类型                          | 默认值   |
|-------------------------|------------------|-----------------------------|-------|
| modelValue(v-model)     | 单选框的值            | `string`/`number`/`boolean` |       |
| disabled                | 是否禁用状态，默认为 false | boolean                     | false |
| elTag | 单选框组渲染元素的标签名称    | string                      | div   |

### RadioGroup 事件

| 事件名称   | 说明         | 回调参数                           |
|--------|------------|--------------------------------|
| change | 单选框值变化时的回调 | function(value: any) |

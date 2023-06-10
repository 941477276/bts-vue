---
category: Components
type: 数据录入
typeCode: data_input
title: Checkbox
subtitle: 多选框
---

多选框

## API

### Checkbox 属性

| 参数                      | 说明                               | 类型                                  | 默认值   |
|-------------------------|----------------------------------|-------------------------------------|-------|
| modelValue(v-model)     | 单选框的值                            | `string`/`number`/`boolean`/`array` |       |   
| checked                 | 是否选中状态                           | boolean                             | false |   
| disabled                | 是否禁用状态                           | boolean                             | false |   
| indeterminate           | 是否不确定状态                          | boolean                             | false |   
| deliveContextToFormItem | 是否向`form-item`组件传递上下文信息，默认为 true | boolean                             | true  |   
| trueValue               | 选中时的值                            | `string`/`number`                    |       |     |
| falseValue              | 未选中时的值                           | `string`/`number`                    |       |     |
| label                   | radio显示名称                        | string                              |       |     |
| name                    | 输入框的name属性                       | string                              |       |     |
| ariaLabel               | 输入框的ariaLabel属性                  | string                              |       |     |
| id                      | 单选框的 id                          | string                              |       |   

### Checkbox 事件

| 事件名称   | 说明         | 回调参数                           | 
|--------|------------|--------------------------------|
| change | 多选框值变化时的回调 | function(e: Event, value: any) |

### Checkbox 函数

| 函数名称       | 说明         | 参数                                           |
|------------|------------|----------------------------------------------|
| setValidateStatus     | 设置多选框的校验状态 | `status`，可选值有：`validating`/`success`/`error` |

### CheckboxGroup 属性

| 参数                  | 说明                                | 类型               | 默认值   |
|---------------------|-----------------------------------|------------------|-------|
| modelValue(v-model) | 多选框的值，当值为`string`类型时会自动将值按逗号分割成数组 | `string`/`array` |       |
| disabled            | 是否禁用状态，默认为 false                  | boolean          | false |
| elTag               | 单选框组渲染元素的标签名称                     | string           | div   |
| min                 | 可被勾选的 checkbox 的最小数量              | number           |    |
| max                 | 可被勾选的 checkbox 的最大数量              | number           |    |

### CheckboxGroup 事件

| 事件名称   | 说明         | 回调参数                           |
|--------|------------|--------------------------------|
| change | 多选框值变化时的回调 | function(value: [any]) |

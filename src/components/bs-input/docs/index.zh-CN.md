---
category: Components
type: 数据录入
typeCode: data_input
title: Input
subtitle: 输入框
---

通过鼠标或键盘输入内容

## API

### Input 属性

| 参数                              | 说明                                                                                                                                                 | 类型           | 默认值    |
|---------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|--------------|--------|
| modelValue(v-model)             | 输入框内容                                                                                                                                              | string       |        |
| id                              | 输入框的 id                                                                                                                                            | string       |        |
| disabled                        | 是否禁用状态，默认为 false                                                                                                                                   | boolean      | false  |
| readonly                        | 是否只读，默认为 false                                                                                                                                     | boolean      | false  |
| showPassword                    | 是否显示切换密码图标，默认为 false                                                                                                                               | boolean      | false  |
| clearable                       | 是否可以清空内容，默认为 false                                                                                                                                 | boolean      | false  |
| deliveContextToFormItem         | 是否向`form-item`组件传递上下文信息，默认为 true                                                                                                                   | boolean      | true   |
| size                            | 输入框大小。可选 `lg`、`sm`                                                                                                                                 | string       |        |
| type                            | 声明 input 类型，同原生 input 标签的 type 属性，见：[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#属性)(请直接使用 `<a-textarea />` 代替 `type="textarea"`)。 | string       | `text` |
| inputmode                       | 输入框原生的inputmode属性                                                                                                                                  | string       |        |
| inputStyle                      | input输入框的样式                                                                                                                                        | object       | `{}`   |
| placeholder                     | 输入框的placeholder属性                                                                                                                                  | string       |        |
| name                            | 输入框的name属性                                                                                                                                         | string       |        |
| ariaLabel                       | 输入框的ariaLabel属性                                                                                                                                    | string       |        |
| compositionDisable              | 是否不对input当composition事件进行拦截，当值为true时在输入中文、日文等其他非英文时modelValue的值将会在input事件中实时更新                                                       | boolean      | false  | 
| nativeAttrs                     | 需要添加到input元素上的其他属性                                                                                                                                 | object       | `{}`   |
| minlength                       | 最小长度                                                                                                                                               | number       |        |
| maxlength                       | 最大长度                                                                                                                                               | number       |        |
| prefix                          | 带有前缀图标的 input                                                                                                                                      | `string`/`slot` |        |
| showCount                       | 是否显示字数                                                                                                                                             | boolean      | false  |
| autoHeight                      | 是否自动计算高度，仅在`type=textarea`时有效                                                                                                                | boolean      | false  |
| minHeight                       | 最小高度，值若小于等于0则无效，仅在`type=textarea`时有效                                                                                                        | number       | 0      |
| textareaEmptyHeightIsMinHeight  | textarea值为空时的高度是否为minHeight，仅在`type=textarea`时有效                                                                                               | boolean      | true   |

### Input 事件

| 事件名称   | 说明          | 回调参数    |
|--------|-------------| ----------- |
| change | 输入框内容变化时的回调 | function(e) |
| clear  | 输入内容清空时到回调  | function() | 

### Input 插槽

| 插槽名称    | 说明                                               | 版本  |
|---------|--------------------------------------------------|-----|
| prefix  | 输入框头部内容                                          |     |
| suffix  | 输入框尾部内容                                          |     |
| prepend | 输入框内容前置内容                                        |     |
| append  | 输入框内容后置内容                                        |     |
| text-count  | 输入框字数插槽，参数为: `{count: number, maxCount: number}` |     |

### Input 函数

| 函数名称       | 说明                         | 参数                                         |
|------------|----------------------------|--------------------------------------------|
| setValidateStatus     | 设置输入框的校验状态，在封装自定义组件校验时非常有用 | `status`，可选值有：`validating`、`success`、`error` |

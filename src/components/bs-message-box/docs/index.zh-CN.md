---
category: Components
type: 反馈
typeCode: feedback
title: MessageBox
subtitle: 消息弹框
---

模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容

## API

组件提供了一些静态方法，使用方式和参数如下：
+ BsMessageBox(options: MessageBoxOptions)
+ BsMessageBox.success(titleOrOptions: string|MessageBoxOptions, message?: string, context?: AppConfig)
+ BsMessageBox.danger(titleOrOptions: string|MessageBoxOptions, message?: string, context?: AppConfig)
+ BsMessageBox.warning(titleOrOptions: string|MessageBoxOptions, message?: string, context?: AppConfig)
+ BsMessageBox.info(titleOrOptions: string|MessageBoxOptions, message?: string, context?: AppConfig)
+ BsMessageBox.prompt(titleOrOptions: string|MessageBoxOptions, message?: string, context?: AppConfig)
> 以上函数的返回值为 messageBoxId

`MessageBoxOptions`对象属性如下

| 参数                       | 说明                                                    | 类型                                                                              | 默认值     |
|--------------------------|-------------------------------------------------------|---------------------------------------------------------------------------------|---------|
| type                     | 消息弹窗类型                                                | `success`/ `danger`/ `warning`/ `info`/`prompt`                                 | info    |
| id                       | 消息弹窗ID                                                | string                                                                          |         |
| title                    | 消息弹窗标题                                                | `stirng`/`vnode`/`() => vnode`                                                  |         |
| message                  | 消息弹窗文字                                                | `stirng`/`vnode`/`() => vnode`                                                  |         |
| icon                     | 图标                                                    | `vnode`/`() => vnode`                                                           |         |
| dangerouslyUseHTMLString | 是否将 message 属性作为 HTML 片段处理                            | boolean                                                                         | false   |
| customClass              | 自定义classname                                          | string                                                                          |         |
| showClose                | 是否显示关闭按钮                                              | boolean                                                                         | true    |
| showOkButton             | 是否显示确定按钮                                              | boolean                                                                         | true    |
| showCancelButton         | 是否显示取消按钮                                              | boolean                                                                         | true    |
| showIcon                 | 是否显示图标                                                | boolean                                                                         | true    |
| mask                     | 是否显示遮罩                                                | boolean                                                                         | true    |
| onOkAutoClose            | 点击确定按钮后是否字段关闭                                   | boolean                                                                         | true    |
| dialogTheme              | 是否显示为弹窗样式                                             | boolean                                                                         | false   |
| centered                 | 是否居中显示                                                | boolean                                                                         | false   |
| keyboard                 | 是否支持键盘 esc 关闭                                         | boolean                                                                         | true    |
| closeOnClickModal        | 点击遮罩是否关闭                                              | boolean                                                                         | true    |
| okLoading                | 确定按钮是否处于loading状态                                     | `boolean`/`Ref<boolean>`                                                        | false   |
| cannotCloseOnOkLoading   | 当确定按钮为loading状态时不允许关闭                                 | boolean                                                                         | true    |
| okDisabled               | 确定按钮是否为disabled状态                                     | `boolean`/`Ref<boolean>`                                                        | false   |
| okType                   | 确定按钮的类型                                               | `primary`/ `secondary`/ `success`/ `danger`/ `warning`/ `info`/ `light`/ `dark` | primary |
| okText                   | 确定按钮的文本                                               | string                                                                          | 确定      |
| okLoadingText            | 确定按钮loading状态下显示的文本                                   | string                                                                          |         |
| okLoadingText            | 确定按钮loading状态下显示的文本                                   | string                                                                          |         |
| okSize                   | 确认按钮大小。可选 `lg`、`sm`                                   | string                                                                          |         |
| cancelText               | 取消按钮的文本                                               | string                                                                          | 取消      |
| cancelSize               | 取消按钮的大小。可选 `lg`、`sm`                                  | string                                                                          |         |
| width                    | 宽度                                                    | string                                                                          |         |
| maxWidth                 | 最大宽度                                                  | string                                                                          |         |
| inputLabel               | 输入框的描述文本，仅在`type=prompt`有效                            | string                                                                          |         |
| inputType                | 输入框的类型，仅在`type=prompt`有效                              | string                                                                          |         |
| inputPlaceholder         | 输入框的placeholder占位符，仅在`type=prompt`有效                  | string                                                                          |         |
| inputValue               | 输入框的初始值，仅在`type=prompt`有效                             | `string`/`number`                                                               |         |
| inputRules               | 输入框的校验规则，与<bs-form-item>的校验规则一致，仅在`type=prompt`有效     | object[]                                                                        | []      |
| inputProps               | 输入框的其他属性，与<bs-form-item>的校验规则一致，仅在`type=prompt`有效     | object                                                                          | {}      |
| inputBefore              | 输入框的的前置内容，仅在`type=prompt`有效                           | `stirng`/`vnode`/`() => vnode`                                                                          |         |
| inputAfter               | 输入框的的后置内容，仅在`type=prompt`有效                           | `stirng`/`vnode`/`() => vnode`                                                                          |         |
| onOk                     | 点击确定回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭，返回false不会关闭 | function                                                                        |         |
| onCancel                 | 点击取消回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭，返回false不会关闭 | function         |         |
| onClose                  | 关闭时的回调函数, 参数为关闭函数，返回 promise 时 resolve 后自动关闭，返回false则不会关闭 | function         |         |


### MessageBox 其他全局方法

| 函数名称 | 说明                             | 参数            |
|------|--------------------------------|--------------------------|
| closeAllMessageBox | 关闭所有消息弹窗                       |                 |
| closeMessageBox | 关闭指定消息弹窗，参数messageBoxId为消息弹窗ID |

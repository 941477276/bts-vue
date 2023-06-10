---
category: Components
type: 反馈
typeCode: feedback
title: Message
subtitle: 消息提示
---

全局展示操作反馈信息，常用于主动操作后的反馈提示

## API

组件提供了一些静态方法，使用方式和参数如下：
+ BsMessage(messageOrConfig: string|MessageConfig, context?: AppConfig)
+ BsMessage.success(messageOrConfig: string|MessageConfig, context?: AppConfig)
+ BsMessage.danger(messageOrConfig: string|MessageConfig, context?: AppConfig)
+ BsMessage.warning(messageOrConfig: string|MessageConfig, context?: AppConfig)
+ BsMessage.info(messageOrConfig: string|MessageConfig, context?: AppConfig)
> 以上函数的返回值为 messageId

`MessageConfig`对象属性如下

| 参数                        | 说明                                                | 类型                                     | 默认值   |
|---------------------------|---------------------------------------------------|----------------------------------------|-------|
| type                      | 消息类型                                              | `success`/ `danger`/ `warning`/ `info` | info  |
| id                        | 消息ID                                              | string                                 |       |
| message                   | 消息文字                                              | `stirng`/`vnode`/`() => vnode`         |       |
| icon                      | 图标                                                | vnode                                  |       |
| dangerouslyUseHTMLString  | 是否将 message 属性作为 HTML 片段处理                        | boolean                                | false |
| duration                  | 显示时间，单位为毫秒。 设为 0 则不会自动关闭                          | number                                 | 3000  |
| customClass               | 自定义classname                                      | string                                 |       |
| showClose                 | 是否显示关闭按钮                                          | boolean                                | true  |
| showIcon                  | 是否显示图标                                            | boolean                                | true  |
| offsetTop                 | Message 距离窗口顶部的偏移量(单位：px)                         | number                                 | 20    |
| appendTo                  | 设置Message消息组件的根元素，默认为document.body                | `string`/`HTMLElement`                 | body  |
| grouping                  | 是否合并内容相同的消息，不支持 VNode 类型的消息（在显示ajax请求错误信息的时候特别适合） | boolean                   | false |
| onClose                   | 消息关闭前的回调函数                                        | (vm: VNode) => void                    | false |


### Message 其他全局方法

| 函数名称 | 说明                                           | 参数                                                           |
|------|----------------------------------------------|--------------------------------------------------------------|
| closeAllMessage | 关闭所有消息                                       |                                                              | 
| closeMessage | 关闭指定消息，参数messageId为消息ID，userOnClose为消息关闭前的回调 | (messageId: string, userOnClose?: (vm: VNode) => void): void |

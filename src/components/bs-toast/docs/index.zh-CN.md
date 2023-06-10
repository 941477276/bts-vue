---
category: Components
type: 反馈
typeCode: feedback
title: Toast
subtitle: 轻量通知
---

全局展示通知提醒信息

## API

组件提供了一些静态方法，使用方式和参数如下：
+ BsToast(options: ToastOption, context?: AppContext) => {id: string; show: () => void;; show: () => void;}
+ BsToast.primary(options: ToastOption, context?: AppContext) => {id: string; show: () => void;; show: () => void;}
+ BsToast.secondary(options: ToastOption, context?: AppContext) => {id: string; show: () => void;; show: () => void;}
+ BsToast.success(options: ToastOption, context?: AppContext) => {id: string; show: () => void;; show: () => void;}
+ BsToast.danger(options: ToastOption, context?: AppContext) => {id: string; show: () => void;; show: () => void;}
+ BsToast.warning(options: ToastOption, context?: AppContext) => {id: string; show: () => void;; show: () => void;}
+ BsToast.info(options: ToastOption, context?: AppContext) => {id: string; show: () => void;; show: () => void;}
+ BsToast.light(options: ToastOption, context?: AppContext) => {id: string; show: () => void;; show: () => void;}
+ BsToast.dark(options: ToastOption, context?: AppContext) => {id: string; show: () => void;; show: () => void;}

`options`对象属性如下

| 参数                       | 说明                                | 类型                                                                                | 默认值          |
|--------------------------|-----------------------------------|-----------------------------------------------------------------------------------|--------------|
| type                     | 主题类型                              | `primary`/ `secondary`/ `success`/ `danger`/ `warning`/ `info`/ `light`/ `dark` / |              |
| title                    | 标题                                | `string`/`vnode`/`() => vnode｜string `                                            |               |
| secondaryTitle           | 辅助标题                              | `string`/`vnode`/`() => vnode｜string`                                             |              |
| message                  | 内容                                | `string`/`vnode`/`() => vnode｜string`                                             |              |
| placement                | 显示位置                              | `top-left`/`top-right`/`top-center`/`bottom-left`/`bottom-right`/`bottom-center`  | top-right    |
| id                       | 消息ID                              | string                                                                            |              |
| style                    | 自定义样式                             | `string`/`object`                                                                 |              |
| fixed                    | 是否使用`fixed`定位                       | boolean                                                                           | true         |
| dangerouslyUseHTMLString | 是否将 message 属性作为 HTML 片段处理        | boolean                                                                           | false        |
| duration                 | 显示时间，单位为毫秒。 设为 0 则不会自动关闭          | number                                                                            | 3000         |
| customClass              | 自定义classname                      | `string`/`object`                                                                 |              |
| showClose                | 是否显示关闭按钮                          | boolean                                                                           | true         |
| offsetTop                | Toast 距离窗口顶部的偏移量(单位：px)           | number                                                                            | 20           |
| offsetLeft               | toast 距离窗口右侧的偏移量，如果为0则不设置(单位：px)  | number                                                                            |              |
| teleported               | 设置Message消息组件的根元素，默认为document.body | `string`/`HTMLElement`                                                            | body         |
| appendTo                 | 设置Message消息组件的根元素，默认为document.body | `string`/`HTMLElement`                                                            | body         |
| transitionName           | 过渡效果名称                            | stirng                                                                            | bs-toast-fade |
| onShow                   | 显示时的回调函数                          | (evt: Event) => void                                                              | false        |
| onHide                   | 关闭时的回调函数                          | (evt: Event) => void                                                              | false        |
| onClick                  | 点击时的回调函数                          | (evt: Event) => void                                                              | false        |

### Toast 事件

| 事件名称         | 说明           | 回调参数 |
|--------------|--------------|------|
| show         | 显示时的回调函数  |      |
| hide         | 关闭时的回调函数 |      |
| click        | 点击时的回调函数      |      |

### Toast 插槽

| 插槽名称           | 说明                      | 版本  |
|----------------|-------------------------|-----|
| header         | 自定义头部                   |     |
| title          | 自定义标题（传递了header插槽时无效）   |     |
| secondaryTitle | 自定义辅助标题（传递了header插槽时无效） |     |
| close          | 自定义关闭按钮                 |     |
| default        | 自定义message              |     |


### Toast 其他全局方法

| 函数名称         | 说明     | 参数             |
|--------------|--------|----------------|
| BsToast.show | 显示通知   | `toastId`，通知ID |
| BsToast.hide | 隐藏通知   | `toastId`，通知ID |
| BsToast.hideAll     | 隐藏所有通知 |                |

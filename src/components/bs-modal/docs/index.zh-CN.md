---
category: Components
type: 反馈
typeCode: feedback
title: Modal
subtitle: 模态弹窗
---

在保留当前页面状态的情况下，告知用户并承载相关操作

## API

### Modal 属性

| 参数                       | 说明                                                             | 类型                                    | 默认值  |
|--------------------------|----------------------------------------------------------------|---------------------------------------|------|
| visible(v-model:visible) | 用于控制弹窗显隐                                                       | boolean                               | false |
| teleported               | 是否使用 teleport。设置成 true则会被追加到 append-to 的位置                     | boolean                               | true |
| appendTo                 | Modal dom将附加到的节点                                               | `string`/`dom`                        | body |
| transitionName           | 过渡动画名称                                                         | string                                | fade |
| title                    | 标题                                                             | `string`/`() => stirng｜vnode`/`vnode` |      |
| width                    | 弹窗宽度                                                           | string                                |      |
| size                     | 弹窗大小                                                           | `xl`(超大)/`lg`(大的)/`sm`(小的)            |      |
| centered                 | 是否居中显示                                                         | boolean                               | false |
| mask                     | 是否显示遮罩                                                         | boolean                               | true |
| keyboard                 | 是否支持键盘 esc 关闭                                                  | boolean                               | true |
| maskClosable             | 点击遮罩是否关闭                                                       | boolean                               | true |
| lockScroll               | 是否锁定滚动条                                                        | boolean                               | true |
| fullscreen               | 是否全屏                                                           | boolean                               | false |
| draggable                | 是否可以拖拽移动                                                       | boolean                               | false |
| boundary                 | 拖拽时是否不能超出边界                                                    | boolean                               | true |
| scrollable               | 弹窗内容部分是否可滚动                                                    | boolean                               | false |
| showFooter               | 是否显示底部                                                         | boolean                               | true |
| showClose                | 是否显示关闭按钮                                                       | boolean                               | true |
| lazy                     | 首次渲染是否延迟                                                       | boolean                               | true |
| destroyOnClose           | 关闭弹窗时是否销毁弹窗的元素                                                 | boolean                               | false |
| confirmLoading           | 是否禁用关闭，若值为true，则任何方式都关闭不了，此功能可用于正在提交数据的场景    | boolean                               | false |
| okText                   | 确定按钮文案                                                         | string                                | 确定 |
| cancelText               | 取消按钮文案                                                         | string                                | 取消 |
| onOk                     | 确认按钮点击事件，如果事件函数执行后返回`Promise`，那么弹窗将在Promise的状态变为`fulfilled`后关闭 | () => any                             |      |

### Modal 事件

| 事件名称  | 说明       | 回调参数 |
|-------|----------|------|
| open  | 弹窗显示后的回调 |      | 
| close | 弹窗关闭后的回调  |      |

### Modal 插槽

| 插槽名称       | 说明       | 版本  |
|------------|----------|-----|
| header     | 标题插槽     |     |
| close      | 关闭按钮内容插槽 |     |
| footer     | 底部按钮插槽   |     |

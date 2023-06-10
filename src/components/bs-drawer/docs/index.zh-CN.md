---
category: Components
type: 反馈
typeCode: feedback
title: Drawer
subtitle: 抽屉
---

屏幕边缘滑出的浮层面板，有些时候, `Modal`组件并不满足我们的需求, 比如你的表单很长, 亦或是你需要临时展示一些文档, `Drawer`拥有和`Modal`几乎相同的 API, 在 UI 上带来不一样的体验.

## API

### Drawer 属性

| 参数                       | 说明                                         | 类型                                    | 默认值   |
|--------------------------|--------------------------------------------|---------------------------------------|-------|
| visible(v-model:visible) | 用于控制抽屉显隐                                   | boolean                               | false |
| teleported               | 是否使用 teleport。设置成 true则会被追加到 append-to 的位置 | boolean                               | true  |
| appendTo                 | Drawer dom将附加到的节点                          | `string`/`dom`                        | body  |
| transitionName           | 过渡动画名称                                     | string                                | slide |
| title                    | 标题                                         | `string`/`() => stirng｜vnode`/`vnode` |       |
| width                    | 弹窗宽度                                       | string                                |       |
| placement                | 抽屉显示的方向                                    | `left`/`top`/`bottom`/`right`         | right |
| centered                 | 是否居中显示                                     | boolean                               | false |
| mask                     | 是否显示遮罩                                     | boolean                               | true  |
| keyboard                 | 是否支持键盘 esc 关闭                              | boolean                               | true  |
| maskClosable             | 点击遮罩是否关闭                                   | boolean                               | true  |
| lockScroll               | 是否锁定滚动条                                    | boolean                               | true  |
| showHeader               | 是否显示头部                                     | boolean                               | true  |
| showFooter               | 是否显示底部                                     | boolean                               | true  |
| showClose                | 是否显示关闭按钮                                   | boolean                               | true  |
| lazy                     | 首次渲染是否延迟                                   | boolean                               | true  |
| destroyOnClose           | 关闭弹窗时是否销毁弹窗的元素                             | boolean                               | false |
| closeDisabled            | 是否禁用关闭，若值为true，则任何方式都关闭不了，此功能可用于正在提交数据的场景  | boolean                               | false |
| drawerClass            | 额外的classname                               | `string`/`object`/`array`             |       |

### Drawer 事件

| 事件名称  | 说明       | 回调参数 |
|-------|----------|------|
| open  | 抽屉显示后的回调 |      |
| close | 抽屉关闭后的回调 |      |

### Drawer 插槽

| 插槽名称       | 说明       | 版本  |
|------------|----------|-----|
| header     | 标题插槽     |     |
| close      | 关闭按钮内容插槽 |     |
| footer     | 底部插槽     |     |

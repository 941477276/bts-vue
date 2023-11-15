---
category: Components
type: 工具组件
typeCode: tool_component
title: DropdownTransition
subtitle: 下拉过渡
---

最基础的下拉组件，你可以用它实现任何带有下拉功能的组件

## API

### DropdownTransition 属性

| 参数                   | 说明                                                      | 类型                                                                                                                            | 默认值      |
|----------------------|---------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|----------|
| placement            | 下拉菜单弹出位置                                                | `left`/`top`/`bottom`/`right`/`leftCenter`/`leftEnd`/`topCenter`/`topEnd`/`bottomCenter`/`bottomEnd`/`rightCenter`/`rightEnd` | bottom   |
| referenceRef         | 参照元素(即触发下拉的元素)                                          | Ref<HtmlElement｜VueComponent  >                                                                                               |          |
| willVisible          | 下拉菜单是否即将显示，该值需在下拉菜单显示前`50ms`进行设置，这样组件才能更准确的计算下拉菜单真实显示位置 | boolean                                                                                                                       | false    |
| tryEndDirection      | 当在指定的`direction`位置下拉菜单不能完全显示时，是否尝试`direction`方向的`end`方向 | boolean                                                                                                                       | true     |
| tryAllDirection      | 当在指定的`direction`位置下拉菜单不能完全显示时，是否尝试所有方向显示                | boolean                                                                                                                       | true     |
| useZoomTransition    | 是否使用zoom过渡效果，如果值为`true`，那么不管下拉菜单显示在哪个位置，下拉菜单都以zoom效果进行过渡 | boolean                                                                                                                       | false    |
| position             | 下拉菜单定位方式                                                | string                                                                                                                        | absolute |
| setWidth             | 是否设置下拉菜单的宽度等于参照元素的宽度                                    | boolean                                                                                                                       | false    |
| setMinWidth          | 是否设置下拉菜单的最小宽度等于参照元素的宽度                                  | boolean                                                                                                                       | false    |
| offset               | 下拉菜单距参照元素的偏移量                                           | { top?: number; left?: number; }                                                                                              | false    |
| customTransitionName | 下拉菜单自定义transition name                                  | (direction) => string                                                                                                         |      |
| customStyle          | 自定义下拉菜单style                                            | (direction) => string                                                                                                         |      |
| contextMenu          | 是否为右键菜单                                                        | boolean                                                                                                                       | false    |
| virtualMouseEvent          | 虚拟鼠标事件对象，仅在 contextMenu=true 时有效                                                         | `{ clientX: number; clientY: number; contextElement?: HTMLElement; // 上下文元素 }`                                                |          |


### DropdownTransition 事件

| 事件名称            | 说明                            | 回调参数                            |
|-----------------|-------------------------------|---------------------------------|
| before-enter    | 同`transition`组件before-enter事件 |                                 |
| enter           | 同`transition`组件enter事件        |                                 |
| after-enter     | 同`transition`组件after-enter事件  |                                 |
| before-leave    | 同`transition`组件before-leave事件 |                                 |
| leave           | 同`transition`组件leave事件        |                                 |
| after-leave     | 同`transition`组件after-leave事件  |                                 |
| position-change | 下拉菜单位置信息`change`事件            | function (positionInfo: object) |


### DropdownTransition 函数

| 函数名称 | 说明     | 参数                    |
|------|--------|----------------------------|
| refresh | 刷新定位   |                              |

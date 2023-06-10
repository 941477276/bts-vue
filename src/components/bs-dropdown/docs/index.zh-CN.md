---
category: Components
type: 通用
typeCode: generic
title: Dropdown
subtitle: 下拉菜单
---

可智能自动调整显示位置的、支持动态加载下拉内容的下拉菜单

## API

### Dropdown 属性

| 参数                      | 说明                                                                | 类型                                                                              | 默认值       | 
|-------------------------|-------------------------------------------------------------------|---------------------------------------------------------------------------------|-----------|
| placement               | 下拉菜单弹出位置                                                          | `left`/`top`/`bottom`/`right`/`leftCenter`/`leftEnd`/`topCenter`/`topEnd`/`bottomCenter`/`bottomEnd`/`rightCenter`/`rightEnd`   | bottom    |
| tryReverseDirection     | 当在指定的`direction`位置下拉菜单不能完全显示时，是否尝试反方向显示                           | boolean                                                                         | true      |
| tryAllDirection     | 当在指定的`direction`位置下拉菜单不能完全显示时，是否尝试所有方向显示                          | boolean                                                                         | true      |
| trigger                | 触发下拉菜单显示的方式                                                       | `click`/`hover`/`contextMenu`                                                   | hover     |
| disabled                | 是否禁用状态                                                            | boolean                                                                         | false     |
| lazy                | 是否延迟渲染                                                            | boolean                                                                         | true      |
| teleported                | 是否使用 teleport，该值若为`true`，下拉菜单的dom会被传送到`appendTo`中                 | boolean                                                                         | true      |
| appendTo                | 下拉菜单dom节点即将传送到的父级元素                                               | string                                                                          | body      |
| showToggleArrow           | 触发下拉菜单的目标元素是否显示向下三角                                               | boolean                                                                         | true      |
| destroyOnHide           | 隐藏时是否销毁下拉菜单                                                       | boolean                                                                         | false     |
| dropdownClass           | 下拉菜单的额外class                                                      | string                                                                          |    |


### Dropdown 事件

| 事件名称         | 说明                  | 回调参数 |
|--------------|---------------------|------|
| show         | 下拉菜单显示时触发           |      |
| hide         | 下拉菜单隐藏时触发           |      |
| clickOutside | 点击非下拉菜单及触发元素以外的地方触发 |      |


### Dropdown 函数

| 函数名称 | 说明         | 参数                    |
|------|------------|----------------------------|
| show | 显示下拉菜单  |                              |
| hide | 隐藏下拉菜单  |                        |


### DropdownItem 属性

| 参数                | 说明                   | 类型                  | 默认值    |
|-----------------|----------------------|----------------------|--------|
| disabled           | 是否禁用状态                 | boolean                 | false  |
| divider            | 是否显示线条            | boolean                       | false  |
| active            | 是否为激活状态               | boolean           | false  |

### DropdownItem 事件

| 事件名称         | 说明                  | 回调参数              |
|--------------|---------------------|-------------------|
| click        | 点击事件                | (evt: ClickEvent) |

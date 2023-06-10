---
category: Components
type: 通用
typeCode: generic
title: Button
subtitle: 按钮
---

常用的按钮

## API

### Button 属性

| 参数                             | 说明                                           | 类型                                                               | 默认值    |
|--------------------------------|-------------------------------------------|-----------------------------------------------------------------------|--------|
| type                           | 按钮类型                                | `primary`/ `secondary`/ `success`/ `danger`/ `warning`/ `info`/ `light`/ `dark` /`link` |        |
| disabled                       | 是否禁用状态，默认为 false                                  | boolean                                       | false  |
| loading                       | 是否为加载中状态，默认为 false                            | boolean                                   | false  |
| tag                            | 标签名称                                     | string                                         | button |
| nativeType                     | 原生按钮类型                                     | string                                                | button |
| clearable                      | 是否可以清空内容，默认为 false                         | boolean                                                        | false  |
| size                           | 输入框大小。可选 `lg`、`sm`                          | string                                                | ``     |
| plain                          | 是否为朴素按钮                                        | boolean                                       | false  |
| block                          | 是否为块级按钮，块级按钮宽占满整个父级                               | boolean                                    | false  |
| round                          | 是否圆角按钮                                    | boolean                                            | false  |
| squared                          | 是否平角按钮                                        | boolean                                              | false  |
| disabledOnLoading            | 加载状态时按钮是否禁用                                      | boolean                                         | true   |
| dropdownToggle            | 是否为下拉菜单切换按钮                                     | boolean                                      | false  |
| showToggleSplit            | 是否为显示下拉菜单切换按钮分割线                             | boolean                                      | false  |


### Button 插槽

| 插槽名称    | 说明                                               |
|---------|--------------------------------------------------|
| loading  | 加载状态时的内容                                         |

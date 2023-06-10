---
category: Components
type: 数据录入
typeCode: data_input
title: Switch
subtitle: 开关
---

表示两种相互对立的状态间的切换，多用于触发「开/关」

## API

### Switch 属性

| 参数                  | 说明                                             | 类型                                                                             | 默认值  |
|---------------------|------------------------------------------------|--------------------------------------------------------------------------------|------|
| modelValue(v-model) | 开关绑定的值                                         | `string`/`number`/`boolean`                                                    | false |
| disabled            | 是否禁用状态，默认为 false                               | boolean                                                                        | false |
| loading             | 是否加载中                                          | boolean                                                                        | false |
| size                | 输入框大小。可选 `lg`、`sm`                             | string                                                                         |      |
| colorType           | 背景色类型                                          | `primary`/ `secondary`/ `success`/ `danger`/ `warning`/ `info`/ `light`/ `dark` |      |
| loadingColorType    | 加载中旋转图标的颜色类型                                   | `primary`/ `secondary`/ `success`/ `danger`/ `warning`/ `info`/ `light`/ `dark` | primary |
| activeValue         | switch 打开时的值                                   | `string`/`number`/`boolean`                                                    | true |
| inactiveValue       | switch 关闭时的值                                   | `string`/`number`/`boolean`                                                    | false |
| activeText          | switch 打开时的文字描述                                | string                                                                         |      |
| inactiveText        | switch 关闭时的文字描述                                | string                                                                         |      |
| activeColor         | switch 打开时的背景色                                 | string                                                                         |      |
| inactiveColor       | switch 关闭时的背景色                                 | string                                                                         |      |
| name                | switch的 name 属性                                | string                                                                         |      |
| extraData           | 额外数据，调用`beforeChange`时会传递进去                    | any                                                                            |      |
| beforeChange        | switch状态改变前的回调函数，如果返回false或promise.reject则不会改变 | function                                                                       |      |
| validateEvent       | 改变 switch 状态时是否触发表单的校验                         | boolean                                                                        | true |

### Switch 事件

| 事件名称    | 说明           | 回调参数                                 |
|---------|--------------|--------------------------------------|
| change  | switch值改变时触发 | function(val: string｜number｜boolean) |
| click   | 点击时触发        |                                      |

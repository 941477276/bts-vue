---
category: Components
type: 数据展示
typeCode: data_display
title: Popover
subtitle: 文字提示
---

点击/鼠标移入元素，弹出气泡式的卡片浮层。Popover 的属性与 Tooltip 很类似，它们都是基于`popper.js`开发的。

## API

### Popover 属性

| 参数               | 说明                                                                                                       | 类型                                                                                                                                | 默认值      |
|------------------|----------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|----------|
| trigger          | 触发方式                                                                                                     | `click`/`hover`/`focus`/`contextmenu`                                                                                             | hover    |
| placement        | 显示位置，参考：[popper.js参数](https://popper.js.org/docs/v2/)                                                    | `top`/`top-start`/`top-end`/`bottom`/`bottom-start`/`bottom-end`/`left`/`left-start`/`left-end`/`right`/`right-start`/`right-end` | bottom   |
| teleported       | 是否使用 teleport。设置成true则会被追加到`append-to`中                                                                  | boolean                                                                                                                           | true     |
| appendTo         | 指定 Popover 的dom将附加在哪一个元素上                                                                                 | `string`/`dom`                                                                                                                    | body     |
| visible          | tooltip是否显示，若该值为`boolean`类型，则该tooltip为受控模式                                                               | `boolean`                                                                                                                         | false    |
| showCondition    | 显示时的条件，如果该函数返回`false`则不会显示                                                                               | `() => boolean`                                                                                                                     |          |
| hideCondition    | 隐藏时的条件，如果该函数返回`false`则不会显示                                                                               | `() => boolean`                                                                                                                     |          |
| theme            | 主题                                                                                                       | `dark`/`light`/`custom`                                                                                                           | dark     |
| themeClass       | 自定义主题class                                                                                               | string                                                                                                                            |          |
| content          | 显示的内容，也可以通过`slot#content`传入 DOM                                                                          | `string`/`number`                                                                                                                 |          |
| isRawContent     | content中的内容是否作为 HTML 字符串处理                                                                               | boolean                                                                                                                           | false    |
| disabled         | 是否禁用                                                                                                     | boolean                                                                                                                           | false    |
| hideDisabled     | 是否禁用                                                                                                     | boolean                                                                                                                           | false    |
| enterable        | 鼠标是否可进入到 tooltip 中                                                                                       | boolean                                                                                                                           | true     |
| destroyOnHide    | 隐藏后是否销毁内容                                                                                                | boolean                                                                                                                           | false    |
| transitionName   | 过渡动画的名称                                                                                                  | string                                                                                                                            | fade     |
| showArrow        | 是否显示三角箭头                                                                                                 | boolean                                                                                                                           | true     |
| popperClass      | popper的额外classname                                                                                       | `string`/`array`/`object`                                                                                                         |          |
| popperStyle      | popper的样式                                                                                                | `string`/`array`/`object`                                                                                                         |          |
| arrowClass       | 三角箭头额外的classname                                                                                         | string                                                                                                                            |          |
| virtualTriggering | 是否由虚拟元素触发，参考：[popper.js参数](https://popper.js.org/docs/v2/virtual-elements/)                              | boolean                                                                                                                           | false    |
| virtualRef       | 触发元素的ref，仅在`virtualTriggering=true`时有效，参考：[popper.js参数](https://popper.js.org/docs/v2/virtual-elements/) | `string(css selector)`/`() => dom`/`dom`/`object`                                                                                 |          |
| showDelay        | 显示延迟时间，单位毫秒                                                                                              | number                                                                                                                            | 100      |
| hideDelay        | 隐藏延迟时间，单位毫秒                                                                                              | number                                                                                                                            | 100      |
| offset           | popper出现位置的偏移量，参考：[popper.js参数](https://popper.js.org/docs/v2/modifiers/offset/)                         | number[]                                                                                                                          | [0, 8]   |
| arrowOffset      | 三角箭头的偏移量，参考：[popper.js参数](https://popper.js.org/docs/v2/modifiers/arrow/)                                | number                                                                                                                            | 5        |
| strategy         | popper定位策略，默认为absolute。如果触发popper的参考元素在fixed定位的元素中，则应该使用fixed                                            | `absolute`/`fixed`                                                                                                                | absolute |
| gpuAcceleration  | 是否使用 GPU 加速样式来定位 popper。如果开启了则会使用transform: translate来定位，否则使用top/left来定位                                 | boolean                                                                                                                           | true     |
| popperOptions    | popperjs的其他参数，见：[popper.js参数](https://popper.js.org/docs/v2/)                                            | object                                                                                                                            | {}       |


### Popover 事件

| 事件名称               | 说明                                 | 回调参数 |
|--------------------|------------------------------------|------|
| before-show        | tooltip显示前触发                       |      |
| show               | tooltip显示后触发                       |      |
| before-hide        | tooltip隐藏前触发                       |      |
| hide               | tooltip隐藏后触发                       |      |
| content-mouseenter | 鼠标移入tooltip内容时触发，同dom的mouseenter事件 |      |
| content-mouseleave | 鼠标移入tooltip内容时触发，同dom的mouseenter事件 |      |

### Popover 插槽

| 插槽名称    | 说明  | 版本  |
|---------|-----|-----|
| title   | 标题  |     |
| content | 内容  |     |

### Popover 函数

| 函数名称 | 说明     | 参数  |
|------|--------|-----|
| show | 显示气泡卡片 |     |
| hide | 隐藏气泡卡片 |     |


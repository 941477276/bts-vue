---
category: Components
type: 数据录入
typeCode: data_input
title: Slider
subtitle: 滑块
---

滑动型输入器

## API

### Slider 属性

| 参数                  | 说明                                                                      | 类型                                                                                                                                | 默认值   |
|---------------------|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|-------|
| modelValue(v-model) | 数字输入框内容                                                                 | `string`/`number`/`array`                                                                                                         | 0     |
| min                 | 最小值                                                                     | number                                                                                                                            | 0     |
| max                 | 最大值                                                                     | number                                                                                                                            | 100   |
| disabled            | 是否禁用状态，默认为 false                                                        | boolean                                                                                                                           | false |
| vertical            | 是否垂直模式                                                                  | boolean                                                                                                                           | false |
| range               | 是否为双滑块模式                                                                | boolean                                                                                                                           | false |
| rangeMin            | 两个滑块值的差的最小值                                                             | number                                                                                                                            |       |
| rangeMax            | 两个滑块值的差的最大值                                                             | number                                                                                                                            |       |
| step                | 步长，必须大于0。当 marks 不为空对象时，可以设置 step 为 null，此时 Slider 的可选值仅有 marks 标出来的部分。 | number                                                                                                                            | 1     |
| showSteps           | 是否显示间断点                                                                 | boolean                                                                                                                           | false |
| included            | 当有marks或showSteps时，值为 true 时表示值为包含关系，false 表示并列                         | boolean                                                                                                                           | true  |     |
| enableCross         | 是否允许交叉，仅在range模式下有效                                                     | boolean                                                                                                                           | true  |     |
| marks               | 刻度标记，key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标签可以单独设置样式                | { number: string｜{label:string｜vnode; style: object; } }                                                                          | {}    |     |
| showToolTip         | 是否显示tooltip，如果为true则总是显示，否则总是不显示                         | boolean                                                                                                                           |       |     |
| tooltipTransitionName         | tooltip的过渡名称                                                       | string                                                                                                                            | scale |     |
| tooltipPlacement                | tooltip的显示位置                                                              | `top`/`top-start`/`top-end`/`bottom`/`bottom-start`/`bottom-end`/`left`/`left-start`/`left-end`/`right`/`right-start`/`right-end` |       |     |
| tooltipClass           | tooltip的class类名                                                         | string                                                                                                                            |       |     |
| tooltipFormatter            | tooltip显示文本格式化函数，若返回null，则隐藏tooltip               | (modelVal: any, percentage: number) => string｜number｜null｜void                                                                    |       |     |
| tooltipRawContent                | tooltip的内容是否为html文本                                                   | boolean                                                                                                                           | false |     |

### Slider 事件

| 事件名称   | 说明        | 回调参数                           |
|--------|-----------|--------------------------------|
| change | 滑块值变化时的回调 | function(value: number｜string) |

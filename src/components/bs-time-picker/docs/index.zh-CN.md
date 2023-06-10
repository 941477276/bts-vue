---
category: Components
type: 数据录入
typeCode: data_input
title: TimePicker
subtitle: 时间选择器
---

输入或选择时间的控件

## API

### TimePicker 属性

| 参数                        | 说明                               | 类型                                                                            | 默认值        |
|---------------------------|----------------------------------|-------------------------------------------------------------------------------|------------|
| modelValue(v-model)       | 当前时间                             | `string`/`Date`/[dayjs](https://day.js.org/)                                  |            |
| id                        | 输入框的 id                          | string                                                                        |            |
| disabled                  | 是否禁用状态，默认为 false                 | boolean                                                                       | false      |
| hourStep                  | 小时选项间隔                           | number                                                                        | 1          |
| minuteStep                | 分钟选项间隔                           | number                                                                        | 1          |
| secondStep                | 秒选项间隔                            | number                                                                        | 1          |
| disabledHours             | 需禁用的小时项                          | (hour: number, use12Hours: boolean) => boolean                                |            |
| disabledMinutes           | 需禁用的分钟项                          | (hour: number, minute: number, use12Hours: boolean) => boolean                |            |
| disabledSeconds           | 需禁用的秒项                           | (hour: number, minute: number, second: number, use12Hours: boolean) => boolean |            |
| hideDisabledOptions       | 是否隐藏禁用的选项                        | boolean                                                                       | false      |
| use12Hours                | 是否使用12小时制                        | boolean                                                                       | false      |
| clearable                 | 是否可以清空内容，默认为 false               | boolean                                                                       | false      |
| deliveContextToFormItem   | 是否向`form-item`组件传递上下文信息，默认为 true | boolean                                                                       | true       |
| size                      | 输入框大小。可选 `lg`、`sm`               | string                                                                        | ``         |
| inputmode                 | 输入框原生的inputmode属性                | string                                                                        |            |  |
| format                    | 展示的时间格式                          | `string`，参照[dayjs format](https://day.js.org/docs/en/parse/string-format)     | `HH:mm:ss` |  |
| valueFormat               | 绑定值的格式，不指定则绑定值为`dayjs`对象         | `string`，参照[dayjs format](https://day.js.org/docs/en/parse/string-format)     |            |
| placeholder               | 输入框的placeholder属性                | string                                                                        |            |
| name                      | 输入框的name属性                       | string                                                                        |            |
| dropdownClass             | 下拉弹窗的额外classname                 | `string`/`array`/`object`                                                     |            |
| showFooter                | 是否显示底部                    | boolean                                                                       | false      |
| showHeader                | 是否显示头部                    | boolean                                                                       | false      |

### TimePicker 事件

| 事件名称   | 说明        | 回调参数                |
|--------|-----------|---------------------|
| change | 当前值变化时的回调 | function(time: any) |
| show   | 下拉菜单显示时触发 |          |
| hide   | 下拉菜单隐藏时触发 |          |

### TimePicker 插槽

| 插槽名称    | 说明                  | 版本  |
|---------|---------------------|-----|
| trigger  | 触发下拉菜单显示的元素         |     |
| header  | 头部额外内容              |     |

### TimePicker 函数

| 函数名称       | 说明                        | 参数                                               |
|------------|---------------------------|--------------------------------------------------|
| setValidateStatus     | 设置输入框的校验状态 | function(status: `validating`/`success`/`error`) |

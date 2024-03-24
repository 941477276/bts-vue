---
category: Components
type: 数据录入
typeCode: data_input
title: DatePicker
subtitle: 日期选择器
---

输入或选择日期的控件

## API

### DatePicker 属性

| 参数                        | 说明                                  | 类型                                                                                              | 默认值        |
|---------------------------|-------------------------------------|-------------------------------------------------------------------------------------------------|------------|
| modelValue(v-model)       | 当前日期                                | `string`/`Date`/[dayjs](https://day.js.org/)                                                    |            |
| id                        | 输入框的 id                             | string                                                                                          |            |
| disabled                  | 是否禁用状态，默认为 false                    | boolean                                                                                         | false      |
| pickerType                  | 选择器类型                               | `date`/`dateTime`/`week`/`month`                                                                | date       |
| mode                  | 选择器面板的状态                            | `date`/`dateTime`/`week`/`month`                                                                |            |
| panelViewDate                  | 选择器打开时默认显示的时间                       | `string`/`Date`/[dayjs](https://day.js.org/)                                                    |            |
| disabledDate                  | 禁用的日期                               | () => boolean                                                                                   |            |
| showSidebar           | 是否显示侧边栏                             |                                                                                                 | false      |
| sidebarInRight           | 侧边栏是否在右边                            |                                                                                                 | false      |
| clearable                 | 是否可以清空内容，默认为 false                  | boolean                                                                                         | false      |
| deliveContextToFormItem   | 是否向`form-item`组件传递上下文信息，默认为 true    | boolean                                                                                         | true       |
| size                      | 输入框大小。可选 `lg`、`sm`                  | string                                                                                          | ``         |
| dateRender                    | 自定义日期单元格的内容                         | (cellData: {dayjsIns: Dayjs; now: dayjs; cellIndex: number; rowIndex: number;}) => string丨vnode |            |  |
| format                    | 展示的时间格式                             | `string`，参照[dayjs format](https://day.js.org/docs/en/parse/string-format)                       | `HH:mm:ss` |  |
| formatSpliter                    | 格式模板之间的连接符，仅在pickerType=dateTime时有效 | string                                                                                          | `' '`      |  |
| valueFormat               | 绑定值的格式，不指定则绑定值为`Dayjs`对象            | `string`，参照[dayjs format](https://day.js.org/docs/en/parse/string-format)                       |            |  |
| valueFormatSpliter               | 格式模板之间的连接符，仅在pickerType=dateTime时有效 | string                                                                                          | `' '`      |  |
| datePanelProps               | 日期选择器props，仅在pickerType=dateTime时有效 | object                                                                                          | {}         |  |
| timePanelProps               | 时间选择器props，仅在pickerType=dateTime时有效 | object                                                                                          | {}         |  |
| panelDecadeCount               | 十年区间选择器面板中显示的日期数量                   | number                                                                                          | 12         |  |
| placeholder               | 输入框的placeholder属性                   | string                                                                                          |            |  |
| name                      | 输入框的name属性                          | string                                                                                          |            |  |
| dropdownClass             | 下拉弹窗的额外classname                    | `string`/`array`/`object`                                                                       |            |  |
| showFooter                | 是否显示底部                              | boolean                                                                                         | false      |  |
| showHeader                | 是否显示头部                              | boolean                                                                                         | false      |  |

### DatePicker 事件

| 事件名称   | 说明        | 回调参数                |
|--------|-----------|---------------------|
| change | 当前值变化时的回调 | function(time: any) |
| show   | 下拉菜单显示时触发 |          |
| hide   | 下拉菜单隐藏时触发 |          |

### DatePicker 插槽

| 插槽名称       | 说明                                                    |
|------------|-------------------------------------------------------|
| deafult    | 触发下拉菜单显示的元素                                           |
| sidebar    | 侧边栏，参数：{date: Dayjs; show: function; hide: function } |
| dateRender | 自定义单元格内容，参数：{dayjsIns: Dayjs; now: Dayjs; cellIndex: number; rowIndex: number;}                                          |
| header     | 头部额外内容                                                | 
| footer     | 底部内容                                                  |          | 

### DatePicker 函数

| 函数名称       | 说明                        | 参数                                               |
|------------|---------------------------|--------------------------------------------------|
| setValidateStatus     | 设置输入框的校验状态 | function(status: `validating`/`success`/`error`) |
| setPanelViewDate     | 设置面板显示的日期 | function(date: Date/Dayjs)                       |

---
category: Components
type: 数据录入
typeCode: data_input
title: DateRangePicker
subtitle: 日期范围选择器
startVersion: 0.1.6
---

输入或选择日期范围的控件

## API

### DateRangePicker 属性

| 参数                        | 说明                                  | 类型                                                                                                | 默认值   |
|---------------------------|-------------------------------------|---------------------------------------------------------------------------------------------------|-------|
| modelValue(v-model)       | 绑定的日期范围值                            | `string[]`/`Date[]`/`number[]`/[dayjs](https://day.js.org/)[]                                     | []    |
| id                        | 输入框的 id                             | string                                                                                            |       |
| disabled                  | 是否禁用状态，默认为 false                    | boolean                                                                                           | false |
| pickerType                  | 选择器类型                               | `date`/`dateTime`/`month`/`year`                                                                  | date  |
| mode                  | 选择器面板的状态                            | `date`/`dateTime`/`month`/`year`                                                                  |       |
| disabledDate                  | 设置禁用日期的函数                           | `({current: Dayjs, panel: 'start'｜'end' }) => boolean`                                            |       |
| showSidebar           | 是否显示侧边栏                             |                                                                                                   | false |
| sidebarInRight           | 侧边栏是否在右边                            |                                                                                                   | false |
| clearable                 | 是否可以清空内容，默认为 false                  | boolean                                                                                           | false |
| deliveContextToFormItem   | 是否向`form-item`组件传递上下文信息，默认为 true    | boolean                                                                                           | true  |
| size                      | 输入框大小。可选 `lg`、`sm`                  | string                                                                                            | ``    |
| dateRender                    | 自定义日期单元格内容的函数                       | `(cellData: {dayjsIns: Dayjs; now: dayjs; cellIndex: number; rowIndex: number;}) => string丨vnode` |       |  |
| format                    | 展示的时间格式                             | `string[]`，参照[dayjs format](https://day.js.org/docs/en/parse/string-format)                       |       |  |
| formatSpliter                    | 格式模板之间的连接符，仅在pickerType=dateTime时有效 | string                                                                                            | `' '` |  |
| valueFormat               | 绑定值的格式，不指定则绑定值为`Dayjs`对象            | `string[]`，参照[dayjs format](https://day.js.org/docs/en/parse/string-format)                       |       |  |
| valueFormatSpliter               | 格式模板之间的连接符，仅在pickerType=dateTime时有效 | string                                                                                            | `' '` |  |
| datePanelProps               | 日期选择器props，仅在pickerType=dateTime时有效 | object                                                                                            | {}    |  |
| timePanelProps               | 时间选择器props，仅在pickerType=dateTime时有效 | object                                                                                            | {}    |  |
| defaultTime               | 选中日期后的默认具体时刻 | string[]                                                                                          | []    |  |
| placeholder               | 输入框的placeholder属性                   | string[]                                                                                          |       |  |
| name                      | 输入框的name属性                          | string                                                                                            |       |  |
| dropdownClass             | 下拉弹窗的额外classname                    | `string`/`array`/`object`                                                                         |       |  |
| showFooter                | 是否显示底部                              | boolean                                                                                           | false |  |
| showHeader                | 是否显示头部                              | boolean                                                                                           | false |  |
| yearButtonDisabled                | 是否禁用年份按钮                              | boolean                                                                                           | false |  |
| monthButtonDisabled                | 是否禁用月份按钮                              | boolean                                                                                           | false |  |
| teleported                | 是否使用 teleport。设置成true则下拉内容会被追加到`append-to`的位置                              | boolean                                                                                           | true  |  |
| appendTo                | 指示下拉内容将附加在哪一个网页元素上                         | boolean                                                                                           | true  |  |
| nativeAttrs                | input原生属性                              | object                                                                                            |       |  |

### DateRangePicker 事件

| 事件名称   | 说明        | 回调参数                |
|--------|-----------|---------------------|
| change | 当前值变化时的回调 | function(time: any) |
| show   | 下拉菜单显示时触发 |          |
| hide   | 下拉菜单隐藏时触发 |          |

### DateRangePicker 插槽

| 插槽名称       | 说明                                                                              |
|------------|---------------------------------------------------------------------------------|
| default    | 触发下拉菜单显示的元素                                                                     |
| sidebar    | 侧边栏                                                                             |
| dateRender | 自定义单元格内容，参数：{dayjsIns: Dayjs; now: Dayjs; cellIndex: number; rowIndex: number;} |
| header     | 头部额外内容                                                                          | 
| footer     | 底部内容                                                                            |          | 

### DateRangePicker 函数

| 函数名称       | 说明              | 参数                                                                   |
|------------|-----------------|----------------------------------------------------------------------|
| setValidateStatus     | 设置输入框的校验状态      | function(status: `validating`/`success`/`error`)                     |
| setPanelViewDate     | 设置面板显示的日期       | function(startDate?: Date/Dayjs, endDate?: Date/Dayjs)               |
| setDate     | 设置控件的v-model绑定值 | function([startDate: number/Date/Dayjs, endDate: number/Date/Dayjs]) |

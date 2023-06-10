---
category: Components
type: data entry
typeCode: data_input
title: DatePicker
subtitle: date picker
---

A control for entering or selecting a date

## API

### DatePicker property

| Parameter | Description | Type | Default |
|---------------------------|----------------------------------|-------------------------------------------------------------------------------------------------|------------|
| modelValue(v-model) | current date | `string`/`Date`/[dayjs](https://day.js.org/) | |
| id | id of the input box | string | |
| disabled | Whether to disable the state, the default is false | boolean | false |
| pickerType | picker type | `date`/`dateTime`/`week`/`month` | date |
| mode | state of the picker panel | `date`/`dateTime`/`week`/`month` | |
| panelViewDate | Default time when the selector is opened | `string`/`Date`/[dayjs](https://day.js.org/) | |
| disabledDate | disabled date | () => boolean | |
| showSidebar | whether to show the sidebar | | false |
| sidebarInRight | Whether the sidebar is on the right | | false |
| clearable | Whether the content can be cleared, the default is false | boolean | false |
| deliverContextToFormItem | Whether to deliver context information to the `form-item` component, the default is true | boolean | true |
| size | Input box size. optional `lg`, `sm` | string | `` |
| dateRender | Custom date cell content | (cellData: {dayjsIns: Dayjs; now: dayjs; cellIndex: number; rowIndex: number;}) => string丨vnode | | |
| format | Display time format | `string`, refer to [dayjs format](https://day.js.org/docs/en/parse/string-format) | `HH:mm:ss` | |
| formatSpliter | The connector between format templates, only valid when pickerType=dateTime | string | `' '` | |
| valueFormat | The format of the bound value, if not specified, the bound value will be a `Dayjs` object | `string`, refer to [dayjs format](https://day.js.org/docs/en/parse/string-format ) | | |
| valueFormatSpliter | The connector between format templates, only valid when pickerType=dateTime | string | `' '` | |
| datePanelProps | date picker props, only valid when pickerType=dateTime | object | {} | |
| timePanelProps | time picker props, only valid when pickerType=dateTime | object | {} | |
| placeholder | placeholder attribute of the input box | string | | |
| name | the name attribute of the input box | string | | |
| dropdownClass | Extra classname for dropdown | `string`/`array`/`object` | | |
| showFooter | Whether to show the footer | boolean | false | |
| showHeader | whether to show header | boolean | false | |

### DatePicker Event

| Event Name | Description | Callback Parameters |
|--------|-----------|---------------------|
| change | callback when current value changes | function(time: any) |
| show | Triggered when the dropdown menu is shown | |
| hide | Triggered when the dropdown menu is hidden | |

### DatePicker slot

| Slot Name | Description |
|---------|-------------------------------------------------------|
| trigger | The element that triggers the display of the drop-down menu |
| sidebar | sidebar, parameters: {date: Dayjs; show: function; hide: function } |
| dateRender | Custom cell content, parameters: {dayjsIns: Dayjs; now: Dayjs; cellIndex: number; rowIndex: number;} |
| header | additional header content |
| footer | bottom content | |

### DatePicker function

| function name | description | parameters |
|------------|------------------------------|-----------------------------------------------------|
| setValidateStatus | Set the validation status of the input box | function(status: `validating`/`success`/`error`) |
| setPanelViewDate | set the date displayed in the panel | function(date: Date/Dayjs) |

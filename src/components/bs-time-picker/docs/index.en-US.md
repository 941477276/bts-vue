---
category: Components
type: data entry
typeCode: data_input
title: TimePicker
subtitle: time picker
---

Controls for entering or selecting a time

## API

### TimePicker property

| Parameter | Description | Type | Default |
|---------------------------|----------------------------------|--------------------------------------------------------------------------------|------------|
| modelValue(v-model) | current time | `string`/`Date`/[dayjs](https://day.js.org/) | |
| id | id of the input box | string | |
| disabled | Whether to disable the state, the default is false | boolean | false |
| hourStep | hour option interval | number | 1 |
| minuteStep | minute option interval | number | 1 |
| secondStep | second option interval | number | 1 |
| disabledHours | Hours to be disabled | (hour: number, use12Hours: boolean) => boolean | |
| disabledMinutes | minutes to be disabled | (hour: number, minute: number, use12Hours: boolean) => boolean | |
| disabledSeconds | seconds to be disabled | (hour: number, minute: number, second: number, use12Hours: boolean) => boolean | |
| hideDisabledOptions | Whether to hide disabled options | boolean | false |
| use12Hours | Whether to use 12-hour format | boolean | false |
| clearable | Whether the content can be cleared, the default is false | boolean | false |
| deliverContextToFormItem | Whether to deliver context information to the `form-item` component, the default is true | boolean | true |
| size | Input box size. optional `lg`, `sm` | string | `` |
| inputmode | inputmode attribute of the input box | string | | |
| format | Display time format | `string`, refer to [dayjs format](https://day.js.org/docs/en/parse/string-format) | `HH:mm:ss` | |
| valueFormat | The format of the bound value, if not specified, the bound value will be `dayjs` object | `string`, refer to [dayjs format](https://day.js.org/docs/en/parse/string-format ) | |
| placeholder | placeholder attribute of the input box | string | |
| name | the name attribute of the input box | string | |
| dropdownClass | Extra classname for the dropdown window | `string`/`array`/`object` | |
| showFooter | Whether to show the footer | boolean | false |
| showHeader | Whether to show the header | boolean | false |

### TimePicker Events

| Event Name | Description | Callback Parameters |
|--------|-----------|---------------------|
| change | callback when current value changes | function(time: any) |
| show | Triggered when the dropdown menu is shown | |
| hide | Triggered when the dropdown menu is hidden | |

### TimePicker slot

| Slot Name | Description | Version |
|---------|------------------------|-----|
| trigger | The element that triggers the display of the drop-down menu | |
| header | additional header content | |

### TimePicker function

| function name | description | parameters |
|------------|------------------------------|-----------------------------------------------------|
| setValidateStatus | Set the validation status of the input box | function(status: `validating`/`success`/`error`) |

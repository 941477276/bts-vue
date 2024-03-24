---
category: Components
type: data entry
typeCode: data_input
title: DateRangePicker
subtitle: date range picker
startVersion: 0.1.6
---

Controls for entering or selecting a date range

## API

### DateRangePicker property

| Parameter | Description | Type | Default |
|---------------------------|----------------------------------|-------------------------------------------------------------------------------------------------|------------|
| modelValue(v-model) | Bind date range value | `string[]`/`Date[]`/`number[]`/[dayjs](https://day.js.org/)[] | [] |
| id | The id of the input box | string | |
| disabled | Whether to disable the state, the default is false | boolean | false |
| pickerType | Picker type | `date`/`dateTime`/`month`/`year` | date |
| mode | The state of the selector panel | `date`/`dateTime`/`month`/`year` | |
| disabledDate | Function to set disabled date | `({current: Dayjs, panel: 'start'|'end' }) => boolean` | |
| showSidebar | Whether to display the sidebar | | false |
| sidebarInRight | Whether the sidebar is on the right | | false |
| clearable | Whether the content can be cleared, the default is false | boolean | false |
| deliverContextToFormItem | Whether to pass context information to the `form-item` component, the default is true | boolean | true |
| size | Input box size. Optional `lg`, `sm` | string | `` |
| dateRender | Function to customize date cell content | `(cellData: {dayjsIns: Dayjs; now: dayjs; cellIndex: number; rowIndex: number;}) => string丨vnode` | | |
| format | Displayed time format | `string[]`, refer to [dayjs format](https://day.js.org/docs/en/parse/string-format) | | |
| formatSpliter | Connector between format templates, only valid when pickerType=dateTime | string | `' '` | |
| valueFormat | The format of the bound value. If not specified, the bound value will be a `Dayjs` object | `string[]`, refer to [dayjs format](https://day.js.org/docs/en/parse/string -format) | | |
| valueFormatSpliter | Connector between format templates, only valid when pickerType=dateTime | string | `' '` | |
| datePanelProps | Date picker props, only valid when pickerType=dateTime | object | {} | |
| timePanelProps | Time picker props, only valid when pickerType=dateTime | object | {} | |
| defaultTime | The default specific time after the selected date | string[] | [] | |
| placeholder | placeholder attribute of input box | string[] | | |
| name | name attribute of input box | string | | |
| dropdownClass | Additional classname for drop-down pop-up window | `string`/`array`/`object` | | |
| showFooter | Whether to display the bottom | boolean | false | |
| showHeader | Whether to display the header | boolean | false | |
| yearButtonDisabled | Whether to disable the year button | boolean | false | |
| monthButtonDisabled | Whether to disable the month button | boolean | false | |
| teleported | Whether to use teleport. If set to true, the drop-down content will be appended to the position of `append-to` | boolean | true | |
| appendTo | Indicates which web page element the drop-down content will be appended to | boolean | true | |
| nativeAttrs | input native attributes | object | | |

### DateRangePicker Event

| Event Name | Description | Callback Parameters |
|--------|-----------|---------------------|
| change | callback when current value changes | function(time: any) |
| show | Triggered when the dropdown menu is shown | |
| hide | Triggered when the dropdown menu is hidden | |

### DateRangePicker slot

| Slot Name  | Description |
|------------|-------------------------------------------------------|
| default    | The element that triggers the display of the drop-down menu |
| sidebar    | sidebar, parameters: {date: Dayjs; show: function; hide: function } |
| dateRender | Custom cell content, parameters: {dayjsIns: Dayjs; now: Dayjs; cellIndex: number; rowIndex: number;} |
| header     | additional header content |
| footer     | bottom content | |

### DateRangePicker function

| function name | description | parameters |
|------------|------------------------------|-----------------------------------------------------|
| setValidateStatus | Set the validation status of the input box | function(status: `validating`/`success`/`error`) |
| setPanelViewDate | Set the date displayed on the panel | function(startDate?: Date/Dayjs, endDate?: Date/Dayjs) |
| setDate | Set the v-model binding value of the control | function([startDate: number/Date/Dayjs, endDate: number/Date/Dayjs]) |

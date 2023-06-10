---
category: Components
type: data entry
typeCode: data_input
title: InputNumber
subtitle: Number input box
---

Enter the value within the range by mouse or keyboard

## API

### InputNumber property

| Parameter | Description | Type | Default |
|-----------------------|------------------------------------------|---------------------------------|---|
| modelValue(v-model) | Number input box content | `string`/`number` | |
| id | id of the input box | string | |
| disabled | Whether to disable the state, the default is false | boolean | false |
| readonly | Whether to read only, the default is false | boolean | false |
| deliverContextToFormItem | Whether to deliver context information to the `form-item` component, the default is true | boolean | true |
| size | Input box size. optional `lg`, `sm` | string | |
| type | input box type | `text`/`number` | text |
| inputmode | The original inputmode attribute of the input box | string | |
| inputStyle | The style of the input box | object | {} |
| placeholder | placeholder attribute of the input box | string | |
| name | the name attribute of the input box | string | |
| ariaLabel | ariaLabel attribute of the input box | string | |
| keyboard | Whether the value can be changed via the keyboard | boolean | true |
| step | step size, the number of steps changed each time, can be a decimal | number | 1 |
| min | minimum value | number | |
| max | maximum value | number | |
| prefix | prefix text | string | |
| formatter | Specifies the format of the value displayed in the input box | (value: number｜string) => string | |
| parser | Specifies the way to convert back to a number from the formatter, used in conjunction with the formatter | (value: string) => number | |
| precision | numeric precision | number | |
| controlInner | Whether the control button is inside the input box | boolean | true |

### InputNumber event

| Event Name | Description | Callback Parameters |
|--------|--------------|----------------------|
| change | Callback when the content of the input box changes | function(value: any) |

### InputNumber slot

| Slot Name | Description | Version |
|---------|--------------------------------------------------|-----|
| prepend | prepend input box content | |
| append | content after the input box | |

### InputNumber function

| function name | description | parameters |
|------------|-------------------------------|---------------------------------------------|
| setValidateStatus | Set the validation status of the input box | `status`, optional values are: `validating`, `success`, `error` |

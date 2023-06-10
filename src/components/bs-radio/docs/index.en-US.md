---
category: Components
type: data entry
typeCode: data_input
title: Radio
subtitle: radio button
---

Single box

## API

### Radio properties

| Parameter | Description | Type | Default |
|-----------------------|----------------------------------|-------------------------------|-------|
| modelValue(v-model) | The value of the radio button | `string`/`number`/`boolean` | |
| disabled | Whether to disable the state, the default is false | boolean | false |
| deliverContextToFormItem | Whether to deliver context information to the `form-item` component, the default is true | boolean | true |
| label | radio display name | string | | |
| name | the name attribute of the input box | string | | |
| ariaLabel | ariaLabel property of the input box | string | | |
| id | id of the radio button | string | |

### Radio Events

| Event Name | Description | Callback Parameters |
|--------|------------|--------------------------------|
| change | Callback when the radio button value changes | function(e: Event, value: any) |

### Radio functions

| function name | description | parameters |
|------------|-------------|----------------------------------------------|
| setValidateStatus | Set the validation status of the radio box | `status`, the optional values are: `validating`/`success`/`error` |

### RadioGroup Properties

| Parameter | Description | Type | Default |
|--------------------------|------------------|------------------------------|-------|
| modelValue(v-model) | The value of the radio button | `string`/`number`/`boolean` | |
| disabled | Whether to disable the state, the default is false | boolean | false |
| elTag | The tag name of the radio button group rendering element | string | div |

### RadioGroup Events

| Event Name | Description | Callback Parameters |
|--------|------------|--------------------------------|
| change | Callback when the radio button value changes | function(value: any) |

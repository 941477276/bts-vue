---
category: Components
type: data entry
typeCode: data_input
title: Checkbox
subtitle: Multi-selection box
---

Checkbox

## API

### Checkbox properties

| Parameter | Description | Type | Default |
|-----------------------|----------------------------------|-------------------------------------|-------|
| modelValue(v-model) | The value of the radio box | `string`/`number`/`boolean`/`array` | |
| checked | Checked status | boolean | false |
| disabled | Whether to disable the state | boolean | false |
| indeterminate | Indeterminate status | boolean | false |
| deliverContextToFormItem | Whether to deliver context information to the `form-item` component, the default is true | boolean | true |
| trueValue | selected value | `string`/`number` | | |
| falseValue | unchecked value | `string`/`number` | | |
| label | radio display name | string | | |
| name | the name attribute of the input box | string | | |
| ariaLabel | ariaLabel property of the input box | string | | |
| id | id of the radio button | string | |

### Checkbox Events

| Event Name | Description | Callback Parameters |
|--------|------------|--------------------------- -----|
| change | Callback when the value of the multi-select box changes | function(e: Event, value: any) |

### Checkbox function

| function name | description | parameters |
|----------|------------|----------------------------------------------|
| setValidateStatus | Set the validation status of the checkbox | `status`, the optional values are: `validating`/`success`/`error` |

### CheckboxGroup property

| Parameter | Description | Type | Default |
|---------------------|-----------------------------------|------------------|-------|
| modelValue(v-model) | The value of the multi-selection box, when the value is `string` type, it will automatically split the value into an array by commas | `string`/`array` | |
| disabled | Whether to disable the state, the default is false | boolean | false |
| elTag | The tag name of the radio button group rendering element | string | div |
| min | The minimum number of checkboxes that can be checked | number | |
| max | the maximum number of checkboxes that can be checked | number | |

### CheckboxGroup event

| Event Name | Description | Callback Parameters |
|--------|------------|--------------------------------|
| change | Callback when the value of the multi-select box changes | function(value: [any]) |

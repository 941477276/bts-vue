---
category: Components
type: data entry
typeCode: data_input
title: Form
subtitle: form
---

Forms for data entry, validation, and data submission

## API

### Form properties

| Parameter | Description | Type | Default |
|------------------|---------------------|----------------------------------|----------|
| model | the value of the radio button | object | |
| rules | validation rules | object | |
| layout | form layout | `vertical`/`horizontal`/`inline` | vertical |
| showErrorMessage | Whether to display an error message when the form item validation fails | boolean | true |
| showLabel | whether to display label | boolean | true |
| labelClass | extra classname for label | `string`/`array`/`object` | |
| labelWidth | width of label | `string`/`number` | |
| labelAlign | The alignment of the label | `left`/`center`/`right` | |
| contentClass | extra class for content part | `string`/`array`/`object` | |
| size | Input box size. optional `lg`, `sm` | string | |


### Form function

| function name | description | parameters |
|----------------|------------------------------------------|---------------------------------------------------------------------------------------|
| validate | validate the entire form | (callback?: (valid: boolean) => void) => Promise<boolean> |
| validateFields | Validate some form items | (names: string｜string[], callback?: (valid: boolean) => void) => Promise<boolean> |
| clearValidate | Remove the validation result of the whole form or part of the form items, and remove the validation result of the entire form if `names` is not passed | (names?: string｜string[]) => void |
| resetFields | Reset form values and remove form validation results | |

### FormItem property

| Parameter | Description | Type | Default |
|----------------------|------------------------|---------------------------|-------|
| value | The value of the current form item, only used when validating the current form item | any | |
| rules | validation rules | `object`/`array` | |
| name | the key of the field in the model | string | |
| required | Whether it is required, if not set, it will be automatically generated according to the validation rules | boolean | false |
| hideRequiredAsterisk | Whether to hide the red asterisk next to the label for required fields | boolean | false |
| showLabel | whether to display label | boolean | true |
| labelClass | extra classname for label | `string`/`array`/`object` | |
| labelWidth | width of label | `string`/`number` | | |
| labelAlign | The alignment of the label | `left`/`center`/`right` | | |
| labelFor | the for attribute of the label | string | | |
| contentClass | extra class for content part | `string`/`array`/`object` | | |
| size | Input box size. optional `lg`, `sm` | string | |
| horizontal | Whether the label is displayed horizontally | boolean | |
| hint | hint text | string | |
| validSuccessText | Text after form validation is successful | string | |

### FormItem slot

| Slot Name | Description | Version |
|---------|-------------------------|-----|
| label | custom label | |
| hint | Customize `hint` hint information | |


### FormItem function

| function name | description | parameters |
|----------------|---------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| validate | Validate the form item, the parameter `trigger` is the trigger defined in `rules`, if trigger is specified, only the validation rule corresponding to the trigger will be executed, otherwise all validation rules will be executed | `(trigger: string, callback?: (valid: boolean) => void) => void ` |
| clearValidate | Remove form item validation results | |
| resetFields | Reset the value of the form item and remove the validation result | |

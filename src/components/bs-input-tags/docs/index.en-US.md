---
category: Components
type: data entry
typeCode: data_input
title: InputTags
subtitle: label input box
---

Usually used to define attributes or label things

## API

### InputTags property

| Parameter | Description | Type | Default |
|---------------------------|---------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|-----------|
| modelValue(v-model) | input box content | { label: string; value: string｜number｜boolean; tagType?: string; tagClass?: string; disabled?: boolean; } | [] |
| id | id of the input box | string | |
| disabled | Whether to disable the state, the default is false | boolean | false |
| readonly | Whether to read only, the default is false | boolean | false |
| clearable | Whether the content can be cleared, the default is false | boolean | false |
| deliverContextToFormItem | Whether to deliver context information to the `form-item` component, the default is true | boolean | true |
| size | Input box size. optional `lg`, `sm` | string | |
| inputType | Declare the input type, same as the type attribute of the original input tag, see: [MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#property) | string | `text` |
| maxTagCount | The maximum number of tags displayed on the interface, less than or equal to 0 is invalid (excessive tags will be folded) | number | 0 |
| tagLimit | The maximum number of tags allowed to be added, less than or equal to 0 is invalid | number | 0 |
| placeholder | placeholder attribute of the input box | string | input content, press Enter key to confirm |
| name | the name attribute of the input box | string | |
| ariaLabel | ariaLabel attribute of the input box | string | |
| tagType | type of tag component | `primary`/ `secondary`/ `success`/ `danger`/ `warning`/ `info`/ `light`/ `dark` / | secondary | |
| tagCloseable | Whether the tag can be closed | boolean | true | |
| tagEffect | tag theme | `dark`/`light`/`plain` | light |
| showAddButton | whether to show the add button | boolean | true |
| minWidth | The minimum width of the input box | number | 100 |

### InputTags event

| Event Name | Description | Callback Parameters |
|--------|--------------|-----------------------------|
| tag-close | Triggered when the tag is closed | function(valueItem: object) |
| limited | Triggered when the number of tags exceeds the limit | |

### InputTags slot

| Slot Name | Description | Version |
|------------|---------------------------------------------------------|-----|
| tag | tag custom content | |
| maxTagPlaceholder | Collapse tag custom content (when the number of displayed tags exceeds the limit), the parameter is: `{ omittedCount: number }` | |

### InputTags function

| function name | description | parameters |
|------------|--------------------------------------------------|----------------------------------------------|
| setValidateStatus | Set the validation status of the input box, the optional values of the parameters are: `validating`, `success`, `error` |

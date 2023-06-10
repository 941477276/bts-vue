---
category: Components
type: data entry
typeCode: data_input
title: Input
subtitle: input box
---

Enter content with the mouse or keyboard

## API

### Input property

| Parameter | Description | Type | Default |
|---------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|---------------|--------|
| modelValue(v-model) | input box content | string | |
| id | id of the input box | string | |
| disabled | Whether to disable the state, the default is false | boolean | false |
| readonly | Whether to read only, the default is false | boolean | false |
| showPassword | whether to show switch password icon, default is false | boolean | false |
| clearable | Whether the content can be cleared, the default is false | boolean | false |
| deliverContextToFormItem | Whether to deliver context information to the `form-item` component, the default is true | boolean | true |
| size | Input box size. optional `lg`, `sm` | string | |
| type | Declare the input type, which is the same as the type attribute of the original input tag, see: [MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#property) (please directly Use `<a-textarea />` instead of `type="textarea"`). | string | `text` |
| inputmode | The original inputmode attribute of the input box | string | |
| inputStyle | The style of the input box | object | `{}` |
| placeholder | placeholder attribute of the input box | string | |
| name | the name attribute of the input box | string | |
| ariaLabel | ariaLabel attribute of the input box | string | |
| compositionDisable | Whether to not intercept the input when the composition event, when the value is true when inputting Chinese, Japanese and other non-English, the value of modelValue will be updated in real time in the input event | boolean | false |
| nativeAttrs | Other attributes that need to be added to the input element | object | `{}` |
| minlength | minimum length | number | |
| maxlength | maximum length | number | |
| prefix | input with prefix icon | `string`/`slot` | |
| showCount | Whether to display the word count | boolean | false |
| autoHeight | Whether to automatically calculate the height, only valid when `type=textarea` | boolean | false |
| minHeight | The minimum height, if the value is less than or equal to 0, it will be invalid, only valid when `type=textarea` | number | 0 |
| textareaEmptyHeightIsMinHeight | Whether the height of textarea is minHeight when the value is empty, only valid when `type=textarea` | boolean | true |

### Input event

| Event Name | Description | Callback Parameters |
|-------|-------------| ----------- |
| change | Callback when the content of the input box changes | function(e) |
| clear | Callback when the input content is cleared | function() |

### Input slot

| Slot Name | Description | Version |
|---------|--------------------------------------------------|-----|
| prefix | header content of input box | |
| suffix | content at the end of the input box | |
| prepend | prepend input box content | |
| append | content after the input box | |
| text-count | Input box word count slot, the parameter is: `{count: number, maxCount: number}` | |

### Input function

| function name | description | parameters |
|------------|-------------------------------|---------------------------------------------|
| setValidateStatus | Set the validation status of the input box, very useful when encapsulating custom component validation | `status`, optional values are: `validating`, `success`, `error` |

---
category: Components
type: data entry
typeCode: data_input
title: Select
subtitle: selector
---

Drop-down selector, when there are too many options, use the drop-down menu to display and select content

## API

### Select property

| Parameter | Description | Type | Default |
|-----------------------|--------------------------------------------------------------------|------------------------------------------------------------------------------|-----------|
| modelValue(v-model) | selector value | `string`/`number`/`boolean`/`array` | |
| checked | Checked status | boolean | false |
| disabled | Whether to disable the state | boolean | false |
| deliverContextToFormItem | Whether to deliver context information to the `form-item` component, the default is true | boolean | true |
| size | Input box size. optional `lg`, `sm` | string | |
| label | radio display name | string | | |
| name | the name attribute of the input box | string | | |
| ariaLabel | ariaLabel property of the input box | string | | |
| id | id of the radio button | string | |
| placeholder | placeholder of the selector | string | |
| clearable | Whether the content can be cleared | boolean | false |
| options | drop-down option data, if passed, no need to manually construct selectOption node | array<{value, label, [disabled, title, disabled, tagType, tagClass, options]}> | |
| teleported | Whether to use teleport, if the value is `true`, the selector's drop-down content dom node will be sent to `appendTo` | boolean | false |
| appendTo | the parent element of the drop-down menu dom node | string | body |
| multiple | Whether to support multiple selection | boolean | false |
| multipleLimit | When multiple selection, the maximum number that can be selected | number | |
| maxTagCount | When multiple selections are made, a maximum of several tags will be displayed, and the value less than or equal to 0 is invalid | number | 0 |
| tagType | The color type of `tag` for multiple selection | `primary`/ `secondary`/ `success`/ `danger`/ `warning`/ `info`/ `light`/ `dark` | secondary |
| tagEffect | The theme of `tag` when multiple selection | string | light |
| tagCloseable | When multiple selection, whether `tag` can be closed | boolean | true |
| loading | whether data is being loaded | boolean | false |
| loadingText | Prompt text when data is loading | string | Loading... |
| loadingColorType | The color type of the loading icon | `primary`/ `secondary`/ `success`/ `danger`/ `warning`/ `info`/ `light`/ `dark` | Loading... |
| emptyText | The text displayed when the drop-down list is empty, you can also use slot="empty" to set | string | no data |
| filterable | whether searchable | boolean | false |
| filterMethod | A custom search function, which should return `true` when the filter condition is met, and `false` otherwise. By default, search from the `label` attribute of `option` | function(text: string, option: option) | |
| dropdownClass | extra class for dropdown | string | |


### Select event

| Event Name | Description | Callback Parameters |
|--------|---------------------|--------------------------------------|
| change | Callback when selector value changes | function(value: any) |
| selectLimit | In multi-selection, trigger when the selected item exceeds the selectable maximum value | function(multipleLimit: number) |
| visibleChange | Triggered when the selector dropdown menu is shown or hidden | function(isVisible: boolean, el: HTMLElement) |

### Select slot

| Slot Name | Description |
|---------|--------------------------------------|
| option | The content of the `bs-option` component, only valid when the `options` attribute is set |
| empty | What to display when the dropdown list is empty |
| loading | content displayed in loading status |
| extra | extended content |
| tag | When multiple selection, the content of the tag |
| suffixIcon | down arrow icon |
| maxTagPlaceholder | When multiple selection, the maximum number of tags displayed exceeds the content to be folded |


### Select function

| function name | description | parameters |
|----------|------------|----------------------------------------------|
| setValidateStatus | Set the validation status of the selector | `status`, optional values are: `validating`/`success`/`error` |
| dropdownShow | Show picker dropdown menu | |
| dropdownHide | Hide the selector dropdown menu | |


### Option attribute

| Parameter | Description | Type | Default |
|--------------|------------------|--------------------------------------------------------------------------------|-----------|
| value | The value of the dropdown option | `string`/`number`/`boolean` | |
| disabled | Whether to disable the state | boolean | false |
| label | dropdown option display name | string | | |
| tagType | The color type of `tag` for multiple selection | `primary`/ `secondary`/ `success`/ `danger`/ `warning`/ `info`/ `light`/ `dark` | secondary |
| tagClass | classname of the tag | string |

### OptionGroup property

| Parameter | Description | Type | Default |
|--------------|--------|-------------|----------- |
| disabled | Whether to disable the state | boolean | false |
| label | group name | string | | |

### OptionGroup slot

| Slot Name | Description | Version |
|---------|------|-----|
| label | group name | |

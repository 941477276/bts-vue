---
category: Components
type: data entry
typeCode: data_input
title: Cascader
subtitle: Geeklink Selection
---

When a data set has a clear hierarchical structure, it can be viewed and selected step by step through the cascading selector.

## API

### Cascader Properties

| Parameter | Description | Type | Default |
|--------------------------------|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|-----------|
| modelValue(v-model) | the value of the grid selector | `string`/`number`/`array` | |
| expandTrigger | How to expand the secondary menu | `click`/`hover` | hover |
| options | Cascade selector dropdown option data | `[CascaderOption\[\]](#CascaderOption)` | [] |
| id | id of the link selector | string | |
| disabled | Whether to disable the state, the default is false | boolean | false |
| checkStrictly | Whether to strictly observe that parent and child nodes are not related to each other | boolean | false |
| teleported | Whether to use teleport, if the value is `true`, the selector's drop-down content dom node will be sent to `appendTo` | boolean | false |
| appendTo | the parent element of the drop-down menu dom node | string | body |
| clearable | Whether the content can be cleared, the default is false | boolean | false |
| deliverContextToFormItem | Whether to deliver context information to the `form-item` component, the default is true | boolean | true |
| size | Input box size. optional `lg`, `sm` | string | `` |
| placeholder | placeholder attribute of the input box | string | | |
| name | the name attribute of the input box | string | | |
| ariaLabel | ariaLabel property of the input box | string | | |
| showAllLevels | Whether to display the full path of the selected value in the input box | boolean | true | |
| emitPath | When the selected node changes, whether to return an array composed of the values of the menus at all levels where the node is located, if set false, only return the value of the node | boolean | true |
| multiple | Whether to support multiple selection | boolean | false |
| multipleLimit | When multiple selection, the maximum number that can be selected | number | |
| maxTagCount | When multiple selections are made, a maximum of several tags will be displayed, and the value less than or equal to 0 is invalid | number | 0 |
| tagType | Color type of `tag` when multiple selection | `primary`/ `secondary`/ `success`/ `danger`/ `warning`/ `info`/ `light`/ `dark` | secondary | |
| tagEffect | When multiple selection, the theme of `tag` tag | `dark`/`light`/`plain` | light |
| tagCloseable | When multiple selection, whether `tag` can be closed | boolean | true |
| loading | whether data is being loaded | boolean | false |
| loadingText | Prompt text when data is loading | string | Loading... |
| loadingColorType | The color type of the loading icon | `primary`/ `secondary`/ `success`/ `danger`/ `warning`/ `info`/ `light`/ `dark` | Loading... |
| emptyText | The text displayed when the drop-down list is empty, you can also use slot="empty" to set | string | no data |
| filterable | whether searchable | boolean | false |
| filterMethod | A custom search function, which should return `true` when the filter condition is met, and `false` otherwise. By default, search from the `label` attribute of `option` | function(text: string, option: option) | |
| displayRender | The rendering function displayed in the input box or tag after selection | (checkedOptionsPathList: object[]) => string | |
| dropdownClass | extra class for dropdown | string | |
| lazy | Whether to dynamically load child nodes, it needs to be used in conjunction with the lazyLoad method | boolean | false |
| lazyLoadFn | The method of lazy loading of dynamic data, only valid when `lazy=true`, after the data is loaded, the `loadCallback` callback function needs to be called to notify that the data is loaded | (optionItem: any, loadCallback: (loadSuccess: boolean) = > void) => any | |
| setDropdownWidth | Whether to set the width of the drop-down menu to the width of the reference element | boolean | false |
| setDropdownMinWidth | Whether to set the minimum width of the drop-down menu to the width of the reference element | boolean | false |
| checkboxName | The name property of the check box | string | |
| radioName | the name attribute of the radio box | string | |

#### CascaderOption
```ts
interface CascaderOption {
   label: string;
   value: string|number;
   disabled?: boolean;
   children?: CascaderOption[];
   leaf?: boolean; // Whether it is a leaf node, valid when `lazy=true`
   tagType?: `primary`|`secondary`|`success`|`danger`|`warning`|`info`|`light`|`dark`;
   tagEffect?: `dark`|`light`|`plain`;
   tagClass?: string;
}
```

### Cascader Events

| Event Name | Description | Callback Parameters |
|--------|--------------|----------------------------------------------|
| select | Fires when an option is selected or unselected | function(optionItem: any, isSelected: boolean) |

### Cascader Slots

| Slot Name | Description | Version |
|---------|----------------------|-----|
| default | The element that triggers the dropdown menu | |
| empty | custom options content when there is no content | |
| loading | Customize content when loading data | |
| label | custom option label | |
| tag | custom tag content | |
| maxTagPlaceholder | Collapse tag custom content (when the number of displayed tags exceeds the limit), the parameter is: `{ omittedCount: number }` | |


### Cascader function

| function name | description | parameters |
|------------|--------|-----|
| dropdownShow | Show dropdown menu | |
| dropdownHide | Hide the dropdown menu | |

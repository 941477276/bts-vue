---
category: Components
type: data entry
typeCode: data_input
title: TreeSelect
subtitle: tree selector
---

Tree selection control, similar to `Select` selection control, when the optional data structure is a tree structure, you can use `TreeSelect`

## API

### TreeSelect property

| Parameter | Description | Type | Default |
|-----------------------------------|-------------------------------------------------|------------------------------------------------------------------------------------------|----------|
| modelValue(v-model:modelValue) | key array of selected nodes (controlled) | `stirng`/`string[]`/`number[]` | [] |
| treeData | tree data | same as `tree` component | {} |
| nodeKey | Each tree node is used as a unique identification attribute, the whole tree should be unique (by comparison) | string | |
| checkStrictly | In the case of displaying checkboxes, whether to strictly follow the practice of parent-child disassociation, the default is false | boolean | false |
| checkOnClickNode | Whether to check the node when the node is clicked, the default value is false. (i.e. the node will only be selected when the checkbox is clicked) | boolean | false |
| checkboxVisible | Whether to display the checkbox | boolean | false |
| multiple | Whether to support multiple selection | boolean | false |
| multipleLimit | the maximum number that can be selected | number | |
| clearable | Whether the content can be cleared | boolean | false |
| lazy | Whether to lazily load child nodes, it needs to be used in conjunction with `loadDataFn` method | boolean | false |
| labels | The display name of the selected item in the input box, required when `lazy=true` | {label: string; value: string; tagType?: string; tagClass?: string; tagEffect?: string;} | [] |
| radioVisible | Whether to display the radio button | boolean | false |
| filterable | whether searchable | boolean | false |
| filterMethod | node filter function | (nodeData: object, filterText: string) => boolean | |
| loading | whether tree data is being loaded | boolean | false |
| loadingText | Text displayed when loading data | string | Loading... |
| deliverContextToFormItem | Whether to deliver context information to the `form-item` component, the default is true | boolean | true |
| size | The tree selector size. optional `lg`, `sm` | string | `` |
| placeholder | placeholder attribute of the input box | string | | |
| name | the name attribute of the input box | string | | |
| ariaLabel | ariaLabel property of the input box | string | | |
| id | id of the input box | string | |
| treeProps | other properties of the tree component | all properties of the `tree` component | {} |
| defaultExpandCheckedNodesParent | Whether to expand the parent of checked nodes by default | boolean | true |
| emptyText | Text when there is no data | string | No data yet |
| loadingColorType | The color type of the loading icon | `primary`/ `secondary`/ `success`/ `danger`/ `warning`/ `info`/ `light`/ `dark` | |
| tagType | type of tag component | `primary`/ `secondary`/ `success`/ `danger`/ `warning`/ `info`/ `light`/ `dark` | secondary |
| tagEffect | tag theme | `dark`/`light`/`plain` | light |
| tagCloseable | Whether the tag can be closed | boolean | true |
| maxTagCount | How many tags to display at most, less than or equal to 0 is invalid | number | 0 |
| dropdownClass | Extra classname for dropdown content | `string`/`array`/`object` | |

### TreeSelect event

| Event Name | Description | Callback Parameters |
|--------------|------------------|--------------------------------------------------------------|
| change | Triggered when the value of modelValue changes | function(value: stirng丨string[]) |
| node-expand | Triggered when a node is expanded/collapsed | function(nodeData: TreeNode, expanded: boolean, nodeState: any) |
| check-change | Triggered when a node is checked/unchecked | function(nodeData: TreeNode, isChecked: boolean) |
| node-click | Triggered when a node is clicked | function(nodeData: TreeNode, nodeState: any) |
| node-destroy | Triggered when a node is destroyed | function(nodeData: TreeNode) |
| show | Triggered when the dropdown content is displayed | |
| hide | Triggered when the dropdown content is hidden | |

### TreeSelect slot

| Slot Name | Description | Version |
|---------|--------------------------------------| -----|
| tag | When multiple selection, the content of the tag | |
| suffixIcon | down arrow icon | |
| maxTagPlaceholder | In multi-selection, the content to be folded after the maximum number of tags displayed is exceeded | |


### TreeSelect function

| function name | description | parameters |
|----------|------------|----------------------------------------------|
| setValidateStatus | Set the validation status of the selector | `status`, optional values are: `validating`/`success`/`error` |
| dropdownShow | Show picker dropdown menu | |
| dropdownHide | Hide the selector dropdown menu | |
| refreshDropdown | Refresh dropdown menu position | |

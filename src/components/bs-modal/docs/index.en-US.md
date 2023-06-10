---
category: Components
type: feedback
typeCode: feedback
title: Modal
subtitle: Modal Popup
---

Inform the user and host related operations while preserving the current page state

## API

### Modal property

| Parameter | Description | Type | Default |
|--------------------------|------------------------------------------------------------------|------------------------------------------|------|
| visible(v-model:visible) | Used to control the pop-up window visible | boolean | false |
| teleported | Whether to use teleport. If set to true, it will be appended to the position of append-to | boolean | true |
| appendTo | Node to which the Modal dom will be appended | `string`/`dom` | body |
| transitionName | transition animation name | string | fade |
| title | title | `string`/`() => stirng｜vnode`/`vnode` | |
| width | popup window width | string | |
| size | popup window size | `xl`(extra large)/`lg`(large)/`sm`(small) | |
| centered | Whether to display in the center | boolean | false |
| mask | Whether to display the mask | boolean | true |
| keyboard | whether to support keyboard esc off | boolean | true |
| maskClosable | Whether the click mask is closed | boolean | true |
| lockScroll | Whether to lock the scroll bar | boolean | true |
| fullscreen | Whether full screen | boolean | false |
| draggable | Whether dragging is possible | boolean | false |
| boundary | Whether dragging cannot exceed the boundary | boolean | true |
| scrollable | Whether the content part of the popup window is scrollable | boolean | false |
| showFooter | whether to show the bottom | boolean | true |
| showClose | Whether to show the close button | boolean | true |
| lazy | whether the first render is delayed | boolean | true |
| destroyOnClose | Whether to destroy the elements of the popup when the popup is closed | boolean | false |
| confirmLoading | whether to disable closing, if the value is true, it cannot be closed in any way, this function can be used in the scene where data is being submitted | boolean | false |
| okText | OK button text | string | OK |
| cancelText | cancel button text | string | cancel |
| onOk | Confirm button click event, if the event function returns `Promise` after execution, the popup window will be closed after the state of Promise becomes `fulfilled` | () => any | |

### Modal Events

| Event Name | Description | Callback Parameters |
|-------|----------|------|
| open | Callback after the popup window is displayed | |
| close | Callback after the popup window is closed | |

### Modal slot

| Slot Name | Description | Version |
|------------|----------|-----|
| header | header slot | |
| close | close button content slot | |
| footer | bottom button slot | |

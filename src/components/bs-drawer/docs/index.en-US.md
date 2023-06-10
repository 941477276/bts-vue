---
category: Components
type: feedback
typeCode: feedback
title: Drawer
subtitle: drawer
---

The floating layer panel that slides out from the edge of the screen. Sometimes, the `Modal` component does not meet our needs, such as your form is very long, or you need to temporarily display some documents, `Drawer` has almost the same as `Modal` The API brings a different experience on the UI.

## API

### Drawer property

| Parameter | Description | Type | Default |
|--------------------------|-------------------------------------------|---------------------------------------|-------|
| visible(v-model:visible) | used to control the visibility of the drawer | boolean | false |
| teleported | Whether to use teleport. If set to true, it will be appended to the position of append-to | boolean | true |
| appendTo | Node to which Drawer dom will be appended | `string`/`dom` | body |
| transitionName | transition animation name | string | slide |
| title | title | `string`/`() => stirng｜vnode`/`vnode` | |
| width | popup window width | string | |
| placement | The orientation of the drawer | `left`/`top`/`bottom`/`right` | right |
| centered | Whether to display in the center | boolean | false |
| mask | Whether to display the mask | boolean | true |
| keyboard | whether to support keyboard esc off | boolean | true |
| maskClosable | Whether the click mask is closed | boolean | true |
| lockScroll | Whether to lock the scroll bar | boolean | true |
| showHeader | Whether to show the header | boolean | true |
| showFooter | whether to show the bottom | boolean | true |
| showClose | Whether to show the close button | boolean | true |
| lazy | whether the first render is delayed | boolean | true |
| destroyOnClose | Whether to destroy the elements of the popup when the popup is closed | boolean | false |
| closeDisabled | Whether to disable the close, if the value is true, it cannot be closed in any way, this function can be used in the scene of submitting data | boolean | false |
| drawerClass | extra classname | `string`/`object`/`array` | |

### Drawer Events

| Event Name | Description | Callback Parameters |
|-------|----------|------|
| open | callback after the drawer is displayed | |
| close | callback after the drawer is closed | |

### Drawer slot

| Slot Name | Description | Version |
|------------|----------|-----|
| header | header slot | |
| close | close button content slot | |
| footer | bottom slot | |

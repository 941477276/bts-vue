---
category: Components
type: feedback
typeCode: feedback
title: Toast
subtitle: Lightweight notification
---

Display notification reminder information globally

## API

The component provides some static methods, the usage and parameters are as follows:
+ BsToast(options: ToastOption, context?: AppContext) => {id: string; show: () => void;; show: () => void;}
+ BsToast.primary(options: ToastOption, context?: AppContext) => {id: string; show: () => void;; show: () => void;}
+ BsToast.secondary(options: ToastOption, context?: AppContext) => {id: string; show: () => void;; show: () => void;}
+ BsToast.success(options: ToastOption, context?: AppContext) => {id: string; show: () => void;; show: () => void;}
+ BsToast.danger(options: ToastOption, context?: AppContext) => {id: string; show: () => void;; show: () => void;}
+ BsToast.warning(options: ToastOption, context?: AppContext) => {id: string; show: () => void;; show: () => void;}
+ BsToast.info(options: ToastOption, context?: AppContext) => {id: string; show: () => void;; show: () => void;}
+ BsToast.light(options: ToastOption, context?: AppContext) => {id: string; show: () => void;; show: () => void;}
+ BsToast.dark(options: ToastOption, context?: AppContext) => {id: string; show: () => void;; show: () => void;}

The `options` object properties are as follows

| Parameter | Description | Type | Default |
|--------------------------|-----------------------------------|-----------------------------------------------------------------------------------|--------------|
| type | topic type | `primary`/ `secondary`/ `success`/ `danger`/ `warning`/ `info`/ `light`/ `dark` / | |
| title | title | `string`/`vnode`/`() => vnode｜string ` | |
| secondaryTitle | secondary title | `string`/`vnode`/`() => vnode｜string` | |
| message | content | `string`/`vnode`/`() => vnode｜string` | |
| placement | display position | `top-left`/`top-right`/`top-center`/`bottom-left`/`bottom-right`/`bottom-center` | top-right |
| id | message ID | string | |
| style | custom style | `string`/`object` | |
| fixed | Whether to use `fixed` positioning | boolean | true |
| dangerouslyUseHTMLString | Whether to treat the message attribute as an HTML fragment | boolean | false |
| duration | Display time in milliseconds. Set to 0 will not automatically close | number | 3000 |
| customClass | custom classname | `string`/`object` | |
| showClose | Whether to show the close button | boolean | true |
| offsetTop | Toast's offset from the top of the window (unit: px) | number | 20 |
| offsetLeft | toast The offset from the right side of the window, if it is 0, it will not be set (unit: px) | number | |
| teleported | Set the root element of the Message component, the default is document.body | `string`/`HTMLElement` | body |
| appendTo | Set the root element of the Message component, the default is document.body | `string`/`HTMLElement` | body |
| transitionName | transition effect name | stirng | bs-toast-fade |
| onShow | callback function when showing | (evt: Event) => void | false |
| onHide | callback function when closed | (evt: Event) => void | false |
| onClick | Callback function when clicked | (evt: Event) => void | false |

### Toast Events

| Event Name | Description | Callback Parameters |
|--------------|-------------|------|
| show | Callback function when displaying | |
| hide | Callback function when closing | |
| click | Callback function when clicked | |

### Toast slot

| Slot Name | Description | Version |
|--------------|--------------------------|-----|
| header | custom header | |
| title | custom title (invalid when header slot is passed) | |
| secondaryTitle | Custom secondary title (invalid when header slot is passed) | |
| close | Custom close button | |
| default | custom message | |


### Toast other global methods

| function name | description | parameters |
|--------------|--------|----------------|
| BsToast.show | Show notification | `toastId`, notification ID |
| BsToast.hide | hide notification | `toastId`, notification ID |
| BsToast.hideAll | Hide all notifications | |

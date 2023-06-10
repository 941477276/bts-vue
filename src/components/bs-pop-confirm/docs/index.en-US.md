---
category: Components
type: feedback
typeCode: feedback
title: PopConfirm
subtitle: bubble confirmation
---

Click on the element to pop up a bubble confirmation box

## API

### PopConfirm property

| Parameter | Description | Type | Default |
|--------------------|----------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|----------|
| trigger | trigger method | `click`/`hover`/`focus`/`contextmenu` | hover |
| placement | display position, reference: [popper.js parameters](https://popper.js.org/docs/v2/) | `top`/`top-start`/`top-end`/`bottom` /`bottom-start`/`bottom-end`/`left`/`left-start`/`left-end`/`right`/`right-start`/`right-end` | bottom |
| teleported | Whether to use teleport. If set to true, it will be appended to `append-to` | boolean | true |
| appendTo | Specifies which element the PopConfirm dom will be appended to | `string`/`dom` | body |
| visible | Whether the tooltip is displayed, if the value is `boolean` type, then the tooltip is controlled mode | `boolean` | false |
| showCondition | The condition to display, if the function returns `false` it will not be displayed | `() => boolean` | |
| hideCondition | The condition when hiding, if the function returns `false` it will not be displayed | `() => boolean` | |
| content | The displayed content can also be passed to the DOM via `slot#content` | `string`/`number` | |
| isRawContent | Whether the content in content is processed as an HTML string | boolean | false |
| disabled | Whether to disable | boolean | false |
| hideDisabled | Whether to disable | boolean | false |
| enterable | Whether the mouse can enter the tooltip | boolean | true |
| destroyOnHide | Whether to destroy the content after hiding | boolean | false |
| transitionName | The name of the transition animation | string | fade |
| showArrow | whether to show the triangle arrow | boolean | true |
| popperClass | extra classname for popper | `string`/`array`/`object` | |
| popperStyle | style of popper | `string`/`array`/`object` | |
| arrowClass | Triangular arrow extra classname | string | |
| virtualTriggering | Whether to trigger by virtual elements, reference: [popper.js parameters](https://popper.js.org/docs/v2/virtual-elements/) | boolean | false |
| virtualRef | The ref of the triggering element, only valid when `virtualTriggering=true`, reference: [popper.js parameters](https://popper.js.org/docs/v2/virtual-elements/) | `string( css selector)`/`() => dom`/`dom`/`object` | |
| showDelay | display delay time, in milliseconds | number | 100 |
| hideDelay | hide delay time, in milliseconds | number | 100 |
| offset | The offset of where popper appears, refer to: [popper.js parameters](https://popper.js.org/docs/v2/modifiers/offset/) | number[] | [0, 8] |
| arrowOffset | The offset of the triangular arrow, reference: [popper.js parameters](https://popper.js.org/docs/v2/modifiers/arrow/) | number | 5 |
| strategy | popper positioning strategy, the default is absolute. If the reference element that triggers the popper is in a fixed positioned element, you should use fixed | `absolute`/`fixed` | absolute |
| gpuAcceleration | Whether to use GPU accelerated style to target popper. If enabled, transform: translate will be used for positioning, otherwise top/left will be used for positioning | boolean | true |
| popperOptions | For other parameters of popperjs, see: [popper.js parameters](https://popper.js.org/docs/v2/) | object | {} |
| width | maximum width | `string`/`number` | |
| okText | Confirm button text | string | OK |
| okType | Confirm button type | `primary`/ `secondary`/ `success`/ `danger`/ `warning`/ `info`/ `light`/ `dark` /`link` | primary |
| okButtonProps | other parameters of the confirmation button | object | {} |
| cancelText | cancel button text | string | cancel |
| cancelType | cancel button type | `primary`/ `secondary`/ `success`/ `danger`/ `warning`/ `info`/ `light`/ `dark` /`link` | |
| cancelButtonProps | other parameters of the cancel button | object | {} |
| showCancel | whether to show the cancel button | boolean | true |
| showIcon | whether to show icon | boolean | true |
| hideDisabled | Whether to disable hiding | boolean | false |
| hideOnConfirmed | Whether to hide automatically after confirmation is completed | boolean | true |

### PopConfirm event

| Event Name | Description | Callback Parameters |
|--------------------|------------------------------------|------|
| before-show | Triggered before the tooltip is displayed | |
| show | Triggered after the tooltip is displayed | |
| before-hide | trigger before tooltip is hidden | |
| hide | Triggered after the tooltip is hidden | |
| content-mouseenter | Triggered when the mouse moves into the tooltip content, same as the mouseenter event of DOM | |
| content-mouseleave | Triggered when the mouse moves into the tooltip content, same as the mouseenter event of DOM | |

### PopConfirm slot

| Slot Name | Description | Version |
|---------|------|-----|
| icon | icon | |
| content | content | |
| cancel-button | cancel button | |
| ok-button | OK button | |

### PopConfirm function

| function name | description | parameters |
|------|--------|-----|
| show | Show bubble card | |
| hide | hide bubble card | |

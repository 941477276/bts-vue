---
category: Components
type: universal
typeCode: generic
title: Dropdown
subtitle: drop-down menu
---

A drop-down menu that can intelligently and automatically adjust the display position and supports dynamic loading of drop-down content

## API

### Dropdown property

| Parameter | Description | Type | Default |
|-----------------------|--------------------------------------------------------------------|-------------------------------------------------------------------------------|-----------|
| placement | drop-down menu popup position | `left`/`top`/`bottom`/`right`/`leftEnd`/`topEnd`/`bottomEnd`/`rightEnd` | bottom |
| tryReverseDirection | Whether to try to display in the reverse direction when the drop-down menu cannot be fully displayed at the specified `direction` | boolean | true |
| tryAllDirection | Whether to try to display in all directions when the dropdown menu cannot be fully displayed in the specified `direction` | boolean | true |
| trigger | How to trigger the dropdown menu | `click`/`hover`/`contextMenu` | hover |
| disabled | Whether to disable the state | boolean | false |
| lazy | Whether to delay rendering | boolean | true |
| teleported | Whether to use teleport, if the value is `true`, the dom of the drop-down menu will be sent to `appendTo` | boolean | true |
| appendTo | the parent element to which the drop-down menu dom node will be sent | string | body |
| showToggleArrow | Whether the target element that triggers the dropdown menu shows a downward triangle | boolean | true |
| destroyOnHide | Whether to destroy the dropdown menu when hidden | boolean | false |
| dropdownClass | extra class for dropdown | string | |


### Dropdown event

| Event Name | Description | Callback Parameters |
|--------------|------------------------|------|
| show | Triggered when the dropdown menu is shown | |
| hide | Triggered when the dropdown menu is hidden | |
| clickOutside | Click on a place other than a drop-down menu and trigger element to trigger | |


### Dropdown function

| function name | description | parameters |
|------|------------|----------------------------|
| show | Show drop-down menu | |
| hide | Hide dropdown menu | |


### DropdownItem property

| Parameter | Description | Type | Default |
|-----------------|----------------------|----------------------|-------|
| disabled | Whether to disable the state | boolean | false |
| divider | Whether to display lines | boolean | false |
| active | whether it is active | boolean | false |

### DropdownItem event

| Event Name | Description | Callback Parameters |
|--------------|---------------------|-------------------|
| click | click event | (evt: ClickEvent) |

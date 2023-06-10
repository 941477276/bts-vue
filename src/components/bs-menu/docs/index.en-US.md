---
category: Components
type: navigation
typeCode: navigation
title: Menu
subtitle: Navigation Menu
---

Menu list providing navigation for pages and functions

## API

### Menu property

| Parameter | Description | Type | Default |
|---------------------------------------|------------------------------------|-------------------------------|------------|
| selectedKeys(v-model:selectedKeys) | Binding value, selected menu item key array | `string`/`string[]` | [] |
| mode | menu type | `horizontal`/`vertical`/`h5` | horizontal |
| subMenuDisplayMode | Submenu display mode | `collapse`/`dropdown`/`drawer` | |
| subMenuTrigger | The trigger method for submenu opening (only valid when `mode=horizontal`) | `click`/`hover` | |
| collapse | Whether to collapse the collapsed menu horizontally (only available when `mode=vertical`) | Boolean | false |
| uniqueOpened | Whether to keep only one opened submenu at the same level | Boolean | false |
| openedKeys | The currently expanded SubMenu menu item key array | string[] | [] |
| indent | indent width of menu in vertical mode | number | 16 |
| indentUnit | The unit of the indent width when the menu is in vertical mode | string | px |
| closeable | closeable | boolean | false |
| autoScrollToSelectedMenu | Whether to automatically scroll to the first selected menu, only valid when mode=vertical and there is a scroll bar | boolean | true |

### Menu Events

| Event Name | Description | Callback Parameters |
|----------|---------------|-------------------------------------------------------------------------------------------|
| openChange | Triggered when the menu is expanded/collapsed | function(currentKeyIndex: any, isOpen: boolean, keyIndexPath: {keyIndex: any, name: stirng}[]) |
| itemClick | Triggered when a menu item is clicked | function(itemInfo: {keyIndex: any, name: stirng}, event: MouseEvent) |
| select | Triggered when a menu item is selected or unselected | function(keyIndex: string, isSelected: boolean, keyIndexPath: {keyIndex: any, name: stirng}[]) |

### MenuItem property

| Parameter | Description | Type | Default |
|-----------|-----------------------|---------------------------|-------|
| label | title | string | |
| keyIndex | unique identifier, required | string | |
| disabled | Whether to disable | boolean | false |

### MenuItem Events

| Event Name | Description | Callback Parameters |
|----------|---------|---------------------------- ---|
| click | Triggered when the menu is clicked | function(itemInfo: {keyIndex: any, name: stirng}, event: MouseEvent) |

### MenuItem slot

| Slot Name | Description | Version |
|---------|-------|-----|
| icon | custom icon | |
| default | custom title | |
| content | other content | |

### SubMenu property

| Parameter | Description | Type | Default |
|-----------------|-----------------------|---------------------------|-------|
| label | title | string | |
| keyIndex | unique identifier, required | string | |
| disabled | Whether to disable | boolean | false |
| dropdownClass | classname of the dropdown submenu | `string`/`array`/`object` | |

### SubMenu event

| Event Name | Description | Callback Parameters |
|----------|-----------|-------------------------------|
| expand | Triggered when the menu is expanded | function(componentId: string) |

### SubMenu slot

| Slot Name | Description | Version |
|-------|-------|-----|
| icon | custom icon | |
| title | custom title | |
| arrow | triangular arrow | |

### SubMenu function

| function name | description | parameters |
|------|-------------|-----------------------------|
| expandSubmenu | expand/collapse menu | `expand`, whether to expand the menu, if the value is `true`, it will be expanded |


### MenuItemGroup property

| Parameter | Description | Type | Default |
|------------|------------------------|---------------------------|-------|
| label | title | string | |
| keyIndex | unique identifier, required | string | |

### MenuItemGroup slot

| Slot Name | Description | Version |
|---------|-------|-----|
| title | custom title | |

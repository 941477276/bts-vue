---
category: Components
type: universal
typeCode: generic
title: Button
subtitle: button
---

Commonly used buttons

## API

### Button properties

| Parameter | Description | Type | Default |
|--------------------------------|-------------------------------------------|-----------------------------------------------------------------------| --------|
| type | button type | `primary`/ `secondary`/ `success`/ `danger`/ `warning`/ `info`/ `light`/ `dark` /`link` | |
| disabled | Whether to disable the state, the default is false | boolean | false |
| loading | Whether it is loading state, the default is false | boolean | false |
| tag | tag name | string | button |
| nativeType | native button type | string | button |
| clearable | Whether the content can be cleared, the default is false | boolean | false |
| size | Input box size. optional `lg`, `sm` | string | `` |
| plain | Whether it is a plain button | boolean | false |
| block | Whether it is a block-level button, the width of the block-level button occupies the entire parent level | boolean | false |
| round | Whether to round the button | boolean | false |
| squared | whether flat button | boolean | false |
| disabledOnLoading | Whether the button is disabled when the state is loading | boolean | true |
| dropdownToggle | whether it is a dropdown menu toggle button | boolean | false |
| showToggleSplit | Whether to show the split line for the drop-down menu toggle button | boolean | false |


### Button slot

| Slot Name | Description |
|---------|--------------------------------------------------|
| loading | Contents of the loading state |

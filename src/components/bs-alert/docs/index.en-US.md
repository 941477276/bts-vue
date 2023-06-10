---
category: Components
type: feedback
typeCode: feedback
title: Alert
subtitle: Warning
---

Warning prompt, used to display important prompt information on the page

## API

### Alert property

| Parameter | Description | Type | Default |
|----------|-----------------------------------------|------------------------------------------------------------------------------------|------------|
| type | color type | `primary`/ `secondary`/ `success`/ `danger`/ `warning`/ `info`/ `light`/ `dark` | primary |
| title | title | string | |
| description | Auxiliary text. Can also be passed in through the `description` slot | string | |
| closeable | closeable | boolean | false |
| closeText | close button text | string | |
| beforeClose | The callback before closing, if the callback returns false, or returns Promise.reject, it will not be closed | function | |


### Alert Events

| Event Name | Description | Callback Parameters |
|-------|------------|-----------|
| close | Triggered when the warning prompt is closed | |

### Alert Slot

| Slot Name | Description | Version |
|-----------|----------------------------------------------------------|-----|
| icon | icon slot | |
| description | Auxiliary text slot | |
| default | title slot if `props.description` has value, or `description` slot, otherwise content slot | |

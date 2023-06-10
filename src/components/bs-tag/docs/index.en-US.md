---
category: Components
type: data display
typeCode: data_display
title: Tag
subtitle: label
---

Labels are usually used to display some attributes, or to classify, or to mark

## API

### Tag attribute

| Parameter | Description | Type | Default |
|----------------|----------------|-----------------------------------------------------------------------------------------|-------|
| type | button type | `primary`/ `secondary`/ `success`/ `danger`/ `warning`/ `info`/ `light`/ `dark` /`link` | |
| size | tag size | `lg`/`sm`/`mini` | |
| effect | theme | `dark`/`light`/`plain` | light |
| color | custom color | string | |
| closeable | closeable | boolean | false |

### Tag event

| Event Name | Description | Callback Parameters |
|---------------|-----------------------------------------------------------------------------|------|
| close | Triggered when the tag is closed, if the function returns `Promise` then the tag will be closed after the Promise state becomes `fulfilled`. If the function returns `false` the label will not be closed | |

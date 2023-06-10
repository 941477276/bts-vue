---
category: Components
type: data display
typeCode: data_display
title: Collapse
subtitle: Accordion panel
---

Content area that can be collapsed/expanded

## API

### Collapse property

| Parameter | Description | Type | Default |
|----------------------|--------------------------------|-------------------------------------|-------|
| modelValue(v-model) | The name of the currently active panel, you can use `v-model` two-way binding | `string`/`number`/`string丨number[]` | |
| accordion | Whether to enable the accordion mode, after enabling at most one panel at a time | boolean | false |
| simple | Whether it is simple mode | boolean | false |
| headerFocusEffect | Whether to enable the head highlight effect | boolean | true |

### Collapse event

| Event Name | Description | Callback Parameters |
|----------|------------|----------------------------------------------------------|
| change | Triggered when the panel is collapsed/expanded | function(name: string, expanded: boolean, value: any) |


### CollapseItem property

| Parameter | Description | Type | Default |
|--------------------|---------------------------|------------------|-------|
| title | title | `string`/`number` | |
| name | name (the identifier corresponding to the bound value modelValue) | string | |
| showArrow | Whether to show arrows | boolean | true |
| disabled | Whether to disable | boolean | false |
| arrowLeft | whether the arrow is on the left | boolean | false |

### CollapseItem slot

| Slot Name | Description | Version |
|-----|-----------------------|-----|
| title | title | |

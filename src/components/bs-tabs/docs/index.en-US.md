---
category: Components
type: data display
typeCode: data_display
title: Tabs
subtitle: tab page
---

Data collections that are related but belong to different categories on separate content

## API

### Tabs property

| Parameter | Description | Type | Default |
|-----------------------|----------------------------------------------------------|-------------------------------|-------|
| modelValue(v-model) | Binding value, the name of the selected tab | string | 0 |
| tabPosition | position of the tab | `top`/`left`/`right`/`bottom` | top |
| triggerTypeOnOverflow | When the width of the tab navigation list exceeds the parent container, the way to select the overflow tab navigation | `auto`/`more`/`button` | auto |
| hiddenTabsGreaterThan | When triggerTypeOnOverflow is auto, 'more' will be used only when the number of hidden tab navigation reaches this threshold | number | 10 |
| tabBarMaxHeight | The maximum height of tab navigation, less than or equal to 0 is invalid | `string`/`number` | 0 |
| inkBarSpaceBetween | The length of the label navigation highlight bar extending to both ends, less than or equal to 0 is invalid | number | 0 |
| closeable | closeable | boolean | false |

### Tabs event

| Event Name | Description | Callback Parameters |
|----------|-------------|---------------------|
| close | Triggered when the tab is closed | function(tabName: string) |

### TabPane properties

| Parameter | Description | Type | Default |
|--------------------|----------------------------------|---------------------|-------|
| label | tab title | `string`/`function` | |
| name | tab name (identifier corresponding to tab binding value modelValue) | string | |
| closeable | closeable | boolean | false |
| disabled | Whether to disable | boolean | false |
| lazy | Whether to delay rendering of tab content | boolean | false |
| contentLazyRender | The content is rendered in a lazy manner, it will only be rendered after the first selection | boolean | true |

### TabPane slot

| Slot Name | Description | Version |
|-----------------|-----------------------|----- |
| left-extra | extra content on the left | |
| right-extra | right extra content | |
| label | tab title | |

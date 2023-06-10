---
category: Components
type: data entry
typeCode: data_input
title: Slider
subtitle: slider
---

Slider

## API

### Slider properties

| Parameter | Description | Type | Default |
|---------------------|-------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|-------|
| modelValue(v-model) | Number input box content | `string`/`number`/`array` | 0 |
| min | minimum value | number | 0 |
| max | maximum value | number | 100 |
| disabled | Whether to disable the state, the default is false | boolean | false |
| vertical | vertical mode | boolean | false |
| range | double slider mode | boolean | false |
| rangeMin | The minimum value of the difference between two slider values | number | |
| rangeMax | maximum value of difference between two slider values | number | |
| step | Step size, must be greater than 0. When marks is not an empty object, step can be set to null. At this time, the optional value of Slider is only the part marked by marks. | number | 1 |
| showSteps | whether to show breaks | boolean | false |
| included | When there are marks or showSteps, if the value is true, it means the value is included, and if false, it means parallel | boolean | true | |
| enableCross | Whether to allow crossing, only valid in range mode | boolean | true | |
| marks | Scale mark, the type of key must be number and the value must be in the closed interval [min, max], each label can be styled separately | { number: string｜{label:string｜vnode; style: object; } } | {} | |
| showToolTip | Whether to display the tooltip, if it is true, it will always be displayed, otherwise it will not be displayed | boolean | | |
| tooltipTransitionName | transition name of tooltip | string | scale | |
| tooltipPlacement | Display position of tooltip | `top`/`top-start`/`top-end`/`bottom`/`bottom-start`/`bottom-end`/`left`/`left-start`/ `left-end`/`right`/`right-start`/`right-end` | | |
| tooltipClass | class name of tooltip | string | | |
| tooltipFormatter | tooltip display text formatting function, if return null, hide tooltip | (modelVal: any, percentage: number) => string｜number｜null｜void | | |
| tooltipRawContent | whether the content of tooltip is html text | boolean | false | |

### Slider Events

| Event Name | Description | Callback Parameters |
|--------|-----------|--------------------------------|
| change | Callback when slider value changes | function(value: number｜string) |

---
category: Components
type: data entry
typeCode: data_input
title: Switch
subtitle: switch
---

Represents a switch between two opposing states, mostly used to trigger "on/off"

## API

### Switch property

| Parameter | Description | Type | Default |
|---------------------|------------------------------------------------|--------------------------------------------------------------------------------|------|
| modelValue(v-model) | value to which the switch is bound | `string`/`number`/`boolean` | false |
| disabled | Whether to disable the state, the default is false | boolean | false |
| loading | whether it is loading | boolean | false |
| size | Input box size. optional `lg`, `sm` | string | |
| colorType | background color type | `primary`/ `secondary`/ `success`/ `danger`/ `warning`/ `info`/ `light`/ `dark` | |
| loadingColorType | The color type of the rotating icon during loading | `primary`/ `secondary`/ `success`/ `danger`/ `warning`/ `info`/ `light`/ `dark` | primary |
| activeValue | value when switch is on | `string`/`number`/`boolean` | true |
| inactiveValue | value when switch is off | `string`/`number`/`boolean` | false |
| activeText | text description when the switch is open | string | |
| inactiveText | Text description when the switch is closed | string | |
| activeColor | background color when the switch is open | string | |
| inactiveColor | background color when switch is closed | string | |
| name | the name property of the switch | string | |
| extraData | Extra data, which will be passed when calling `beforeChange` | any | |
| beforeChange | The callback function before the switch state changes, if it returns false or promise.reject, it will not change | function | |
| validateEvent | Whether to trigger form validation when changing the switch state | boolean | true |

### Switch Events

| Event Name | Description | Callback Parameters |
|---------|-------------|--------------------------------------|
| change | Triggered when the switch value changes | function(val: string｜number｜boolean) |
| click | Triggered when clicked | |

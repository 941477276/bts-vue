---
category: Components
type: tool component
typeCode: tool_component
title: DropdownTransition
subtitle: drop down transition
---

The most basic drop-down component, you can use it to implement any component with drop-down function

## API

### DropdownTransition property

| Parameter | Description | Type | Default |
|----------------------|---------------------------------------------------------|-------------------------------------------------------------------------|----------|
| placement | drop-down menu popup position | `left`/`top`/`bottom`/`right`/`leftEnd`/`topEnd`/`bottomEnd`/`rightEnd` | bottom |
| referenceRef | Reference element (that is, the element that triggers the drop-down) | Ref<HtmlElement｜VueComponent > | |
| willVisible | Whether the drop-down menu will be displayed soon, this value needs to be set `50ms` before the drop-down menu is displayed, so that the component can calculate the real display position of the drop-down menu more accurately | boolean | false |
| tryEndDirection | Whether to try the `end` direction of the `direction` direction when the drop-down menu cannot be fully displayed at the specified `direction` position | boolean | true |
| tryAllDirection | Whether to try to display in all directions when the dropdown menu cannot be fully displayed in the specified `direction` | boolean | true |
| useZoomTransition | Whether to use the zoom transition effect, if the value is `true`, then no matter where the drop-down menu is displayed, the drop-down menu will transition with the zoom effect | boolean | false |
| position | drop-down menu positioning method | string | absolute |
| setWidth | Whether to set the width of the drop-down menu equal to the width of the reference element | boolean | false |
| setMinWidth | Whether to set the minimum width of the drop-down menu equal to the width of the reference element | boolean | false |
| offset | The offset of the dropdown menu from the reference element | { top?: number; left?: number; } | false |
| customTransitionName | drop-down menu custom transition name | (direction) => string | |
| customStyle | custom drop-down menu style | (direction) => string | |


### DropdownTransition event

| Event Name | Description                                        | Callback Parameters |
|--------------|----------------------------------------------------|------|
| before-enter | Same as `transition` component before-enter event  | |
| enter | Same as `transition` component enter event         | |
| after-enter | same as `transition` component after-enter event   | |
| before-leave | same as `transition` component before-leave event  | |
| leave | Same as `transition` component leave event         | |
| after-leave | Same as `transition` component after-leave event   | |
| position-change | drop-down menu position information `change` event | function (positionInfo: object) |


### DropdownTransition function

| function name | description | parameters |
|------|--------|----------------------------|
| refresh | Refresh positioning | |

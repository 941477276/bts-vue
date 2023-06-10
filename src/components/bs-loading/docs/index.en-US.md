---
category: Components
type: feedback
typeCode: feedback
title: Loading
subtitle: Loading
---

Display animation when loading data to remind users that data is loading.

## Service mode call

BsLoading can be invoked not only in command mode, but also in service mode, such as:
```javascript
import { BsLoading } from 'bts-vue';

let loadingInstance = BsLoading(options);

// display loading
// loadingInstance. show();

// hide loading
// loadingInstance.hide();
```

The `options` object properties are as follows

| Parameter | Description | Type | Default |
|---------------------------|----------------------------------|--------------------------------------|-------|
| text | prompt text | stirng | |
| lock | Whether to lock the scroll bar of the container | boolean | true |
| grow | whether it is a growing spinner | boolean | false |
| vertical | Whether to align vertically | boolean | false |
| fullscreen | whether it is global loading | boolean | false |
| target | The DOM node that Loading needs to cover, when called in service mode | `string(css selector)`/`object(dom)` | |
| color | font color | string | |
| background | background color | vnode | |
| customClass | custom class name | vnode | |
| style | custom style | object | {} |
| transitionName | transition effect name | string | fade |
| dangerouslyUseHTMLString | Whether to treat the message attribute as an HTML fragment | boolean | false |
| duration | Display time in milliseconds. Set to 0 will not automatically close | number | 3000 |
| customClass | custom classname | string | |

### BsLoading instance method

| function name | description | parameters |
|--------------|-----------|---------------------|
| show | Show Loading | |
| hide | Hide Loading | |
| destroy | destroy loading | |
| updateProps | update options | (newProps: options) |

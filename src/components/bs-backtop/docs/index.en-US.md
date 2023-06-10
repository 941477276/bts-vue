---
category: Components
type: other
typeCode: other
title: BackTop
subtitle: back to top
---

An action that returns to the top of a page or container

## API

### BackTop property

| Parameter | Description | Type | Default |
|--------------------|---------------------------|----------------------------------------------------|--------|
| target | Set the element whose scroll event needs to be monitored | `string(css elector)`/`object(dom)`/`() => dom` | window |
| visibilityHeight | The button will only be displayed when the scroll height reaches this parameter value, which supports fixed value and percentage | `string`/`number` | 400 |
| useFixedPosition | whether to use fixed position | boolean | false |
| duration | Scroll duration, unit: millisecond | number | 150 |
| top | trigger element's style.top value, support fixed value, percentage | `string`/`number` | |
| right | trigger element's style.right value, support fixed value, percentage | `string`/`number` | |


### BackTop event

| Event Name | Description | Callback Parameters |
|--------|--------|----------------|
| complete | Scroll complete event | |

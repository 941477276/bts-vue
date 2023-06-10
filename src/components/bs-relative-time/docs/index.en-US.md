---
category: Components
type: other
typeCode: other
title: RelativeTime
subtitle: relative time
---

Displays how long the specified time has passed relative to the current time. It is often used to represent the time description of a few minutes ago, a few hours ago, etc. relative to this moment.

## API

### RelativeTime property

| Parameter | Description | Type | Default |
|--------------------|---------------------------|-----------------------------------------------------------------------------|----------|
| time | time | `string`/`Date`/`number` | |
| viewType | display type | `relative`/`date`/`datetime` | relative |
| interval | automatic update time, unit: second | number | 60 |
| duration | Scroll duration, unit: millisecond | number | 150 |
| format | format template, only valid for date and datetime | string, refer to [dayjs format](https://day.js.org/docs/en/parse/string-format) | |
| lang | language | string, supported languages refer to [dayjs local](https://github.com/iamkun/dayjs/tree/dev/src/locale) | |

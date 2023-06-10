---
category: Components
type: 其他
typeCode: other
title: RelativeTime
subtitle: 相对时间
---

显示指定时间相对于当前时间过去了多久，常用于表示几分钟前、几小时前等相对于此时此刻的时间描述。

## API

### RelativeTime 属性

| 参数                | 说明                        | 类型                                                                          | 默认值      | 
|-------------------|---------------------------|-----------------------------------------------------------------------------|----------|
| time            | 时间            | `string`/`Date`/`number`                                                    |          |
| viewType  | 显示类型 | `relative`/`date`/`datetime`                                                | relative |
| interval  | 自动更新时间，单位：秒               | number                                                                      | 60       |
| duration          | 滚动持续时间，单位：毫秒              | number                                                                      | 150      | 
| format               | 格式化模板，只对date、datetime有效                 | string，参照[dayjs format](https://day.js.org/docs/en/parse/string-format)     |          |
| lang             | 语言             | string，支持的语言参照[dayjs local](https://github.com/iamkun/dayjs/tree/dev/src/locale) |          |

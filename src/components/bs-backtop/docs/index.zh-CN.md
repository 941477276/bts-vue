---
category: Components
type: 其他
typeCode: other
title: BackTop
subtitle: 返回顶部
---

返回页面或容器顶部的操作

## API

### BackTop 属性

| 参数                | 说明                        | 类型                                              | 默认值    |
|-------------------|---------------------------|-------------------------------------------------|--------|
| target            | 设置需要监听其滚动事件的元素            | `string(css elector)`/`object(dom)`/`() => dom` | window |
| visibilityHeight  | 滚动高度达到此参数值才显示按钮，支持固定值、百分比 | `string`/`number`                               | 400    |
| useFixedPosition  | 是否使用fixed定位               | boolean                                         | false  |
| duration          | 滚动持续时间，单位：毫秒              | number                                          | 150    |
| top               | 触发元素的 style.top 值，支持固定值、百分比                    | `string`/`number`                               |  |
| right             | 触发元素的 style.right 值，支持固定值、百分比                    | `string`/`number`                               |  |


### BackTop 事件

| 事件名称   | 说明     | 回调参数       |
|--------|--------|----------------|
| complete  | 滚动完成事件 |   | 

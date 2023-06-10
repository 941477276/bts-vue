---
category: Components
type: 反馈
typeCode: feedback
title: Alert
subtitle: 警告
---

警告提示，用于页面中展示重要的提示信息

## API

### Alert 属性

| 参数       | 说明                                       | 类型                                                                              | 默认值        |
|----------|------------------------------------------|---------------------------------------------------------------------------------|------------|
| type     | 颜色类型                                     | `primary`/ `secondary`/ `success`/ `danger`/ `warning`/ `info`/ `light`/ `dark` | primary    |
| title     | 标题                                       | string                                                                          |     |
| description     | 辅助性文字。也可通过`description`插槽传入              | string                                                                          |     |
| closeable     | 是否可关闭                                    | boolean                                                                         | false      |
| closeText   | 关闭按钮文本                                   | string                                                                          |      |
| beforeClose   | 关闭前的回调，若回调返回false，或返回Promise.reject则不会关闭 | function                                                                        |      |


### Alert 事件

| 事件名称  | 说明         | 回调参数    |
|-------|------------| ----------- |
| close | 警告提示关闭时触发  |  |

### Alert 插槽

| 插槽名称        | 说明                                                      | 版本  |
|-------------|---------------------------------------------------------|-----|
| icon        | 图标插槽                                                    |     |
| description | 辅助性文字插槽                                                 |     |
| default     | 在`props.description`有值，或者有`description`插槽时为标题插槽，否则为内容插槽 |     |

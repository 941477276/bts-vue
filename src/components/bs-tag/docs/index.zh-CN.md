---
category: Components
type: 数据展示
typeCode: data_display
title: Tag
subtitle: 标签
---

标签通常用来展示一些属性，或进行分类，或标记

## API

### Tag 属性

| 参数             | 说明             | 类型                                                                                      | 默认值   |
|----------------|----------------|-----------------------------------------------------------------------------------------|-------|
| type           | 按钮类型           | `primary`/ `secondary`/ `success`/ `danger`/ `warning`/ `info`/ `light`/ `dark` /`link` |        |
| size           | tag大小          | `lg`/`sm`/`mini`                                                                        |      |
| effect         | 主题             | `dark`/`light`/`plain`                                                                  |  light   |
| color         | 自定义颜色             | string                                                                                  |     |
| closeable        | 是否可关闭 | boolean                                                                                 | false |

### Tag 事件

| 事件名称          | 说明                                                                         | 回调参数 |
|---------------|----------------------------------------------------------------------------|------|
| close         | 当标签关闭时触发，若函数返回`Promise`那么标签将在Promise状态变为`fulfilled`后关闭。若函数返回`false`标签将不会关闭 |      |

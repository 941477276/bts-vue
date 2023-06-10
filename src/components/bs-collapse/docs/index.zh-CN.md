---
category: Components
type: 数据展示
typeCode: data_display
title: Collapse
subtitle: 折叠面板
---

可以折叠/展开的内容区域

## API

### Collapse 属性

| 参数                   | 说明                              | 类型                                  | 默认值   | 
|----------------------|---------------------------------|-------------------------------------|-------|
| modelValue(v-model)  | 当前激活的面板的 name，可以使用`v-model`双向绑定 | `string`/`number`/`string丨number[]` |       | 
| accordion            | 是否开启手风琴模式，开启后每次至多展开一个面板         | boolean                             | false |
| simple               | 是否为简洁模式                         | boolean                             | false |
| headerFocusEffect    | 是否开启头部高亮效果                      | boolean                             | true  |

### Collapse 事件

| 事件名称     | 说明         | 回调参数                                                  | 
|----------|------------|-------------------------------------------------------|
| change     | 面板折叠/展开时触发 | function(name: string, expanded: boolean, value: any) |


### CollapseItem 属性

| 参数                | 说明                        | 类型                | 默认值   |
|-------------------|---------------------------|-------------------|-------|
| title             | 标题                        | `string`/`number` |       |
| name              | 名称（绑定值 modelValue 对应的标识符） | string            |       |
| showArrow         | 是否显示箭头                    | boolean           | true  |
| disabled          | 是否禁用                      | boolean           | false |
| arrowLeft              | 箭头是否在左侧               | boolean           | false |

### CollapseItem 插槽

| 插槽名称  | 说明                    | 版本  |
|-------|-----------------------|-----|
| title | 标题                 |     |

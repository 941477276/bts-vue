---
category: Components
type: 数据展示
typeCode: data_display
title: Tabs
subtitle: 标签页
---

分隔内容上有关联但属于不同类别的数据集合

## API

### Tabs 属性

| 参数                    | 说明                                                      | 类型                            | 默认值   |
|-----------------------|---------------------------------------------------------|-------------------------------|-------|
| modelValue(v-model)   | 绑定值，选中选项卡的 name                                         | string                        | 0     |
| tabPosition           | 标签的位置                                                   | `top`/`left`/`right`/`bottom` | top   |
| triggerTypeOnOverflow | 当标签导航列表宽度超出父容器时选择超出部分标签导航的方式                            | `auto`/`more`/`button`        | auto  |
| hiddenTabsGreaterThan | 当triggerTypeOnOverflow为auto时，隐藏掉的标签导航个数达到该阈值时才会使用'more' | number                        | 10    |
| tabBarMaxHeight       | 标签导航最大高度，小于等于0无效                                        | `string`/`number`             | 0     |
| inkBarSpaceBetween    | 标签导航高亮条向两端延伸的长度，小于等于0无效                                 | number                        | 0     |
| closeable             | 是否可关闭                                                   | boolean                       | false |

### Tabs 事件

| 事件名称     | 说明           | 回调参数              |
|----------|-------------|---------------------|
| close     | 标签页关闭时触发    | function(tabName: string)  |

### TabPane 属性

| 参数                | 说明                               | 类型                  | 默认值   |
|-------------------|----------------------------------|---------------------|-------|
| label             | 选项卡标题                            | `string`/`function` |       |
| name              | 选项卡名称（与选项卡绑定值 modelValue 对应的标识符） | string              |       |
| closeable         | 是否可关闭                            | boolean             | false |
| disabled          | 是否禁用                             | boolean             | false |
| lazy              | 选项卡内容是否延迟渲染                             | boolean             | false |
| contentLazyRender |  内容延迟渲染，只有在第一次选中后才会被渲染          | boolean             | true  |

### TabPane 插槽

| 插槽名称              | 说明                    | 版本  |
|-------------------|-----------------------|-----|
| left-extra        | 左侧额外的内容               |     |
| right-extra       | 右侧额外的内容               |     |
| label             | 选项卡标题                 |     |

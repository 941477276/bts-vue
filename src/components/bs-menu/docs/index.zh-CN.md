---
category: Components
type: 导航
typeCode: navigation
title: Menu
subtitle: 导航菜单
---

为页面和功能提供导航的菜单列表

## API

### Menu 属性

| 参数                                 | 说明                                 | 类型                            | 默认值        | 
|------------------------------------|------------------------------------|-------------------------------|------------|
| selectedKeys(v-model:selectedKeys) | 绑定值，选中的菜单项 key 数组                  | `string`/`string[]`           | []         |
| mode                        | 菜单类型                               | `horizontal`/`vertical`/`h5`  | horizontal |
| subMenuDisplayMode              | 子菜单展现形式                            | `collapse`/`dropdown`/`drawer` |            |
| subMenuTrigger              | 子菜单打开的触发方式(只在`mode=horizontal`时有效) | `click`/`hover`      |            |
| collapse              | 是否水平折叠收起菜单（仅在`mode=vertical`时可用）   | Boolean                       | false      |
| uniqueOpened              | 是否只保持同级的子菜单只有一个展开   | Boolean                       | false      |
| openedKeys                    | 当前展开的 SubMenu 菜单项 key 数组           | string[]                      | []         |
| indent                 | 菜单为垂直模式时的缩进宽度                      | number                        | 16         |
| indentUnit                 | 菜单为垂直模式时缩进宽度的单位                    | string                        | px         |
| closeable                          | 是否可关闭                              | boolean                       | false      |
| autoScrollToSelectedMenu      |  是否自动滚动到选中的第一个菜单，仅在mode=vertical并且有滚动条的情况下有效      | boolean      | true       |

### Menu 事件

| 事件名称     | 说明            | 回调参数                                                                                           |
|----------|---------------|------------------------------------------------------------------------------------------------|
| openChange     | 菜单展开/收起时触发    | function(currentKeyIndex: any, isOpen: boolean, keyIndexPath: {keyIndex: any, name: stirng}[]) |
| itemClick     | 菜单项点击时触发      | function(itemInfo: {keyIndex: any, name: stirng}, event: MouseEvent)                           |
| select     | 菜单项选中或取消选中时触发 | function(keyIndex: string, isSelected: boolean, keyIndexPath: {keyIndex: any, name: stirng}[]) |

### MenuItem 属性

| 参数          | 说明                    | 类型                        | 默认值   |
|-------------|-----------------------|---------------------------|-------|
| label       | 标题                    | string                    |       |
| keyIndex    | 唯一标识，必填               | string                    |       | 
| disabled    | 是否禁用                  | boolean                   | false |

### MenuItem 事件

| 事件名称     | 说明      | 回调参数                          | 
|----------|---------|-------------------------------|
| click     | 菜单点击时触发 | function(itemInfo: {keyIndex: any, name: stirng}, event: MouseEvent) |

### MenuItem 插槽

| 插槽名称    | 说明    | 版本  |
|---------|-------|-----|
| icon    | 自定义图标 |     |
| default | 自定义标题 |     |
| content | 其他内容  |     |

### SubMenu 属性

| 参数                | 说明                    | 类型                        | 默认值   | 
|-------------------|-----------------------|---------------------------|-------|
| label             | 标题                    | string                    |       |
| keyIndex              | 唯一标识，必填               | string                    |       |
| disabled          | 是否禁用                  | boolean                   | false |
| dropdownClass              | 下拉子菜单的classname       | `string`/`array`/`object` |  |

### SubMenu 事件

| 事件名称     | 说明        | 回调参数                          |
|----------|-----------|-------------------------------|
| expand     | 菜单展开时触发   | function(componentId: string) |

### SubMenu 插槽

| 插槽名称  | 说明    | 版本  |
|-------|-------|-----|
| icon  | 自定义图标 |     |
| title | 自定义标题 |     |
| arrow | 三角箭头  |     |

### SubMenu 函数

| 函数名称 | 说明          | 参数                          | 
|------|-------------|-----------------------------|
| expandSubmenu | 展开/收起菜单     | `expand`，是否展开菜单，值为`true`则展开 |


### MenuItemGroup 属性

| 参数         | 说明                    | 类型                        | 默认值   |
|------------|-----------------------|---------------------------|-------|
| label      | 标题                    | string                    |       |
| keyIndex   | 唯一标识，必填               | string                    |       |

### MenuItemGroup 插槽

| 插槽名称    | 说明    | 版本  |
|---------|-------|-----|
| title   | 自定义标题 |     |

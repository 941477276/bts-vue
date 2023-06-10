---
category: Components
type: 导航
typeCode: navigation
title: Pagination
subtitle: 分页
---

采用分页的形式分隔长列表，使用分页分解数据

## API

### Pagination 属性

| 参数                               | 说明                                        | 类型                                      | 默认值                             |
|----------------------------------|-------------------------------------------|-----------------------------------------|---------------------------------|
| pageSize(v-model:pageSize)       | 每页显示条目个数，支持v-model                        | number                                  | 10                              |
| currentPage(v-model:currentPage) | 当前页码，支持v-model                            | number                                  | 1                               |
| total                            | 总条目                                       | number                                  |                                 |
| pageSizes            |  每页显示个数选择器的选项设置                           | number[]                                | [10, 20, 30, 40, 50, 100]       |
| pagerCount            | 页码按钮的数量，当总页数超过该值时会折叠（大于等于 5 且小于等于 21 的奇数） | number                                  | 7                               |
| disabledPage            | 禁用的页码                                     | number[]                                |                                 |
| size                    | 输入框大小。可选 `lg`、`sm`                        | string                                  |                                 |
| layout                    | 组件布局，子组件名用逗号分隔                            | `total`/`pager`/`sizes`/`jumper`/`slot` | 'total,pager,sizes,jumper,slot' |
| prevText                    | "上一页"按钮的文字                                | string                                  |                                 |
| nextText                    | "下一页"按钮的文字                                | string                                  |                                 |
| usePrev                    | 是否显示上一页按钮                                 | boolean                                 | true                            |
| useNext                    | 是否显示下一页按钮                                 | boolean                                 | true                            |
| hideOnSinglePage            | 只有一页时是否隐藏                                 | boolean                                 | false                            |


### Pagination 事件

| 事件名称         | 说明                            | 回调参数 |
|--------------|-------------------------------|------|
| sizeChange   | 每页显示个数变化时触发                   |      |
| currentChange  | 当前页码变化时触发                     |      |


### Pagination 插槽

| 插槽名称 | 说明    | 版本  |
|------|-------|-----|
| prev | 上一页按钮 |     |
| next | 下一页按钮 |     |

---
category: Components
type: 导航
typeCode: navigation
title: Breadcrumb
subtitle: 面包屑导航
---

显示当前页面的路径，并能向上返回

## API

### Breadcrumb 属性

| 参数       | 说明       | 类型                                                                                | 默认值     |
|----------|----------|-----------------------------------------------------------------------------------|---------|
| separator      | 分割符      | string                                                                            | /       |

### BreadcrumbItem 属性

| 参数       | 说明                        | 类型                | 默认值   |
|----------|---------------------------|-------------------|-------|
| to       | 路由跳转对象，同`vue-router`的`to` | `string`/`object` | /     |
| replace  | 是否不将导航在历史记录中留下            | boolean           | false |
| disabled | 是否禁用                      | boolean           | false |
| isUrl    | 是否为普通链接                   | boolean           | false |
| target   | `a`标签的target属性            | string            |  |

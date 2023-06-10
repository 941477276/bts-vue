---
category: Components
type: navigation
typeCode: navigation
title: Breadcrumb
subtitle: Breadcrumbs
---

Display the path of the current page and return upwards

## API

### Breadcrumb Properties

| Parameter | Description | Type | Default |
|----------|----------|-----------------------------------------------------------------------------------|---------|
| separator | separator | string | / |

### BreadcrumbItem property

| Parameter | Description | Type | Default |
|----------|------------------------------|-------------------|-------|
| to | Routing jump object, same as `to` | `string`/`object` of `vue-router` | / |
| replace | Whether to not leave the navigation in the history | boolean | false |
| disabled | Whether to disable | boolean | false |
| isUrl | Whether it is a normal link | boolean | false |
| target | target attribute of `a` tag | string | |

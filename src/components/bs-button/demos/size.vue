<docs>
---
order: 0
title:
  zh-CN: 按钮尺寸
  en-US: Button size
description:
  zh-CN: `bs-button`有大、中、小3种尺寸，通过`size`属性来设置它们，它们对应的值为`lg`、`默认`、`sm`。
  en-US: `bs-button` has three sizes：large, medium, and small. They are set through the `size` attribute, and their corresponding values are `lg`, `default`, and `lg`.
---
</docs>

<template>
  <div>
    <bs-button type="primary" size="sm">small button (sm)</bs-button>
    <bs-button type="primary">default size</bs-button>
    <bs-button type="primary" size="lg">large button (lg)</bs-button>
  </div>
</template>

<style lang="scss" scoped>
.bs-button{
  margin: 0 1rem 1rem 0;
}
</style>

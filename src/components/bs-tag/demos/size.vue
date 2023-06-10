<docs>

---
order: 0
title:
  zh-CN: 不同大小
  en-US: Tag size
description:
  zh-CN: `bs-tag`有大、中、小、超小4种尺寸，通过`size`属性来设置它们，它们对应的值为`默认`、`md`、`sm`、`mini`。
  en-US: `bs-tag` has 4 sizes：large, medium, small, and super small. They are set through the `size` attribute, and their corresponding values are `default`, `md`, `sm`, and `mini`.
---
</docs>

<template>
  <div>
    <bs-tag>default size</bs-tag>
    <bs-tag size="md">medium size</bs-tag>
    <bs-tag size="sm">small size</bs-tag>
    <bs-tag size="mini">mini size</bs-tag>
  </div>
</template>

<style lang="scss" scoped>
.bs-tag{
  margin: 0 0.5rem 0.5rem 0;
}
</style>

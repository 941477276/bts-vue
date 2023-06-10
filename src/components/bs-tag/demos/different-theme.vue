<docs>

---
order: 0
title:
  zh-CN: 不同的主题
  en-US: Different theme
description: 
  zh-CN: 通过`effect`属性可以改变Tag的主题，可选的主题有`dark`、`plain`和`light(默认)`
  en-US: The theme of the Tag can be changed through the `effect` attribute. The optional themes are `dark`, `plain` and `light(default)`
---
</docs>

<template>
  <div>
    <div>
      <h6><code>dark</code> theme</h6>
      <bs-tag effect="dark" type="primary">primary</bs-tag>
      <bs-tag effect="dark" type="secondary">secondary</bs-tag>
      <bs-tag effect="dark" type="success">success</bs-tag>
      <bs-tag effect="dark" type="warning">warning</bs-tag>
      <bs-tag effect="dark" type="danger">danger</bs-tag>
      <bs-tag effect="dark" type="info">info</bs-tag>
      <bs-tag effect="dark" type="light">light</bs-tag>
      <bs-tag effect="dark" type="dark">dark</bs-tag>
      <bs-tag effect="dark" type="link">link</bs-tag>
    </div>

    <div>
      <h6><code>plain</code> theme</h6>
      <bs-tag effect="plain" type="primary">primary</bs-tag>
      <bs-tag effect="plain" type="secondary">secondary</bs-tag>
      <bs-tag effect="plain" type="success">success</bs-tag>
      <bs-tag effect="plain" type="warning">warning</bs-tag>
      <bs-tag effect="plain" type="danger">danger</bs-tag>
      <bs-tag effect="plain" type="info">info</bs-tag>
      <bs-tag effect="plain" type="light">light</bs-tag>
      <bs-tag effect="plain" type="dark">dark</bs-tag>
      <bs-tag effect="plain" type="link">link</bs-tag>
    </div>

    <div>
      <h6>custom color</h6>
      <bs-tag size="sm" color="#f60">#f60</bs-tag>
      <bs-tag size="sm" color="#3dc8f9">#3dc8f9</bs-tag>
      <bs-tag size="sm" color="#9ed09a">#9ed09a</bs-tag>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bs-tag{
  margin: 0 0.5rem 0.5rem 0;
}
</style>

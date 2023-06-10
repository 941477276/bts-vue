<docs>

---
order: 0
title:
  zh-CN: 可关闭
  en-US: Basic usage
description: 
  zh-CN: 添加`closeable`属性创建可关闭的Tag
  en-US: Add the `closeable` attribute to create a closeable Tag
---
</docs>

<template>
  <div>
    <div>
      <bs-tag closeable type="primary">primary</bs-tag>
      <bs-tag closeable type="secondary">secondary</bs-tag>
      <bs-tag closeable type="success">success</bs-tag>
      <bs-tag closeable type="warning">warning</bs-tag>
      <bs-tag closeable type="danger">danger</bs-tag>
      <bs-tag closeable type="info">info</bs-tag>
      <bs-tag closeable type="light">light</bs-tag>
      <bs-tag closeable type="dark">dark</bs-tag>
      <bs-tag closeable type="link">link</bs-tag>
    </div>

    <div>
      <bs-tag closeable size="md" type="primary">primary</bs-tag>
      <bs-tag closeable size="sm" type="secondary">secondary</bs-tag>
      <bs-tag closeable size="mini" type="success">success</bs-tag>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bs-tag{
  margin: 0 0.5rem 0.5rem 0;
}
</style>

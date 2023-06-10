<docs>

---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic usage
description: 
  zh-CN: 通过`type`属性来选择`tag`的类型。 也可以通过`color`属性来自定义背景色。
  en-US: Use the `type` attribute to select the type of `tag`. You can also customize the background color through the `color` property.
---
</docs>

<template>
  <div>
    <bs-tag type="primary">primary</bs-tag>
    <bs-tag type="secondary">secondary</bs-tag>
    <bs-tag type="success">success</bs-tag>
    <bs-tag type="warning">warning</bs-tag>
    <bs-tag type="danger">danger</bs-tag>
    <bs-tag type="info">info</bs-tag>
    <bs-tag type="light">light</bs-tag>
    <bs-tag type="dark">dark</bs-tag>
    <bs-tag type="link">link</bs-tag>
  </div>
</template>

<style lang="scss" scoped>
.bs-tag{
  margin: 0 0.5rem 0.5rem 0;
}
</style>

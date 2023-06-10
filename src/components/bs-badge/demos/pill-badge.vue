<docs>
---
order: 0
title:
  zh-CN: 胶囊式徽章
  en-US: Pill badge
description:
  zh-CN: 添加`pill`属性能够让徽章（badge）组件的边角变得更圆滑
  en-US: Adding the `pill` attribute can make the corners of the badge (badge) component more rounded
---
</docs>

<template>
  <div>
    <bs-badge pill type="primary">primary</bs-badge>
    <bs-badge pill type="secondary">secondary</bs-badge>
    <bs-badge pill type="success">success</bs-badge>
    <bs-badge pill type="danger">danger</bs-badge>
    <bs-badge pill type="warning">warning</bs-badge>
    <bs-badge pill type="info">info</bs-badge>
    <bs-badge pill type="light">light</bs-badge>
    <bs-badge pill type="dark">dark</bs-badge>
  </div>
</template>

<style lang="scss" scoped>
.bs-badge{
  margin: 0 0.5rem 0.5rem 0;
}
</style>

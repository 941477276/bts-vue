<docs>
---
order: 0
title:
  zh-CN: 圆点式徽章
  en-US: Dot badge
description:
  zh-CN: 添加`pill`属性能够让徽章变成一个小圆点
  en-US: Add the `pill` attribute to make the badge a small dot
---
</docs>

<template>
  <div>
    <bs-badge circle type="primary">primary</bs-badge>
    <bs-badge circle type="secondary">secondary</bs-badge>
    <bs-badge circle type="success">success</bs-badge>
    <bs-badge circle type="danger">danger</bs-badge>
    <bs-badge circle type="warning">warning</bs-badge>
    <bs-badge circle type="info">info</bs-badge>
    <bs-badge circle type="light">light</bs-badge>
    <bs-badge circle type="dark">dark</bs-badge>
    <bs-button class="a-demo-button" type="primary" size="sm">
      a button
      <bs-badge circle type="danger"></bs-badge>
    </bs-button>
  </div>
</template>
<style lang="scss" scoped>
.bs-badge{
  vertical-align: middle;
  margin: 0 0.5rem 0.5rem 0;
}
.a-demo-button{
  position: relative;
  .bs-badge{
    position: absolute;
    top: -0.4rem;
  }
}
</style>

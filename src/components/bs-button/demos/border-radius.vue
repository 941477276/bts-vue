<docs>
---
order: 0
title:
  zh-CN: 圆角与平角
  en-US: Rounded and flat corners
description:
  zh-CN:
    设置`block`属性为`true`即可呈现圆角按钮
    设置`squared`属性为`true`即可呈现平角按钮
  en-US:
    Set the `round` property to `true` to render the button with rounded corners
    Set the `squared` property to `true` to render a flat button
---
</docs>

<template>
  <div>
    <div>
      <bs-button type="primary" round>primary</bs-button>
      <bs-button type="secondary" round>secondary</bs-button>
      <bs-button type="success" round>success</bs-button>
      <bs-button type="warning" round>warning</bs-button>
      <bs-button type="danger" round>danger</bs-button>
      <bs-button type="info" round>info</bs-button>
      <bs-button type="light" round>light</bs-button>
      <bs-button type="danger" round>danger</bs-button>
    </div>
    <div style="margin-top: 1rem;">
      <bs-button type="primary" squared>primary</bs-button>
      <bs-button type="secondary" squared>secondary</bs-button>
      <bs-button type="success" squared>success</bs-button>
      <bs-button type="warning" squared>warning</bs-button>
      <bs-button type="danger" squared>danger</bs-button>
      <bs-button type="info" squared>info</bs-button>
      <bs-button type="light" squared>light</bs-button>
      <bs-button type="danger" squared>danger</bs-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bs-button{
  margin: 0 1rem 1rem 0;
}
</style>

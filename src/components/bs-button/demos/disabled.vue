<docs>
---
order: 0
title:
  zh-CN: 禁用
  en-US: Disabled
description:
  zh-CN: 你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。
  en-US: You can use the `disabled` property to define whether the button is enabled or not, it accepts a `Boolean` value.
---
</docs>

<template>
  <div>
    <bs-button disabled>default</bs-button>
    <bs-button type="primary" disabled>primary</bs-button>
    <bs-button type="secondary" disabled>secondary</bs-button>
    <bs-button type="success" disabled>success</bs-button>
    <bs-button type="warning" disabled>warning</bs-button>
    <bs-button type="danger" disabled>danger</bs-button>
    <bs-button type="info" disabled>info</bs-button>
    <bs-button type="light" disabled>light</bs-button>
    <bs-button type="danger" disabled>danger</bs-button>
  </div>
</template>

<style lang="scss" scoped>
.bs-button{
  margin: 0 1rem 1rem 0;
}
</style>

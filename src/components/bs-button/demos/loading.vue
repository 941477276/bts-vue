<docs>
---
order: 0
title:
  zh-CN: 加载状态
  en-US: Loading
description:
  zh-CN: 你可以使用`loading`属性来定义按钮是否为loading状态，它接受一个`Boolean`值。
  en-US: You can define whether the button is loading or not using the `loading` property, which accepts a `Boolean` value.
---
</docs>

<template>
  <div>
    <h5>Loading时按钮禁用</h5>
    <bs-button loading>default</bs-button>
    <bs-button type="primary" loading>primary</bs-button>
    <bs-button type="secondary" loading>secondary</bs-button>
    <bs-button type="success" loading>success</bs-button>
    <bs-button type="warning" loading>warning</bs-button>
    <bs-button type="danger" loading>danger</bs-button>
    <bs-button type="info" loading>info</bs-button>
    <bs-button type="light" loading>light</bs-button>
    <bs-button type="danger" loading>danger</bs-button>
    <h5>Loading时按钮可用</h5>
    <bs-button loading :disabled-on-loading="false">default</bs-button>
    <bs-button type="primary" :disabled-on-loading="false" loading>primary</bs-button>
    <bs-button type="secondary" :disabled-on-loading="false" loading>secondary</bs-button>
    <bs-button type="success" :disabled-on-loading="false" loading>success</bs-button>
    <bs-button type="warning" :disabled-on-loading="false" loading>warning</bs-button>
    <bs-button type="danger" :disabled-on-loading="false" loading>danger</bs-button>
    <bs-button type="info" :disabled-on-loading="false" loading>info</bs-button>
    <bs-button type="light" :disabled-on-loading="false" loading>light</bs-button>
    <bs-button type="danger" :disabled-on-loading="false" loading>danger</bs-button>
  </div>
</template>

<style lang="scss" scoped>
.bs-button{
  margin: 0 1rem 1rem 0;
}
</style>

<docs>

---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic usage
description: 
  zh-CN: 最简单的用法，通过`percentage`属性设置进度，它接收一个`number`类型的值，或`xx%`形式的`string`类型的值。
  en-US: The simplest usage is to set the progress through the `percentage` property, which receives a value of type `number`, or a value of type `string` in the form of `xx%`.
---
</docs>

<template>
  <div>
    <bs-progress color-type="primary" :percentage="10"></bs-progress>
    <bs-progress color-type="secondary" percentage="20"></bs-progress>
    <bs-progress color-type="success" percentage="30%"></bs-progress>
    <bs-progress color-type="danger" percentage="40%"></bs-progress>
    <bs-progress color-type="warning" :percentage="50"></bs-progress>
    <bs-progress color-type="info" :percentage="60"></bs-progress>
    <bs-progress color-type="light" :percentage="70"></bs-progress>
    <bs-progress color-type="dark" :percentage="80"></bs-progress>
  </div>
</template>
<style lang="scss" scoped>
.bs-progress{
  margin-bottom: 1rem;
}
</style>

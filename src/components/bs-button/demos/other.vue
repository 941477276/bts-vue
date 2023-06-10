<docs>
---
order: 0
title:
  zh-CN: 其他标签
  en-US: Other tag
description:
  zh-CN: 设置`tag`属性可以让Button组件渲染不同的标签，默认为`button`
  en-US: Setting the `tag` property allows the Button component to render different html tags, the default is `button`
---
</docs>

<template>
  <div>
    <bs-button type="primary" tag="a" target="_blank" href="https://github.com/941477276/vue3-bootstrap-icon">link</bs-button>
    <bs-button type="secondary" tag="mark">mark</bs-button>
    <bs-button type="success" tag="strong">strong</bs-button>
  </div>
</template>

<style lang="scss" scoped>
.bs-button{
  margin: 0 1rem 1rem 0;
}
</style>

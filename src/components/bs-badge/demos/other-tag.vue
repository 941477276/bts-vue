<docs>
---
order: 0
title:
  zh-CN: 其他标签
  en-US: Other html tag
description:
  zh-CN: 设置`tag`属性可以让徽章组件渲染不同的标签，默认为`span`
  en-US: Set the `tag` property to make the badge component render different html tag, the default is `span`
---
</docs>

<template>
  <div>
    <bs-badge tag="a" href="https://github.com/941477276/vue3-bootstrap-icon" target="_blank" type="primary">link</bs-badge>
    <bs-badge tag="strong" type="primary">strong</bs-badge>
    <bs-badge tag="i" type="primary">tag "i"</bs-badge>
  </div>
</template>
<style lang="scss" scoped>
.bs-badge{
  margin: 0 0.5rem 0.5rem 0;
}
</style>

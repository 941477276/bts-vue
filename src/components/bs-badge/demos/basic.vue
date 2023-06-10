<docs>
---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic usage
description:
  zh-CN: 徽章（badge）是一种小型的用于计数和打标签的组件。
  en-US: Badges are small counting and labeling components.
---
</docs>

<template>
  <div>
    <bs-badge type="primary">primary</bs-badge>
    <bs-badge type="secondary">secondary</bs-badge>
    <bs-badge type="success">success</bs-badge>
    <bs-badge type="danger">danger</bs-badge>
    <bs-badge type="warning">warning</bs-badge>
    <bs-badge type="info">info</bs-badge>
    <bs-badge type="light">light</bs-badge>
    <bs-badge type="dark">dark</bs-badge>
    <bs-button type="primary" size="sm">
      Profile
      <bs-badge style="margin-bottom: 0;" type="light">9<span class="sr-only">unread messages</span></bs-badge>
    </bs-button>
  </div>
</template>
<style lang="scss" scoped>
.bs-badge{
  margin: 0 0.5rem 0.5rem 0;
}
</style>

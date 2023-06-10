<docs>

---
order: 0
title:
  zh-CN: 其他颜色
  en-US: Other colors
description: 
  zh-CN: Spinner共有7种不同的颜色
  en-US: Spinner has 7 different colors
---
</docs>

<template>
  <div>
    <div class="spinner-loading text-primary">
      <bs-spinner color-type="primary"></bs-spinner>primary
    </div>

    <div class="spinner-loading text-secondary">
      <bs-spinner color-type="secondary"></bs-spinner>
      <span class="spinner-loading-text">secondary</span>
    </div>

    <div class="spinner-loading text-success">
      <bs-spinner color-type="success"></bs-spinner>
      <span class="spinner-loading-text">success</span>
    </div>

    <div class="spinner-loading text-danger">
      <bs-spinner color-type="danger"></bs-spinner>
      <span class="spinner-loading-text">danger</span>
    </div>

    <div class="spinner-loading text-warning">
      <bs-spinner color-type="warning"></bs-spinner>
      <span class="spinner-loading-text">warning</span>
    </div>

    <div class="spinner-loading text-info">
      <bs-spinner color-type="info"></bs-spinner>
      <span class="spinner-loading-text">info</span>
    </div>

    <div class="spinner-loading text-light">
      <bs-spinner color-type="light"></bs-spinner>
      <span class="spinner-loading-text">light</span>
    </div>

    <div class="spinner-loading text-dark">
      <bs-spinner color-type="dark"></bs-spinner>
      <span class="spinner-loading-text">dark</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.spinner-loading{
  display: inline-block;
  margin: 0 1rem 1rem 0;
  .bs-spinner{
    width: 1.5rem;
    height: 1.5rem;
    border-width: 2px;
    vertical-align: middle;
    margin-right: 0.5rem;
  }
  .spinner-loading-text{
    font-size: 1.2rem;
  }
}
</style>

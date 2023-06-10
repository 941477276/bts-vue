<docs>

---
order: 0
title:
  zh-CN: 自动调整位置
  en-US: Auto-adjust placement
description: 
  zh-CN: 自动调整位置
  en-US: auto-adjust placement
---
</docs>

<template>
  <div class="auto-placement-demo-box">
    <div class="auto-placement-demo-content">
      <bs-dropdown trigger="click">
        <bs-button type="primary">Click me</bs-button>
        <template #content>
          <bs-dropdown-item>Html</bs-dropdown-item>
          <bs-dropdown-item>Css</bs-dropdown-item>
          <bs-dropdown-item active>Javascript</bs-dropdown-item>
          <bs-dropdown-item divider>Vue</bs-dropdown-item>
          <bs-dropdown-item disabled>Angular</bs-dropdown-item>
        </template>
      </bs-dropdown>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.auto-placement-demo-box{
  max-width: 400px;
  max-height: 400px;
  border: 1px solid #ccc;
  overflow: auto;
}
.auto-placement-demo-content{
  width: 1400px;
  height: 1400px;
}
.bs-dropdown{
  margin: 15rem 20rem;
}
</style>

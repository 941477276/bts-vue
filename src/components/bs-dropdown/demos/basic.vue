<docs>

---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic usage
description: 
  zh-CN: 最简单的用法
  en-US: The simplest usage
---
</docs>

<template>
  <div>
    <bs-dropdown :show-toggle-arrow="false">
      <a href="javascript: void(0);">
        Hover me
      </a>
      <template #content>
        <bs-dropdown-item>Html</bs-dropdown-item>
        <bs-dropdown-item>Css</bs-dropdown-item>
        <bs-dropdown-item active>Javascript</bs-dropdown-item>
        <bs-dropdown-item divider>Vue</bs-dropdown-item>
        <bs-dropdown-item disabled>Angular</bs-dropdown-item>
      </template>
    </bs-dropdown>
    <bs-dropdown>
      <bs-button type="primary">Hover me</bs-button>
      <template #content>
        <bs-dropdown-item>Html</bs-dropdown-item>
        <bs-dropdown-item>Css</bs-dropdown-item>
        <bs-dropdown-item active>Javascript</bs-dropdown-item>
        <bs-dropdown-item divider>Vue</bs-dropdown-item>
        <bs-dropdown-item disabled>Angular</bs-dropdown-item>
      </template>
    </bs-dropdown>
  </div>
</template>

<style lang="scss" scoped>
.bs-dropdown{
  margin: 0 1rem 1rem 0;
}
</style>

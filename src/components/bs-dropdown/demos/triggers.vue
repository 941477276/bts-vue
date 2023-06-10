<docs>

---
order: 0
title:
  zh-CN: 触发方式
  en-US: Trigger type
description: 
  zh-CN: 设置`trigger`属性可以修改触发方式，支持的触发方式有`click`、`hover(默认)`、`contextMenu(右键)`、`custom`。
  en-US: Setting the `trigger` attribute can modify the trigger method, and the supported trigger methods are `click`, `hover (default)`, `contextMenu (right click)`, `custom`.
---
</docs>

<template>
  <div>
    <bs-dropdown>
      <bs-button type="primary" @click="onClick">Trigger by hover</bs-button>
      <template #content>
        <bs-dropdown-item>Html</bs-dropdown-item>
        <bs-dropdown-item>Css</bs-dropdown-item>
        <bs-dropdown-item active>Javascript</bs-dropdown-item>
        <bs-dropdown-item divider>Vue</bs-dropdown-item>
        <bs-dropdown-item disabled>Angular</bs-dropdown-item>
      </template>
    </bs-dropdown>
    <bs-dropdown trigger="click">
      <bs-button type="primary">Trigger by click</bs-button>
      <template #content>
        <bs-dropdown-item>Html</bs-dropdown-item>
        <bs-dropdown-item>Css</bs-dropdown-item>
        <bs-dropdown-item active>Javascript</bs-dropdown-item>
        <bs-dropdown-item divider>Vue</bs-dropdown-item>
        <bs-dropdown-item disabled>Angular</bs-dropdown-item>
      </template>
    </bs-dropdown>
    <bs-dropdown trigger="contextMenu">
      <bs-button type="primary">Trigger by contextMenu</bs-button>
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

<script setup>
let onClick = function (evt) {
  console.log('onClick', evt);
};
</script>

<style lang="scss" scoped>
.bs-dropdown{
  margin: 0 1rem 1rem 0;
}
</style>

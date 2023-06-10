<docs>

---
order: 0
title:
  zh-CN: 隐藏时销毁下拉
  en-US: Destroy on hide
description: 
  zh-CN: 设置`destroy-on-hide`下拉菜单dom将会在隐藏时销毁掉
  en-US: Set `destroy-on-hide` dropdown menu dom will be destroyed when hidden
---
</docs>

<template>
  <div>
    <bs-dropdown destroy-on-hide trigger="click">
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
</template>

<style lang="scss" scoped>
.bs-dropdown{
  margin: 0 1rem 1rem 0;
}
</style>

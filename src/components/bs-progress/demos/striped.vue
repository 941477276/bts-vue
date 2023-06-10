<docs>

---
order: 0
title:
  zh-CN: 条纹进度条
  en-US: Striped progress
description: 
  zh-CN: 设置`striped`属性即可呈现条纹进度条
  en-US: Set the `striped` attribute to present a striped progress bar
---
</docs>

<template>
  <div>
    <bs-progress striped color-type="primary" :percentage="50"></bs-progress>
    <bs-progress striped color-type="secondary" percentage="50"></bs-progress>
    <bs-progress striped color-type="success" percentage="50%"></bs-progress>
    <bs-progress striped color-type="danger" percentage="50%"></bs-progress>
    <bs-progress striped color-type="warning" :percentage="50"></bs-progress>
    <bs-progress striped color-type="info" :percentage="50"></bs-progress>
    <bs-progress striped color-type="light" :percentage="50"></bs-progress>
    <bs-progress striped color-type="dark" :percentage="50"></bs-progress>
  </div>
</template>
<style lang="scss" scoped>
.bs-progress{
  margin-bottom: 1rem;
}
</style>

<docs>

---
order: 0
title:
  zh-CN: 圆角/方角边缘
  en-US: StrokeLinecap
description:
  zh-CN: 通过设置`strokeLinecap`可以调整圆环进度条边缘的形状。`square`为方角，`round`为圆角。
  en-US: The shape of the edge of the circular progress bar can be adjusted by setting `strokeLinecap`. `square` means square corners, `round` means rounded corners.
---
</docs>

<template>
  <div>
    <bs-progress type="circle" stroke-linecap="round" :percentage="35"></bs-progress>
    <bs-progress type="circle" stroke-linecap="square" :percentage="35"></bs-progress>
  </div>
</template>
<style lang="scss" scoped>
.bs-progress{
  margin-bottom: 1rem;
}
</style>
<script setup lang="ts">
</script>

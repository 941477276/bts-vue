<docs>

---
order: 0
title:
  zh-CN: 过渡效果
  en-US: Transition
description: 
  zh-CN: Popover默认有`fade`、`scale`2种过渡效果
  en-US: Popover has two transition effects of `fade` and `scale` by default
---
</docs>

<template>
  <div>
    <bs-popover
      title="fade"
      content="默认过渡效果！">
      <bs-button type="primary">fade(默认)</bs-button>
    </bs-popover>
    <bs-popover
      transition-name="scale"
      title="scale"
      content="scale的过渡效果！">
      <bs-button
        type="primary">scale</bs-button>
    </bs-popover>
  </div>
</template>

<style lang="scss" scoped>
.bs-button{
  margin: 0 1rem 1rem 0;
}
</style>

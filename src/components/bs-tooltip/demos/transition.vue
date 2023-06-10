<docs>

---
order: 0
title:
  zh-CN: 过渡效果
  en-US: Transition
description: 
  zh-CN: Tooltip默认有`fade`、`scale`2种过渡效果
  en-US: Tooltip has two transition effects of `fade` and `scale` by default
---
</docs>

<template>
  <div>
    <BsTooltip content="默认过渡效果！">
      <bs-button type="primary">fade(default)</bs-button>
    </BsTooltip>
    <BsTooltip
      transition-name="scale"
      content="scale的过渡效果！">
      <bs-button type="primary">scale</bs-button>
    </BsTooltip>
  </div>
</template>

<style lang="scss" scoped>
.bs-button{
  margin: 0 1rem 1rem 0;
}
</style>

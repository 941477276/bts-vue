<docs>

---
order: 0
title:
  zh-CN: 不同主题
  en-US: theme
description: 
  zh-CN: Tooltip默认有`dark`、`light`2种主题
  en-US: Tooltip has two themes `dark` and `light` by default
---
</docs>

<template>
  <div>
    <BsTooltip content="dark主题的Tooltip！">
      <bs-button type="primary">theme dark</bs-button>
    </BsTooltip>
    <BsTooltip placement="top" theme="light" content="light主题的Tooltip！">
      <bs-button type="primary">theme light</bs-button>
    </BsTooltip>
    <BsTooltip theme="custom" theme-class="theme-pink" content="自定义主题的Tooltip！">
      <bs-button type="primary">custom theme</bs-button>
    </BsTooltip>
  </div>
</template>

<style lang="scss" scoped>
.bs-button{
  margin: 0 1rem 1rem 0;
}
</style>
<style lang="scss">
.bs-tooltip{
  &.theme-pink{
    box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
    color: #fff;
    background-color: #eb2f96;
  }
}
</style>

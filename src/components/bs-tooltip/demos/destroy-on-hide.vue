<docs>

---
order: 0
title:
  zh-CN: 隐藏即销毁
  en-US: Destroy on hide
description: 
  zh-CN: 设置`destroy-on-hide`属性可以在Tooltip隐藏后立即销毁tooltip dom
  en-US: Set the `destroy-on-hide` attribute to destroy the tooltip dom immediately after the Tooltip is hidden
---
</docs>

<template>
  <div>
    <BsTooltip destroy-on-hide content="Tooltip popper隐藏其dom就会被销毁！">
      <bs-button type="primary">A tooltip</bs-button>
    </BsTooltip>
  </div>
</template>

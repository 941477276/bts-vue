<docs>

---
order: 0
title:
  zh-CN: 父级容器
  en-US: Parent container
description: 
  zh-CN: Tooltip组件支持将tooltip popper插入到指定的dom中（默认为`body`）
  en-US: The Tooltip component supports inserting the tooltip popper into the specified dom (the default is `body`)
---
</docs>

<template>
  <div>
    <div class="tooltip-container" id="tooltipContainer">
      通过浏览器调试工具查看下我的dom结构吧！
    </div>
    <BsTooltip
      v-if="render"
      teleported
      append-to="#tooltipContainer"
      raw-content
      content="看到我的dom在哪了吗？<br>嘻嘻！">
      <bs-button type="primary">A tooltip</bs-button>
    </BsTooltip>
  </div>
</template>

<script setup>
import { ref } from 'vue';
let render = ref(false);
let timer = setTimeout(function () {
  clearTimeout(timer);
  render.value = true;
}, 0);
</script>

<style lang="scss" scoped>
.tooltip-container{
  height: 60px;
  line-height: 60px;
  max-width: 600px;
  margin-bottom: 20px;
  color: var(--primary);
  text-align: center;
  background-color: rgba(64,158, 255, 0.5);
  ::v-deep(.bs-tooltip){
    line-height: 1.5;
    color: var(--primary);
    font-size: 1.2rem;
    font-weight: 600;
  }
}
</style>

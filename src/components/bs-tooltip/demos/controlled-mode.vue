<docs>

---
order: 0
title:
  zh-CN: 受控模式
  en-US: Controlled mode
description: 
  zh-CN: 给Tooltip添加`visible`属性，tooltip就是受控的，它接收一个`boolean`类型的值
  en-US: Add `visible` attribute to Tooltip, tooltip is controlled, it receives a `boolean` type value
---
</docs>

<template>
  <div>
    <BsTooltip
      :visible="visible"
      content="我是一个由父组件控制的Tooltip！">
      <bs-button
        type="primary"
        @mouseenter="visible = true"
        @mouseleave="visible = false">Controlled tooltip</bs-button>
    </BsTooltip>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let visible = ref(false);
</script>

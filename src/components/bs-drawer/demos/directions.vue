<docs>

---
order: 0
title:
  zh-CN: 不同方向
  en-US: Directions
description:
  zh-CN: `bs-drawer`可以在`top`、`right`、`bottom`、`left`4方个方向上显示
  en-US: `bs-drawer` can be displayed in 4 directions： `top`, `right`, `bottom`, `left`
---
</docs>

<template>
  <div>
    <bs-button type="primary" @click="visible1 = true">top</bs-button>
    <bs-button type="primary" @click="visible2 = true">right</bs-button>
    <bs-button type="primary" @click="visible3 = true">bottom</bs-button>
    <bs-button type="primary" @click="visible4 = true">left</bs-button>

    <bs-drawer
      v-model:visible="visible1"
      placement="top"
      title="抽屉弹窗">
      <p>这是一个向上的抽屉弹窗！</p>
    </bs-drawer>
    <bs-drawer
      v-model:visible="visible2"
      placement="right"
      title="抽屉弹窗">
      <p>这是一个向右的抽屉弹窗！</p>
    </bs-drawer>
    <bs-drawer
      v-model:visible="visible3"
      placement="bottom"
      title="抽屉弹窗">
      <p>这是一个向下的抽屉弹窗！</p>
    </bs-drawer>
    <bs-drawer
      v-model:visible="visible4"
      placement="left"
      title="抽屉弹窗">
      <p>这是一个向左的抽屉弹窗！</p>
    </bs-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let visible1 = ref(false);
let visible2 = ref(false);
let visible3 = ref(false);
let visible4 = ref(false);
</script>
<style lang="scss" scoped>
.bs-button{
  margin: 0 1rem 1rem 0;
}
</style>

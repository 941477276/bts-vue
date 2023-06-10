<docs>

---
order: 0
title:
  zh-CN: 嵌套抽屉
  en-US: Nesting drawer
description: 
  zh-CN: 嵌套的抽屉
  en-US: Nested drawers
---
</docs>

<template>
  <div>
    <bs-button type="primary" @click="visible = true">Show drawer</bs-button>
    <bs-drawer
      title="一级弹窗"
      v-model:visible="visible"
      width="60%">
      <h5>一级弹窗</h5>
      <bs-button type="primary" @click="visible2 = true">显示二级弹窗</bs-button>
      <bs-drawer
        title="二级弹窗"
        v-model:visible="visible2"
        width="40%">
        <h5>二级弹窗</h5>
        <bs-button type="primary" @click="visible3 = true">显示三级弹窗</bs-button>
        <bs-drawer
          title="三级弹窗"
          width="20%"
          v-model:visible="visible3">
          <h5>三级弹窗</h5>
        </bs-drawer>
      </bs-drawer>
    </bs-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let visible = ref(false);
let visible2 = ref(false);
let visible3 = ref(false);
</script>

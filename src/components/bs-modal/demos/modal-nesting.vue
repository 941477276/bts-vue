<docs>

---
order: 0
title:
  zh-CN: 弹窗嵌套
  en-US: Modal nesting
description: 
  zh-CN: 弹窗嵌套弹窗也能很好的显示
  en-US: The nested modal of the modal can also be displayed well
---
</docs>

<template>
  <div>
    <bs-button type="primary" @click="visible = true">Show nesting modal</bs-button>
    <bs-modal
      title="一级弹窗"
      v-model:visible="visible"
      size="sm">
      <h5>一级弹窗</h5>
      <bs-button type="primary" @click="visible2 = true">显示二级弹窗</bs-button>
      <bs-modal
        title="二级弹窗"
        v-model:visible="visible2">
        <h5>二级弹窗</h5>
        <bs-button type="primary" @click="visible3 = true">显示三级弹窗</bs-button>
        <bs-modal
          title="三级弹窗"
          size="lg"
          v-model:visible="visible3">
          <h5>三级弹窗</h5>
        </bs-modal>
      </bs-modal>
    </bs-modal>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let visible = ref(false);
let visible2 = ref(false);
let visible3 = ref(false);
</script>

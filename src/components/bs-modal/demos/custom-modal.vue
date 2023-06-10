<docs>

---
order: 0
title:
  zh-CN: 自定义头部和底部
  en-US: Custom header
description: 
  zh-CN: 你可以通过`header`、`footer`插槽自定义弹窗头部和尾部
  en-US: You can customize the head and foot of the modal through `header`, `footer` slots
---
</docs>

<template>
  <div>
    <bs-button type="primary" @click="visible = true">Custom header and footer</bs-button>
    <bs-modal
      v-model:visible="visible"
      size="sm">
      <template #header>
        <div class="modal-title" style="color: #f60;text-align: center;flex: 1;">自定义头部</div>
      </template>
      <p>这是一个自定义弹窗的弹窗！</p>

      <template #footer>
        <bs-button type="danger" block @click="visible = false">确定</bs-button>
      </template>
    </bs-modal>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let visible = ref(false);
</script>

<docs>

---
order: 0
title:
  zh-CN: 异步关闭
  en-US: Async close
description:
  zh-CN: 设置`close-disabled`属性抽屉将无法自动关闭，除非手动关闭
  en-US: Set the `close-disabled` attribute drawer will not be closed automatically unless closed manually
---
</docs>

<template>
  <div>
    <bs-button type="primary" @click="visible = true">Show async close modal</bs-button>
    <bs-drawer
      title="提交数据"
      :close-disabled="closeDisabled"
      v-model:visible="visible">
      <h6>在“确定”按钮转圈圈期间点击任何位置都无法关闭弹窗！</h6>
      <template #footer>
        <bs-button
          type="primary"
          :loading="closeDisabled"
          :disabled="closeDisabled"
          @click="submitData">提交</bs-button>
      </template>
    </bs-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { BsMessage } from '../../bs-message';

let closeDisabled = ref(false);
let visible = ref(false);
let submitData = function () {
  if (closeDisabled.value) {
    return;
  }
  closeDisabled.value = true;
  let timer = setTimeout(function () {
    clearTimeout(timer);
    closeDisabled.value = false;
    BsMessage.success('数据提交完成！');
    visible.value = false;
  }, 3000);
};
</script>

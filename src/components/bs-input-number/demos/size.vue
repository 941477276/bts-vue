<docs>

---
order: 0
title:
  zh-CN: 不同大小
  en-US: Different size
description: 
  zh-CN: `bs-input-number`预置了`sm`、`lg`和`默认`3种尺寸，通过`size`属性来设置它们
  en-US: `bs-input-number` presets `sm`, `lg` and `default` 3 sizes, set them by `size` prop
---
</docs>

<template>
  <div>
    <div style="margin-bottom: 1rem;">
      Large：<BsInputNumber v-model="number" size="lg" prefix="￥"></BsInputNumber>
      Default: <BsInputNumber v-model="number" prefix="￥"></BsInputNumber>
      Small：<BsInputNumber v-model="number" size="sm" prefix="￥"></BsInputNumber>
    </div>
    <div>
      Large：<BsInputNumber v-model="number" :control-inner="false" size="lg" prefix="￥"></BsInputNumber>
      Default：<BsInputNumber v-model="number" :control-inner="false" prefix="￥"></BsInputNumber>
      Small：<BsInputNumber v-model="number" :control-inner="false" size="sm" prefix="￥"></BsInputNumber>
    </div>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';

const number = ref(10);
</script>

<style lang="scss" scoped>
.bs-input-number{
  margin: 0 1rem 1rem 0;
}
</style>

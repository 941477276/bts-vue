<docs>

---
order: 0
title:
  zh-CN: 不同大小
  en-US: Sizes
description:
  zh-CN: 设置`size`属性可以改变`bs-modal`宽度，默认有小、默认、大、超大4种尺寸可选，它们对应的`size`属性值为`sm`、`default`、`lg` 、`xl`
  en-US: You can change the width of `bs-modal` by setting the `size` attribute. By default, there are 4 sizes available：small, default, large, and extra large. Their corresponding `size` attribute values are `sm`, `default`, `lg`, `xl`
---
</docs>

<template>
  <div>
    <bs-button type="primary" @click="visible1 = true">Small modal</bs-button>
    <bs-button type="primary" @click="visible2 = true">Default modal</bs-button>
    <bs-button type="primary" @click="visible3 = true">Large modal</bs-button>
    <bs-button type="primary" @click="visible4 = true">Super large modal</bs-button>
    <bs-button type="primary" @click="visible5 = true">Custom width modal</bs-button>
    <bs-modal
      v-model:visible="visible1"
      size="sm"
      title="温馨提示">
      <p>这是一个小弹窗！</p>
    </bs-modal>
    <bs-modal
      v-model:visible="visible2"
      title="温馨提示">
      <p>这是一个默认大小弹窗！</p>
    </bs-modal>
    <bs-modal
      v-model:visible="visible3"
      size="lg"
      title="温馨提示">
      <p>这是一个大弹窗！</p>
    </bs-modal>
    <bs-modal
      v-model:visible="visible4"
      size="xl"
      title="温馨提示">
      <p>这是一个超大弹窗！</p>
    </bs-modal>
    <bs-modal
      v-model:visible="visible5"
      width="70%"
      title="温馨提示">
      <p>这是一个自定义大小的弹窗，宽度为70%！</p>
    </bs-modal>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let visible1 = ref(false);
let visible2 = ref(false);
let visible3 = ref(false);
let visible4 = ref(false);
let visible5 = ref(false);
</script>

<style lang="scss" scoped>
.bs-button{
  margin: 0 1rem 1rem 0;
}
</style>

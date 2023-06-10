<docs>

---
order: 0
title:
  zh-CN: 不同颜色
  en-US: Switch size
description: 
  zh-CN: 通过`color-type`属性可以设置开关打开时的颜色
  en-US: The color when the switch is turned on can be set through the `color-type` attribute
---
</docs>

<template>
  <div>
    <h6>Set color by <code>color-type</code> prop</h6>
    <bs-switch v-model="switch1"></bs-switch>
    <bs-switch v-model="switch1" color-type="secondary"></bs-switch>
    <bs-switch v-model="switch1" color-type="success"></bs-switch>
    <bs-switch v-model="switch1" color-type="warning"></bs-switch>
    <bs-switch v-model="switch1" color-type="danger"></bs-switch>
    <bs-switch v-model="switch1" color-type="info"></bs-switch>
    <bs-switch v-model="switch1" color-type="light"></bs-switch>

    <h6>Custom color</h6>
    <bs-switch v-model="switch2" active-color="#f60"></bs-switch>
    <bs-switch v-model="switch2" active-color="#000"></bs-switch>
    <bs-switch v-model="switch2" active-color="green"></bs-switch>

    <h6>Loading color</h6>
    <bs-switch :model-value="true" loading active-text="Yes"></bs-switch>
    <bs-switch :model-value="false" loading loading-color-type="secondary"></bs-switch>
    <bs-switch :model-value="true" loading loading-color-type="success"></bs-switch>
    <bs-switch :model-value="false" loading loading-color-type="warning"></bs-switch>
    <bs-switch :model-value="true" loading loading-color-type="danger"></bs-switch>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let switch1 = ref(true);
let switch2 = ref(true);
</script>

<style lang="scss" scoped>
.bs-switch{
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>

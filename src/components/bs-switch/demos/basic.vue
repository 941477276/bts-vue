<docs>

---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic usage
description: 
  zh-CN: 最简单的用法
  en-US: Bind the name of the selected Tab through `v-model`, and the first item is selected by default. If `name` is not set, `name` defaults to the index of Tab
---
</docs>

<template>
  <div>
    <div style="margin-bottom: 0.5rem;">
      Boolean value：<bs-switch v-model="switch1"></bs-switch>
      <span style="margin-left: 1rem;">value：{{ switch1 }}</span>
    </div>

    <div style="margin-bottom: 0.5rem;">
      String value：
      <bs-switch
        v-model="switch2"
        active-text="Y"
        inactive-text="N"
        active-value="yes"
        inactive-value="no"></bs-switch>
      <span style="margin-left: 1rem;">value：{{ switch2 }}</span>
    </div>

    <div>
      Number value：
      <bs-switch
        v-model="switch3"
        active-text="Man"
        inactive-text="Woman"
        :active-value="1"
        :inactive-value="2"></bs-switch>
      <span style="margin-left: 1rem;">value：{{ switch3 }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let switch1 = ref(false);
let switch2 = ref('yes');
let switch3 = ref(1);
</script>

<docs>

---
order: 0
title:
  zh-CN: 禁用
  en-US: Disabled
description: 
  zh-CN: 设置`disabled`属性可以禁用`bs-input-tags`
  en-US: Set the `disabled` attribute to disable the `bs-input-tags`
---
</docs>

<template>
  <div>
    <h6>Disabled</h6>
    <BsInputTags disabled v-model="values1"></BsInputTags>
    <h6>Tab disabled close(标签禁用关闭)</h6>
    <BsInputTags v-model="values2"></BsInputTags>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let values1 = ref([
  { label: 'HTML', value: 'html', tagEffect: 'plain', tagType: 'primary' },
  { label: 'Css', value: 'css' },
  { label: 'Javascript', value: 'javascript' }
]);

let values2 = ref([
  { label: 'HTML', value: 'html', disabled: true },
  { label: 'Css', value: 'css', disabled: true },
  { label: 'Javascript', value: 'javascript', disabled: true },
  { label: 'Vue.js', value: 'vue' },
  { label: 'React.js', value: 'react' },
  { label: 'Angular.js', value: 'angular' }
]);
</script>

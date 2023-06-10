<docs>

---
order: 0
title:
  zh-CN: 多选——自定义Tag
  en-US: Multiple--custom tag
description: 
  zh-CN: 多选时选中值多Tag也是可以自定义的
  en-US: When multiple selections are selected, multiple tags can also be customized
---
</docs>

<template>
  <div>
    <bs-select
      v-model="selectOne"
      multiple
      filterable
      style="margin-bottom: 1rem;margin-bottom: 1rem;">
      <bs-option value="html" tag-type="primary">Html</bs-option>
      <bs-option value="css">Css</bs-option>
      <bs-option value="javascript" tag-type="success">Javascript</bs-option>
      <bs-option value="vue" tag-type="info">Vue</bs-option>
      <bs-option value="react" tag-class="react-tag">React</bs-option>
    </bs-select>

    <bs-select
      v-model="selectTwo"
      multiple
      filterable>
      <template #tag="tag">
        {{ tag.label }}
        <span style="color: #F95504;font-weight: bold;" v-if="tag.value === 'html'">(超文本传输语言)</span>
        <span style="color: #0EA001;font-weight: bold;" v-if="tag.value === 'css'">(层叠样式表)</span>
        <span style="color: #0E45E8;font-weight: bold;" v-if="tag.value === 'javascript'">(弱类型脚本语言)</span>
      </template>
      <bs-option value="html">Html</bs-option>
      <bs-option value="css">Css</bs-option>
      <bs-option value="javascript">Javascript</bs-option>
      <bs-option value="vue">Vue</bs-option>
      <bs-option value="react">React</bs-option>
    </bs-select>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';

const selectOne = ref(['html', 'javascript', 'css', 'vue', 'react']);
const selectTwo = ref(['html', 'javascript', 'css', 'vue', 'react']);
</script>

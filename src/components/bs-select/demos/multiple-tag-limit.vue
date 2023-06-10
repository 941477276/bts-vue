<docs>

---
order: 0
title:
  zh-CN: 多选——Tag数量显示
  en-US: Multiple--tag limit
description: 
  zh-CN: 为`bs-select`设置`max-tag-count`属性可以限制显示在界面中Tag的数量
  en-US: Set the `max-tag-count` attribute for `bs-select` to limit the number of Tags displayed
---
</docs>

<template>
  <div>
    <bs-select
      v-model="selectOne"
      multiple
      filterable
      :max-tag-count="2">
      <template #maxTagPlaceholder="{ omittedCount }">
        隐藏了 <strong style="color: #f30;">{{omittedCount}}</strong> 个Tag
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
</script>

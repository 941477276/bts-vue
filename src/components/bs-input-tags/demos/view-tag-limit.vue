<docs>

---
order: 0
title:
  zh-CN: Tag显示数量限制
  en-US: View tag limit
description: 
  zh-CN: 为`bs-input-tags`设置`max-tag-count`属性可以限制显示在界面中Tag的数量
  en-US: Set the `max-tag-count` attribute for `bs-input-tags` to limit the number of Tags displayed
---
</docs>

<template>
  <div>
    <BsInputTags
      v-model="values2"
      :max-tag-count="3">
      <template #maxTagPlaceholder="data">
        还有 <strong style="color: #f00;">{{ data.omittedCount }}</strong> 个Tag
      </template>
    </BsInputTags>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';

let values2 = ref([
  { label: 'HTML', value: 'html', tagEffect: 'plain', tagType: 'primary' },
  { label: 'Css', value: 'css' },
  { label: 'Javascript', value: 'javascript' },
  { label: 'Vue.js', value: 'vue' },
  { label: 'React.js', value: 'react' }
]);
</script>

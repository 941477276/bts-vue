<docs>

---
order: 0
title:
  zh-CN: 自定义标签
  en-US: Custom tag
description: 
  zh-CN: 通过`tag`插槽可以自定义Tag，也可以通过`tagType`来设置Tag的类型
  en-US: You can customize the Tag through the `tag` slot, and you can also set the type of the Tag through `tagType`
---
</docs>

<template>
  <div>
    <h6>Use <code>tag</code> slot</h6>
    <BsInputTags v-model="values1">
      <template #tag="tag">
        {{ tag.label }}
        <small style="color: #f00;" v-if="tag.value == 'html'">(超文本标记语言)</small>
        <small style="color: #f00;" v-if="tag.value == 'css'">(层叠样式表)</small>
        <small style="color: #f00;" v-if="tag.value == 'javascript'">(脚本语言)</small>
      </template>
    </BsInputTags>

    <h6>Use <code>tagType</code> attr</h6>
    <BsInputTags v-model="values2"></BsInputTags>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let values1 = ref([
  { label: 'HTML', value: 'html', tagEffect: 'plain', tagType: 'primary' },
  { label: 'Css', value: 'css' },
  { label: 'Javascript', value: 'javascript' },
  { label: 'Vue.js', value: 'vue' },
  { label: 'React.js', value: 'react' }
]);
let values2 = ref([
  { label: 'HTML', value: 'html', tagType: 'primary' },
  { label: 'Css', value: 'css' },
  { label: 'Javascript', value: 'javascript', tagType: 'success' },
  { label: 'Vue.js', value: 'vue', tagType: 'warning' },
  { label: 'React.js', value: 'react', tagType: 'danger' },
  { label: 'Angular.js', value: 'angular', tagClass: 'angular-tag' }
]);
</script>

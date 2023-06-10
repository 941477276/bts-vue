<docs>
---
order: 0
title:
  zh-CN: 不确定状态
  en-US: Indeterminate state
description:
  zh-CN: `indeterminate`属性用以表示`checkbox`的不确定状态，一般用于实现全选的效果
  en-US: The indeterminate property can help you to achieve a ‘check all‘ effect.
---
</docs>

<template>
  <div>
    <bs-checkbox
      id="ideterminate_checkbox"
      :indeterminate="isIndeterminate"
      v-model="checkAll"
      @change="onSelectAllChange">Select all</bs-checkbox>
    <br>
    <bs-checkbox v-model="language" value="Javascript">Javascript</bs-checkbox>
    <bs-checkbox v-model="language" value="Html">Html</bs-checkbox>
    <bs-checkbox v-model="language" value="Css">Css</bs-checkbox>
  </div>
</template>

<script setup>
import {
  computed,
  ref, watch
} from 'vue';

let checkAll = ref(false);
let language = ref(['Javascript']);
let isIndeterminate = computed(function () {
  return language.value.length != 0 && language.value.length != 3;
});
let onSelectAllChange = function (evt, val) {
  console.log(val);
  if (val) {
    language.value = ['Javascript', 'Html', 'Css'];
  } else {
    language.value = [];
  }
};
watch(language, function () {
  checkAll.value = language.value.length == 3;
});
</script>

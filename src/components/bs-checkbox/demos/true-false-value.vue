<docs>
---
order: 0
title:
  zh-CN: 选中或未选中时的值
  en-US: Value when checked or unchecked
description:
  zh-CN: 有时复选框选中或取消选中后你可能不希望它的值为`Boolean`类型，那么此时你可以通过设置`true-value`、`false-value`属性来设置选中、未选中的值
  en-US: Sometimes you may not want the value of a checkbox to be of `Boolean` type after being checked or unchecked, then you can set the checked and unchecked values by setting `true-value`, `false-value` attributes
---
</docs>

<template>
  <div>
    <div>
      <bs-checkbox v-model="numVal" :true-value="1" :false-value="2">Remember me</bs-checkbox>
      <p style="margin-top: 0.5rem;">Value is: <strong>{{ numVal }}</strong> </p>
    </div>
    <div>
      <bs-checkbox v-model="strVal" true-value="yes" false-value="no">love bts-vue?</bs-checkbox>
      <p style="margin-top: 0.5rem;">Value is: <strong>{{ strVal }}</strong> </p>
    </div>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';

const numVal = ref(2);
const strVal = ref('yes');
</script>

<docs>

---
order: 0
title:
  zh-CN: 不同大小
  en-US: Different size
description:
  zh-CN: `vue3-bootstrap`预置了`sm`、`lg`和`默认`3种尺寸，通过`size`属性来设置它们
  en-US: `vue3-bootstrap` presets `sm`, `lg` and `default` 3 sizes, set them by `size` prop
---
</docs>

<template>
  <div>
    <h6>Large input(<code>size=lg</code>)</h6>
    <div class="mb-1rem">
      <BsDateRangePicker v-model="date" size="lg"></BsDateRangePicker>
    </div>
    <div class="mb-1rem">
      <BsDateRangePicker v-model="dateTime" size="lg" picker-type="dateTime"></BsDateRangePicker>
    </div>
    <div class="mb-1rem">
      <BsDateRangePicker v-model="month" size="lg" picker-type="month"></BsDateRangePicker>
    </div>
    <h6>Default input</h6>
    <div class="mb-1rem">
      <BsDateRangePicker v-model="date"></BsDateRangePicker>
    </div>
    <div class="mb-1rem">
      <BsDateRangePicker v-model="dateTime" picker-type="dateTime"></BsDateRangePicker>
    </div>
    <div class="mb-1rem">
      <BsDateRangePicker v-model="month" picker-type="month"></BsDateRangePicker>
    </div>

    <h6>Small input(<code>size=sm</code>)</h6>
    <div class="mb-1rem">
      <BsDateRangePicker v-model="date" size="sm"></BsDateRangePicker>
    </div>
    <div class="mb-1rem">
      <BsDateRangePicker v-model="dateTime" size="sm" picker-type="dateTime"></BsDateRangePicker>
    </div>
    <div class="mb-1rem">
      <BsDateRangePicker v-model="month" size="sm" picker-type="month"></BsDateRangePicker>
    </div>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';

let date = ref([]);
let dateTime = ref([]);
let month = ref([]);
</script>

<style lang="scss" scoped>
.mb-1rem{
  margin-bottom: 1rem;
}
</style>

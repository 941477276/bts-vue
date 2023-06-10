<docs>

---
order: 0
title:
  zh-CN: 侧边栏
  en-US: Sidebar
description: 
  zh-CN: 设置`show-sidebar`属性可显示侧边栏
  en-US: Set the `show-sidebar` property to display the sidebar
---
</docs>

<template>
  <div>
    <h6>Sidebar in left</h6>
    <BsDatePicker ref="datePicker1" v-model="date" show-sidebar>
      <template #sidebar="{date}">
        <div style="padding: 0.5rem;">
          <bs-button @click="setToday" :title="date && date.format('YYYY-MM-DD')">Today</bs-button>
        </div>
      </template>
    </BsDatePicker>

    <h6 style="margin-top: 1rem;">Sidebar in right</h6>
    <BsDatePicker ref="datePicker2" v-model="date2" show-sidebar sidebar-in-right>
      <template #sidebar="{date}">
        <div style="padding: 0.5rem;">
          <bs-button @click="setToday2" :title="date && date.format('YYYY-MM-DD')">Today</bs-button>
        </div>
      </template>
    </BsDatePicker>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let date = ref('');
let date2 = ref('');
let datePicker1 = ref();
let datePicker2 = ref();

let setToday = function () {
  date.value = new Date();
  datePicker1.value.hide(300);
};
let setToday2 = function () {
  date2.value = new Date();
  datePicker2.value.hide(300);
};
</script>

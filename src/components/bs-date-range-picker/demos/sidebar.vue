<docs>

---
order: 0
title:
  zh-CN: 侧边栏
  en-US: Sidebar
description:
  zh-CN: `show-sidebar`属性配合`sidebar`插槽可显示侧边栏
  en-US: The `show-sidebar` attribute can be used with the `sidebar` slot to display the sidebar
---
</docs>

<template>
  <div>
    <h6>Sidebar in left(侧边栏在左侧)</h6>
    <BsDateRangePicker ref="datePicker1" v-model="date" show-sidebar>
      <template #sidebar>
        <div style="padding: 0.5rem;">
          <bs-button @click="setToday" >Today</bs-button>
        </div>
      </template>
    </BsDateRangePicker>

    <h6 style="margin-top: 1rem;">Sidebar in right(侧边栏在右侧)</h6>
    <BsDateRangePicker ref="datePicker2" v-model="date2" show-sidebar sidebar-in-right>
      <template #sidebar>
        <div style="padding: 0.5rem;">
          <bs-button @click="setToday2">Today</bs-button>
        </div>
      </template>
    </BsDateRangePicker>

    <h6 style="margin-top: 1rem;">Extra footer(底部额外内容)</h6>
    <BsDateRangePicker ref="datePicker3" v-model="date3">
      <template #footer>
        <div style="padding: 0.5rem;">
          <bs-button block type="primary" @click="setToday3">Today</bs-button>
        </div>
      </template>
    </BsDateRangePicker>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let date = ref([]);
let date2 = ref([]);
let date3 = ref([]);
let datePicker1 = ref();
let datePicker2 = ref();
let datePicker3 = ref();

let oneDayTime = 1000 * 60 * 60 * 24;
let aweekTimes = oneDayTime * 7;
let setToday = function () {
  date.value = [Date.now() - aweekTimes, new Date()];
  datePicker1.value.hide(300);
};
let setToday2 = function () {
  datePicker2.value.setDate([Date.now() - aweekTimes, new Date()]);
  datePicker2.value.hide(300);
};
let setToday3 = function () {
  datePicker3.value.setDate([Date.now() - aweekTimes, new Date()]);
  datePicker3.value.hide(300);
};
</script>

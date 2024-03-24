<docs>

---
order: 0
title:
  zh-CN: 面板默认日期
  en-US: Default panel date
description:
  zh-CN: 调用`setPanelViewDate`方法可以设置组件面板默认显示的日期
  en-US: Call the `setPanelViewDate` method to set the default display date of the component panel.
---
</docs>

<template>
  <div>
    <!--<h6>Use <code>panelViewDate</code>  property</h6>
    <BsDatePicker style="margin-right: 0.5rem;" v-model="date" :panel-view-date="panelViewDate"></BsDatePicker>
    <bs-button type="primary" @click="changeViewDate">Change view date</bs-button>-->

    <h6>Call <code>setPanelViewDate</code> function</h6>
    <BsDateRangePicker
      style="margin-right: 0.5rem;"
      ref="datePickerRef"
      v-model="date2"
      @show="handleOpen"></BsDateRangePicker>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue';

/* let date = ref('');
let panelViewDate = ref(new Date('2020/01/01 00:00:00'));
let changeViewDate = function () {
  panelViewDate.value = new Date('2022/12/12 12:12:12');
}; */

let date2 = ref();
let datePickerRef = ref();

const getRandomNumber = function (min, max) {
  return parseInt((Math.random() * (max - min + 1) + min) + '');
};
let handleOpen = function () {
  console.log(111);
  nextTick(function () {
    if (getRandomNumber(0, 20) % 2 == 0) {
      datePickerRef.value.setPanelViewDate(new Date('2034/03/16 16:16:16'));
    } else {
      datePickerRef.value.setPanelViewDate(null, new Date('2024/03/16 16:16:16'));
    }
  });
};
</script>

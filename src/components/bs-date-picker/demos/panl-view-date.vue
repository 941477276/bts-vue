<docs>

---
order: 0
title:
  zh-CN: 默认日期
  en-US: Default date
description:
  zh-CN: 设置`panelViewDate`属性可以设置选择器打开时默认显示的时间，该属性只有在`modelValue`为空时才有效，或者你以可以通过调用选择器的`setPanelViewDate`方法来设置选择器默认显示的时间
  en-US: Set the `panelViewDate` property to set the default display time when the picker is opened. This property is only valid when `modelValue` is empty, or you can set the default display time of the picker by calling the `setPanelViewDate` method of the picker
---
</docs>

<template>
  <div>
    <h6>Use <code>panelViewDate</code>  property</h6>
    <BsDatePicker style="margin-right: 0.5rem;" v-model="date" :panel-view-date="panelViewDate"></BsDatePicker>
    <bs-button type="primary" @click="changeViewDate">Change view date</bs-button>

    <h6>Call <code>setPanelViewDate</code> function</h6>
    <BsDatePicker
      style="margin-right: 0.5rem;"
      ref="datePickerRef"
      v-model="date2"
      @show="handleOpen"></BsDatePicker>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue';

let date = ref('');
let panelViewDate = ref(new Date('2020/01/01 00:00:00'));
let changeViewDate = function () {
  panelViewDate.value = new Date('2022/12/12 12:12:12');
};

let date2 = ref();
let datePickerRef = ref();
let handleOpen = function () {
  nextTick(function () {
    datePickerRef.value.setPanelViewDate(new Date('2022/12/12 12:12:12'));
  });
};
</script>

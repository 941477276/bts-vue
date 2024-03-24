<docs>

---
order: 0
title:
  zh-CN: 禁用
  en-US: Disabled
description:
  zh-CN: 设置`disabled`属性可以禁用日期选择器，设置`disabled-date`属性可以禁用部分日期
  en-US: Set the `disabled` attribute to disable the date picker, and set the `disabled-date` attribute to disable some dates
---
</docs>

<template>
  <div>
    <h6>Disable date picker(禁用整个选择器)</h6>
    <BsDateRangePicker v-model="date" :disabled="datePickerDisabled"></BsDateRangePicker>
    <bs-switch style="margin-left: 1rem;" v-model="datePickerDisabled"></bs-switch>

    <h6>Disable some dates(禁用部分日期)</h6>
    <BsDateRangePicker v-model="date2" :disabled-date="disabledDate"></BsDateRangePicker>

    <h6>Disabled to select 12:00--14:00(禁止选择12:00--14:00)</h6>
    <BsDateRangePicker v-model="dateTime" picker-type="dateTime" :time-panel-props="timePanelProps"></BsDateRangePicker>

    <h6>More than 6 months apart(间隔6个月以上)</h6>
    <BsDateRangePicker v-model="month" picker-type="month" :disabled-date="disabledMonth"></BsDateRangePicker>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import dayjs, { Dayjs } from 'dayjs';

let oneDayTime = 1000 * 60 * 60 * 24;
let aweekTimes = oneDayTime * 7;
let aWeekAgo = new Date().getTime() - aweekTimes;
let now = dayjs();

let date = ref([aWeekAgo, new Date()]);
let datePickerDisabled = ref(true);
let date2 = ref([aWeekAgo, new Date()]);
let dateTime = ref(['2024-03-16 12:00:00', new Date()]);

let month = ref([now.month(now.month() - 3), now.clone()]);

let disabledDate = function (panelData) {
  let {
    current,
    panel
  } = panelData;
  return current.isBefore(now.subtract(7, 'day'), 'date') || (panel == 'end' && current.date() % 4 == 0) || current.isToday();
};

let timePanelProps = {
  disabledHours: function (hour) {
    return hour >= 12 && hour <= 14;
  }
};

let disabledMonth = function ({ current, range }) {
  let [startDate, endDate] = range;

  if (startDate && endDate) {
    // return current.isBetween(startDate, endDate, '[]') && endDate.diff(startDate, 'month') < 6;
    return false;
  }
  if (startDate) {
    let startMonth = startDate.month();
    let fiveMonthBefore = startDate.month(startMonth - 5);
    let fiveMonthAgo = startDate.month(startMonth + 5);
    return current.isBetween(fiveMonthBefore, fiveMonthAgo, 'month', '[]');
  }
  if (endDate) {
    let endMonth = endDate.month();
    let fiveMonthBefore = endDate.month(endMonth - 5);
    let fiveMonthAgo = endDate.month(endMonth + 5);
    return current.isBetween(fiveMonthBefore, fiveMonthAgo, 'month', '[]');
  }
  return false;
};
</script>

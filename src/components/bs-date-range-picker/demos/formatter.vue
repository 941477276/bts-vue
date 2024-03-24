<docs>

---
order: 0
title:
  zh-CN: 日期格式
  en-US: Date format
description:
  zh-CN: `format`属性可以自定义日期显示格式，`value-format`属性可以自定义v-model绑定值的格式
  en-US: The `format` attribute can customize the date display format, and the `value-format` attribute can customize the format of the v-model bound value.
---
</docs>

<template>
  <div>
    <h6>Set format（设置format）</h6>
    <div class="mb-1rem">
      <BsDateRangePicker v-model="date" format="MM/DD/YYYY"></BsDateRangePicker>
    </div>
    <div class="mb-1rem">
      <BsDateRangePicker v-model="date" format="YYYY年MM月DD日"></BsDateRangePicker>
    </div>
    <div class="mb-1rem">
      <BsDateRangePicker v-model="date2" picker-type="dateTime" format="YYYY年MM月DD日 hh时mm分"></BsDateRangePicker>
    </div>

    <h6 style="margin-top: 2.5rem">Set value-format（设置value-format）</h6>
    <div class="mb-1rem">
      <BsDateRangePicker v-model="date3"></BsDateRangePicker>
      <div class="date-value">
        value: {{ date3 }}
      </div>
    </div>
    <div class="mb-1rem">
      <BsDateRangePicker v-model="date4" value-format="YYYY年MM月DD日"></BsDateRangePicker>
      <div class="date-value">
        value: {{ date4 }}
      </div>
    </div>
    <div class="mb-1rem">
      <BsDateRangePicker v-model="date5" picker-type="dateTime" value-format="YYYY年MM月DD日 hh时mm分ss秒"></BsDateRangePicker>
      <div class="date-value">
        value: {{ date5 }}
      </div>
    </div>
    <div class="mb-1rem">
      <BsDateRangePicker v-model="date6" picker-type="month" value-format="YYYY年MM月"></BsDateRangePicker>
      <div class="date-value">
        value: {{ date6 }}
      </div>
    </div>
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
let date2 = ref([aWeekAgo, new Date()]);
let dateTime = ref(['2024-03-16 12:00:00', new Date()]);

let date3 = ref([]);
let date4 = ref(['2024年03月15日', '2024年03月17日']);
let date5 = ref([]);
let date6 = ref(['2024年02月', '2024年09月']);
</script>

<style lang="scss" scoped>
.mb-1rem{
  margin-bottom: 1rem;
}
.bs-datetime-range-editor{
  :deep(.bs-range-editor-input){
    max-width: none;
    width: 13rem;
  }
}
.date-value{
  padding-top: 5px;
  color: #666;
}
</style>

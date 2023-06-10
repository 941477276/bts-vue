<docs>

---
order: 0
title:
  zh-CN: 定制单元格
  en-US: Custom cell
description: 
  zh-CN: 可以通过`dateRender`插槽，或`dateRender`函数来定制单元格
  en-US: You can customize the cell through the `dateRender` slot, or the `dateRender` function
---
</docs>

<template>
  <div>
    <h6>Use <code>dateRender</code> function</h6>
    <BsDatePicker
      name="startDate"
      v-model="date1"
      :date-render="dateRender2"></BsDatePicker>

    <h6>Use <code>dateRender</code> slot</h6>
    <BsDatePicker
      name="startDate"
      v-model="date1">
      <template #dateRender="cell">
        {{ cell.dayjsIns.date() }}<small style="color: #f60;margin-left: 2px; opacity: 0.6;">cn</small>
      </template>
    </BsDatePicker>
  </div>
</template>

<script setup>
import { h, ref } from 'vue';

let date1 = ref('2022-08-10');
let dateRender2 = function (cellData) {
  let current = cellData.dayjsIns;
  // console.log('cellData', cellData);
  return h('div', [
    current.date(),
    h('small', {
      style: {
        color: '#f60',
        marginLeft: '2px',
        opacity: 0.6
      }
    }, 'cn')
  ]);
};
</script>
'
<style lang="scss" scoped>
.bs-date-editor{
  margin: 0 1rem 1rem 0;
}
</style>

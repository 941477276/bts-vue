<docs>

---
order: 0
title:
  zh-CN: 圆环自定义颜色
  en-US: Circle custom color
description:
  zh-CN: 设置`color`属性可以自定义颜色，它可以是一个`string`类型的颜色值、一个函数、一个对象或者一个`{color:string; percentage:number}`类型的数组。
  en-US: You can customize the color by setting the `color` property, which can be a `string` type color value, a function, an object or an `{color:string; percentage:number}` type array.
---
</docs>

<template>
  <div>
    <dl>
      <dt>Gradient color<small>(渐变色)</small></dt>
      <dd>
        <bs-progress
          type="circle"
          stroke-linecap="round"
          :percentage="65"
          :color="{
            from: '#108ee9',
            to: '#87d068'
          }"></bs-progress>
      </dd>
    </dl>

    <dl>
      <dt>Custom color<small>(自定义颜色)</small></dt>
      <dd>
        <bs-progress
          type="circle"
          stroke-linecap="round"
          :percentage="65"
          color="#f30"
          title="custom color by 'color'"></bs-progress>

        <bs-progress
          type="circle"
          stroke-linecap="round"
          class="color-f60"
          title="custom color by 'class'"
          :percentage="65"></bs-progress>

        <bs-progress
          type="circle"
          stroke-linecap="round"
          :color="getStrokeColor"
          title="custom color by 'color function'"
          :percentage="65"></bs-progress>
      </dd>
    </dl>

    <dl>
      <dt>Segmented color<small>(分段颜色)</small></dt>
      <dd>
        <bs-progress
          type="circle"
          stroke-linecap="round"
          :percentage="percentage"
          :color="customColors"></bs-progress>

        <bs-button-group style="margin-left: 1rem;">
          <bs-button @click="handlePercentage(-1)" type="primary" plain>Sub</bs-button>
          <bs-button @click="handlePercentage(1)" type="primary" plain>Add</bs-button>
        </bs-button-group>

      </dd>
    </dl>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const getStrokeColor = function () {
  return '#f90';
};

const customColors = [
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 }
];
let percentage = ref(20);
let handlePercentage = function (type: number) {
  let val = 0;
  if (type == -1) {
    val = percentage.value - 10;
  } else {
    val = percentage.value + 10;
  }
  if (val < 0) {
    val = 0;
  } else if (val > 100) {
    val = 100;
  }
  percentage.value = val;
};
</script>

<style lang="scss" scoped>
dl{
  display: inline-block;
  padding-right: 1rem;
  border-right: 1px solid #eee;
  margin-bottom: 1rem;
  & + dl{
    margin-left: 1rem;
  }
  dt{
    margin-bottom: 0.5rem;
  }
}
.color-f60{
  :deep(.bs-progress-circle-path){
    stroke: #f60;
  }
}
</style>

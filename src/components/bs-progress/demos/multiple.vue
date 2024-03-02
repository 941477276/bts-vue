<docs>

---
order: 0
title:
  zh-CN: 分段进度条
  en-US: Segmented progress
description:
  zh-CN: 当需要在一个进度条上显示多个进度信息的时候可以使用分度式进度条
  en-US: When you need to display multiple progress information on a progress bar, you can use the graduated progress bar
---
</docs>

<template>
  <div>
    <bs-progress multiple :progresses="progresses">
      <template #default="{percentage}">
        <bs-tooltip :content="`Progress: ${percentage}%`">
          <span class="custom-progress-content">{{ percentage }}</span>
        </bs-tooltip>

      </template>
    </bs-progress>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import BsTooltip from '../../bs-tooltip/BsTooltip.vue';

let progresses = ref([
  {
    percentage: 20,
    colorType: 'primary'
  },
  {
    percentage: 24,
    colorType: 'success',
    striped: true
  },
  {
    percentage: 16,
    colorType: 'warning'
  },
  {
    percentage: 40,
    colorType: 'info',
    striped: true,
    animated: true
  }
]);
</script>

<style lang="scss" scoped>
.bs-progress{
  ::v-deep(.progress-bar){
    position: relative;
    .custom-progress-content{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      line-height: 16px;
    }
  }
}
</style>

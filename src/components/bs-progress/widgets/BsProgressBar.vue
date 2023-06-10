<template>
  <div
    class="progress-bar"
    :class="[
      `bg-${colorType}`,
      {
        'progress-bar-striped': striped,
        'progress-bar-animated': animated
      }
    ]"
    :style="{width: percentageNumber + '%', backgroundColor}"
    role="progressbar"
    :aria-valuenow="percentage"
    aria-valuemin="0"
    aria-valuemax="100">
    <slot :percentage="percentageNumber">{{ text }}</slot>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed
} from 'vue';
import { bsProgressProps } from '../bs-progress-types';

export default defineComponent({
  name: 'BsProgressBar',
  components: {
  },
  props: bsProgressProps,
  setup (props: any, ctx: any) {
    let percentageNumber = computed(function () {
      let percentage = props.percentage;
      if (typeof percentage === 'string' && /%$/.test(percentage)) {
        percentage = percentage.split('%')[0];
      }
      percentage = Number(percentage);
      if (percentage < 0) {
        percentage = 0;
      } else if (percentage > 100) {
        percentage = 100;
      }
      return percentage;
    });

    // 显示文字
    let text = computed(function () {
      if (!props.showText) {
        return '';
      }
      if (typeof props.textFormat === 'function') {
        return props.textFormat(percentageNumber.value);
      }
      return percentageNumber.value + '%';
    });

    // 背景色
    let backgroundColor = computed(function () {
      let color = props.color;
      let percentageVal = percentageNumber.value;
      if (typeof color === 'string') {
        return color ? (color + '!important') : '';
      } else if (typeof color === 'function') {
        let result = color(percentageVal);
        if (typeof result === 'string') {
          return result ? (result + '!important') : '';
        }
        if (Array.isArray(result)) {
          color = result;
        }
      }
      if (Array.isArray(color)) {
        // 根据当前进度显示不同的颜色
        let colorItem = color.find(item => percentageVal < (item.percentage || 0));
        if (!colorItem) {
          return '';
        }
        return colorItem.color ? (colorItem.color + '!important') : '';
      }
      return '';
    });
    return {
      percentageNumber,
      text,
      backgroundColor
    };
  }
});
</script>

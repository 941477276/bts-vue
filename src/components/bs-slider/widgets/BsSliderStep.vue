<template>
  <div class="bs-slider-step">
    <div
      class="bs-slider-dot"
      v-for="(item, index) in dots"
      :class="[
        `bs-slider-dot_${index}`,
        {
          'bs-slider-dot-active': item.isActive
        }
      ]"
      :key="item.value"
      :style="`${vertical ? 'top' : 'left'}: ${item.percentage}%;`"
      :data-value="item.value"
      :data-percentage="item.percentage"></div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed
} from 'vue';
import { BigNumber } from 'bignumber.js';
import { calcPercentage } from '../bsSliderUitl';

export default defineComponent({
  name: 'BsSliderStep',
  props: {
    value: {
      type: [Number, String, Array],
      default: 0
    },
    vertical: {
      type: Boolean,
      default: false
    },
    min: { // 最小值
      type: Number,
      default: 0
    },
    max: { // 最大值
      type: Number,
      default: 100
    },
    step: {
      type: [Number, String],
      default: 1
    },
    showSteps: { // 是否显示间断点
      type: Boolean,
      default: false
    },
    marks: { // 刻度标记，key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标签可以单独设置样式
      type: Object,
      default () {
        return {};
      }
    },
    included: { // 当有marks或showSteps时，值为 true 时表示值为包含关系，false 表示并列
      type: Boolean,
      default: true
    }
  },
  setup (props: any) {
    let dots = computed(function () {
      let marks = props.marks;
      let step = props.step;
      let result = [];
      let min = props.min;
      let max = props.max;
      if (marks && Object.keys(marks).length > 0) {
        result = Object.keys(marks).map(key => Number(key));
      } else if (props.showSteps) {
        let count = Math.floor(new BigNumber(max).minus(min).dividedBy(step).toNumber());
        // let bignumberStep = new BigNumber
        for (let i = 0; i <= count; i++) {
          result.push(new BigNumber(step).multipliedBy(i).toNumber());
        }
      }
      result = result.map(value => {
        let isActive = false;
        if (props.included) {
          let valueProps = props.value;
          if (Array.isArray(valueProps)) {
            isActive = valueProps[0] <= value && valueProps[1] >= value;
          } else {
            isActive = valueProps >= value;
          }
        }
        return {
          value,
          isActive,
          percentage: calcPercentage(value, min, max)
        };
      });
      return result;
    });

    return {
      dots
    };
  }
});
</script>

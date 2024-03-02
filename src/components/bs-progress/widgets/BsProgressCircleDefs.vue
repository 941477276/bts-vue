<template>
  <defs>
    <linearGradient
      :id="gradientId"
      x1="100%"
      y1="0%"
      x2="0%"
      y2="0%"
    >
      <stop
        v-for="(key, index) in sortedGradientKeys"
        :key="index"
        :offset="key"
        :stop-color="gradientColor?.[key]"></stop>
    </linearGradient>
  </defs>
</template>

<script lang="ts">
import {
  computed,
  defineComponent
} from 'vue';

export default defineComponent({
  name: 'BsProgressCircleDefs',
  props: {
    gradientId: { // linearGradient标签的ID
      type: String
    },
    gradientColor: { // 颜色渐变对象，{ '0%': '#108ee9', '100%': '#87d068' }
      type: Object,
      default () {
        return {};
      }
    }
  },
  setup (props: any) {
    let toNumber = function (num: string|number) {
      if (typeof num == 'number') {
        return num;
      }
      return parseFloat(num);
    };
    let sortedGradientKeys = computed(function () {
      let gradientColor = props.gradientColor;
      return Object.keys(gradientColor).sort((a, b) => toNumber(a) - toNumber(b));
    });
    return {
      sortedGradientKeys
    };
  }
});
</script>

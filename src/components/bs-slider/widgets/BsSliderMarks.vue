<template>
  <div class="bs-slider-marks">
    <div
      class="bs-slider-mark-text"
      v-for="(item, index) in markTexts"
      :class="[
        `bs-slider-mark-text_${index}`,
        {
          'bs-slider-mark-text-active': item.isActive
        }
      ]"
      :key="item.value"
      :style="{
        ...(item.style || {}),
        top: vertical ? `${item.percentage}%` : '',
        left: !vertical ? `${item.percentage}%` : ''
      }"
      :data-value="item.value"
      :data-percentage="item.percentage"
      @click="onMarkItemClick(item.value)">
      <BsPropsSlot :content="item.label"></BsPropsSlot>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  PropType
} from 'vue';
import BsPropsSlot from '../../bs-props-slot/BsPropsSlot.vue';
import { calcPercentage, getSliderHandlerNameByValue } from '../bsSliderUitl';
import { BsSliderMask } from '../bs-slider-types';

export default defineComponent({
  name: 'BsSliderMarks',
  components: {
    BsPropsSlot
  },
  props: {
    value: {
      type: [Number, String, Array],
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    },
    range: {
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
    marks: { // 刻度标记，key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标签可以单独设置样式
      type: Object as PropType<BsSliderMask>,
      default () {
        return {};
      }
    },
    included: { // 当有marks或showSteps时，值为 true 时表示值为包含关系，false 表示并列
      type: Boolean,
      default: true
    },
    setValue1: {
      type: Function,
      default: null
    },
    setValue2: {
      type: Function,
      default: null
    }
  },
  setup (props: any) {
    let markTexts = computed(function () {
      // let marks = props.marks;
      // let step = props.step;
      // let result = [];
      let min = props.min;
      let max = props.max;

      let result = Object.entries(props.marks).map((entry) => {
        let value = Number(entry[0]);
        let label:any = entry[1];
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
          percentage: calcPercentage(value, min, max),
          label: (typeof label === 'object' && label != null) ? label.label : label,
          style: (typeof label === 'object' && label != null) ? label.style : null
        };
      });
      return result;
    });

    let onMarkItemClick = function (markValue: number) {
      if (props.disabled) {
        return;
      }
      let value1 = 0;
      let value2 = 0;
      let valueProps = props.value;
      if (Array.isArray(valueProps)) {
        value1 = valueProps[0];
        value2 = valueProps[1];
      } else {
        value1 = valueProps;
      }
      let sliderHandlerName = getSliderHandlerNameByValue(markValue as number, value1, value2, props);
      if (sliderHandlerName === 'sliderHandler1') {
        props.setValue1(markValue * 1);
      } else {
        props.setValue2(markValue * 1);
      }
    };

    return {
      markTexts,
      onMarkItemClick
    };
  }
});
</script>

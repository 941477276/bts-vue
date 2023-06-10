<template>
  <BsTooltip
    ref="tooltipComRef"
    :transition-name="tooltipTransitionName"
    :popper-class="tooltipClass"
    :placement="tooltipPlacement"
    :disabled="disabled"
    :visible="tooltipShow"
    :content="tooltipContent"
    :is-raw-content="tooltipRawContent">
    <div
      ref="sliderHandlerRef"
      class="bs-slider-handler"
      tabindex="0"
      v-bind="$attrs"
      :style="{
        left: vertical ? '' : (percentage * 100) + '%',
        top: vertical ? ((percentage * 100) + '%') : ''
      }"
      :data-percentage="percentage"
      @mousedown.stop="onMousedown"
      @mouseenter="onMouseenter"
      @mouseleave="onMouseleave"
      @keydown="onKeydown"
      @touchstart.stop="onMousedown"></div>
  </BsTooltip>
</template>

<script lang="ts">
import {
  PropType,
  defineComponent,
  computed,
  ref,
  unref,
  watch,
  onMounted
} from 'vue';
import { bsSliderProps } from '../bs-slider-types';
import BsTooltip from '../../bs-tooltip/BsTooltip.vue';
import { BigNumber } from 'bignumber.js';
import { useSliderHandler } from './useSliderHandler';
import { useClickOutside } from '../../../hooks/useClickOutside';

export default defineComponent({
  name: 'BsSliderHandler',
  components: {
    BsTooltip
  },
  props: {
    ...bsSliderProps,
    modelValue: {
      type: Number,
      default: 0
    },
    sliderRef: {
      type: Object as PropType<HTMLElement|null>,
      default () {
        return {};
      }
    },
    precision: { // 小数点精度
      type: Number,
      default: 0
    }
  },
  inheritAttrs: false,
  emits: ['update:modelValue', 'change'],
  setup (props: any, ctx: any) {
    let tooltipComRef = ref(null);
    let sliderHandlerRef = ref<HTMLElement|null>(null);
    let wh = window.innerWidth;
    // 计算百分比
    let percentage = computed<number>(function () {
      let propsMin = props.min;
      let propsMax = props.max;

      let min = new BigNumber(propsMin);
      let diff = new BigNumber(props.max).minus(min); // minus减法
      let value = props.modelValue;
      if (value < propsMin) {
        value = propsMin;
      }
      if (value > propsMax) {
        value = propsMax;
      }
      // dividedBy 除法
      return (new BigNumber(value).minus(min)).dividedBy(diff).toNumber();
    });

    let tooltipVisible = ref(false);
    let { onMousedown, onMouseenter, onMouseleave, onKeydown, setValue, tooltipShortShow } = useSliderHandler(props, ctx, tooltipComRef, tooltipVisible, sliderHandlerRef);

    let tooltipShow = computed(function () {
      if (typeof props.showToolTip === 'boolean') {
        return props.showToolTip;
      }
      return tooltipVisible.value;
    });

    let tooltipContent = computed(function () {
      let modelVal = props.modelValue;
      let tooltipFormatter = props.tooltipFormatter;
      if (typeof tooltipFormatter === 'function') {
        return tooltipFormatter(modelVal, percentage.value);
      }
      return modelVal;
    });

    let tooltipPlacement = computed(function () {
      if (!props.tooltipPlacement) {
        if (props.vertical) {
          if (wh < 900) { // 在移动设备上如果tooltip在右边则会被手指挡住
            return 'top';
          } else {
            return 'right';
          }
        } else {
          return 'top';
        }
      }
      return props.tooltipPlacement;
    });

    useClickOutside(sliderHandlerRef, function (flag: boolean) {
      if (flag) {
        tooltipVisible.value = false;
      }
    });

    return {
      percentage,
      tooltipPlacement,
      tooltipComRef,
      sliderHandlerRef,
      tooltipShow,
      tooltipContent,

      setValue,
      tooltipShortShow,
      onMousedown,
      onMouseenter,
      onMouseleave,
      onKeydown
    };
  }
});
</script>

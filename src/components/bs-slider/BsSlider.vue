<template>
<div
  ref="sliderRef"
  class="bs-slider"
  :class="{
    'bs-slider-disabled': disabled,
    'bs-slider-vertical': vertical,
    'has-marks': hasMasks
  }">
  <div
    class="bs-slider-rail"
    @click="handleSliderRailClick">
    <div
      class="bs-slider-track"
      :style="trackStyle"></div>
    <BsSliderStep
      :value="modelValue"
      :included="included"
      :marks="marks"
      :max="max"
      :min="min"
      :show-steps="showSteps"
      :step="step"
      :vertical="vertical"></BsSliderStep>
    <BsSliderHandler
      ref="sliderHandler1Ref"
      v-bind="$props"
      class="bs-slider-handler-1"
      :slider-ref="sliderRef"
      :model-value="value1"
      :precision="precision"
      @update:modelValue="setValue1"></BsSliderHandler>

    <BsSliderHandler
      ref="sliderHandler2Ref"
      v-if="range"
      v-bind="$props"
      class="bs-slider-handler-2"
      :slider-ref="sliderRef"
      :model-value="value2"
      :precision="precision"
      @update:modelValue="setValue2"></BsSliderHandler>
  </div>

  <BsSliderMarks
    v-if="Object.keys(marks).length > 0"
    :value="modelValue"
    :included="included"
    :disabled="disabled"
    :range="range"
    :marks="marks"
    :max="max"
    :min="min"
    :vertical="vertical"
    :set-value1="setValue1"
    :set-value2="setValue2"></BsSliderMarks>
</div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  ref,
  unref,
  watch
} from 'vue';
import { bsSliderProps } from './bs-slider-types';
import BsSliderHandler from './widgets/BsSliderHandler.vue';
import BsSliderStep from './widgets/BsSliderStep.vue';
import BsSliderMarks from './widgets/BsSliderMarks.vue';
import { useSlider } from './useSlider';
import { useSliderRail } from './useSliderRail';

export default defineComponent({
  name: 'BsSlider',
  components: {
    BsSliderHandler,
    BsSliderStep,
    BsSliderMarks
  },
  props: bsSliderProps,
  emits: ['update:modelValue', 'change'],
  setup (props: any, ctx: any) {
    let sliderRef = ref<HTMLElement|null>(null);
    let sliderHandler1Ref = ref<HTMLElement|null>(null);
    let sliderHandler2Ref = ref<HTMLElement|null>(null);
    // 判断是否传递了masks
    let hasMasks = computed(function () {
      return props.marks && Object.keys(props.marks).length > 0;
    });
    // let tooltipContent = computed(function ())

    let value1 = ref(0);
    let value2 = ref(0);
    watch(() => props.modelValue, function (newModelValue) {
      if (props.range) {
        value1.value = newModelValue[0];
        value2.value = newModelValue[1];
      } else {
        value1.value = Array.isArray(newModelValue) ? newModelValue[0] : newModelValue;
      }
    }, { immediate: true });

    let { precision, percentage, trackStyle, setValue1, setValue2 } = useSlider(props, ctx, value1, value2);
    let { handleSliderRailClick } = useSliderRail(value1, value2, setValue1, setValue2, props, sliderRef, precision, sliderHandler1Ref, sliderHandler2Ref);

    return {
      sliderRef,
      sliderHandler1Ref,
      sliderHandler2Ref,
      hasMasks,
      percentage,
      trackStyle,
      value1,
      value2,
      precision,

      setValue1,
      setValue2,
      handleSliderRailClick
    };
  }
});
</script>

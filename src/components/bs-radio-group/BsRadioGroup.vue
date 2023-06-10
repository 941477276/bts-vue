<template>
  <component
    class="bs-radio-group"
    :is="elTag">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { defineComponent, provide, reactive } from 'vue';
import {
  radioGroupContextKey,
  RadioGroupContext
} from '../bs-radio/bs-radio-types';
import { bsRadioGroupProps } from './bs-radio-group-types';

export default defineComponent({
  name: 'BsRadioGroup',
  props: bsRadioGroupProps,
  emits: ['update:modelValue', 'change'],
  setup (props: any, ctx: any) {
    let changeVal = function (val: string|number|boolean) {
      ctx.emit('update:modelValue', val);
      ctx.emit('change', val);
    };

    provide<RadioGroupContext>(radioGroupContextKey, reactive({
      props,
      changeVal
    }));

    return {
      changeVal
    };
  }
});
</script>

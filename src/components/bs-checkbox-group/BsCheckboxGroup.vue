<template>
  <component
    class="bs-checkbox-group"
    :is="elTag">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { defineComponent, provide, reactive } from 'vue';
import {
  checkboxGroupContextKey,
  CheckboxGroupContext
} from '../bs-checkbox/bs-checkbox-types';
import { bsCheckboxGroupProps } from './bs-checkbox-group-types';

export default defineComponent({
  name: 'BsCheckboxGroup',
  props: bsCheckboxGroupProps,
  emits: ['update:modelValue', 'change'],
  setup (props: any, ctx: any) {
    if (typeof props.modelValue === 'string') {
      ctx.emit('update:modelValue', props.modelValue.length === 0 ? [] : props.modelValue.split(','));
    }
    let changeVal = function (val: string|number|boolean) {
      ctx.emit('update:modelValue', val);
      ctx.emit('change', val);
    };

    provide<CheckboxGroupContext>(checkboxGroupContextKey, reactive({
      props,
      changeVal
    }));

    return {
      changeVal
    };
  }
});
</script>

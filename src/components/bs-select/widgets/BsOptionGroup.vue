<template>
  <li
    class="bs-option-group"
    :class="{'is-disabled': disabled}">
    <div class="bs-option-group-title" :title="label">
      <slot name="label">{{ label }}</slot>
    </div>
    <ul class="bs-option-group-list">
      <slot></slot>
    </ul>
  </li>
</template>

<script lang="ts">
import {
  defineComponent,
  provide,
  reactive
} from 'vue';
import {
  bsSelectOptionGroupProps,
  SelectOptionGroupContext,
  selectOptionGroupContextKey
} from '../bs-select-types';

export default defineComponent({
  name: 'BsOptionGroup',
  props: bsSelectOptionGroupProps,
  setup (props: any) {
    provide<SelectOptionGroupContext>(selectOptionGroupContextKey, reactive({
      props
    }));
    return {};
  }
});
</script>

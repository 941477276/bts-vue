<template>
  <component
    class="btn bs-button"
    :is="tag"
    :type="nativeType"
    :class="btnClass"
    :disabled="disabled || (loading && disabledOnLoading) || null"
    :aria-disabled="disabled || (loading && disabledOnLoading)"
    :role-type="tag != 'button' ? 'button' : null"
    @click="onBtnClick"
    @blur="$emit('blur', $event)"
    @focus="$emit('focus', $event)"
    @mouseenter="$emit('mouseenter', $event)"
    @mouseleave="$emit('mouseleave', $event)"
    @mousewheel="$emit('mousewheel', $event)"
    @contextmenu="$emit('contextmenu', $event)"
    @dblclick="$emit('dblclick', $event)">
    <slot name="loading" v-if="loading">
      <span class="spinner-border" role="status"></span>
    </slot>
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import { bsButtonProps } from './bs-button-types';

export default defineComponent({
  name: 'BsButton',
  props: bsButtonProps,
  emits: ['click', 'focus', 'blur', 'mouseenter', 'mouseleave', 'mousewheel', 'contextmenu', 'dblclick'],
  setup (props: any, ctx) {
    let btnClass = computed<Array<string|unknown>>(() => {
      let classArr = [];
      let bntType = props.type;

      if (bntType) {
        if (props.plain) {
          classArr.push(`btn-outline-${bntType}`);
          if (!bntType) {
            classArr.push('btn-outline-default');
          }
        } else {
          classArr.push(`btn-${bntType}`); // 按钮类型的class
        }
      }

      if (props.size) {
        classArr.push(`btn-${props.size}`);
      }
      if (props.block) {
        classArr.push('btn-block');
      }
      if (props.round) {
        classArr.push('rounded-pill');
      }
      if (props.squared) {
        classArr.push('rounded-0');
      }
      if (props.disabled) {
        classArr.push('disabled');
      }
      if (props.loading) {
        classArr.push('is-loading');
      }
      if (props.dropdownToggle) {
        classArr.push('dropdown-toggle');
      }
      if (props.showToggleSplit) {
        classArr.push('dropdown-toggle-split');
      }
      return classArr;
    });
    let onBtnClick = function (evt: MouseEvent): void {
      if (props.disabled || props.loading) {
        return;
      }
      ctx.emit('click', evt);
    };

    return {
      btnClass,
      onBtnClick
    };
  }
});
</script>

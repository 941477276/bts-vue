<template>
  <button
    type="button"
    class="bs-input-number-operate-button"
    :class="[`bs-input-number-${type}`]"
    :readonly="readonly"
    :disabled="disabled"
    @click="$emit('click')"
    @focus="$emit('focus')"
    @blur="$emit('blur')">
    <svg v-if="type == 'increase'" viewBox="0 0 16 16" width="1em" height="1em" class="bs-input-number-operate-icon plus-icon" focusable="false" role="img" aria-label="plus" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><g transform="translate(8 8) scale(1.25 1.25) translate(-8 -8)"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path></g></svg>
    <svg v-else viewBox="0 0 16 16" width="1em" height="1em" class="bs-input-number-operate-icon miplus-icon" focusable="false" role="img" aria-label="dash" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><g transform="translate(8 8) scale(1.25 1.25) translate(-8 -8)"><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path></g></svg>
  </button>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType
} from 'vue';

type BsInputNumberOperateButtonType = 'increase' | 'decrease';
export default defineComponent({
  name: 'BsInputNumberOperateButton',
  props: {
    type: {
      type: String as PropType<BsInputNumberOperateButtonType>,
      default: 'increase'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click', 'focus', 'blur']
});
</script>

<template>
  <li
    v-show="visible"
    ref="bsOptionRef"
    class="bs-option"
    :class="{
      'is-disabled': isDisabled,
      'is-checked': isSelected
    }"
    @click="onOptionClick">
    <div class="bs-option-label">
      <slot>{{ label }}</slot>
    </div>
    <BsiCheckLg class="bs-option-check-icon"></BsiCheckLg>
  </li>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  toRef,
  reactive,
  inject,
  computed,
  onMounted,
  onBeforeUnmount,
  PropType
} from 'vue';
import {
  SelectContext,
  SelectOptionGroupContext,
  selectContextKey,
  selectOptionGroupContextKey,
  bsSelectOptionProps
} from '../bs-select-types';
import { BsiCheckLg } from 'vue3-bootstrap-icon/es/icons/BsiCheckLg';
import {
  isFunction
} from '../../../utils/bs-util';

let selectOptionCount = 0;
export default defineComponent({
  name: 'BsOption',
  components: {
    BsiCheckLg
  },
  props: bsSelectOptionProps,
  setup (props: any) {
    let bsOptionRef = ref<HTMLElement|null>(null);
    let optionId = `selectOption_${++selectOptionCount}`;
    let selectCtx = inject<SelectContext|null>(selectContextKey, {} as SelectContext);
    let optionGroupCtx = inject<SelectOptionGroupContext|null>(selectOptionGroupContextKey, null);

    let visible = computed(function () {
      let filterMethod = selectCtx?.filterMethod;
      if (!filterMethod || !isFunction(filterMethod)) {
        return true;
      }
      let label = props.label || (bsOptionRef.value as HTMLElement)?.innerText;
      if (label == null || typeof label === 'undefined') {
        return false;
      }
      return filterMethod({
        label,
        value: props.value,
        disabled: props.disabled
      });
    });

    let isSelected = computed<boolean>(function () {
      if (selectCtx) {
        let selectModelValue: unknown[] = Array.isArray(selectCtx.props.modelValue) ? selectCtx.props.modelValue : [selectCtx.props.modelValue];
        let propsVal = props.value;
        return selectModelValue.some(modelValItem => modelValItem === propsVal);
      }
      return false;
    });

    let isDisabled = computed<boolean>(function () {
      if (optionGroupCtx && optionGroupCtx.props.disabled) {
        return true;
      }
      return props.disabled;
    });

    let onOptionClick = function () {
      if (!isDisabled.value && selectCtx) {
        if (selectCtx.props.multiple) {
          selectCtx.changeVal(props.value, isSelected.value);
        } else {
          selectCtx.changeVal(props.value);
        }
      }
    };

    onMounted(function () {
      if (selectCtx) {
        selectCtx.addOption(reactive({
          id: optionId,
          value: toRef(props, 'value'),
          label: toRef(props, 'label'),
          labelSlot: (bsOptionRef.value as HTMLElement).innerText,
          disabled: isDisabled,
          tagType: toRef(props, 'tagType'),
          tagClass: toRef(props, 'tagClass')
        }));
      }
    });

    onBeforeUnmount(function () {
      if (selectCtx) {
        selectCtx.removeOption(optionId, props.value);
      }
    });

    return {
      visible,
      isSelected,
      isDisabled,
      bsOptionRef,
      onOptionClick
    };
  }
});
</script>

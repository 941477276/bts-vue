<template>
  <div
    class="bs-datetime-editor"
    :class="[
      {
        'is-focus': visible
      },
      size ? `bs-datetime-editor-${size}` : ''
    ]">
    <BsOnlyChild>
      <slot name="trigger">
        <!--<BsInput
          ref="bsInputRef"
          :model-value="inputModelValue"
          :disabled="disabled"
          :id="bsCommonPickerId"
          :size="size"
          :suffix-icon="suffixIcon"
          :clearable="clearable"
          :name="name"
          :placeholder="placeholder"
          :readonly="inputReadOnly"
          :delive-context-to-form-item="false"
          @input="onInput"
          @focus="onInputFocus"
          @blur="onInputBlur"
          @click="showDropdown"
          @clear="$emit('clear')"
          @update:modelValue="$emit('update:inputModelValue', $event)">
          <slot name="suffix"></slot>
        </BsInput>-->
        <div class="bs-datetime-editor-input-wrap">
          <input
            type="text"
            autocomplete="off"
            ref="bsInputRef"
            v-bind="nativeAttrs"
            class="form-control"
            :class="[
              {
                'is-valid': validateStatus === 'success',
                'is-invalid': validateStatus === 'error',
                'date-is-disabled': inputValueDisabled
              },
              size ? `form-control-${size}` : ''
            ]"
            :value="inputModelValue"
            :disabled="disabled"
            :id="bsCommonPickerId"
            :name="name"
            :placeholder="placeholder"
            :readonly="inputReadonly"
            @input="onInput"
            @focus="onInputFocus"
            @blur="onInputBlur"
            @click="showDropdown" />
          <div class="bs-datetime-editor-input-suffix" @click="handleInputSuffixClick">
            <slot name="icon"><BsiCalendar></BsiCalendar></slot>
            <BsiXCircle v-if="inputModelValue && clearable && !disabled" class="clear-icon" @click.stop="handleClear"></BsiXCircle>
          </div>
        </div>
      </slot>
    </BsOnlyChild>
    <teleport :disabled="!teleported" :to="appendTo">
      <BsDropdownTransition
        v-if="display"
        :reference-ref="triggerRef"
        :try-all-placement="false"
        :set-min-width="setMinWidth"
        :will-visible="willVisible"
        :placement="placement"
        @before-enter="$emit('show')"
        @after-enter="$emit('shown')"
        @after-leave="$emit('hidden')">
        <div
          ref="bsPickerDropdownRef"
          v-show="visible"
          class="bs-picker-dropdown"
          :class="dropdownClass">
          <div class="bs-picker-panel-container">
            <slot></slot>
          </div>
        </div>
      </BsDropdownTransition>
    </teleport>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  watch,
  nextTick,
  PropType
} from 'vue';
// import BsInput from '../bs-input/BsInput.vue';
import BsDropdownTransition from '../bs-dropdown-transition/BsDropdownTransition.vue';
import BsOnlyChild from '../bs-slot/BsOnlyChild.vue';
import { useForwardRef } from '../../hooks/useForwardRef';
import { useClickOutside } from '../../hooks/useClickOutside';
import { bsCommonPickerTypes } from './bs-common-picker-types';
import { useSetValidateStatus } from '../../hooks/useSetValidateStatus';
import { BsiCalendar } from 'vue3-bootstrap-icon/es/icons/BsiCalendar';
import { BsiXCircle } from 'vue3-bootstrap-icon/es/icons/BsiXCircle';

let bsCommonPickerCount = 0;
export default defineComponent({
  name: 'BsCommonPicker',
  components: {
    // BsInput,
    BsDropdownTransition,
    BsOnlyChild,
    BsiCalendar,
    BsiXCircle
  },
  props: {
    ...bsCommonPickerTypes
  },
  emits: ['update:inputModelValue', 'input', 'focus', 'blur', 'clear', 'show', 'shown', 'hidden'],
  setup (props: any, ctx: any) {
    let bsInputRef = ref(null);
    let bsCommonPickerId = ref(props.id || `bs-common-picker_${++bsCommonPickerCount}`);

    // 触发元素
    let triggerRef = ref<HTMLElement|null>(null);
    useForwardRef(triggerRef);

    // 下拉元素
    let bsPickerDropdownRef = ref<HTMLElement|null>(null);
    let display = ref(false);
    let willVisible = ref(false);
    let visible = ref(false);
    let showDropdown = function (flag = true) {
      if (props.disabled) {
        return;
      }
      if (typeof flag === 'boolean' && !flag) {
        visible.value = false;
        return;
      }
      if (!display.value) {
        display.value = true;
        nextTick(function () {
          // willVisible必须比visible先行，以能确保dropdown-transition组件正确的计算过渡动画名称
          willVisible.value = true;
          // 第一次的时候需等待dom初始化完成再显示出来
          let timer = setTimeout(function () {
            clearTimeout(timer);
            visible.value = true;
          }, 20);
        });
      } else {
        willVisible.value = true;
        let timer = setTimeout(function () {
          clearTimeout(timer);
          visible.value = true;
        }, 0);
      }
    };
    let hideDropdown = function () {
      willVisible.value = false;
      visible.value = false;
    };
    // 给触发元素绑定点击事件
    watch(() => triggerRef.value, function (el) {
      el?.addEventListener('click', function () {
        showDropdown();
      }, false);
    });
    // 点击区域外面隐藏下拉
    useClickOutside([triggerRef, bsPickerDropdownRef], function (flag: boolean) {
      if (flag && visible.value) {
        hideDropdown();
      }
    });

    // 输入框输入事件
    let onInput = function (evt: Event) {
      let value = (evt.target as HTMLInputElement)?.value;
      ctx.emit('input', value, evt);
      ctx.emit('update:inputModelValue', value);
    };
    let onInputFocus = function (evt: Event) {
      ctx.emit('focus', evt);
    };
    let onInputBlur = function (evt: Event) {
      ctx.emit('blur', evt);
    };

    let { setValidateStatus, validateStatus } = useSetValidateStatus();
    /* // 设置输入框校验状态
    let setValidateStatus = function (status: string) {
      (bsInputRef.value as any)?.setValidateStatus(status);
    }; */
    let focus = function () {
      (bsInputRef.value as any)?.focus();
    };

    return {
      bsPickerDropdownRef,
      bsInputRef,
      display,
      willVisible,
      visible,
      triggerRef,
      bsCommonPickerId,
      validateStatus,

      onInput,
      onInputBlur,
      onInputFocus,

      setValidateStatus,
      showDropdown,
      hideDropdown,
      focus,
      blur () {
        (bsInputRef.value as any)?.blur();
      },
      handleClear () {
        ctx.emit('clear');
        if (!props.disabled) {
          focus();
        }
      },
      handleInputSuffixClick () {
        if (!props.disabled) {
          focus();
        }
      }
    };
  }
});
</script>

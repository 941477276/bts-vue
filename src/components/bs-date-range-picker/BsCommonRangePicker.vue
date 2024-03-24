<template>
  <div
    class="bs-range-editor"
    :class="[
      {
        'is-focus': visible,
        'is-disabled': disabled,
        'is-readonly': inputReadonly
      },
      size ? `bs-range-editor-${size}` : ''
    ]">
    <BsOnlyChild>
      <slot name="trigger">
        <div
          class="bs-range-editor-input-wrap form-control"
          :class="{
            'is-valid': validateStatus === 'success',
            'is-invalid': validateStatus === 'error'
          }">
          <input
            class="bs-range-editor-input"
            type="text"
            autocomplete="off"
            ref="bsInputStartRef"
            v-bind="nativeAttrs"
            :class="{
              'date-is-disabled': inputValueDisabled[0]
            }"
            :value="inputModelValue[0]"
            :disabled="disabled"
            :id="bsCommonPickerId + '_input1'"
            :name="name"
            :placeholder="inputPlaceholder[0]"
            :readonly="inputReadonly"
            @input="onInput($event, 'start')"
            @focus="onInputFocus"
            @blur="onInputBlur"
            @click="showDropdown" />
          <span class="bs-picker-range-separator">
            <BsiArrowLeftRight></BsiArrowLeftRight>
          </span>
          <input
            class="bs-range-editor-input"
            type="text"
            autocomplete="off"
            ref="bsInputEndRef"
            v-bind="nativeAttrs"
            :class="{
              'date-is-disabled': inputValueDisabled[1]
            }"
            :value="inputModelValue[1]"
            :disabled="disabled"
            :id="bsCommonPickerId + '_input2'"
            :name="name"
            :placeholder="inputPlaceholder[1]"
            :readonly="inputReadonly"
            @input="onInput($event, 'end')"
            @focus="onInputFocus"
            @blur="onInputBlur"
            @click="showDropdown" />
          <div class="bs-range-editor-input-suffix" @click="handleInputSuffixClick">
            <slot name="icon"><BsiCalendar></BsiCalendar></slot>
            <BsiXCircle v-if="inputModelValue.length > 0 && clearable && !disabled" class="clear-icon" @click.stop="handleClear"></BsiXCircle>
          </div>
        </div>
      </slot>
    </BsOnlyChild>
    <teleport :disabled="!teleported" :to="appendTo">
      <BsDropdownTransition
        v-if="display"
        :reference-ref="triggerRef"
        :try-all-placement="true"
        :set-min-width="setMinWidth"
        :will-visible="willVisible"
        placement="bottom"
        @before-enter="$emit('show')"
        @after-enter="$emit('shown')"
        @after-leave="$emit('hidden')">
        <div
          ref="bsPickerDropdownRef"
          v-show="visible"
          class="bs-picker-dropdown bs-range-picker-dropdown"
          :class="dropdownClass">
          <div class="bs-picker-panel-container">
            <slot></slot>
          </div>
          <div class="bs-picker-dropdown-arrow"></div>
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
import { bsCommonPickerTypes } from '../bs-common-picker/bs-common-picker-types';
import { useSetValidateStatus } from '../../hooks/useSetValidateStatus';
import { BsiCalendar } from 'vue3-bootstrap-icon/es/icons/BsiCalendar';
import { BsiXCircle } from 'vue3-bootstrap-icon/es/icons/BsiXCircle';
import { BsiArrowLeftRight } from 'vue3-bootstrap-icon/es/icons/BsiArrowLeftRight';

let bsCommonPickerCount = 0;
export default defineComponent({
  name: 'BsCommonRangePicker',
  components: {
    // BsInput,
    BsDropdownTransition,
    BsOnlyChild,
    BsiCalendar,
    BsiXCircle,
    BsiArrowLeftRight
  },
  props: {
    ...bsCommonPickerTypes,
    lazyRender: { // 是否延迟渲染下拉菜单的内容
      type: Boolean,
      default: true
    },
    inputModelValue: { // 输入框的值
      type: Array,
      default () {
        return [];
      }
    },
    inputValueDisabled: { // 输入框的值是否为禁用或在禁用范围内
      type: Array,
      default () {
        return [];
      }
    },
    inputPlaceholder: { // 输入框提示文字
      type: [String, Array],
      default () {
        return [];
      }
    }
  },
  emits: ['update:inputModelValue', 'input', 'focus', 'blur', 'clear', 'show', 'shown', 'hidden'],
  setup (props: any, ctx: any) {
    let bsInputStartRef = ref<HTMLInputElement|null>(null);
    let bsInputEndRef = ref<HTMLInputElement|null>(null);
    let bsCommonPickerId = ref(props.id || `bs-common-picker_${++bsCommonPickerCount}`);

    // 触发元素
    let triggerRef = ref<HTMLElement|null>(null);
    useForwardRef(triggerRef);

    // 下拉元素
    let bsPickerDropdownRef = ref<HTMLElement|null>(null);
    let display = ref(!props.lazyRender);
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
    let onInput = function (evt: Event, name: string) {
      let value = (evt.target as HTMLInputElement)?.value;
      let value2 = '';
      let result: string[] = [];
      if (name == 'start') {
        value2 = bsInputEndRef.value!.value;
        result = [value, value2];
      } else {
        value2 = bsInputStartRef.value!.value;
        result = [value2, value];
      }

      ctx.emit('input', result, evt, name);
      ctx.emit('update:inputModelValue', result);
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
      (bsInputStartRef.value as any)?.focus();
    };

    return {
      bsPickerDropdownRef,
      bsInputStartRef,
      bsInputEndRef,
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
        (bsInputStartRef.value as any)?.blur();
        (bsInputEndRef.value as any)?.blur();
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

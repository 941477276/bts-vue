<template>
  <div
    ref="inputRootRef"
    class="input-group bs-input"
    :class="[
      {
        'is-disabled': disabled,
        'is-readonly': readonly,
        'has-show-password_icon': showPasswordIconDisplay,
        'has-clear-content_icon': clearContentIconDisplay,
        'has-custom-suffix_icon': $slots.suffix,
        'has-suffix-icon': $slots.suffix || showPassword || clearable,
        'has-prefix-icon': $slots.prefix,
        'has-prepend': $slots.prepend,
        'has-append': $slots.append,
        'bs-textarea': type == 'textarea',
        'show-text-count': showCount
      },
      inputClass
    ]"
    @click="handleClick">
    <div class="input-group-prepend" v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </div>
    <div
      v-if="$slots.prefix"
      class="bs-input-prefix">
        <span class="bs-input-suffix-icon custom-suffix-icon">
          <slot name="prefix"></slot>
        </span>
    </div>
    <div
      class="bs-input-wrap"
      @mouseenter="handleMouseenter"
      @mouseleave="handleMouseleave">
      <input
        v-if="type != 'textarea'"
        ref="inputRef"
        class="form-control"
        autocomplete="off"
        v-bind="nativeAttrs"
        :class="[
          {
            'is-valid': validateStatus === 'success',
            'is-invalid': validateStatus === 'error'
          },
          size ? `form-control-${size}` : ''
        ]"
        :type="inputType"
        :id="inputId"
        :disabled="disabled"
        :readonly="readonly"
        :placeholder="placeholder || null"
        :aria-label="ariaLabel || placeholder || null"
        :name="name || null"
        :inputmode="inputmode"
        :style="inputStyle"
        :minlength="minlength > 0 ? minlength : null"
        :maxlength="maxlength > 0 ? maxlength : null"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
        @compositionstart="handleCompositionStart"
        @compositionupdate="handleCompositionUpdate"
        @compositionend="handleCompositionEnd"
        @keydown="$emit('keydown', $event)" />

      <template v-else>
        <GhostTextarea
          v-if="autoHeight"
          :text="inputValue"
          :minlength="minlength"
          :maxlength="maxlength"
          @height-change="handleTextareaHeight"></GhostTextarea>
        <textarea
          ref="inputRef"
          class="form-control"
          autocomplete="off"
          v-bind="nativeAttrs"
          :class="{
            'is-valid': validateStatus === 'success',
            'is-invalid': validateStatus === 'error'
          }"
          :id="inputId"
          :disabled="disabled"
          :readonly="readonly"
          :placeholder="placeholder || null"
          :aria-label="ariaLabel || placeholder || null"
          :name="name || null"
          :inputmode="inputmode"
          :style="inputStyle"
          :maxlength="maxlength > 0 ? maxlength : ''"
          @input="handleInput"
          @change="handleChange"
          @focus="handleFocus"
          @blur="handleBlur"
          @compositionstart="handleCompositionStart"
          @compositionupdate="handleCompositionUpdate"
          @compositionend="handleCompositionEnd"
          @keydown="$emit('keydown', $event)"></textarea>
      </template>

      <div
        v-if="$slots.suffix || showPassword || clearable || (showCount && type != 'textarea')"
        class="bs-input-suffix">
        <span
          v-if="$slots.suffix"
          class="bs-input-suffix-icon custom-suffix-icon">
          <slot name="suffix"></slot>
        </span>
        <span
          v-if="clearable"
          v-show="(inputValue + '').length > 0"
          :data-only-child="!$slots.suffix && !showPassword"
          class="bs-input-suffix-icon clear-content_icon"
          @click.stop="handleClear">
          <BsiXCircle></BsiXCircle>
        </span>
        <span
          v-if="showPassword"
          v-show="showPasswordIconDisplay"
          class="bs-input-suffix-icon show-password_icon"
          @click.stop="togglePasswordText">
          <BsiEyeSlash v-if="passwordIsShow"></BsiEyeSlash>
          <BsiEye v-else></BsiEye>
        </span>
        <span class="bs-input-text-count" v-if="showCount && type != 'textarea'">
          <slot name="text-count" :data="{count: inputValue.length, maxCount: maxlength}">
            <template v-if="maxlength > 0">{{ inputValue.length }} / {{ maxlength }}</template>
            <template v-else>{{ inputValue.length }}</template>
          </slot>
        </span>
      </div>
      <span class="bs-input-text-count" v-if="showCount && type == 'textarea'">
        <slot name="text-count" :data="{count: inputValue.length, maxCount: maxlength}">
          <template v-if="maxlength > 0">{{ inputValue.length }} / {{ maxlength }}</template>
          <template v-else>{{ inputValue.length }}</template>
        </slot>
      </span>
    </div>
    <div class="input-group-append" v-if="$slots.append">
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref
} from 'vue';
import { useSetValidateStatus } from '../../hooks/useSetValidateStatus';
import { useInput } from './useInput';
import { useDeliverContextToFormItem } from '../../hooks/useDeliverContextToFormItem';
import { bsInputProps } from './bs-input-types';
import { BsiXCircle } from 'vue3-bootstrap-icon/es/icons/BsiXCircle';
import { BsiEye } from 'vue3-bootstrap-icon/es/icons/BsiEye';
import { BsiEyeSlash } from 'vue3-bootstrap-icon/es/icons/BsiEyeSlash';
import { isKorean, isNoneValue } from '../../utils/bs-util';
import { GhostTextarea } from './widgets/ghost-textarea';

let inputCount = 0;
let textareaCount = 0;
export default defineComponent({
  name: 'BsInput',
  components: {
    BsiXCircle,
    BsiEye,
    BsiEyeSlash,
    GhostTextarea
  },
  props: bsInputProps,
  emits: ['click', 'input', 'update:modelValue', 'change', 'blur', 'focus', 'clear', 'mouseenter', 'mouseleave', 'compositionstart', 'compositionupdate', 'compositionend', 'keydown'],
  setup (props: any, ctx: any) {
    let showPasswordIconDisplay = ref(false); // 切换输入框类型为“密码/文本”按钮是否显示
    let clearContentIconDisplay = ref(false); // 清空内容按钮是否显示
    let inputId = ref('');
    if (props.id) {
      inputId.value = props.id;
    } else {
      if (props.type === 'textarea') {
        inputId.value = `bs-textarea_${++textareaCount}`;
      } else {
        inputId.value = `bs-input_${++inputCount}`;
      }
    }

    let inputRef = ref<HTMLInputElement | null>(null);
    let { passwordIsShow, inputValue, inputClass, inputType, togglePasswordText } = useInput(props, inputRef);
    let { validateStatus, setValidateStatus, getValidateStatus } = useSetValidateStatus();
    let { callFormItem } = useDeliverContextToFormItem(props, {
      id: inputId.value,
      setValidateStatus
    });
    let isCompositing = ref(false);

    // input事件
    /* eslint-disable */
    let handleInput = function (evt: Event) {
      if (isCompositing.value && !props.compositionDisable) {
        return;
      }
      let val = (evt.target as HTMLInputElement).value;
      // inputValue.value = val;
      if (props.clearable && val.length > 0) {
        clearContentIconDisplay.value = true;
      } else {
        clearContentIconDisplay.value = false;
      }
      let maxlength = props.maxlength;
      if (maxlength > 0 && val.length > maxlength) {
        val = val.substr(0, maxlength);
        (evt.target as HTMLInputElement).value = val;
      }
      ctx.emit('update:modelValue', val);
      ctx.emit('input', val, evt);

      callFormItem('validate', 'input');
    };
    let handleFocus = function (evt: Event) {
      if (props.showPassword) {
        showPasswordIconDisplay.value = true; // 当类型为密码框，并且需要显示切换输入框类型按钮时在输入框获得焦点时显示切换类型按钮
      }
      if (props.clearable && (inputValue.value + '').length > 0) {
        clearContentIconDisplay.value = true;
      }
      ctx.emit('focus', evt);
      callFormItem('validate', 'focus');
    };
    let handleBlur = function (evt: Event) {
      let innerValue = inputValue.value;
      if ((innerValue + '').length > 0) {
        if (props.showPassword) {
          showPasswordIconDisplay.value = true; // 当类型为密码框，并且输入框中有值，则显示切换类型按钮
        }
      } else {
        if (props.showPassword) {
          showPasswordIconDisplay.value = false;
        }
      }
      // 解决显示的值与modelValue不一致问题
      inputValue.value = innerValue;
      /* if (innerValue !== props.modelValue) {
        inputValue.value = props.modelValue;
      } */
      clearContentIconDisplay.value = false;
      ctx.emit('blur', evt);
      callFormItem('validate', 'blur');
    };
    let handleChange = function (evt: Event) {
      // let val = (evt.target as HTMLInputElement).value;
      ctx.emit('change', evt);
      callFormItem('validate', 'change');
    };
    let handleMouseenter = function (evt: MouseEvent) {
      ctx.emit('mouseenter', evt);
      if (props.clearable && (inputValue.value + '').length > 0) {
        clearContentIconDisplay.value = true;
      }
    };
    let handleMouseleave = function (evt: MouseEvent) {
      ctx.emit('mouseleave', evt);
      if (props.clearable && (inputValue.value + '').length > 0 && clearContentIconDisplay.value) {
        clearContentIconDisplay.value = false;
      }
    };
    let handleClick = function (evt: MouseEvent) {
      if (props.disabled || props.readonly) {
        return;
      }
      ctx.emit('click', evt);
    };
    let handleCompositionStart = function (evt: CompositionEvent) {
      isCompositing.value = true;
      ctx.emit('compositionstart', evt);
    };
    let handleCompositionUpdate = function (evt: CompositionEvent) {
      let text = (evt.target as HTMLInputElement)?.value;
      let lastCharacter = text[text.length - 1] || '';
      isCompositing.value = !isKorean(lastCharacter)
      ctx.emit('compositionupdate', evt);
    };
    let handleCompositionEnd = function (evt: CompositionEvent) {
      if (isCompositing.value) {
        isCompositing.value = false;
        handleInput(evt);
      }
      ctx.emit('compositionend', evt);
    };

    let textareaLastHeight = 0;
    let textareaEmptyHeight = 0; // textarea值为空时的高度
    // 处理textarea自动高度
    let handleTextareaHeight = function (height: number) {
      if (!props.autoHeight || props.type != 'textarea') {
        return;
      }
      let textareaEl = inputRef.value;
      if (!textareaEl) {
        return;
      }
      // let textareaHeight = textareaEl.offsetHeight || 0;
      if (height == -1 && textareaLastHeight) {
        textareaEl.style.height = '';
        textareaLastHeight = height;
        return;
      }
      let minHeight = props.minHeight;
      if (props.textareaEmptyHeightIsMinHeight && minHeight <= 0) {
        minHeight = textareaEmptyHeight;
      }
      if (height <= minHeight) {
        if (minHeight > 0) {
          textareaEl.style.height = minHeight + 'px';
          textareaLastHeight = minHeight;
        }
        return;
      }
      textareaEl.style.height = height + 'px';
      textareaLastHeight = height;
    };
    let clear = function () {
      // inputValue.value = '';
      clearContentIconDisplay.value = false;
      ctx.emit('update:modelValue', '');
      ctx.emit('clear');
      callFormItem('validate', 'change');
    }
    // 清空内容
    let handleClear = function () {
      clear();
      focus();
    }
    // 让元素获得焦点
    let focus = function () {
      let inputEl = inputRef.value as HTMLInputElement;
      inputEl.focus();
      if (isNoneValue(inputEl.value)) {
        textareaEmptyHeight = inputEl.offsetHeight;
      }
    };
    // 让元素失去焦点
    let blur = function () {
      (inputRef.value as HTMLInputElement).blur();
    };
    // 选中输入框中的文本
    let select = function () {
      (inputRef.value as HTMLInputElement).select();
    }
    /**
     *  切换清空内容按钮显示
     * @param flag
     */
    let setClearIconDisplay = function (flag: boolean) {
      clearContentIconDisplay.value = !!flag;
    }

    /* if (props.deliveContextToFormItem) {
      // 传递给<bs-form-item>组件的参数
      let deliverToFormItemCtx = {
        id: inputId.value,
        setValidateStatus
      };
      // 如果当前组件处在<bs-form-item>组件中，则将setValidateStatus方法存储到<bs-form-item>组件中
      useDeliverContextToParent<FormItemContext>(formItemContextKey, deliverToFormItemCtx);
    } */

    return {
      inputRef,
      inputClass,
      inputValue,
      inputType,
      inputId,
      showPasswordIconDisplay,
      passwordIsShow,
      clearContentIconDisplay,
      validateStatus,

      handleInput,
      handleChange,
      handleBlur,
      handleFocus,
      handleMouseenter,
      handleMouseleave,
      handleClick,
      handleCompositionStart,
      handleCompositionUpdate,
      handleCompositionEnd,
      handleTextareaHeight,

      togglePasswordText,
      handleClear,
      clear,
      focus,
      blur,
      select,
      setValidateStatus,
      setClearIconDisplay
    };
  }
});
</script>

<template>
  <div
    ref="bsInputTagsRootRef"
    class="bs-input-tags form-control"
    :class="[
      size ? `form-control-${size}` : '',
      {
        'h-auto': viewTagList.length > 0,
        'is-focus': isFocus,
        'is-disabled': disabled,
        'is-valid': validateStatus === 'success',
        'is-invalid': validateStatus === 'error'
      }
    ]"
    @click="onRootClick">
    <div
      class="bs-input-tags-list"
      ref="inputTagsRef">
      <bs-tag
        v-for="tag in viewTagList"
        :key="tag.value"
        :type="tag.tagType || tagType"
        :effect="tag.tagEffect || tagEffect"
        :class="tag.tagClass"
        :size="tagSize"
        :closeable="!disabled && !tag.disabled && tagCloseable"
        @close="onTagClose(tag)">
        <InputTagSlot name="tag" :bind-data="tag">{{ tag.label }}</InputTagSlot>
      </bs-tag>
      <bs-tag
        v-if="maxTagCount > 0 && (modelValue.length - viewTagList.length > 0)"
        class="tag-ommitted"
        key="ommitted_tag"
        :type="tagType"
        :size="tagSize">
        <!--<slot name="maxTagPlaceholder" v-bind="{ omittedCount: values.length - viewTagList.length }">+ {{ values.length - viewTagList.length }}...</slot>-->
        <InputTagSlot name="maxTagPlaceholder" :bind-data="{ omittedCount: modelValue.length - viewTagList.length }">
          + {{ modelValue.length - viewTagList.length }}...
        </InputTagSlot>
      </bs-tag>
      <div
        class="bs-input-tags-inputer-wrap"
        ref="inputerWrapRef"
        :style="{
          width: inputWidth
        }">
        <input
          ref="inputerRef"
          v-model="searchText"
          :type="inputType"
          v-bind="nativeAttrs"
          class="bs-input-tags-inputer"
          autocomplete="off"
          :id="inputTagsId"
          :name="name"
          :disabled="disabled"
          :placeholder="placeholder"
          @keydown="onSearchInputKeyDown"
          @blur="onSearchInputBlur">
        <button
          ref="addBtnRef"
          v-if="addBtnVisible"
          v-show="searchText.length > 0"
          type="button"
          :disabled="disabled || searchText.length == 0"
          class="btn btn-outline-secondary bs-input-tags-button"
          @click="onAddBtnClick">添加</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  ref,
  computed,
  watch,
  defineComponent,
  provide,
  inject,
  nextTick
} from 'vue';
import BsTag from '../bs-tag/BsTag.vue';
import InputTagSlot from './widgets/InputTagsSlot.vue';
import { bsInputTagsProps, BsInputTagsValueItem } from './bs-input-tags-types';
import { useClickOutside } from '../../hooks/useClickOutside';
import {
  getStyle,
  offset
} from '../../utils/bs-util';
import { useSetValidateStatus } from '../../hooks/useSetValidateStatus';
import { useDeliverContextToFormItem } from '../../hooks/useDeliverContextToFormItem';

let bsInputTagsCount = 0;
export default defineComponent({
  name: 'BsInputTags',
  components: {
    BsTag,
    InputTagSlot
  },
  props: bsInputTagsProps,
  emits: ['update:modelValue', 'click', 'tag-close', 'blur', 'limited'],
  setup (props: any, ctx: any) {
    let inputTagsRef = ref<HTMLElement|null>(null);
    let bsInputRef = ref(null);
    let inputerWrapRef = ref<HTMLElement|null>(null);
    let inputerRef = ref<HTMLInputElement|null>(null);
    let bsInputTagsRootRef = ref<HTMLElement|null>(null);
    let addBtnRef = ref<HTMLButtonElement|null>(null);
    let isFocus = ref(false);
    // 搜索文本
    let searchText = ref('');
    let inputTagsId = ref(props.id ? props.id : `bs_input_tags-${++bsInputTagsCount}`);

    // 监听是否点击了外面
    useClickOutside(bsInputTagsRootRef, function (isClickOutSide: boolean) {
      if (isClickOutSide) {
        isFocus.value = false;
      }
    });

    // 用于显示的标签
    let viewTagList = computed(function () {
      let maxTagCount = props.maxTagCount;
      let values = props.modelValue || [];
      if (!maxTagCount || maxTagCount < 0 || values?.length == 0) {
        return values;
      }
      maxTagCount = Math.ceil(maxTagCount);
      return values?.slice(0, maxTagCount);
    });

    // 计算输入框宽度
    let inputWidth = ref<string>('');
    let calcInputWidth = function () {
      let timer = setTimeout(function () {
        clearTimeout(timer);
        let inputWrapEl = inputerWrapRef.value as HTMLElement;
        if (!inputWrapEl || viewTagList.value == 0) {
          inputWidth.value = '100%';
          calcAddBtnVisible();
          return;
        }
        let inputTagsListEl = (inputTagsRef?.value as HTMLElement);
        let inputTagsWidth = inputTagsListEl.clientWidth || 0;
        if (inputTagsWidth > 0) {
          let tags = inputTagsListEl.querySelectorAll('.bs-tag');
          let lastTagEl = tags[tags.length - 1] as HTMLElement;
          let lastTagOffsetLeft = lastTagEl.offsetLeft;
          let lastTagWidth = lastTagEl.offsetWidth;
          let lastTagMarginRight: any = getStyle(lastTagEl, 'margin-right');
          let inputWrapMarginLeft: any = getStyle(inputWrapEl, 'margin-left');
          let inputWrapMarginRight: any = getStyle(inputWrapEl, 'margin-right');

          let width = inputTagsWidth - (lastTagOffsetLeft + lastTagWidth + lastTagMarginRight) - inputWrapMarginLeft - inputWrapMarginRight - 1;
          let minWidth = props.minWidth;
          if (!minWidth || minWidth < 0) {
            minWidth = 60;
          }
          if (width < minWidth) {
            width = minWidth;
          }
          inputWidth.value = width + 'px';

          let timer2 = setTimeout(function () {
            clearTimeout(timer2);
            if (inputWrapEl.offsetLeft == 0) {
              inputWidth.value = (inputTagsWidth - inputWrapMarginRight) + 'px';
            }
            calcAddBtnVisible();
          }, 0);
        }
      }, 0);
    };

    // 计算添加按钮是否显示
    let addBtnVisible = ref(false);
    let calcAddBtnVisible = function () {
      if (!props.showAddButton) {
        addBtnVisible.value = false;
        return;
      }
      addBtnVisible.value = true;
      nextTick(function () {
        let addBtnEl = addBtnRef.value;
        let bsInputTagsRootEl = bsInputTagsRootRef.value as HTMLElement;
        if (!addBtnEl) {
          return;
        }
        addBtnEl.style.opacity = '0';
        addBtnEl.style.display = 'block';
        let offsetRight = offset(addBtnEl).left + addBtnEl.offsetWidth;
        let bsInputTagsRootOffsetRight = offset(bsInputTagsRootEl).left + bsInputTagsRootEl.offsetWidth;
        if (offsetRight > bsInputTagsRootOffsetRight) {
          addBtnVisible.value = false;
        } else {
          addBtnEl.style.opacity = '';
          addBtnEl.style.display = 'none';
          addBtnVisible.value = true;
        }
      });
    };
    watch(() => [...(props.modelValue || [])], function () {
      calcInputWidth();
    }, { immediate: true });

    // tag 关闭事件
    let onTagClose = function (tag: BsInputTagsValueItem) {
      if (props.disabled) {
        return;
      }
      let modelValue = [...props.modelValue];
      let index = modelValue.findIndex((tagItem: BsInputTagsValueItem) => tagItem === tag);
      if (index > -1) {
        modelValue.splice(index, 1);
        ctx.emit('update:modelValue', modelValue);
        callFormItem('validate', 'change');
      }
      ctx.emit('tag-close', tag);
    };

    // 添加标签
    let addTag = function (tag: string|BsInputTagsValueItem) {
      let tagLimit = props.tagLimit;
      let newModelValue = [...props.modelValue];
      if (props.disabled || (tagLimit && ((newModelValue.length + 1) > tagLimit))) {
        ctx.emit('limited');
        return false;
      }
      if (typeof tag == 'string') {
        if (tag.trim().length == 0) {
          return false;
        }
        tag = { value: tag, label: tag };
      }
      inputWidth.value = '10%'; // 解决添加tag后界面会出现抖动一下问题
      newModelValue.push(tag);
      ctx.emit('update:modelValue', newModelValue);
      searchText.value = '';
      callFormItem('validate', 'change');
      return true;
    };

    // 输入框键盘按下事件
    let onSearchInputKeyDown = function (evt: KeyboardEvent) {
      if (props.disabled) {
        return;
      }
      let keyCode = evt.keyCode;
      let content = (evt.target as HTMLInputElement)?.value || '';
      if (keyCode == 13) { // enter键
        content = content.trim();
        if (content.length == 0) {
          return;
        }
        addTag({ label: content, value: content });
      }
      if (keyCode == 8) { // 删除键
        let modelValue = props.modelValue;
        if (content.length != 0 || modelValue?.length == 0) {
          return;
        }
        let newModelValue = [...props.modelValue].reverse();
        let notDisabledItemIndex = newModelValue.findIndex((tagItem: BsInputTagsValueItem) => !tagItem.disabled);
        if (notDisabledItemIndex > -1) {
          newModelValue.splice(notDisabledItemIndex, 1);
          newModelValue.reverse();
          ctx.emit('update:modelValue', newModelValue);
          callFormItem('validate', 'change');
        }
      }
    };
    // 输入框失去焦点事件
    let onSearchInputBlur = function (evt: MouseEvent) {
      ctx.emit('blur', evt);
      callFormItem('validate', 'blur');
    };

    let onAddBtnClick = function () {
      let tagContent = inputerRef.value?.value;
      if (!tagContent) {
        return;
      }
      addTag(tagContent);
    };

    let tagSize = computed(function () {
      let size = props.size || '';
      /* if (!size) {
        return 'md';
      } */
      if (size == 'lg') {
        return '';
      }
      return size;
    });

    let onRootClick = function (evt: MouseEvent) {
      if (props.disabled) {
        return;
      }
      isFocus.value = true;
      if (!props.disabled) {
        inputerRef.value?.focus();
      }
      ctx.emit('click', evt);
    };

    let { validateStatus, setValidateStatus } = useSetValidateStatus();
    watch(validateStatus, function () {
      nextTick(function () {
        calcInputWidth();
      });
    });

    let { callFormItem } = useDeliverContextToFormItem(props, {
      id: inputTagsId.value,
      setValidateStatus
    });
    provide('parentCtx', { ctx });

    return {
      inputTagsRef,
      bsInputRef,
      bsInputTagsRootRef,
      addBtnRef,

      isFocus,
      inputTagsId,

      inputWidth,
      viewTagList,
      tagSize,
      validateStatus,

      searchText,
      addBtnVisible,
      // searchInputWidth,
      inputerWrapRef,
      inputerRef,

      focus: function () {
        if (props.disabled) {
          return;
        }
        isFocus.value = true;
        inputerRef.value?.focus();
      },
      blur: function () {
        if (props.disabled) {
          return;
        }
        isFocus.value = false;
        inputerRef.value?.blur();
      },
      addTag,
      setValidateStatus,

      onTagClose,
      onRootClick,
      onSearchInputBlur,
      onSearchInputKeyDown,
      onAddBtnClick
    };
  }
});
</script>

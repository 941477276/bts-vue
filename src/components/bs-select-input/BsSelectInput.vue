<template>
  <div
    class="bs-select-input"
    :class="[
      size ? `bs-select-input-${size}` : '',
      {
        'is-focus': isFocus,
        'is-disabled': disabled,
        'is-loading': loading
      }
    ]"
    @click="onRootClick">
    <!--<bs-input
      ref="bsInputRef"
      :disabled="disabled"
      :readonly="bsInputReadonly"
      :clearable="clearable"
      :id="bsSelectInputId"
      v-model="bsInputModelValue"
      :size="size"
      :name="name"
      :delive-context-to-form-item="false"
      :placeholder="bsInputPlaceholder"
      :ariaLabel="ariaLabel"
      :input-style="inputTagsHeight == 0 ? {} : {
        height: inputTagsHeight + 'px'
      }"
      @focus="onBsInputFocus"
      @blur="onBsInputBlur"
      @clear="$emit('clear')">
      <template #suffix>
        <bs-spinner v-if="loading" :color-type="loadingColorType" :text="loadingText"></bs-spinner>
        <slot v-else name="suffixIcon">
          <BsiChevronDown></BsiChevronDown>
        </slot>
      </template>
    </bs-input>-->
    <div class="bs-select-input-wrap">
      <input
        type="text"
        ref="bsInputRef"
        v-bind="nativeAttrs"
        class="form-control"
        :class="[
          {
            'is-valid': validateStatus === 'success',
            'is-invalid': validateStatus === 'error'
          },
          size ? `form-control-${size}` : ''
        ]"
        :disabled="disabled"
        :readonly="bsInputReadonly"
        :clearable="clearable"
        :id="bsSelectInputId"
        v-model="bsInputModelValue"
        :name="name"
        :placeholder="bsInputPlaceholder"
        :ariaLabel="ariaLabel"
        :style="inputTagsHeight == 0 ? {} : {
          height: inputTagsHeight + 'px'
        }"
        autocomplete="off"
        @focus="onBsInputFocus"
        @blur="onBsInputBlur"
        @clear="$emit('clear')" />
      <div class="bs-select-input-suffix" @click="handleInputSuffixClick">
        <bs-spinner v-if="loading" :color-type="loadingColorType" :text="loadingText"></bs-spinner>
        <slot v-else name="suffixIcon">
          <BsiChevronDown></BsiChevronDown>
        </slot>
        <BsiXCircle v-if="(bsInputModelValue || viewTagList.length > 0) && clearable && !loading && !disabled" class="clear-icon" @click.stop="handleClear"></BsiXCircle>
      </div>
    </div>

    <div
      v-if="multiple"
      class="bs-select-input-tags"
      ref="inputTagsRef">
      <bs-tag
        v-for="tag in viewTagList"
        :key="tag.value"
        :type="tag.tagType || tagType"
        :class="tag.tagClass"
        :size="tagSize"
        :effect="tag.tagEffect || tagEffect"
        :closeable="!disabled && !tag.disabled && tagCloseable"
        @close="onTagClose(tag)">
        <!--<slot name="tag" v-bind="tag">{{ tag.label }}</slot>-->
        <SelectInputTagSlot name="tag" :bind-data="tag">{{ tag.label }}</SelectInputTagSlot>
      </bs-tag>
      <bs-tag
        v-if="maxTagCount > 0 && (values.length - viewTagList.length > 0)"
        class="tag-ommitted"
        key="ommitted_tag"
        :type="tagType"
        :size="tagSize">
        <!--<slot name="maxTagPlaceholder" v-bind="{ omittedCount: values.length - viewTagList.length }">+ {{ values.length - viewTagList.length }}...</slot>-->
        <SelectInputTagSlot name="maxTagPlaceholder" :bind-data="{ omittedCount: values.length - viewTagList.length }">
          + {{ values.length - viewTagList.length }}...
        </SelectInputTagSlot>
      </bs-tag>
      <input
        v-if="!disabled && filterable"
        ref="searchInputRef"
        v-model="searchText"
        type="search"
        class="bs-select-input-search"
        autocomplete="off"
        :style="{
          width: searchInputWidth > 0 ? (searchInputWidth + 'px') : ''
        }">
      <span
        ref="auxiliaryCalcTextWidthBoxRef"
        class="bs-select-input-search auxiliary-calc-text-width-box">{{ searchText }}</span>
    </div>
    <div v-if="loading" class="bs-select-input-loading-shadow"></div>
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
  nextTick,
  onMounted,
  onUnmounted
} from 'vue';
import { BsiChevronDown } from 'vue3-bootstrap-icon/es/icons/BsiChevronDown';
import BsTag from '../bs-tag/BsTag.vue';
import BsSpinner from '../bs-spinner/BsSpinner.vue';
import SelectInputTagSlot from './widgets/SelectInputTagSlot.vue';
import { bsSelectInputProps, ValueItem } from './bs-select-input-props';
import { selectContextKey } from '../bs-select/bs-select-types';
import { useInput } from './useInput';
import { useSetValidateStatus } from '../../hooks/useSetValidateStatus';
import { BsiXCircle } from 'vue3-bootstrap-icon/es/icons/BsiXCircle';
import { useGlobalEvent } from '../../hooks/useGlobalEvent';

let bsSelectInputCount = 0;
export default defineComponent({
  name: 'BsSelectInput',
  components: {
    BsiXCircle,
    BsTag,
    BsSpinner,
    SelectInputTagSlot,
    BsiChevronDown
  },
  props: {
    ...bsSelectInputProps
  },
  emits: ['click', 'tag-close', 'filter-text-change', 'clear'],
  setup (props: any, ctx: any) {
    let bsSelectInputId = ref(props.id || `bs_select_input-${++bsSelectInputCount}`);
    let inputTagsRef = ref<HTMLElement|null>(null);
    let bsInputRef = ref(null);

    let {
      bsInputReadonly,
      bsInputModelValue,
      bsInputValue,
      bsInputFocus,
      bsInputPlaceholder,

      onBsInputFocus,
      onBsInputBlur
    } = useInput(props, ctx, bsInputRef);
    let isFocus = ref(false);
    let { validateStatus, setValidateStatus, getValidateStatus } = useSetValidateStatus();

    // 计算 .bs-select-input-tags 容器高度
    let inputTagsHeight = ref(0);
    let calcInputTagsHeight = function () {
      let inputTagsEl = inputTagsRef.value as HTMLElement;
      if (!inputTagsEl || props.values?.length == 0) {
        inputTagsHeight.value = 0;
        return;
      }
      nextTick(function () {
        inputTagsHeight.value = inputTagsEl.offsetHeight;
      });
    };
    watch(() => [...props.values], function () {
      if (props.multiple) {
        // 这里使用 nextTick 无效，会导致高度计算不准确
        setTimeout(function () {
          calcInputTagsHeight();
        }, 0);
      }
    }, { immediate: true });

    // 用于显示的标签
    let viewTagList = computed(function () {
      let maxTagCount = props.maxTagCount;
      let values = props.values;
      if (!maxTagCount || maxTagCount < 0) {
        return values;
      }
      maxTagCount = Math.ceil(maxTagCount);
      return values?.slice(0, maxTagCount);
    });
    // tag 关闭事件
    let onTagClose = function (tag: ValueItem) {
      ctx.emit('tag-close', tag);
    };

    // 搜索文本
    let searchText = ref('');
    let searchInputWidth = ref(0);
    let auxiliaryCalcTextWidthBoxRef = ref<HTMLElement|null>(null);
    let searchInputRef = ref<HTMLElement|null>(null);

    let searchInputFocus = function () {
      searchInputRef.value?.focus();
    };
    let searchInputBlur = function () {
      searchInputRef.value?.blur();
    };
    // 搜索框失去焦点事件
    /* let onSearchInputBlur = function () {
      // 解决用户点击不了下拉选项问题，因为搜索文本清空后被隐藏的下拉菜单会立即显示出来
      let timer = setTimeout(function () {
        clearTimeout(timer);
        searchText.value = '';
      }, 320);
    }; */

    watch(searchText, function (newSearchText) {
      setTimeout(function () {
        searchInputWidth.value = auxiliaryCalcTextWidthBoxRef.value?.offsetWidth || 0;
        calcInputTagsHeight();
      }, 0);
      ctx.emit('filter-text-change', newSearchText);
    });

    let tagSize = computed(function () {
      let size = props.size;
      if (!size) {
        return 'md';
      }
      if (size == 'lg') {
        return '';
      }
      return size;
    });

    let onRootClick = function (evt: MouseEvent) {
      if (props.disabled) {
        return;
      }
      /* isFocus.value = true;
      if (props.multiple) {
        searchInputRef.value?.focus();
      } */
      ctx.emit('click', evt);
    };

    let focus = function () {
      if (props.disabled) {
        return;
      }
      isFocus.value = true;
      if (props.multiple) {
        searchInputFocus();
        return;
      }
      (bsInputRef.value as any)?.focus();
    };

    let selectCtx = inject(selectContextKey);
    provide('parentCtx', { ctx: selectCtx?.ctx || ctx });

    let resizeTimer = 0;
    let resizeEvent = function () {
      if (props.multiple) {
        let now = new Date().getTime();
        if (!resizeTimer || (now - resizeTimer > 100)) {
          calcInputTagsHeight();
          resizeTimer = now;
        }
      }
    };
    onMounted(function () {
      useGlobalEvent.addEvent('window', 'resize', resizeEvent);
    });
    onUnmounted(function () {
      useGlobalEvent.removeEvent('window', 'resize', resizeEvent);
    });

    return {
      bsSelectInputId,
      inputTagsRef,
      bsInputRef,

      bsInputReadonly,
      bsInputModelValue,
      bsInputValue,
      bsInputFocus,
      bsInputPlaceholder,
      isFocus,
      validateStatus,

      inputTagsHeight,
      viewTagList,
      tagSize,

      searchText,
      searchInputWidth,
      searchInputRef,
      auxiliaryCalcTextWidthBoxRef,

      searchInputFocus,
      searchInputBlur,

      focus,
      blur: function () {
        if (props.disabled) {
          return;
        }
        isFocus.value = false;
        if (props.multiple) {
          /* setTimeout(function () {
            searchInputBlur();
          }, 300); */
          searchInputBlur();

          return;
        }
        (bsInputRef.value as any)?.blur();
      },
      /* setValidateStatus: function (status: ValidateStatus) {
        (bsInputRef.value as any).setValidateStatus(status);
      }, */
      setValidateStatus,
      clearSearchText () {
        searchText.value = '';
      },

      onBsInputFocus,
      onBsInputBlur,
      onTagClose,
      onRootClick,
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
      // onSearchInputBlur
    };
  }
});
</script>

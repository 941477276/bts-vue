<template>
  <div
    ref="bsSelectRef"
    class="bs-select"
    :class="[
      {
        'is-disabled': disabled,
        'is-focus': isFocus,
        'is-multiple': multiple
      },
      size ? `bs-select-${size}` :''
    ]"
    :data-bs-id="selectId">
    <select
      v-model="nativeSelectModel"
      :name="name"
      :multiple="multiple"
      style="display: none;">
      <option
        v-for="item in optionItems"
        :key="item.id"
        :value="item.value"
        :disabled="item.disabled">{{ item.label || item.labelSlot }}</option>
    </select>
    <BsSelectInput
      ref="bsSelectInputRef"
      :native-attrs="nativeAttrs"
      :disabled="disabled"
      :loading="loading"
      :loading-text="loadingText"
      :loading-color-type="loadingColorType"
      :clearable="clearable"
      :id="selectId"
      :values="viewText"
      :size="size"
      :multiple="multiple"
      :filterable="filterable"
      :placeholder="placeholder"
      :max-tag-count="maxTagCount"
      :tag-type="tagType"
      :tag-effect="tagEffect"
      :tag-closeable="tagCloseable"
      @click="onSelectInputClick"
      @tag-close="onTagClose"
      @filter-text-change="onFilterTextChange"
      @clear="onSelectInputClear"></BsSelectInput>
    <!-- 这里不能使用延迟渲染的方案，因为这会导致子组件也延迟渲染，从而导致上面的<select>标签不能在组件渲染时就生成
      <teleport to="body" v-if="dropdownDisplayed">-->
    <teleport :disabled="!teleported" :to="appendTo">
      <BsDropdownTransition
        ref="dropdownTransitionRef"
        placement="bottom"
        :reference-ref="bsSelectRef"
        :try-all-placement="false"
        :set-width="true"
        :will-visible="dropdownWillVisible"
        @after-enter="onDropdownVisibleChange(true, $event)"
        @after-leave="onDropdownVisibleChange(false, $event)">
        <div
          v-show="dropdownVisible"
          ref="bsSelectDropdownRef"
          class="bs-select-dropdown"
          :class="[{
            'is-multiple': multiple
          }, dropdownClass]"
          :data-for-select="selectId">
          <ul class="bs-select-option-list">
            <template v-if="options && Array.isArray(options)">
              <template
                v-for="(option, index) in options!">
                <BsOptionGroup
                  v-if="option.options"
                  :key="`option_group-${index}`"
                  :disabled="option.disabled"
                  :label="option.label">
                  <BsOption
                    v-for="(groupOption, index2) in option.options"
                    :key="groupOption.value"
                    :label="groupOption.label"
                    :value="groupOption.value"
                    :disabled="groupOption.disabled"
                    :tag-type="groupOption.tagType"
                    :tag-class="groupOption.tagClass">
                    <slot name="option" v-bind="{ option: groupOption, index2 }">{{ groupOption.label }}</slot>
                  </BsOption>
                </BsOptionGroup>
                <BsOption
                  v-else
                  :key="option.value"
                  :label="option.label"
                  :value="option.value"
                  :disabled="option.disabled"
                  :tag-type="option.tagType"
                  :tag-class="option.tagClass">
                  <slot name="option" v-bind="{ option, index }">{{ option.label }}</slot>
                </BsOption>
              </template>
            </template>
            <slot v-else></slot>
            <li
              v-if="(!loading && optionItems.length == 0) || (filtering && filterable && Object.keys(filteredVisibleOptions).length == 0)"
              class="bs-select-empty">
              <slot name="empty">{{ emptyText }}</slot>
            </li>
            <li class="bs-select-loading" v-if="loading">
              <slot name="loading">
                <BsSpinner></BsSpinner>
                <span class="bs-select-loading-text">{{loadingText}}</span>
              </slot>
            </li>
          </ul>
          <!--扩展内容-->
          <slot name="extra"></slot>
        </div>
      </BsDropdownTransition>
    </teleport>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  watch,
  provide,
  ComponentInternalInstance,
  computed
} from 'vue';
import { BsValidateStatus } from '../types';
import { useClickOutside } from '../../hooks/useClickOutside';
import BsSelectInput from '../bs-select-input/BsSelectInput.vue';
import BsDropdownTransition from '../bs-dropdown-transition/BsDropdownTransition.vue';
import BsSpinner from '../bs-spinner/BsSpinner.vue';
import BsOption from './widgets/BsOption.vue';
import BsOptionGroup from './widgets/BsOptionGroup.vue';
import {
  bsSelectProps,
  SelectContext,
  SelectOptionContextItem,
  selectContextKey
} from './bs-select-types';
import { useDeliverContextToFormItem } from '../../hooks/useDeliverContextToFormItem';

let selectCount = 0;
export default defineComponent({
  name: 'BsSelect',
  components: {
    BsSelectInput,
    BsDropdownTransition,
    BsSpinner,
    BsOptionGroup,
    BsOption
  },
  props: bsSelectProps,
  emits: ['update:modelValue', 'change', 'selectLimit', 'visibleChange'],
  setup (props: any, ctx: any) {
    let bsSelectRef = ref<HTMLElement|null>(null);
    let bsSelectInputRef = ref<ComponentInternalInstance|null>(null);
    let bsSelectDropdownRef = ref<HTMLElement|null>(null);
    let dropdownTransitionRef = ref(null);
    let bsInputReadonly = ref(true);
    let isFocus = ref(false);
    let selectId = ref(props.id || `bs-select_${++selectCount}`);
    let dropdownDisplayed = ref(false); // 下拉菜单是否已经渲染
    let dropdownWillVisible = ref(false); // 下拉菜单是否即将显示
    let dropdownVisible = ref(false); // 下拉菜单是否显示
    let optionItems = ref<SelectOptionContextItem[]>([]); // 存储option的label及value

    let nativeSelectModel = computed({
      get () {
        if (Array.isArray(props.modelValue)) {
          return [...props.modelValue];
        } else {
          return props.modelValue;
        }
      },
      set (newVal: any) {
      }
    });
    /**
     * 显示下拉菜单
     */
    let dropdownShow = function () {
      if (props.disabled) {
        return;
      }
      dropdownWillVisible.value = true;
      let timer = setTimeout(function () {
        clearTimeout(timer);
        dropdownVisible.value = true;
        if (!props.loading) {
          isFocus.value = true;
          (bsSelectInputRef.value as any)?.focus();
        }
      }, 0);
    };
    /**
     * 隐藏下拉菜单
     */
    let dropdownHide = function () {
      // 延迟一会隐藏下拉菜单是因为为了等待背景色改变后再隐藏
      let timer = setTimeout(function () {
        clearTimeout(timer);
        dropdownWillVisible.value = false;
        dropdownVisible.value = false;
        isFocus.value = false;
        (bsSelectInputRef.value as any)?.clearSearchText();
        (bsSelectInputRef.value as any)?.blur();
      }, 120);
    };

    /**
     * 修改值
     * @param val 值
     * @param isDelete 是否移除
     */
    let changeVal = function (val: any, isDelete?: boolean) {
      if (props.multiple) {
        let selectModelValue: unknown[] = (props.modelValue || []).slice();
        if (isDelete === true) {
          let index = selectModelValue.indexOf(val);
          if (index > -1) {
            selectModelValue.splice(index, 1);
            ctx.emit('update:modelValue', selectModelValue);
            ctx.emit('change', selectModelValue);
            callFormItem('validate', 'change');
          }
        } else {
          let multipleLimit = props.multipleLimit;
          if (typeof multipleLimit === 'number' && multipleLimit > 0 && selectModelValue.length >= multipleLimit) {
            ctx.emit('selectLimit', multipleLimit);
            return;
          }
          selectModelValue.push(val);
          ctx.emit('update:modelValue', selectModelValue);
          ctx.emit('change', selectModelValue);
          callFormItem('validate', 'change');
        }
        // 多选时值改变后需要刷新下拉内容
        let timer = setTimeout(function () {
          clearTimeout(timer);
          (dropdownTransitionRef.value as any)?.refresh();
        }, 60);
      } else {
        if (isDelete === true) {
          if (props.modelValue === val) {
            ctx.emit('update:modelValue', '');
            ctx.emit('change', '');
            dropdownHide();
            callFormItem('validate', 'change');
            return;
          }
          return;
        }
        ctx.emit('update:modelValue', val);
        ctx.emit('change', val);
        dropdownHide();
        callFormItem('validate', 'change');
      }
    };

    /**
     * 添加option
     * @param option
     */
    let addOption = function (option: SelectOptionContextItem) {
      let optionExists = optionItems.value.some((optionItem: SelectOptionContextItem) => optionItem.id === option.id);
      if (!optionExists) {
        optionItems.value.push(option);
      }
    };
    /**
     * 移除option
     * @param option
     */
    let removeOption = function (optionId: string, optionValue: any) {
      let index = optionItems.value.findIndex((optionItem: SelectOptionContextItem) => optionItem.id === optionId);
      if (index > -1) {
        optionItems.value.splice(index, 1);
        changeVal(optionValue, true);
      }
    };

    let viewText = computed(function () {
      let modelValue = Array.isArray(props.modelValue) ? props.modelValue : [props.modelValue];
      let selectedOptionLabels = optionItems.value.filter(function (option: SelectOptionContextItem) {
        return modelValue.includes(option.value);
      }).map(function (option: SelectOptionContextItem) {
        let newOption = {
          ...option,
          label: option.label || option.labelSlot
        };
        return newOption;
      });
      return selectedOptionLabels;
    });

    let isClickOutside = useClickOutside([bsSelectRef, bsSelectDropdownRef]);
    watch(isClickOutside, (newVal: boolean) => {
      if (newVal && dropdownVisible.value) {
        dropdownHide();
      }
    });

    // 输入框点击事件
    let onSelectInputClick = function () {
      if (props.disabled) {
        return;
      }
      if (dropdownVisible.value) {
        if (!props.multiple) {
          dropdownHide();
        } else {
          (bsSelectInputRef.value as any)?.focus();
        }
      } else {
        dropdownShow();
      }
    };

    // 标签关闭事件
    let onTagClose = function (option: SelectOptionContextItem) {
      changeVal(option.value, true);
    };

    let filterText = ref('');
    let filtering = ref(false); // 是否正在搜索中
    // 搜索文本change事件
    let onFilterTextChange = function (searchText: string) {
      filterText.value = searchText;
    };
    // 筛选通过的项
    let filteredVisibleOptions = reactive<{[key:string]: number}>({});

    // 清空内容
    let onSelectInputClear = function () {
      let val = props.multiple ? [] : '';
      ctx.emit('update:modelValue', val);
      ctx.emit('change', val);
      callFormItem('validate', 'change');
    };

    // 下拉菜单显示/隐藏事件
    let onDropdownVisibleChange = function (isVisible: boolean, el: HTMLElement) {
      ctx.emit('visibleChange', isVisible, el);
      if (!isVisible) {
        filtering.value = false;
        filterText.value = ''; // 解决单选模式下选中了某个下拉项后filterText变成了选中项的值
      }
    };

    let { callFormItem } = useDeliverContextToFormItem(props, {
      id: selectId.value,
      setValidateStatus: (status: BsValidateStatus) => {
        (bsSelectInputRef.value as any)?.setValidateStatus(status);
      }
    });

    provide<SelectContext>(selectContextKey, reactive({
      props,
      ctx,
      filterMethod: function (option: SelectOptionContextItem) {
        let text = filterText.value;
        if (!props.filterable) {
          return true;
        }
        filtering.value = true;
        let filterMethod = props.filterMethod;
        let result = true;
        if (typeof filterMethod === 'function') {
          result = !!filterMethod(text, option);
        } else {
          result = ((option.label || '') + '').toLowerCase().includes(text.toLowerCase());
        };
        if (result) {
          filteredVisibleOptions[option.value] = 1;
        } else {
          delete filteredVisibleOptions[option.value];
        }
        return result;
      },
      changeVal,
      addOption,
      removeOption
    }));
    // provide('parentCtx', { ctx });
    return {
      bsSelectRef,
      bsSelectInputRef,
      bsSelectDropdownRef,
      dropdownTransitionRef,
      bsInputReadonly,
      isFocus,
      selectId,
      dropdownDisplayed,
      dropdownWillVisible,
      dropdownVisible,
      optionItems,
      nativeSelectModel,
      viewText,
      filtering,
      filteredVisibleOptions,

      onSelectInputClear,
      dropdownShow,
      dropdownHide,
      setValidateStatus: function (status: BsValidateStatus) {
        (bsSelectInputRef.value as any).setValidateStatus(status);
      },

      onSelectInputClick,
      onTagClose,
      onFilterTextChange,
      onDropdownVisibleChange
    };
  }
});
</script>

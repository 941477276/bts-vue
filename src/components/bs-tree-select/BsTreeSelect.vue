<template>
  <div
    ref="bsTreeSelectRef"
    class="bs-tree-select"
    :class="[
      {
        'is-disabled': disabled,
        'is-focus': isFocus,
        // 'checkbox-hidden': multiple && !checkboxVisible,
        // 'radio-hidden': !multiple && !radioVisible
      },
      size ? `bs-select-${size}` :''
    ]"
    :data-bs-id="selectId"
    @click="onSelectRootClick">
    <BsSelectInput
      ref="bsSelectInputRef"
      :native-attrs="nativeAttrs"
      :disabled="disabled || loading"
      :loading="loading"
      :loading-text="loadingText"
      :loading-color-type="loadingColorType"
      :clearable="clearable"
      :id="selectId"
      :values="viewText"
      :size="size"
      :multiple="multiple"
      :filterable="filterable"
      :name="name"
      :placeholder="placeholder"
      :max-tag-count="maxTagCount"
      :tag-type="tagType"
      :tag-effect="tagEffect"
      :tag-closeable="tagCloseable"
      data-click="onSelectInputClick"
      @tag-close="onTagClose"
      data-filter-text-change="onFilterTextChange"
      @clear="onInputClear"></BsSelectInput>
    <teleport :disabled="!teleported" :to="appendTo">
      <BsDropdownTransition
        ref="dropdownTransitionRef"
        placement="bottom"
        :reference-ref="bsTreeSelectRef"
        :try-all-placement="false"
        :set-width="true"
        :will-visible="dropdownWillVisible">
        <div
          v-show="dropdownVisible"
          ref="bsSelectDropdownRef"
          class="bs-tree-select-dropdown"
          :class="[{
            'checkbox-hidden': multiple && !checkboxVisible,
            'radio-hidden': !multiple && !radioVisible
          }, dropdownClass]">
          <BsTree
            ref="treeRef"
            v-bind="treeProps"
            v-model:checked-keys="treeModelValue"
            :tree-data="treeData"
            :node-key="nodeKey"
            :empty-text="emptyText"
            :show-checkbox="multiple"
            :show-radio="!multiple"
            :check-strictly="checkStrictly"
            :check-on-click-node="checkOnClickNode"
            :expand-on-click-node="checkStrictly"
            :lazy="lazy"
            @node-expand="handleNodeExpand"
            @node-click="handleNodeClick"
            @node-destroy="handleNodeDestroy"
            @check-change="handleNodeCheckChange"></BsTree>
        </div>
      </BsDropdownTransition>
    </teleport>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  nextTick,
  ref,
  watch,
  ComponentInternalInstance,
  computed,
  provide,
  reactive
} from 'vue';
import {
  BsValidateStatus, PlainObject
} from '../types';
import {
  elementContains
} from '../../utils/bs-util';
import { useClickOutside } from '../../hooks/useClickOutside';
import BsTree from '../bs-tree/BsTree.vue';
import BsDropdownTransition from '../bs-dropdown-transition/BsDropdownTransition.vue';
import BsSelectInput from '../bs-select-input/BsSelectInput.vue';
import { bsTreeSelectProps } from './bs-tree-select-types';
import { useDeliverContextToFormItem } from '../../hooks/useDeliverContextToFormItem';
import { SelectContext, selectContextKey, SelectOptionContextItem } from '../bs-select/bs-select-types';

let treeSelectCount = 0;
export default defineComponent({
  name: 'BsTreeSelect',
  components: {
    BsTree,
    BsSelectInput,
    BsDropdownTransition
  },
  props: bsTreeSelectProps,
  emits: ['update:modelValue', 'change', 'node-expand', 'check-change', 'node-click', 'node-destroy', 'show', 'hide'],
  setup (props: any, ctx: any) {
    let bsTreeSelectRef = ref<HTMLElement|null>(null);
    let bsSelectInputRef = ref<ComponentInternalInstance|null>(null);
    let bsSelectDropdownRef = ref<HTMLElement|null>(null);
    let bsInputReadonly = ref(true);
    let isFocus = ref(false);
    let selectId = ref(props.id || `bs-tree-select_${++treeSelectCount}`);
    let dropdownDisplayed = ref(false); // 下拉菜单是否已经渲染
    let dropdownWillVisible = ref(false); // 下拉菜单是否即将显示
    let dropdownVisible = ref(false); // 下拉菜单是否显示
    let treeRef = ref(null);
    let dropdownTransitionRef = ref(null);

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
        ctx.emit('show');
        nextTick(function () {
          if (props.defaultExpandCheckedNodesParent) {
            // 展开选中节点的父级节点
            (treeRef.value as any).expandCheckedNodesParent();
            // 刷新下拉菜单位置
            let timer2 = setTimeout(function () {
              clearTimeout(timer2);
              (dropdownTransitionRef.value as any)?.refresh();
            }, 320);
          }
        });
      }, 0);
    };

    let hideTimer: number;
    /**
     * 隐藏下拉菜单
     */
    let dropdownHide = function (useTimeout = false) {
      if (useTimeout) {
        clearTimeout(hideTimer);
        // 这里延迟180毫秒是为了能让用户看到选中项到变化
        hideTimer = setTimeout(function () {
          clearTimeout(hideTimer);
          dropdownWillVisible.value = false;
          dropdownVisible.value = false;
          isFocus.value = false;
          ctx.emit('hide');
        }, 180);
      } else {
        dropdownWillVisible.value = false;
        dropdownVisible.value = false;
        isFocus.value = false;
        ctx.emit('hide');
      }
    };

    // 树组件的modelValue
    let treeModelValue = computed({
      get () {
        let modelValue = props.modelValue;
        if (!Array.isArray(modelValue)) {
          modelValue = [modelValue];
        }
        if (!props.multiple) {
          modelValue = [modelValue[0]];
        }
        return modelValue;
      },
      set (treeModelNewVal: any) {
        if (props.multiple) {
          // let modelValue: (string|number)[] = newVal;
          let result = [...treeModelNewVal];
          ctx.emit('update:modelValue', result);
          ctx.emit('change', result);
          callFormItem('validate', 'change');
        } else {
          let newVal = Array.isArray(treeModelNewVal) ? treeModelNewVal[0] : treeModelNewVal;
          ctx.emit('update:modelValue', newVal);
          ctx.emit('change', newVal);
          callFormItem('validate', 'change');
          dropdownHide(true);
        }
      }
    });

    let viewText = ref([]);
    watch(() => props.modelValue, function () {
      nextTick(function () {
        let labels = props.labels;
        if (props.lazy && !labels) {
          console.warn('labels is required when lazy=true!');
        }
        if (treeRef.value) {
          labels = labels || [];
          let labelsFromTree = (treeRef.value as any).getCheckedNodesLabel();
          labelsFromTree.forEach((labelItem: PlainObject) => {
            let index = labels.findIndex((label: PlainObject) => labelItem.value === label.value);
            // 优先使用从props中传递过来的label
            if (index > -1) {
              labelItem.label = labels[index].label;
            }
          });
          viewText.value = labelsFromTree.map((labelItem: PlainObject) => {
            return {
              ...labelItem,
              label: labelItem.label
            };
          });
        }
        if (dropdownVisible.value) {
          // 多选时值改变后需要刷新下拉内容
          let timer = setTimeout(function () {
            clearTimeout(timer);
            (dropdownTransitionRef.value as any)?.refresh();
          }, 60);
        }
      });
    }, { immediate: true });

    let isClickOutside = useClickOutside([bsTreeSelectRef, bsSelectDropdownRef]);
    watch(isClickOutside, (newVal: boolean) => {
      if (newVal) {
        dropdownHide();
      }
    });

    let onSelectRootClick = function (evt: MouseEvent) {
      if (props.disabled || props.loading) {
        return;
      }
      let target = evt.target! as HTMLElement;
      if (treeRef.value && (elementContains((treeRef.value as any).$el, target) || (treeRef.value as any).$el === target)) {
        return;
      }
      if (dropdownVisible.value) {
        dropdownHide();
      } else {
        isFocus.value = true;
        dropdownShow();
      }
    };

    // 清空内容
    let onInputClear = function () {
      let val = props.multiple ? [] : '';
      ctx.emit('update:modelValue', val);
      ctx.emit('change', val);
      callFormItem('validate', 'change');
    };

    //
    let onTagClose = function (option: any) {
      if (option.disabled) {
        return;
      }
      let modelValue = [...treeModelValue.value];
      let optionValue = option.value;
      let index = modelValue.findIndex(item => item === optionValue);
      if (index > -1) {
        modelValue.splice(index, 1);
      }
      treeModelValue.value = modelValue;
    };

    let { callFormItem } = useDeliverContextToFormItem(props, {
      id: selectId.value,
      setValidateStatus: (status: BsValidateStatus) => {
        if (bsSelectInputRef.value) {
          (bsSelectInputRef.value as any).setValidateStatus(status);
        }
      }
    });

    provide<SelectContext>(selectContextKey, reactive({
      props,
      ctx,
      filterMethod (option: SelectOptionContextItem) {
        return true;
      },
      changeVal (val: any, isDelete?: boolean) {
      //
      },
      addOption (option: SelectOptionContextItem) {
      //
      },
      removeOption (optionId: string, optionValue: any) {
      //
      }
    }));

    return {
      bsTreeSelectRef,
      bsSelectInputRef,
      treeRef,
      bsSelectDropdownRef,
      dropdownTransitionRef,
      bsInputReadonly,
      isFocus,
      selectId,
      dropdownDisplayed,
      dropdownWillVisible,
      dropdownVisible,
      viewText,
      treeModelValue,

      setValidateStatus: function (status: BsValidateStatus) {
        (bsSelectInputRef.value as any).setValidateStatus(status);
      },
      refreshDropdown () { // 刷新下拉菜单位置
        if (!dropdownVisible.value) {
          return;
        }
        (dropdownTransitionRef.value as any)?.refresh();
      },
      onSelectRootClick,
      onInputClear,
      dropdownShow,
      dropdownHide,
      onTagClose,
      handleNodeExpand (nodeData: any, expanded: boolean, nodeState: any) {
        ctx.emit('node-expand', nodeData, expanded, nodeState);
      },
      handleNodeClick (nodeData: any, nodeState: any) {
        ctx.emit('node-click', nodeData, nodeState);
      },
      handleNodeDestroy (nodeData: any) {
        ctx.emit('node-destroy', nodeData);
      },
      handleNodeCheckChange (nodeData: any, isChecked: boolean) {
        ctx.emit('check-change', nodeData, isChecked);
      }
    };
  }
});
</script>

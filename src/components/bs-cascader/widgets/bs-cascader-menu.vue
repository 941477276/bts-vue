<template>
  <ul
    class="bs-cascader-menu"
    :data-cascader-menu-id="cascaderMenuId"
    role="menu">
    <li
      class="bs-cascader-menu-item"
      v-for="item in options"
      :key="item.value"
      :class="[
        {
          'is-disabled': item.disabled,
          'is-multiple': multiple
        },
        getClassnames(item)
      ]"
      @click="handlerItemClick(item, $event)"
      @mouseenter="handlerItemMouseenter(item, $event)">
      <BsCheckbox
        v-if="multiple"
        :model-value="getCheckboxInputValue(item)"
        :value="item[fieldNames.value]"
        :name="checkboxName || (cascaderId + '_checkbox')"
        :disabled="item[fieldNames.disabled]"
        :delive-context-to-form-item="false"
        :indeterminate="getIsIndeterminate(item)"
        @click.stop
        @change="handleCheckboxChange(item, $event)"></BsCheckbox>
      <BsRadio
        v-if="!multiple && checkStrictly"
        :model-value="radioInputValue"
        :name="radioName || (cascaderId + '_radio')"
        :disabled="item[fieldNames.disabled]"
        :value="item[fieldNames.value]"
        :delive-context-to-form-item="false"
        @click.stop
        @change="setChecked(item)"></BsRadio>
      <!--<div class="bs-cascader-menu-item-label" :title="item.label">{{ item.label }}</div>-->
      <BsCascaderMenuItemLabel
        :cascader-slots="cascaderSlots"
        :option-item="item">{{ item.label }}</BsCascaderMenuItemLabel>
      <BsSpinner
        class="bs-cascader-loading-icon"
        v-if="lazy && (item[fieldNames.value] in loadingMap)"
        v-show="loadingMap[item[fieldNames.value]] == 'loading'"></BsSpinner>
      <BsiChevronRight v-if="getChevronVisible(item)"></BsiChevronRight>
      <BsiCheckLg v-if="!multiple && !checkStrictly" class="bs-cascader-check-icon">></BsiCheckLg>
    </li>
  </ul>
</template>

<script lang="ts">
import {
  PropType,
  Ref,
  defineComponent,
  computed,
  ref,
  reactive
} from 'vue';
import {
  NOOP,
  isFunction
} from '@vue/shared';
import BsCheckbox from '../../bs-checkbox/BsCheckbox.vue';
import BsRadio from '../../bs-radio/BsRadio.vue';
import { BsiChevronRight } from 'vue3-bootstrap-icon/es/icons/BsiChevronRight';
import { BsiCheckLg } from 'vue3-bootstrap-icon/es/icons/BsiCheckLg';
import BsSpinner from '../../bs-spinner/BsSpinner.vue';
import BsCascaderMenuItemLabel from './bs-cascader-menu-item-label';
import {
  cascaderMenuProps,
  CascaderOptionItem,
  CascaderExpandedMenuItem,
  CascaderFieldNames
} from '../bs-cascader-types';
import {
  hasClass
} from '../../../utils/bs-util';

type LazyLoadingStatus = 'loading' | 'fail' | 'success';

let cascaderMenuCount = 0;
export default defineComponent({
  name: 'bs-cascader-menu',
  components: {
    BsCheckbox,
    BsRadio,
    BsSpinner,
    BsiChevronRight,
    BsiCheckLg,
    BsCascaderMenuItemLabel
  },
  props: {
    options: {
      type: Array,
      default () {
        return [];
      }
    },
    cascaderSlots: { // 父组件的插槽上下文
      type: Object,
      default: null
    },
    expandedMenus: {
      type: Array as PropType<CascaderExpandedMenuItem[]>,
      default () {
        return [];
      }
    },
    checkedOptions: { // 选中节点列表
      type: Object,
      default () {
        return {};
      }
    },
    halfCheckedOptions: { // 半选中节点列表，只在多选时有效
      type: Object,
      default () {
        return {};
      }
    },
    fieldNames: { // 自定义 options 中 label、 children、disabled 的字段名称
      type: Object as PropType<CascaderFieldNames>,
      default () {
        return {};
      }
    },
    cascaderId: {
      type: String,
      default: ''
    },
    menuId: {
      type: String,
      default: ''
    },
    ...cascaderMenuProps
  },
  emits: ['item-open', 'item-checked', 'item-change'],
  setup (props: any, ctx: any) {
    let cascaderMenuId = props.menuId ? props.menuId : `bs-cascader-menu_${++cascaderMenuCount}`;
    // 存储节点加载子节点数据状态，状态值可以为：loading、success、fail
    let loadingMap = reactive<{ [key:string]: LazyLoadingStatus }>({});

    // 是否有子options
    let getHasChildren = function (optionItem: any) {
      let children = optionItem[props.fieldNames.children];
      return Array.isArray(children) && children.length > 0;
    };

    // 是否显示向右箭头
    let getChevronVisible = function (optionItem: any) {
      let { value: valueKey, children: childrenKey, leaf: leafKey } = props.fieldNames;
      let children = optionItem[childrenKey];
      let hasChildren = Array.isArray(children) && children.length > 0;
      let lazy = props.lazy;
      let isLeaf = optionItem[leafKey];
      // let isLoading = optionItem[valueKey] in loadingMap;
      let loadingStatus = loadingMap[optionItem[valueKey]];
      if (!lazy) {
        return hasChildren;
      }
      if (isLeaf === true || loadingStatus == 'loading' || (loadingStatus == 'success' && !hasChildren)) {
        return false;
      }
      return true;
    };

    let getIsInclude = function (optionItem: any) {
      let { value: valueKey } = props.fieldNames;
      let value = optionItem[valueKey];
      let isInclude = Object.values(props.checkedOptions).some(function (checkedOptionList) {
        return (checkedOptionList as CascaderOptionItem[]).some((checkedOption: any) => checkedOption[valueKey] === value);
      });
      return isInclude;
    };

    // 设置classname
    let getClassnames = function (optionItem: any) {
      let classlist: string[] = [];
      let { value: valueKey } = props.fieldNames;
      let value = optionItem[valueKey];
      let isChecked = !!props.checkedOptions[value];
      let isInclude = getIsInclude(optionItem);
      let isExpanded = props.expandedMenus?.some((menuItem: CascaderExpandedMenuItem) => {
        return menuItem.menuId === cascaderMenuId && menuItem.menuItemValue === value;
      });
      let isMultiple = props.multiple;

      if (isMultiple) {
        /* if (props.checkStrictly) {
          isChecked = isInclude;
        } */
        // isChecked =  true;
      } else {
        let hasChildren = getHasChildren(optionItem);
        if (hasChildren && !props.checkStrictly) {
          isChecked = false;
        }
        // isChecked = isInclude;
      }
      if (isExpanded) {
        classlist.push('is-expanded');
      }
      if (isInclude) {
        classlist.push('is-actived');
        classlist.push(`is-${isMultiple ? 'multiple' : 'single'}-actived`);
      }
      if (isChecked) {
        classlist.push('is-checked');
      }
      return classlist;
    };

    let setChecked = function (optionItem: CascaderOptionItem) {
      ctx.emit('item-checked', optionItem, cascaderMenuId);
      ctx.emit('item-change', optionItem, cascaderMenuId);
    };
    let removeChecked = function (optionItem: CascaderOptionItem) {
      ctx.emit('item-checked', optionItem, cascaderMenuId, false);
      ctx.emit('item-change', optionItem, cascaderMenuId, false);
    };

    // 复选框是否为半选中状态
    let getIsIndeterminate = function (optionItem: CascaderOptionItem) {
      let {
        value: valueKey
      } = props.fieldNames;
      return (optionItem as any)[valueKey] in props.halfCheckedOptions;
    };

    // 复选框的值
    let getCheckboxInputValue = function (optionItem: CascaderOptionItem) {
      // let keys = Object.keys(props.checkedOptions);
      if (props.multiple && props.checkStrictly) {
        return Object.keys(props.checkedOptions);
      }
      let { value: valueKey } = props.fieldNames;
      let value = (optionItem as any)[valueKey];
      let isIndeterminate = getIsIndeterminate(optionItem);
      let isInclude = getIsInclude(optionItem);
      let result = isInclude && !isIndeterminate ? [value] : [];
      return result;
    };

    let radioInputValue = computed(function () {
      let keys = Object.keys(props.checkedOptions);
      return props.multiple ? keys : keys[0];
    });
    // 多选框值改变事件
    let handleCheckboxChange = function (optionItem: CascaderOptionItem, evt: InputEvent) {
      let isChecked = (evt.target as HTMLInputElement).checked;
      isChecked ? setChecked(optionItem) : removeChecked(optionItem);
    };

    // 执行懒加载数据
    let triggerLazyLoad = function (optionItem: any) {
      let {
        children: childrenKey,
        value: valueKey,
        // disabled: disabledKey,
        leaf: leafKey
      } = props.fieldNames;
      let value = optionItem[valueKey];
      let children = optionItem[childrenKey];
      let hasChildren = Array.isArray(children) && children.length > 0;
      let loadingStatus = loadingMap[value];
      // 懒加载节点数据
      if (props.lazy && (!loadingStatus || loadingStatus == 'fail')) { // 正在加载中或已加载完成不允许再次加载
        let lazyLoadFn = props.lazyLoadFn;
        lazyLoadFn = !isFunction(lazyLoadFn) ? function (optionData: any, setLoadStatus: any) {
          setLoadStatus();
        } : lazyLoadFn;
        // 没有子节点或者非叶子节点才进行懒加载数据
        if (!hasChildren && optionItem[leafKey] !== true) {
          loadingMap[value] = 'loading';
          lazyLoadFn(optionItem, function (loadSuccess: boolean) {
            let isLoadSuccess = typeof loadSuccess === 'undefined' ? true : !!loadSuccess;
            loadingMap[value] = isLoadSuccess ? 'success' : 'fail';
            let newChildren = optionItem[childrenKey];
            if (Array.isArray(newChildren) && newChildren.length > 0) {
              // 防止因使用者先调用这个函数展开子节点，而节点还未设置children导致节点展开后未能高亮问题
              let timer = setTimeout(function () {
                clearTimeout(timer);
                // 展开子节点
                ctx.emit('item-open', optionItem, cascaderMenuId, cascaderMenuCount + 1);
              }, 0);
            }
          });
          return true;
        }
      }
    };

    let handlerItemClick = function (optionItem: any, evt: MouseEvent) {
      let {
        children: childrenKey,
        // value: valueKey,
        disabled: disabledKey
      } = props.fieldNames;
      let target = evt.target as HTMLElement;
      // 防止点击复选框、单选框后造成重复点击！
      if (target.nodeName === 'INPUT' && hasClass(target, 'form-check-input')) {
        return;
      }
      if (optionItem[disabledKey]) {
        return;
      }

      let isLoading = triggerLazyLoad(optionItem);
      if (isLoading) {
        return;
      }
      let multiple = props.multiple;
      // 如果显示了复选框或单选框则展开子节点
      if (multiple || (!multiple && props.checkStrictly)) {
        ctx.emit('item-open', optionItem, cascaderMenuId, cascaderMenuCount + 1);
        return;
      }
      let children = optionItem[childrenKey];
      let hasChildren = Array.isArray(children) && children.length > 0;
      // 单选节点
      if (!hasChildren) {
        setChecked(optionItem);
        return;
      }
      // 展开子节点
      ctx.emit('item-open', optionItem, cascaderMenuId, cascaderMenuCount + 1);
    };

    let handlerItemMouseenter = function (optionItem: any, evt: MouseEvent) {
      let { disabled: disabledKey } = props.fieldNames;
      if (optionItem[disabledKey] || props.expandTrigger !== 'hover') {
        return;
      }
      let isLoading = triggerLazyLoad(optionItem);
      if (isLoading) {
        return;
      }
      // 展开子节点
      ctx.emit('item-open', optionItem, cascaderMenuId, cascaderMenuCount + 1);
    };
    return {
      cascaderMenuId,
      radioInputValue,
      loadingMap,
      getHasChildren,
      getClassnames,
      getIsIndeterminate,
      getCheckboxInputValue,
      getChevronVisible,

      setChecked,
      handlerItemClick,
      handlerItemMouseenter,
      handleCheckboxChange
    };
  }
});
</script>

import {
  ComputedRef,
  Ref,
  ref,
  watch,
  nextTick
} from 'vue';
import {
  isString,
  isArray
} from '@vue/shared';
import {
  CascaderOptionItem,
  CascaderExpandedMenuItem,
  CascaderFieldNames,
  CheckedOptions
} from './bs-cascader-types';
import { BsNodeInfo } from '../bs-tree/bs-tree-types';
import {
  PlainObject
} from '../types';
import {
  findNodeByUid,
  findParentsByUid
} from '../../utils/bs-tree-utils';
import {
  useCascaderMultiple
} from './useCascaderMultiple';
import {
  scrollTo
} from '../../utils/bs-util';

export function useCascaderMenu (options: any) {
  let {
    props,
    ctx,
    fieldNameProps,
    flatternOptions,
    expandedMenus,
    cascaderMenusRef,
    dropdownTransitionRef,
    cascaderId,
    callFormItem,
    dropdownHide
  } = options;
  // 选中项列表
  let checkedOptions = ref<CheckedOptions>({});
  // 半选中列表
  let halfCheckedOptions = ref<PlainObject>({});
  // 存储最近一个更新给父组件的值
  let localModelValue: any[] = [];

  let {
    addMultipleOptionsChecked,
    removeMultipleOptionsChecked
  } = useCascaderMultiple(props, checkedOptions, halfCheckedOptions, fieldNameProps, flatternOptions, dropdownTransitionRef, cascaderId);

  // 添加菜单到展开列表
  let pushMenuToExpanded = function (menuOption: any, cascaderMenuId: string, nextMenuCount: number) {
    let {
      children: childrenKey,
      value: valueKey
    } = fieldNameProps.value;
    let menuChildren = menuOption[childrenKey];
    let menuItemValue = menuOption[valueKey];

    let menuIdPrefix = cascaderMenuId.split('_')[0];
    // let menuCount = Number(cascaderMenuId.split('_')[1]);
    let newMenuId = `${menuIdPrefix}_${nextMenuCount}`;

    let expandedMenuList = expandedMenus.value;
    if (menuChildren && menuChildren.length > 0) {
      let index = expandedMenuList.findIndex((menuItem: CascaderExpandedMenuItem) => menuItem.menuId === cascaderMenuId);
      let newMenu = {
        menuId: newMenuId,
        menuItemValue: '',
        menuOptions: menuChildren
      };
      if (index > -1) {
        let removeCount = expandedMenuList.length - index;
        expandedMenuList[index].menuItemValue = menuItemValue;
        // 将当前菜单后面到菜单都移除掉，并替换成新的菜单
        expandedMenuList.splice(index + 1, removeCount, newMenu);
      } else {
        newMenu.menuItemValue = menuItemValue;
        expandedMenuList.push(newMenu);
      }
      let cascaderMenusEl = cascaderMenusRef.value;
      if (cascaderMenusEl) {
        nextTick(function () {
          // @ts-ignore
          scrollTo(cascaderMenusEl, 'x', cascaderMenusEl?.scrollWidth || 0, 200);
        });
      }
    }
  };

  // 更新父组件的值
  let updateModelValue = function () {
    let {
      value: valueKey,
      disabled: disabledKey
    } = fieldNameProps.value;
    let emitPath = props.emitPath;
    let checkedOptionsList = Object.values(checkedOptions.value) as CascaderOptionItem[][];
    if (checkedOptionsList.length == 0) {
      localModelValue = [];
      ctx.emit('update:modelValue', []);
      ctx.emit('change', []);
      callFormItem('validate', 'change');
      return;
    }
    let newModelValue = checkedOptionsList.map((checkedOptionItemListPath: any[]) => {
      let values = checkedOptionItemListPath.map(function (checkedOptionItem) {
        return checkedOptionItem[valueKey];
      });
      let result = emitPath ? values : [values[values.length - 1]];
      return result;
    });
    let modelValue;
    if (!props.multiple) {
      modelValue = newModelValue[0];
    } else {
      modelValue = newModelValue;
    }
    localModelValue = [...modelValue];
    ctx.emit('update:modelValue', modelValue);
    ctx.emit('change', modelValue);
    callFormItem('validate', 'change');
  };

  /**
   * 添加选中项
   * @param optionItem 选中option
   * @param needUpdateModelValue 是否需要更新父组件的值
   */
  let addOptionChecked = function (optionItem: any, needUpdateModelValue = true) {
    let {
      value: valueKey,
      disabled: disabledKey,
      children: childrenKey
    } = fieldNameProps.value;
    if (!optionItem) {
      return;
    }
    let value = optionItem[valueKey];
    if (optionItem[disabledKey] && needUpdateModelValue) {
      return;
    }
    // 存在了就不再添加
    if (value in checkedOptions.value) {
      return;
    }
    // 获取当前option的所有父级节点
    let findOptionParents = function () {
      // let optionParentNodeInfos = findParentsByNodeValue2(cascaderId, value, valueKey, flatternOptions.value);
      let optionParentNodeInfos = findParentsByUid(cascaderId, value, flatternOptions.value);
      let optionParents = optionParentNodeInfos.map((nodeInfo: BsNodeInfo) => {
        return nodeInfo.node;
      }) as CascaderOptionItem[];
      optionParents.reverse();
      return optionParents;
    };
    let optionParents = findOptionParents();
    optionParents.push(optionItem);
    if (!props.multiple) {
      checkedOptions.value = {
        [value]: optionParents
      };
    } else {
      addMultipleOptionsChecked(optionItem, !needUpdateModelValue);
    }
    if (needUpdateModelValue || !props.multiple) {
      updateModelValue();
      ctx.emit('select', optionItem, true);
    }
    if (needUpdateModelValue && !props.multiple && !props.checkStrictly) {
      dropdownHide();
    }
  };

  /**
   * 移除选中项
   * @param optionItem 选中option
   * @param needUpdateModelValue 是否需要更新父组件的值
   */
  let removeCheckedOption = function (optionItem: any, needUpdateModelValue = true) {
    let {
      value: valueKey,
      disabled: disabledKey
    } = fieldNameProps.value;
    // let value = optionItem[valueKey];
    if (optionItem[disabledKey] && needUpdateModelValue) {
      return;
    }
    if (!props.multiple) {
      checkedOptions.value = {};
    } else {
      removeMultipleOptionsChecked(optionItem);
    }
    if (needUpdateModelValue) {
      updateModelValue();
      ctx.emit('select', optionItem, false);
    }
  };

  let handleMenuItemOpen = function (menu: CascaderOptionItem, cascaderMenuId: string, nexMenuCount: number) {
    pushMenuToExpanded(menu, cascaderMenuId, nexMenuCount);
  };

  let handleMenuItemChecked = function (optionItem: CascaderOptionItem, cascaderMenuId: string, isAdd: boolean | undefined) {
    if (typeof isAdd === 'undefined' || !!isAdd) {
      addOptionChecked(optionItem);
    } else {
      removeCheckedOption(optionItem);
    }
  };

  // 同步选中项列表
  watch(() => props.modelValue, function (modelValue: any) {
    let {
      multiple
    } = props;

    if (isString(modelValue)) {
      let optionValues = modelValue.split(',');
      if (!multiple) {
        modelValue = [optionValues[optionValues.length - 1]];
      }
    }
    if ([...localModelValue].sort().join(',') === [...modelValue].sort().join(',') && modelValue.length > 0) {
      return;
    }
    // 延迟60毫秒的原因是防止扁平化树时太慢而导致查找option不正确
    let timer = setTimeout(function () {
      clearTimeout(timer);
      let oldCheckedOptions = checkedOptions.value;
      let {
        value: valueKey,
        label: labelKey
      } = fieldNameProps.value;
      checkedOptions.value = {}; // 清空原来的选中项列表
      halfCheckedOptions.value = {};
      modelValue.forEach(function (item: string | number | (string | number)[]) {
        let optionValue: string | number;
        if (isArray(item)) { // 如果还是数组，则取数组最后一项的值，这样不管props.emitPath是否为true都不会取错值
          optionValue = item[item.length - 1];
        } else {
          optionValue = item;
        }
        let option: CascaderOptionItem;
        if (optionValue in oldCheckedOptions) {
          let oldCheckedOptionPath = oldCheckedOptions[optionValue];
          option = oldCheckedOptionPath[oldCheckedOptionPath.length - 1];
        } else {
          // let currentOption = findNodeInfoByValue2(cascaderId, optionValue, valueKey, flatternOptions.value);
          let currentOption = findNodeByUid(cascaderId, optionValue, flatternOptions.value);
          if (!currentOption) { // 如果在节点列表没有找到该节点，则根据节点的值创建一个新节点
            option = {
              [labelKey]: optionValue,
              [valueKey]: optionValue
            };
          } else {
            option = currentOption.node;
          }
        }
        addOptionChecked(option, false);
      });
    }, 60);
  }, {
    immediate: true,
    deep: true
  });

  return {
    expandedMenus,
    checkedOptions,
    halfCheckedOptions,
    removeCheckedOption,
    handleMenuItemOpen,
    handleMenuItemChecked
  };
};

import {
  ComponentInternalInstance,
  Ref,
  computed,
  inject
} from 'vue';
import { isUndefined } from '../../../utils/bs-util';
import {
  bsMenuRootInjectKey
} from '../bs-menu-types';

const MENU_NAME = 'BsMenu';
const SUB_MENU_NAME = 'BsSubMenu';
const MENU_ITEM_NAME = 'BsMenuItem';
const ITEM_GROUP_NAME = 'BsMenuItemGroup';
export function useMenuLevel (currentInstance: ComponentInternalInstance, props: any, id: string) {
  let menuRootCtx = inject(bsMenuRootInjectKey) as any;

  let currentKeyIndex = computed(function () {
    let keyIndex = props.keyIndex;
    if (!isUndefined(keyIndex) && keyIndex !== null && (keyIndex + '').length > 0) {
      return keyIndex;
    }
    return id;
  });

  // 获取组件层级路径
  let keyIndexPath = computed(function () {
    let parent = currentInstance.parent!;
    let path = [{
      keyIndex: currentKeyIndex.value,
      name: currentInstance.type.name
    }];
    let menuComponentNames = [SUB_MENU_NAME, ITEM_GROUP_NAME];
    while (parent && parent.type.name !== MENU_NAME) {
      if (menuComponentNames.includes(parent.type.name as string)) {
        path.unshift({
          keyIndex: (parent.proxy as any)?.currentKeyIndex,
          name: parent.type.name
        });
      }
      parent = parent.parent!;
    }
    return path;
  });
  // 获取组件所有父级组件的ID
  let parentsIdPath = computed(function () {
    let parent = currentInstance.parent!;
    let path = [];
    let menuComponentNames = [SUB_MENU_NAME, ITEM_GROUP_NAME];
    while (parent && parent.type.name !== MENU_NAME) {
      if (menuComponentNames.includes(parent.type.name as string)) {
        path.unshift({
          id: (parent.proxy as any)?.comId,
          name: parent.type.name
        });
      }
      parent = parent.parent!;
    }
    return path;
  });
  // 获取组件的父级菜单组件
  let parentMenu = computed(function () {
    let parent = currentInstance.parent!;
    let names = [MENU_NAME, SUB_MENU_NAME];
    while (parent && !names.includes(parent.type.name as string)) {
      parent = parent.parent!;
    }
    return parent;
  });
  // 计算dom元素的padding-left值
  let paddingLeft = computed(function () {
    let result = {
      value: '',
      unit: ''
    };
    if (!menuRootCtx) {
      return result;
    }
    let {
      indent,
      indentUnit,
      collapse
    } = menuRootCtx.props;
    result.unit = indentUnit;
    let currentComponentName = currentInstance.type.name;
    let keyIndexPathValue = keyIndexPath.value.slice(0);
    let subMenuDisplayMode = menuRootCtx.subMenuDisplayModeInner.value;
    let parentMenuName = parentMenu.value?.type.name || '';

    // 如果父组件是menu根组件，并且菜单收起来了，则不计算padding-left值
    if ((parentMenuName == MENU_NAME) && collapse) {
      return result;
    }

    if (subMenuDisplayMode == 'dropdown') {
      // 当子菜单展现形式为下拉时，BsSubMenu组件不需要缩进
      /* if (currentComponentName == SUB_MENU_NAME) {
        return result;
      } */
      // 获取最近的父组件的名称
      let nearestParentComponentName = keyIndexPathValue.length > 0 ? (keyIndexPathValue[keyIndexPathValue.length - 2]?.name) : '';
      console.log('nearestParentComponentName', nearestParentComponentName);
      // 当子菜单展现形式为下拉时，只筛选出 BsMenuItemGroup 组件，因为只有该组件及该组件下的 BsMenuItem 组件才需要进行缩进
      keyIndexPathValue = keyIndexPathValue.filter(item => {
        return item.name == ITEM_GROUP_NAME;
      });
      if (keyIndexPathValue.length > 0 && nearestParentComponentName == ITEM_GROUP_NAME && [MENU_ITEM_NAME, SUB_MENU_NAME].includes(currentComponentName as string)) {
        keyIndexPathValue.push(keyIndexPath.value[keyIndexPath.value.length]);
      }
    }

    let indentNumber = keyIndexPathValue.reduce(function (res) {
      return res + indent;
    }, 0);
    // console.log('indentNumber', indentNumber);

    return {
      value: indentNumber,
      unit: indentUnit
    };
  });

  return {
    currentKeyIndex,
    keyIndexPath,
    parentsIdPath,
    parentMenu,
    paddingLeft
  };
};

<template>
  <ul
    class="bs-menu"
    ref="menuRef"
    :class="[
      `bs-menu-${mode}`,
      {
        'bs-menu-collapsed': collapse
      }
    ]"
    role="menu">
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import {
  defineComponent,
  getCurrentInstance,
  computed,
  provide,
  ref,
  reactive,
  watch
} from 'vue';
import {
  isString
} from '@vue/shared';
import {
  bsMenuProps,
  bsSubMenuDisplayMode,
  bsMenuRootInjectKey,
  MenuItemResgisted,
  ExpandedSubmenu
} from './bs-menu-types';
import { getScrollParent, scrollTo, offset, getStyle } from '../../utils/bs-util';

let menuCount = 0;
export default defineComponent({
  name: 'BsMenu',
  props: bsMenuProps,
  emits: ['openChange', 'itemClick', 'update:selectedKeys', 'select'],
  setup (props: any, ctx:any) {
    let menuId = `bs-menu_${++menuCount}`;
    // 子菜单展现形式
    let subMenuDisplayModeInner = computed(function () {
      let {
        mode,
        collapse,
        subMenuDisplayMode
      } = props;
      mode = mode?.toLowerCase();

      if (mode == 'horizontal') {
        return bsSubMenuDisplayMode.dropdown;
      }
      if (mode == 'vertical') {
        if (collapse) {
          return bsSubMenuDisplayMode.dropdown;
        }
        if (!subMenuDisplayMode) {
          return bsSubMenuDisplayMode.collapse;
        }
        return subMenuDisplayMode;
      }
      if (mode == 'h5') {
        if (!subMenuDisplayMode) {
          return bsSubMenuDisplayMode.collapse;
        }
        return subMenuDisplayMode;
      }
      return bsSubMenuDisplayMode.collapse;
    });

    // 已注册的submenu
    let registedSubMenus = reactive<Record<string, MenuItemResgisted>>({});
    // 展开的submenu
    let expandedSubMenus = reactive<Record<string, ExpandedSubmenu>>({});
    // 展开的直接子submenu
    let expandedChildSubmenus = reactive<Record<string, ExpandedSubmenu>>({});
    // 已注册的menuitem
    let registedMenuItems = reactive<Record<string, MenuItemResgisted>>({});

    // 滚动到选中的菜单项中
    let scrollToSelectedMenu = function () {
      let activeMenu = menuRef.value?.querySelector('.bs-menu-item.is-selected');
      if (!activeMenu) {
        return;
      }
      let scrollParent = getScrollParent(activeMenu as HTMLElement);
      if (!scrollParent) {
        return;
      }
      let scrollParentOffset = offset(scrollParent);
      let scrollParentPaddingTop = getStyle(scrollParent, 'padding-top');
      let activeMenuOffset = offset(activeMenu as HTMLElement);
      scrollTo(scrollParent, 'y', activeMenuOffset.top - scrollParentOffset.top - scrollParentPaddingTop, 150);
    };

    // 选中的菜单项
    let selectedKeysInner = ref<string[]>([]);
    let menuRef = ref<HTMLElement|null>(null);
    let timer: number;
    watch(() => {
      let selectedKes = props.selectedKeys;
      if (isString(selectedKes)) {
        return selectedKes.split(',');
      }
      return [...selectedKes];
    }, function (selectedKes: string[]) {
      if (selectedKes.join(',') === selectedKeysInner.value.join(',')) {
        return;
      }
      selectedKeysInner.value = selectedKes;
      if (props.autoScrollToSelectedMenu && props.mode === 'vertical') {
        clearTimeout(timer);
        timer = setTimeout(() => {
          clearTimeout(timer);
          scrollToSelectedMenu();
        }, 100);
      }
    }, {
      immediate: true
    });

    provide(bsMenuRootInjectKey, {
      subMenuDisplayModeInner,
      props,
      registedMenuItems,
      selectedKeysInner,
      addSubMenu (submenu: MenuItemResgisted) {
        registedSubMenus[submenu.id] = submenu;
      },
      removeSubMenu (submenuId: string) {
        delete registedSubMenus[submenuId];
      },
      addMenuItem (menu: MenuItemResgisted) {
        registedMenuItems[menu.id] = menu;
      },
      removeMenuItem (menuId: string) {
        delete registedMenuItems[menuId];
      },
      expandedSubMenu (submenu: ExpandedSubmenu, isExpanded: boolean) {
        if (isExpanded) {
          expandedSubMenus[submenu.id] = submenu;
        } else {
          delete expandedSubMenus[submenu.id];
        }
      },
      handChildSubmenuExpand (submenu: ExpandedSubmenu, isExpanded: boolean) {
        if (isExpanded) {
          // 如果开启了同层级只有一个子菜单展开，则收起其他菜单
          if (props.uniqueOpened) {
            for (let attr in expandedChildSubmenus) {
              expandedChildSubmenus[attr].shrinkSubmenu();
            }
            expandedChildSubmenus = {};
          }
          expandedChildSubmenus[submenu.id] = submenu;
        } else {
          delete expandedChildSubmenus[submenu.id];
        }
      },
      handleMenuItemSelect (keyIndex: string, keyPath: string[], isSelected: boolean) {
        selectedKeysInner.value = [keyIndex];
        ctx.emit('update:selectedKeys', [keyIndex]);
        ctx.emit('select', keyIndex, isSelected, keyPath);
      },
      emit (name: string, ...args: any) {
        ctx.emit(name, ...args);
      }
    });
    return {
      menuRef,
      comId: menuId,
      subMenuDisplayModeInner,
      expandedSubMenus,
      expandedChildSubmenus,
      registedMenuItems,
      selectedKeysInner
    };
  }
});
</script>

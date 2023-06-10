<template>
  <li
    class="bs-submenu"
    :class="[{
      'bs-submenu-expanded': submenuVisible,
      'bs-submenu-display-with-dropdown': menuRootProps.subMenuDisplayMode == 'dropdown',
      'bs-submenu-first-level': keyIndexPath.length == 1,
      'bs-submenu-selected': hasMenuItemSelected,
      'bs-submenu-disabled': disabled,
    }, `bs-submenu-${menuRootProps.mode}`]"
    role="menu"
    :aria-expanded="submenuVisible"
    :aria-disabled="disabled"
    :aria-level="keyIndexPath.length">
    <div
      ref="bsSubmenuTitleRef"
      class="bs-submenu-title"
      :class="{
        'has-icon': icon || $slots.icon
      }"
      :style="{
        paddingLeft: paddingLeft.value ? (paddingLeft.value + paddingLeft.unit): ''
      }"
      @click="handleSubmenuTitleClick"
      @mouseenter="handleSubmenuTitleMouseenter">
      <span
        v-if="icon || $slots.icon"
        class="bs-menu-item-icon"
        role="img">
        <slot name="icon">
          <BsIcon :name="icon"></BsIcon>
        </slot>
      </span>
      <div class="bs-submenu-title-content">
        <slot name="title">{{ title }}</slot>
      </div>
      <span class="bs-submenu-arrow">
        <slot name="arrow">
          <BsIcon class="bs-submenu-arrow-icon" name="chevron-down"></BsIcon>
        </slot>
      </span>
    </div>
    <BsCollapseTransition
      v-if="menuRootProps.subMenuDisplayMode == 'collapse'">
      <ul
        v-show="submenuVisible"
        class="bs-submenu-content"
        :id="comId + '--content'"
        :data-submenu-path="submenuPath">
        <slot></slot>
      </ul>
    </BsCollapseTransition>
    <teleport
      to="body"
      :disabled="!submenuTeleported"
      v-else-if="menuRootProps.subMenuDisplayMode == 'dropdown'">
      <BsDropdownTransition
        :placement="dropdownTransitionPlacement"
        :reference-ref="bsSubmenuTitleRef"
        :try-all-placement="false"
        :set-width="menuRootProps.mode == 'horizontal'"
        :set-min-width="false">
        <ul
          v-show="submenuVisible"
          class="bs-submenu-content"
          :id="comId + '--content'"
          :data-submenu-path="submenuPath"
          :class="[{
            'bs-submenu-content-dropdown': menuRootProps.subMenuDisplayMode == 'dropdown'
          }, dropdownClassname]">
          <slot></slot>
        </ul>
      </BsDropdownTransition>
    </teleport>
  </li>
</template>

<script lang="ts">
import {
  Ref,
  defineComponent,
  getCurrentInstance,
  computed,
  ref,
  inject,
  provide,
  nextTick,
  toRef,
  onMounted,
  onBeforeUnmount,
  watch
} from 'vue';
import BsIcon from '../../bs-icon/BsIcon.vue';
import BsDropdownTransition from '../../bs-dropdown-transition/BsDropdownTransition.vue';
import BsCollapseTransition from '../../bs-collapse-transition/BsCollapseTransition.vue';
import { useMenuLevel } from '../hooks/useMenuLevel';
import { useGlobalEvent } from '@/hooks/useGlobalEvent';
import {
  bsMenuRootInjectKey,
  bsSubMenuInjectKey,
  bsSubMenuDisplayMode,
  MenuItemResgisted,
  ExpandedSubmenu
} from '../bs-menu-types';
import {
  isUndefined,
  parents,
  elementContains
} from '@/utils/bs-util';

let subMenuCount = 0;
let componentName = 'BsSubMenu';
export default defineComponent({
  name: componentName,
  components: {
    BsIcon,
    BsCollapseTransition,
    BsDropdownTransition
  },
  props: {
    keyIndex: { // 唯一标识，必填
      type: String,
      default: '',
      required: true
    },
    title: { // 标题
      type: String,
      default: ''
    },
    icon: { // 图标名称
      type: String,
      default: ''
    },
    disabled: { // 是否禁用
      type: Boolean,
      default: false
    },
    dropdownClassname: { // 下拉子菜单的样式
      type: String,
      default: ''
    }
  },
  setup (props: any, ctx: any) {
    let currentIns = getCurrentInstance()!;
    let currentSubMenuCount = ++subMenuCount;
    let subMenuId = `bs-submenu_${currentSubMenuCount}`;
    let bsSubmenuTitleRef = ref<HTMLElement | null>(null);
    // 根菜单上下文
    let menuRootCtx = inject(bsMenuRootInjectKey) as any;
    // 父级submenu上下文
    let parentSubmenuCtx = inject(bsSubMenuInjectKey) as any;
    // 展开的子菜单
    let expandedChildSubmenus: Record<string, ExpandedSubmenu> = {};

    // 获取当前组件的父级菜单组件，层级路径，层级ID
    let {
      currentKeyIndex,
      keyIndexPath,
      parentMenu,
      parentsIdPath,
      paddingLeft
    } = useMenuLevel(currentIns, props, subMenuId);

    // 根菜单的属性
    let menuRootProps = computed(function () {
      let subMenuDisplayModeInner = menuRootCtx?.subMenuDisplayModeInner.value || bsSubMenuDisplayMode.collapse;
      let rootProps = menuRootCtx?.props;
      let mode = rootProps?.mode;
      let triggerType = rootProps?.subMenuTrigger;
      let collapsed = rootProps?.collapse; // 根菜单是否收缩起来了
      if (!triggerType) {
        if (collapsed || mode == 'horizontal') {
          triggerType = 'hover';
        } else if (mode == 'vertical') {
          if (subMenuDisplayModeInner == 'collapse') {
            triggerType = 'click';
          } else {
            triggerType = 'hover';
          }
        } else {
          triggerType = 'click';
        }
      }
      return {
        subMenuDisplayMode: subMenuDisplayModeInner,
        triggerType,
        collapsed,
        mode: rootProps?.mode
      };
    });

    // 当前submenu的路径，当子菜单展现形式为下拉时用来匹配是否为当前submenu的内容
    let submenuPath = computed(function () {
      let parent = parentMenu.value;
      if (!parent || parent.type.name == 'BsMenu') {
        return currentSubMenuCount + '';
      }
      let parentSubmenuPath = (parent.proxy as any)?.submenuPath || '';
      return parentSubmenuPath + '__' + currentSubMenuCount;
    });

    // 下拉内容的弹出方向
    let dropdownTransitionPlacement = computed(function () {
      if (menuRootProps.value.mode == 'horizontal') {
        if (keyIndexPath.value.length <= 1) {
          return 'bottom';
        }
      }
      return 'right';
    });

    // 判断是否有子孙菜单项选中
    let hasMenuItemSelected = ref(false);
    watch([
      () => menuRootCtx?.registedMenuItems,
      () => {
        let selectedKeys = menuRootCtx?.selectedKeysInner?.value || [];
        return selectedKeys;
      }
    ], function (newValues) {
      // console.log('判断是否有子孙菜单选中', newValues);
      calcHasMenuItemSelected(newValues[0]);
    }, {
      // immediate: true,
      flush: 'post'
    });
    // 计算子孙菜单项选中
    function calcHasMenuItemSelected (registedMenuItems: Record<string, MenuItemResgisted>) {
      let selectedKeys = menuRootCtx?.selectedKeysInner?.value || [];
      if (selectedKeys.length == 0 || !registedMenuItems) {
        hasMenuItemSelected.value = false;
        return;
      }
      let flag = false;
      let selectedMnu;
      for (let attr in registedMenuItems) {
        let menuItem = registedMenuItems[attr];
        if (!selectedKeys.includes(menuItem.keyIndex)) {
          // console.log('菜单项未选中', menuItem.keyIndex);
          continue;
        }
        // console.log('------------菜单项被选中', menuItem.keyIndex);
        let parentsIdPath = menuItem.parentsIdPath || [];
        selectedMnu = menuItem;
        // console.log('parentsIdPath', parentsIdPath, subMenuId);
        let isInclude = parentsIdPath.map(item => {
          return item.id;
        }).includes(subMenuId);
        if (isInclude) {
          flag = true;
          break;
        }
      }
      console.log('hasMenuItemSelected', flag, selectedMnu?.keyIndex, subMenuId);
      hasMenuItemSelected.value = flag;
    }

    // 子菜单是否显示
    let submenuVisible = ref(false);
    let submenuRendered = ref(false);
    let submenuTeleported = ref(false);
    // 显示/隐藏子菜单
    let expandSubmenu = function (flag?: boolean) {
      if (props.disabled) {
        return;
      }
      if (isUndefined(flag)) {
        flag = !submenuVisible.value;
      } else {
        flag = !!flag;
      }
      if (flag === submenuVisible.value) {
        return;
      }

      let expandedMenuInfo = {
        keyIndex: currentKeyIndex,
        id: subMenuId,
        shrinkSubmenu () {
          expandSubmenu(false);
        }
      };
      menuRootCtx.expandedSubMenu(expandedMenuInfo, flag);
      let parentMenuName = parentMenu.value?.type.name;
      if (parentMenuName === 'BsMenu') {
        menuRootCtx.handChildSubmenuExpand(expandedMenuInfo, flag);
      }
      let triggerType = menuRootProps.value.triggerType;
      if (flag) {
        // console.log('menuRootProps.value.triggerType', menuRootProps.value.triggerType);
        if (triggerType === 'hover') {
          useGlobalEvent.addEvent('document', 'mousemove', handleMouseleave);
        } else if (triggerType === 'click') {
          console.log('给document绑定click事件', subMenuId);
          useGlobalEvent.addEvent('document', 'click', handleDocumentClick);
        }
        parentSubmenuCtx?.handleChildSubmenuExpand(expandedMenuInfo);
      } else {
        useGlobalEvent.removeEvent('document', 'mousemove', handleMouseleave);
        useGlobalEvent.removeEvent('document', 'click', handleDocumentClick);
        parentSubmenuCtx?.handleChildSubmenuShrink(subMenuId);
      }

      let emitParent = function (flag: boolean) {
        menuRootCtx?.emit('openChange', currentKeyIndex.value, flag, keyIndexPath.value);
      };
      if (flag && !submenuTeleported.value && menuRootProps.value.subMenuDisplayMode == 'dropdown') {
        submenuTeleported.value = true;
        nextTick(function () {
          submenuVisible.value = flag as boolean;
          emitParent(flag as boolean);
        });
      } else {
        submenuVisible.value = flag;
        emitParent(flag);
      }
    };
    let handleSubmenuTitleClick = function () {
      let menuRootPropsValue = menuRootProps.value;
      if (props.disabled || menuRootPropsValue.triggerType != 'click') {
        return;
      }
      expandSubmenu();
    };

    let mouseenterTimer = 0;
    let handleSubmenuTitleMouseenter = function () {
      let menuRootPropsValue = menuRootProps.value;
      if (props.disabled || submenuVisible.value || menuRootPropsValue.triggerType != 'hover') {
        return;
      }
      clearTimeout(mouseenterTimer);
      mouseenterTimer = setTimeout(function () {
        clearTimeout(mouseenterTimer);
        expandSubmenu(true);
      }, 150);
    };

    // 判断子菜单是否应该隐藏
    let isChildrenShouldHide = function (target: HTMLElement | undefined) {
      if (!target) {
        return true;
      }
      let bsSubmenuTitleEle = bsSubmenuTitleRef.value;
      let submenuPathVale = submenuPath.value;
      // console.log('handleMouseleave', target, elementContains(bsSubmenuTitleEle, target));
      // 如果鼠标是在当前submenu的标题上，则不处理任何事情
      if (target === bsSubmenuTitleEle || elementContains(bsSubmenuTitleEle as HTMLElement, target)) {
        return false;
      }
      // 获取子下拉菜单的根元素
      let childSubmenuDropdownRootEl = parents(target, 'bs-submenu-content');
      // console.log('childSubmenuDropdownRootEl', childSubmenuDropdownRootEl);
      if (childSubmenuDropdownRootEl) {
        let childSubmenuPath = childSubmenuDropdownRootEl.dataset.submenuPath || '';
        // 鼠标在子下拉菜单中
        if (childSubmenuPath.startsWith(submenuPathVale)) {
          return false;
        }
      }
      return true;
    };

    let mouseleavetimer = 0;
    let handleMouseleave = function (evt: MouseEvent) {
      let now = new Date().getTime();
      if (mouseleavetimer > 0 && (now - mouseleavetimer) < 150) {
        return;
      }
      if (props.disabled || !submenuVisible.value || menuRootProps.value.triggerType != 'hover') {
        return;
      }
      mouseleavetimer = now;
      let target = evt.target as HTMLElement;
      if (isChildrenShouldHide(target)) {
        expandSubmenu(false);
      }
    };

    let handleDocumentClick = function (evt: MouseEvent) {
      let menuRootPropsValue = menuRootProps.value;
      if (props.disabled || menuRootPropsValue.triggerType != 'click' || menuRootPropsValue.subMenuDisplayMode != 'dropdown') {
        return;
      }
      let target = evt.target as HTMLElement;
      console.log('isChildrenShouldHide(target)', isChildrenShouldHide(target), target);
      if (isChildrenShouldHide(target)) {
        expandSubmenu(false);
      }
    };

    menuRootCtx?.addSubMenu({
      keyIndex: currentKeyIndex,
      id: subMenuId,
      name: componentName,
      parentsIdPath: parentsIdPath,
      disabled: toRef(props, 'disabled') as Ref<boolean>,
      // parentMenuId: string;
      expandSubmenu
    });

    // 监听展开的子菜单的key
    watch(() => [...(menuRootCtx?.props.openedKeys || [])], function (openedKeys) {
      console.log('监听 openedKeys', openedKeys);
      // 只有折叠形式显示子菜单才允许自动展开子菜单
      if (menuRootProps.value.subMenuDisplayMode !== 'collapse') {
        return;
      }
      let currentKey = currentKeyIndex.value;
      if (openedKeys.includes(currentKey)) {
        nextTick(function () {
          expandSubmenu(true);
        });
      }
    }, {
      immediate: true,
      flush: 'post'
    });

    // 给子孙组件提供上下文
    provide(bsSubMenuInjectKey, {
      handleChildSubmenuExpand (submenu: ExpandedSubmenu) {
        // 如果开启了同层级只有一个子菜单展开，则收起其他菜单
        if (menuRootCtx?.props.uniqueOpened) {
          for (let attr in expandedChildSubmenus) {
            expandedChildSubmenus[attr].shrinkSubmenu();
          }
          expandedChildSubmenus = {};
        }
        expandedChildSubmenus[submenu.id] = submenu;
        // 子孙菜单展开后，当前菜单及父级菜单也同时展开
        expandSubmenu(true);
      },
      handleChildSubmenuShrink (submenuId: string) {
        delete expandedChildSubmenus[submenuId];
      },
      handleMenuItemClick (menuItem: any) {
        if (menuRootProps.value.subMenuDisplayMode !== 'dropdown') {
          return;
        }
        expandSubmenu(false);
        parentSubmenuCtx?.handleMenuItemClick(menuItem);
      }
    });

    onMounted(function () {
      calcHasMenuItemSelected(menuRootCtx?.registedMenuItems);
    });

    onBeforeUnmount(function () {
      useGlobalEvent.removeEvent('document', 'mousemove', handleMouseleave);
      useGlobalEvent.removeEvent('document', 'click', handleDocumentClick);

      let expandedSubmenuInfo = {
        id: subMenuId
      } as ExpandedSubmenu;
      menuRootCtx?.removeSubMenu(subMenuId);
      menuRootCtx?.expandedSubMenu(expandedSubmenuInfo, false);
      menuRootCtx?.handChildSubmenuExpand(expandedSubmenuInfo, false);
      parentSubmenuCtx?.handleChildSubmenuShrink(subMenuId);
    });
    return {
      comId: subMenuId,
      subMenuCount: currentSubMenuCount,
      currentKeyIndex,
      keyIndexPath,
      paddingLeft,
      menuRootProps,
      submenuVisible,
      submenuRendered,
      bsSubmenuTitleRef,
      submenuPath,
      dropdownTransitionPlacement,
      hasMenuItemSelected,
      submenuTeleported,
      expandedChildSubmenus,

      expandSubmenu,
      handleSubmenuTitleClick,
      handleSubmenuTitleMouseenter
    };
  }
});
</script>

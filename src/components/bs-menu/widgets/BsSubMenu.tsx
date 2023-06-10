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
  watch,
  Teleport
} from 'vue';
import { BsiChevronDown } from 'vue3-bootstrap-icon/es/icons/BsiChevronDown';
import BsDropdownTransition from '../../bs-dropdown-transition/BsDropdownTransition.vue';
import BsCollapseTransition from '../../bs-collapse-transition/BsCollapseTransition.vue';
import { useMenuLevel } from '../hooks/useMenuLevel';
import { useGlobalEvent } from '../../../hooks/useGlobalEvent';
import {
  bsSubmenuProps,
  bsMenuRootInjectKey,
  bsSubMenuInjectKey,
  bsSubMenuDisplayMode,
  MenuItemResgisted,
  ExpandedSubmenu
} from '../bs-menu-types';
import {
  isUndefined,
  elementContains,
  parents
} from '../../../utils/bs-util';

let subMenuCount = 0;
let componentName = 'BsSubMenu';

export default defineComponent({
  name: componentName,
  props: bsSubmenuProps,
  emits: ['expand'],
  setup (props: any, ctx: any) {
    let currentIns = getCurrentInstance()!;
    let currentSubMenuCount = ++subMenuCount;
    let subMenuId = `bs-submenu_${currentSubMenuCount}`;
    let bsSubmenuTitleRef = ref<HTMLElement | null>(null);
    // 根菜单上下文
    let menuRootCtx = inject(bsMenuRootInjectKey, null) as any;
    // 父级submenu上下文
    let parentSubmenuCtx = inject(bsSubMenuInjectKey, null) as any;
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

    // 待展开的子组件
    let needExpandSubmenus: {submenuId: string; expand: () => void}[] = [];

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
          continue;
        }
        let parentsIdPath = menuItem.parentsIdPath || [];
        selectedMnu = menuItem;
        let isInclude = parentsIdPath.map(item => {
          return item.id;
        }).includes(subMenuId);
        if (isInclude) {
          flag = true;
          break;
        }
      }
      hasMenuItemSelected.value = flag;
    }

    // 子菜单是否即将显示
    let submenuWillVisible = ref(false);
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
      menuRootCtx?.expandedSubMenu(expandedMenuInfo, flag);
      let parentMenuName = parentMenu.value?.type.name;
      if (parentMenuName === 'BsMenu') {
        menuRootCtx?.handChildSubmenuExpand(expandedMenuInfo, flag);
      }
      let triggerType = menuRootProps.value.triggerType;
      // 向外抛出openChange事件
      let emitParent = function (flag: boolean) {
        menuRootCtx?.emit('openChange', currentKeyIndex.value, flag, keyIndexPath.value);
      };
      if (flag) {
        if (triggerType === 'hover') {
          useGlobalEvent.addEvent('document', 'mousemove', handleMouseleave);
        } else if (triggerType === 'click') {
          useGlobalEvent.addEvent('document', 'click', handleDocumentClick);
        }
        parentSubmenuCtx?.handleChildSubmenuExpand(expandedMenuInfo);
      } else {
        useGlobalEvent.removeEvent('document', 'mousemove', handleMouseleave);
        useGlobalEvent.removeEvent('document', 'click', handleDocumentClick);
        parentSubmenuCtx?.handleChildSubmenuShrink(subMenuId);
      }

      if (flag && !submenuTeleported.value && menuRootProps.value.subMenuDisplayMode == 'dropdown') {
        submenuTeleported.value = true;
        /* submenuWillVisible.value = true;
        let timer = setTimeout(function () {
          clearTimeout(timer);
          submenuVisible.value = flag as boolean;
          emitParent(flag as boolean);
        }, 0); */
      }

      let newFlag = flag as boolean;
      if (newFlag) {
        submenuWillVisible.value = true;
        let timer = setTimeout(function () {
          clearTimeout(timer);
          submenuVisible.value = newFlag;
          emitParent(newFlag);
        }, 20);
      } else {
        submenuWillVisible.value = false;
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
    let handleSubmenuTitleMouseleave = function () {
      clearTimeout(mouseenterTimer);
    };

    // 判断子菜单是否应该隐藏
    let isChildrenShouldHide = function (target: HTMLElement | undefined) {
      if (!target) {
        return true;
      }
      let bsSubmenuTitleEle = bsSubmenuTitleRef.value as HTMLElement;
      let submenuPathVale = submenuPath.value;
      // 如果鼠标是在当前submenu的标题上，则不处理任何事情
      if (target === bsSubmenuTitleEle || elementContains(bsSubmenuTitleEle, target)) {
        return false;
      }
      // 获取子下拉菜单的根元素
      let childSubmenuDropdownRootEl = parents(target, 'bs-submenu-content');
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
      if (isChildrenShouldHide(target)) {
        expandSubmenu(false);
      }
    };

    // 处理展开事件
    let handleCollapseExpand = function () {
      let processedSubmenus: {[key: string]: number} = {};
      ctx.emit('expand', subMenuId);
      while (needExpandSubmenus.length > 0) {
        let submenuInfo = needExpandSubmenus.shift()!;
        if (processedSubmenus[submenuInfo.submenuId]) {
          continue;
        }
        submenuInfo.expand();
        processedSubmenus[submenuInfo.submenuId] = 1;
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
      // 只有折叠形式显示子菜单才允许自动展开子菜单
      if (menuRootProps.value.subMenuDisplayMode !== 'collapse') {
        return;
      }
      let currentKey = currentKeyIndex.value;
      if (openedKeys.includes(currentKey)) {
        nextTick(function () {
          // 如果是最顶层的submenu则直接展开，否则通知其父级submenu
          if (keyIndexPath.value.length == 1) {
            expandSubmenu(true);
          } else {
            // 通知父组件展开，如果父组件没有展开，组件自己就展开了会导致折叠效果失效（计算不了元素高度）
            parentSubmenuCtx?.notifyParentExpand(subMenuId, () => {
              expandSubmenu(true);
            });
          }
        });
      }
    }, {
      immediate: true,
      flush: 'post'
    });

    // 监听菜单是否收起
    watch(() => menuRootCtx?.props.collapse, function (collapsed) {
      // 若菜单被收起来了，则隐藏子菜单，否则鼠标移到子菜单标题的时候子菜单无法显示出来
      if (collapsed) {
        submenuWillVisible.value = false;
        submenuVisible.value = false;
      }
    });

    let handleCollapseExpandTimer: number;
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
      },
      notifyParentExpand (submenuId: string, expand: () => void) {
        needExpandSubmenus.push({
          submenuId,
          expand
        });
        // 如果组件已经是最顶层的，则展开自己。否则再通知自己的父组件
        if (keyIndexPath.value.length == 1) {
          if (submenuVisible.value) { // 如果菜单已经展开了，直接调用子组件的展开函数
            clearTimeout(handleCollapseExpandTimer);
            handleCollapseExpandTimer = setTimeout(() => {
              clearTimeout(handleCollapseExpandTimer);
              handleCollapseExpand();
            }, 0);
          } else {
            expandSubmenu(true);
          }
        } else {
          // 处理子组件的展开请求通知，自己也需要通知父组件
          parentSubmenuCtx?.notifyParentExpand(subMenuId, () => {
            expandSubmenu(true);
          });
        }
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
      submenuWillVisible,
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
      handleSubmenuTitleMouseenter,
      handleSubmenuTitleMouseleave,
      handleCollapseExpand
    };
  },
  render () {
    let slots = this.$slots;
    // 折叠展开子菜单
    let createCollapseTransition = () => {
      // @ts-ignore
      return <BsCollapseTransition onAfterEnter={ this.handleCollapseExpand }>
        <ul
          v-show={this.submenuVisible}
          class="bs-submenu-content"
          id={this.comId + '--content'}
          data-submenu-path={this.submenuPath}>
          { slots.default && slots.default() }
        </ul>
      </BsCollapseTransition>;
    };
    // 下拉展开子菜单
    let createDropdownTransition = () => {
      return <Teleport to="body" disabled={!this.submenuTeleported}>
        <BsDropdownTransition
          placement={this.dropdownTransitionPlacement}
          reference-ref={this.bsSubmenuTitleRef}
          try-all-placement={false}
          set-width={this.menuRootProps.mode == 'horizontal'}
          set-min-width={false}
          will-visible={this.submenuWillVisible}
          // @ts-ignore
          onAfterEnter={ () => { this.$emit('expand', this.comId); } }>
          <ul
            v-show={this.submenuVisible}
            id={this.comId + '--content'}
            data-submenu-path={this.submenuPath}
            class={['bs-submenu-content', 'bs-submenu-content-dropdown', /* {
              'bs-submenu-content-dropdown': this.menuRootProps.subMenuDisplayMode == 'dropdown'
            }, */ this.dropdownClass]}>
            { slots.default && slots.default() }
          </ul>
        </BsDropdownTransition>
      </Teleport>;
    };
    let renderContentFnMap = {
      'collapse': createCollapseTransition,
      'dropdown': createDropdownTransition
    };
    let subMenuDisplayMode = this.menuRootProps.subMenuDisplayMode;

    return <li
      class={['bs-submenu', {
        'bs-submenu-expanded': this.submenuVisible,
        'bs-submenu-display-with-dropdown': subMenuDisplayMode == 'dropdown',
        'bs-submenu-first-level': this.keyIndexPath.length == 1,
        'bs-submenu-selected': this.hasMenuItemSelected,
        'bs-submenu-disabled': this.disabled
      }, `bs-submenu-${this.menuRootProps.mode}`]}
      role="menu"
      aria-expanded={this.submenuVisible}
      aria-disabled={this.disabled}
      aria-level={this.keyIndexPath.length}>
      <div
        ref="bsSubmenuTitleRef"
        class={['bs-submenu-title', {
          'has-icon': slots.icon
        }]}
        style={{
          paddingLeft: this.paddingLeft.value ? (this.paddingLeft.value + this.paddingLeft.unit) : ''
        }}
        onClick={this.handleSubmenuTitleClick}
        onMouseenter={this.handleSubmenuTitleMouseenter}
        onMouseleave={this.handleSubmenuTitleMouseleave}>
        {/* 图标 */}
        { slots.icon ? <span
          class="bs-menu-item-icon"
          role="img">
          {slots.icon ? slots.icon() : null}
        </span> : null
        }
        {/* 标题 */}
        <div class="bs-submenu-title-content">
          {slots.title ? slots.title() : this.title}
        </div>
        {/* 三角箭头 */}
        <span class="bs-submenu-arrow">
          {/* @ts-ignore */}
          {slots.arrow ? slots.arrow() : <BsiChevronDown class="bs-submenu-arrow-icon"></BsiChevronDown>}
        </span>
      </div>
      {/* @ts-ignore */}
      { renderContentFnMap[subMenuDisplayMode]?.() }
    </li>;
  }
});

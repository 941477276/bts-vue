import {
  defineComponent,
  getCurrentInstance,
  computed,
  inject,
  ref,
  toRef,
  Ref,
  onBeforeUnmount
} from 'vue';
import BsTooltip from '../../bs-tooltip/BsTooltip.vue';
import { useMenuLevel } from '../hooks/useMenuLevel';
import { bsMenuItemProps, bsMenuRootInjectKey, bsSubMenuInjectKey } from '../bs-menu-types';

let menuItemCount = 0;
let componentName = 'BsMenuItem';

export default defineComponent({
  name: componentName,
  components: {
    BsTooltip
  },
  props: bsMenuItemProps,
  emits: ['click'],
  setup (props: any, ctx: any) {
    let currentIns = getCurrentInstance()!;
    let menuItemId = `bs-menu-item_${++menuItemCount}`;
    // 根菜单提供的上下文
    let menuRootCtx = inject(bsMenuRootInjectKey, null) as any;
    // 父级<bs-submenu>提供的上下文
    let submenuCtx = inject(bsSubMenuInjectKey, null) as any;

    let isCollapsed = computed(function () {
      return menuRootCtx?.props.collapse;
    });

    // 获取当前组件的父级菜单组件，层级路径，层级ID
    let {
      currentKeyIndex,
      keyIndexPath,
      parentMenu,
      parentsIdPath,
      paddingLeft
    } = useMenuLevel(currentIns, props, menuItemId);

    // 判断组件的父级组件是否为<bs-menu>组件
    let parentIsMenuRoot = computed(function () {
      let parent = parentMenu.value;
      if (!parent) {
        return false;
      }
      return parent.type.name == 'BsMenu';
    });

    // 判断菜单是否选中
    let isSelected = computed(function () {
      let selectedKeys = menuRootCtx?.selectedKeysInner?.value;
      if (!selectedKeys) {
        return false;
      }
      let keyIndex = currentKeyIndex.value;
      return selectedKeys.includes(keyIndex);
    });

    let tooltipContent = ref('');
    let handleMouseenter = function (evt: MouseEvent) {
      let target = evt.target as HTMLElement;
      let titleEl = target.querySelector('.bs-menu-item-title');
      tooltipContent.value = (titleEl as any)?.innerText || titleEl?.textContent;
    };

    // 点击事件
    let handleClick = function (evt: MouseEvent) {
      if (props.disabled) {
        return;
      }
      let emitParams = {
        keyIndex: currentKeyIndex.value,
        keyPath: keyIndexPath.value
      };
      menuRootCtx?.emit('itemClick', emitParams, evt);
      menuRootCtx?.handleMenuItemSelect(currentKeyIndex.value, keyIndexPath.value, !isSelected.value);
      submenuCtx?.handleMenuItemClick(emitParams);
      ctx.emit('click', emitParams, evt);
    };

    menuRootCtx?.addMenuItem({
      keyIndex: currentKeyIndex,
      id: menuItemId,
      name: componentName,
      parentsIdPath: parentsIdPath,
      disabled: toRef(props, 'disabled') as Ref<boolean>
    });

    onBeforeUnmount(function () {
      menuRootCtx?.removeMenuItem(menuItemId);
    });

    return {
      comId: menuItemId,
      currentKeyIndex,
      keyIndexPath,
      paddingLeft,
      isCollapsed,
      parentIsMenuRoot,
      tooltipContent,
      parentsIdPath,
      isSelected,

      handleMouseenter,
      handleClick
    };
  },
  render () {
    let $slots = this.$slots;
    let content = (<li
      class={['bs-menu-item', {
        'has-icon': !!$slots.icon,
        'is-disabled': this.disabled,
        'is-selected': this.isSelected
      }]}
      style={{
        paddingLeft: this.paddingLeft.value ? (this.paddingLeft.value + this.paddingLeft.unit) : ''
      }}
      role="menuitem"
      aria-level={this.keyIndexPath.length}
      aria-disabled={this.disabled}
      onClick={ this.handleClick }
      onMouseenter={ this.handleMouseenter }>
      {$slots.icon ? <span
        class="bs-menu-item-icon"
        role="img">
        { $slots.icon ? $slots.icon() : null }
      </span> : null
      }
      <span class="bs-menu-item-title">
        { $slots.default ? $slots.default() : this.title }
      </span>
      { $slots.content ? $slots.content() : null }
    </li>);

    let createTooltipContent = () => (<BsTooltip
      disabled={!this.isCollapsed}
      content={this.tooltipContent}
      placement="right"
      transition-name="scale">
      { content }
    </BsTooltip>);

    return (this.parentIsMenuRoot && this.isCollapsed) ? createTooltipContent() : content;
  }
});

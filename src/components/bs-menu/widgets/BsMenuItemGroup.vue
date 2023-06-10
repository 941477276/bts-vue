<template>
  <li
    class="bs-menu-item-group"
    :aria-level="keyIndexPath.length">
    <div
      ref="groupTitleRef"
      class="bs-menu-item-group-title"
      :style="{
        paddingLeft: paddingLeft.value ? (paddingLeft.value + paddingLeft.unit): ''
      }">
      <slot name="title">{{ title }}</slot>
    </div>
    <ul class="bs-menu-item-group-content">
      <slot></slot>
    </ul>
  </li>
</template>

<script lang="ts">
import {
  defineComponent,
  getCurrentInstance,
  ref
} from 'vue';
import { useMenuLevel } from '../../../components/bs-menu/hooks/useMenuLevel';
import { bsMenuItemGroupProps } from '../bs-menu-types';

let bsMenuItemGroupCount = 0;
export default defineComponent({
  name: 'BsMenuItemGroup',
  props: bsMenuItemGroupProps,
  setup (props: any, ctx: any) {
    let currentIns = getCurrentInstance()!;
    let menuItemGroupId = `bs-menu-item-group_${++bsMenuItemGroupCount}`;

    // 获取当前组件的父级菜单组件，层级路径，层级ID
    let {
      currentKeyIndex,
      keyIndexPath,
      parentMenu,
      paddingLeft
    } = useMenuLevel(currentIns, props, menuItemGroupId);
    return {
      comId: menuItemGroupId,
      currentKeyIndex,
      keyIndexPath,
      paddingLeft
    };
  }
});
</script>

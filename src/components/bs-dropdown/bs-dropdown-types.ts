import { PropType, ExtractPropTypes } from 'vue';
import { BsPlacement, BsPlacementEnd, BsPlacementEndKebab } from '../types';

export type BsDropdownTrigger = 'click' | 'hover' | 'contextMenu';

export const bsDropdownProps = {
  teleported: { // 是否使用 teleport。设置成 true则会被追加到 append-to 的位置
    type: Boolean,
    default: true
  },
  appendTo: { // 下拉菜单即将插入到的父级元素
    type: String,
    default: 'body'
  },
  placement: { // 显示方向
    type: String as PropType<BsPlacement | BsPlacementEnd | BsPlacementEndKebab>,
    default: 'bottom'
  },
  tryReverseDirection: { // 当在props.direction方向不能完全显示时，是否尝试反方向显示
    type: Boolean,
    default: true
  },
  tryAllDirection: { // 当在props.direction方向不能完全显示时，是否尝试所有方向显示
    type: Boolean,
    default: false
  },
  trigger: { // 触发下拉菜单显示的事件
    type: String as PropType<BsDropdownTrigger>,
    default: 'hover'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  lazy: { // 是否延迟渲染
    type: Boolean,
    default: true
  },
  showToggleArrow: { // 是否显示触发下拉菜单元素向下三角
    type: Boolean,
    default: true
  },
  destroyOnHide: { // 隐藏时是否销毁 dropdown-menu
    type: Boolean,
    default: false
  },
  dropdownClass: { // .dropdown-menu的额外class
    type: [String, Object, Array],
    default: ''
  }
};

export type BsDropdownProps = ExtractPropTypes<typeof bsDropdownProps>;

import { PropType, Ref, Component, ExtractPropTypes } from 'vue';

export interface DropdownOffset {
  top?: number;
  left?: number;
  // bottom?: number;
  // right?: number;
}

export const bsDropdownTransitionProps = {
  referenceRef: { // 参照元素ref
    type: Object as PropType<Ref<Element|Component>>,
    default () {
      return {};
    }
  },
  placement: { // 下拉菜单展示方位
    type: String,
    default: 'bottom'
  },
  willVisible: { // 下拉菜单是否即将显示/隐藏
    type: Boolean,
    default: false
  },
  useZoomTransition: { // 是否使用zoom过渡效果
    type: Boolean,
    default: false
  },
  tryAllPlacement: { // 默认是否尝试所有方位
    type: Boolean,
    default: true
  },
  tryEndPlacement: { // 是否尝试end方位
    type: Boolean,
    default: true
  },
  position: { // 定位方式
    type: String,
    default: 'absolute'
  },
  setWidth: { // 是否设置下拉菜单的宽度等于参照元素的宽度
    type: Boolean,
    default: false
  },
  setMinWidth: { // 是否设置下拉菜单的最小宽度等于参照元素的宽度
    type: Boolean,
    default: false
  },
  customTransitionName: { // 自定义transition name
    type: Function,
    default: null
  },
  customStyle: { // 自定义下拉菜单style
    type: Function,
    default: null
  },
  offset: { // 下拉菜单距参照元素的偏移量
    type: Object as PropType<DropdownOffset>,
    default: null
  }
};

export type BsDropdownTransitionProps = ExtractPropTypes<typeof bsDropdownTransitionProps>;

export interface BsDropdownPositionInfo {
  direction: string;
  width: number;
  left: number;
  top: number;
  bottom: null|number;
  right: null|number;
  horizontalFullInview: boolean;
  verticalFullInview: boolean;
}

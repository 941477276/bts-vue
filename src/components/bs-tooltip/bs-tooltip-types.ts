import { ExtractPropTypes } from 'vue';
import { bsPopperContentProps } from '../bs-popper/bs-popper-content-props';
import { bsTooltipContentProps } from './bs-tooltip-content-props';
import { bsTooltipTriggerProps } from './bs-tooltip-trigger-props';

export const bsTooltipCommonProps = {
  showArrow: { // 是否显示三角箭头
    type: Boolean,
    default: true
  },
  arrowClass: { // 三角箭头的class
    type: String,
    default: ''
  },
  virtualTriggering: { // 是否由虚拟元素触发
    type: Boolean,
    default: false
  },
  virtualRef: { // 触发元素的ref
    type: [String, Function, Object],
    default: null
  },
  showDelay: { // 延迟出现，单位毫秒
    type: Number,
    default: 100
  },
  hideDelay: { // 延迟关闭，单位毫秒
    type: Number,
    default: 200
  }
};

export const bsTooltipProps = {
  ...bsPopperContentProps,
  ...bsTooltipContentProps,
  ...bsTooltipTriggerProps,
  ...bsTooltipCommonProps,
  pure: { // 是否为纯净的tooltip，如果是纯净的则会添加 bs-tooltip class类名
    type: Boolean,
    default: true
  },
  themeClass: { // 自定义主题class
    type: String,
    default: ''
  },
  showCondition: { // 显示时的条件
    type: Function,
    default: null
  },
  hideCondition: { // 隐藏时的条件
    type: Function,
    default: null
  }
};

export type BsTooltipProps = ExtractPropTypes<typeof bsTooltipProps>;

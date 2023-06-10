import { PropType, ExtractPropTypes } from 'vue';
import { BsColorType } from '../types';
import { bsPopperContentProps } from '../bs-popper/bs-popper-content-props';
import { bsTooltipContentProps } from '../bs-tooltip/bs-tooltip-content-props';
import { bsTooltipTriggerProps } from '../bs-tooltip/bs-tooltip-trigger-props';
import { bsTooltipCommonProps } from '../bs-tooltip/bs-tooltip-types';

export const bsPopConfirmProps = {
  showCancel: { // 是否显示取消按钮
    type: Boolean,
    default: true
  },
  cancelText: {
    type: String,
    default: '取消'
  },
  cancelType: {
    type: String as PropType<BsColorType>,
    default: ''
  },
  okText: {
    type: String,
    default: '确定'
  },
  okType: {
    type: String as PropType<BsColorType>,
    default: 'primary'
  },
  showIcon: { // 是否由虚拟元素触发
    type: Boolean,
    default: true
  },
  hideDisabled: { // 是否禁用隐藏
    type: Boolean,
    default: false
  },
  hideOnConfirmed: { // 确认完成后是否自动隐藏
    type: Boolean,
    default: true
  },
  okButtonProps: {
    type: Object,
    default () {
      return {};
    }
  },
  cancelButtonProps: {
    type: Object,
    default () {
      return {};
    }
  },
  ...bsPopperContentProps,
  ...bsTooltipContentProps,
  ...bsTooltipTriggerProps,
  ...bsTooltipCommonProps
};

export type BsPopConfirmProps = ExtractPropTypes<typeof bsPopConfirmProps>;

import { PropType, ExtractPropTypes } from 'vue';
import { bsPopperContentProps } from '../bs-popper/bs-popper-content-props';
import { bsTooltipContentProps } from '../bs-tooltip/bs-tooltip-content-props';
import { bsTooltipTriggerProps } from '../bs-tooltip/bs-tooltip-trigger-props';
import { bsTooltipCommonProps } from '../bs-tooltip/bs-tooltip-types';

export const bsPopoverProps = {
  hideDisabled: { // 是否禁用隐藏
    type: Boolean,
    default: false
  },
  ...bsPopperContentProps,
  ...bsTooltipContentProps,
  ...bsTooltipTriggerProps,
  ...bsTooltipCommonProps
};

export type BsPopoverProps = ExtractPropTypes<typeof bsPopoverProps>;

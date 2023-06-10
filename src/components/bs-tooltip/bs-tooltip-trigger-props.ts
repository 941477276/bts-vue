import { PropType } from 'vue';
import { PopperTriggerType } from '../bs-popper/bs-popper-types';

export const bsTooltipTriggerProps = {
  disabled: {
    type: Boolean,
    default: false
  },
  enterable: { // 鼠标是否可以进入popper
    type: Boolean,
    default: true
  },
  trigger: {
    type: String as PropType<PopperTriggerType>,
    default: 'hover'
  }
};

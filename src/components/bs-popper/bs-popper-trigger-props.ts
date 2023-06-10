import { NOOP } from '@vue/shared';

export const bsPopperTriggerProps = {
  virtualTriggering: { // 是否由虚拟元素触发
    type: Boolean,
    default: false
  },
  virtualRef: { // 触发元素的ref
    type: [String, Function, Object],
    default: null
  },
  onMouseenter: {
    type: Function,
    default: NOOP
  },
  onMouseleave: {
    type: Function,
    default: NOOP
  },
  onClick: {
    type: Function,
    default: NOOP
  },
  onKeydown: {
    type: Function,
    default: NOOP
  },
  onFocus: {
    type: Function,
    default: NOOP
  },
  onBlur: {
    type: Function,
    default: NOOP
  },
  onContextmenu: {
    type: Function,
    default: NOOP
  }
};

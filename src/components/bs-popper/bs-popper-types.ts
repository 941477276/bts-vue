import {
  InjectionKey,
  Ref,
  ComputedRef
} from 'vue';
import { Instance as PopperInstance } from '@popperjs/core';

export type BsPopperContext = {
  triggerRef: Ref<HTMLElement|null>;
  popperContentRef: Ref<HTMLElement|null>;
  popperArrowRef: Ref<HTMLElement|null>;
  popperInstanceRef: Ref<PopperInstance|undefined>;
};

// 触发popper的事件类型
export type PopperTriggerType = 'click' | 'hover' | 'focus' | 'contextmenu';

// tooltip主题
export type TooltipTheme = 'dark' | 'light' | 'custom';

export type BsTooltipContext = {
  show: () => void;
  hide: () => void;
  onBeforeShow:() => void;
  onShow: () => void;
  onBeforeHide: () => void;
  onHide: () => void;
  onContentMouseenter: (evt: MouseEvent) => any;
  onContentMouseleave: (evt: MouseEvent) => any;
  isShow: Ref<boolean>;
  trigger: Ref<string>;
  isControlled: ComputedRef<boolean>;
};

export const bsPopperContextKey: InjectionKey<BsPopperContext> = Symbol('bsPopperContextKey');

export const bsTooltipContextKey: InjectionKey<BsTooltipContext> = Symbol('bsTooltipContextKey');

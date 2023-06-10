import { Options as PopperOptions } from '@popperjs/core';
import {
  eleIsInFixedParents
} from '../../utils/bs-util';

export function buildPopperOptions (props: any, triggerEl: HTMLElement): PopperOptions {
  let popperOptions = props.popperOptions || {};
  let triggerInFixedContainer = eleIsInFixedParents(triggerEl);
  // let offset = props.offset || [];
  let options = {
    placement: props.placement,
    // 定位策略，默认为absolute。如果触发popper的参考元素在fixed定位的元素中，则应该使用fixed
    strategy: props.strategy || (triggerInFixedContainer ? 'fixed' : 'absolute'),
    ...popperOptions
  };

  let modifiers = [
    ...buildModifiers(props),
    ...(popperOptions.modifiers || [])
  ];
  options.modifiers = modifiers;

  return options;
};

// 构建默认的修饰参数
export function buildModifiers (props: any) {
  let offset = props.offset || [];
  let gpuAcceleration = props.gpuAcceleration ?? true;
  return [
    { // 偏移量
      name: 'offset',
      options: {
        offset: [offset[0] || 0, offset[1] || 8]
      }
    },
    {
      name: 'computeStyles',
      options: {
        // 默认值为true，改为false后，定位将会使用top、left，而不是translate，如果过度效果需要使用translate，那么需将该项改为false
        gpuAcceleration: gpuAcceleration,
        // 如果gpuAcceleration为false，而adaptive为true，并且元素应用了transition属性时会报警告
        adaptive: gpuAcceleration
      }
    },
    { // 箭头
      name: 'arrow',
      options: {
        // element: arrowEl,
        padding: props.arrowOffset ?? 5
      }
    }
  ];
};

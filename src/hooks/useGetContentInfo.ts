import { isVNode, VNode, isRef } from 'vue';

/**
 * 根据参数获取文本或slot内容
 * @param option
 */
export function useGetContentInfo (option: string|VNode|unknown) {
  let text;
  let slotContent: { [key:string]: any } | null = null;
  let optionsType = typeof option;
  if (optionsType === 'string' || optionsType === 'number' || optionsType === 'undefined' || optionsType === null || isRef(option)) {
    text = option;
  } else if (isVNode(option)) {
    slotContent = {
      default: () => option
    };
  } else if (optionsType === 'function') {
    slotContent = { default: option };
  }
  return {
    text,
    slotContent
  };
};

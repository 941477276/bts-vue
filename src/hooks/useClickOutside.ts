import { ref, onMounted, onBeforeUnmount, Ref, ComponentPublicInstance } from 'vue';
import { useGlobalEvent } from './useGlobalEvent';
import {
  elementContains,
  isObject
} from '../utils/bs-util';

export function useClickOutside (eleRefs: Ref<HTMLElement|ComponentPublicInstance|null>|Ref<HTMLElement|ComponentPublicInstance|null>[], callback?: (isClickOutside: boolean) => void):Ref {
  let flag = ref(false);
  let documentClickEvt = function (evt: MouseEvent) {
    let target = evt.target as HTMLElement;
    if (Array.isArray(eleRefs)) {
      flag.value = !eleRefs.some(function (refItem) {
        let refValue = refItem.value as ComponentPublicInstance;
        let el = refItem.value;
        if (isObject(refValue) && refValue.$el) {
          el = refValue.$el;
        }
        // 点击的元素与参照元素一样，则不算点击在了外面
        if (el === target) {
          return true;
        }
        return elementContains(el as HTMLElement, target);
      });
    } else {
      let refValue = eleRefs.value as ComponentPublicInstance;
      let el = eleRefs.value;
      if (isObject(refValue) && refValue.$el) {
        el = refValue.$el;
      }
      if (el === target) { // 点击的元素与参照元素一样，则不算点击在了外面
        flag.value = false;
      } else {
        flag.value = !elementContains(el as HTMLElement, target);
      }
    }
    if (typeof callback == 'function') {
      callback(flag.value);
    }
  };
  onMounted(() => {
    // document.documentElement.addEventListener('click', documentClickEvt, false);
    useGlobalEvent.addEvent('document', 'click', documentClickEvt);
  });
  onBeforeUnmount(() => {
    // document.documentElement.removeEventListener('click', documentClickEvt, false);
    useGlobalEvent.removeEvent('document', 'click', documentClickEvt);
  });
  return flag;
}

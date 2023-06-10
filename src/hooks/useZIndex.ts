import {
  ref,
  computed
} from 'vue';

let zIndex = ref(0);
export function useZIndex () {
  let initiallyZIndex = 2000; // 初始z-index，这个值应该可以在程序初始化时传递进来
  let currentZIndex = computed(function () {
    return initiallyZIndex + zIndex.value;
  });
  let nextZIndex = function () {
    zIndex.value++;
    return currentZIndex.value;
  };
  return {
    currentZIndex,
    nextZIndex
  };
};

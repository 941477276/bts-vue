import {
  nextTick,
  ref,
  Ref
} from 'vue';
export function useDropdown (props: any, bsCascaderInputRef: Ref<any>, bsCascaderRef: Ref<HTMLElement|null>, cascaderMenusRef: Ref<HTMLElement|null>) {
  let isFocus = ref(false);
  let dropdownDisplayed = ref(false); // 下拉菜单是否已经渲染
  let dropdownWillVisible = ref(false); // 下拉菜单是否即将显示
  let dropdownVisible = ref(false); // 下拉菜单是否显示
  // let cascaderWidth = ref(0);
  /**
   * 显示下拉菜单
   */
  let dropdownShow = function () {
    if (props.disabled) {
      return;
    }
    let doShow = function () {
      dropdownVisible.value = true;
      if (!props.loading) {
        isFocus.value = true;
        (bsCascaderInputRef.value as any)?.focus();
      }
    };
    // cascaderWidth.value = bsCascaderRef.value?.offsetWidth || 0;
    cascaderMenusRef.value?.style.setProperty('--cascader-refernce-width', (bsCascaderRef.value?.offsetWidth || 0) + 'px');
    if (!dropdownDisplayed.value) {
      dropdownDisplayed.value = true;
      nextTick(function () {
        dropdownWillVisible.value = true;
        let timer = setTimeout(function () {
          clearTimeout(timer);
          doShow();
        }, 20);
      });
      return;
    }
    let timer = setTimeout(function () {
      clearTimeout(timer);
      doShow();
    }, 0);
  };
  /**
   * 隐藏下拉菜单
   */
  let dropdownHide = function () {
    // 延迟一会隐藏下拉菜单是因为为了等待背景色改变后再隐藏
    let timer = setTimeout(function () {
      clearTimeout(timer);
      dropdownWillVisible.value = false;
      dropdownVisible.value = false;
      isFocus.value = false;
      (bsCascaderInputRef.value as any)?.blur();
      (bsCascaderInputRef.value as any)?.clearSearchText();
    }, 120);
  };

  return {
    isFocus,
    dropdownDisplayed,
    dropdownWillVisible,
    dropdownVisible,
    // cascaderWidth,

    dropdownShow,
    dropdownHide
  };
};

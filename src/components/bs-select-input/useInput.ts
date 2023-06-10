import { computed, ref, Ref } from 'vue';

export function useInput (props: any, ctx: any, bsInputRef: Ref<any>) {
  let bsInputReadonly = computed(function () {
    if (props.filterable) {
      return false;
    }
    return true;
  });
  let bsInputFocus = ref(false);
  // 输入框显示的内容
  let bsInputValue = computed(function () {
    if (props.multiple) {
      return '';
    }
    let values = props.values;
    if (Array.isArray(values)) {
      return values[0]?.label;
    }
    return values?.label;
  });
  let bsInputPlaceholder = computed(function () {
    if (!props.multiple) {
      if (props.loading) {
        return props.loadingText;
      }
      let text = bsInputValue.value;
      if (text !== null && typeof text !== 'undefined') {
        text = text + '';
      }
      if (bsInputFocus.value && text) {
        return bsInputValue.value;
      }
      return props.placeholder;
    }
    if (props.values.length > 0) {
      return ' ';
    } else if (props.loading) {
      if (props.loading) {
        return props.loadingText;
      }
    }
    return props.placeholder;
  });
  let bsInputModelValue = computed({
    get () {
      // 如果是单选且输入框聚焦了，则将输入框的内容清空
      if (bsInputFocus.value || props.multiple) {
        return '';
      }
      return bsInputValue.value;
    },
    set (newValue) {
      ctx.emit('filter-text-change', newValue);
    }
  });
  let onBsInputFocus = function () {
    if (props.filterable) {
      bsInputFocus.value = true;
    }
  };
  let onBsInputBlur = function () {
    if (props.filterable) {
      bsInputFocus.value = false;
      // 解决用户点击不了下拉选项问题，因为搜索文本清空后被隐藏的下拉菜单会立即显示出来
      let timer = setTimeout(function () {
        clearTimeout(timer);
        if (!bsInputValue.value) {
          bsInputRef.value?.clear();
        }
      }, 320);
    }
  };

  return {
    bsInputReadonly,
    bsInputModelValue,
    bsInputValue,
    bsInputFocus,
    bsInputPlaceholder,

    onBsInputFocus,
    onBsInputBlur
  };
};

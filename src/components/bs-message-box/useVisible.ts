import {
  ref
} from 'vue';
import {
  isPromise,
  isFunction
} from '../../utils/bs-util';

/**
 * 处理message box显示或隐藏
 */

export function useVisible (props: any) {
  let visible = ref(false);

  let show = function () {
    visible.value = true;
  };
  let hide = function () {
    let okCloseResult = isFunction(props.onCancel) ? props.onCancel() : true;
    if (okCloseResult === false) {
      return;
    }
    if (isPromise(okCloseResult)) {
      okCloseResult.then(() => {
        visible.value = false;
      });
    } else {
      visible.value = false;
    }
  };
  return {
    visible,

    show,
    hide
  };
};

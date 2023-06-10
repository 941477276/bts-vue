import { computed, Ref, ref, watch, onMounted } from 'vue';
import {
  isNoneValue
} from '../../utils/bs-util';

/**
 * 当为密码输入框时切换密文/密码原文
 * @param props
 */
function usePasswordIsShow (props: any) {
  let passwordIsShow = ref(false); // 密码是否显示了
  // 切换输入框类型为密码或文本
  let togglePasswordText = () => {
    if (props.showPassword) {
      passwordIsShow.value = !passwordIsShow.value;
    }
  };
  return {
    passwordIsShow,
    togglePasswordText
  };
}

export function useInput (props: any, inputRef: Ref<HTMLInputElement | null>) {
  let { passwordIsShow, togglePasswordText } = usePasswordIsShow(props);
  // 计算输入框的class
  let inputClass = computed<string>(() => {
    let sizeClass = props.size ? `input-group-${props.size}` : '';
    return sizeClass;
  });
  // 处理input的type
  let inputType = computed(() => {
    if (props.showPassword && passwordIsShow.value) {
      return 'text';
    }
    return props.type;
  });

  // 原生input的值
  let inputValue = ref<string|number>('');

  // 设置原生input的value
  let setInputValue = function (val: string) {
    let inputEl = inputRef.value;
    if (!inputEl || inputEl.value === val) {
      return;
    }
    inputEl.value = val;
  };

  watch(() => props.modelValue, newModelVal => {
    /* if (inputValue.value != newModelVal) {
      inputValue.value = newModelVal;
    } */
    if (newModelVal === inputValue.value) {
      return;
    }
    let newValue = isNoneValue(newModelVal) ? '' : (newModelVal + '');
    /* let maxlength = props.maxlength;
    if (maxlength > 0 && newValue.length > maxlength) {
      newValue = newValue.substr(0, maxlength);
    } */
    inputValue.value = newValue;
    setInputValue(newValue);
  });

  onMounted(function () {
    let modelValue = props.modelValue;
    let newVal = isNoneValue(modelValue) ? '' : modelValue;
    inputValue.value = newVal;
    setInputValue(newVal);
  });

  return {
    inputClass,
    inputType,
    inputValue,
    passwordIsShow,

    togglePasswordText,
    setInputValue
  };
}

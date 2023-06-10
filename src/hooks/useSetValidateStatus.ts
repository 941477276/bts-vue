import { ref, Ref } from 'vue';
// 校验状态类型
type ValidateStatus = 'validating' | 'success' | 'error' | '';

/**
 * 设置表单校验状态
 * @param status
 */
export function useSetValidateStatus (status?: ValidateStatus) {
  let validateStatus = ref<ValidateStatus>(status || '');
  let setValidateStatus = function (status: ValidateStatus) {
    validateStatus.value = status;
  };
  let getValidateStatus = function () {
    return validateStatus.value;
  };
  return {
    validateStatus,
    setValidateStatus,
    getValidateStatus
  };
}

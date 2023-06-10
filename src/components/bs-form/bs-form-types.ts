import { PropType, ExtractPropTypes, InjectionKey } from 'vue';
import { BsSize, BsTextAlign, BsValidateStatus } from '../types';
import { RuleItem, ValidateFieldsError } from 'async-validator';

export type BsRuleTrigger = 'input' | 'change' | 'blur' | 'focus';

// 表单校验规则
export interface BsRuleItem extends RuleItem {
  trigger?: BsRuleTrigger|BsRuleTrigger[]
};

export type FormItemValidateCallback = (errorMsg: string, invalidFields?: ValidateFieldsError) => void;

export type SetValidateStatusContext = {
  setValidateStatus: (status: BsValidateStatus) => void;
  [propName: string]: any; // 支持其他任意属性
};

type ValidateCallback = (valid:boolean) => void;
export interface FormContext {
  props: any,
  addChildComponentContext: (context: any) => void;
  removeChildComponentContext: (context: any) => void;
  validate: (callback?: ValidateCallback) => any;
  validateFields: (fieldPropNames: string|string[], callback?: ValidateCallback) => any;
  resetFields(): void;
  clearValidate: (fieldPropNames: string|string[]) => void
}

export interface FormItemContext {
  $el: HTMLElement|undefined;
  validStatus: BsValidateStatus;
  validate: (trigger: string, callback?: FormItemValidateCallback) => void;
  clearValidate(): void;
  resetField(): void;
  addChildComponentContext: (context: SetValidateStatusContext) => void;
  removeChildComponentContext: (context: SetValidateStatusContext) => void;
};

// 表单布局模式
export type FormLayout = 'horizontal' | 'vertical' | 'inline'

// 子孙组件获取<bs-form>组件provide传递下去的值的key
export const formContextKey: InjectionKey<FormContext> = Symbol('formContextKey');
// 子孙组件获取<bs-form-item>组件provide传递下去的值的key
export const formItemContextKey: InjectionKey<FormItemContext> = Symbol('formItemContextKey');

export const bsFormItemProps = {
  value: { // 当前表单项的值，仅用来校验当前表单项时使用
    default: null
  },
  label: {
    type: String,
    default: ''
  },
  name: { // 字段在model中的key
    type: String,
    default: ''
  },
  rules: { // 当前表单的校验规则
    type: [Array, Object] as PropType<BsRuleItem | BsRuleItem[]>,
    default: () => []
  },
  showLabel: { // 是否显示label
    type: Boolean,
    default: true
  },
  labelFor: { // label的for属性
    type: String
  },
  labelAlign: { // label标签的对齐方式
    type: String as PropType<BsTextAlign>,
    default: ''
  },
  labelClass: { // label标签的额外classname
    type: [String, Array, Object]
  },
  labelWidth: { // label标签的宽度
    type: [String, Number]
  },
  contentClass: { // 内容部分的额外class
    type: [String, Array, Object]
  },
  horizontal: { // label是否水平显示
    type: Boolean,
    default: undefined
  },
  hint: { // 提示文字
    type: String,
    default: ''
  },
  validSuccessText: { // 表单校验成功后的文案
    type: String,
    default: ''
  },
  required: { // 是否必填，如不设置，则会根据校验规则自动生成
    type: Boolean,
    default: false
  },
  hideRequiredAsterisk: { // 是否隐藏必填字段的标签旁边的红色星号
    type: Boolean,
    default: false
  },
  size: { // 表单大小
    type: String as PropType<BsSize>
  }
};

export const bsFormProps = {
  model: { // 表单数据对象
    type: Object,
    default () {
      return {};
    }
  },
  rules: { // 校验规则
    type: Object as PropType<Record<string, BsRuleItem|BsRuleItem[]>>,
    default () {
      return {};
    }
  },
  showLabel: { // 是否显示label
    type: Boolean,
    default: true
  },
  showErrorMessage: { // 表单项校验失败时是否显示错误提示
    type: Boolean,
    default: true
  },
  layout: { // 表单布局模式
    type: String as PropType<FormLayout>,
    default: 'vertical'
  },
  labelClass: { // label标签的额外classname
    type: [String, Array, Object]
  },
  labelWidth: { // label标签的宽度
    type: [String, Number],
    default: ''
  },
  contentClass: { // 内容部分的额外class
    type: [String, Array, Object]
  },
  labelAlign: { // label标签的对齐方式
    type: String as PropType<BsTextAlign>
  },
  size: { // 表单大小
    type: String as PropType<BsSize>
  }
};

export type BsFormItemProps = ExtractPropTypes<typeof bsFormItemProps>;
export type BsFormProps = ExtractPropTypes<typeof bsFormProps>;

import { PropType, ExtractPropTypes } from 'vue';
import { BsColorType, BsSize, supportedBsColorTypes } from '../types';

export type BsButtonColorType = BsColorType | 'link';

// 定义按钮支持类型
const nativeTypes = ['button', 'submit'];
const supportedTypes = [...supportedBsColorTypes, 'link'];

export const bsButtonProps = {
  type: { // 按钮类型
    type: String as PropType<BsButtonColorType>,
    validator (typeVal: BsButtonColorType) {
      if (!typeVal) {
        return true;
      }
      return supportedTypes.includes(typeVal);
    }
  },
  nativeType: { // 原生按钮类型
    type: String,
    default: 'button',
    validator (nativeTypeVal: string) {
      return nativeTypes.includes(nativeTypeVal);
    }
  },
  tag: {
    type: String,
    default: 'button'
  },
  size: { // 按钮大小
    type: String as PropType<BsSize>
  },
  plain: { // 是否为朴素按钮
    type: Boolean,
    default: false
  },
  block: { // 是否为块级按钮，块级按钮宽占满整个父级
    type: Boolean,
    default: false
  },
  round: { // 是否圆角按钮
    type: Boolean,
    default: false
  },
  squared: { // 是否平角按钮
    type: Boolean,
    default: false
  },
  disabled: { // 是否禁用
    type: Boolean,
    default: false
  },
  loading: { // 是否加载中
    type: Boolean,
    default: false
  },
  disabledOnLoading: { // 加载状态时按钮是否禁用
    type: Boolean,
    default: true
  },
  dropdownToggle: { // 是否为下拉菜单切换按钮
    type: Boolean,
    default: false
  },
  showToggleSplit: { // 是否为显示下拉菜单切换按钮分割线
    type: Boolean,
    default: false
  }
};

export type BsButtonProps = ExtractPropTypes<typeof bsButtonProps>;

import { PropType, ExtractPropTypes } from 'vue';
import { BsColorType, supportedBsColorTypes } from '../types';

export type BsTagEffect = 'dark' | 'light' | 'plain';
// type BsTagSize = 'medium' | 'small' | 'mini';
export type BsTagSize = 'md' | 'sm' | 'mini';

export const bsTagProps = {
  type: { // 按钮类型
    type: String as PropType<BsColorType>,
    default: 'primary',
    validator (typeVal: BsColorType) {
      return [...supportedBsColorTypes, 'link'].includes(typeVal);
    }
  },
  size: { // 大小
    type: String as PropType<BsTagSize>,
    default: ''
  },
  effect: { // 主题
    type: String as PropType<BsTagEffect>,
    default: 'light'
  },
  closeable: { // 是否可关闭
    type: Boolean,
    default: false
  },
  color: { // 自定义颜色
    type: String,
    default: ''
  }
};

export type BsTagProps = ExtractPropTypes<typeof bsTagProps>;

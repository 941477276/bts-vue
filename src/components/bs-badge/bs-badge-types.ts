import { PropType, ExtractPropTypes } from 'vue';
import { BsColorType, supportedBsColorTypes } from '../types';

export const bsBadgeProps = {
  tag: { // 标签名
    type: String,
    default: 'span'
  },
  type: { // 类型
    type: String as PropType<BsColorType>,
    default: 'primary',
    validator (typeVal: BsColorType) {
      return supportedBsColorTypes.includes(typeVal);
    }
  },
  pill: { // 是否为胶囊样式
    type: Boolean,
    default: false
  },
  circle: { // 是否为小圆点样式
    type: Boolean,
    default: false
  }
};

export type BsBadgeProps = ExtractPropTypes<typeof bsBadgeProps>;

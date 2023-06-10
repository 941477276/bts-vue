import { PropType, ExtractPropTypes } from 'vue';
import { BsColorType } from '../types';

export const bsSpinnerProps = {
  text: {
    type: String,
    default: 'Loading...'
  },
  colorType: {
    type: String as PropType<BsColorType>,
    default: ''
  },
  grow: { // 是否为增长式旋转器
    type: Boolean,
    default: false
  }
};

export type BsSpinnerProps = ExtractPropTypes<typeof bsSpinnerProps>;

import { PropType, ExtractPropTypes } from 'vue';
import { BsColorType, supportedBsColorTypes } from '../types';

export type ColorFunctionType = (percentage: number) => string|Array<{color: string;percentage:number}>;
export interface BsMultipleProgressDefine {
  percentage: number;
  colorType?: BsColorType;
  showText?: boolean;
  color?: string|Array<{color: string;percentage:number}>|ColorFunctionType;
  textFormat?: (percentage: number) => string;
  striped?: boolean;
  animated?: boolean;
};

export const bsProgressProps = {
  percentage: { // 进度值
    type: [Number, String],
    default: 0
  },
  progresses: { // 多个进度条，只有在multiple为true时有效
    type: Array as PropType<BsMultipleProgressDefine[]>,
    default () {
      return [];
    }
  },
  showText: { // 是否显示进度值
    type: Boolean,
    default: true
  },
  textFormat: { // 指定进度条文字内容
    type: Function,
    default: null
  },
  color: { // 进度条背景色
    type: [String, Array, Function],
    default: ''
  },
  colorType: { // 进度条背景色类型
    type: String as PropType<BsColorType>,
    default: 'primary',
    validator (typeVal: BsColorType) {
      return supportedBsColorTypes.includes(typeVal);
    }
  },
  striped: { // 是否为条纹进度条
    type: Boolean,
    default: false
  },
  animated: { // 是否为显示条纹动画
    type: Boolean,
    default: false
  },
  multiple: { // 是否为多个进度条
    type: Boolean,
    default: false
  }
};

export type BsProgressProps = ExtractPropTypes<typeof bsProgressProps>;

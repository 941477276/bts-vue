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
// 进度条类型
export type BsProgressType = 'line' | 'circle' | 'dashboard';
// 仪表盘进度条缺口位置类型
export type BsGapPositionType = 'left' | 'right' | 'top' | 'bottom';
// 进度条的末端样式类型
export type BsStrokeLinecap = 'round' | 'butt' | 'square';
// 状态
export type BsProgressStatus = 'success' | 'warning' | 'info' | 'danger';

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
  type: { // 进度条类型
    type: String as PropType<BsProgressType>,
    default: 'line'
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
    type: [String, Array, Function, Object],
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

export const bsProgressCircleProps = {
  gapDegree: { // 仪表盘进度条缺口角度，可取值 0 ~ 295
    type: Number
  },
  gapPosition: { // 仪表盘进度条缺口位置
    type: String,
    default: ''
  },
  strokeWidth: { // 环形进度条线的宽度，单位是进度条画布宽度的百分比
    type: Number,
    default: 6
  },
  strokeLinecap: { // 进度条的末端样式类型
    type: String as PropType<BsStrokeLinecap>,
    default: 'round'
  },
  status: { // 状态
    type: String as PropType<BsProgressStatus>
  }
};

export type BsProgressProps = ExtractPropTypes<typeof bsProgressProps>;

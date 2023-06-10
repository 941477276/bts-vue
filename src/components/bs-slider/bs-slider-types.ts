import { Placement } from '@popperjs/core';
import { PropType, ExtractPropTypes } from 'vue';

export interface BsSliderMask {
  [key: string|number]: string|{
    label: string|number;
    style?: Record<string, any>;
  }
}

export const bsSliderProps = {
  modelValue: {
    type: [Number, String, Array],
    default: 0
  },
  min: { // 最小值
    type: Number,
    default: 0
  },
  max: { // 最大值
    type: Number,
    default: 100
  },
  disabled: {
    type: Boolean,
    default: false
  },
  vertical: { // 是否垂直模式
    type: Boolean,
    default: false
  },
  range: { // 是否为双滑块模式
    type: Boolean,
    default: false
  },
  rangeMin: { // 两个滑块值的差的最小值
    type: Number,
    default: null
  },
  rangeMax: { // 两个滑块值的差的最大值
    type: Number,
    default: null
  },
  step: { // 步长，必须大于0。当 marks 不为空对象时，可以设置 step 为 null，此时 Slider 的可选值仅有 marks 标出来的部分。
    type: Number,
    default: 1
  },
  showSteps: { // 是否显示间断点
    type: Boolean,
    default: false
  },
  included: { // 当有marks或showSteps时，值为 true 时表示值为包含关系，false 表示并列
    type: Boolean,
    default: true
  },
  enableCross: { // 是否允许交叉，仅在range模式下有效
    type: Boolean,
    default: true
  },
  marks: { // 刻度标记，key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标签可以单独设置样式
    type: Object as PropType<BsSliderMask>,
    default () {
      return {};
    }
  },
  tooltipTransitionName: { // tooltip的过渡名称
    type: String,
    default: 'scale'
  },
  tooltipPlacement: { // tooltip的显示位置
    type: String as PropType<Placement>,
    default: ''
  },
  showToolTip: { // 是否显示tooltip，如果为true则总是显示，否则总是不显示
    type: Boolean,
    default: null
  },
  tooltipClass: { // tooltip的class类名
    type: String,
    default: ''
  },
  tooltipFormatter: { // tooltip显示文本格式化函数，若返回null，则隐藏tooltip
    type: Function,
    default: undefined
  },
  tooltipRawContent: { // tooltip的内容是否为html文本
    type: Boolean,
    default: false
  }
};

export type BsSliderProps = ExtractPropTypes<typeof bsSliderProps>;

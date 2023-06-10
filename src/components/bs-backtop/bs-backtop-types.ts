import { ExtractPropTypes } from 'vue';

export const bsBacktopProps = {
  target: {
    type: [Object, String, Function],
    default () {
      return window;
    }
  },
  visibilityHeight: { // 滚动高度达到此参数值才显示按钮，支持固定值、百分比
    type: [String, Number],
    default: 400
  },
  useFixedPosition: { // 是否使用fixed定位
    type: Boolean,
    default: null
  },
  duration: { // 滚动持续时间
    type: Number,
    default: 150
  },
  top: { // 触发元素的 style.top 值，支持固定值、百分比
    type: [String, Number]
  },
  right: { // 触发元素的 style.right 值，支持固定值、百分比
    type: [String, Number]
  }
};

export type BsBacktopProps = ExtractPropTypes<typeof bsBacktopProps>;

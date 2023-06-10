import { ExtractPropTypes, Ref, VNode } from 'vue';

export interface CreateLoadingOptions {
  // visible: Ref<boolean>,
  text?: Ref<string|number>|string|number;
  grow?: Ref<boolean>|boolean;
  vertical?: Ref<boolean>|boolean;
  color?: Ref<string>|string;
  background?: Ref<string>|string;
  transitionName?: Ref<string>|string;
  customClass?: Ref<string>|string;
  spinnerRender?: VNode|(() => VNode); // 自定义渲染spinner函数
  textRender?: VNode|(() => VNode); // 自定义渲染内容函数
  onHide?: () => any;
  onDestroy?: () => any;
};

export interface BsLoadingOptions extends CreateLoadingOptions {
  target?: string|HTMLElement; // Loading 需要覆盖的 DOM 节点。可传入一个 DOM 对象或字符串
  fullscreen?: boolean;
  lock?: boolean;
};

export const bsLoadingProps = {
  visible: {
    type: Boolean,
    default: false
  },
  text: {
    type: String,
    default: ''
  },
  grow: { // 是否为增长式旋转器
    type: Boolean,
    default: false
  },
  vertical: { // 是否垂直对齐
    type: Boolean,
    default: false
  },
  color: { // 字体颜色
    type: String,
    default: ''
  },
  background: { // 背景色
    type: String,
    default: ''
  },
  transitionName: { // 过渡效果名称
    type: String,
    default: 'fade'
  },
  fullscreen: { // 是否全屏
    type: Boolean,
    default: false
  },
  customClass: { // 自定义class类名
    type: String,
    default: ''
  },
  style: { // dom style
    type: Object,
    default () {
      return {};
    }
  }
};

export type BsLoadingProps = ExtractPropTypes<typeof bsLoadingProps>;

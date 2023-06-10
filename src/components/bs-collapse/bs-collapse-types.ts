import { ExtractPropTypes, InjectionKey, Ref } from 'vue';

export const bsCollapseItemProps = {
  title: { // 标题
    type: [String, Number],
    default: ''
  },
  name: { // 唯一标志符
    type: [String, Number],
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  showArrow: {
    type: Boolean,
    default: true
  },
  arrowLeft: { // 箭头是否在左侧
    type: Boolean,
    default: false
  }
};

export const bsCollapseProps = {
  modelValue: { // 当前激活的面板的 name，可以使用 v-model 双向绑定
    type: [String, Number, Array],
    default: ''
  },
  accordion: { // 是否开启手风琴模式，开启后每次至多展开一个面板
    type: Boolean,
    default: false
  },
  simple: { // 是否为简洁模式
    type: Boolean,
    default: false
  },
  headerFocusEffect: {
    type: Boolean,
    default: true
  }
};

export type BsCollapseProps = ExtractPropTypes<typeof bsCollapseProps>;
export type BsCollapseItemProps = ExtractPropTypes<typeof bsCollapseItemProps>;

export type CollapseItemContext = {
  id: string;
  expand: () => void;
  shrink: () => void;
  name: Ref<string>
};

export type CollapseContext = {
  activeNames: Ref<(string|number)[]>;
  handleItemChange: (expended: boolean, name: string|number) => any;
  // 存储子组件上下文
  // addChildComponentContext: (childContext: CollapseItemContext) => any;
  // 移除子组件上下文
  // removeChildComponentContext: (childContext: CollapseItemContext) => any;
};

export const bsCollapseContextKey: InjectionKey<CollapseContext> = Symbol('bsCollapseContext');

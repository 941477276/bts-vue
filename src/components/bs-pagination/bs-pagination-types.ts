import { PropType, ExtractPropTypes } from 'vue';
import { BsSize } from '../types';

export type BsPaginationLayoutKey = 'pager' | 'sizes' | 'total' | 'jumper' | 'slot';
export const bsPaginationProps = {
  pageSize: { // 每页显示条目个数，支持v-model
    type: Number,
    default: 10
  },
  currentPage: { // 当前页码，支持v-model
    type: Number,
    default: 1
  },
  total: { // 总条目数
    type: Number,
    default: null
  },
  pagerCount: { // 页码按钮的数量，当总页数超过该值时会折叠（大于等于 5 且小于等于 21 的奇数）
    type: Number,
    default: 7
  },
  pageSizes: { // 每页显示个数选择器的选项设置
    type: Array as PropType<number[]>,
    default () {
      return [10, 20, 40, 50, 100];
    }
  },
  disabledPage: { // 禁用的页码
    type: Array as PropType<number[]>,
    default () {
      return [];
    }
  },
  size: { // 分页器大小
    type: String as PropType<BsSize>,
    default: ''
  },
  layout: { // 组件布局，子组件名用逗号分隔
    type: [String, Array],
    default: 'total,pager,sizes,jumper,slot'
  },
  prevText: { // 上一页按钮的文字
    type: String,
    default: ''
  },
  nextText: {
    type: String, // 下一页按钮的文字
    default: ''
  },
  usePrev: { // 是否使用上一页按钮
    type: Boolean,
    default: true
  },
  useNext: { // 是否使用下一页按钮
    type: Boolean,
    default: true
  },
  hideOnSinglePage: { // 只有一页时是否隐藏
    type: Boolean,
    default: false
  }
};

export type BsPaginationProps = ExtractPropTypes<typeof bsPaginationProps>;

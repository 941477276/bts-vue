import { PropType, ExtractPropTypes } from 'vue';

export type BsRelativeTimeViewType = 'relative' | 'date' | 'datetime';

export const bsRelativeTimeProps = {
  time: { // 时间
    type: [Number, Date, String],
    default: ''
  },
  viewType: { // 显示类型
    type: String as PropType<BsRelativeTimeViewType>,
    default: 'relative',
    validate (viewType: string) {
      return ['relative', 'date', 'datetime'].some(item => item === viewType);
    }
  },
  interval: { // 自动更新时间
    type: Number,
    default: 60
  },
  format: { // 格式化模板，只对date、datetime有效
    type: String,
    default: ''
  },
  lang: { // 语言
    type: String,
    default: ''
  }
};

export type BsRelativeTimeProps = ExtractPropTypes<typeof bsRelativeTimeProps>;

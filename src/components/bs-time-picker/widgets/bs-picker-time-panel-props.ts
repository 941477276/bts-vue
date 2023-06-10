export const bsPickerTimePanelProps = {
  modelValue: {
    type: [String, Object],
    default: ''
  },
  hourStep: { // 小时选项间隔
    type: Number,
    default: 1
  },
  minuteStep: { // 分钟选项间隔
    type: Number,
    default: 1
  },
  secondStep: { // 秒选项间隔
    type: Number,
    default: 1
  },
  disabledHours: { // 需禁用的小时项
    type: Function,
    default: null
  },
  disabledMinutes: { // 需禁用的分钟项
    type: Function,
    default: null
  },
  disabledSeconds: { // 需禁用的秒项
    type: Function,
    default: null
  },
  hideDisabledOptions: { // 是否隐藏禁用的选项
    type: Boolean,
    default: false
  },
  use12Hours: { // 是否使用12小时制
    type: Boolean,
    default: false
  },
  format: { // 展示的时间格式
    type: String,
    default: ''
  },
  valueFormat: { // 可选，绑定值的格式，对 modelValue 起作用。不指定则绑定值为 dayjs 对象
    type: String
  },
  showHeader: { // 是否显示头部
    type: Boolean,
    default: false
  }
};

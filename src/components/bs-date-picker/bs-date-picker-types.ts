import { PropType, ExtractPropTypes, Ref, InjectionKey } from 'vue';
import { BsSize } from '../types';

export type PickerType = 'date' | 'dateTime' | 'week' | 'month' |'quarter' | 'year';

export type DatePickerCtx = {
  ctx: any;
  pickerType?: Ref<string>;
  currentMode?: Ref<string>;
}
export const datePickerCtx: InjectionKey<DatePickerCtx> = Symbol('datePickerCtx');
export const datePickerPrefixColumnSlotCtx = Symbol('prefixColumnSlotCtx');
export const allowedPickerType = ['date', 'dateTime', 'week', 'month', 'quarter', 'year'];

export const bsDatePickerTypes = {
  modelValue: {
    type: [String, Object],
    default: ''
  },
  pickerType: {
    type: String as PropType<PickerType>,
    default: 'date'
  },
  mode: { // 面板的状态
    type: String as PropType<PickerType>,
    default: ''
  },
  format: { // 日期显示的格式
    type: String,
    default: ''
  },
  valueFormat: { // 绑定值的格式
    type: String,
    default: ''
  },
  showHeader: { // 是否显头部
    type: Boolean,
    default: true
  },
  showFooter: { // 是否显示底部
    type: Boolean,
    default: null
  },
  disabled: { // 是否禁用
    type: Boolean,
    default: false
  },
  inputReadonly: { // 设置输入框为只读（避免在移动设备上打开虚拟键盘）
    type: Boolean,
    default: false
  },
  deliveContextToFormItem: { // 是否向form-item组件传递上下文信息
    type: Boolean,
    default: true
  },
  size: { // 输入框大小
    type: String as PropType<BsSize>,
    default: ''
  },
  id: {
    type: String,
    default: '',
    validator (idVal: string) {
      if (typeof idVal !== 'string' || /^\d+/.test(idVal)) {
        console.warn('id必须为字符串类型，且不能以数字开头');
        return false;
      }
      return true;
    }
  },
  name: { // input输入框的name属性
    type: String,
    default: null
  },
  showSidebar: { // 是否显示侧边栏
    type: Boolean,
    default: false
  },
  sidebarInRight: { // 侧边栏是否在右边
    type: Boolean,
    default: false
  },
  /* showTime: { // 是否开启选择时间功能
    type: [Boolean, Object],
    default: false
  }, */
  dateRender: { // 自定义日期单元格的内容
    type: Function,
    default: null
  },
  placeholder: { // 输入框提示文字
    type: String,
    default: ''
  },
  disabledDate: { // 禁用的日期
    type: Function,
    default: null
  },
  dropdownClass: { // 下拉弹窗的额外classname
    type: [String, Object, Array],
    default: ''
  },
  datePanelProps: { // 日期选择器props
    type: Object,
    default () {
      return {};
    }
  },
  timePanelProps: { // 时间选择器props
    type: Object,
    default () {
      return {};
    }
  },
  formatSpliter: { // 格式模板之间的连接符，仅在pickerType=dateTime时有效
    type: String,
    default: ' '
  },
  valueFormatSpliter: { // 格式模板之间的连接符，仅在pickerType=dateTime时有效
    type: String,
    default: ' '
  },
  panelViewDate: { // 选择器打开时默认显示的时间
    type: [String, Object],
    default: ''
  },
  nativeAttrs: { // input原生属性
    type: Object,
    default () {
      return {};
    }
  },
  getRowClassname: { // 自定义表格行classname
    type: Function,
    default () {
      return [];
    }
  },
  getCellClassname: { // 自定义表格单元格classname
    type: Function,
    default () {
      return [];
    }
  }
};

export type BsDatePickerProps = ExtractPropTypes<typeof bsDatePickerTypes>;

import { PropType } from 'vue';
import { Dayjs } from 'dayjs';
import { PickerType } from '../bs-date-range-picker-types';
import { NOOP } from '@vue/shared';

export const rangePanelsCommonProps = {
  modelValue: {
    type: Array as PropType<Dayjs[]>,
    default () {
      return [];
    }
  },
  dateRender: { // 自定义日期单元格的内容
    type: Function,
    default: null
  },
  disabledDate: { // 禁用的日期
    type: Function,
    default: null
  },
  showHeader: { // 是否显头部
    type: Boolean,
    default: true
  },
  hasPrefixColumn: { // 是否有前置列
    type: Boolean,
    default: false
  },
  yearButtonDisabled: { // 是否禁用年份按钮
    type: Boolean,
    default: false
  },
  monthButtonDisabled: { // 是否禁用月份按钮
    type: Boolean,
    default: false
  },
  mode: { // 面板的状态
    type: String as PropType<PickerType>,
    default: ''
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
  },
  onYearClick: { // 年份按钮点击事件
    type: Function,
    default () {
      return NOOP;
    }
  },
  onMonthClick: { // 月份按钮点击事件
    type: Function,
    default () {
      return NOOP;
    }
  }
};

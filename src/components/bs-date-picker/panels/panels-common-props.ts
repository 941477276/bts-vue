import { PropType } from 'vue';
import { Dayjs } from 'dayjs';
import { NOOP } from '@vue/shared';

export const panelsCommonProps = {
  modelValue: {
    type: Object as PropType<Dayjs>,
    default: null
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
  }
};

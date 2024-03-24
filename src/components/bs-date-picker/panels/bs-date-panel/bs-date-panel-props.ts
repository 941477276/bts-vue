import { PropType } from 'vue';
import { NOOP } from '@vue/shared';
import { panelsCommonProps } from '../panels-common-props';

export const bsDatePanelProps = {
  ...panelsCommonProps,
  /* modelValue: {
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
  }, */
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
  /* getRowClassname: { // 自定义表格行classname
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
  }, */
  onMonthClick: { // 月份按钮点击事件
    type: Function,
    default () {
      return NOOP;
    }
  }
};

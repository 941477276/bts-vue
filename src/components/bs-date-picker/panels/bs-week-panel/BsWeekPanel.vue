<template>
  <div class="bs-picker-week-panel">
    <BsDatePanel
      ref="datePanelRef"
      v-bind="$props"
      :has-prefix-column="true"
      :get-row-classname="setRowClassname"
      :model-value="modelValue"
      :on-month-click="onMonthClick"
      :on-year-click="onYearClick"
      @update:modelValue="$emit('update:modelValue', $event)"
      @view-date-change="onViewDateChange">
      <template #prefixColumn="cellData">
        <td class="bs-picker-cell bs-picker-week-cell">{{ getWeek(cellData.dayjsIns) }}</td>
      </template>
    </BsDatePanel>
  </div>
</template>

<script lang="ts">
import {
  ref,
  computed,
  watch,
  defineComponent,
  PropType,
  provide,
  inject
} from 'vue';
import {
  NOOP
} from '@vue/shared';
import dayjs, { Dayjs } from 'dayjs';
import { dayjsUtil } from '../../../../utils/dayjsUtil';
import BsDatePanel from '../bs-date-panel/BsDatePanel.vue';

let defaultFormat = 'YYYY-wo';
export default defineComponent({
  name: 'BsWeekPanel',
  components: {
    BsDatePanel
  },
  props: {
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
    hasPrefixColumn: { // 是否有前置列
      type: Boolean,
      default: false
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
  },
  emits: ['update:modelValue', 'viewDateChange'],
  setup (props: any, ctx: any) {
    let getWeek = function (date: Dayjs) {
      return dayjsUtil.locale.getWeek(date, 'zh-cn');
    };
    let datePanelRef = ref(null);
    return {
      getWeek,
      datePanelRef,

      setRowClassname (rowCells: any[]) {
        let classnames: string[] = ['bs-picker-week-panel-row'];
        let modelValueWeek = props.modelValue ? props.modelValue.format(defaultFormat) : '';
        if (modelValueWeek) {
          let flag = rowCells.some((cellData: any) => cellData.dayjsIns.format(defaultFormat) === modelValueWeek);
          if (flag) {
            classnames.push('is-row-selected');
          }
        }
        let disabledDate = props.disabledDate;
        if (typeof disabledDate === 'function') {
          let flag = rowCells.some((cellData: any) => !!disabledDate(cellData.dayjsIns));
          if (flag) {
            classnames.push('is-row-disabled');
          }
        }
        return classnames;
      },
      onViewDateChange (date: Dayjs) {
        ctx.emit('viewDateChange', date);
      },
      setPanelViewDate (date: Dayjs) {
        (datePanelRef.value as any)?.setPanelViewDate(date);
      }
    };
  }
});
</script>

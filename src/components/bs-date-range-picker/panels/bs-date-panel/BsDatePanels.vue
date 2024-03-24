<template>
  <div class="bs-picker-date-range-panels">
    <div v-if="isDatetimeRange" class="bs-picker-date-range-time-header">
      <input
        type="text"
        class="bs-picker-date-range-time-editor-input form-control form-control-sm"
        placeholder="开始日期"
        :value="startDateInputValue"
        @input="onDateInput($event, 'start')"
        />
      <BsTimePicker
        v-bind="timePanelProps"
        value-format=""
        :model-value="startDate"
        :disabled="timePanelProps.disabled || isHover"
        :teleported="false"
        size="sm"
        placeholder="开始时间"
        @update:modelValue="onTimeChange($event, 'start')"></BsTimePicker>

      <span class="bs-picker-date-range-time-separator"></span>

      <input
        type="text"
        class="bs-picker-date-range-time-editor-input form-control form-control-sm"
        placeholder="结束日期"
        :value="endDateInputValue"
        @input="onDateInput($event, 'end')"
      />
      <BsTimePicker
        v-bind="timePanelProps"
        value-format=""
        :model-value="endDate"
        :disabled="timePanelProps.disabled || isHover"
        :teleported="false"
        size="sm"
        placement="bottomEnd"
        placeholder="结束时间"
        @update:modelValue="onTimeChange($event, 'end')"></BsTimePicker>
    </div>
    <div
      class="bs-picker-date-range-panels-wrap"
      @mousemove="onPanelsWrapMousemove">
      <BsDatePanelAssemble
        ref="startDatePanelRef"
        picker-type="date"
        :get-row-classname="getRowClassname"
        :get-cell-classname="setCellClassname"
        :has-prefix-column="hasPrefixColumn"
        :use-model-value="false"
        :disabled-date="dateDisabledStart"
        :date-render="dateRender"
        :year-button-disabled="yearButtonDisabled"
        :month-button-disabled="monthButtonDisabled"
        :mode="mode"
        @update:modelValue="onDateCellClick"
        @panel-mode-change="onPanelModeChange"
        @view-date-change="onViewDateChange($event, 'start')"></BsDatePanelAssemble>
      <BsDatePanelAssemble
        ref="endDatePanelRef"
        picker-type="date"
        :get-row-classname="getRowClassname"
        :get-cell-classname="setCellClassname"
        :has-prefix-column="hasPrefixColumn"
        :use-model-value="false"
        :disabled-date="dateDisabledEnd"
        :date-render="dateRender"
        :year-button-disabled="yearButtonDisabled"
        :month-button-disabled="monthButtonDisabled"
        :mode="mode"
        @update:modelValue="onDateCellClick"
        @panel-mode-change="onPanelModeChange"
        @view-date-change="onViewDateChange($event, 'end')"></BsDatePanelAssemble>
    </div>
  </div>
</template>

<script lang="ts">
import {
  ref,
  computed,
  watch,
  defineComponent,
  provide,
  PropType,
  SetupContext,
  reactive,
  nextTick
} from 'vue';
import dayjs, { Dayjs } from 'dayjs';
import BsTimePicker from '../../../bs-time-picker/BsTimePicker.vue';
// @ts-ignore
import BsDatePanelAssemble from '../BsDatePanelAssemble';
import { useDatePanelsEvents } from './useDatePanelsEvents';
import { usePanelsCommon } from '../usePanelsCommon';
import { rangePanelsCommonProps } from '../rangePanelsCommonProps';

const dateFormat = 'YYYY-MM-DD';
export default defineComponent({
  name: 'BsDatePanels',
  components: {
    BsDatePanelAssemble,
    // BsDatePanel,
    BsTimePicker
  },
  props: {
    ...rangePanelsCommonProps,
    /* modelValue: {
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
    }, */
    isDatetimeRange: { // 是否为日期时间选择器
      type: Boolean,
      default: false
    },
    timePanelProps: { // 时间选择器属性
      type: Object,
      default () {
        return {};
      }
    },
    defaultTime: { // 选中日期后的默认具体时刻
      type: Array,
      default () {
        return [];
      }
    }
  },
  emits: ['update:modelValue', 'viewDateChange', 'previewDatesChange'],
  setup (props: any, ctx: any) {
    // 设置面版显示日期
    let setPanelViewDate = function (startViewDate?: Dayjs|Date|null, endViewDate?: Dayjs|Date|null) {
      console.log('调用了setPanelViewDate'/* , startViewDate, endViewDate */);
      if (!startViewDate && !endViewDate) {
        return;
      }
      if (startViewDate instanceof Date) {
        startViewDate = dayjs(startViewDate);
      }
      if (endViewDate instanceof Date) {
        endViewDate = dayjs(endViewDate);
      }
      if (startViewDate && !endViewDate) {
        endViewDate = startViewDate.month(startViewDate.month() + 1);
      } else if (endViewDate && !startViewDate) {
        startViewDate = endViewDate.month(endViewDate.month() - 1);
      }
      if (startViewDate && endViewDate) {
        let startViewDateYear = startViewDate.year();
        let startViewDateMonth = startViewDate.month();
        let endViewDateYear = endViewDate.year();
        let sameYear = false;
        if (endViewDateYear < startViewDateYear) {
          endViewDate = endViewDate.year(startViewDateYear);
          sameYear = true;
        } else if (startViewDateYear == endViewDateYear) {
          sameYear = true;
        }
        if (sameYear && endViewDate.month() <= startViewDateMonth) {
          endViewDate = endViewDate.month(startViewDateMonth + 1);
        }
      }
      (startDatePanelRef.value as any)?.setPanelViewDate(startViewDate);
      (endDatePanelRef.value as any)?.setPanelViewDate(endViewDate);
    };

    let {
      startDatePanelRef,
      endDatePanelRef,
      startDate,
      endDate,
      hoverStartDate,
      hoverEndDate,
      isHover,
      hoverEndIsBeforeStart,
      panelBodyExternalData,
      startDateInputValue,
      endDateInputValue,

      resetSelectedDates,
      setCellClassname,
      onDateCellClick,
      onPanelsWrapMousemove,
      onPanelModeChange,
      onViewDateChange,
      dateDisabledStart,
      dateDisabledEnd
    } = usePanelsCommon('date', {
      props,
      ctx,
      setPanelViewDate
    });

    // 设置日期输入框的值
    let setDateInputValue = function () {
      let hoverStartDateRaw = hoverStartDate.value;
      let hoverEndDateRaw = hoverEndDate.value;

      let hoverStartDateFormatted = hoverStartDateRaw ? hoverStartDateRaw.format(dateFormat) : '';
      let hoverEndDateFormatted = hoverEndDateRaw ? hoverEndDateRaw.format(dateFormat) : '';

      if (hoverEndDateFormatted && hoverEndDateRaw) {
        if (!hoverEndIsBeforeStart.value) {
          startDateInputValue.value = hoverStartDateFormatted;
          endDateInputValue.value = hoverEndDateFormatted;
        } else {
          startDateInputValue.value = hoverEndDateFormatted;
          endDateInputValue.value = hoverStartDateFormatted;
        }
        return;
      }

      let startDateRaw = startDate.value;
      let endDateRaw = endDate.value;
      if (!hoverStartDateFormatted && startDateRaw) {
        hoverStartDateFormatted = startDateRaw.format(dateFormat);
      }
      if (!hoverEndDateFormatted && endDateRaw) {
        hoverEndDateFormatted = endDateRaw.format(dateFormat);
      }
      startDateInputValue.value = hoverStartDateFormatted;
      endDateInputValue.value = hoverEndDateFormatted;
    };

    watch(() => props.modelValue, function (modelValue) {
      let [start, end] = modelValue;
      console.log('watch datePanels modelValue: ', modelValue);
      startDate.value = start || null;
      endDate.value = end || null;

      nextTick(function () {
        let viewDateStart = start || (!start && !end ? dayjs() : null);
        setPanelViewDate(viewDateStart, end);
      });
    }, { immediate: true });

    watch([startDate, endDate], function ([startDateRaw, endDateRaw]) {
      if (!isHover.value) {
        console.log('aaaa', startDateRaw, endDateRaw);
        setDateInputValue();
      }
    }, { immediate: true, flush: 'post' });
    watch([hoverStartDate, hoverEndDate], function ([startDateRaw, endDateRaw]) {
      console.log('bbbb');
      /* panelBodyExternalData.count++;
      let hoverStartDateFormatted = startDateRaw ? startDateRaw.format(dateFormat) : '';
      let hoverEndDateFormatted = endDateRaw ? endDateRaw.format(dateFormat) : '';
      if (!hoverEndIsBeforeStart) {
        startDateInputValue.value = hoverStartDateFormatted;
        endDateInputValue.value = hoverEndDateFormatted;
      } else {
        startDateInputValue.value = hoverEndDateFormatted;
        endDateInputValue.value = hoverStartDateFormatted;
      } */
      setDateInputValue();
      if (startDateRaw || endDateRaw) {
        let arr = !hoverEndIsBeforeStart.value ? [startDateRaw, endDateRaw] : [endDateRaw, startDateRaw];
        ctx.emit('previewDatesChange', arr);
      }
    });

    let {
      onDateInput,
      // onDateCellClick,
      // onPanelModeChange,
      // onPanelsWrapMousemove,
      // onViewDateChange,
      onTimeChange
    } = useDatePanelsEvents({
      ctx,
      props,
      dateFormat,
      // hoverEndIsBeforeStart,

      startDate,
      endDate,
      /* hoverStartDate,
      hoverEndDate,
      isHover,

      startDatePanelRef,
      endDatePanelRef, */
      setPanelViewDate
    });

    return {
      startDatePanelRef,
      endDatePanelRef,
      startDate,
      endDate,

      startDateInputValue,
      endDateInputValue,
      isHover,
      panelBodyExternalData,

      resetSelectedDates,
      setPanelViewDate,
      // 设置单元格classname
      setCellClassname,
      // 重置面板状态
      resetPanelMode (emitEvents: boolean) {
        let startDatePanelCom = startDatePanelRef.value;
        let endDatePanelCom = endDatePanelRef.value;
        startDatePanelCom.setCurrentMode('date', null, emitEvents);
        endDatePanelCom.setCurrentMode('date', null, emitEvents);
        // 解决用户切换面板模式但并未切回与pickerType一致的面板就关闭了下拉弹窗，然后再次打开了弹出，此时面板中的月份显示不正确问题
        let timer = setTimeout(function () {
          clearTimeout(timer);
          let startPanelViewDate = startDatePanelCom.getPanelViewDate();
          let endPanelViewDate = endDatePanelCom.getPanelViewDate();
          if (!startPanelViewDate && !endPanelViewDate) {
            return;
          }
          let modelValue = props.modelValue;
          if (modelValue && modelValue.length > 0) { // 如果有值，优先使用值作为显示的面板日期
            let start = modelValue[0]/*  || dayjs() */;
            setPanelViewDate(start, modelValue[1]);
            return;
          }
          if (startPanelViewDate && !endPanelViewDate) {
            endPanelViewDate = startPanelViewDate.month(startPanelViewDate.month() + 1);
          } else if (endPanelViewDate && !startPanelViewDate) {
            startPanelViewDate = endPanelViewDate.month(endPanelViewDate.month() - 1);
          }

          console.log('resetPanelMode', startPanelViewDate, endPanelViewDate);
          let startYear = startPanelViewDate.year();
          let endYear = endPanelViewDate.year();
          let startMonth = startPanelViewDate.month();
          let endMonth = endPanelViewDate.month();

          if (endYear < startYear || (endMonth <= startMonth)) {
            endDatePanelCom.setPanelViewDate(startPanelViewDate.month(startMonth + 1));
          }
        }, 0);
      },

      onDateInput,
      onDateCellClick,
      onPanelModeChange,
      onPanelsWrapMousemove,
      onViewDateChange,
      onTimeChange,
      dateDisabledStart,
      dateDisabledEnd
    };
  }
});
</script>

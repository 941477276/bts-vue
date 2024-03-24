<template>
  <div class="bs-picker-date-range-panels">
    <div
      class="bs-picker-date-range-panels-wrap"
      @mousemove="onPanelsWrapMousemove">
      <BsDatePanelAssemble
        ref="startDatePanelRef"
        picker-type="year"
        :get-row-classname="getRowClassname"
        :get-cell-classname="setCellClassname"
        :has-prefix-column="hasPrefixColumn"
        :use-model-value="false"
        :disabled-date="dateDisabledStart"
        :date-render="dateRender"
        :year-button-disabled="yearButtonDisabled"
        :month-button-disabled="monthButtonDisabled"
        :mode="mode"
        :panel-decade-count="15"
        @update:modelValue="onDateCellClick"
        @panel-mode-change="onPanelModeChange"
        @view-date-change="onViewDateChange($event, 'start')"></BsDatePanelAssemble>
      <BsDatePanelAssemble
        ref="endDatePanelRef"
        picker-type="year"
        :get-row-classname="getRowClassname"
        :get-cell-classname="setCellClassname"
        :has-prefix-column="hasPrefixColumn"
        :use-model-value="false"
        :disabled-date="dateDisabledEnd"
        :date-render="dateRender"
        :year-button-disabled="yearButtonDisabled"
        :month-button-disabled="monthButtonDisabled"
        :mode="mode"
        :panel-decade-count="15"
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
// @ts-ignore
import BsDatePanelAssemble from '../BsDatePanelAssemble';
import { usePanelsCommon } from '../usePanelsCommon';
import { yearDecadeCount } from '../../../../utils/dayjsUtil';
import { rangePanelsCommonProps } from '../rangePanelsCommonProps';

// const dateFormat = 'YYYY';
export default defineComponent({
  name: 'BsYearPanels',
  components: {
    BsDatePanelAssemble
  },
  props: {
    ...rangePanelsCommonProps
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
        return () => [];
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
    } */
  },
  emits: ['update:modelValue', 'viewDateChange', 'previewDatesChange'],
  setup (props: any, ctx: any) {
    // 设置面版显示日期
    let setPanelViewDate = function (startViewDate?: Dayjs|Date|null, endViewDate?: Dayjs|Date|null) {
      console.log('调用了setPanelViewDate', startViewDate, endViewDate);
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
        endViewDate = startViewDate.year(startViewDate.year() + 1);
      } else if (endViewDate && !startViewDate) {
        startViewDate = endViewDate.year(endViewDate.year() - 1);
      }
      if (startViewDate && endViewDate) {
        let startViewDateYear = startViewDate.year();
        // let startViewDateMonth = startViewDate.month();
        let endViewDateYear = endViewDate.year();
        // let sameYear = false;
        console.log(3333, startViewDateYear, endViewDateYear);
        if (endViewDateYear - startViewDateYear <= yearDecadeCount) {
          endViewDate = endViewDate.year(startViewDateYear + yearDecadeCount);
          // sameYear = true;
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
    } = usePanelsCommon('year', {
      props,
      ctx,
      setPanelViewDate
    });

    watch(() => props.modelValue, function (modelValue) {
      let [start, end] = modelValue;
      console.log('watch datePanels modelValue: ', modelValue);
      startDate.value = start || null;
      endDate.value = end || null;

      nextTick(function () {
        let viewDateStart = start || (!start && !end ? dayjs() : null);
        console.log('111调用setPanelViewDate', start, end);
        setPanelViewDate(start, end);
      });
    }, { immediate: true });

    watch([hoverStartDate, hoverEndDate], function ([startDateRaw, endDateRaw]) {
      console.log('bbbb');

      // setDateInputValue();
      if (startDateRaw || endDateRaw) {
        console.log('bbb-1');
        let arr = !hoverEndIsBeforeStart.value ? [startDateRaw, endDateRaw] : [endDateRaw, startDateRaw];
        ctx.emit('previewDatesChange', arr);
      }
    });

    /* let {
      // onDateCellClick,
      // onPanelModeChange,
      // onPanelsWrapMousemove,
      // onViewDateChange
    } = useYearPanelsEvents({
      ctx,
      props,
      dateFormat,
      hoverEndIsBeforeStart,

      startDate,
      endDate,
      hoverStartDate,
      hoverEndDate,
      isHover,

      startDatePanelRef,
      endDatePanelRef,
      setPanelViewDate
    }); */

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
        console.log('调用了resetPanelMode');
        let startDatePanelCom = startDatePanelRef.value;
        let endDatePanelCom = endDatePanelRef.value;
        startDatePanelCom.setCurrentMode('year', null, emitEvents);
        endDatePanelCom.setCurrentMode('year', null, emitEvents);
        // 解决用户切换面板模式但并未切回与pickerType一致的面板就关闭了下拉弹窗，然后再次打开了弹出，此时面板中的月份显示不正确问题
        let timer = setTimeout(function () {
          clearTimeout(timer);
          let startPanelViewDate = startDatePanelCom.getPanelViewDate();
          let endPanelViewDate = endDatePanelCom.getPanelViewDate();
          // 组件初始化完成后且未设置任何值的情况下startPanelViewDate、endPanelViewDate都会为空
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
            // +10年
            endPanelViewDate = startPanelViewDate.year(startPanelViewDate.year() + yearDecadeCount);
          } else if (endPanelViewDate && !startPanelViewDate) {
            // -10年
            startPanelViewDate = endPanelViewDate.year(endPanelViewDate.year() - yearDecadeCount);
          }

          console.log('resetPanelMode', startPanelViewDate, endPanelViewDate);
          let startYear = startPanelViewDate.year();
          let endYear = endPanelViewDate.year();

          if (endYear - startYear <= yearDecadeCount) {
            endDatePanelCom.setPanelViewDate(startPanelViewDate.year(startYear + yearDecadeCount));
          }
        }, 0);
      },

      onDateCellClick,
      onPanelModeChange,
      onPanelsWrapMousemove,
      onViewDateChange,
      dateDisabledStart,
      dateDisabledEnd
    };
  }
});
</script>

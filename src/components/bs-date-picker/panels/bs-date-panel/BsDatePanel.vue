<template>
  <div class="bs-picker-date-panel">
    <PanelHeader
      v-if="showHeader"
      :onSuperPrev="onSuperPrev"
      :onPrev="onPrev"
      :onNext="onNext"
      :onSuperNext="onSuperNext">
      <!--TODO 年份按钮在前或在后需要从配置中读取，参照ant-design-vue-->
      <button
        type="button"
        tabindex="-1"
        class="bs-picker-header-year-btn"
        :disabled="yearButtonDisabled"
        @click="onYearClick">{{ currentDateInfo.yearName }}</button>
      <button
        type="button"
        tabindex="-1"
        class="bs-picker-header-month-btn"
        :disabled="monthButtonDisabled"
        @click="onMonthClick">{{ currentDateInfo.monthName }}</button>
    </PanelHeader>
    <PanelBody
      :header-cells="tableHeader"
      :body-cells="tableBody"
      :get-row-classname="getRowClassname"
      :get-cell-text="setCellText"
      :get-cell-classname="setCellClassname"
      :get-cell-title="setCellTitle"
      :get-cell-node="setCellNode"
      :has-prefix-column="hasPrefixColumn"
      :external-data="{ panelViewDate }"
      @cell-click="onCellClick"></PanelBody>
  </div>
</template>

<script lang="ts">
import {
  ref,
  computed,
  watch,
  defineComponent,
  provide,
  PropType
} from 'vue';
import {
  isFunction,
  NOOP
} from '@vue/shared';
import dayjs, { Dayjs } from 'dayjs';
import { dayjsUtil, isLeapYear, getMonthDays } from '../../../../utils/dayjsUtil';
import PanelHeader from '../panel-header/PanelHeader.vue';
import PanelBody from '../panel-body/PanelBody.vue';
import { datePickerPrefixColumnSlotCtx } from '../../bs-date-picker-types';
import { usePanelViewDate } from '../../hooks/usePanelViewDate';
import { bsDatePanelProps } from './bs-date-panel-props';

const totalCell = 42; // 单元格总数, 6行 * 7天（一周）
const weekDayCount = 7;
const defaultFormat = 'YYYY-MM-DD';
const getDates = function (dayjsIns: Dayjs, count: number, yearMonth: string, disabledDate: (currentDate: Dayjs) => boolean) {
  let daysDateArr: any = [];
  let dayIndex = 1;
  while (dayIndex <= count) {
    let dayjsInsInner = dayjsUtil.setDate(dayjsIns, dayIndex);
    daysDateArr.push({
      dayjsIns: dayjsInsInner,
      id: dayjsInsInner.format(defaultFormat),
      disabled: typeof disabledDate === 'function' ? !!disabledDate(dayjsInsInner) : false,
      yearMonth
    });
    dayIndex++;
  }
  return daysDateArr;
};
/**
 * 获取指定月份面板中上一个月该显示的天数
 * @param date 当前日期
 * @param lang 国籍语言
 */
const getPrevMonthDayCount = function (date: Dayjs, lang:string) {
  // 周的第一天
  let firstDayOfWeek = dayjsUtil.locale.firstDayOfWeek(lang);
  // 月份的第一天
  let monthFirstDay = date.date(1);
  // 获取月份的第一天为星期几
  let firstDayOfWeekInMonth = monthFirstDay.day();
  firstDayOfWeekInMonth = firstDayOfWeekInMonth == 0 ? 7 : firstDayOfWeekInMonth;
  /*
     一周的起点为星期1：
       1号星期1，上一个月天数0 1-1=0
       1号星期2，上一个月天数1 1-2=-1
       1号星期3，上一个月天数2 1-3=-2
       1号星期4，上一个月天数3 1-4=-3
       1号星期5，上一个月天数4 1-5=-4
       1号星期6，上一个月天数5 1-6=-5
       1号星期7，上一个月天数6 1-7=-6
     一周的起点为星期天：
       1号星期1，上一个月天数1 0-1=-1
       1号星期2，上一个月天数2 0-2=-2
       1号星期3，上一个月天数3 0-3=-3
       1号星期4，上一个月天数4 0-4=-4
       1号星期5，上一个月天数5 0-5=-5
       1号星期6，上一个月天数6 0-6=-6
       1号星期7，上一个月天数0 0-7=-7
   */
  // 上一个月天数
  let prevMonthDaysCount = Math.abs(firstDayOfWeek - firstDayOfWeekInMonth);
  // 月份面板中显示的上一个月份天数不能大于等于7天
  prevMonthDaysCount = prevMonthDaysCount >= 7 ? 0 : prevMonthDaysCount;
  return prevMonthDaysCount;
};
export default defineComponent({
  name: 'BsDatePanel',
  components: {
    PanelHeader,
    PanelBody
  },
  props: {
    ...bsDatePanelProps
  },
  emits: ['update:modelValue', 'viewDateChange', 'cell-click'],
  setup (props: any, ctx: any) {
    let now = dayjs(); // 今天
    // 用于面板展示的日期
    let {
      panelViewDate,
      setPanelViewDate,
      getPanelViewDate
    } = usePanelViewDate(props, ctx);

    // date.value = dayjs('2022-02-01');
    // 周的第一天
    let weekFirstDay = computed(function () {
      let day = dayjsUtil.locale.firstDayOfWeek('zh-cn');
      return day;
    });
    // 当前日期信息
    let currentDateInfo = computed(function () {
      let currentDate = panelViewDate.value;
      let year = dayjsUtil.getYear(currentDate);
      let month = dayjsUtil.getMonth(currentDate);
      let day = dayjsUtil.getDate(currentDate);
      let monthNames = dayjsUtil.locale.monthsShort('zh-cn');
      return {
        year,
        // TODO 这里的format需要从语言配置中读取(参照ant-design-vue)
        yearName: dayjsUtil.locale.format(currentDate, 'zh-cn', 'YYYY年'),
        month,
        monthName: monthNames[month],
        day
      };
    });
    // 表头
    let tableHeader = computed(function () {
      let weeksName = dayjsUtil.locale.weekdaysMin('zh-cn');
      let firstDayOfWeek = weekFirstDay.value;
      let headers: Record<string, any>[] = [];
      if (props.hasPrefixColumn) {
        headers.push({
          text: ' '
        });
      }
      for (let i = 0; i < weeksName.length; i++) {
        headers.push({
          // 根据不同国家星期的第一天进行排序
          text: weeksName[(i + firstDayOfWeek) % weekDayCount]
        });
      }
      return headers;
    });
    let tableBody = computed(function () {
      let firstDayOfWeek = weekFirstDay.value;
      let dateArr: any[] = [];
      let currentDate = panelViewDate.value.clone();
      let year = dayjsUtil.getYear(currentDate);
      let month = dayjsUtil.getMonth(currentDate);
      // let day = dayjsUtil.getDate(currentDate);
      // 月份的第一天
      let monthFirstDay = currentDate.date(1);
      // 获取月份的第一天为星期几
      let firstDayOfWeekInMonth = monthFirstDay.day();
      // 当前月天数
      let currentMonthDaysCount = getMonthDays(year, month);
      // 上一个月天数
      // let prevMonthDaysCount = firstDayOfWeekInMonth - firstDayOfWeek;
      let prevMonthDaysCount = getPrevMonthDayCount(currentDate, 'zh-cn');
      // 下一个月天数
      let nextMonthDaysCount = totalCell - currentMonthDaysCount - prevMonthDaysCount;
      let disabledDate = props.disabledDate;

      let yearMonth = currentDate.format('YYYY-MM');
      let currentMonthDaDays: any[] = getDates(currentDate, currentMonthDaysCount, yearMonth, disabledDate);
      let nextMonthDaDays: any[] = getDates(dayjsUtil.setMonth(currentDate, month + 1), nextMonthDaysCount, yearMonth, disabledDate);
      let prevMonthDays: any[] = [];
      let dayIndex = 0; // 获取当前月份第一天的前一天下标是从0开始的
      while (dayIndex < prevMonthDaysCount) {
        let dayjsIns = dayjsUtil.setDate(currentDate, -dayIndex);
        let disabled = typeof disabledDate === 'function' ? !!disabledDate(dayjsIns) : false;
        prevMonthDays.unshift({
          dayjsIns,
          id: dayjsIns.format(defaultFormat),
          disabled,
          yearMonth
        });
        dayIndex++;
      }
      let allDates = [...prevMonthDays, ...currentMonthDaDays, ...nextMonthDaDays];
      // 拆分成2维数组
      while (allDates.length > 0) {
        dateArr.push([...allDates.splice(0, 7)]);
      }
      return dateArr;
    });
    // 单元格点击事件
    let onCellClick = function (cellData: any) {
      // let modelValue = props.modelValue;
      if (cellData.disabled) {
        return;
      }
      // 选择的是已经选中的日期则不进行后续操作
      // 不阻止已选中的日期再次被选中，如果这里阻止了，当用户切换面板后就无法切换回去了
      /* if (modelValue && (modelValue.format(defaultFormat) === cellData.dayjsIns.format(defaultFormat))) {
        return;
      } */
      ctx.emit('update:modelValue', cellData.dayjsIns);
      ctx.emit('cell-click', cellData);
    };

    provide(datePickerPrefixColumnSlotCtx, ctx);

    let dateRender = props.dateRender;
    return {
      currentDateInfo,
      panelViewDate,

      tableHeader,
      tableBody,
      // 设置单元格的classname
      setCellClassname (cellData: any, cellIndex: number, rowIndex: number, externalData: Record<string, any>) {
        let currentDate = panelViewDate.value;
        let modelValue = props.modelValue;
        let dayjsIns = cellData.dayjsIns;
        let classnames: string[] = [];
        if (currentDate.format('YYYY-MM') === dayjsIns.format('YYYY-MM')) {
          classnames.push('active-cell');
        }
        if (modelValue && (modelValue.format(defaultFormat) === dayjsIns.format(defaultFormat))) {
          classnames.push('is-selected');
        }
        if (dayjsIns.isToday()) {
          classnames.push('is-today');
        }
        if (cellData.disabled) {
          classnames.push('is-disabled');
        }
        let getCellClassnames = props.getCellClassname;
        if (isFunction(getCellClassnames)) {
          let extraCellClassnames = getCellClassnames(cellData, cellIndex, rowIndex, externalData);
          if (extraCellClassnames) {
            classnames.push(extraCellClassnames);
          }
        }
        return classnames;
      },
      setCellNode: props.dateRender ? (cellData: any) => {
        return dateRender(cellData);
      } : undefined,
      setCellText (cellData: any) {
        return cellData.dayjsIns.date();
      },
      setCellTitle (cellData: any) {
        let isToday = cellData.dayjsIns.isToday();
        return cellData.dayjsIns.format(defaultFormat) + (isToday ? '(今天)' : '');
      },

      onSuperPrev () {
        setPanelViewDate(dayjsUtil.addYear(panelViewDate.value, -1));
      },
      onPrev () {
        setPanelViewDate(dayjsUtil.addMonth(panelViewDate.value, -1));
      },
      onNext () {
        setPanelViewDate(dayjsUtil.addMonth(panelViewDate.value, 1));
      },
      onSuperNext () {
        setPanelViewDate(dayjsUtil.addYear(panelViewDate.value, 1));
      },
      onCellClick,
      setPanelViewDate (date: Dayjs) {
        setPanelViewDate(date, false);
      },
      getPanelViewDate,
      /**
       * 获取单元格单数据
       * @param rowIndex 行索引
       * @param cellIndex 单元格索引
       */
      getCellData (rowIndex: number, cellIndex: number) {
        let tableDataRaw = tableBody.value;
        if (rowIndex < 0 || cellIndex < 0) {
          return;
        }
        let rowData = tableDataRaw[rowIndex];
        return rowData?.[cellIndex];
      }
    };
  }
});
</script>

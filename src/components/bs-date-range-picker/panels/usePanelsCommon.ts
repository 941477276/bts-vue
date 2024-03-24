import { reactive, ref } from 'vue';
import { Dayjs, OpUnitType } from 'dayjs';
import { dayjsUtil, yearDecadeCount } from '../../../utils/dayjsUtil';
import { isFunction, parents } from '../../../utils/bs-util';

type PanelType = 'date' | 'week' | 'month' | 'year';
interface UsePanelsCommonOptions {
  props: any;
  ctx: any;
  setPanelViewDate: (startViewDate?: Dayjs|Date|null, endViewDate?: Dayjs|Date|null) => any;
}
const dateFormatMap: Record<PanelType, string> = {
  date: 'YYYY-MM-DD',
  week: '',
  month: 'YYYY-MM',
  year: 'YYYY'
};
// 日期比大小使用的单位
const dateCompareUtilMap: Record<PanelType, OpUnitType> = {
  date: 'date',
  week: 'week',
  month: 'month',
  year: 'year'
};

export const defaultTimeStr = '00:00:00'; // 默认时间
export const defaultTimes = {
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
};

// 根据时间获取时分秒的值
export function getTimeValueFromTimeString (timeStr: string) {
  if (timeStr == defaultTimeStr) {
    return defaultTimes;
  }
  let timeStrArr = timeStr.split(':');
  return {
    hour: parseInt(timeStrArr[0] || '0'),
    minute: parseInt(timeStrArr[1] || '0'),
    second: parseInt(timeStrArr[2] || '0'),
    millisecond: parseInt(timeStrArr[3] || '0')
  };
};

export function usePanelsCommon (panelType: PanelType, options = {} as UsePanelsCommonOptions) {
  let {
    props,
    ctx,
    setPanelViewDate
  } = options;
  let startDatePanelRef = ref();
  let endDatePanelRef = ref();
  let startDate = ref<Dayjs|null>(null);
  let endDate = ref<Dayjs|null>(null);

  let hoverStartDate = ref<Dayjs|null>(null);
  let hoverEndDate = ref<Dayjs|null>(null);
  // 鼠标移动时选择的结束日期是否比选中的开始日期要小
  let hoverEndIsBeforeStart = ref(false);
  let isHover = ref(false);
  // 给<panel-body>组件的额外数据（主要用于更新单元格的样式）
  let panelBodyExternalData = reactive({
    count: 0
  });

  // 日期输入的值
  let startDateInputValue = ref('');
  let endDateInputValue = ref('');

  let dateFormat = dateFormatMap[panelType];
  // 设置单元格classname
  let setCellClassname = function (cellData: any, cellIndex: number, rowIndex: number, externalData: Record<string, any>) {
    let dayjsIns = cellData.dayjsIns;
    let currentDateFormatted = dayjsIns.format(dateFormat);
    let classnames: string[] = [];
    let startDateRaw = startDate.value;
    let endDateRaw = endDate.value;

    let currentYear = dayjsIns.year();
    // 判断日期是否在显示的面板月份/年份中
    let dateIsInCurrentPanelViewMonth = false;
    switch (panelType) {
      case 'date':
        // let yearMonthFormat = 'YYYY-MM';
        let currentYearMonth = dayjsIns.format('YYYY-MM');
        dateIsInCurrentPanelViewMonth = currentYearMonth == cellData.yearMonth;
        break;
      case 'month':
        dateIsInCurrentPanelViewMonth = currentYear == cellData.year;
        break;
      case 'year':
        let decadeInfo = cellData.decade;
        dateIsInCurrentPanelViewMonth = (currentYear >= decadeInfo.startYear) && (currentYear <= decadeInfo.endYear);
        break;
    }

    if (startDateRaw?.format(dateFormat) == currentDateFormatted && dateIsInCurrentPanelViewMonth) {
      classnames.push('bs-picker-cell-range-start');
      if (!endDateRaw) {
        classnames.push('bs-picker-cell-range-start-single');
      }
    }
    if (endDateRaw?.format(dateFormat) == currentDateFormatted && dateIsInCurrentPanelViewMonth) {
      classnames.push('bs-picker-cell-range-end');
      if (!startDateRaw) {
        classnames.push('bs-picker-cell-range-end-single');
      }
    }
    // console.log('externalData', rowIndex, externalData);

    let compareUtil = dateCompareUtilMap[panelType];
    if (startDateRaw && endDateRaw) {
      // 日期在开始与结束日期之间且日期必须在当前显示的面板中
      if (dayjsUtil.isBetween(dayjsIns, startDateRaw, endDateRaw, compareUtil) && dateIsInCurrentPanelViewMonth) {
        // console.log(dayjsIns.format(format) + '在开始结束日期之间');
        classnames.push('bs-picker-cell-in-range');
      }
    }
    let hoverStartDateRaw = hoverStartDate.value;
    let hoverEndDateRaw = hoverEndDate.value;
    if (hoverStartDateRaw && hoverEndDateRaw) {
      let hoverStartEqualHoverEnd = hoverStartDateRaw.format(dateFormat) == hoverEndDateRaw.format(dateFormat);
      // console.log('dayjsIns, hoverStartDateRaw, hoverEndDateRaw', dayjsIns, hoverStartDateRaw, hoverEndDateRaw, dayjsUtil.isBetween(dayjsIns, hoverStartDateRaw, hoverEndDateRaw, compareUtil, '(]'));
      if (!hoverStartEqualHoverEnd && dayjsUtil.isBetween(dayjsIns, hoverStartDateRaw, hoverEndDateRaw, compareUtil, '(]') && dateIsInCurrentPanelViewMonth) {
        classnames.push('bs-picker-cell-range-hover');
      }
      if (!hoverStartEqualHoverEnd && hoverEndDateRaw.format(dateFormat) == currentDateFormatted && dateIsInCurrentPanelViewMonth) {
        classnames.push('bs-picker-cell-range-hover-end');
        if (hoverEndIsBeforeStart.value) {
          classnames.push('hover-end-is-before-hover-start');
        }
      }
    }
    let getCellClassname = props.getCellClassname;
    if (isFunction(getCellClassname)) {
      let classname = getCellClassname(cellData, cellIndex, rowIndex, externalData);
      if (!Array.isArray(classname)) {
        classnames.push(classname);
      } else {
        classnames.push(...classname);
      }
    }
    return classnames;
  };

  // 设置开始和结束时间
  let setStartAndEndDate = function (name: string, newDate: Dayjs|null) {
    let [defaultTimeStart, defaultTimeEnd] = props.defaultTime || [];
    if (!defaultTimeStart) {
      defaultTimeStart = defaultTimeStr;
    }
    if (!defaultTimeEnd) {
      defaultTimeEnd = defaultTimeStr;
    }
    let pickerType = props.pickerType;
    // 需要终止程序往下运行的pickerType
    let needBreakPickerTypeMaps: Record<PanelType, string> = {
      date: 'date',
      week: '',
      month: 'month',
      year: 'month'
    };
    let needBreakPicker = needBreakPickerTypeMaps[panelType];

    if (name == 'start' || name == 'startHover') {
      let startDateVar = name == 'startHover' ? hoverStartDate : startDate;
      if (pickerType == needBreakPicker) {
        startDateVar.value = newDate;
        return;
      }
      if (!newDate) {
        startDateVar.value = newDate;
        return;
      }
      if (panelType == 'date') {
        if (!startDateVar.value || name == 'startHover') {
          let times = getTimeValueFromTimeString(defaultTimeStart);
          // TODO 未考虑时分秒的禁用问题
          newDate = newDate.hour(times.hour).minute(times.minute).second(times.second).millisecond(times.millisecond);
        }
      }
      startDateVar.value = newDate;
      return;
    }
    if (name == 'end' || name == 'endHover') {
      let endDateVar = name == 'endHover' ? hoverEndDate : endDate;
      if (pickerType == needBreakPicker) {
        endDateVar.value = newDate;
        return;
      }
      if (!newDate) {
        endDateVar.value = newDate;
        return;
      }
      if (panelType == 'date') {
        if (!endDateVar.value || name == 'endHover') {
          let times = getTimeValueFromTimeString(defaultTimeEnd);
          // TODO 未考虑时分秒的禁用问题
          newDate = newDate.hour(times.hour).minute(times.minute).second(times.second).millisecond(times.millisecond);
        }
      }
      endDateVar.value = newDate;
      return;
    }
  };

  // 日期面板单元格点击事件
  let onDateCellClick = function (cellData: any) {
    console.log('onStartDateCellClick', cellData);
    /* if (dateSelectedCount > 1) {
      dateSelectedCount = 0;
    } */
    let startDateRaw = startDate.value;
    let endDateRaw = endDate.value;
    let update = function (start: Dayjs, end: Dayjs) {
      ctx.emit('update:modelValue', [start, end]);
    };

    let dayjsIns = cellData;
    // 如果hoverStartDate、hoverEndDate没有值，且startDate有值，那么就是modelValue有值
    let isNoHover = !hoverStartDate.value && !hoverEndDate.value;
    let compareUtil = dateCompareUtilMap[panelType];
    if (startDateRaw) {
      if (!endDateRaw) {
        console.log(111, startDate.value, endDate.value);
        let newStart = startDateRaw;
        let newEnd = dayjsIns;
        // hoverStartDate.value = hoverEndDate.value = null;
        // endDate.value = dayjsIns;
        setStartAndEndDate('startHover', null);
        setStartAndEndDate('endHover', null);
        if (isNoHover) {
          if (newEnd.isBefore(newStart, compareUtil)) {
            let temp = newStart;
            newStart = newEnd;
            newEnd = temp;
          }
          setStartAndEndDate('start', newStart);
          ctx.emit('previewDatesChange', [newStart, newEnd]);
        }
        setStartAndEndDate('end', newEnd);
        isHover.value = false;
        update(startDate.value!, endDate.value!);
      } else {
        console.log(222, startDate.value, endDate.value);
        /* startDate.value = hoverStartDate.value = dayjsIns; */
        setStartAndEndDate('startHover', dayjsIns);
        setStartAndEndDate('start', dayjsIns);
        /* endDate.value = hoverEndDate.value = null; */
        setStartAndEndDate('endHover', null);
        setStartAndEndDate('end', null);
      }
    } else {
      if (!endDateRaw) {
        /* startDate.value = hoverStartDate.value = dayjsIns; */
        setStartAndEndDate('startHover', dayjsIns);
        setStartAndEndDate('start', dayjsIns);
        /* endDate.value = hoverEndDate.value = null; */
        setStartAndEndDate('endHover', null);
        setStartAndEndDate('end', null);
        console.log(333, startDate.value, endDate.value);
      } else {
        let newStart = dayjsIns;
        let newEnd = endDateRaw;
        hoverStartDate.value = hoverEndDate.value = null;
        if (isNoHover) {
          if (newStart.isAfter(newEnd, compareUtil)) {
            let temp = newEnd;
            newEnd = newStart;
            newStart = temp;
            console.log('123456');
          }
          setStartAndEndDate('start', newStart);
          setStartAndEndDate('end', newEnd);
          ctx.emit('previewDatesChange', [newStart, newEnd]);
        } else {
          setStartAndEndDate('start', newStart);
        }
        // 当endDate有值，但startDate没有值，说明用户一开始框选的结束时间比开始时间要小，程序自动将开始时间变成了结束时间
        // startDate.value = dayjsIns;
        // setStartAndEndDate('start', dayjsIns);
        isHover.value = false;
        update(startDate.value!, endDate.value!);
        console.log(444, startDate.value, endDate.value);
      }
    }
    hoverEndIsBeforeStart.value = false;
  };

  // 鼠标移动事件
  let onPanelsWrapMousemove = function (evt: MouseEvent) {
    // console.log('onPanelsWrapMousemove 111', hoverStartDate.value);
    if (!hoverStartDate.value) {
      return;
    }
    let target = evt.target as HTMLElement;
    if (!target || target.nodeType != 1) {
      return;
    }
    // console.log('onPanelsWrapMousemove', evt.target);
    let parentTd = target.nodeName == 'TD' ? target : parents(target, 'bs-picker-cell');
    if (!parentTd) {
      return;
    }
    let rowIndex = (parentTd.dataset.rowIndex as any) * 1;
    let cellIndex = (parentTd.dataset.cellIndex as any) * 1;
    let panelRootEl = parents(target, 'bs-date-panel-assemble');
    let panelRef = panelRootEl === startDatePanelRef.value.$el ? startDatePanelRef.value : endDatePanelRef.value;
    let cellData = panelRef.getCellData(rowIndex, cellIndex);
    if (!cellData || cellData.disabled) {
      return;
    }
    isHover.value = true;
    let dayjsIns = cellData.dayjsIns;
    let startDateRaw = startDate.value;
    let endDateRaw = endDate.value;
    let compareUtil = dateCompareUtilMap[panelType];
    // console.log('onPanelsWrapMousemove 555', dayjsIns!.format(dateFormat));

    if (startDateRaw && dayjsIns.isBefore(startDateRaw, compareUtil)) {
      console.log('hover结束日期比选择的开始日期小');
      // endDate.value = startDateRaw;
      setStartAndEndDate('end', startDateRaw);
      // startDate.value = null;
      setStartAndEndDate('start', null);
      hoverEndIsBeforeStart.value = true;
    } else if (endDateRaw && dayjsIns.isAfter(endDateRaw, compareUtil)) {
      console.log('hover结束日期比选择的结束日期大');
      /* startDate.value = hoverStartDate.value;
      endDate.value = null; */
      setStartAndEndDate('start', hoverStartDate.value);
      setStartAndEndDate('end', null);
      hoverEndIsBeforeStart.value = false;
    }
    // hoverEndDate.value = dayjsIns;
    setStartAndEndDate('endHover', dayjsIns);
  };

  // 面板显示的日期切换事件
  let onViewDateChange = function (viewDate: Dayjs, panelName: string) {
    isHover.value = false;

    let [start, end] = props.modelValue;
    // 解决在hover过程中，用户切换了面板模式，面板模式切换完成后，再次点击日期变成了选中日期，而非重新选择日期问题
    if (!startDate.value || !endDate.value) {
      startDate.value = start || null;
      endDate.value = end || null;
    }

    hoverStartDate.value = hoverEndDate.value = null;

    console.log('面板显示的日期切换事件', viewDate);
    let panelViewDateStart: Dayjs|null = null;
    let panelViewDateEnd: Dayjs|null = null;
    switch (panelType) {
      case 'date':
        let compareUtil = 'month' as OpUnitType;
        if (panelName == 'start') {
          panelViewDateEnd = endDatePanelRef.value.getPanelViewDate();
          if (viewDate.isAfter(panelViewDateEnd, compareUtil) || viewDate.isSame(panelViewDateEnd, compareUtil)) {
            setPanelViewDate(viewDate, viewDate.month(viewDate.month() + 1));
          }
        } else {
          panelViewDateStart = startDatePanelRef.value.getPanelViewDate();
          if (viewDate.isBefore(panelViewDateStart, compareUtil) || viewDate.isSame(panelViewDateStart, compareUtil)) {
            setPanelViewDate(viewDate.month(viewDate.month() - 1), viewDate);
          }
        }
        break;
      case 'month':
        let compareUtil2 = 'year' as OpUnitType;
        if (panelName == 'start') {
          panelViewDateEnd = endDatePanelRef.value.getPanelViewDate();
          if (viewDate.isAfter(panelViewDateEnd, compareUtil2) || viewDate.isSame(panelViewDateEnd, compareUtil2)) {
            setPanelViewDate(viewDate, viewDate.year(viewDate.year() + 1));
          }
        } else {
          panelViewDateStart = startDatePanelRef.value.getPanelViewDate();
          if (viewDate.isBefore(panelViewDateStart, compareUtil2) || viewDate.isSame(panelViewDateStart, compareUtil2)) {
            setPanelViewDate(viewDate.year(viewDate.year() - 1), viewDate);
          }
        }
        break;
      case 'year':
        let viewDateYear = viewDate.year();
        if (panelName == 'start') {
          panelViewDateEnd = endDatePanelRef.value.getPanelViewDate();
          let panelViewDateEndYear = panelViewDateEnd!.year();
          if (viewDateYear - panelViewDateEndYear >= yearDecadeCount) {
            setPanelViewDate(viewDate, viewDate.year(viewDate.year() + yearDecadeCount));
          }
        } else {
          panelViewDateStart = startDatePanelRef.value.getPanelViewDate();
          let panelViewDateStartYear = panelViewDateStart!.year();
          if (viewDateYear - panelViewDateStartYear <= yearDecadeCount) {
            setPanelViewDate(viewDate.year(viewDate.year() - yearDecadeCount), viewDate);
          }
        }
        break;
    }
  };

  // 面板模式切换事件
  let onPanelModeChange = function () {
    isHover.value = false;

    let [start, end] = props.modelValue;
    // 解决在hover过程中，用户切换了面板模式，面板模式切换完成后，再次点击日期变成了选中日期，而非重新选择日期问题
    startDate.value = start || null;
    endDate.value = end || null;
    if (hoverStartDate.value) {
      hoverStartDate.value = null;
    }
    if (hoverEndDate.value) {
      hoverEndDate.value = null;
    }
    console.log('面板模式切换事件');
  };

  // 重置选中的日期
  let resetSelectedDates = function () {
    let [start, end] = props.modelValue;
    startDate.value = start || null;
    endDate.value = end || null;
    hoverStartDate.value = hoverEndDate.value = null;
    isHover.value = false;
    hoverEndIsBeforeStart.value = false;
  };

  // 结束日期禁用函数
  let dateDisabledStart = function (date: Dayjs) {
    let disabledDateFn = props.disabledDate;
    if (isFunction(disabledDateFn)) {
      return disabledDateFn({
        panel: 'start',
        current: date,
        range: [startDate.value?.clone(), endDate.value?.clone()]
      });
    }
    return false;
  };
  // 结束日期禁用函数
  let dateDisabledEnd = function (date: Dayjs) {
    let disabledDateFn = props.disabledDate;
    if (isFunction(disabledDateFn)) {
      return disabledDateFn({
        panel: 'end',
        current: date,
        range: [startDate.value?.clone(), endDate.value?.clone()]
      });
    }
    return false;
  };

  return {
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

    setCellClassname,
    resetSelectedDates,
    onDateCellClick,
    onPanelsWrapMousemove,
    onViewDateChange,
    onPanelModeChange,
    dateDisabledStart,
    dateDisabledEnd
  };
}

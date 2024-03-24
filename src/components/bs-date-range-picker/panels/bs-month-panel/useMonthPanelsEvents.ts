import { Dayjs } from 'dayjs';
import { parents } from '../../../../utils/bs-util';
import { dayjsUtil } from '../../../../utils/dayjsUtil';
import { Ref, SetupContext } from 'vue';

interface UseDatePanelsEventsOptions {
  ctx: any;
  props: any;
  dateFormat: string;
  hoverEndIsBeforeStart: Ref<boolean>;

  startDate: Ref<Dayjs|null>;
  endDate: Ref<Dayjs|null>;
  hoverStartDate: Ref<Dayjs|null>;
  hoverEndDate: Ref<Dayjs|null>;
  isHover: Ref<boolean>;

  startDatePanelRef: Ref<any>;
  endDatePanelRef: Ref<any>;
  setPanelViewDate: (startViewDate?: Dayjs|Date|null, endViewDate?: Dayjs|Date|null) => any;
};

export function useMonthPanelsEvents (options: UseDatePanelsEventsOptions) {
  let {
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
  } = options;

  // 根据时间获取时分秒的值
  /* let getTimeValueFromTimeString = function (timeStr: string) {
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
  }; */
  // 设置开始和结束时间
  let setStartAndEndDate = function (name: string, newDate: Dayjs|null) {
    let pickerType = props.pickerType;

    if (name == 'start' || name == 'startHover') {
      let startDateVar = name == 'startHover' ? hoverStartDate : startDate;
      if (pickerType == 'month') {
        startDateVar.value = newDate;
        return;
      }
      if (!newDate) {
        startDateVar.value = newDate;
        return;
      }
      /* if (!startDateVar.value || name == 'startHover') {
        let times = getTimeValueFromTimeString(defaultTimeStart);
        // TODO 未考虑时分秒的禁用问题
        newDate = newDate.hour(times.hour).minute(times.minute).second(times.second).millisecond(times.millisecond);
      } */
      startDateVar.value = newDate;
      return;
    }
    if (name == 'end' || name == 'endHover') {
      let endDateVar = name == 'endHover' ? hoverEndDate : endDate;
      if (pickerType == 'month') {
        endDateVar.value = newDate;
        return;
      }
      if (!newDate) {
        endDateVar.value = newDate;
        return;
      }
      /* if (!endDateVar.value || name == 'endHover') {
        let times = getTimeValueFromTimeString(defaultTimeEnd);
        // TODO 未考虑时分秒的禁用问题
        newDate = newDate.hour(times.hour).minute(times.minute).second(times.second).millisecond(times.millisecond);
      } */
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
    // TODO 日期时间选择器也钥加上这个判断
    // 如果hoverStartDate、hoverEndDate没有值，且startDate有值，那么就是modelValue有值
    let isNoHover = !hoverStartDate.value && !hoverEndDate.value;
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
          if (newEnd.isBefore(newStart, 'month')) {
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
          if (newStart.isAfter(newEnd, 'month')) {
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
    // console.log('onPanelsWrapMousemove', 444);
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
    // console.log('onPanelsWrapMousemove 555', dayjsIns!.format(dateFormat));

    if (startDateRaw && dayjsIns.isBefore(startDateRaw, 'month')) {
      console.log('hover结束日期比选择的开始日期小');
      // endDate.value = startDateRaw;
      setStartAndEndDate('end', startDateRaw);
      // startDate.value = null;
      setStartAndEndDate('start', null);
      hoverEndIsBeforeStart.value = true;
    } else if (endDateRaw && dayjsIns.isAfter(endDateRaw, 'month')) {
      console.log('hover结束日期比选择的结束日期大');
      /* startDate.value = hoverStartDate.value;
      endDate.value = null; */
      setStartAndEndDate('start', hoverStartDate.value);
      setStartAndEndDate('end', null);
      hoverEndIsBeforeStart.value = false;
    }
    // hoverEndDate.value = dayjsIns;
    console.log('onPanelsWrapMousemove end');
    setStartAndEndDate('endHover', dayjsIns);
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
    if (panelName == 'start') {
      panelViewDateEnd = endDatePanelRef.value.getPanelViewDate();
      if (viewDate.isAfter(panelViewDateEnd, 'year') || viewDate.isSame(panelViewDateEnd, 'year')) {
        setPanelViewDate(viewDate, viewDate.year(viewDate.year() + 1));
      }
    } else {
      panelViewDateStart = startDatePanelRef.value.getPanelViewDate();
      if (viewDate.isBefore(panelViewDateStart, 'year') || viewDate.isSame(panelViewDateStart, 'year')) {
        setPanelViewDate(viewDate.year(viewDate.year() - 1), viewDate);
      }
    }
  };

  return {
    onDateCellClick,
    onPanelModeChange,
    onPanelsWrapMousemove,
    onViewDateChange
  };
}

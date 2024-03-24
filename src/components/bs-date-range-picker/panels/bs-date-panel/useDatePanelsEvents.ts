import { Dayjs } from 'dayjs';
import { parents } from '../../../../utils/bs-util';
import { dayjsUtil } from '../../../../utils/dayjsUtil';
import { Ref, SetupContext } from 'vue';

interface UseDatePanelsEventsOptions {
  ctx: any;
  props: any;
  dateFormat: string;
  // hoverEndIsBeforeStart: Ref<boolean>;

  startDate: Ref<Dayjs|null>;
  endDate: Ref<Dayjs|null>;
  // hoverStartDate: Ref<Dayjs|null>;
  // hoverEndDate: Ref<Dayjs|null>;
  // isHover: Ref<boolean>;

  // startDatePanelRef: Ref<any>;
  // endDatePanelRef: Ref<any>;
  setPanelViewDate: (startViewDate?: Dayjs|Date|null, endViewDate?: Dayjs|Date|null) => any;
};

const defaultTimeStr = '00:00:00'; // 默认时间
const defaultTimes = {
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
};
export function useDatePanelsEvents (options: UseDatePanelsEventsOptions) {
  let {
    ctx,
    props,
    dateFormat,
    // hoverEndIsBeforeStart,

    startDate,
    endDate,
    // hoverStartDate,
    // hoverEndDate,
    // isHover,

    // startDatePanelRef,
    // endDatePanelRef,
    setPanelViewDate
  } = options;

  // 根据时间获取时分秒的值
  let getTimeValueFromTimeString = function (timeStr: string) {
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
  // 设置开始和结束时间
  /* let setStartAndEndDate = function (name: string, newDate: Dayjs|null) {
    let [defaultTimeStart, defaultTimeEnd] = props.defaultTime || [];
    if (!defaultTimeStart) {
      defaultTimeStart = defaultTimeStr;
    }
    if (!defaultTimeEnd) {
      defaultTimeEnd = defaultTimeStr;
    }
    let pickerType = props.pickerType;

    if (name == 'start' || name == 'startHover') {
      let startDateVar = name == 'startHover' ? hoverStartDate : startDate;
      if (pickerType == 'date') {
        startDateVar.value = newDate;
        return;
      }
      if (!newDate) {
        startDateVar.value = newDate;
        return;
      }
      if (!startDateVar.value || name == 'startHover') {
        let times = getTimeValueFromTimeString(defaultTimeStart);
        // TODO 未考虑时分秒的禁用问题
        newDate = newDate.hour(times.hour).minute(times.minute).second(times.second).millisecond(times.millisecond);
      }
      startDateVar.value = newDate;
      return;
    }
    if (name == 'end' || name == 'endHover') {
      let endDateVar = name == 'endHover' ? hoverEndDate : endDate;
      if (pickerType == 'date') {
        endDateVar.value = newDate;
        return;
      }
      if (!newDate) {
        endDateVar.value = newDate;
        return;
      }
      if (!endDateVar.value || name == 'endHover') {
        let times = getTimeValueFromTimeString(defaultTimeEnd);
        // TODO 未考虑时分秒的禁用问题
        newDate = newDate.hour(times.hour).minute(times.minute).second(times.second).millisecond(times.millisecond);
      }
      endDateVar.value = newDate;
      return;
    }
  };

  // 日期面板单元格点击事件
  let onDateCellClick = function (cellData: any) {
    console.log('onStartDateCellClick', cellData);
    /!* if (dateSelectedCount > 1) {
      dateSelectedCount = 0;
    } *!/
    let startDateRaw = startDate.value;
    let endDateRaw = endDate.value;
    let update = function (start: Dayjs, end: Dayjs) {
      ctx.emit('update:modelValue', [start, end]);
    };

    let dayjsIns = cellData;
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
          if (newEnd.isBefore(newStart, 'date')) {
            let temp = newStart;
            newStart = newEnd;
            newEnd = temp;
          }
          setStartAndEndDate('start', newStart);
          ctx.emit('previewDatesChange', [newStart, newEnd]);
        }
        setStartAndEndDate('end', dayjsIns);
        isHover.value = false;
        update(startDate.value!, endDate.value!);
      } else {
        console.log(222, startDate.value, endDate.value);
        /!* startDate.value = hoverStartDate.value = dayjsIns; *!/
        setStartAndEndDate('startHover', dayjsIns);
        setStartAndEndDate('start', dayjsIns);
        /!* endDate.value = hoverEndDate.value = null; *!/
        setStartAndEndDate('endHover', null);
        setStartAndEndDate('end', null);
      }
    } else {
      if (!endDateRaw) {
        /!* startDate.value = hoverStartDate.value = dayjsIns; *!/
        setStartAndEndDate('startHover', dayjsIns);
        setStartAndEndDate('start', dayjsIns);
        /!* endDate.value = hoverEndDate.value = null; *!/
        setStartAndEndDate('endHover', null);
        setStartAndEndDate('end', null);
        console.log(333, startDate.value, endDate.value);
      } else {
        let newStart = dayjsIns;
        let newEnd = endDateRaw;
        hoverStartDate.value = hoverEndDate.value = null;
        if (isNoHover) {
          if (newStart.isAfter(newEnd, 'date')) {
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
    // console.log('onPanelsWrapMousemove 555', dayjsIns!.format(dateFormat));

    if (startDateRaw && dayjsIns.isBefore(startDateRaw, 'date')) {
      console.log('hover结束日期比选择的开始日期小');
      // endDate.value = startDateRaw;
      setStartAndEndDate('end', startDateRaw);
      // startDate.value = null;
      setStartAndEndDate('start', null);
      hoverEndIsBeforeStart.value = true;
    } else if (endDateRaw && dayjsIns.isAfter(endDateRaw, 'date')) {
      console.log('hover结束日期比选择的结束日期大');
      /!* startDate.value = hoverStartDate.value;
      endDate.value = null; *!/
      setStartAndEndDate('start', hoverStartDate.value);
      setStartAndEndDate('end', null);
      hoverEndIsBeforeStart.value = false;
    }
    // hoverEndDate.value = dayjsIns;
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
  }; */

  // 获取时间信息
  let getTimes = function (dayjsIns: Dayjs) {
    return {
      hour: dayjsIns.hour(),
      minute: dayjsIns.minute(),
      second: dayjsIns.second(),
      millisecond: dayjsIns.millisecond()
    };
  };

  // 面板显示的日期切换事件
  /* let onViewDateChange = function (viewDate: Dayjs, panelName: string) {
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
      if (viewDate.isAfter(panelViewDateEnd, 'month') || viewDate.isSame(panelViewDateEnd, 'month')) {
        setPanelViewDate(viewDate, viewDate.month(viewDate.month() + 1));
      }
    } else {
      panelViewDateStart = startDatePanelRef.value.getPanelViewDate();
      if (viewDate.isBefore(panelViewDateStart, 'month') || viewDate.isSame(panelViewDateStart, 'month')) {
        setPanelViewDate(viewDate.month(viewDate.month() - 1), viewDate);
      }
    }
  }; */
  // 日期输入框输入事件
  let onDateInput = function (evt: InputEvent, inputName: string) {
    let value = (evt.target as HTMLInputElement).value;
    console.log('onDateInput', value, inputName);
    let startDateRaw = startDate.value;
    let endDateRaw = endDate.value;
    let newStartDate = startDateRaw;
    let newEndDate = endDateRaw;
    if (inputName == 'start') {
      let startDayjsIns = dayjsUtil.strictDayjs(value, dateFormat);
      if (startDayjsIns.isValid()) {
        newStartDate = startDayjsIns;
        if (startDateRaw) {
          let times = getTimes(startDateRaw);
          newStartDate = startDayjsIns.hour(times.hour).minute(times.minute).second(times.second).millisecond(times.millisecond);
        }
        if (!endDateRaw) {
          newEndDate = newStartDate.clone();
        }
        if (newStartDate.isAfter(newEndDate!)) {
          newEndDate = newStartDate!.date(newStartDate!.date() + 1);
        }
      }
    } else {
      let endDayjsIns = dayjsUtil.strictDayjs(value, dateFormat);
      console.log('endDayjsIns.isValid()', endDayjsIns.isValid());
      if (endDayjsIns.isValid()) {
        newEndDate = endDayjsIns;
        if (endDateRaw) {
          let times = getTimes(endDateRaw);
          newEndDate = endDayjsIns.hour(times.hour).minute(times.minute).second(times.second).millisecond(times.millisecond);
        }
        if (!startDateRaw) {
          startDateRaw = newEndDate.clone();
        }
        if (newEndDate.isBefore(newStartDate!)) {
          newStartDate = newEndDate!.date(newEndDate!.date() - 1);
        }
      }
    }
    console.log('onDateInput', 555, newStartDate, newEndDate, newStartDate != startDateRaw, newEndDate != endDateRaw);
    if (newStartDate && newEndDate && (newStartDate != startDateRaw || newEndDate != endDateRaw)) {
      console.log('onDateInput', 666);
      startDate.value = newStartDate;
      endDate.value = newEndDate;
      // hoverStartDate.value = newStartDate;
      // hoverEndDate.value = endDateRaw;
      setPanelViewDate(newStartDate, newEndDate);
      ctx.emit('previewDatesChange', [newStartDate, newEndDate]);
      ctx.emit('update:modelValue', [newStartDate, newEndDate]);
    }
  };

  // 时间改变事件
  let onTimeChange = function (timeValue: Dayjs, name: string) {
    console.log('onTimeChange', timeValue, name);
    let startDateRaw = startDate.value;
    let endDateRaw = endDate.value;
    let newStartDate = startDateRaw;
    let newEndDate = endDateRaw;
    if (name == 'start') {
      if (!startDateRaw) {
        newStartDate = timeValue;
        if (!newEndDate) {
          newEndDate = newStartDate.clone();
        }
      } else {
        let times = getTimes(timeValue);
        newStartDate = startDateRaw.hour(times.hour).minute(times.minute).second(times.second).millisecond(times.millisecond);
        if (!endDateRaw) {
          newEndDate = newStartDate.clone();
        } else if (newStartDate.isAfter(newEndDate)) { // 开始时间比结束时间大
          newEndDate = newEndDate!.hour(times.hour + 1);
        }
      }
    } else {
      if (!endDateRaw) {
        newEndDate = timeValue;
        if (!endDateRaw) {
          endDateRaw = newEndDate.clone();
        }
      } else {
        let times = getTimes(timeValue);
        newEndDate = endDateRaw.hour(times.hour).minute(times.minute).second(times.second).millisecond(times.millisecond);
        if (!startDateRaw) {
          newStartDate = newEndDate.clone();
        } else if (newEndDate.isBefore(newStartDate)) { // 结束时间比开始时间小
          newStartDate = newEndDate!.hour(times.hour - 1);
        }
      }
    }
    if (newStartDate && newEndDate && (newStartDate != startDateRaw || newEndDate != endDateRaw)) {
      startDate.value = newStartDate;
      endDate.value = newEndDate;
      ctx.emit('previewDatesChange', [newStartDate, newEndDate]);
      ctx.emit('update:modelValue', [newStartDate, newEndDate]);
    }
  };
  return {
    onDateInput,
    // onDateCellClick,
    // onPanelModeChange,
    // onPanelsWrapMousemove,
    // onViewDateChange,
    onTimeChange
  };
}

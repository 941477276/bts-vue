import {
  defineComponent,
  PropType,
  ref,
  Ref,
  watch,
  provide,
  computed,
  VNode,
  nextTick,
  toRef
} from 'vue';
import {
  isFunction
} from '@vue/shared';
import BsCommonRangePicker from './BsCommonRangePicker.vue';
import {
  bsDateRangePickerTypes,
  allowedPickerType
} from './bs-date-range-picker-types';
import { datePickerCtx } from '../bs-date-picker/bs-date-picker-types';
import BsDatePanels from './panels/bs-date-panel/BsDatePanels.vue';
import BsMonthPanels from './panels/bs-month-panel/BsMonthPanels.vue';
import BsYearPanels from './panels/bs-year-panel/BsYearPanels.vue';
/* import BsQuarterPanel from './panels/bs-quarter-panel/BsQuarterPanel.vue';
import BsYearPanel from './panels/bs-year-panel/BsYearPanel.vue';
import BsDecadePanel from './panels/bs-decade-panel/BsDecadePanel.vue'; */
// import BsWeekPanel from './panels/bs-week-panel/BsWeekPanel.vue';
import BsButton from '../bs-button/BsButton.vue';
import dayjs, { Dayjs } from 'dayjs';
import { dayjsUtil, formatDate } from '../../utils/dayjsUtil';
import { getUpdateModelValue } from '../../components/bs-time-picker/useTimePicker';
import { useDeliverContextToFormItem } from '../../hooks/useDeliverContextToFormItem';
import { isNumber } from '../../utils/bs-util';

let pickerCounts: any = {
  date: 0,
  week: 0,
  month: 0,
  quarter: 0,
  year: 0,
  dateTime: 0
};
const defaultFormatMap: any = {
  date: 'YYYY-MM-DD',
  dateTime: 'YYYY-MM-DD',
  week: 'YYYY-wo',
  month: 'YYYY-MM',
  quarter: 'YYYY-[Q]Q',
  year: 'YYYY'
};

export default defineComponent({
  name: 'BsDateRangePicker',
  props: {
    ...bsDateRangePickerTypes
  },
  emits: ['update:modelValue', 'change', 'show', 'hide'],
  setup (props: any, ctx: any) {
    let bsCommonPicker = ref();
    let pickerId = ref(props.id || `bs-${props.pickerType}-picker_${++pickerCounts[props.pickerType]}`);
    let visible = ref(false);
    let now = dayjs();

    // 格式模板
    let formatInner = computed(function () {
      let {
        format,
        pickerType,
        timePanelProps
      } = props;
      if (format) {
        return format;
      }

      let formatValue = defaultFormatMap[pickerType];
      if (pickerType == 'dateTime') {
        formatValue += timePanelProps?.use12Hours ? ' hh:mm:ss' : ' HH:mm:ss';
      }
      return formatValue;
    });

    // 面板当前状态
    let currentMode = ref('');
    // let prevMode = ref(''); // 上一步的面板状态
    /* let setCurrentMode = function (mode: string) {
      // 在宏任务中切换面板状态，防止错误的判断鼠标点击到了面板外面
      let timer = setTimeout(function () {
        clearTimeout(timer);
        prevMode.value = currentMode.value;
        currentMode.value = mode;
      }, 0);
    }; */

    let date = ref<Dayjs|null>();
    let dates = ref<(Dayjs|null)[]>([]);
    // 临时选中的日期
    let tempDates = ref<Dayjs[]>([]);
    // 用于预览的数据
    let viewDates = ref<(Dayjs|null)[]>([]);
    // 显示的文本
    let viewDateText = ref<string[]>([]);
    // 判断显示的日期是否禁用或在禁用范围内
    let viewDatesIsDisabled = ref<boolean[]>([false, false]);
    let setViewDateTxt = function (dates: (Dayjs|null)[]) {
      if (dates.length == 0) {
        viewDateText.value = [];
        viewDatesIsDisabled.value = [false, false];
        return;
      }
      let format = formatInner.value;
      let dayjsInsStart;
      let dayjsInsEnd;
      let pickerType = props.pickerType;
      if (pickerType == 'quarter') {
        dayjsInsStart = dayjsUtil.parseQuarter(dates[0], format);
        dayjsInsEnd = dayjsUtil.parseQuarter(dates[1], format);
      } else if (pickerType == 'week') {
        dayjsInsStart = dayjsUtil.parseWeek(dates[0], format, 'zh-cn');
        dayjsInsEnd = dayjsUtil.parseWeek(dates[1], format, 'zh-cn');
      } else {
        dayjsInsStart = dayjsUtil.parseToDayjs(dates[0], format);
        dayjsInsEnd = dayjsUtil.parseToDayjs(dates[1], format);
      }

      let viewTextStart = '';
      let viewTextEnd = '';
      if (pickerType == 'dateTime' && !props.format) {
        let { timePanelProps, datePanelProps } = props;
        let timePanelFormat = timePanelProps.format;
        let datePanelFormat = datePanelProps.format;
        if (!datePanelFormat) {
          datePanelFormat = 'YYYY-MM-DD';
        }
        if (!timePanelFormat) {
          timePanelFormat = timePanelProps.user12Hours ? 'hh:mm:ss' : 'HH:mm:ss';
        }
        format = datePanelFormat + props.formatSpliter + timePanelFormat;
        viewTextStart = dayjsUtil.locale.format(dayjsInsStart, 'en', format);
        viewTextEnd = dayjsUtil.locale.format(dayjsInsEnd, 'en', format);
      } else {
        viewTextStart = dayjsInsStart ? dayjsInsStart.format(format) : '';
        viewTextEnd = dayjsInsEnd ? dayjsInsEnd.format(format) : '';
      }

      viewDateText.value = [viewTextStart, viewTextEnd];
      let disabledDate = props.disabledDate;
      if (isFunction(disabledDate)) {
        let viewDatesIsDisabledRaw = viewDatesIsDisabled.value;
        viewDatesIsDisabledRaw[0] = dayjsInsStart ? !!disabledDate({
          panel: 'start',
          current: dayjsInsStart,
          range: [dayjsInsStart, dayjsInsEnd]
        }) : false;
        viewDatesIsDisabledRaw[1] = dayjsInsEnd ? !!disabledDate({
          panel: 'start',
          current: dayjsInsEnd,
          range: [dayjsInsStart, dayjsInsEnd]
        }) : false;
      }
    };

    watch(() => props.modelValue, function (modelValue: (Dayjs|string)[]) {
      if (!modelValue || modelValue.length == 0) {
        dates.value = [];
      } else {
        let dayjsInsStart: Dayjs|null = null;
        let dayjsInsEnd: Dayjs|null = null;
        let [valueStart, valueEnd] = modelValue;
        /* let valueStartType = getType(valueStart);
        let valueEndType = getType(valueEnd); */
        let pickerType = props.pickerType;
        let format = formatInner.value;
        let valueFormat = props.valueFormat;
        if (props.pickerType == 'quarter') {
          dayjsInsStart = dayjsUtil.parseQuarter(valueStart, valueFormat || format);
          dayjsInsEnd = dayjsUtil.parseQuarter(valueEnd, valueFormat || format);
        } else if (pickerType == 'week') {
          dayjsInsStart = dayjsUtil.parseWeek(valueStart, valueFormat || format, 'zh-cn');
          dayjsInsEnd = dayjsUtil.parseWeek(valueEnd, valueFormat || format, 'zh-cn');
        } else {
          if (pickerType == 'dateTime') {
            let { timePanelProps, datePanelProps } = props;
            let timePanelValueFormat = timePanelProps.valueFormat;
            let datePanelValueFormat = datePanelProps.valueFormat;
            let tempFormat = '';
            if (timePanelValueFormat && datePanelValueFormat) {
              tempFormat = datePanelValueFormat + props.valueFormatSpliter + timePanelValueFormat;
            }
            let getDayjsInsByValue = function (dateTimeValue: string) {
              console.log('getDayjsInsByValue日期格式：', tempFormat, format);
              let dateTemp = dayjsUtil.parseToDayjs(dateTimeValue, tempFormat || format);
              if (!dateTemp) {
                return null;
              }
              let hour = dateTemp.hour();
              let periods = '';
              if (dateTimeValue.endsWith('PM')) {
                periods = 'PM';
              }
              if (dateTimeValue.endsWith('AM')) {
                periods = 'AM';
              }
              if (timePanelProps.use12Hours && !dateTimeValue.endsWith('PM') && !dateTimeValue.endsWith('AM')) {
                periods = hour > 12 ? 'PM' : 'AM';
                valueStart += ' ' + periods;
              }
              if (periods == 'AM' && hour > 12) {
                dateTemp = dateTemp.hour(hour - 12);
              }
              if (periods == 'PM' && hour < 12) {
                dateTemp = dateTemp.hour(hour + 12);
              }
              if (timePanelProps.use12Hours) {
                let newHour = dateTemp.hour();
                if (newHour > 12) {
                  dateTemp = dateTemp.hour(newHour - 12);
                }
              }
              return dateTemp;
            };
            if (typeof valueStart == 'string') {
              dayjsInsStart = getDayjsInsByValue(valueStart.toUpperCase());
            }
            if (typeof valueEnd == 'string') {
              dayjsInsEnd = getDayjsInsByValue(valueEnd.toUpperCase());
            }
          }
          if (!dayjsInsStart) {
            dayjsInsStart = dayjsUtil.parseToDayjs(valueStart, valueFormat || format);
          }
          if (!dayjsInsEnd) {
            dayjsInsEnd = dayjsUtil.parseToDayjs(valueEnd, valueFormat || format);
          }
        }
        dates.value = [dayjsInsStart, dayjsInsEnd];
      }

      setViewDateTxt(dates.value);
      viewDates.value = dates.value.slice();
    }, { immediate: true });

    // 输入框提示文字
    let inputPlaceholder = computed(function () {
      let placeholder = props.placeholder;
      if (typeof placeholder == 'string' && placeholder.length > 0) {
        return [placeholder];
      }
      if (Array.isArray(placeholder) && placeholder.length > 0) {
        return placeholder;
      }
      let picker = props.pickerType;
      let pickerText = '';
      switch (picker) {
        case 'date':
          pickerText = '日期';
          break;
        case 'dateTime':
          pickerText = '日期时间';
          break;
        case 'week':
          pickerText = '周';
          break;
        case 'month':
          pickerText = '月份';
          break;
        case 'quarter':
          pickerText = '季度';
          break;
        case 'year':
          pickerText = '年份';
          break;
      }
      return [
        '开始' + pickerText,
        '结束' + pickerText
      ];
    });

    /* // 是否显示footer
    let footerVisible = computed(function () {
      let pickerType = props.pickerType;
      let showFooter = props.showFooter;
      if (typeof showFooter !== 'boolean') {
        if (pickerType == 'date' || pickerType == 'dateTime') {
          return true;
        }
      }
      return !!showFooter;
    }); */

    // 组件ref
    let dateRef = ref<any>(null);
    let weekRef = ref<any>(null);
    let monthRef = ref<any>(null);
    let yearRef = ref<any>(null);
    let quarterRef = ref<any>(null);
    let decadeRef = ref<any>(null);
    let dateTimeRef = ref<any>(null);
    let refs: { [key: string]: Ref<any> } = {
      dateRef,
      weekRef,
      monthRef,
      yearRef,
      quarterRef,
      decadeRef,
      dateTimeRef
    };

    // 设置值
    let setDate = function (newDates?: Dayjs[]) {
      console.log('setDate 11');
      if (!newDates || newDates.length == 0) {
        dates.value = [];
        ctx.emit('update:modelValue', []);
        ctx.emit('change', [], null);
        callFormItem('validate', 'change');
        return;
      }
      console.log('setDate 22');
      let [newDateStart, newDateEnd] = newDates;
      if (newDateStart instanceof Date || isNumber(newDateStart)) {
        newDateStart = dayjs(newDateStart);
      }
      if (newDateEnd instanceof Date || isNumber(newDateStart)) {
        newDateEnd = dayjs(newDateEnd);
      }
      let [originDateStart, originDateEnd] = dates.value;
      let valueFormat = props.valueFormat;
      let startValue;
      let endValue;

      let disabledDate = props.disabledDate;
      let startValueDisabled = false;
      let endValueDisabled = false;
      let getDateDisabled = function (dayjsIns: Dayjs, panelName: string, range: Dayjs[]) {
        if (isFunction(disabledDate)) {
          return !!disabledDate({
            panel: panelName,
            current: dayjsIns,
            range
          });
        }
        return false;
      };
      if (props.pickerType == 'dateTime' && !valueFormat) {
        let periodStart = '';
        let periodEnd = '';
        let timePanelProps = props.timePanelProps;
        let datePanelProps = props.datePanelProps;
        let use12Hours = timePanelProps.use12Hours;

        console.log('setDate 33');
        if (!timePanelProps.valueFormat || !datePanelProps.valueFormat) {
          startValue = newDateStart.clone();
          endValue = newDateEnd.clone();
          let range = [startValue, endValue];
          startValueDisabled = getDateDisabled(startValue, 'start', range);
          endValueDisabled = getDateDisabled(endValue, 'end', range);
        } else {
          if (use12Hours) {
            periodStart = newDateStart.hour() > 12 ? 'pm' : 'am';
            periodEnd = newDateEnd.hour() > 12 ? 'pm' : 'am';
          }
          let { disabledHours, disabledMinutes, disabledSeconds } = timePanelProps;
          let timeValueStart = getUpdateModelValue({
            valueFormat: timePanelProps.valueFormat,
            // valueFormat: valueFormat,
            use12Hours,
            date: newDateStart,
            period: periodStart,
            originDate: originDateStart!,
            disabledFns: {
              disabledHours,
              disabledMinutes,
              disabledSeconds
            }
          });
          let timeValueEnd = getUpdateModelValue({
            valueFormat: timePanelProps.valueFormat,
            // valueFormat: valueFormat,
            use12Hours,
            date: newDateEnd,
            period: periodEnd,
            originDate: originDateEnd!,
            disabledFns: {
              disabledHours,
              disabledMinutes,
              disabledSeconds
            }
          });
          let valueFormat = props.datePanelProps;
          let dateValueStart = newDateStart.format(valueFormat);
          let dateValueEnd = newDateEnd.format(valueFormat);
          startValue = dateValueStart + ' ' + timeValueStart;
          endValue = dateValueEnd + ' ' + timeValueEnd;
          let range = [newDateStart, newDateEnd];
          startValueDisabled = getDateDisabled(newDateStart, 'start', range);
          endValueDisabled = getDateDisabled(newDateEnd, 'end', range);
        }
      } else {
        let range = [newDateStart, newDateEnd];
        startValueDisabled = getDateDisabled(newDateStart, 'start', range);
        endValueDisabled = getDateDisabled(newDateEnd, 'end', range);
        if (!valueFormat) {
          startValue = newDateStart.clone();
          endValue = newDateEnd.clone();
        } else {
          startValue = newDateStart.format(valueFormat);
          endValue = newDateEnd.format(valueFormat);
        }
      }
      console.log('valueFormat', valueFormat);

      // let value = !valueFormat ? date.clone() : date.format(valueFormat);
      let modelValue = props.modelValue || [];
      let result: any[] = [];
      console.log('setDate', startValueDisabled, endValueDisabled);
      // 防止用户输入的日期是被禁用的
      result[0] = startValueDisabled ? modelValue[0] : startValue;
      result[1] = endValueDisabled ? modelValue[1] : endValue;

      let datesRaw = dates.value;
      // let newDates2: Dayjs[] = [];
      datesRaw[0] = startValueDisabled ? datesRaw[0] : newDateStart;
      datesRaw[1] = endValueDisabled ? datesRaw[1] : newDateEnd;
      // dates.value = newDates2;
      console.log('setDate 44');
      ctx.emit('update:modelValue', result);
      ctx.emit('change', result);
      callFormItem('validate', 'change');
    };
    // 设置面板显示的日期
    let setPanelViewDate = function (startDate: Date|Dayjs, endDate?: Date|Dayjs) {
      let mode = currentMode.value || props.pickerType;
      refs[mode + 'Ref']?.value?.setPanelViewDate(startDate, endDate);
    };
    // 清空内容
    let clear = function () {
      setDate();
    };
    // 隐藏下拉面板
    let hide = function (delay = 0) {
      if (delay > 0) {
        let timer = setTimeout(function () {
          clearTimeout(timer);
          (bsCommonPicker.value as any)?.showDropdown(false);
        }, delay);
        return;
      }
      (bsCommonPicker.value as any)?.showDropdown(false);
    };
    // 显示下拉面板
    let show = function () {
      (bsCommonPicker.value as any)?.showDropdown(true);
    };

    //  日期控件model-value值改变事件
    let onDatePanelModelValueChange = function (newDates: Dayjs|Dayjs[], hideDropdown: boolean) {
      console.log('onDatePanelModelValueChange', 1111, newDates, hideDropdown);
      tempDates.value = newDates as Dayjs[];
    };

    // 判断时间是否被禁用
    let checkTimeAvailable = function (dayjsIns: Dayjs, use12Hours: boolean) {
      let hour = dayjsIns.hour();
      let minute = dayjsIns.minute();
      let second = dayjsIns.second();
      let { disabledHours, disabledMinutes, disabledSeconds } = props.timePanelProps;
      // 如果时分秒被禁用，则用来的时分秒
      let hourDisabled = isFunction(disabledHours) && !!disabledHours(hour, use12Hours);
      let minuteDisabled = isFunction(disabledMinutes) && !!disabledMinutes(hour, minute, use12Hours);
      let secondDisabled = isFunction(disabledSeconds) && !!disabledSeconds(hour, minute, second, use12Hours);
      return {
        hourDisabled,
        minuteDisabled,
        secondDisabled
      };
    };

    // 开启输入与操作同步功能
    let isInputTextValid = true;
    // 输入框输入事件
    let onInput = function (value: string[], evt: InputEvent, inputName: string) {
      console.log('onInput 11');
      if (value.length == 0) {
        isInputTextValid = false;
        return;
      }
      let formatStart = formatInner.value;
      let formatEnd = formatInner.value;
      let pickerType = props.pickerType;
      let disabledDate = props.disabledDate;

      let startDateIns;
      let endDateIns;
      let periodsStart = '';
      let periodsEnd = '';
      let use12Hours = props.timePanelProps.use12Hours;
      isInputTextValid = false;
      /* if (pickerType == 'quarter' || pickerType == 'week') {
        let dayjsIns = pickerType == 'quarter' ? dayjsUtil.parseQuarter(value, format) : dayjsUtil.parseWeek(value, format, 'zh-cn');
        if (!dayjsIns) {
          return;
        }
        if (isFunction(disabledDate)) {
          let flag = false;
          if (pickerType == 'quarter') {
            let quarterName = dayjsUtil.locale.format(dayjsIns, 'zh-cn', '[Q]Q');
            flag = disabledDate(dayjsIns.quarter(), quarterName);
          } else {
            flag = disabledDate(dayjsIns);
          }
          if (flag) {
            return;
          }
        }
        setDate(dayjsIns);
        isInputTextValid = true;
        return;
      } */

      let [valueStart, valueEnd] = value;
      if (pickerType == 'dateTime' && typeof valueStart == 'string' && use12Hours) {
        let upperCaseValueStart = valueStart.toUpperCase();
        let upperCaseValueEnd = valueEnd.toUpperCase();
        if (upperCaseValueStart.endsWith('AM')) {
          valueStart = valueStart.replace(/AM/i, '').trim();
          periodsStart = 'AM';
        } else if (upperCaseValueStart.endsWith('PM')) {
          valueStart = valueStart.replace(/PM/i, '').trim();
          periodsStart = 'PM';
        }
        if (upperCaseValueEnd.endsWith('AM')) {
          valueEnd = valueEnd.replace(/AM/i, '').trim();
          periodsEnd = 'AM';
        } else if (upperCaseValueEnd.endsWith('PM')) {
          valueEnd = valueEnd.replace(/PM/i, '').trim();
          periodsEnd = 'PM';
        }
        if (periodsStart) {
          formatStart = formatStart.replace(/[a|p]/ig, '').trim();
        }
        if (periodsEnd) {
          formatEnd = formatEnd.replace(/[a|p]/ig, '').trim();
        }
      }
      // 开启严格校验，如不开启严格校验，当遇到格式如HH:mm:ss，输入框初始值为11:03:20，用户想改成11:30:20，当用户选中“03”然后再输入“3”时值就改变了
      if (!startDateIns) {
        startDateIns = dayjsUtil.strictDayjs(valueStart, formatStart);
      }
      if (!endDateIns) {
        endDateIns = dayjsUtil.strictDayjs(valueEnd, formatEnd);
      }
      console.log('date valid', startDateIns.isValid(), endDateIns.isValid());
      if (startDateIns.isValid() && endDateIns.isValid()) {
        console.log('onInput 22');
        if (isFunction(disabledDate)) {
          let range = [startDateIns, endDateIns];
          if (disabledDate({
            current: startDateIns,
            type: 'start',
            range
          }) && inputName == 'start') {
            return;
          }
          if (disabledDate({
            current: endDateIns,
            type: 'end',
            range
          }) && inputName == 'end') {
            return;
          }
        }
        // 结束日期不能小于开始日期
        if (endDateIns.isBefore(startDateIns)) {
          return;
        }
        console.log('onInput 33');
        if (pickerType == 'dateTime') {
          let startHour = startDateIns.hour();
          let endHour = endDateIns.hour();
          if (periodsStart == 'AM') {
            if (startHour > 12) {
              startDateIns = startDateIns.hour(startHour - 12);
            }
          } else if (periodsStart == 'PM') {
            if (startHour < 12) {
              startDateIns = startDateIns.hour(startHour + 12);
            }
          }
          if (periodsEnd == 'AM') {
            if (endHour > 12) {
              endDateIns = endDateIns.hour(endHour - 12);
            }
          } else if (periodsEnd == 'PM') {
            if (endHour < 12) {
              endDateIns = endDateIns.hour(endHour + 12);
            }
          }

          let startTimeAvailable = checkTimeAvailable(startDateIns, use12Hours);
          let endTimeAvailable = checkTimeAvailable(endDateIns, use12Hours);
          if (startTimeAvailable.hourDisabled || startTimeAvailable.minuteDisabled || startTimeAvailable.secondDisabled || endTimeAvailable.hourDisabled || endTimeAvailable.minuteDisabled || endTimeAvailable.secondDisabled) {
            return;
          }
        }

        setDate([startDateIns, endDateIns]);
        isInputTextValid = true;
      } else {
        isInputTextValid = false;
      }
    };
    let onInputBlur = function () {
      if (!isInputTextValid) {
        setViewDateTxt(props.modelValue);
      }
    };

    // 设置输入框校验状态
    let setValidateStatus = function (status: string) {
      (bsCommonPicker.value as any)?.setValidateStatus(status);
    };

    let { callFormItem } = useDeliverContextToFormItem(props, {
      id: pickerId.value,
      setValidateStatus
    });

    // 向子孙组件提供当前组件的上下问
    provide(datePickerCtx, {
      ctx,
      pickerType: toRef(props, 'pickerType'),
      currentMode
    });

    return {
      bsCommonPicker,
      pickerId,

      visible,
      viewDateText,
      date,
      dates,
      viewDates,
      inputPlaceholder,
      // footerVisible,
      currentMode,
      viewDatesIsDisabled,

      clear,
      hide,
      show,
      setValidateStatus,
      // setCurrentMode,
      setPanelViewDate,

      dateRef,
      weekRef,
      monthRef,
      yearRef,
      quarterRef,
      decadeRef,
      dateTimeRef,

      setDate,
      onDatePanelModelValueChange,
      onConfirmBtnClick () {
        /* if (props.pickerType === 'dateTime') {
          if (!props.modelValue) {
            // setDate(dayjs());
            hide(300);
            return;
          }
        } */
        if (tempDates.value.length > 0) {
          setDate(tempDates.value);
        }
        hide();
      },
      onInput,
      onInputBlur,
      onShow () {
        let mode = props.mode;
        if (mode) {
          currentMode.value = allowedPickerType.includes(mode) ? mode : props.pickerType;
        }
        visible.value = true;
        /* let panelViewDate = props.panelViewDate || now;
        if (!props.modelValue && (defaultPanelViewDate !== panelViewDate)) {
          nextTick(function () {
            defaultPanelViewDate = panelViewDate;
            setPanelViewDate(panelViewDate);
          });
        } */
        nextTick(function () {
          let panelCom = refs[props.pickerType + 'Ref']?.value;
          // 重置面板
          panelCom?.resetPanelMode(false);
        });
        ctx.emit('show');
      },
      onHidden () {
        visible.value = false;
        ctx.emit('hide');
        // 重置面板中选中的日期
        refs[props.pickerType + 'Ref'].value?.resetSelectedDates();

        console.log('dates', dates.value);
        setViewDateTxt(dates.value!);
      },
      // 预览数据改变事件
      onPreviewDatesChange (previewDates: Dayjs[]) {
        console.log('预览数据改变事件', previewDates);
        viewDates.value = previewDates;
        setViewDateTxt(previewDates);
      }
    };
  },
  render () {
    let $slots = this.$slots;
    let {
      pickerType,
      currentMode
    } = this;

    let commonPickerSlots = {
      trigger: $slots.default
    };

    // 面板公共属性
    let panelcommonProps = {
      'model-value': this.dates,
      'date-render': this.dateRender,
      'disabled-date': this.disabledDate,
      'show-header': this.showHeader,
      'dateRender': this.dateRender,
      'showHeader': this.showHeader,
      // 'pickerType': this.pickerType,
      'mode': this.mode,
      'yearButtonDisabled': this.yearButtonDisabled,
      'monthButtonDisabled': this.monthButtonDisabled,
      'onUpdate:modelValue': this.onDatePanelModelValueChange
    };

    let onViewDateChange = (viewDate: Dayjs) => {
      // this.viewDates = viewDate;
    };
    /* let onYearViewDateChange = (viewDate: Dayjs) => {
      // this.viewDates = this.viewDates?.year(viewDate.year());
    }; */

    let datePanelFn = (refName = 'dateRef') => {
      return () => {
        return <BsDatePanels
          ref={ refName }
          { ...panelcommonProps }
          {
            ...(refName == 'dateRef' ? {} : {
              timePanelProps: this.timePanelProps,
              isDatetimeRange: true,
              defaultTime: this.defaultTime
            })
          }
          // @ts-ignore
          onViewDateChange={ onViewDateChange }
          onPreviewDatesChange={ this.onPreviewDatesChange }></BsDatePanels>;
      };
    };
    let panels: {[key: string]: () => VNode} = {
      datePanel: datePanelFn(),
      dateTimePanel: datePanelFn('dateTimeRef'),
      /* weekPanel: () => {
        return <BsWeekPanel
          ref="weekRef"
          { ...panelcommonProps }
          onViewDateChange={ onViewDateChange }></BsWeekPanel>;
      }, */
      monthPanel: () => {
        return <BsMonthPanels
          ref="monthRef"
          { ...panelcommonProps }
          onViewDateChange={ onViewDateChange }
          onPreviewDatesChange={ this.onPreviewDatesChange }></BsMonthPanels>;
      },
      yearPanel: () => {
        return <BsYearPanels
          ref="yearRef"
          { ...panelcommonProps }
          onViewDateChange={ onViewDateChange }
          onPreviewDatesChange={ this.onPreviewDatesChange }></BsYearPanels>;
      }/* ,
      quarterPanel: () => {
        return <BsQuarterPanel
          ref="quarterRef"
          { ...panelcommonProps }
          onViewDateChange={ onViewDateChange }></BsQuarterPanel>;
      },
      decadePanel: () => {
        return <BsDecadePanel
          ref="decadeRef"
          { ...panelcommonProps }
          onViewDateChange={ onViewDateChange }></BsDecadePanel>;
      } */
    };
    let currentModePanel = panels[currentMode + 'Panel'];
    let pickerContent = currentModePanel || panels[pickerType + 'Panel'];

    // 侧边栏
    let sideBar = () => {
      return (<div
        class={[
          'bs-panel-sidebar',
          {
            'sidebar-in-right': this.sidebarInRight
          }
        ]}>
        {$slots.sidebar ? $slots.sidebar({
          date: this.dates,
          show: this.show,
          hide: this.hide
        }) : null}
      </div>);
    };

    // let pickerType = this.pickerType?.toLowerCase() || '';
    let dropdownClass = `bs-${pickerType?.toLowerCase()}-range-picker-dropdown`;
    let pickerTypeClass = `bs-${pickerType?.toLowerCase()}-range-editor`;
    return (<BsCommonRangePicker
      ref="bsCommonPicker"
      suffix-icon="calendar"
      size={ this.size }
      /* show-footer={ this.showFooter } */
      input-model-value={ this.viewDateText }
      input-value-disabled={ this.viewDatesIsDisabled }
      delive-context-to-form-item={ this.deliveContextToFormItem }
      disabled={ this.disabled }
      id={ this.pickerId }
      name={ this.name }
      class={ pickerTypeClass }
      input-placeholder={ this.inputPlaceholder }
      input-readonly={ this.inputReadonly }
      dropdown-class={ [this.dropdownClass, dropdownClass] }
      native-attrs={ this.nativeAttrs }
      teleported={ this.teleported }
      appendTo={ this.appendTo }
      lazy-render={ false }
      {
        ...{
          'onUpdate:inputModelValue': ($event: any) => { this.viewDateText = $event; }
        }
      }
      onInput={ this.onInput }
      onBlur={ this.onInputBlur }
      onClear={ this.clear }
      onShow={ this.onShow }
      onHidden={ this.onHidden }
      v-slots={ commonPickerSlots }>
      <div
        class={['bs-picker-panel', {
          'has-panel-sidebar': this.showSidebar,
          'sidebar-in-right': this.sidebarInRight
        }]}>
        { this.showSidebar && !this.sidebarInRight ? sideBar() : null }
        {/* { panels[(this.pickerType + 'Panel')]?.() } */}
        { pickerContent?.() }
        { this.showSidebar && this.sidebarInRight ? sideBar() : null }
      </div>
      {/* {(this.footerVisible && (!currentMode || pickerType == currentMode)) ? <div class="bs-picker-footer"> */}
      {(!currentMode || pickerType == currentMode) ? <div class="bs-picker-footer">
        { $slots.footer ? $slots.footer() : null }
        <div class="bs-picker-btns">
          {/* <!--TODO 按钮的禁用问题--> */}
          <BsButton class="bs-picker-cancel" type="link" size="sm" onClick={ this.hide }>取消</BsButton>
          <BsButton class="bs-picker-ok" type="primary" size="sm" onClick={ this.onConfirmBtnClick }>确定</BsButton>
        </div>
      </div> : null}
      {/* <template #trigger>
          <slot></slot>
        </template> */}
    </BsCommonRangePicker>);
  }
});

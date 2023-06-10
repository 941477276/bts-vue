import { computed, ref, watch } from 'vue';
import dayjs, { Dayjs } from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { dayjsUtil } from '../../utils/dayjsUtil';
import {
  isFunction
} from '../../utils/bs-util';

dayjs.extend(customParseFormat);
export function useTimePicker (props: any) {
  let formatInner = computed(function () {
    let format = props.format;
    if (!format) {
      if (props.use12Hours) {
        format = 'hh:mm:ss a';
      } else {
        format = 'HH:mm:ss';
      }
    }
    return format;
  });

  // 根据modeValue解析出时分秒
  let timeUnitValues = computed(function () {
    let modelValue = props.modelValue;
    let format = formatInner.value;
    let dayIns: Dayjs;
    let result = {
      hour: '',
      minute: '',
      second: ''
    };
    if (!modelValue) {
      return result;
    }

    if (typeof modelValue === 'string') {
      dayIns = dayjs(modelValue, format);
    } else {
      dayIns = dayjs(modelValue);
    }
    let hour = dayIns.hour();
    if (props.use12Hours && hour > 12) {
      hour = hour - 12;
    }
    return {
      hour,
      minute: dayIns.minute(),
      second: dayIns.second()
    };
  });

  // 时段
  let periods = ref([
    { label: 'AM', value: 'am' },
    { label: 'PM', value: 'pm' }
  ]);
  // 时段值
  let periodValue = ref('');
  watch(() => props.modelValue, function (modelValue) {
    if (!props.use12Hours) {
      return;
    }
    if (!modelValue) {
      if (!periodValue.value) {
        periodValue.value = 'am';
      } else {
        periodValue.value = '';
      }
      return;
    }

    if (typeof modelValue !== 'string') {
      modelValue = dayjsUtil.locale.format(modelValue, 'en', formatInner.value);
    }
    let periodFlag = modelValue.split(' ')[1];
    if (!periodFlag) {
      return;
    }
    periodFlag = periodFlag.toLowerCase();
    if (periodFlag == 'a') {
      periodFlag = 'am';
    }
    if (periodFlag == 'p') {
      periodFlag = 'pm';
    }
    periodValue.value = periodFlag;
  }, { immediate: true });

  return {
    formatInner,
    timeUnitValues,
    periods,
    periodValue
  };
};

type GetUpdateModelValueParams = {
  valueFormat?: string|null;
  use12Hours: boolean;
  date?: Dayjs|null;
  period: string;
  timeInfo?: any;
  originDate: Dayjs;
  disabledFns: {
    disabledHours: (hour: number, use12Hours: boolean) => boolean;
    disabledMinutes: (hour: number, minute: number, use12Hours: boolean) => boolean;
    disabledSeconds: (hour: number, minute: number, second: number, use12Hours: boolean) => boolean
  };
}
/**
 * 获取提交给父组件的值
 * @param valueFormat 格式化模板
 * @param use12Hours 是否为12小时制
 * @param dateObj Date对象
 * @param period 时段
 * @param timeUnitValues 时分秒的值
 * @param originDate 原来的时间对象
 * @param disabledFns
 */
export function getUpdateModelValue (options = {} as GetUpdateModelValueParams) {
  // let valueFormat = props.valueFormat;
  let dayIns: Dayjs;
  let { disabledHours, disabledMinutes, disabledSeconds } = options.disabledFns;

  let date = options.date || dayjs();
  let timeInfo = options.timeInfo;
  let use12Hours = options.use12Hours;
  let period = (options.period || '').toLowerCase();
  let originDate = options.originDate;
  if (originDate instanceof Date) {
    originDate = dayjs(originDate);
  }
  let valueFormat = options.valueFormat;
  let hour: number; //  = Number(timeUnitValues.hour);
  let minute: number;
  let second: number;
  if (timeInfo) {
    hour = timeInfo.hour;
    minute = timeInfo.minute;
    second = timeInfo.second;
  } else {
    hour = date.hour();
    minute = date.minute();
    second = date.second();
  }
  hour = !hour ? 0 : hour;
  minute = !minute ? 0 : minute;
  second = !second ? 0 : second;
  if (use12Hours) { // 如果是12小时制，则hour需加上12小时
    if (period == 'pm' && hour <= 12) {
      hour += 12;
    } else if (period == 'am' && hour > 12) {
      hour -= 12;
    }
  }
  // 如果时分秒被禁用，则用来的时分秒
  if (isFunction(disabledHours) && !!disabledHours(hour, use12Hours)) {
    hour = originDate.hour();
  }
  if (isFunction(disabledMinutes) && !!disabledMinutes(hour, minute, use12Hours)) {
    minute = originDate.minute();
  }
  if (isFunction(disabledSeconds) && !!disabledSeconds(hour, minute, second, use12Hours)) {
    second = originDate.second();
  }
  if (!valueFormat) {
    dayIns = dayjs(`${date.year()}/${date.month() + 1}/${date.date()} ${hour}:${minute}:${second}`);
    return dayIns;
  } else {
    if (use12Hours) {
      let valueFormatArr = valueFormat.split(' ');
      dayIns = dayjs(`${date.year()}/${date.month() + 1}/${date.date()} ${hour}:${minute}:${second}`);
      // 如果为12小时制，且格式后面有带时间段（如h:mm:ss a），则使用dayjs自身的格式化函数进行格式
      if (valueFormatArr.length === 2) {
        return dayIns.format(valueFormat);
      } else {
        // let resultValue = dayIns.format(valueFormat);
        // 保持"时段"一直为"AM"/"PM"
        let resultValue = dayjsUtil.locale.format(dayIns, 'en', valueFormat);
        let upperCaseResultValue = resultValue.toUpperCase();
        if (!upperCaseResultValue.endsWith('AM') && !upperCaseResultValue.endsWith('PM')) {
          resultValue += ' ' + period;
        }
        return resultValue;
      }
    } else {
      dayIns = dayjs(`${hour}:${minute}:${second}`, valueFormat);
      return dayjsUtil.locale.format(dayIns, 'en', valueFormat);
    }
  }
};

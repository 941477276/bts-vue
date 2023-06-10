<template>
  <div class="bs-picker-time-panel">
    <PanelHeader v-if="showHeader">
      <slot name="header" :date="modelValue" :format="formatInner" :timeUnitValues="timeUnitValues"></slot>
    </PanelHeader>
    <div
      class="bs-picker-body">
      <div
        class="bs-picker-content"
        :class="{
          'has-periods-column': use12Hours
        }">
        <BsTimeUnitColumn
          v-if="columnsShow.hour"
          ref="hourColumnRef"
          :units="hours"
          :value="timeUnitValues.hour"
          :parent-visible="parentVisible"
          :hide-disabled-options="hideDisabledOptions"
          @select="onSelect('hour', $event)"
          key="hour"></BsTimeUnitColumn>
        <BsTimeUnitColumn
          v-if="columnsShow.minute"
          ref="minuteColumnRef"
          :units="minutes"
          :value="timeUnitValues.minute"
          :parent-visible="parentVisible"
          :hide-disabled-options="hideDisabledOptions"
          @select="onSelect('minute', $event)"
          key="minute"></BsTimeUnitColumn>
        <BsTimeUnitColumn
          v-if="columnsShow.second"
          ref="secondColumnRef"
          :units="seconds"
          :value="timeUnitValues.second"
          :parent-visible="parentVisible"
          :hide-disabled-options="hideDisabledOptions"
          @select="onSelect('second', $event)"
          key="second"></BsTimeUnitColumn>
        <BsTimeUnitColumn
          class="bs-picker-time-panel-column-periods"
          v-if="use12Hours"
          :units="periods"
          :value="periodValue"
          :parent-visible="parentVisible"
          @select="onSelect('period', $event)"
          key="second"></BsTimeUnitColumn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import BsTimeUnitColumn from './BsTimeUnitColumn.vue';
import {
  ref,
  computed,
  watch,
  defineComponent
} from 'vue';
import PanelHeader from '../../bs-date-picker/panels/panel-header/PanelHeader.vue';
import { TimeDataUnit } from '../bs-time-picker-types';
import { bsPickerTimePanelProps } from './bs-picker-time-panel-props';
import { useTimePicker, getUpdateModelValue } from '../useTimePicker';
import dayjs, { Dayjs } from 'dayjs';

const calcTimeUnit = function (count = 60, step = 1, use12Hourss: boolean, disabledFn: any, disabledFnData: any[]) {
  let arr: TimeDataUnit[] = [];
  step = Math.floor(step);
  step = step < 1 ? 1 : step;
  count = Math.floor(count / step);
  let index = 0;
  while (index < count) {
    let label = index < 10 ? ('0' + index) : index + '';
    let value = index;
    let disabled = false;
    if (typeof disabledFn === 'function') {
      let flag = disabledFn(...disabledFnData, value, use12Hourss);
      if (typeof flag === 'boolean') {
        disabled = flag;
      }
    }
    arr.push({
      label,
      value,
      disabled
    });
    index++;
  }

  return arr;
};

export default defineComponent({
  name: 'BsPickerTimePanel',
  components: {
    BsTimeUnitColumn,
    PanelHeader
  },
  props: {
    ...bsPickerTimePanelProps,
    parentVisible: { // 父组件是否可见
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue'],
  setup (props: any, ctx: any) {
    let hourColumnRef = ref();
    let minuteColumnRef = ref();
    let secondColumnRef = ref();
    let {
      formatInner,
      timeUnitValues,
      periods,
      periodValue
    } = useTimePicker(props);

    let hours = computed(function () {
      let arr: TimeDataUnit[] = [];
      let count = 24;
      let use12Hours = props.use12Hours;
      let hourStep = Math.floor(props.hourStep);
      hourStep = hourStep < 1 ? 1 : hourStep;
      if (use12Hours) {
        count = 12;
      }
      count = Math.floor(count / hourStep);
      let index = 0;
      let disabledHoursFn = props.disabledHours;
      while (index < count) {
        let label = index < 10 ? ('0' + index) : index + '';
        let value = index;
        let disabled = false;
        if (use12Hours && index === 0) {
          label = '12';
          value = 12;
        }
        if (typeof disabledHoursFn === 'function') {
          let flag = disabledHoursFn(value, use12Hours);
          if (typeof flag === 'boolean') {
            disabled = flag;
          }
        }
        arr.push({
          label,
          value,
          disabled
        });
        index++;
      }

      return arr;
    });
    let minutes = computed(function () {
      let hour = timeUnitValues.value.hour;
      return calcTimeUnit(60, props.minuteStep, props.use12Hours, props.disabledMinutes, [hour]);
    });
    let seconds = computed(function () {
      let hour = timeUnitValues.value.hour;
      let minute = timeUnitValues.value.minute;
      return calcTimeUnit(60, props.secondStep, props.use12Hours, props.disabledSeconds, [hour, minute]);
    });
    // 计算时分秒的显示与隐藏
    let columnsShow = computed(function () {
      let format = formatInner.value;
      format = format.toLowerCase();
      let result = {
        hour: format.includes('h'),
        minute: format.includes('m'),
        second: format.includes('s')
      };
      return result;
    });
    let onSelect = function (type: string, timeData: TimeDataUnit) {
      let value = {
        ...timeUnitValues.value
      };
      if (type !== 'period') {
        (value as any)[type] = timeData.value;
      } else {
        periodValue.value = timeData.value + '';
      }
      let { disabledHours, disabledMinutes, disabledSeconds } = props;

      let newModelValue = getUpdateModelValue({
        valueFormat: props.valueFormat,
        use12Hours: props.use12Hours,
        period: periodValue.value,
        timeInfo: value,
        originDate: props.modelValue,
        disabledFns: {
          disabledHours,
          disabledMinutes,
          disabledSeconds
        }
      });
      ctx.emit('update:modelValue', newModelValue);
    };
    // 将值设为此刻
    let setNow = function () {
      let nowDate = dayjs();
      let period = nowDate.hour() > 12 ? 'pm' : 'am';
      let { disabledHours, disabledMinutes, disabledSeconds } = props;

      let newModelValue = getUpdateModelValue({
        valueFormat: props.valueFormat,
        use12Hours: props.use12Hours,
        date: nowDate,
        period,
        originDate: props.modelValue,
        disabledFns: {
          disabledHours,
          disabledMinutes,
          disabledSeconds
        }
      });
      ctx.emit('update:modelValue', newModelValue);
    };

    watch(() => props.parentVisible, function (isVisible: boolean) {
      if (isVisible && !props.modelValue) {
        let disabledFn = () => false;
        let date: Dayjs = getUpdateModelValue({
          // valueFormat: props.valueFormat,
          use12Hours: props.use12Hours,
          // date: nowDate,
          period: 'am',
          originDate: dayjs(),
          disabledFns: {
            disabledHours: disabledFn,
            disabledMinutes: disabledFn,
            disabledSeconds: disabledFn
          }
        }) as Dayjs;
        hourColumnRef.value?.scroll2Top(0, date.hour());
        minuteColumnRef.value?.scroll2Top(0, date.minute());
        secondColumnRef.value?.scroll2Top(0, date.second());
      }
    });

    return {
      hourColumnRef,
      minuteColumnRef,
      secondColumnRef,

      hours,
      minutes,
      seconds,
      periods,
      columnsShow,
      timeUnitValues,
      periodValue,
      formatInner,

      onSelect,
      setNow
    };
  }
});
</script>

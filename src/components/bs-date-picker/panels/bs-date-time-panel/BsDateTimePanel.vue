<template>
  <div class="bs-picker-date-time-panel">
    <BsDatePanel
      ref="datePanelRef"
      v-bind="datePanelProps"
      value-format=""
      :model-value="modelValue"
      :on-year-click="onYearClick"
      :on-month-click="onMonthClick"
      @update:modelValue="onDateChange"
      @view-date-change="onViewDateChange"></BsDatePanel>
    <BsPickerTimePanel
      v-bind="timePanelProps"
      value-format=""
      :model-value="modelValue"
      :parent-visible="visible"
      :show-header="true"
      @update:modelValue="onTimeChange">
      <template #header="{ date, format}">
        <button type="button" class="readonly-btn">
          {{ date ? date.format(format) : '&nbsp;' }}
        </button>
      </template>
    </BsPickerTimePanel>
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
  NOOP
} from '@vue/shared';
import dayjs, { Dayjs } from 'dayjs';
import BsDatePanel from '../bs-date-panel/BsDatePanel.vue';
import BsPickerTimePanel from '../../../bs-time-picker/widgets/BsPickerTimePanel.vue';

export default defineComponent({
  name: 'BsDateTimePanel',
  components: {
    BsDatePanel,
    BsPickerTimePanel
  },
  props: {
    modelValue: {
      type: Object as PropType<Dayjs>,
      default: null
    },
    datePanelProps: { // 日期选择器props
      type: Object,
      default () {
        return {};
      }
    },
    timePanelProps: { // 时间选择器props
      type: Object,
      default () {
        return {};
      }
    },
    visible: { // 组件是否可见
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
    // let now = dayjs(); // 今天
    let datePanelRef = ref(null);

    let onInternalDateChange = function (newDate: Dayjs, type: 'date' | 'time') {
      let originDate = props.modelValue;
      let resultDate = newDate;
      if (originDate) {
        if (type == 'date') {
          resultDate = newDate.hour(originDate.hour()).minute(originDate.minute()).second(originDate.second()).millisecond(originDate.millisecond());
        } else {
          resultDate = newDate.year(originDate.year()).month(originDate.month()).date(originDate.date());
        }
      }
      ctx.emit('update:modelValue', resultDate, false);
    };
    // 日期change事件
    let onDateChange = function (newDate: Dayjs) {
      onInternalDateChange(newDate, 'date');
    };
    // 时间change事件
    let onTimeChange = function (newTime: Dayjs) {
      onInternalDateChange(newTime, 'time');
    };
    return {
      datePanelRef,

      onDateChange,
      onTimeChange,
      onViewDateChange (date: Dayjs) {
        ctx.emit('viewDateChange', date);
      },
      setPanelViewDate (date: Dayjs) {
        (datePanelRef.value as any)?.setPanelViewDate(date);
      }
      /* calcViewTime (times: any) {
        let { hour, minute, second } = times;
      } */
    };
  }
});
</script>

<template>
  <BsCommonPicker
    class="bs-date-editor"
    ref="bsCommonPicker"
    suffix-icon="calendar"
    :size="size"
    :show-footer="showFooter"
    :input-model-value="viewDateText"
    :delive-context-to-form-item="deliveContextToFormItem"
    :disabled="disabled"
    :id="pickerId"
    :name="name"
    :placeholder="inputPlaceholder"
    :input-readonly="inputReadOnly"
    :dropdown-class-name="dropdownClassName"
    @update:inputModelValue="viewDateText = $event"
    @input="onInput"
    @blur="onInputBlur"
    @clear="clear"
    @show="onShow"
    @hidden="onHidden">
    <div
      class="bs-picker-panel"
      :class="{
        'has-panel-sidebar': showSidebar
      }">
      <!--<PanelSidebar v-if="showSidebar"></PanelSidebar>-->
      <div class="bs-panel-sidebar">
        <slot name="sidebar" :date="date"></slot>
      </div>
      <BsDatePanel
        v-if="pickerType == 'date'"
        :model-value="date"
        :date-render="dateRender"
        :disabled-date="disabledDate"
        :show-header="showHeader"
        @update:modelValue="onDatePanelModelValueChange"></BsDatePanel>
      <BsDateTimePanel
        v-if="pickerType == 'dateTime'"
        :model-value="date"
        :visible="visible"
        :date-render="dateRender"
        :disabled-date="disabledDate"
        :show-header="showHeader"
        :date-panel-props="datePanelProps"
        :time-panel-props="timePanelProps"
        @update:modelValue="onDatePanelModelValueChange"></BsDateTimePanel>
      <BsWeekPanel
        v-if="pickerType == 'week'"
        :model-value="date"
        :date-render="dateRender"
        :disabled-date="disabledDate"
        :show-header="showHeader"
        @update:modelValue="onDatePanelModelValueChange"></BsWeekPanel>
      <BsMonthPanel
        v-if="pickerType == 'month'"
        :model-value="date"
        :date-render="dateRender"
        :disabled-date="disabledDate"
        :show-header="showHeader"
        @update:modelValue="onDatePanelModelValueChange"></BsMonthPanel>
      <BsQuarterPanel
        v-if="pickerType == 'quarter'"
        :model-value="date"
        :date-render="dateRender"
        :disabled-date="disabledDate"
        :show-header="showHeader"
        @update:modelValue="onDatePanelModelValueChange"></BsQuarterPanel>
      <BsYearPanel
        v-if="pickerType == 'year'"
        :model-value="date"
        :date-render="dateRender"
        :disabled-date="disabledDate"
        :show-header="showHeader"
        @update:modelValue="onDatePanelModelValueChange"></BsYearPanel>
      <BsDecadePanel
        v-if="false"
        :model-value="date"
        :date-render="dateRender"
        :disabled-date="disabledDate"
        :show-header="showHeader"
        @update:modelValue="onDatePanelModelValueChange"></BsDecadePanel>
    </div>
    <div class="bs-picker-footer" v-if="footerVisible">
      <div class="bs-picker-btns">
        <!--<BsButton class="bs-picker-clear" size="sm" @click="clear">清空</BsButton>
        <BsButton class="bs-picker-now" type="primary" size="sm" @click="setNow">此刻</BsButton>-->
        <!--TODO 按钮的禁用问题-->
        <BsButton v-if="pickerType == 'date'" class="bs-picker-today" size="sm" :disabled="todayIsDisabled" @click="onNowBtnClick">今天</BsButton>
        <template v-if="pickerType == 'dateTime'">
          <BsButton type="link" size="sm" :disabled="todayIsDisabled" @click="onNowBtnClick">此刻</BsButton>
          <BsButton class="bs-picker-ok" type="primary" size="sm" @click="onConfirmBtnClick">确定</BsButton>
        </template>
        <slot name="footer"></slot>
      </div>
    </div>
    <template #trigger>
      <slot></slot>
    </template>
  </BsCommonPicker>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  ref,
  Ref,
  watch,
  provide,
  computed
} from 'vue';
import BsCommonPicker from '../bs-common-picker/BsCommonPicker.vue';
import { bsDatePickerTypes, PickerType, datePickerCtx } from './bs-date-picker-types';
import BsDatePanel from './panels/bs-date-panel/BsDatePanel.vue';
import BsMonthPanel from './panels/bs-month-panel/BsMonthPanel.vue';
import BsQuarterPanel from './panels/bs-quarter-panel/BsQuarterPanel.vue';
import BsYearPanel from './panels/bs-year-panel/BsYearPanel.vue';
import BsDecadePanel from './panels/bs-decade-panel/BsDecadePanel.vue';
import BsWeekPanel from './panels/bs-week-panel/BsWeekPanel.vue';
import BsDateTimePanel from './panels/bs-date-time-panel/BsDateTimePanel.vue';
import dayjs, { Dayjs } from 'dayjs';
import { dayjsUtil } from '@/utils/dayjsUtil';
import { getUpdateModelValue } from '@/components/bs-time-picker/useTimePicker';
import { useDeliverContextToFormItem } from '@/hooks/useDeliverContextToFormItem';

let pickerCounts: any = {
  date: 0,
  week: 0,
  month: 0,
  quarter: 0,
  year: 0,
  dateTime: 0
};
// js编写日历思路：https://www.cnblogs.com/zaijin-yang/p/12009727.html
export default defineComponent({
  name: 'BsDatePicker',
  components: {
    BsCommonPicker,
    BsDatePanel,
    BsMonthPanel,
    BsQuarterPanel,
    BsYearPanel,
    BsDecadePanel,
    BsWeekPanel,
    BsDateTimePanel
    // PanelSidebar
  },
  props: {
    ...bsDatePickerTypes
  },
  emits: ['update:modelValue', 'change', 'open', 'hidden'],
  setup (props: any, ctx: any) {
    let bsCommonPicker = ref();
    let pickerId = ref(props.id || `bs-${props.pickerType}-picker_${++pickerCounts[props.pickerType]}`);
    let visible = ref(false);
    let now = dayjs();

    // 格式模板
    let formatInner = computed(function () {
      let format = props.format;
      if (format) {
        return format;
      }
      let pickerType = props.pickerType;
      let formatMap: any = {
        date: 'YYYY-MM-DD',
        dateTime: 'YYYY-MM-DD',
        week: 'YYYY-wo',
        month: 'YYYY-MM',
        quarter: 'YYYY-[Q]Q',
        year: 'YYYY'
      };
      formatMap.dateTime += props.timePanelProps.use12Hours ? ' hh:mm:ss' : ' HH:mm:ss';
      let formatValue = formatMap[pickerType];
      return formatValue;
    });

    let date = ref<Dayjs|null>();
    let viewDateText = ref('');
    let setViewDateTxt = function (modelValue: Dayjs|string) {
      if (!modelValue) {
        viewDateText.value = '';
        return;
      }
      if (typeof modelValue === 'string') {
        viewDateText.value = modelValue;
        console.log('set viewDateText 111', modelValue);
        return;
      }
      let format = formatInner.value;
      let valueFormat = props.valueFormat;
      let dayjsIns;
      let pickerType = props.pickerType;
      if (pickerType == 'quarter') {
        dayjsIns = dayjsUtil.parseQuarter(modelValue, format);
      } else if (pickerType == 'week') {
        dayjsIns = dayjsUtil.parseWeek(modelValue, format, 'zh-cn');
      } else {
        dayjsIns = dayjsUtil.parseToDayjs(modelValue, format);
      }
      if (!dayjsIns) {
        viewDateText.value = '';
        return;
      }
      // console.log('setViewDateTxt dayjsIns', dayjsIns, format);
      let viewText = '';
      if (pickerType == 'dateTime') {
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
        viewText = dayjsUtil.locale.format(dayjsIns, 'en', format);
        console.log('---------dateTime setText', viewText);
      } else {
        viewText = dayjsIns.format(format);
      }
      viewDateText.value = viewText;
    };
    watch(() => props.modelValue, function (modelValue: Dayjs|string) {
      if (!modelValue) {
        date.value = null;
      } else {
        let dayjsIns;
        let pickerType = props.pickerType;
        let format = formatInner.value;
        let valueFormat = props.valueFormat;
        if (props.pickerType == 'quarter') {
          dayjsIns = dayjsUtil.parseQuarter(modelValue, valueFormat || format);
        } else if (pickerType == 'week') {
          dayjsIns = dayjsUtil.parseWeek(modelValue, valueFormat || format, 'zh-cn');
        } else {
          console.log('modelValue1111111', modelValue);
          if (pickerType == 'dateTime' && typeof modelValue == 'string') {
            let upperCaseValue = modelValue.toUpperCase();
            let { timePanelProps, datePanelProps } = props;
            let timePanelValueFormat = timePanelProps.valueFormat;
            let datePanelValueFormat = datePanelProps.valueFormat;
            // let tempFormat = 'YYYY-MM-DD HH:mm:ss';
            let tempFormat = '';
            if (timePanelValueFormat && datePanelValueFormat) {
              tempFormat = datePanelValueFormat + props.valueFormatSpliter + timePanelValueFormat;
            }
            let dateTemp = dayjsUtil.parseToDayjs(modelValue, tempFormat || format);
            // let dateTemp2 = dateTemp;
            console.log('================', modelValue, dateTemp, tempFormat || format);
            let hour = dateTemp.hour();
            let periods = '';
            if (upperCaseValue.endsWith('PM')) {
              periods = 'PM';
            }
            if (upperCaseValue.endsWith('AM')) {
              periods = 'AM';
            }
            if (timePanelProps.use12Hours && !upperCaseValue.endsWith('PM') && !upperCaseValue.endsWith('AM')) {
              periods = hour > 12 ? 'PM' : 'AM';
              modelValue += ' ' + periods;
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
            let viewText = dateTemp.format(tempFormat) + ' ' + periods;
            console.log('dateTime hour', dateTemp, hour, viewText);
            // console.log('dateTemp2', dateTemp2);
            dayjsIns = dateTemp;
          }
          if (!dayjsIns) {
            dayjsIns = dayjsUtil.parseToDayjs(modelValue, valueFormat || format);
          }
          console.log('watch modelValue', modelValue, valueFormat || format, dayjsIns);
        }
        date.value = dayjsIns;
      }

      setViewDateTxt(date.value as Dayjs);
    }, { immediate: true });

    // 输入框提示文字
    let inputPlaceholder = computed(function () {
      let placeholder = props.placeholder;
      if (placeholder) {
        return placeholder;
      }
      let picker = props.pickerType;
      let pickerText = '';
      switch (picker) {
        case 'date':
          pickerText = '日期';
          break;
        case 'dateTime':
          pickerText = '时间';
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
      return '请选择' + pickerText;
    });

    // 今天是否被禁用
    let todayIsDisabled = computed(function () {
      let pickerType = props.pickerType;
      if (pickerType != 'date' && pickerType != 'dateTime') {
        return true;
      }
      let disabledDate = props.disabledDate;
      if (typeof disabledDate !== 'function') {
        return false;
      }
      return !!disabledDate(dayjs());
    });

    // 是否显示footer
    let footerVisible = computed(function () {
      let pickerType = props.pickerType;
      let showFooter = props.showFooter;
      if (typeof showFooter !== 'boolean') {
        if (pickerType == 'date' || pickerType == 'dateTime') {
          return true;
        }
      }
      return !!showFooter;
    });

    // 设置值
    let setDate = function (newDate?: Dayjs) {
      if (!newDate) {
        ctx.emit('update:modelValue', '');
        ctx.emit('change', '', null);
        callFormItem('validate', 'change');
        return;
      }
      let valueFormat = props.valueFormat;
      let value;
      if (props.pickerType == 'dateTime') {
        let period = '';
        let timePanelProps = props.timePanelProps;
        let datePanelProps = props.datePanelProps;
        let use12Hours = timePanelProps.use12Hours;

        if (!timePanelProps.valueFormat || !datePanelProps.valueFormat) {
          value = newDate.clone();
        } else {
          if (use12Hours) {
            period = newDate.hour() > 12 ? 'pm' : 'am';
          }
          let { disabledHours, disabledMinutes, disabledSeconds } = timePanelProps;
          let timeValue = getUpdateModelValue({
            valueFormat: timePanelProps.valueFormat,
            // valueFormat: valueFormat,
            use12Hours,
            date: newDate,
            period,
            originDate: date.value as Dayjs,
            disabledFns: {
              disabledHours,
              disabledMinutes,
              disabledSeconds
            }
          });
          let dateValue = newDate.format(props.datePanelProps.valueFormat);
          value = dateValue + ' ' + timeValue;
          console.log('setDate dateTime2222222', newDate, period, value);
        }
      } else {
        if (!valueFormat) {
          value = newDate.clone();
        } else {
          value = newDate.format(valueFormat);
        }
      }

      // let value = !valueFormat ? date.clone() : date.format(valueFormat);
      ctx.emit('update:modelValue', value);
      ctx.emit('change', value, newDate.clone());
      callFormItem('validate', 'change');
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
    // 设置今天
    let setNow = function () {
      setDate(dayjs());
    };

    //  日期控件model-value值改变事件
    let onDatePanelModelValueChange = function (newDate: Dayjs, hideDropdown: boolean) {
      setDate(newDate);
      if (typeof hideDropdown === 'boolean' && !hideDropdown) { // 判断是否隐藏下拉面板
        return;
      }
      // 隐藏下拉面板
      hide(300);
    };

    // 开启输入与操作同步功能
    let isInputTextValid = true;
    // 输入框输入事件
    let onInput = function (value: string) {
      if (!value) {
        isInputTextValid = false;
        return;
      }
      let format = formatInner.value;
      let pickerType = props.pickerType;
      if (pickerType == 'quarter' || pickerType == 'week') {
        let dayjsIns = pickerType == 'quarter' ? dayjsUtil.parseQuarter(value, format) : dayjsUtil.parseWeek(value, format, 'zh-cn');
        console.log('onInput', value, format, dayjsIns);
        if (!dayjsIns) {
          return;
        }
        setDate(dayjsIns);
        isInputTextValid = true;
        return;
      }
      let dayjsIns;
      let periods = '';

      if (pickerType == 'dateTime' && typeof value == 'string') {
        let upperCaseValue = value.toUpperCase();
        if (upperCaseValue.endsWith('AM')) {
          value = value.replace(/AM/i, '').trim();
          periods = 'AM';
        }
        if (upperCaseValue.endsWith('PM')) {
          value = value.replace(/PM/i, '').trim();
          periods = 'PM';
        }
        // value = value.replace(/[am|pm]/ig, '').trim();
        if (periods) {
          format = format.replace(/[a|p]/ig, '').trim();
        }
      }
      // 开启严格校验，如不开启严格校验，当遇到格式如HH:mm:ss，输入框初始值为11:03:20，用户想改成11:30:20，当用户选中“03”然后再输入“3”时值就改变了
      if (!dayjsIns) {
        dayjsIns = dayjsUtil.strictDayjs(value, format);
      }
      console.log('onInput', value, format, dayjsIns.isValid(), dayjsIns);
      if (dayjsIns.isValid()) {
        let hour = dayjsIns.hour();
        if (periods == 'AM' && hour > 12) {
          dayjsIns = dayjsIns.hour(hour - 12);
        } else if (periods == 'PM' && hour < 12) {
          dayjsIns = dayjsIns.hour(hour + 12);
        }
        setDate(dayjsIns);
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
    provide(datePickerCtx, { ctx });

    return {
      bsCommonPicker,
      pickerId,

      visible,
      viewDateText,
      date,
      inputPlaceholder,
      todayIsDisabled,
      footerVisible,

      clear,
      hide,
      show,
      setNow,
      setValidateStatus,

      onDatePanelModelValueChange,
      onNowBtnClick () {
        setNow();
        hide(300);
      },
      onConfirmBtnClick () {
        if (props.pickerType === 'dateTime') {
          if (!props.modelValue) {
            setDate(dayjs());
            hide(300);
            return;
          }
        }
        hide();
      },
      onInput,
      onInputBlur,
      onShow () {
        visible.value = true;
        ctx.emit('open');
      },
      onHidden () {
        visible.value = false;
        ctx.emit('hidden');
      }
    };
  }
});
</script>

<style lang="scss">
@import "style/bs-date-picker";
</style>

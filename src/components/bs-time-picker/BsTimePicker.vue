<template>
  <BsCommonPicker
    class="bs-time-editor"
    ref="bsCommonPicker"
    :class="{
      'bs-time-editor-disabled': disabled
    }"
    :native-attrs="nativeAttrs"
    :size="size"
    :show-footer="showFooter"
    :input-model-value="viewDateText"
    :delive-context-to-form-item="deliveContextToFormItem"
    :disabled="disabled"
    :id="bsTimePickerId"
    :set-min-width="true"
    :clearable="clearable"
    :placeholder="placeholder"
    :name="name"
    :dropdown-class="dropdownClass"
    @update:inputModelValue="hanleInputModelValueChange"
    @input="onInput"
    @blur="onInputBlur"
    @clear="clear"
    @show="onShow"
    @hidden="onHidden">
    <div class="bs-picker-panel">
      <BsPickerTimePanel
        ref="bsPickerTimePanelRef"
        :model-value="viewDate"
        :format="format"
        :value-format="valueFormat"
        :hour-step="hourStep"
        :minute-step="minuteStep"
        :second-step="secondStep"
        :use12-hours="use12Hours"
        :parent-visible="visible"
        :disabled-hours="disabledHours"
        :disabled-minutes="disabledMinutes"
        :disabled-seconds="disabledSeconds"
        :hide-disabled-options="hideDisabledOptions"
        :show-header="showHeader"
        @update:modelValue="onUpdateTimePanelModelValue"></BsPickerTimePanel>
      <div class="bs-picker-footer" v-if="showFooter">
        <div class="bs-picker-btns">
          <BsButton class="bs-picker-clear" size="sm" @click="clear">清空</BsButton>
          <BsButton class="bs-picker-now" type="primary" size="sm" @click="setNow">此刻</BsButton>
        </div>
      </div>
    </div>
    <template #trigger>
      <slot></slot>
    </template>

    <template #icon>
      <BsiClock></BsiClock>
    </template>
  </BsCommonPicker>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  watch,
  PropType
} from 'vue';
import dayjs, { Dayjs } from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import BsPickerTimePanel from './widgets/BsPickerTimePanel.vue';
import BsButton from '../bs-button/BsButton.vue';
import BsCommonPicker from '../bs-common-picker/BsCommonPicker.vue';
import { useTimePicker, getUpdateModelValue } from './useTimePicker';
import { dayjsUtil } from '../../utils/dayjsUtil';
import { BsiClock } from 'vue3-bootstrap-icon/es/icons/BsiClock';
import { useDeliverContextToFormItem } from '../../hooks/useDeliverContextToFormItem';
import {
  isString
} from '@vue/shared';
import { bsTimePickerProps } from './bs-time-picker-types';

dayjs.extend(customParseFormat);
let bsTimePickerCount = 0;
export default defineComponent({
  name: 'BsTimePicker',
  components: {
    BsPickerTimePanel,
    BsButton,
    BsCommonPicker,
    BsiClock
  },
  props: bsTimePickerProps,
  emits: ['update:modelValue', 'change', 'show', 'hide'],
  setup (props: any, ctx: any) {
    let bsPickerTimePanelRef = ref(null);
    let bsCommonPicker = ref(null);
    let visible = ref(false);
    let bsTimePickerId = ref(props.id || `bs-time-picker_${++bsTimePickerCount}`);

    let { formatInner } = useTimePicker(props);

    let viewDate = ref(props.modelValue);
    // 用于显示的文本
    let viewDateText = ref('');
    let getViewDateText = function () {
      let date = viewDate.value;
      let format = props.format;
      let dayIns: Dayjs;
      if (!date) {
        return '';
      }

      if (!format) {
        if (props.use12Hours) {
          format = 'hh:mm:ss a';
        } else {
          format = 'HH:mm:ss';
        }
      }
      if (typeof date === 'string') {
        let upperCaseDate = date.toUpperCase();
        dayIns = dayjs(date, format);
        let hour = dayIns.hour();
        if (upperCaseDate.endsWith('PM') && hour < 12) {
          dayIns = dayIns.hour(hour + 12);
        }
        if (upperCaseDate.endsWith('AM') && hour > 12) {
          dayIns = dayIns.hour(hour - 12);
        }
      } else {
        dayIns = dayjs(date);
      }

      return dayjsUtil.locale.format(dayIns, 'en', format);
    };
    watch(() => props.modelValue, function (modelValue) {
      viewDate.value = modelValue;
      viewDateText.value = getViewDateText();
    }, { immediate: true });

    // 开启输入与操作同步功能
    let isInputTextValid = true;
    // 输入框输入事件
    let onInput = function (value: string) {
      isInputTextValid = false;
      if (!value) {
        return;
      }
      let format = formatInner.value;
      let periods = '';
      let use12Hours = props.use12Hours;
      if (use12Hours) {
        let upperCaseValue = value.toUpperCase();
        if (upperCaseValue.endsWith('AM')) {
          value = value.replace(/AM/i, '').trim();
          periods = 'AM';
        }
        if (upperCaseValue.endsWith('PM')) {
          value = value.replace(/PM/i, '').trim();
          periods = 'PM';
        }
        if (periods) {
          format = format.replace(/[a|p]/ig, '').trim();
        }
      }
      // 开启严格校验，如不开启严格校验，当遇到格式如HH:mm:ss，输入框初始值为11:03:20，用户想改成11:30:20，当用户选中“03”然后再输入“3”时值就改变了
      // let dayjsIns = dayjs(value, format, true);
      let dayjsIns = dayjsUtil.strictDayjs(value, format);
      if (dayjsIns.isValid()) {
        /* let period = '';
        if (props.use12Hours) {
          period = dayjsIns.hour() > 12 ? 'pm' : 'am';
        } */
        let timeInfo = {
          hour: dayjsIns.hour(),
          minute: dayjsIns.minute(),
          second: dayjsIns.second()
        };
        let { disabledHours, disabledMinutes, disabledSeconds } = props;
        let result = getUpdateModelValue({
          valueFormat: props.valueFormat,
          use12Hours: props.use12Hours,
          period: periods,
          timeInfo,
          originDate: viewDate.value,
          disabledFns: {
            disabledHours,
            disabledMinutes,
            disabledSeconds
          }
        });

        /* if (util.isFunction(disabledHours)) {
          if (disabledHours(timeInfo.hour, use12Hours)) {
            result = result.hour
          }
        } */
        let resultText = '';
        if (!isString(result)) {
          resultText = dayjsUtil.locale.format(result, 'en', format);
        } else {
          resultText = result as string;
        }

        let modelValue = props.modelValue;
        let modelValueText = '';
        if (!isString(modelValue)) {
          modelValueText = dayjsUtil.locale.format(modelValue as Dayjs, 'en', format);
        } else {
          modelValueText = modelValue;
        }
        // 新的结果与旧的一致，不执行更新
        if (resultText === modelValueText) {
          return;
        }
        ctx.emit('update:modelValue', result);
        ctx.emit('change', result);
        callFormItem('validate', 'change');
        // viewDateText.value = getViewDateText();
        isInputTextValid = true;
      }
    };
    let onInputBlur = function () {
      if (!isInputTextValid) {
        // viewDate.value = props.modelValue;
        viewDateText.value = getViewDateText();
      }
    };

    let clear = function () {
      ctx.emit('update:modelValue', '');
      ctx.emit('change', '');
      callFormItem('validate', 'change');
    };
    let setNow = function () {
      (bsPickerTimePanelRef.value as any)?.setNow();
      // 300毫秒后再隐藏下拉内容，为的是让用户看到选中的内容
      let timer = setTimeout(function () {
        clearTimeout(timer);
        (bsCommonPicker.value as any).showDropdown(false);
      }, 300);
    };

    // <bs-time-panel>组件值更新事件
    let onUpdateTimePanelModelValue = function (newValue: string|Dayjs) {
      viewDate.value = newValue;
      ctx.emit('update:modelValue', newValue);
      ctx.emit('change', newValue);
      callFormItem('validate', 'change');
      (bsCommonPicker.value as any).focus();
    };

    // 设置输入框校验状态
    let setValidateStatus = function (status: string) {
      (bsCommonPicker.value as any)?.setValidateStatus(status);
    };

    let { callFormItem } = useDeliverContextToFormItem(props, {
      id: bsTimePickerId.value,
      setValidateStatus
    });

    return {
      bsPickerTimePanelRef,
      bsCommonPicker,
      viewDate,
      viewDateText,
      visible,
      bsTimePickerId,

      onUpdateTimePanelModelValue,
      onInput,
      onInputBlur,
      onShow () {
        visible.value = true;
        ctx.emit('show');
      },
      onHidden () {
        visible.value = false;
        ctx.emit('hide');
      },
      hanleInputModelValueChange (newViewText: string) {
        viewDateText.value = newViewText;
      },

      clear,
      setNow,
      setValidateStatus
    };
  }
});
</script>

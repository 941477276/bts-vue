import {
  SetupContext,
  ref,
  watch
} from 'vue';
import dayjs, { Dayjs } from 'dayjs';

export function usePanelViewDate (props: any, ctx: any) {
  // 用于面板展示的日期
  let panelViewDate = ref(dayjs(props.modelValue ? props.modelValue : undefined));

  let setPanelViewDate = (date: Dayjs, emitEvents = true) => {
    if (date instanceof Date) {
      date = dayjs(date);
    }
    if (!date || !(date instanceof dayjs)) {
      return;
    }
    panelViewDate.value = date;
    if (emitEvents) {
      ctx.emit('viewDateChange', date);
    }
  };

  let getPanelViewDate = function () {
    return panelViewDate.value.clone();
  };

  watch(() => props.modelValue, function (modelValue) {
    setPanelViewDate(modelValue || dayjs());
  });
  return {
    panelViewDate,
    setPanelViewDate,
    getPanelViewDate
  };
};

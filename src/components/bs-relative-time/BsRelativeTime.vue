<template>
  <span class="bs-relative-time">{{ viewTime }}</span>
</template>

<script lang="ts">
import {
  ref,
  defineComponent,
  PropType,
  watch,
  onMounted,
  onBeforeUnmount
} from 'vue';
import {
  isString
} from '@vue/shared';
import dayjs, { Dayjs } from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { dayjsUtil } from '../../utils/dayjsUtil';
import { bsRelativeTimeProps } from './bs-relative-time-types';

dayjs.extend(relativeTime);

let formMap: any = {
  date: 'YYYY-MM-DD',
  datetime: 'YYYY-MM-DD HH:mm:ss'
};

export default defineComponent({
  name: 'BsRelativeTime',
  props: bsRelativeTimeProps,
  setup (props: any) {
    let viewTime = ref('');
    let timer: number;

    let setViewTime = function () {
      let time = props.time;
      let viewType = props.viewType;
      let date: Dayjs|null = null;
      let lang = props.lang;
      if (typeof time == 'number') {
        date = dayjs(new Date(time));
      } else if (isString(time)) {
        time = time.trim();
        if (/^\d+$/.test(time)) { // 处理时间戳类型的字符串
          time = Number(time);
        }
        date = dayjs(new Date(time));
      } else if (time instanceof Date) {
        date = dayjs(time);
      }
      if (!date) {
        return;
      }
      if (viewType == 'date' || viewType == 'datetime') {
        let format = props.format;
        if (!format) {
          format = formMap[viewType];
        }
        viewTime.value = lang ? dayjsUtil.locale.format(date, 'lang', format) : date.format(format);
        return;
      }
      viewTime.value = lang ? dayjsUtil.locale.fromNow(date, lang) : date.fromNow();
    };

    let startInterval = function () {
      clearInterval(timer);
      timer = setInterval(setViewTime, 1000 * props.interval);
    };

    watch(() => props.time, function () {
      setViewTime();
    });
    watch(() => props.interval, startInterval);

    onBeforeUnmount(function () {
      clearInterval(timer);
    });

    onMounted(function () {
      setViewTime();
      startInterval();
    });

    return {
      viewTime
    };
  }
});
</script>

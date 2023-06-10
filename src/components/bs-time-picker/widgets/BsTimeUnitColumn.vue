<template>
  <ul
    ref="ulRef"
    class="bs-picker-time-panel-column">
    <li
      v-for="item in units"
      v-show="!(item.disabled && hideDisabledOptions)"
      :key="item.value"
      class="bs-picker-time-panel-cell"
      :class="{
        'is-selected': item.value === value,
        'is-disabled': item.disabled
      }"
      @click="onItemClick(item)">{{ item.label }}</li>
  </ul>
</template>

<script lang="ts">
import {
  PropType,
  ref,
  watch,
  nextTick,
  onMounted,
  defineComponent
} from 'vue';
import { TimeDataUnit } from '../bs-time-picker-types';
import {
  scrollTo
} from '../../../utils/bs-util';

export default defineComponent({
  name: 'BsTimeUnitColumn',
  props: {
    value: {
      type: [Number, String],
      default: ''
    },
    units: {
      type: Array as PropType<TimeDataUnit[]>,
      default () {
        return [];
      }
    },
    parentVisible: { // 父组件是否可见
      type: Boolean,
      default: true
    },
    hideDisabledOptions: { // 是否隐藏禁用的选项
      type: Boolean,
      default: false
    }
  },
  setup (props: any, ctx: any) {
    let ulRef = ref<HTMLElement|null>(null);
    let onItemClick = function (item: TimeDataUnit) {
      if (item.disabled || item.value === props.value) {
        return;
      }
      ctx.attrs.onSelect?.(item);
    };

    /**
     * 将指定元素滚动置顶
     * @param duration 滚动时长
     * @param value 元素的值（可选）
     */
    let scroll2Top = function (duration = 0, value?: number|string) {
      nextTick(function () {
        let ulEl = ulRef.value;
        if (!ulEl) {
          return;
        }
        let activeLi: HTMLElement | null = null;
        if (!value && value != 0) {
          activeLi = ulEl.querySelector('.bs-picker-time-panel-cell.is-selected');
        } else {
          let lis = ulEl.querySelectorAll('.bs-picker-time-panel-cell');
          if (typeof value === 'number') {
            value = value < 10 ? ('0' + value) : value;
          }
          for (let i = 0, len = lis.length; i < len; i++) {
            let li = lis[i] as HTMLElement;
            let text = (li.innerText || li.textContent)?.trim();
            if (text == value) {
              activeLi = li;
              break;
            }
          }
        }

        if (!activeLi) {
          return;
        }
        // @ts-ignore
        scrollTo(ulEl, 'y', activeLi.offsetTop, duration);
      });
    };

    watch(() => props.value, function () {
      if (!props.parentVisible) {
        return;
      }
      scroll2Top(150);
    }, { immediate: true });
    watch(() => props.parentVisible, function (isVisible: boolean) {
      if (isVisible) {
        // 需要等dom元素可见后再进行滚动
        let timer = setTimeout(function () {
          clearTimeout(timer);
          scroll2Top(0);
        }, 60);
      }
    }, { immediate: true });

    return {
      ulRef,
      onItemClick,
      scroll2Top
    };
  }
});
</script>

<template>
  <transition
    name="fade"
    @before-leave="isLeaving = true"
    @after-leave="isLeaving = false">
    <div
      ref="triggerRef"
      v-show="visible"
      class="bs-back-top"
      :class="{
        'fixed-position': isFixedPosition
      }"
      :style="{
        top: triggerElStyle.top == '' ? '' : (triggerElStyle.top + 'px'),
        right: triggerElStyle.right == '' ? '' : (triggerElStyle.right + 'px')
      }"
      @click="doBackTop">
      <slot>
        <div class="bs-back-top-inner">
          <i></i>
        </div>
      </slot>
    </div>
  </transition>
</template>

<script lang="ts">
import {
  ref,
  reactive,
  defineComponent,
  onUpdated,
  onMounted,
  onBeforeUnmount,
  computed
} from 'vue';
import {
  isFunction,
  isString,
  isObject
} from '@vue/shared';
import { useGlobalEvent } from '../../hooks/useGlobalEvent';
import {
  scrollTo,
  getStyle,
  scrollLeft,
  scrollTop
} from '../../utils/bs-util';
import { bsBacktopProps } from './bs-backtop-types';

const defaultTop = '80%';
const defaultRight = '30px';
const parseNumber = function (num: number|string, baseNumber = 1) {
  if (typeof num == 'number') {
    return num;
  }
  let newNumber = 0;
  if (isString(num)) {
    if (num.charAt(num.length - 1) == '%') { // 百分比
      let percent = Number(num.replace('%', '')) / 100;
      newNumber = (baseNumber * percent) as number;
    } else { // 固定值
      newNumber = parseFloat(num);
    }
  } else {
    newNumber = num as number;
  }
  return newNumber;
};
export default defineComponent({
  name: 'BsBackTop',
  props: bsBacktopProps,
  emit: ['complete'],
  setup (props:any, ctx: any) {
    let currentTarget = ref<Element|Window|null>(null);
    let triggerRef = ref<HTMLElement|null>(null);
    let triggerElStyle = reactive({
      right: '',
      top: ''
    });
    let visible = ref(false);
    let isScrolling = false;
    let isLeaving = ref(false); // 是否正在离开

    let lastTime = 0;
    let onScroll = function () {
      let triggerEl = triggerRef.value;
      let target = currentTarget.value as HTMLElement;
      let targetScrollTop = scrollTop(target);
      let now = new Date().getTime();

      // 如果isScrolling=true则是通过代码在滚动滚动条，在代码滚动过程中会调用calcTriggerStyle函数计算dom位置，因此这里就不再需要调了
      if (!isScrolling) {
        // @ts-ignore
        calcTriggerStyle(target !== window ? (target as HTMLElement) : null);
      }

      // 经测试，节流时间控制在35毫秒是最为恰当的，节流时间设置为大于35毫秒，当滚动滚动条的速度较快时会导致按钮不能及时显示或隐藏
      if (now > 0 && (now - lastTime < 35)) {
        if (targetScrollTop == 0) {
          visible.value = false;
        }
        return;
      }
      if (!triggerEl || !target || isScrolling) {
        return;
      }
      lastTime = now;
      let visibleHeight = props.visibilityHeight;
      // let targetClientHeight = target === window ? window.innerHeight : (target as HTMLElement).clientHeight;
      // @ts-ignore
      let targetHeight = target === window ? document.documentElement.offsetHeight : (target as HTMLElement).clientHeight;
      visibleHeight = parseNumber(visibleHeight, targetHeight);
      let flag = targetScrollTop >= visibleHeight;
      visible.value = flag;
    };

    // 添加事件
    let addEvent = function (newTarget: Element|Window|null, isUpdate = false) {
      let currentTargetVal = currentTarget.value;
      if (isUpdate) {
        if (currentTargetVal === window) {
          useGlobalEvent.removeEvent('window', 'scroll', onScroll);
        } else {
          currentTargetVal?.removeEventListener('scroll', onScroll, false);
        }
      }
      currentTarget.value = newTarget;
      currentTargetVal = newTarget;
      if (currentTargetVal === window) {
        useGlobalEvent.addEvent('window', 'scroll', onScroll);
      } else {
        currentTargetVal?.addEventListener('scroll', onScroll, false);
      }
    };
    // 移除事件
    let removeEvent = function () {
      let currentTargetVal = currentTarget.value;
      if (currentTargetVal === window) {
        useGlobalEvent.removeEvent('window', 'scroll', onScroll);
      } else {
        currentTargetVal?.removeEventListener('scroll', onScroll, false);
      }
      currentTarget.value = null;
    };

    let initTarget = function () {
      let propsTarget = props.target;
      let targetTemp: Element|Window|null = null;
      let currentTargetVal = currentTarget.value;
      if (isFunction(propsTarget)) {
        targetTemp = propsTarget();
      } else if (isString(propsTarget)) {
        targetTemp = document.querySelector(propsTarget);
      } else if (propsTarget && isObject(propsTarget) && (propsTarget.nodeType == 1 || propsTarget === window)) {
        targetTemp = propsTarget as Element;
      }
      if (!targetTemp && !currentTargetVal) {
        return;
      }
      if (!targetTemp && currentTargetVal) {
        // 移除事件监听
        removeEvent();
        return;
      }
      if (targetTemp && !currentTargetVal) {
        // 新增
        addEvent(targetTemp, false);
        return;
      }
      if (targetTemp !== currentTargetVal) {
        // 更新
        addEvent(targetTemp, true);
        return;
      }
    };

    // 计算元素的定位值
    let calcTriggerStyle = function (targetEl: HTMLElement | null) {
      let { top, right } = props;
      // let target = currentTarget.value;
      let style = {
        top,
        right
      };
      if (!targetEl) {
        return;
      }

      let isTriggerFixed = getStyle(targetEl, 'position') === 'fixed';
      if ((targetEl as any) === window || isTriggerFixed) {
        return style;
      }
      let clientHeight = targetEl.clientHeight;
      let clientLeft = targetEl.clientLeft;
      let targetScrollTop = scrollTop(targetEl);
      let targetScrollLeft = scrollLeft(targetEl);
      if (!top && top !== 0) { // 未传递top属性则使用默认的top值
        top = defaultTop;
      }
      top = parseNumber(top, clientHeight);
      top += targetScrollTop;

      if (!right && right !== 0) {
        right = defaultRight;
      }
      right = parseNumber(right, clientLeft);
      right += targetScrollLeft;

      triggerElStyle.top = top;
      triggerElStyle.right = right;
    };

    // 是否使用固定定位
    let isFixedPosition = computed(function () {
      let currentTargetVal = currentTarget.value;
      let useFixedPosition = props.useFixedPosition;
      if (useFixedPosition === false || useFixedPosition === true) {
        return useFixedPosition;
      }
      if (currentTargetVal === window) {
        return true;
      }
      return false;
    });

    let doBackTop = function () {
      let target = currentTarget.value as HTMLElement;
      if (!target || isScrolling) {
        return;
      }
      isScrolling = true;
      scrollTo(target, 'y', 0, props.duration || 150, function () {
        isScrolling = false;
        visible.value = false;
        ctx.emit('complete');
      }, function () {
        // @ts-ignore
        if (target !== window) {
          calcTriggerStyle(target as HTMLElement);
        }
      });
    };

    onUpdated(initTarget);
    onMounted(function () {
      initTarget();
      let timer = setTimeout(function () {
        clearTimeout(timer);
        onScroll();
        calcTriggerStyle(currentTarget.value as HTMLElement);
      }, 20);
    });
    onBeforeUnmount(function () {
      removeEvent();
    });

    return {
      triggerRef,
      visible,
      isFixedPosition,
      triggerElStyle,
      isLeaving,

      doBackTop
    };
  }
});
</script>

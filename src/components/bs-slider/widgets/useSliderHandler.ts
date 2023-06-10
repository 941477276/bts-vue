import {
  Ref,
  ref,
  unref,
  watch
} from 'vue';
import { BigNumber } from 'bignumber.js';
import {
  elementContains
} from '../../../utils/bs-util';
import {
  calcValueByPosition,
  convertValue
} from '../bsSliderUitl';

export function useSliderHandler (props: any, ctx: any, tooltipComRef: any, tooltipVisible: Ref<boolean>, sliderHandlerRef: Ref<HTMLElement|null>) {
  let oldValue = ref(props.modelValue);

  watch(() => props.modelValue, function (newValue) {
    if (oldValue.value != newValue) {
      oldValue.value = newValue;
    }
  });

  let mousedownClientX = 0; // 鼠标按下滑块那一刻鼠标的X轴位置
  let mousedownClientY = 0;
  let sliderRect = {} as DOMRect; // 获取滑块轨道的位置信息
  let sliderTotalWidth = 0; // 滑块轨道的长度
  let sliderStartPosition = 0; // 滑块起始位置
  let isDragging = false;
  let isMouseentered = false;

  let onMousedown = function (evt: MouseEvent|TouchEvent) {
    if (props.disabled) {
      return;
    }
    evt = evt || window.event;
    // evt.preventDefault();
    document.addEventListener('mousemove', documentMousemove, false);
    document.addEventListener('mouseup', documentMouseup, false);

    // @ts-ignore
    document.addEventListener('touchmove', documentMousemove, {
      passive: false, // 解决touchmove无法处理e.prevetDefault（）问题
      capture: false
    });
    // @ts-ignore
    document.addEventListener('touchend', documentMouseup, false);
    // @ts-ignore
    document.addEventListener('touchcancel', documentMouseup, false);

    if (evt.type === 'touchmove') {
      let touch = (evt as TouchEvent).touches[0];
      mousedownClientX = touch.clientX;
      mousedownClientY = touch.clientY;
    } else {
      mousedownClientX = (evt as MouseEvent).clientX;
      mousedownClientY = (evt as MouseEvent).clientY;
    }
    sliderRect = unref(props.sliderRef).getBoundingClientRect();
    sliderTotalWidth = props.vertical ? sliderRect.height : sliderRect.width;
    sliderStartPosition = props.vertical ? sliderRect.top : sliderRect.left;
  };

  let mouseenterTimer: number;
  let onMouseenter = function () {
    isMouseentered = true;

    clearTimeout(mouseenterTimer);
    mouseenterTimer = setTimeout(function () { // 防止鼠标快速来回滑动时频繁显示/隐藏tooltip的问题
      clearTimeout(mouseenterTimer);
      tooltipVisible.value = true;
      // updateTooltip();
    }, 100);
  };

  let mouseleaveTimer: number;
  let onMouseleave = function () {
    isMouseentered = false;
    clearTimeout(mouseleaveTimer);
    clearTimeout(mouseenterTimer);
    mouseleaveTimer = setTimeout(function () { // 解决windows上滑动按钮scale(1.2)后会导致鼠标触发mouseenter事件后又立即触发mouseleave事件问题
      clearTimeout(mouseleaveTimer);
      if (isMouseentered) {
        return;
      }
      if (!isDragging) {
        tooltipVisible.value = false;
      }
    }, 50);
  };

  let mousemoveTimer = 0;
  let documentMousemove = function (evt: MouseEvent|TouchEvent) {
    evt = evt || window.event;
    let now = new Date().getTime();
    if (mousemoveTimer != 0 && mousemoveTimer < 200) {
      return;
    }
    let clientX = 0;
    let clientY = 0;
    if (evt.type === 'touchmove') {
      let touch = (evt as TouchEvent).touches[0];
      clientX = touch.clientX;
      clientY = touch.clientY;
    } else {
      clientX = (evt as MouseEvent).clientX;
      clientY = (evt as MouseEvent).clientY;
    }

    evt.preventDefault();
    mousemoveTimer = now;
    tooltipVisible.value = true;
    isDragging = true;
    let mousePosition = props.vertical ? clientY : clientX;
    // 鼠标移动到的位置
    let positionInSlider = mousePosition - sliderStartPosition;
    if (positionInSlider < 0) {
      positionInSlider = 0;
    }
    if (positionInSlider > sliderTotalWidth) {
      positionInSlider = sliderTotalWidth;
    }

    let newValue = calcValueByPosition(positionInSlider, sliderTotalWidth, props, props.precision);
    if (newValue == oldValue.value) {
      return;
    }

    setValue(newValue);
  };
  let documentMouseup = function (evt: MouseEvent) {
    document.removeEventListener('mousemove', documentMousemove, false);
    document.removeEventListener('mouseup', documentMouseup, false);

    // @ts-ignore
    document.removeEventListener('touchmove', documentMousemove, {
      passive: false, // 解决touchmove无法处理e.preventDefault（）问题
      capture: false
    });
    // @ts-ignore
    document.removeEventListener('touchend', documentMouseup, false);
    // @ts-ignore
    document.removeEventListener('touchcancel', documentMouseup, false);
    // tooltipVisible.value = false;
    isDragging = false;
    let target = evt.target as HTMLElement;
    if (target != sliderHandlerRef.value && !elementContains(sliderHandlerRef.value as HTMLElement, target)) {
      tooltipVisible.value = false;
    }
  };

  // let keydownActiveTimer:number;
  let keydownActiveTime = 0;
  let onKeydown = function (evt: KeyboardEvent) {
    evt = evt || window.event;
    if (props.disabled) {
      return;
    }
    let modelValue = props.modelValue;
    let min = props.min;
    let max = props.max;

    let keyCode = evt.keyCode;
    let resultValue:string|number = 0;
    let now = new Date().getTime();
    evt.preventDefault();
    // clearTimeout(keydownActiveTimer);
    if (keyCode == 39 || keyCode == 40) { // 右、下
      if (modelValue >= max) {
        return;
      }
      resultValue = convertValue(new BigNumber(modelValue).plus(props.step).toNumber(), props, props.precision);
    } else if (keyCode == 37 || keyCode == 38) { // 左、上
      if (modelValue <= min) {
        return;
      }
      resultValue = convertValue(new BigNumber(modelValue).minus(props.step).toNumber(), props, props.precision);
    } else {
      return;
    }
    keydownActiveTime = now;
    tooltipShortShow();
    setValue(resultValue);
  };

  /**
   * 设置值
   * @param newValue
   */
  let setValue = function (newValue: string|number) {
    oldValue.value = newValue;
    ctx.emit('update:modelValue', newValue);
    ctx.emit('change', newValue);

    updateTooltip();
  };

  // tooltip短暂显示
  let tooltipShowShowTimer: number;
  let tooltipShortShow = function () {
    tooltipVisible.value = true;
    clearTimeout(tooltipShowShowTimer);
    // 如果1.5秒内未使用键盘更新滑块，则隐藏tooltip
    tooltipShowShowTimer = setTimeout(function () {
      clearTimeout(tooltipShowShowTimer);
      if (!isDragging && !isMouseentered) {
        tooltipVisible.value = false;
      }
    }, 1500);
  };

  // 更新tooltip的位置
  let updateTooltip = function () {
    let showToolTip = props.showToolTip;
    if (typeof showToolTip !== 'boolean' || showToolTip === true) {
      tooltipComRef.value?.updatePopper?.();
    }
  };

  return {
    onMousedown,
    onMouseenter,
    onMouseleave,
    onKeydown,
    setValue,
    tooltipShortShow
  };
};

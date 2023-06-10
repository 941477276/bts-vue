<template>
  <transition
    ref="targetRef"
    :name="transitionName"
    @before-enter="$emit('before-enter', $event)"
    @enter="onEnter"
    @after-enter="$emit('after-enter', $event)"
    @before-leave="$emit('before-leave', $event)"
    @leave="$emit('leave', $event)"
    @after-leave="onLeave"
    class="bs-dropdown-transition"
    :class="[
      `bs-placement-${camelCase2KebabCase(dropdownStyle.direction)}`,
      {
        'use-bottom-position': dropdownStyle.bottom != null,
        'use-right-position': dropdownStyle.right != null
      }
    ]"
    :style="{
      position: position,
      ...(setWidth ? { width: dropdownStyle.width + 'px' } : {}),
      ...(setMinWidth ? { minWidth: dropdownStyle.width + 'px' } : {}),
      ...transitionOrigin,
      left: dropdownStyle.right == null ? (dropdownStyle.left + 'px') : 'auto',
      right: dropdownStyle.right != null ? (dropdownStyle.right + 'px') : '',
      top: dropdownStyle.bottom == null ? (dropdownStyle.top + 'px') : 'auto',
      bottom: dropdownStyle.bottom != null ? (dropdownStyle.bottom + 'px') : '',
      ...styleCustom
    }"
    :data-horizontal-fullinview="isVisible ? dropdownStyle.horizontalFullInview : null"
    :data-vertical-fullinview="isVisible ? dropdownStyle.verticalFullInview : null">
    <slot></slot>
  </transition>
</template>

<script lang="ts">
import {
  PropType,
  defineComponent,
  reactive,
  onMounted,
  onBeforeMount,
  ref,
  watch
} from 'vue';
import { NOOP, isObject } from '@vue/shared';
import {
  getStyle,
  getScrollParent,
  scrollTop,
  isFunction,
  kebabCase2CamelCase,
  camelCase2KebabCase
} from '../../utils/bs-util';
import { getDropdownDirection } from './useDropdownDirection';
import { useGlobalEvent } from '../../hooks/useGlobalEvent';
import { PlainObject } from '../types';
import { bsDropdownTransitionProps, BsDropdownPositionInfo } from './bs-dropdown-transition-types';

export default defineComponent({
  name: 'BsDropdownTransition',
  props: bsDropdownTransitionProps,
  emits: ['before-enter', 'enter', 'after-enter', 'before-leave', 'leave', 'after-leave', 'position-change'],
  setup (props: any, ctx: any) {
    // 下拉菜单样式
    let dropdownStyle = reactive<BsDropdownPositionInfo>({
      // position: 'absolute',
      direction: 'bottom',
      width: 0,
      left: 0,
      top: 0,
      bottom: null,
      right: null,
      horizontalFullInview: false,
      verticalFullInview: false
    });
    let targetEl: HTMLElement|null = null;
    // 参照元素有滚动条的父级节点
    let referenceScrollParent: HTMLElement|undefined;
    let isVisible = ref(false);
    let targetRef = ref<HTMLElement|null>(null);
    let documentNodeNames = ['HTML', 'BODY'];
    let zoomTransitionOrigin: PlainObject = {
      top: '0 100%',
      topEnd: '100% 100%',
      bottom: '0 0',
      bottomEnd: '100% 0',
      left: '100% 0',
      leftEnd: '100% 100%',
      leftCenter: 'right center',
      right: '0 0',
      rightEnd: '0 100%',
      rightCenter: '0 center'
    };
    // 外部自定义样式
    let styleCustom = ref<PlainObject>({});

    // 刷新定位
    let refresh = function () {
      let referenceRef = props.referenceRef;
      let referenceEl: HTMLElement|null = null;
      if (referenceRef.nodeName) {
        referenceEl = referenceRef;
      } else if (isObject(referenceRef) && referenceRef.$el) {
        referenceEl = referenceRef.$el;
      }
      if (!targetEl || !referenceEl) {
        return;
      }
      let referenceElRect = referenceEl.getBoundingClientRect();

      let displayDirection: any = getDropdownDirection(referenceEl, targetEl, props.placement, props.tryAllPlacement, props.tryEndPlacement, props.offset);
      let bottom = displayDirection.bottom;
      let right = displayDirection.right;
      let direction = displayDirection.direction;

      /* let customTransitionName = props.customTransitionName;
      if (!isFunction(customTransitionName)) {
        if (slideUpTransitionPlacements.includes(direction)) {
          transitionName.value = 'bs-slide-up';
        } else if (slideDownTransitionPlacements.includes(direction)) {
          transitionName.value = 'bs-slide-down';
        } else {
          transitionName.value = 'bs-zoom';
        }
      } else {
        transitionName.value = customTransitionName(displayDirection);
      } */
      calcTransitionName(displayDirection);

      if (transitionName.value == 'bs-zoom') {
        let origin = zoomTransitionOrigin[direction];
        transitionOrigin.value = {
          'transform-origin': origin,
          '-ms-transform-origin': origin,
          '-webkit-transform-origin': origin
        };
      } else {
        transitionOrigin.value = {};
      }
      let customStyle = props.customStyle;
      if (isFunction(customStyle)) {
        let style = customStyle(displayDirection);
        if (style && isObject(style)) {
          styleCustom.value = style;
        } else {
          styleCustom.value = {};
        }
      }

      dropdownStyle.horizontalFullInview = displayDirection.horizontal;
      dropdownStyle.verticalFullInview = displayDirection.vertical;
      dropdownStyle.direction = direction;
      dropdownStyle.width = referenceElRect.width;
      dropdownStyle.top = displayDirection.top;
      dropdownStyle.left = displayDirection.left;
      if (bottom === null) {
        dropdownStyle.bottom = null;
      } else {
        dropdownStyle.bottom = displayDirection.bottom;
      }
      if (right === null) {
        dropdownStyle.right = null;
      } else {
        dropdownStyle.right = displayDirection.right;
      }
      ctx.emit('position-change', { ...dropdownStyle });
    };

    // 过渡名称
    let transitionName = ref('');
    let calcTransitionName = function (displayDirection: any) {
      let direction = displayDirection.direction;
      let customTransitionName = props.customTransitionName;
      if (!isFunction(customTransitionName)) {
        if (slideUpTransitionPlacements.includes(direction)) {
          transitionName.value = 'bs-slide-up';
        } else if (slideDownTransitionPlacements.includes(direction)) {
          transitionName.value = 'bs-slide-down';
        } else {
          transitionName.value = 'bs-zoom';
        }
      } else {
        transitionName.value = customTransitionName(displayDirection);
      }
    };

    let slideUpTransitionPlacements = ['top', 'topCenter', 'topEnd'];
    let slideDownTransitionPlacements = ['bottom', 'bottomCenter', 'bottomEnd'];
    let transitionOrigin = ref<any>({});
    // 监听willVisible，在下拉菜单显示出来前计算出下拉菜单显示位置，如过useZoomTransition为true可以略过
    watch(() => props.willVisible, function (isVisible) {
      if (props.useZoomTransition) {
        transitionName.value = 'bs-zoom';
        return;
      }
      if (!isVisible) {
        return;
      }
      let referenceRef = props.referenceRef;
      let referenceEl: HTMLElement|null = null;
      if (!referenceRef) {
        return;
      }
      if (referenceRef.nodeName) {
        referenceEl = referenceRef;
      } else if (isObject(referenceRef) && referenceRef.$el) {
        referenceEl = referenceRef.$el;
      }
      let displayDirection: any = getDropdownDirection(referenceEl!, targetRef.value!, props.placement, props.tryAllPlacement);

      calcTransitionName(displayDirection);
    });

    let onEnter = function (el:HTMLElement, done: () => void) {
      // 延迟50毫秒是为了解决目标元素使用v-if控制后导致元素位置计算不准确问题
      // let timer = setTimeout(function () {
      //   clearTimeout(timer);
      let referenceRef = props.referenceRef;
      let referenceEl: HTMLElement|null = null;
      if (!referenceRef) {
        console.log('referenceRef不存在!-----------------------');
        return;
      }
      if (referenceRef.nodeName) {
        referenceEl = referenceRef;
      } else if (isObject(referenceRef) && referenceRef.$el) {
        referenceEl = referenceRef.$el;
      }
      // console.log('onEnter执行了', referenceEl?.nodeName, el);
      if (!referenceEl) {
        console.log('参照元素不存在!-----------------------');
        return;
      }
      if (!el) {
        console.log('目标元素不存在!========================');
        return;
      }
      isVisible.value = true;
      targetEl = el;
      refresh();

      let onTransitionDone = function () {
        done();
        el.removeEventListener('transitionend', onTransitionDone, false);
        el.removeEventListener('transitioncancel', onTransitionDone, false);
      };
      // 绑定元素的transition完成事件，在transition完成后立即完成vue的过度动效
      el.addEventListener('transitionend', onTransitionDone, false);
      el.addEventListener('transitioncancel', onTransitionDone, false);
      ctx.emit('enter', el, NOOP);
      // }, !targetEl ? 50 : 0);

      referenceScrollParent = getScrollParent(referenceEl);
      let nodeName = referenceScrollParent?.nodeName || '';

      // 如果参照元素有有滚动条的父级节点且不为body，则给该父级节点绑定scroll事件，在容器滚动的时候刷新下拉位置
      if (referenceScrollParent && !documentNodeNames.includes(nodeName)) {
        referenceScrollParent.addEventListener('scroll', scrollEvent, false);
      }
      useGlobalEvent.addEvent('window', 'scroll', scrollEvent);
      useGlobalEvent.addEvent('window', resizeEventName, resizeEvent);
    };

    let onLeave = function (el: HTMLElement) {
      isVisible.value = false;
      let nodeName = referenceScrollParent?.nodeName || '';
      // 下拉隐藏后移除参照元素有有滚动条的父级节点的scroll事件
      if (referenceScrollParent && !documentNodeNames.includes(nodeName)) {
        referenceScrollParent.removeEventListener('scroll', scrollEvent, false);
      }
      useGlobalEvent.removeEvent('window', 'scroll', scrollEvent);
      useGlobalEvent.removeEvent('window', resizeEventName, resizeEvent);
      referenceScrollParent = undefined;
      ctx.emit('after-leave', el);
    };

    let resizeTimer = 0;
    let resizeEventName = 'orientationchange' in window ? 'orientationchange' : 'resize';
    // 浏览器窗口大小改变事件
    let resizeEvent = function () {
      if (!isVisible.value) {
        return;
      }
      let now = new Date().getTime();
      if (resizeTimer == 0 || (now - resizeTimer >= 10)) {
        refresh();
        resizeTimer = now;
      }
    };

    // 滚动条滚动事件
    let scrollTimer = 0;
    let lastScrollTop = 0;
    // let lastScrollLeft = 0;
    let scrollEvent = function (evt: Event) {
      if (!isVisible.value || !targetEl) {
        return;
      }
      let now = new Date().getTime();
      if (scrollTimer == 0 || now - scrollTimer >= 10) {
        let targetElPosition = getStyle(targetEl, 'position');
        if (targetElPosition == 'fixed') {
          return;
        }
        let target = evt.currentTarget!;
        let currentScrollTop = 0;
        // let currentScrollLeft = 0;
        if (target === window || target === document) {
          currentScrollTop = scrollTop();
          // currentScrollLeft = scrollLeft();
        } else {
          currentScrollTop = (target as HTMLElement).scrollTop;
          // currentScrollLeft = (target as HTMLElement).scrollLeft;
        }
        /*
         由于 eleHasScroll() 函数判断元素是否有滚动条会触发滚动条事件，因此这里需要判断当前滚动条是否是由eleHasScroll函数触发的，如果是它触发的则不执行更新。
         如果滚动条是否是由eleHasScroll函数触发的，它的2次执行时间在10-20之间
         */
        /* if ((lastScrollTop == 0 && currentScrollTop == 1) || ((lastScrollTop == 0 && currentScrollTop == 0) && (now - scrollTimer < 20))) {
          console.log('这里拦掉了');
          return;
        } */
        lastScrollTop = currentScrollTop;
        refresh();
        scrollTimer = now;
      }
    };

    /* onMounted(function () {
      // useGlobalEvent.addEvent('window', resizeEventName, resizeEvent);
      // useGlobalEvent.addEvent('window', 'scroll', scrollEvent);
    }); */

    onBeforeMount(function () {
      // 防止下拉菜单为隐藏，组件就被销毁了
      useGlobalEvent.removeEvent('window', resizeEventName, resizeEvent);
      useGlobalEvent.removeEvent('window', 'scroll', scrollEvent);
      targetEl = null;
      // 参照元素有滚动条的父级节点
      referenceScrollParent = undefined;
    });

    return {
      dropdownStyle,
      transitionName,
      transitionOrigin,
      targetRef,
      styleCustom,
      isVisible,

      onEnter,
      onLeave,
      refresh,
      camelCase2KebabCase
    };
  }
});
</script>

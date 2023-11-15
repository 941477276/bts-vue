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
      dynamicClassname,
      {
        'use-bottom-position': dropdownStyle.bottom != null,
        'use-right-position': dropdownStyle.right != null
      }
    ]"
    :style="{
      position: position,
      ...(setWidth && !contextMenu ? { width: dropdownStyle.width + 'px' } : {}),
      ...(setMinWidth && !contextMenu ? { minWidth: dropdownStyle.width + 'px' } : {}),
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
  watch, computed
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
import { getContextmenuDropdownDirection } from './useContextmenuDropdownDirection';
import { useGlobalEvent } from '../../hooks/useGlobalEvent';
import { PlainObject } from '../types';
import { bsDropdownTransitionProps, BsDropdownPositionInfo } from './bs-dropdown-transition-types';

const documentNodeNames = ['HTML', 'BODY'];
const zoomTransitionOrigin: PlainObject = {
  top: '0 100%',
  topEnd: '100% 100%',
  topCenter: '0 50%',
  bottom: '0 0',
  bottomEnd: '100% 0',
  bottomCenter: '0 50%',
  left: '100% 0',
  leftEnd: '100% 100%',
  leftCenter: 'right center',
  right: '0 0',
  rightEnd: '0 100%',
  rightCenter: '0 center'
};
const transitionNameMap = {
  zoom: 'bs-zoom',
  slideUp: 'bs-slide-up',
  slideDown: 'bs-slide-down'
};
const slideUpTransitionPlacements = ['top', 'topCenter', 'topEnd'];
const slideDownTransitionPlacements = ['bottom', 'bottomCenter', 'bottomEnd'];

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
    // 外部自定义样式
    let styleCustom = ref<PlainObject>({});

    // 刷新定位
    let refresh = function () {
      let {
        referenceRef,
        contextMenu,
        virtualMouseEvent
      } = props;
      let displayDirection: any;
      let referenceEl: HTMLElement|null = null;
      let referenceElRect: DOMRect|null = null;
      if (!targetEl) {
        return;
      }
      if (!contextMenu) {
        if (referenceRef.nodeName) {
          referenceEl = referenceRef;
        } else if (isObject(referenceRef) && referenceRef.$el) {
          referenceEl = referenceRef.$el;
        }
        if (!referenceEl) {
          return;
        }
        referenceElRect = referenceEl.getBoundingClientRect();
        displayDirection = getDropdownDirection(referenceEl, targetEl, props.placement, props.tryAllPlacement, props.tryEndPlacement, props.offset);
      } else {
        displayDirection = getContextmenuDropdownDirection(virtualMouseEvent, targetEl, props.placement, props.tryAllPlacement, props.tryEndPlacement, props.offset);
      }

      let bottom = displayDirection.bottom;
      let right = displayDirection.right;
      let direction = displayDirection.direction;
      calcTransitionName(displayDirection);

      if (transitionName.value == transitionNameMap.zoom) {
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
      if (!contextMenu) {
        dropdownStyle.width = referenceElRect!.width;
      }
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
      if (props.useZoomTransition) {
        transitionName.value = transitionNameMap.zoom;
        return;
      }
      if (!isFunction(customTransitionName)) {
        if (slideUpTransitionPlacements.includes(direction)) {
          transitionName.value = transitionNameMap.slideUp;
        } else if (slideDownTransitionPlacements.includes(direction)) {
          transitionName.value = transitionNameMap.slideDown;
        } else {
          transitionName.value = transitionNameMap.zoom;
        }
      } else {
        transitionName.value = customTransitionName(displayDirection);
      }
    };

    let transitionOrigin = ref<any>({});
    // 监听willVisible，在下拉菜单显示出来前计算出下拉菜单显示位置，如过useZoomTransition为true可以略过
    watch(() => props.willVisible, function (isVisible) {
      if (props.useZoomTransition) {
        transitionName.value = transitionNameMap.zoom;
        return;
      }
      if (!isVisible) {
        return;
      }
      let {
        referenceRef,
        virtualMouseEvent,
        contextMenu
      } = props;
      let referenceEl: HTMLElement|null = null;

      let displayDirection: any;
      if (!contextMenu) {
        if (!referenceRef) {
          return;
        }
        if (referenceRef.nodeName) {
          referenceEl = referenceRef;
        } else if (isObject(referenceRef) && referenceRef.$el) {
          referenceEl = referenceRef.$el;
        }
        displayDirection = getDropdownDirection(referenceEl!, targetRef.value!, props.placement, props.tryAllPlacement);
      } else {
        console.log('virtualMouseEvent', virtualMouseEvent);
        displayDirection = getContextmenuDropdownDirection(virtualMouseEvent, targetRef.value!, props.placement, props.tryAllPlacement);
      }
      calcTransitionName(displayDirection);
    });

    watch(() => props.virtualMouseEvent, function () {
      // isVisible为false的时候不允许刷新，否则会与onEnter事件同时执行，导致第二次显示时丢失过渡效果
      if (!props.contextMenu || !isVisible.value) {
        return;
      }
      refresh();
    }, { deep: true });

    let onEnter = function (el:HTMLElement, done: () => void) {
      let {
        referenceRef,
        virtualMouseEvent,
        contextMenu
      } = props;
      let referenceEl: HTMLElement|null = null;
      if (!contextMenu) {
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
      }
      if (!el) {
        console.log('目标元素不存在!========================');
        return;
      }
      isVisible.value = true;
      targetEl = el;
      console.log('进入onEnter事件了,1111111111111');
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

      if (!contextMenu) {
        referenceScrollParent = getScrollParent(referenceEl!);
        let nodeName = referenceScrollParent?.nodeName || '';

        console.log('referenceScrollParent', referenceScrollParent);
        // 如果参照元素有有滚动条的父级节点且不为body，则给该父级节点绑定scroll事件，在容器滚动的时候刷新下拉位置
        if (referenceScrollParent && !documentNodeNames.includes(nodeName)) {
          referenceScrollParent.addEventListener('scroll', scrollEvent, false);
        }
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
          console.log(222);
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
        lastScrollTop = currentScrollTop;
        refresh();
        scrollTimer = now;
      }
    };
    /* onMounted(function () {
      // useGlobalEvent.addEvent('window', resizeEventName, resizeEvent);
      // useGlobalEvent.addEvent('window', 'scroll', scrollEvent);
    }); */

    let dynamicClassname = computed(function () {
      let direction = dropdownStyle.direction;
      if (!props.contextMenu) {
        return `bs-placement-${camelCase2KebabCase(direction)}`;
      }
      return `bs-contextmenu-placement-${camelCase2KebabCase(direction)}`;
    });

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
      dynamicClassname,

      onEnter,
      onLeave,
      refresh,
      camelCase2KebabCase
    };
  }
});
</script>

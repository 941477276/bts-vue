<template>
  <div
    class="bs-dropdown dropdown"
    :class="[{'is-disabled': disabled}, `bs-dropdown-direction-${displayDirection}`]"
    ref="dropdownRef">
    <BsOnlyChild>
      <slot></slot>
    </BsOnlyChild>
    <teleport :disabled="!teleported" :to="appendTo">
      <BsDropdownTransition
        v-if="display"
        @before-enter="transitionLeaveDone = false"
        @after-leave="onAfterLeave"
        :will-visible="willVisible"
        :placement="placement"
        :reference-ref="triggerRef">
        <div
          v-show="visible"
          ref="dropdownMenuRef"
          class="bs-dropdown-menu dropdown-menu"
          :class="dropdownClass"
          :style="{
            zIndex: dropdownMenuStyle.zIndex
          }"
          @mouseenter="onMouseEnter"
          @mouseleave="onMouseLeave">
          <slot name="content"></slot>
        </div>
      </BsDropdownTransition>
    </teleport>
  </div>
</template>

<script lang="ts">
import {
  ref,
  reactive,
  defineComponent,
  nextTick,
  watch,
  Ref,
  computed,
  onBeforeMount
} from 'vue';
import BsOnlyChild from '../bs-slot/BsOnlyChild.vue';
import BsDropdownTransition from '../bs-dropdown-transition/BsDropdownTransition.vue';
import {
  addClass,
  removeClass,
  hasClass
} from '../../utils/bs-util';
import { useClickOutside } from '../../hooks/useClickOutside';
import {
  bsDropdownProps
} from './bs-dropdown-types';
import {
  useZIndex
} from '../../hooks/useZIndex';
import {
  useForwardRef
} from '../../hooks/useForwardRef';
import { useGlobalEvent } from '../../hooks/useGlobalEvent';

export default defineComponent({
  name: 'BsDropdown',
  components: {
    BsOnlyChild,
    BsDropdownTransition
  },
  props: {
    ...bsDropdownProps
  },
  emits: ['show', 'hide', 'clickOutside'],
  setup (props: any, ctx: any) {
    let loaded = ref(false);
    let visible = ref(false);
    let willVisible = ref(false);
    // 触发元素
    let triggerRef = ref<HTMLElement|null>(null);
    useForwardRef(triggerRef);

    let dropdownRef = ref<HTMLElement|null>(null);
    let dropdownMenuRef = ref<HTMLElement|null>(null);
    let dropdownMenuStyle = reactive({
      position: 'absolute',
      zIndex: ''
    });
    let displayDirection = ref(props.placement);
    let transitionLeaveDone = ref(false); // 过渡动画是否执行完毕
    let display = computed(function () {
      // 如果开启了“隐藏时销毁下拉内容”则需等离开过渡动画执行完毕后再销毁
      /* if (props.destroyDropdownMenuOnHide && !visible.value) {
        if (transitionLeaveDone.value) {
          return false;
        } else {
          return true;
        }
      } */
      return !props.lazy || loaded.value;
    });

    let { nextZIndex } = useZIndex();

    let showTimer: number;
    let hideTimer: number;
    // 显示
    let show = function () {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      if (props.disabled) {
        return;
      }
      showTimer = setTimeout(() => {
        clearTimeout(showTimer);
        let doShow = function () {
          visible.value = true;
          if (props.teleported && props.appendTo === 'body') {
            dropdownMenuStyle.zIndex = nextZIndex() + '';
          }

          /* let toggleElIsInFixedContainer = eleIsInFixedParents(toggleEl as HTMLElement);
          if (toggleElIsInFixedContainer && props.teleported) {
            dropdownMenuStyle.position = 'fixed';
          } else {
            dropdownMenuStyle.position = 'absolute';
          } */

          ctx.emit('show');
          useGlobalEvent.addEvent('document', 'keydown', onKeydown);
        };

        if (!loaded.value) {
          loaded.value = true;
          nextTick(function () {
            // willVisible必须比visible先行，以能确保dropdown-transition组件正确的计算过渡动画名称
            willVisible.value = true;
            // 第一次的时候需等待dom初始化完成再显示出来
            let timer = setTimeout(function () {
              clearTimeout(timer);
              doShow();
            }, 20);
          });
        } else {
          willVisible.value = true;
          let timer = setTimeout(function () {
            clearTimeout(timer);
            doShow();
          }, 20);
        }
      }, props.trigger == 'click' ? 0 : 150);
    };
    // 隐藏
    let hide = function (delayTime = 0) {
      clearTimeout(hideTimer);
      clearTimeout(showTimer);
      // 鼠标离开trigger el后不立即隐藏下拉菜单，因为有可能鼠标是移动到了下拉菜单本身中
      hideTimer = setTimeout(() => {
        clearTimeout(hideTimer);
        willVisible.value = false;
        visible.value = false;
        /* if (props.destroyDropdownMenuOnHide) {
          loaded.value = false;
        } */
        ctx.emit('hide');
        useGlobalEvent.removeEvent('document', 'keydown', onKeydown);
      }, delayTime || (props.trigger == 'click' ? 0 : 150));
    };

    // trigger el点击事件
    let clickEvent = function () {
      if (props.disabled) {
        if (visible.value) {
          hide();
        }
        return;
      }
      visible.value ? hide() : show();
    };

    let onMouseEnter = function () {
      if (props.disabled || props.trigger !== 'hover') {
        return;
      }
      show();
    };
    let onMouseLeave = function () {
      if (props.disabled || props.trigger !== 'hover') {
        return;
      }
      hide();
    };
    let onContextMenu = function (evt: MouseEvent) {
      if (props.disabled) {
        return;
      }
      if (evt.preventDefault) {
        evt.preventDefault();
      } else {
        // @ts-ignore
        window.event.returnValue = false;
      }
      show();
    };

    let arrowKeycodes = [40, 38, 13];
    let hoveredMenu: HTMLElement|undefined;
    // 键盘事件
    // TODO 待完善
    let onKeydown = function (evt: KeyboardEvent) {
      let keyCode = evt.keyCode;
      if (!arrowKeycodes.includes(keyCode)) {
        return;
      }
      evt.preventDefault();
      // @ts-ignore
      window.event.returnValue = false;

      let menuItems = Array.from(dropdownMenuRef.value?.children || []).filter(function (domItem) {
        return domItem.nodeType == 1 && hasClass(domItem as HTMLElement, 'dropdown-item');
      });
      let maxIndex = menuItems.length - 1;
      if (keyCode == 40 || keyCode == 38) {
        let hoveredMenuIndex = menuItems.findIndex(function (domItem) {
          return hasClass(domItem as HTMLElement, 'dropdown-item-hover');
        });
        let currentActiveMenuIndex = -1;
        if (hoveredMenuIndex < 0) {
          currentActiveMenuIndex = menuItems.findIndex(function (domItem) {
            return hasClass(domItem as HTMLElement, 'active');
          });
          if (keyCode == 40) { // 向下键
            hoveredMenuIndex = currentActiveMenuIndex > -1 ? (currentActiveMenuIndex) : 0;
          } else {
            hoveredMenuIndex = currentActiveMenuIndex > -1 ? (currentActiveMenuIndex) : 0;
          }
        }

        if (keyCode == 40) { // 向下键
          hoveredMenuIndex++;
          if (hoveredMenuIndex > maxIndex) {
            hoveredMenuIndex = 0;
          }
        } else {
          hoveredMenuIndex--;
          if (hoveredMenuIndex < 0) {
            hoveredMenuIndex = maxIndex;
          }
        }
        if (hoveredMenu) {
          removeClass(hoveredMenu, 'dropdown-item-hover');
        }
        let newHoveredMenu = menuItems[hoveredMenuIndex] as HTMLElement;
        addClass(newHoveredMenu, 'dropdown-item-hover');
        hoveredMenu = newHoveredMenu;
        return;
      }
      // 按回车键执行dom点击，实现选中效果
      hoveredMenu?.click();
    };

    // 判断是否点击了下拉菜单的外面
    useClickOutside([dropdownRef, dropdownMenuRef], (newVal: boolean) => {
      if (newVal) {
        ctx.emit('clickOutside');
        hide();
      }
    });

    let addToggleArrowClass = function (triggerEl: HTMLElement) {
      if (!triggerEl) {
        return;
      }
      if (props.showToggleArrow) {
        addClass(triggerEl, 'dropdown-toggle');
        // @ts-ignore
        triggerEl._bs_add_arrow_class = true;
      } else {
        // @ts-ignore
        if (triggerEl._bs_add_arrow_class) {
          removeClass(triggerEl, 'dropdown-toggle');
          // @ts-ignore
          triggerEl._bs_add_arrow_class = false;
        }
      }
    };
    watch([() => props.trigger, triggerRef], ([trigger, triggerEl], [oldTrigger]) => {
      if (!triggerEl) {
        return;
      }
      addToggleArrowClass(triggerEl);
      // @ts-ignore
      if (triggerEl._bs_dropdown_eventBinded && (trigger === oldTrigger)) {
        return;
      }
      // @ts-ignore
      if (triggerEl._bs_dropdown_eventBinded) {
        // 先移除事件
        triggerEl.removeEventListener('mouseenter', onMouseEnter, false);
        triggerEl.removeEventListener('mouseleave', onMouseEnter, false);
        triggerEl.removeEventListener('contextmenu', onMouseEnter, false);
        triggerEl.removeEventListener('click', onMouseEnter, false);
      }
      // 再绑定事件
      switch (trigger) {
        case 'hover':
          triggerEl.addEventListener('mouseenter', onMouseEnter, false);
          triggerEl.addEventListener('mouseleave', onMouseLeave, false);
          break;
        case 'contextMenu':
          triggerEl.addEventListener('contextmenu', onContextMenu, false);
          break;
        default:
          triggerEl.addEventListener('click', clickEvent, false);
      }
      // @ts-ignore
      triggerEl._bs_dropdown_eventBinded = true;
    }, { immediate: true });

    watch(() => props.showToggleArrow, function () {
      addToggleArrowClass(triggerRef.value!);
    });

    onBeforeMount(function () {
      useGlobalEvent.removeEvent('document', 'keydown', onKeydown);
    });

    return {
      display,
      visible,
      willVisible,
      loaded,
      dropdownRef,
      dropdownMenuRef,
      dropdownMenuStyle,
      displayDirection,
      transitionLeaveDone,
      triggerRef,

      hide,
      show,
      onMouseEnter,
      onMouseLeave,
      onAfterLeave () {
        transitionLeaveDone.value = true;
        if (props.destroyOnHide) {
          loaded.value = false;
        }
      }
      // onDropdownMouseenter,
      // onDropdownMouseleave,
    };
  }
});
</script>

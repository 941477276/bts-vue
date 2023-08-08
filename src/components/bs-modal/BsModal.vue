<template>
  <teleport :disabled="!teleported" :to="appendTo">
    <transition
      :name="transitionName"
      @after-enter="$emit('open')"
      @after-leave="onLeave">
      <div
        ref="rootRef"
        v-if="rendered"
        v-show="visibleInner"
        v-drag="{dragBar: '.modal-header', target: '.modal-dialog', useDrag: draggable, useBoundary: boundary}"
        class="bs-modal modal"
        :class="[{
          'modal-opened': visibleInner,
          'modal-fullscreen': fullscreen
        }, className]"
        tabindex="-1"
        role="dialog"
        :aria-hidden="!visibleInner"
        aria-modal="true"
        :style="{zIndex}"
        @click="onRootElClick">
        <div
          class="modal-dialog"
          :class="[
            {
              'modal-dialog-scrollable': scrollable,
              'modal-dialog-centered': centered
            },
            size ? `modal-${size}` : ''
          ]"
          :style="modalDialogStyle">
          <div class="modal-content">
            <div class="modal-header">
              <slot name="header">
                <h5 class="modal-title">
                  {{ title }}
                </h5>
              </slot>
              <button
                v-if="showClose"
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                @click="close">
                <slot name="close">
                  <span aria-hidden="true">&times;</span>
                </slot>
              </button>
            </div>
            <div class="modal-body">
              <slot></slot>
            </div>
            <div
              v-if="showFooter"
              class="modal-footer">
              <slot name="footer">
                <BsButton data-dismiss="modal" aria-label="Close" @click="close">{{ cancelText }}</BsButton>
                <BsButton
                  type="primary"
                  :loading="confirmLoading"
                  :disabled="confirmLoading"
                  @click="onOKBtnClick">{{ okText }}</BsButton>
              </slot>
            </div>
          </div>
        </div>

      </div>
    </transition>
    <BsMask
      v-if="mask && rendered"
      v-model:visible="maskVisible"
      :z-index="zIndex - 1"></BsMask>
  </teleport>
</template>

<script lang="ts">
import {
  ref,
  defineComponent,
  watch,
  nextTick,
  computed,
  onMounted,
  onUnmounted
} from 'vue';
import BsButton from '../bs-button/BsButton.vue';
import BsMask from '../bs-mask/bs-mask.vue';
import { bsModalProps } from './bs-modal-types';
import { useZIndex } from '../../hooks/useZIndex';
import { useLockScroll } from '../../hooks/useLockScroll';
import { useGlobalEvent } from '../../hooks/useGlobalEvent';
import {
  isPromise
} from '../../utils/bs-util';
import drag from '../../hooks/useDrag';

let modalCount = 0;
let modalIdQueue: string[] = [];
export default defineComponent({
  name: 'BsModal',
  props: bsModalProps,
  components: {
    BsButton,
    BsMask
  },
  directives: {
    drag
  },
  emits: ['update:visible', 'open', 'close'],
  setup (props: any, ctx: any) {
    let modalId = `bs_modal-${++modalCount}`;
    let rootRef = ref<HTMLElement|null>(null);
    let windowWidth = ref(window.innerWidth);
    let rendered = ref(!props.lazy);
    let visibleInner = ref(props.visible);
    let zIndex = ref(1000);
    let { nextZIndex } = useZIndex();
    let unLockScroll: any;
    let maskVisible = ref(false);

    watch(() => props.visible, function (visible) {
      if (props.confirmLoading && !visible) { // 当前不允许关闭
        return;
      }
      if (visible) {
        windowWidth.value = window.innerWidth;
        // 更新z-index
        zIndex.value = nextZIndex();
        // 锁定浏览器滚动条
        if (props.lockScroll) {
          unLockScroll = useLockScroll();
        }
        // 弹窗显示后始终将当前弹窗id至于弹窗队列末尾
        let index = modalIdQueue.findIndex(id => id === modalId);
        if (index > -1) {
          modalIdQueue.splice(index, 1);
        }
        modalIdQueue.push(modalId);

        if (!rendered.value) {
          rendered.value = true;
          nextTick(function () {
            visibleInner.value = true;
            if (props.mask) {
              maskVisible.value = true;
            }
          });
          return;
        }

        visibleInner.value = visible;
        maskVisible.value = true;
        if (props.mask) {
          maskVisible.value = true;
        }
        return;
      }
      visibleInner.value = visible;
      if (props.mask) {
        maskVisible.value = false;
      }
      if (props.destroyOnClose) {
        rendered.value = false;
      }
      // 弹窗隐藏后将当前弹窗id从队列中移除
      let index = modalIdQueue.findIndex(id => id === modalId);
      if (index > -1) {
        modalIdQueue.splice(index, 1);
      }
    }, { flush: 'post', immediate: true });

    // 计算样式
    let modalDialogStyle = computed(function () {
      let width = props.width;
      if (!width) {
        return undefined;
      }
      return {
        // 如果设备屏幕宽度小于575，则不使用外部传递进来的宽度
        maxWidth: windowWidth.value > 575 ? (typeof width === 'number' ? (width + 'px') : width) : ''
      };
    });

    // 关闭弹窗
    let close = function () {
      if (props.confirmLoading) {
        return;
      }
      visibleInner.value = false;
      ctx.emit('update:visible', false);
    };

    // 根元素点击事件
    let onRootElClick = function (evt: MouseEvent) {
      let target = evt.target;
      if (!props.maskClosable || target !== rootRef.value) {
        return;
      }
      close();
    };

    // esc键
    let onESCKeydown = function (evt: KeyboardEvent) {
      if (!props.keyboard || !visibleInner.value) {
        return;
      }
      let keyCode = evt.keyCode;
      if (keyCode != 27) {
        return;
      }
      let index = modalIdQueue.findIndex(id => id === modalId);
      // 按一次esc键，隐藏最上层显示的弹窗
      if (index === modalIdQueue.length - 1) {
        close();
      }
    };

    let onLeave = function () {
      ctx.emit('close');
      if (typeof unLockScroll === 'function') {
        unLockScroll();
        unLockScroll = null;
      }
    };

    let onOKBtnClick = function () {
      let onOk = props.onOk;
      if (typeof onOk === 'function') {
        let result = onOk();
        if (isPromise(result)) {
          result.then(function (canClose?: boolean) {
            if (canClose === false) {
              return;
            }
            // 延迟100毫秒再关闭吗，以让用户看到loading取消效果
            let timer = setTimeout(function () {
              clearTimeout(timer);
              close();
            }, 100);
          });
          return;
        }
        nextTick(function () {
          // confirmLoading为true表示操作正在进行中，此时不关闭弹窗，由调用者手动关闭
          if (props.confirmLoading) {
            return;
          }
          if (result === false) {
            return;
          }
          close();
        });
        return;
      }
      close();
    };

    onMounted(function () {
      useGlobalEvent.addEvent('window', 'keydown', onESCKeydown);
    });
    onUnmounted(function () {
      useGlobalEvent.removeEvent('window', 'keydown', onESCKeydown);
    });

    return {
      rootRef,
      rendered,
      visibleInner,
      maskVisible,
      modalDialogStyle,
      zIndex,

      close,
      onRootElClick,
      onLeave,
      onOKBtnClick
    };
  }
});
</script>

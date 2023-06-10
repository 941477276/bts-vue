<template>
  <teleport :disabled="!teleported" :to="appendTo">
    <div
      ref="rootRef"
      v-if="rendered"
      v-show="drawerRootVisible"
      class="bs-drawer"
      :class="[
        `bs-drawer-${placement}`,
        {
          'fixed-position': teleported && appendTo === 'body',
          'bs-drawer-opened': visibleInner
        },
        drawerClass
      ]"
      tabindex="-1"
      role="dialog"
      aria-hidden="false"
      aria-modal="true"
      :style="{zIndex}"
      @click="onRootElClick">
      <transition
        :name="transitionName"
        @after-enter="$emit('open')"
        @after-leave="onLeave">
        <div
          v-show="visibleInner"
          class="bs-drawer-content-wrapper"
          :class="[
            `bs-drawer-${placement}`
          ]"
          :style="{
            width: typeof width === 'number' ? (width + 'px') : width
          }">
          <div class="bs-drawer-content">
            <div v-if="showHeader || $slots.header" class="bs-drawer-header">
              <slot name="header">
                <h6 class="bs-drawer-title">
                  {{ title }}
                </h6>
              </slot>
              <button
                v-if="showClose"
                class="close"
                type="button"
                data-dismiss="drawer"
                aria-label="Close"
                @click="close">
                <slot name="close">
                  <span aria-hidden="true">&times;</span>
                </slot>
              </button>
            </div>
            <div class="bs-drawer-body">
              <slot></slot>
            </div>
            <div
              v-if="showFooter || $slots.footer"
              class="bs-drawer-footer">
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <BsMask
      v-if="mask && rendered"
      v-model:visible="maskVisible"
      :z-index="zIndex - 1"></BsMask>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, nextTick, onMounted, onUnmounted, ref, watch } from 'vue';
import BsMask from '../bs-mask/bs-mask.vue';
import { bsDrawerProps } from './bs-drawer-types';
import { useZIndex } from '../../hooks/useZIndex';
import { useLockScroll } from '../../hooks/useLockScroll';
import { useGlobalEvent } from '../../hooks/useGlobalEvent';

let drawerCount = 0;
let drawerIdQueue: string[] = [];
export default defineComponent({
  name: 'BsDrawer',
  props: bsDrawerProps,
  components: {
    BsMask
  },
  emits: ['update:visible', 'open', 'close'],
  setup (props: any, ctx: any) {
    let drawerId = `bs_drawer-${++drawerCount}`;
    let rootRef = ref<HTMLElement | null>(null);
    let rendered = ref(!props.lazy);
    let drawerRootVisible = ref(props.visible);
    let visibleInner = ref(props.visible);
    let zIndex = ref(1000);
    let { nextZIndex } = useZIndex();
    let unLockScroll: any;
    let maskVisible = ref(false);

    watch(() => props.visible, function (visible) {
      if (props.closeDisabled && !visible) { // 当前不允许关闭
        return;
      }
      if (visible) {
        // 更新z-index
        zIndex.value = nextZIndex();
        // 锁定浏览器滚动条
        if (props.lockScroll) {
          unLockScroll = useLockScroll();
        }
        // 弹窗显示后始终将当前弹窗id至于弹窗队列末尾
        let index = drawerIdQueue.findIndex(id => id === drawerId);
        if (index > -1) {
          drawerIdQueue.splice(index, 1);
        }
        drawerIdQueue.push(drawerId);

        drawerRootVisible.value = true;
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
      let index = drawerIdQueue.findIndex(id => id === drawerId);
      if (index > -1) {
        drawerIdQueue.splice(index, 1);
      }
    }, {
      flush: 'post',
      immediate: true
    });

    // 关闭弹窗
    let close = function () {
      if (props.closeDisabled) {
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
      let index = drawerIdQueue.findIndex(id => id === drawerId);
      // 按一次esc键，隐藏最上层显示的弹窗
      if (index === drawerIdQueue.length - 1) {
        close();
      }
    };

    let onLeave = function () {
      ctx.emit('close');
      drawerRootVisible.value = false;
      if (typeof unLockScroll === 'function') {
        unLockScroll();
        unLockScroll = null;
      }
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
      drawerRootVisible,
      maskVisible,
      zIndex,

      close,
      onRootElClick,
      onLeave
    };
  }
});
</script>

<template>
  <transition
    name="message_fade"
    @after-leave="$emit('destroy')">
    <div
      v-show="visible"
      v-bind="$attrs"
      class="bs-message"
      :class="[
        `bs-message-${type}`,
        customClass,
        {
          'bs-message-dismissible': showClose,
          'bs-message-with-icon': showIcon
        }
      ]"
      :data-id="id"
      :style="customStyle"
      role="alert message"
      @mouseenter="clearTimer"
      @mouseleave="startTimer">
      <span class="bs-message-icon" v-show="showIcon">
        <slot name="icon">
          <component :is="defaultIconMap[type]"></component>
        </slot>
      </span>
      <div class="bs-message-content">
        <slot>
          <div v-if="!dangerouslyUseHTMLString">{{ message }}</div>
          <div v-else v-html="message"></div>
        </slot>
      </div>
      <button
        type="button"
        class="close"
        data-dismiss="alert message"
        aria-label="Close"
        @click.stop="close">
        <span aria-hidden="true">&times;</span>
      </button>
      <bs-badge
        v-if="grouping"
        v-show="repeatNum > 1"
        :type="type"
        class="grouping-badge"
        pill>{{ repeatNum }}</bs-badge>
    </div>
  </transition>
</template>

<script lang="ts">
import {
  ref,
  defineComponent,
  computed,
  onMounted,
  watch,
  reactive
} from 'vue';
import { bsMessageProps, MessageType } from './bs-message-types';
import BsBadge from '../../components/bs-badge/BsBadge.vue';
import { BsiInfoCircleFill } from 'vue3-bootstrap-icon/es/icons/BsiInfoCircleFill';
import { BsiCheckCircleFill } from 'vue3-bootstrap-icon/es/icons/BsiCheckCircleFill';
import { BsiExclamationCircleFill } from 'vue3-bootstrap-icon/es/icons/BsiExclamationCircleFill';
import { BsiXCircleFill } from 'vue3-bootstrap-icon/es/icons/BsiXCircleFill';

export default defineComponent({
  name: 'BsMessage',
  props: bsMessageProps,
  components: {
    BsBadge,
    BsiInfoCircleFill,
    BsiCheckCircleFill,
    BsiExclamationCircleFill,
    BsiXCircleFill
  },
  emits: ['destroy'],
  setup (props: any, ctx) {
    let visible = ref(false);
    let timer: number;
    let defaultIconMap = reactive<Record<MessageType, string>>({
      info: 'bsi-info-circle-fill',
      success: 'bsi-check-circle-fill',
      warning: 'bsi-exclamation-circle-fill',
      danger: 'bsi-x-circle-fill'
    });

    let customStyle = computed(function () {
      return {
        top: props.offsetTop + 'px',
        zIndex: props.zIndex
      };
    });

    let clearTimer = function () {
      clearTimeout(timer);
    };

    let startTimer = function () {
      clearTimer();
      if (props.duration > 0) {
        timer = setTimeout(close, props.duration);
      }
    };

    let close = function () {
      visible.value = false;
      clearTimer();
      if (typeof props.onClose === 'function') {
        props.onClose();
      }
    };

    // message 一显示出来则立即开启倒计时
    watch(visible, function (newVal: boolean) {
      if (newVal) {
        startTimer();
      }
    });
    watch(() => props.repeatNum, function () {
      startTimer();
    });

    onMounted(function () {
      visible.value = true;
    });
    return {
      visible,
      customStyle,
      defaultIconMap,

      close,
      clearTimer,
      startTimer
    };
  }
});
</script>

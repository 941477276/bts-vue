<template>
<div
  v-show="rootVisible"
  ref="messageBoxRootRef"
  class="bs-message-box-root"
  :class="[
    {
      'bs-message-box-centered': centered
    },
    customClass
  ]"
  :style="{
    zIndex
  }"
  role="dialog"
  aria-modal="true"
  :aria-label="typeof title === 'function' ? title() : title"
  :data-id="id"
  @click="messageBoxRootClick">
  <transition
    name="scalePop"
    @before-enter="$emit('before-enter')"
    @after-enter="$emit('show')"
    @after-leave="afterLeave">
    <div
      ref="messageBoxRef"
      v-show="visible"
      class="bs-message-box"
      :class="[
        {
          'theme-dialog': dialogTheme
        },
        `bs-message-box-${type}`
      ]"
      :style="{
        width: width,
        maxWidth: maxWidth,
        transformOrigin: messageBoxTransformOrigin
      }">
      <div
        v-if="dialogTheme"
        class="bs-message-box-header"
        :class="{
          'has-close': showClose
        }">
        <div class="bs-message-box-title">
          <slot name="title">{{ titleInner }}</slot>
        </div>

        <bs-button class="bs-message-box-close" type="link" aria-label="close" @click="hide">
          <span>×</span>
        </bs-button>
      </div>
      <div class="bs-message-box-body">
        <template v-if="type !== 'prompt'">
          <span
            v-if="showIcon"
            class="bs-message-box-icon">
            <slot name="icon">
              <component :is="defaultIconMap[type]"></component>
            </slot>
          </span>
          <div class="bs-message-box-content-wrap">
            <div class="bs-message-box-title" v-if="!dialogTheme">
              <slot name="title">{{ titleInner }}</slot>
            </div>
            <div class="bs-message-box-content">
              <slot>
                <div class="bs-message-box-dangerous-html" v-if="dangerouslyUseHTMLString" v-html="messageInner"></div>
                <template v-else>{{ messageInner }}</template>
              </slot>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="bs-message-box-content-wrap">
            <div class="bs-message-box-title" v-if="!dialogTheme">
              <slot name="title">{{ titleInner }}</slot>
            </div>
            <slot name="inputBefore"></slot>
            <BsFormItem
              ref="formItemRef"
              :value="inputModelVal"
              :label="inputLabel"
              :rules="inputRules"
              :showLabel="!!inputLabel && (inputLabel + '').trim().length != 0">
              <BsInput
                v-model="inputModelVal"
                v-bind="inputProps"
                :type="inputType"
                :placeholder="inputPlaceholder"></BsInput>
            </BsFormItem>
            <slot name="inputAfter"></slot>
          </div>
        </template>
      </div>
      <div class="bs-message-box-btns">
        <bs-button
          v-if="showCancelButton"
          type="primary"
          :size="cancelSize"
          plain
          @click="cancelClick">{{ cancelText }}</bs-button>
        <bs-button
          v-if="showOkButton"
          :type="okType"
          :size="okSize"
          :loading="okLoadingInner"
          :disabled="okLoadingInner || (typeof okDisabled === 'boolean' ? okDisabled : okDisabled.value)"
          @click="okClick">
          {{ okLoadingInner ? (okLoadingText || okText) : okText }}
        </bs-button>
      </div>
    </div>
  </transition>
</div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  ref,
  isRef,
  computed,
  Component,
  onMounted,
  onUnmounted, reactive
} from 'vue';
import BsButton from '../bs-button/BsButton.vue';
import BsInput from '../bs-input/BsInput.vue';
import BsFormItem from '../bs-form/widgets/BsFormItem.vue';
import { bsMessageBoxProps } from './bs-message-box-types';
import { MessageType } from '../bs-message/bs-message-types';
import { useButtonClick } from './useButtonClick';
import { useGlobalEvent } from '../../hooks/useGlobalEvent';
import { isPromise } from '../../utils/bs-util';
import { BsiInfoCircleFill } from 'vue3-bootstrap-icon/es/icons/BsiInfoCircleFill';
import { BsiCheckCircleFill } from 'vue3-bootstrap-icon/es/icons/BsiCheckCircleFill';
import { BsiExclamationCircleFill } from 'vue3-bootstrap-icon/es/icons/BsiExclamationCircleFill';
import { BsiXCircleFill } from 'vue3-bootstrap-icon/es/icons/BsiXCircleFill';

let messageBoxCount = 0;
export default defineComponent({
  name: 'BsMessageBox',
  components: {
    BsButton,
    BsInput,
    BsFormItem,
    BsiInfoCircleFill,
    BsiCheckCircleFill,
    BsiExclamationCircleFill,
    BsiXCircleFill
  },
  props: bsMessageBoxProps,
  emits: ['before-enter', 'show', 'hide'],
  setup (props: any, ctx: any) {
    let messageBoxRef = ref<HTMLElement|null>(null);
    let id = props.id || `bs_message_box-${++messageBoxCount}`;
    let defaultIconMap = reactive<Record<MessageType, string>>({
      info: 'bsi-info-circle-fill',
      success: 'bsi-check-circle-fill',
      warning: 'bsi-exclamation-circle-fill',
      danger: 'bsi-x-circle-fill'
    });

    // 标题
    let titleInner = computed(function () {
      let title = props.title;
      if (typeof title === 'function') {
        return title();
      } else if (isRef(title)) {
        return title.value;
      }
      return title;
    });

    // 内容
    let messageInner = computed(function () {
      let message = props.message;
      if (isRef(message)) {
        return message.value;
      }
      return message;
    });

    // message box的transform-origin
    let transformOrigin = ref('');
    let messageBoxTransformOrigin = computed(function () {
      if (props.transformOrigin) {
        return props.transformOrigin;
      }
      return transformOrigin.value;
    });
    let setTransformOrigin = function (x: string|number, y?: string|number, z?: string|number) {
      x = typeof x === 'number' ? (x + 'px') : x;
      y = typeof y === 'number' ? (y + 'px') : y;
      z = typeof z === 'number' ? (z + 'px') : z;
      transformOrigin.value = `${x || '50%'} ${y || '50%'} ${z || 0}`;
    };

    let messageBoxRootRef = ref<HTMLElement|null>(null);
    let formItemRef = ref<Component|null>(null);

    // 执行隐藏
    let doHide = function () {
      let okCloseResult = typeof props.onCancel === 'function' ? props.onCancel() : true;
      if (okCloseResult === false) {
        return;
      }
      if (isPromise(okCloseResult)) {
        okCloseResult.then(() => {
          visible.value = false;
        });
      } else {
        visible.value = false;
      }
    };

    // 处理显示与隐藏
    // let { visible, hide, show } = useVisible(props);

    // 确定、取消按钮的点击事件
    let { okClick, cancelClick, okLoadingInner, inputModelVal } = useButtonClick(props, formItemRef, doHide);

    let visible = ref(false);
    let rootVisible = ref(false);

    // 显示
    let show = function () {
      rootVisible.value = true;
      visible.value = true;
    };
    // 隐藏
    let hide = function () {
      if (okLoadingInner.value) {
        return;
      }
      doHide();
    };
    // message box隐藏动画执行完毕后的回调
    let afterLeave = function () {
      rootVisible.value = false;
      ctx.emit('hide');
    };

    // 遮罩点击
    let messageBoxRootClick = function (evt: MouseEvent) {
      let target = ((evt || window.event) as any).target;
      if (props.closeOnClickModal && target === (messageBoxRootRef.value as HTMLElement)) {
        hide();
      }
    };

    let handleKeydown = function (evt: KeyboardEvent) {
      evt = (evt || window.event) as any;
      if (!visible.value) {
        return;
      }
      if (evt.keyCode == 27 && props.keyboard) {
        hide();
      }
    };

    onMounted(function () {
      show();
      useGlobalEvent.addEvent('window', 'keydown', handleKeydown);
    });

    onUnmounted(function () {
      useGlobalEvent.removeEvent('window', 'keydown', handleKeydown);
    });

    return {
      id,
      messageBoxRootRef,
      messageBoxRef,
      formItemRef,
      visible,
      rootVisible,
      okLoadingInner,
      inputModelVal,
      titleInner,
      messageInner,
      messageBoxTransformOrigin,
      defaultIconMap,

      hide,
      okClick,
      cancelClick,
      afterLeave,
      setTransformOrigin,
      messageBoxRootClick
    };
  }
});
</script>

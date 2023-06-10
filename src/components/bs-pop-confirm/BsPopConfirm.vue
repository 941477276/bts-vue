<template>
  <BsTooltip
    ref="tooltipRef"
    v-bind="$props"
    :popperClass="['bs-pop-confirm', popperClass]"
    :pure="false"
    :arrowClass="arrowClass"
    :popper-style="[
      {
        maxWidth: width ? (typeof width === 'number' ? width + 'px' : width) : ''
      },
      popperStyle
    ]"
    :id="popConfirmId"
    :hide-condition="canHide"
    @before-show="$emit('before-show')"
    @before-hide="$emit('before-hide')"
    @content-mouseenter="$emit('content-mouseenter', $event)"
    @content-mouseleave="$emit('content-mouseleave', $event)"
    @show="$emit('show')"
    @hide="$emit('hide')">
    <slot></slot>
    <template #content>
      <div class="bs-pop-confirm-body">
        <div class="bs-pop-confirm-message">
          <div class="bs-pop-confirm-icon" v-if="showIcon">
            <slot name="icon">
              <BsiExclamationCircleFill></BsiExclamationCircleFill>
            </slot>
          </div>
          <div class="bs-pop-confirm-message-text">
           <slot name="content">
             <template v-if="!isRawContent">{{ content }}</template>
             <div v-else v-html="content"></div>
           </slot>
          </div>
        </div>
        <div class="bs-pop-confirm-buttons">
          <slot name="cancel-button">
            <BsButton
              v-if="showCancel"
              :type="cancelType"
              size="sm"
              v-bind="{...cancelButtonProps}"
              @click="onCancelClick">{{ cancelText }}</BsButton>
          </slot>

          <slot name="ok-button">
            <BsButton
              :type="okType"
              size="sm"
              v-bind="{...okButtonProps}"
              :loading="loading"
              :disabled="disabled"
              @click="onOKClick">{{ okText }}</BsButton>
          </slot>
        </div>
      </div>
    </template>
  </BsTooltip>
</template>

<script lang="ts">
import { BsiExclamationCircleFill } from 'vue3-bootstrap-icon/es/icons/BsiExclamationCircleFill';
import BsTooltip from '../bs-tooltip/BsTooltip.vue';
import BsButton from '../bs-button/BsButton.vue';
import {
  PropType,
  ref,
  defineComponent
} from 'vue';
import { bsPopConfirmProps } from './bs-pop-confirm-types';
import {
  isPromise
} from '../../utils/bs-util';

let popConfirmCount = 0;
export default defineComponent({
  name: 'BsPopConfirm',
  components: {
    BsTooltip,
    BsiExclamationCircleFill,
    BsButton
  },
  props: bsPopConfirmProps,
  emits: ['before-show', 'before-hide', 'content-mouseenter', 'content-mouseleave', 'show', 'hide'],
  setup (props: any, ctx: any) {
    let tooltipRef = ref(null);
    let loading = ref(false);
    let popConfirmId = ref(props.id || `bs_pop_confirm-${++popConfirmCount}`);

    // 显示
    let show = function () {
      (tooltipRef.value as any).show();
    };

    // 隐藏
    let hide = function () {
      (tooltipRef.value as any).hide();
    };

    let canHide = function () {
      return !props.hideDisabled && !loading.value;
    };

    let onOKClick = function () {
      let onConfirm = ctx.attrs.onConfirm;
      if (typeof onConfirm !== 'function') {
        return;
      }
      let result = onConfirm();
      if (result === false) {
        return;
      }
      if (isPromise(result)) {
        loading.value = true;
        result.then(function () {
          loading.value = false;
          if (props.hideOnConfirmed) {
            hide();
          }
        }).catch(function () {
          loading.value = false;
        });
      }
    };

    let onCancelClick = function () {
      hide();
    };

    return {
      tooltipRef,
      loading,
      popConfirmId,

      show,
      hide,
      canHide,
      onOKClick,
      onCancelClick
    };
  }
});
</script>

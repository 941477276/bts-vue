<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="bs-alert alert"
      :class="[
        `alert-${type}`,
        {
          'alert-dismissible': closeable,
          'has-icon': $slots.icon,
          show: closeable && visible
        }
      ]"
      role="alert">
      <span v-if="$slots.icon" class="bs-alert-icon">
        <slot name="icon"></slot>
      </span>

      <div class="bs-alert-content">
        <slot v-if="!description && !$slots.description">{{ title }}</slot>
        <template v-else>
          <dl>
            <dt class="alert-heading">
              <slot>{{ title }}</slot>
            </dt>
            <dd class="alert-description">
              <slot name="description">{{ description }}</slot>
            </dd>
          </dl>
        </template>
      </div>
      <button
        v-if="closeable"
        type="button"
        class="close"
        :class="{
          'custom-close': !!closeText
        }"
        data-dismiss="alert"
        aria-label="Close"
        @click="close">
        <span aria-hidden="true" :data-custome-text="!!closeText">{{ closeText ? closeText : '&times;' }}</span>
      </button>
    </div>
  </transition>
</template>

<script lang="ts">
import {
  ref,
  defineComponent,
  PropType
} from 'vue';
import { bsAlertProps } from './bs-alert-types';
import {
  isPromise
} from '../../utils/bs-util';

export default defineComponent({
  name: 'BsAlert',
  props: bsAlertProps,
  emits: ['close'],
  setup (props: any, ctx: any) {
    let visible = ref(true);

    let close = function () {
      let beforeClose = props.beforeClose;
      if (typeof beforeClose === 'function') {
        let result = beforeClose();
        if (result === false) {
          return;
        } else if (isPromise(result)) {
          result.then(function () {
            visible.value = false;
            ctx.emit('close');
          });
          return;
        }
      }
      visible.value = false;
      ctx.emit('close');
    };
    return {
      visible,

      close
    };
  }
});
</script>

<!--<template>
  <li
    class="bs-tabs-nav-item"
    :data-tabs-nav-item-id="id"
    :class="{
      'is-disabled': disabled
    }"
    @click="onClick">
    <button
      type="button"
      :disabled="disabled"
      :aria-label="label"
      class="bs-tabs-nav-button">
      <slot>{{ label }}</slot>
    </button>
  </li>
</template>-->

<script lang="ts">
import {
  defineComponent,
  h,
  createVNode
} from 'vue';
import { isFunction } from '@vue/shared';
import { BsiX } from 'vue3-bootstrap-icon/es/icons/BsiX';

export default defineComponent({
  name: 'BsTabsNavItem',
  components: {
    BsiX
  },
  props: {
    activeTabId: {
      type: String,
      default: ''
    },
    label: {
      type: [String, Number, Function],
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    closeable: { // 是否可关闭
      type: Boolean,
      default: false
    },
    itemSlot: {
      type: Function,
      default: null
    }
  },
  emits: ['click', 'close'],
  setup (props: any, ctx: any) {
    let onClick = function () {
      if (props.disabled || props.id === props.activeTabId) {
        return;
      }
      ctx.emit('click', {
        name: props.name,
        id: props.id
      });
    };

    let onClose = function (evt: Event) {
      evt = evt || window.event;
      ('stopPropagation' in evt) ? evt.stopPropagation() : (evt as any).cancelBubble;
      if (props.disabled) {
        return;
      }
      ctx.emit('close', {
        name: props.name,
        id: props.id
      });
    };

    return () => {
      let closeIcon = props.closeable ? h('span', {
        'class': 'bs-tabs-nav-close'
      }, createVNode(BsiX, {
        // name: 'x',
        onClick: onClose
      })) : null;
      let children = h('button', {
        'class': 'bs-tabs-nav-button',
        type: 'button',
        'aria-label': props.label,
        disabled: props.disabled
      }, isFunction(props.itemSlot) ? props.itemSlot() : (isFunction(props.label) ? props.label() : props.label));
      return h('li', {
        'class': [
          'bs-tabs-nav-item',
          {
            'is-active': props.activeTabId === props.id,
            'is-disabled': props.disabled
          }
        ],
        'data-tabs-nav-item-id': props.id,
        onClick
      }, [children, closeIcon]);
    };
  }
});
</script>

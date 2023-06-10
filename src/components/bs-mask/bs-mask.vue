<template>
  <teleport v-if="appendTo" :to="appendTo">
    <transition :name="transitionName" @after-leave="$emit('hide')" @after-enter="$emit('show')">
      <div
        v-show="visibleInner"
        class="bs-mask"
        :id="id"
        :class="extraClass"
        :style="{
          zIndex
        }"
        @click="onClick"></div>
    </transition>
  </teleport>
  <transition v-else  :name="transitionName" @after-leave="$emit('hide')" @after-enter="$emit('show')">
    <div
      v-show="visibleInner"
      class="bs-mask"
      :id="id"
      :class="extraClass"
      :style="{
        zIndex
      }"
      @click="onClick"></div>
  </transition>
</template>

<script lang="ts">
import {
  ref,
  defineComponent,
  onMounted,
  onUnmounted,
  watch
} from 'vue';

export default defineComponent({
  name: 'bs-mask',
  props: {
    id: {
      type: String,
      default: ''
    },
    visible: {
      type: Boolean,
      default: false
    },
    clickHide: { // 是否点击遮罩即隐藏
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 1024
    },
    extraClass: {
      type: String,
      default: ''
    },
    transitionName: {
      type: String,
      default: 'fadeMask'
    },
    appendTo: {
      type: [String, Object],
      default: ''
    }
  },
  emits: ['click', 'update:visible', 'show', 'hide'],
  setup (props: any, ctx: any) {
    let visibleInner = ref(props.visible);
    let stopWatch = watch(() => props.visible, function (newVisible) {
      if (visibleInner.value !== newVisible) {
        visibleInner.value = newVisible;
      }
    });

    let hide = function () {
      visibleInner.value = false;
      ctx.emit('update:visible', false);
    };
    let show = function () {
      visibleInner.value = true;
      ctx.emit('update:visible', true);
    };
    let onClick = function () {
      if (props.clickHide) {
        hide();
      }
      ctx.emit('click');
    };

    onUnmounted(function () {
      stopWatch();
    });

    return {
      visibleInner,

      show,
      hide,
      onClick
    };
  }
});
</script>

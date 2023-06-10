<template>
  <BsPopper>
    <BsTooltipTrigger
      :virtual-triggering="virtualTriggering"
      :virtual-ref="virtualRef"
      :disabled="disabled"
      :trigger="trigger"
      :enterable="enterable">
      <slot v-if="$slots.default"></slot>
    </BsTooltipTrigger>

    <BsTooltipContent
      ref="tooltipContentComRf"
      v-bind="$attrs"
      :id="tooltipId"
      :teleported="teleported"
      :append-to="appendTo"
      :popper-class="popperClassInner"
      :visible="isShow"
      :placement="placement"
      :arrow-offset="arrowOffset"
      :popper-options="popperOptions"
      :popper-style="popperStyle"
      :offset="offset"
      :z-index="zIndex"
      :strategy="strategy"
      :disabled="disabled"
      :enterable="enterable"
      :destroy-on-hide="destroyOnHide"
      :transition-name="transitionName"
      :gpu-acceleration="transitionName === 'scale' ? false : gpuAcceleration">
      <slot name="content">
        <div v-if="!isRawContent">
          {{ content }}
        </div>
        <div v-else v-html="content"></div>
      </slot>

      <BsPopperArrow
        v-if="showArrow"
        :arrow-class="arrowClass"></BsPopperArrow>
    </BsTooltipContent>
  </BsPopper>
</template>

<script lang="ts">
import {
  cloneVNode,
  defineComponent,
  PropType,
  computed,
  ref,
  provide,
  toRef,
  readonly,
  watch
} from 'vue';
import {
  BsTooltipContext,
  bsTooltipContextKey
} from '../bs-popper/bs-popper-types';
import BsPopper from '../bs-popper/BsPopper.vue';
// import BsPopperTrigger from '../bs-popper/BsPopperTrigger.vue';
// import BsPopperContent from '../bs-popper/BsPopperContent.vue';
import BsPopperArrow from '../bs-popper/BsPopperArrow.vue';
import BsTooltipContent from './BsTooltipContent.vue';
import BsTooltipTrigger from './BsTooltipTrigger.vue';
import { bsTooltipProps } from './bs-tooltip-types';

let tooltipCount = 0;
export default defineComponent({
  name: 'BsTooltip',
  components: {
    BsPopper,
    // BsPopperTrigger,
    // BsPopperContent,
    BsPopperArrow,
    BsTooltipContent,
    BsTooltipTrigger
  },
  props: bsTooltipProps,
  emits: ['before-show', 'before-hide', 'content-mouseenter', 'content-mouseleave', 'show', 'hide'],
  setup (props: any, ctx: any) {
    let tooltipContentComRf = ref(null);
    let popperClassInner = computed(function () {
      if (!props.pure) {
        return props.popperClass;
      }
      return [
        'bs-tooltip',
        props.theme === 'custom' ? props.themeClass : `is-${props.theme}`,
        props.popperClass
      ];
    });
    let tooltipId = ref(props.id || `tooltip_${++tooltipCount}`);

    // 判断popper是否被外部控制，如果外部传递的 visible prop 变量值为boolean类型则认为被外部控制了
    let isControlled = computed(function () {
      return typeof props.visible === 'boolean';
    });

    let isShow = ref(false);

    let showTimer: number;
    let hideTimer: number;

    // 显示
    let show = function () {
      if (props.disabled || isControlled.value) {
        return;
      }
      let showCondition = props.showCondition;
      if (typeof showCondition === 'function') {
        let flag = showCondition();
        if (flag === false) {
          return;
        }
      }
      // 每次显示或隐藏时都清除两个定时器，这样当trigger类型为hover时就可以实现鼠标可以移入popper的效果
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      showTimer = setTimeout(function () {
        isShow.value = true;
      }, props.showDelay);
    };

    // 隐藏
    let hide = function () {
      if (props.disabled || isControlled.value) {
        return;
      }
      let hideCondition = props.hideCondition;
      if (typeof hideCondition === 'function') {
        let flag = hideCondition();
        if (flag === false) {
          return;
        }
      }
      clearTimeout(hideTimer);
      clearTimeout(showTimer);
      hideTimer = setTimeout(function () {
        isShow.value = false;
      }, props.hideDelay);
    };

    // 更新popper位置
    let updatePopper = function (updateZIndex: boolean) {
      if (tooltipContentComRf.value) {
        (tooltipContentComRf.value as any).updatePopper?.(updateZIndex);
      }
    };

    watch(() => props.visible, function (visibleVal: boolean) {
      if (isControlled.value) {
        isShow.value = visibleVal;
      }
    }, { immediate: true });

    provide<BsTooltipContext>(bsTooltipContextKey, {
      show,
      hide,
      onBeforeShow: () => {
        ctx.emit('before-show');
      },
      onShow: () => {
        ctx.emit('show');
      },
      onBeforeHide: () => {
        ctx.emit('before-hide');
      },
      onHide: () => {
        ctx.emit('hide');
      },
      onContentMouseenter: (evt: MouseEvent) => {
        ctx.emit('content-mouseenter', evt);
      },
      onContentMouseleave: (evt: MouseEvent) => {
        ctx.emit('content-mouseleave', evt);
      },
      trigger: toRef(props, 'trigger'),
      isShow: readonly(isShow),
      isControlled
    });

    return {
      popperClassInner,
      isShow,
      tooltipId,
      tooltipContentComRf,

      show,
      hide,
      updatePopper
    };
  }
});
</script>

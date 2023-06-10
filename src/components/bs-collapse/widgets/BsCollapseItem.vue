<template>
  <div
    class="bs-collapse-item"
    :class="{
        'is-active': isExpanded2,
        'is-disabled': disabled
      }"
    :data-id="collapseItemId">
    <div
      ref="headerRef"
      class="bs-collapse-item-header"
      :class="{
        'arrow-left': arrowLeft
      }"
      role="tab"
      tabindex="0"
      :aria-expanded="isExpanded2"
      @click="onHeaderClick">
      <span v-if="showArrow && arrowLeft" class="bs-collapse-header-arrow">
        <BsiChevronRight></BsiChevronRight>
      </span>
      <slot name="title">{{ title }}</slot>
      <span v-if="showArrow && !arrowLeft" class="bs-collapse-header-arrow">
        <BsiChevronRight></BsiChevronRight>
      </span>
    </div>
    <BsCollapseTransition v-if="rendered">
      <div
        v-show="isExpanded2"
        class="bs-collapse-item-body">
        <div class="bs-collapse-item-content">
          <slot></slot>
        </div>
      </div>
    </BsCollapseTransition>
  </div>
</template>

<script lang="ts">
import {
  ref,
  defineComponent,
  nextTick,
  inject,
  computed,
  watch
} from 'vue';
import { BsiChevronRight } from 'vue3-bootstrap-icon/es/icons/BsiChevronRight';
import BsCollapseTransition from '../../bs-collapse-transition/BsCollapseTransition.vue';
import {
  bsCollapseItemProps,
  bsCollapseContextKey,
  CollapseContext
} from '../bs-collapse-types';

let collapseItemCount = 0;
export default defineComponent({
  name: 'BsCollapseItem',
  components: {
    BsiChevronRight,
    BsCollapseTransition
  },
  props: bsCollapseItemProps,
  setup (props: any, ctx: any) {
    let countId = collapseItemCount++;
    let collapseItemId = ref(`bs_collapse_item-${countId}`);
    let headerRef = ref<HTMLElement|null>(null);
    // let isExpanded = ref(false); // 是否为展开
    let isExpanded2 = ref(false);
    let rendered = ref(false); // 是否已经渲染body

    // 折叠面板父级组件上下文
    let collapseCtx: CollapseContext = inject<CollapseContext>(bsCollapseContextKey)!;

    let nameOrCountId = computed(function () {
      let propsName = props.name;
      if ((typeof propsName !== 'string' && typeof propsName !== 'number') || (propsName + '').length == 0) {
        return countId;
      }
      return propsName;
    });

    watch(collapseCtx?.activeNames, function (activeNames) {
      let flag = (activeNames || []).includes(nameOrCountId.value);
      if (flag) {
        if (!rendered.value) {
          rendered.value = true;
          nextTick(function () {
            isExpanded2.value = true;
          });
          return;
        }
        isExpanded2.value = true;
        return;
      }
      isExpanded2.value = false;
    }, { immediate: true, deep: true });

    let onHeaderClick = function (evt: Event) {
      if (props.disabled) {
        return;
      }
      collapseCtx?.handleItemChange(!isExpanded2.value, nameOrCountId.value);
    };

    return {
      headerRef,
      collapseItemId,
      // isExpanded,
      isExpanded2,
      rendered,

      onHeaderClick
    };
  }
});
</script>

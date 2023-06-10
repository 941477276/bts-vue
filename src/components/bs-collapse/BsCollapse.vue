<template>
  <div
    class="bs-collapse"
    :class="{
      'bs-collapse-simple': simple,
      'bs-collapse-focus-effect': headerFocusEffect
    }"
    role="tablist"
    :aria-multiselectable="!accordion">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {
  Ref,
  ref,
  defineComponent,
  provide,
  watch
} from 'vue';
import {
  bsCollapseProps,
  bsCollapseContextKey,
  CollapseContext
} from './bs-collapse-types';

export default defineComponent({
  name: 'BsCollapse',
  props: bsCollapseProps,
  emits: ['update:modelValue', 'change'],
  setup (props: any, ctx: any) {
    let activeNames: Ref<(string|number)[]> = ref(Array.isArray(props.modelValue) ? props.modelValue : [props.modelValue]);

    // 处理折叠面板状态改变
    let handleItemChange = function (expended: boolean, name: string|number) {
      let isAccordion = props.accordion;
      let activeNamesArr = activeNames.value;
      if (expended) {
        if (isAccordion) {
          // 重新赋值一个新函数不起作用
          activeNamesArr.length = 0;
          activeNamesArr[0] = name;
        } else {
          activeNamesArr.push(name);
        }
      } else {
        if (isAccordion) {
          activeNamesArr.length = 0;
        } else {
          let index = activeNamesArr.findIndex(item => item == name);
          if (index > -1) {
            activeNamesArr.splice(index, 1);
          }
        }
      }
      let value = isAccordion ? activeNamesArr[0] : [...activeNamesArr];
      ctx.emit('update:modelValue', isAccordion ? activeNamesArr[0] : [...activeNamesArr]);
      ctx.emit('change', name, expended, value);
    };

    watch(() => props.modelValue, function (modelValue) {
      modelValue = Array.isArray(modelValue) ? modelValue : [modelValue];
      if (modelValue.join(',') == activeNames.value.join(',')) {
        return;
      }
      // activeNames.value = [...modelValue];
      activeNames.value = [...modelValue];
    }, { immediate: true, deep: true });

    provide<CollapseContext>(bsCollapseContextKey, {
      activeNames,
      handleItemChange
    });

    return {
      // collapseItemCtxs
    };
  }
});
</script>

<template>
  <div class="bs-pagination-sizes">
    <bs-select v-model="model" :size="size">
      <bs-option
        v-for="num in pageSizes"
        :value="num"
        :label="`${num}条/页`"
        :key="`size_${num}`"></bs-option>
    </bs-select>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  PropType
} from 'vue';
import { BsSize } from '../../../types';
import BsSelect from '../../../bs-select/BsSelect.vue';

export default defineComponent({
  name: 'Sizes',
  components: {
    BsSelect
  },
  props: {
    size: {
      type: String as PropType<BsSize>,
      default: ''
    },
    pageSize: { // 每页显示条目个数，支持v-model
      type: Number,
      default: 10
    },
    pageSizes: { // 每页显示个数选择器的选项设置
      type: Array,
      default () {
        return [10, 20, 30, 40, 50, 100];
      }
    }
  },
  emit: ['change'],
  setup (props: any, ctx: any) {
    let model = computed({
      get () {
        return props.pageSize;
      },
      set (newVal: number) {
        if (newVal != props.pageSize && (newVal + '').length > 0) {
          ctx.emit('change', newVal);
        }
      }
    });
    return {
      model
    };
  }
});
</script>

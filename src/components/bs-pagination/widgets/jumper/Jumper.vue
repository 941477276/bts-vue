<template>
  <div class="bs-pagination-jumper" :class="size ? `bs-pagination-jumper-${size}` : ''">
    前往
    <bs-input
      type="number"
      :size="size"
      v-model="page"
      @blur="changeCurrentPage"
      @keyup.enter.stop="changeCurrentPage"></bs-input>
    页
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  PropType
} from 'vue';
import { BsSize } from '../../../types';
import BsInput from '../../../bs-input/BsInput.vue';

export default defineComponent({
  name: 'Jumper',
  components: {
    BsInput
  },
  props: {
    currentPage: { // 当前页码，支持v-model
      type: Number,
      default: 1
    },
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
    },
    totalPages: {
      type: Number,
      default: 0
    }
  },
  emit: ['change'],
  setup (props: any, ctx: any) {
    let jumperPage = 0;
    let page = computed({
      get () {
        return props.currentPage;
      },
      set (newVal: string) {
        let pageNum = Math.floor(Math.abs((newVal as any) * 1));
        if (pageNum > props.totalPages) {
          pageNum = props.totalPages;
        } else if (pageNum <= 0) {
          pageNum = 1;
        }
        jumperPage = pageNum;
      }
    });

    let changeCurrentPage = function () {
      let pageNum = jumperPage || props.currentPage;
      if (pageNum > props.totalPages) {
        pageNum = props.totalPages;
      }
      if (pageNum != props.currentPage) {
        ctx.emit('change', pageNum);
      }
    };

    return {
      page,
      changeCurrentPage
    };
  }
});
</script>

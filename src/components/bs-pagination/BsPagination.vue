<!--<template>
  <div
    class="bs-pagination"
    :class="size ? `bs-pagination-${size}` : ''">
    <Total
      :total="total"
      :total-page="totalPages"></Total>
    <Sizes
      :size="size"
      :page-size="pageSize"
      :page-sizes="pageSizes"
      @change="changePageSize"></Sizes>
    <BsPager
      v-bind="$props"
      :total-pages="totalPages"
      :size="size"
      @change="changeCurrentPage"></BsPager>
    <Jumper
      :size="size"
      :total-pages="totalPages"
      @change="changeCurrentPage"></Jumper>
  </div>
</template>-->

<script lang="ts">
import {
  h,
  computed,
  defineComponent,
  PropType,
  VNode
} from 'vue';
import BsPager from './widgets/bs-pager/BsPager.vue';
import Total from './widgets/total/Total.vue';
import Sizes from './widgets/sizes/Sizes.vue';
import Jumper from './widgets/jumper/Jumper.vue';
import { bsPaginationProps, BsPaginationLayoutKey } from './bs-pagination-types';

export default defineComponent({
  name: 'BsPagination',
  components: {
    BsPager,
    Total,
    Sizes,
    Jumper
  },
  props: bsPaginationProps,
  emits: ['update:currentPage', 'update:pageSize', 'sizeChange', 'currentChange'],
  setup (props: any, ctx: any) {
    // 总页数
    let totalPages = computed(function () {
      let total = props.total;
      let pageSize = props.pageSize;
      if (!total || !pageSize || total < 1 || pageSize < 1) {
        return 0;
      }
      return Math.ceil(total / pageSize);
    });
    // 处理当前页码变化
    let changeCurrentPage = function (currentPage: number) {
      if (typeof currentPage !== 'object' && currentPage !== props.currentPage && !props.disabledPage?.includes(currentPage)) {
        ctx.emit('update:currentPage', currentPage);
        ctx.emit('currentChange', currentPage);
      }
    };
    // 处理每页显示条目个数变化
    let changePageSize = function (pageSize: number) {
      if (pageSize != props.pageSize) {
        ctx.emit('update:pageSize', pageSize);
        ctx.emit('sizeChange', pageSize);
      }
    };

    return () => {
      let size = props.size;
      let slotDefault = ctx.slots.default;
      let layoutMap: Record<BsPaginationLayoutKey, VNode | VNode[] | null> = {
        total: h(Total, {
          totalPage: totalPages.value,
          total: props.total
        }),
        pager: h(BsPager, {
          ...props,
          'total-pages': totalPages.value,
          size,
          onChange: changeCurrentPage
        }),
        sizes: h(Sizes, {
          size,
          'page-size': props.pageSize,
          'page-sizes': props.pageSizes,
          onChange: changePageSize
        }),
        jumper: h(Jumper, {
          size,
          'current-page': props.currentPage,
          'total-pages': totalPages.value,
          onChange: changeCurrentPage
        }),
        slot: slotDefault ? slotDefault() : null
      };
      let layoutArr = Array.isArray(props.layout) ? props.layout : props.layout?.split(',');
      let children: Array<VNode | VNode[] | null> = (layoutArr || []).map((item: BsPaginationLayoutKey) => {
        (item as string) = item.trim();
        return layoutMap[item];
      });

      /* eslint-disable */
      return h('div', {
        'class': [
          'bs-pagination',
          size ? `bs-pagination-${size}` : ''
        ],
        style: {
          display: (props.hideOnSinglePage && totalPages.value <= 1) ? 'none' : ''
        }
      }, children);
    }
  }
});
</script>

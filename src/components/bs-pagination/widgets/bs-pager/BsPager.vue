<template>
  <ul
    class="pagination bs-pagination-pager"
    :class="size ? `pagination-${size}`: ''"
    @click.stop="onPaginationClick">
    <li
      v-if="usePrev"
      class="page-item prev"
      :class="{
        disabled: currentPage == 1
      }"
      role="presentation">
      <button type="button" class="page-link">
        <slot name="prev">
          <template v-if="prevText">{{ prevText }}</template>
          <BsiChevronLeft v-else></BsiChevronLeft>
        </slot>
      </button>
    </li>
    <li
      v-show="totalPages > 0"
      class="page-item"
      :class="{
        active: currentPage == 1,
        disabled: disabledPage?.includes(1)
      }"
      :aria-current="currentPage == 1 ? 'page' : null"
      role="presentation">
      <button type="button" class="page-link">1</button>
    </li>
    <li
      v-show="showPrevMore"
      class="page-item prev-more"
      role="presentation"
      :title="`向前${supperOffset}页`">
      <button type="button" class="page-link">
        <BsiThreeDots class="three-dots"></BsiThreeDots>
        <BsiChevronDoubleLeft class="chevron-double-left"></BsiChevronDoubleLeft>
      </button>
    </li>
    <li
      v-for="pageNum in pagers"
      class="page-item"
      :class="{
        active: currentPage == pageNum,
        disabled: disabledPage?.includes(pageNum)
      }"
      :key="pageNum"
      :aria-current="currentPage == pageNum ? 'page' : null"
      role="presentation">
      <button type="button" class="page-link">{{ pageNum }}</button>
    </li>
    <li
      v-show="showNextMore"
      class="page-item next-more"
      role="presentation"
      :title="`向后${supperOffset}页`">
      <button type="button" class="page-link">
        <BsiThreeDots class="three-dots"></BsiThreeDots>
        <BsiChevronDoubleRight class="chevron-double-right"></BsiChevronDoubleRight>
      </button>
    </li>
    <li
      v-show="totalPages > 1"
      class="page-item"
      :class="{
        active: currentPage == totalPages,
        disabled: disabledPage?.includes(totalPages)
      }"
      :aria-current="currentPage == totalPages ? 'page' : null"
      role="presentation">
      <button type="button" class="page-link">{{ totalPages }}</button>
    </li>
    <li
      v-if="useNext"
      class="page-item next"
      :class="{
        disabled: currentPage == totalPages
      }"
      role="presentation">
      <button type="button" class="page-link">
        <slot name="next">
          <template v-if="nextText">{{ nextText }}</template>
          <BsiChevronRight v-else></BsiChevronRight>
        </slot>
      </button>
    </li>
  </ul>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  ref,
  computed,
  watchEffect
} from 'vue';
import { BsiChevronLeft } from 'vue3-bootstrap-icon/es/icons/BsiChevronLeft';
import { BsiChevronRight } from 'vue3-bootstrap-icon/es/icons/BsiChevronRight';
import { BsiThreeDots } from 'vue3-bootstrap-icon/es/icons/BsiThreeDots';
import { BsiChevronDoubleLeft } from 'vue3-bootstrap-icon/es/icons/BsiChevronDoubleLeft';
import { BsiChevronDoubleRight } from 'vue3-bootstrap-icon/es/icons/BsiChevronDoubleRight';
import { BsSize } from '../../../types';
import {
  hasClass,
  parents
} from '../../../../utils/bs-util';

export default defineComponent({
  name: 'BsPager',
  components: {
    BsiChevronLeft,
    BsiChevronRight,
    BsiThreeDots,
    BsiChevronDoubleLeft,
    BsiChevronDoubleRight
  },
  props: {
    pageSize: { // 每页显示条目个数，支持v-model
      type: Number,
      default: 10
    },
    currentPage: { // 当前页码，支持v-model
      type: Number,
      default: 1
    },
    total: { // 总条目数
      type: Number,
      default: null
    },
    totalPages: { // 总页数
      type: Number,
      default: null
    },
    pagerCount: { // 页码按钮的数量，当总页数超过该值时会折叠（大于等于 5 且小于等于 21 的奇数）
      type: Number,
      default: 7
    },
    pageSizes: { // 每页显示个数选择器的选项设置
      type: Array,
      default () {
        return [10, 20, 30, 40, 50, 100];
      }
    },
    disabledPage: { // 禁用的页码
      type: Array,
      default () {
        return [];
      }
    },
    size: { // 分页器大小
      type: String as PropType<BsSize>,
      default: ''
    },
    prevText: { // 上一页按钮的文字
      type: String,
      default: ''
    },
    nextText: {
      type: String, // 下一页按钮的文字
      default: ''
    },
    usePrev: { // 是否使用上一页按钮
      type: Boolean,
      default: true
    },
    useNext: { // 是否使用下一页按钮
      type: Boolean,
      default: true
    }
  },
  emit: ['change'],
  setup (props: any, ctx: any) {
    let showPrevMore = ref(false);
    let showNextMore = ref(false);

    /*  计算页码
      这部分代码逻辑来自 element-ui-plus （https://github.com/element-plus/element-plus/blob/dev/packages/components/pagination/src/components/pager.vue）
     */
    let pagers = computed(function () {
      let pagersArr: number[] = [];

      let showPrevMore = false;
      let showNextMore = false;
      let pagerCount = props.pagerCount;
      let totalPagesVal = props.totalPages;
      let currentPage = props.currentPage;
      let halfPagerCount = (pagerCount - 1) / 2;

      if (totalPagesVal > pagerCount) {
        // 判断是否需要前后的“更多页码”按钮
        if (currentPage > pagerCount - halfPagerCount) {
          showPrevMore = true;
        }
        if (currentPage < totalPagesVal - halfPagerCount) {
          showNextMore = true;
        }
      }
      if (showPrevMore && !showNextMore) {
        const startPage = totalPagesVal - (pagerCount - 2);
        for (let i = startPage; i < totalPagesVal; i++) {
          pagersArr.push(i);
        }
      } else if (!showPrevMore && showNextMore) {
        for (let i = 2; i < pagerCount; i++) {
          pagersArr.push(i);
        }
      } else if (showPrevMore && showNextMore) {
        const offset = Math.floor(pagerCount / 2) - 1;
        for (let i = currentPage - offset; i <= currentPage + offset; i++) {
          pagersArr.push(i);
        }
      } else {
        for (let i = 2; i < totalPagesVal; i++) {
          pagersArr.push(i);
        }
      }

      return pagersArr;
    });

    // 快速跳转页码的偏移量
    let supperOffset = computed(function () {
      return props.pagerCount - 2;
    });

    watchEffect(function () {
      const halfPagerCount = (props.pagerCount - 1) / 2;
      const totalPagesVal = props.totalPages;
      showPrevMore.value = false;
      showNextMore.value = false;
      if (totalPagesVal > props.pagerCount) {
        if (props.currentPage > props.pagerCount - halfPagerCount) {
          showPrevMore.value = true;
        }
        if (props.currentPage < totalPagesVal - halfPagerCount) {
          showNextMore.value = true;
        }
      }
    });

    let findNotDisabledPage = function (page: number, isPrev: boolean) {
      let disabledPages = props.disabledPage;
      let newPage = page;
      while (disabledPages?.includes(newPage)) {
        if (isPrev) {
          newPage--;
        } else {
          newPage++;
        }
      }
      if (newPage < 1) {
        newPage = 1;
      }
      if (newPage > props.totalPages) {
        newPage = props.totalPages;
      }
      return newPage;
    };

    let onPaginationClick = function (evt: MouseEvent) {
      let target = evt.target as HTMLElement;
      let pageNumber = Number(target.innerText);
      let pageItem;
      let pagerCountOffset = supperOffset.value;
      if (hasClass(target, 'page-item')) {
        pageItem = target;
      } else {
        pageItem = parents(target, 'page-item');
      }
      if (!pageItem) {
        return;
      }
      let newPage;
      let currentPage = props.currentPage;
      let isNewPageDisabled = false;
      if (hasClass(pageItem, 'prev')) {
        if (currentPage != 1) {
          newPage = findNotDisabledPage(currentPage - 1, true);
        }
      } else if (hasClass(pageItem, 'next')) {
        if (currentPage != props.totalPages) {
          newPage = findNotDisabledPage(currentPage + 1, false);
        }
      } else if (hasClass(pageItem, 'prev-more')) {
        newPage = currentPage - pagerCountOffset;
        newPage = findNotDisabledPage(newPage <= 0 ? 1 : newPage, true);
      } else if (hasClass(pageItem, 'next-more')) {
        newPage = findNotDisabledPage(currentPage + pagerCountOffset, false);
      } else {
        newPage = isNaN(pageNumber) ? 1 : pageNumber;
        isNewPageDisabled = props.disabledPage?.includes(newPage);
      }
      if (newPage && newPage !== currentPage && !isNewPageDisabled) {
        ctx.emit('change', newPage);
      }
    };

    return {
      pagers,
      showPrevMore,
      showNextMore,
      supperOffset,

      onPaginationClick
    };
  }
});
</script>

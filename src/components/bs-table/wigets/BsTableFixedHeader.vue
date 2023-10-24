<template>
  <div class="bs-table-header">
    <table
      class="table"
      :class="{
        'table-sm': size == 'sm'
      }"
      :style="{
        // tableLayout: 'fixed',
        width: width > 0 ? (width + 'px') : ''
      }">
      <colgroup v-if="colgroup.length > 0">
        <col
          v-for="(item, index) in colgroup"
          :key="index"
          :style="{
            width: item.width + 'px'
          }"/>
      </colgroup>
      <BsTableHead
        :columns="columns"
        :table-slots="tableSlots"
        :table-body-has-scroll="tableBodyHasScroll"
        :table-body-scroll-width="tableBodyScrollWidth"
        :selection-config="selectionConfig"
        :colgroup="colgroup"
        :table-width="tableWidth"
        :table-rows-count="tableRowsCount"
        :checked-rows-count="checkedRowsCount"></BsTableHead>
    </table>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  SetupContext
} from 'vue';
import BsTableHead from './BsTableHead.vue';
import { bsTableHeadProps } from './bs-table-head-props';

export default defineComponent({
  name: 'BsTableFixedHeader',
  components: {
    BsTableHead
  },
  props: {
    ...bsTableHeadProps
  },
  setup (props: any, ctx: SetupContext) {

  }
});
</script>

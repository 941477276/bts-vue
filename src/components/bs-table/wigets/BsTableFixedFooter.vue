<template>
  <div class="bs-table-footer" @scroll="$emit('scroll', $event)">
    <table
      class="table"
      :class="{
        'table-sm': size == 'sm'
      }"
      :style="{
        width: tableWidth > 0 ? (tableWidth + 'px') : ''
      }">
      <colgroup v-if="colgroup.length > 0">
        <col
          v-for="(item, index) in colgroup"
          :key="index"
          :style="{
            width: item.width + 'px'
          }"/>
      </colgroup>
      <BsTableFoot
        :columns="columns"
        :table-slots="tableSlots"
        :table-body-has-scroll="tableBodyHasScroll"
        :table-body-scroll-width="tableBodyScrollWidth"
        :table-data="tableData"
        :colgroup="colgroup"
        :table-width="tableWidth"
        :footer-method="footerMethod"
        :footer-rows="footerRows"></BsTableFoot>
    </table>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  SetupContext
} from 'vue';
import BsTableFoot from './BsTableFoot.vue';
import { bsTableFootProps } from './bs-table-foot-props';

export default defineComponent({
  name: 'BsTableFixedFooter',
  components: {
    BsTableFoot
  },
  props: {
    ...bsTableFootProps
  },
  emits: ['scroll']
});
</script>

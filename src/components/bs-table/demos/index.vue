<template>
  <div class="demo-index">
    <Basic></Basic>
    <ColAndRowSpan></ColAndRowSpan>
    <FixedHeader></FixedHeader>
    <FixedColumn></FixedColumn>
    <ExpandRow></ExpandRow>
    <CustomStyle></CustomStyle>
    <CustomHeadAndContent></CustomHeadAndContent>
    <MultipleSelect></MultipleSelect>
    <SingleSelect></SingleSelect>
    <KeepSelect></KeepSelect>
    <ShowTooltip></ShowTooltip>
    <Resizeable></Resizeable>
    <TreeData></TreeData>
    <TreeDataAsyncLoad></TreeDataAsyncLoad>
    <UpdateRow></UpdateRow>
    <Filter></Filter>
    <Sort></Sort>
    <TableFooter></TableFooter>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';
import ColAndRowSpan from './col-and-row-span.vue';
import FixedHeader from './fixed-header.vue';
import FixedColumn from './fixed-column.vue';
import ExpandRow from './expand-row.vue';
import CustomStyle from './custom-style.vue';
import CustomHeadAndContent from './custom-head-and-content.vue';
import MultipleSelect from './multiple-select.vue';
import SingleSelect from './single-select.vue';
import KeepSelect from './keep-selected.vue';
import ShowTooltip from './show-tooltip.vue';
import Resizeable from './resizeable.vue';
import TreeData from './tree-data.vue';
import TreeDataAsyncLoad from './tree-data-async-load.vue';
import UpdateRow from './update-row.vue';
import Filter from './filter.vue';
import Sort from './sort.vue';
import TableFooter from './table-footer.vue';

export default defineComponent({
  name: 'DemoIndex',
  components: {
    Basic,
    ColAndRowSpan,
    FixedHeader,
    FixedColumn,
    ExpandRow,
    CustomStyle,
    CustomHeadAndContent,
    MultipleSelect,
    SingleSelect,
    KeepSelect,
    ShowTooltip,
    Resizeable,
    TreeData,
    TreeDataAsyncLoad,
    UpdateRow,
    Filter,
    Sort,
    TableFooter
  }
});
</script>

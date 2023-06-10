<!--<template>
  <div class="bs-pagination-total">
    共 {{total}} 条, {{totalPage}} 页
  </div>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue';

export default defineComponent({
  name: 'Total',
  props: {
    total: {
      type: Number,
      default: null
    },
    totalPage: {
      type: Number,
      default: null
    }
  }
});
</script>-->
<script lang="ts">
import {
  h
} from 'vue';
function Total (props: any) {
  /* eslint-disable */
  return h('div', {
    'class': 'bs-pagination-total'
  }, `共 ${props.total} 条, ${props.totalPage} 页`);
};
Total.props = ['total', 'totalPage'];
export default Total;
</script>

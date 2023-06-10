<template>
<div class="component-usage">
  <div>
    <h3>基础用法</h3>
    <!--<Basic></Basic>-->
    <BsTable :columns="columns2" :data="data2" stripe border row-key="key">
    </BsTable>
  </div>

</div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, h } from 'vue';
import Basic from './demos/basic.vue';

export default defineComponent({
  name: 'BsTableUsage',
  components: {
    Basic
  },
  setup (props: any) {

    const columns2 = [
      {
        label: 'Name',
        prop: 'name'
      },
      {
        label: 'Age',
        prop: 'age'
      },
      {
        label: 'Home phone',
        // colSpan: 2,
        prop: 'tel'
      },
      {
        label: 'Phone',
        colSpan: 0,
        prop: 'phone'
      },
      {
        label: 'Address',
        prop: 'address'
      }
    ];

    const data2 = ref([
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        tel: '0571-22098909',
        phone: 18889898989,
        address: 'New York No. 1 Lake Park',
      },
      {
        key: '2',
        name: 'Jim Green',
        tel: '0571-22098333',
        phone: 18889898888,
        age: 42,
        address: 'London No. 1 Lake Park',
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'Sidney No. 1 Lake Park',
      },
      {
        key: '4',
        name: 'Jim Red',
        age: 18,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'London No. 2 Lake Park',
      },
      {
        key: '5',
        name: 'Jake White',
        age: 18,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'Dublin No. 2 Lake Park',
      },
    ]);

    return {
      columns2,
      data2
    };
  }
});
</script>

<style lang="scss" scoped>

</style>

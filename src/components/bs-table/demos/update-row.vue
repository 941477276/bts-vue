<docs>

---
order: 0
title:
  zh-CN: 更新子节点
  en-US: Update row children
description:
  zh-CN: 在树形表格中，修改行的`children`属性，界面并不会更新，此时需要调用`table`组件的`updateRow`函数去触发更新
  en-US: In the tree table, if you modify the `children` attribute of the row, the dom will not be updated. At this time, you need to call the `updateRow` function of the `table` component to trigger the update.
---
</docs>

<template>
  <div>
    <div class="operate-area">
      <BsButton type="primary" @click="addChildrenForYuexiu">Add children for 越秀区</BsButton>
      <BsButton type="danger" @click="removeChildrenFromShenzhen">Remove children from 深圳市</BsButton>
    </div>

    <BsTable ref="tableRef" :columns="columns2" :data="data2" :selection-config="selectionConfig" :selected-row-keys="selectedRowKeys"
             border default-expand-all-rows row-key="value">
      <template #opt>
        <bs-button type="primary" size="sm">Edit</bs-button>
        <bs-button type="danger" size="sm" style="margin-left: 0.5rem;">Delete</bs-button>
      </template>
    </BsTable>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const columns2 = [
  {
    label: 'Area name',
    prop: 'title',
    minWidth: 160,
    filterSlotName: 'nameFilter'
  },
  {
    label: 'Key',
    prop: 'key',
    minWidth: 180
  },
  {
    label: 'Value',
    prop: 'value'
  },
  {
    label: 'Operate',
    prop: 'opt',
    minWidth: 140
  }
];

const data2 = ref([
  {
    'title': '佛山市',
    'key': '64c204f08cdedc661690ffd9',
    'value': '001003'
  },
  {
    'children': [
      {
        'title': '越秀区',
        'key': '64c204e68cdedc661690ffd8',
        'value': '001002002'
      },
      {
        'title': '增城区',
        'key': '64c204d98cdedc661690ffd7',
        'value': '001002001'
      }
    ],
    'title': '广州市',
    'key': '64c204cb8cdedc661690ffd2',
    'value': '001002'
  },
  {
    'children': [
      {
        'title': '福田区',
        'key': '64c204138cdedc661690ffbd',
        'value': '001001003'
      },
      {
        'children': [
          {
            'title': '新安街道',
            'key': '64c204c28cdedc661690ffd1',
            'value': '001001002003'
          },
          {
            'title': '西乡街道',
            'key': '64c204b28cdedc661690ffd0',
            'value': '001001002002'
          }
        ],
        'title': '宝安区',
        'key': '64c204098cdedc661690ffbc',
        'value': '001001002'
      },
      {
        'children': [
          {
            'title': '吉华街道',
            'key': '64c2043d8cdedc661690ffc4',
            'value': '001001001003'
          },
          {
            'children': [
              {
                'title': '布吉一街',
                'key': '64c2045e8cdedc661690ffc9',
                'value': '001001001002001'
              },
              {
                'title': '荣超花园',
                'key': '64c204798cdedc661690ffca',
                'value': '001001001002002'
              }
            ],
            'title': '布吉街道',
            'key': '64c2042a8cdedc661690ffc3',
            'value': '001001001002'
          },
          {
            'title': '坂田街道',
            'key': '64c204228cdedc661690ffc2',
            'value': '001001001001'
          }
        ],
        'title': '龙岗区',
        'key': '64b5e8c4fc205615f7314d9a',
        'value': '001001001'
      }
    ],
    'title': '深圳市',
    'key': '64b5e8bafc205615f7314d95',
    'value': '001001'
  }
]);

let tableRef = ref();
let selectionConfig = {
  type: 'checkbox'
};
let selectedRowKeys = ['001002002001', '001001002003', '001001003', '001001002002', '001001001003', '001001001002002', '001001001002001'];

const addChildrenForYuexiu = function () {
  let yuexiuArea = data2.value[1].children[0];
  yuexiuArea.children = [
    {
      'title': '人民街道',
      'key': '64b5e8lsfc2l5x15f7314dl9',
      'value': '001002002001'
    },
    {
      'title': '东山街道',
      'key': '98b5e8lafc2l8k15f7314do9',
      'value': '001002002002'
    }
  ];
  // tableRef.value.updateRow(yuexiuArea);
  tableRef.value.updateRow(yuexiuArea.value);
  setTimeout(function () {
    console.log('selectedAreaName:', tableRef.value.getSelectionInfo());
  }, 0);
};
const removeChildrenFromShenzhen = function () {
  let shenzhen = data2.value[2];
  shenzhen.children.splice(2, 1);
  tableRef.value.updateRow(shenzhen);
  setTimeout(function () {
    console.log('selectedAreaName:', tableRef.value.getSelectionInfo());
  }, 0);
};
</script>

<style lang="scss" scoped>
.operate-area{
  margin-bottom: 1rem;
  .bs-button{
    margin-right: 1rem;
  }
}
</style>

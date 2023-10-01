<template>
  <div class="component-usage">
    <div>
      <div class="operate-area">
        <BsButton type="primary" @click="addChildrenForYuexiu">Add children for 越秀区</BsButton>
        <BsButton type="danger" @click="removeChildrenFromShenzhen">Remove children from 深圳市</BsButton>
      </div>

      <BsTable ref="tableRef" :columns="columns2" :data="data2" :selection-config="selectionConfig" :selected-row-keys="selectedRowKeys"
               stripe border default-expand-all-rows row-key="value">
        <template #opt>
          <bs-button type="primary" size="sm">Edit</bs-button>
          <bs-button type="danger" size="sm" style="margin-left: 0.5rem;">Delete</bs-button>
        </template>
      </BsTable>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, h, nextTick } from 'vue';
import Basic from './demos/basic.vue';

function FilterIcon () {
  return h(
    'span',
    { class: 'filter-icon' },
    h('svg', {
      viewBox: '0 0 1024 1024',
      version: '1.1',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '1em',
      height: '1em',
      fill: 'currentColor'
    }, h('path', {
      'd': 'M597.439829 981.333333a42.666667 42.666667 0 1 1-85.2992 0v-597.333333c0-9.216 3.003733-18.2272 8.533334-25.6l204.8-273.066667H128.174763l204.8 273.066667c5.5296 7.3728 8.533333 16.384 8.533333 25.6v366.318933l72.8064 72.840534a42.666667 42.666667 0 0 1-60.3136 60.347733l-85.333333-85.333333a42.666667 42.666667 0 0 1-12.4928-30.173867V398.2336L8.708096 68.266667c-21.0944-28.125867-1.024-68.266667 34.133333-68.266667H810.773163c35.157333 0 55.227733 40.1408 34.133333 68.266667l-247.466667 329.966933V981.333333zM725.439829 512h256a42.666667 42.666667 0 1 1 0 85.333333h-256a42.666667 42.666667 0 1 1 0-85.333333z m0 170.666667h256a42.666667 42.666667 0 1 1 0 85.333333h-256a42.666667 42.666667 0 1 1 0-85.333333z m0 170.666666h256a42.666667 42.666667 0 1 1 0 85.333334h-256a42.666667 42.666667 0 1 1 0-85.333334z'
    }))
  );
}

export default defineComponent({
  name: 'BsTableUsage',
  components: {
    // Basic
    FilterIcon
  },
  setup (props: any) {
    let expandedRowKeys = ref([]/* ['001001001002002', '001002'] */);
    let tableRef = ref();

    const columns3 = [
      {
        label: 'Name',
        prop: 'name',
        // After the sorting function is executed, it is in ascending order, and the value of sortOrder needs to be `ascend`
        // 排序函数执行完成后为升序，sortOrder的值需为`ascend`
        sortOrder: 'ascend',
        fixed: 'left',
        minWidth: 130,
        sorter (rowData1: Record<string, any>, rowData2: Record<string, any>) {
          return rowData1.name.length - rowData2.name.length;
        },
        filterSlotName: 'nameFilter'
      },
      {
        label: 'Age',
        prop: 'age',
        sortOrder: 'ascend',
        defaultSortOrder: 'descend', // default descending sort（默认降序排序）
        sorter (rowData1: Record<string, any>, rowData2: Record<string, any>) {
          return rowData1.age - rowData2.age;
        }
      },
      {
        label: 'Address',
        prop: 'address',
        showTooltip: true,
        minWidth: 240,
        resizeable: true,
        sortDirections: ['descend'], // Only supports descending order（只支持降序排序）
        sorter (rowData1: Record<string, any>, rowData2: Record<string, any>) {
          return rowData2.address.length - rowData1.address.length;
        }
      },
      {
        label: 'Hobbies',
        prop: 'hobbies',
        minWidth: 160,
        customCell (rowData: Record<string, any>) {
          return rowData.hobbies.join(', ');
        }
      },
      {
        label: 'Operate',
        prop: 'opt',
        minWidth: 140,
        resizeable: true
      }
    ];

    const data3 = ref([
      {
        'name': 'John',
        'age': 25,
        'address': '123 Main St, New York, NY',
        'id': 'A123456',
        'hobbies': ['hiking', 'photography']
      },
      {
        'name': 'Alice',
        'age': 30,
        'address': '456 Elm St, Los Angeles, CA',
        'id': 'B789012',
        'hobbies': ['reading', 'coding']
      },
      {
        'name': 'Daniel',
        'age': 29,
        'address': '654 Birch St, Miami, FL',
        'id': 'E567890',
        'hobbies': ['traveling', 'dancing']
      },
      {
        'name': 'Olivia',
        'age': 24,
        'address': '321 Cedar St, Seattle, WA',
        'id': 'F234567',
        'hobbies': ['coding', 'movies']
      },
      {
        'name': 'Sophia',
        'age': 32,
        'address': '876 Maple St, Boston, MA',
        'id': 'G890123',
        'hobbies': ['sports', 'cooking']
      },
      {
        'name': 'William',
        'age': 31,
        'address': '234 Spruce St, Austin, TX',
        'id': 'H456789',
        'hobbies': ['gaming', 'coding']
      },
      {
        'name': 'James',
        'age': 23,
        'address': '567 Cherry St, Denver, CO',
        'id': 'I012345',
        'hobbies': ['swimming', 'writing']
      },
      {
        'name': 'Emma',
        'age': 26,
        'address': '789 Rose St, Philadelphia, PA',
        'id': 'J678901',
        'hobbies': ['singing', 'shopping']
      }
    ]);

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

    /* setTimeout(function () {
      console.log('给越秀区添加子节点');
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
    }, 1000); */

    /* setTimeout(function () {
      console.log('移除龙岗区');
      let shenzhen = data2.value[2];
      shenzhen.children.splice(2, 1);
      tableRef.value.updateRow(shenzhen);
    }, 2500); */

    let dropdownRef = ref();
    let filterName = ref('');

    let selectionConfig = {
      type: 'checkbox'
    };
    let selectedRowKeys = ['001002002001', '001001002003', '001001003', '001001002002', '001001001003', '001001001002002', '001001001002001'];
    return {
      expandedRowKeys,
      tableRef,
      columns3,
      data3,
      dropdownRef,
      filterName,
      columns2,
      data2,

      selectionConfig,
      selectedRowKeys,

      addChildrenForYuexiu () {
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
      },
      removeChildrenFromShenzhen () {
        let shenzhen = data2.value[2];
        shenzhen.children.splice(2, 1);
        tableRef.value.updateRow(shenzhen);
        setTimeout(function () {
          console.log('selectedAreaName:', tableRef.value.getSelectionInfo());
        }, 0);
      }
    };
  }
});
</script>

<style lang="scss" scoped>
::v-deep(.highlight-row) {
  color: #fff;
  background-color: #59a9ff;
}

::v-deep(.custom-classname-cell) {
  color: #fff;
  background-color: #f90;
}
.filter-icon{
  padding: 0 0.25rem;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 0.875rem;
  transition: background-color .3s, color .3s;
  &:hover{
    color: var(--primary);
    background-color: #eee;
  }
}

::v-global(.name-filter-dropdown){
  padding: 0.75rem!important;
}
::v-global(.name-filter-btns) {
  padding-top: 0.5rem;
  text-align: right;
}

.operate-area{
  margin-bottom: 1rem;
  .bs-button{
    margin-right: 1rem;
  }
}
</style>

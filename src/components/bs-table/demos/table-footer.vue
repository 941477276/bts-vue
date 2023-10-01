<docs>

---
order: 0
title:
  zh-CN: 表尾数据
  en-US: Footer data
description:
  zh-CN: 如果你想在表格尾部展示一些合计信息或总结数据，那么你可以给表格设置一个`footerRows`或`footerMethod`属性来开启它。`footerRows`为一个包含行和列的数组，你可以高度的自定义这些行和列。
  en-US: If you want to display some summary data at the end of the table, then you can set the `footerRows` or `footerMethod` property to the table to enable it. `footerRows` is an array containing rows and columns, which you can highly customize.
---
</docs>

<template>
  <div>
    <h6>Demo1</h6>
    <BsTable :columns="columns2" :data="data2" :footer-rows="footerRows" border row-key="value"
      :selection-config="{
        type: 'checkbox'
      }">
      <template #customFootCell="{ row }">
        <strong style="color: var(--primary)">table record count: {{ row.length }}</strong>
      </template>

      <template #opt>
        <bs-button type="primary" size="sm">Edit</bs-button>
        <bs-button type="danger" size="sm" style="margin-left: 0.5rem;">Delete</bs-button>
      </template>
    </BsTable>

    <h6>Demo2</h6>
    <BsTable :columns="columns2" :data="data2" :footer-method="footerMethod" border row-key="value" max-height="400px"
      :selection-config="{
        type: 'checkbox'
      }">
      <template #customFootCell="{ row }">
        <strong style="color: var(--primary)">table record count: {{ row.length }}</strong>
      </template>

      <template #opt>
        <bs-button type="primary" size="sm">Edit</bs-button>
        <bs-button type="danger" size="sm" style="margin-left: 0.5rem;">Delete</bs-button>
      </template>
    </BsTable>
  </div>
</template>

<script setup lang="ts">
import { h, ref } from 'vue';

const columns2 = [
  {
    label: 'Name',
    prop: 'name'
  },
  {
    label: 'Age',
    prop: 'age',
    width: 80
  },
  {
    label: 'Address',
    prop: 'address',
    showTooltip: true,
    minWidth: 160
  },
  {
    label: 'Hobbies',
    prop: 'hobbies',
    customCell (rowData: Record<string, any>) {
      return rowData.hobbies.join(', ');
    }
  },
  {
    label: 'Operate',
    prop: 'opt',
    width: 140
  }
];

const data2 = ref([
  {
    'name': 'Jon',
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

let getFooterRows = function (column1Fixed?: boolean) {
  return [
    {
      columns: [
        {
          label: 'Average age',
          // Set the column as a fixed column（设置列为固定列）
          fixed: column1Fixed ? 'left' : false,
          cellAttrs: {
            colSpan: 2,
            style: {
              // When the column is a fixed column, the style.left value of the column must be set
              // 当列为固定列时，必须设置列的style.left值
              left: 0
            }
          }
        },
        {
          label: data2.value.reduce(function (result, item) {
            result += item.age;
            return result;
          }, 0) / data2.value.length
        },
        { label: '--', slotName: 'customFootCell' }, // Customize Cell Content(自定义单元格内容)
        { label: '--' },
        { label: '--' }
      ]
    },
    {
      columns: [
        {
          label: 'Most people\'s hobby',
          cellAttrs: {
            colSpan: 4
          }
        },
        {
          label (tableData: Record<string, any>[], rowIndex: number) { // Customize Cell Content(自定义单元格内容)
            let hobbyMap: Record<string, number> = tableData.reduce(function (result, dataItem) {
              let hobbies = dataItem.hobbies;
              hobbies.forEach((hobby: string) => {
                if (hobby in result) {
                  result[hobby]++;
                } else {
                  result[hobby] = 1;
                }
              });
              return result;
            }, {});
            let mostPeopleHobby = '';
            let mostPeopleHobbyCount = 0;

            for (let attr in hobbyMap) {
              if (hobbyMap[attr] > mostPeopleHobbyCount) {
                mostPeopleHobbyCount = hobbyMap[attr];
                mostPeopleHobby = attr;
              }
            }
            // return mostPeopleHobby;
            return h('mark', {
              style: {
                padding: '0.25rem 0.5rem',
                fontWeight: 'bold'
              }
            }, `${mostPeopleHobby}(${mostPeopleHobbyCount})`);
          },
          cellAttrs: {
            colSpan: 2
          }
        }
      ]
    }
  ];
};

let footerRows = getFooterRows();
let footerMethod = function () {
  let rows = getFooterRows(true);
  let firstRow = rows[0];

  firstRow.columns[0].cellAttrs.style.color = '#fff';
  firstRow.columns[0].cellAttrs.style.backgroundColor = '#007BFF';

  rows.splice(1, 0, {
    rowAttrs: {
      class: 'foot-row-custom',
      style: {
        backgroundColor: '#f60'
      }
    },
    columns: [
      {
        label: 'Custom row',
        cellAttrs: {
          colSpan: 2
        }
      },
      {
        label: '--',
        cellAttrs: {
          colSpan: 2
        }
      },
      {
        label: '--',
        cellAttrs: {
          colSpan: 2
        }
      }
    ]
  });

  return rows;
};
</script>

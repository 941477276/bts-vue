<script lang="ts">
import {
  ref,
  inject,
  h,
  defineComponent
} from 'vue';
import { datePickerCtx, DatePickerCtx } from '../../bs-date-picker-types';
import dayjs from 'dayjs';

export default defineComponent({
  name: 'PickerCellInner',
  props: {
    getCellNode: { // 自定义单元格的渲染内容
      type: Function,
      default: null
    },
    cellData: {
      type: Object,
      default () {
        return {};
      }
    },
    rowIndex: {
      type: Number
    },
    cellIndex: {
      type: Number
    }
  },
  setup (props: any, ctx: any) {
    let datePicker = inject<DatePickerCtx>(datePickerCtx, {
      ctx: {}
    })!;
    let now = dayjs();
    return function () {
      let cellData = props.cellData;
      let getCellNode = props.getCellNode;
      let slot;
      let pickerType = datePicker.pickerType?.value;
      let currentMode = datePicker.currentMode?.value;
      // 当前展示的面板与面板类型一致时才允许自定义渲染，否则会导致所有面板都自定义渲染了
      let useCustomRender = (!currentMode) || pickerType == currentMode;
      let defaultSlot = ctx.slots.default;
      if (typeof getCellNode === 'function') {
        slot = useCustomRender ? getCellNode : defaultSlot;
      } else {
        let dateRenderSlot = datePicker.ctx.slots?.dateRender;
        slot = useCustomRender ? (dateRenderSlot || defaultSlot) : defaultSlot;
      }

      return h('div', {
        'class': 'bs-picker-cell-inner'
      }, slot({
        dayjsIns: cellData.dayjsIns,
        ...cellData,
        now,
        cellIndex: props.cellIndex,
        rowIndex: props.rowIndex
      }));
    };
  }
});
</script>

import { isFunction } from '@vue/shared';

/**
 * 单元格内容组件
 * @param props
 * @constructor
 */
export function BsTableCellContent (props: any) {
  let slot = props.tableSlots?.[props.slotName];
  // 优先渲染插槽里的内容
  if (slot) {
    return slot({
      rowIndex: props.rowIndex,
      cellIndex: props.cellIndex,
      row: props.rowData
    });
  }
  let label = props.label;
  if (isFunction(label)) {
    if (props.isHeadCell) {
      return label(props.cellIndex, props.column);
    }
    return label(props.rowData, props.cellIndex, props.rowIndex);
  }
  return label;
};

BsTableCellContent.props = ['label', 'tableSlots', 'slotName', 'rowIndex', 'rowData', 'cellIndex', 'column', 'isHeadCell'];

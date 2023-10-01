import { isFunction } from '@vue/shared';
import { camelCase2KebabCase } from '../../../utils/bs-util';

/**
 * 自定义内容组件
 * @param props
 * @constructor
 */
export function BsTableCustomContent (props: any) {
  let {
    slotName,
    rowIndex,
    cellIndex,
    rowData,
    column
  } = props;
  let slot = props.tableSlots?.[slotName] || props.tableSlots?.[camelCase2KebabCase(slotName)];
  let parentDefaultSlot = props.defaultContent;
  // 优先渲染插槽里的内容
  if (parentDefaultSlot || slot) {
    let slotFn = parentDefaultSlot || slot;
    return slotFn({
      rowIndex,
      cellIndex,
      row: rowData,
      column
    });
  }
  let label = props.label;
  if (isFunction(label)) {
    if (props.isHeadCell) {
      return label(cellIndex, column);
    }
    return label(rowData, cellIndex, rowIndex);
  }
  return label;
};

BsTableCustomContent.props = ['label', 'tableSlots', 'defaultContent', 'slotName', 'rowIndex', 'rowData', 'cellIndex', 'column', 'isHeadCell'];

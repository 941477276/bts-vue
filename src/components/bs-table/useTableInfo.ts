import { computed, nextTick, reactive, ref, watch } from 'vue';
import {
  BsColgroupItem,
  bsExpandColumnKey,
  bsSelectionColumnKey,
  bsTableSortDirections,
  BsTableColumn,
  BsTableColumnInner, BsTableSortDirection
} from './bs-table-types';
import { hasScroll, isNumber, isString, scrollWidth, isFunction } from '../../utils/bs-util';

const formatHeight = function (height: string|number): string {
  if (isNumber(height)) {
    if (height <= 0) {
      return '';
    }
    return height + 'px';
  }
  if (isString(height)) {
    let parsedNumber = parseFloat(height as string);
    if ((height as string).length == 0 || (!isNaN(parsedNumber) && parsedNumber <= 0)) {
      return '';
    }
    return height as string;
  }
  return '';
};

// 表格自身相关信息hook
export function useTableInfo (props: any) {
  // 是否有选择列（这里不能采用computed计算，如果采用computed，当props.selectionConfig变化时会导致columnsInfo重新计算。selectionColumnWidth同理）
  let hasSelectionColumn = ref(false);
  // 选择列列宽
  let selectionColumnWidth = ref<string|number>(50);

  watch(() => (props.selectionConfig || {}), function (selectionConfig) {
    let { type, columnWidth } = selectionConfig;
    hasSelectionColumn.value = type == 'checkbox' || type == 'radio';
    selectionColumnWidth.value = columnWidth || 50;
  }, { immediate: true });

  // 列信息
  let columnsInfo = computed(function () {
    let columns = props.columns || [];
    let allowExpand = !!props.allowExpand;
    let fixedLeftColumns: BsTableColumnInner[] = [];
    let fixedRightColumns: BsTableColumnInner[] = [];
    let normalColumns: BsTableColumnInner[] = [];
    let hasFixedLeft = false;
    let hasFixedRight = false;
    columns.forEach((column: BsTableColumn, index: number) => {
      let isFixedLeft = column.fixed === true || (column.fixed + '').toLowerCase() == 'left';
      let isFixedRight = (column.fixed + '').toLowerCase() == 'right';
      let newColumn = { ...column } as BsTableColumnInner;
      if (isFixedLeft) {
        hasFixedLeft = true;
        newColumn.fixedIndex = fixedLeftColumns.length;
        fixedLeftColumns.push(newColumn);
      } else if (isFixedRight) {
        hasFixedRight = true;
        newColumn.fixedIndex = fixedRightColumns.length;
        fixedRightColumns.push(newColumn);
      } else {
        normalColumns.push(newColumn);
      }
    });
    if (allowExpand) { // 添加一列展开列
      let expandColumn: BsTableColumnInner = {
        width: props.expandColumnWidth,
        prop: bsExpandColumnKey,
        label: props.expandColumnLabel,
        headSlotName: 'expandColumnHeader',
        cellClassName: 'bs-table-expand-cell',
        hasSorter: false
      };
      if (fixedLeftColumns.length > 0) {
        expandColumn.fixed = 'left';
        expandColumn.fixedIndex = 0;
        fixedLeftColumns.unshift(expandColumn);
      } else {
        normalColumns.unshift(expandColumn);
      }
    }

    if (hasSelectionColumn.value) { // 添加一列选择列
      let selectionColumn: BsTableColumnInner = {
        width: selectionColumnWidth.value,
        prop: bsSelectionColumnKey,
        label: '',
        headSlotName: 'selectionColumnHeader',
        cellClassName: 'bs-table-selection-cell',
        hasSorter: false
      };
      var fixedLeftColumn1 = fixedLeftColumns[1];
      if (fixedLeftColumns.length > 0) {
        selectionColumn.fixed = 'left';
        if (allowExpand) { // 如果有展开列，那么选择列需要插入到展开列后面
          selectionColumn.fixedIndex = 1;
          let arr = [fixedLeftColumn1, selectionColumn].filter(item => !!item);
          fixedLeftColumns.splice(1, 0, ...arr);
        } else {
          selectionColumn.fixedIndex = 0;
          fixedLeftColumns.unshift(selectionColumn);
        }
      } else {
        if (allowExpand) { // 如果有展开列，那么选择列需要插入到展开列后面
          let arr = [fixedLeftColumn1, selectionColumn].filter(item => !!item);
          normalColumns.splice(1, 0, ...arr);
        } else {
          normalColumns.unshift(selectionColumn);
        }
      }
    }

    let fixedLeftColumnCount = fixedLeftColumns.length;
    let fixedRightColumnCount = fixedRightColumns.length;
    fixedLeftColumns.forEach((column: BsTableColumnInner, index) => {
      column.fixedLeftColumnCount = fixedLeftColumnCount;
      if (allowExpand) {
        if (index != 0) { // 如果有展开列，并且当前列非展开列，则当前的固定列索引加1
          column.fixedIndex! += 1;
        }
      } else if (hasSelectionColumn && index != 0) {
        column.fixedIndex! += 1;
      }
    });
    fixedRightColumns.forEach((column: BsTableColumnInner) => column.fixedRightColumnCount = fixedRightColumnCount);

    let newColumns = [...fixedLeftColumns, ...normalColumns, ...fixedRightColumns];

    let defaultSortOrder = '' as BsTableSortDirection;
    // 默认排序列的索引
    let defaultSortOrderIndex = newColumns.findIndex(columnItem => {
      let flag = bsTableSortDirections.includes(columnItem.defaultSortOrder || '');
      if (flag) {
        defaultSortOrder = columnItem.defaultSortOrder!;
      }
      return flag;
    });
    return {
      columns: newColumns,
      hasFixedLeft,
      hasFixedRight,
      hasFixedColumn: hasFixedLeft || hasFixedRight,
      defaultSortOrder,
      defaultSortOrderIndex
    };
  });

  // table的高度及最大高度
  let tableHeight = computed(function () {
    return formatHeight(props.height);
  });
  let tableMaxHeight = computed(function () {
    return formatHeight(props.maxHeight);
  });
  // 是否需要固定表头
  let hasFixedHeader = computed(function () {
    return !!(tableHeight.value || tableMaxHeight.value);
  });

  // 父级元素是否隐藏了
  let parentElIsHidden = ref(false);
  let calcParentElIsHiddenTimer: number;
  // 判断父级元素是否隐藏了
  let getParentElVisible = function () {
    calcParentElIsHiddenTimer = setInterval(function () {
      console.log('getParentElVisible: 判断父级元素是否隐藏了');
      let isHidden = (tableContainerRef.value?.offsetWidth || 0) <= 0;
      parentElIsHidden.value = isHidden;
      if (!isHidden) {
        clearInterval(calcParentElIsHiddenTimer);
      }
    }, 100);
  };

  // 表格的宽度
  let tableWidth = ref(0);
  let tableWrapWidth = ref(0);
  let tableRef = ref<HTMLTableElement>();
  let colgroup = ref<BsColgroupItem[]>([]);
  let tableContainerRef = ref<HTMLElement>();

  // 计算列宽
  let calcColumnWidth = function (columns: BsTableColumn[]) {
    if (parentElIsHidden.value) {
      return;
    }
    let tableContainerWidth = tableBodyRef.value?.clientWidth || 0;
    let isFixedHeaderRaw = hasFixedHeader.value;

    let tableContainerScrollWidth = scrollWidth(tableBodyRef.value).vertical;
    // console.log('tableContainerScrollWidth', tableContainerWidth, tableContainerScrollWidth);
    tableContainerWidth -= tableContainerScrollWidth;
    tableWrapWidth.value = tableContainerWidth;
    let needColGroup = columns.some(column => {
      return !!column.width || !!column.minWidth;
    });
    let hasResizeableColumn = columns.some(column => {
      return !!column.resizeable;
    });
    // 有固定列、有拖拽列宽功能时必须要设置colgroup
    if (!needColGroup && !isFixedHeaderRaw && !hasResizeableColumn) {
      colgroup.value = [];
      return;
    }
    let colGroupTemp: { width: number; minWidth: number; name: string; }[] = [];
    columns.forEach((column: BsTableColumn) => {
      let { width, minWidth } = column;
      let widthNumber = parseFloat((width || '') as string);
      let minWidthNumber = parseFloat((minWidth || '') as string);
      colGroupTemp.push({
        width: !isNaN(widthNumber) ? Math.abs(widthNumber) : 0,
        minWidth: !isNaN(minWidthNumber) ? Math.abs(minWidthNumber) : 0,
        name: column.prop
      });
    });
    let notNeedColGroup = colGroupTemp.every(colItem => {
      return !colItem.width && !colItem.minWidth;
    });
    if (notNeedColGroup && !isFixedHeaderRaw && !hasResizeableColumn) {
      colgroup.value = [];
      return;
    }
    let defaultWidth = 80;
    let newColGroup = colGroupTemp.map(col => {
      let { width, minWidth } = col;
      let isDefaultWidth = false;
      if (!width && !minWidth) {
        width = defaultWidth;
        isDefaultWidth = true;
      }
      return {
        width,
        minWidth,
        isDefaultWidth,
        name: col.name
      };
    });
    // 计算列总宽度
    let colTotalWidth = newColGroup.reduce(function (result, col) {
      let { width, minWidth } = col;
      result += minWidth || width;
      return result;
    }, 0);
    if (colTotalWidth < tableContainerWidth) {
      let widthDiff = tableContainerWidth - colTotalWidth;
      // console.log(3333, widthDiff);
      // 查找需要平分剩余宽度的列
      let needCalcWidthCols = newColGroup.filter(col => {
        let { minWidth, isDefaultWidth } = col;
        return !!minWidth || isDefaultWidth;
      });
      let totalWidth = needCalcWidthCols.reduce(function (result, col) {
        result += col.minWidth || col.width;
        return result;
      }, 0);
      needCalcWidthCols.forEach(col => {
        let { width, minWidth } = col;
        let rateWidth = minWidth || width;
        let rate = rateWidth / totalWidth;
        let newWidth = Number((rateWidth + widthDiff * rate).toFixed(3));
        col.width = newWidth;
      });
      tableWidth.value = 0;
    } else {
      newColGroup.forEach(col => {
        let { width, minWidth } = col;
        if (minWidth) {
          col.width = minWidth;
        }
      });
      tableWidth.value = newColGroup.reduce(function (result, col) {
        result += col.width;
        return result;
      }, 0);
    }
    colgroup.value = newColGroup;
    // console.log('colgroup', colgroup, tableWidth.value);
  };

  /* watch(() => [...props.columns], function (columns) {
    nextTick(function () {
      parentElIsHidden.value = (tableContainerRef.value?.offsetWidth || 0) <= 0;
      if (parentElIsHidden.value) {
        getParentElVisible();
      }
      calcColumnWidth(columns);
    });
  }, { immediate: true }); */

  let tableBodyScrollInfo = reactive({
    scrollLeft: 0,
    isInScrollEnd: false,
    showRightPing: false,
    hasScroll: false,
    scrollWidth: 0
  });
  let tableBodyRef = ref<HTMLElement>();
  let calcRightPingTimer: number;

  // 列信息变化事件
  let handleColumnsChange = function (columnsInfoData: any, calcColumnWidthFlag = true) {
    clearTimeout(calcRightPingTimer);
    nextTick(function () {
      parentElIsHidden.value = (tableContainerRef.value?.offsetWidth || 0) <= 0;
      if (parentElIsHidden.value) {
        getParentElVisible();
      }
      if (calcColumnWidthFlag !== false) {
        calcColumnWidth(columnsInfoData.columns);
      }
    });
    calcRightPingTimer = setTimeout(function () {
      let tableBodyEl = tableBodyRef.value;
      let tableBodyElHasScroll = false;
      if (tableBodyEl) {
        // console.log('滚动条宽度：', scrollWidth(tableBodyEl));
        tableBodyElHasScroll = hasScroll(tableBodyEl).vertical;
        tableBodyScrollInfo.scrollWidth = scrollWidth(tableBodyEl).vertical;
      }
      tableBodyScrollInfo.hasScroll = tableBodyElHasScroll;
      if (!columnsInfoData.hasFixedRight || !tableBodyEl) {
        tableBodyScrollInfo.showRightPing = false;
        return;
      }
      tableBodyScrollInfo.showRightPing = tableBodyEl.scrollWidth > tableBodyEl.offsetWidth;
    }, 60);
  };
  // 计算是否要显示右侧固定定位列第1列的阴影
  watch(columnsInfo, function (columnsInfo) {
    handleColumnsChange(columnsInfo);
  }, { immediate: true });

  // 是否有展开列
  let hasExpandColumn = computed(function () {
    return !!props.allowExpand;
  });

  // 是否显示表尾
  let showTableFoot = computed(function () {
    let {
      footerRows,
      footerMethod
    } = props;
    if (isFunction(footerMethod)) {
      return true;
    }
    return Array.isArray(footerRows) && footerRows.length > 0;
  });

  return {
    columnsInfo,
    tableBodyRef,
    tableRef,
    colgroup,
    tableWidth,
    tableWrapWidth,
    tableHeight,
    tableMaxHeight,
    hasFixedHeader,
    tableBodyScrollInfo,
    tableContainerRef,
    hasSelectionColumn,
    hasExpandColumn,
    showTableFoot,
    handleColumnsChange
  };
};

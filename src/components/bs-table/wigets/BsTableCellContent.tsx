import {
  defineComponent, AppContext, computed, ref, inject, onBeforeUnmount
} from 'vue';
import { BsTableCustomContent } from './BsTableCustomContent';
import BsTooltip from '../../../components/bs-tooltip/BsTooltip.vue';
import { bsTableCellProps } from './bs-table-cell-props';
import { isFunction } from '@vue/shared';
import { eleTextOverflow } from '../../../utils/bs-util';
import { bsTableCtxKey } from '../bs-table-types';

export default defineComponent({
  name: 'BsTableCellContent',
  props: {
    ...bsTableCellProps
  },
  setup (props: any, ctx: AppContext) {
    let tableCtx = inject(bsTableCtxKey)!;

    // 文本内容
    let cellContent = computed(function () {
      let customCell = props.column.customCell;
      if (isFunction(customCell)) {
        return customCell;
      }
      return props.rowData[props.column.prop];
    });

    let textElRef = ref<HTMLElement>();
    let tooltipContent = ref('');
    let textIsOverflow = ref(false);

    let timer: number;
    let calcTextIsOverflow = function () {
      if (!textElRef.value) {
        textIsOverflow.value = false;
        return;
      }
      clearTimeout(timer);
      timer = setTimeout(function () { // 解决在resize事件中频繁计算问题
        clearTimeout(timer);
        textIsOverflow.value = eleTextOverflow(textElRef.value!);
      }, 0);
    };

    tableCtx.addResizeEvent(calcTextIsOverflow);

    onBeforeUnmount(function () {
      tableCtx.removeResizeEvent(calcTextIsOverflow);
    });

    return {
      cellContent,
      textElRef,
      tooltipContent,
      textIsOverflow,
      calcTextIsOverflow
    };
  },
  render () {
    let {
      ellipsis,
      showTooltip
    } = this.column;
    let $slots = this.$slots;

    let customContent = () => {
      return (
        <BsTableCustomContent
          row-index={ this.rowIndex }
          cell-index={ this.cellIndex }
          row-data={ this.rowData }
          label={ this.cellContent }
          table-slots={ this.tableSlots }
          default-content={ $slots.default }
          slot-name={ this.slotName || this.column.prop }>
        </BsTableCustomContent>
      );
    };

    let ellipsisClass = 'bs-table-cell-ellipsis';

    if (!!showTooltip) {
      let timer = setTimeout(() => {
        clearTimeout(timer);
        let textEl = this.$refs.textElRef;
        // console.log('textElRef.value', textEl.innerText);
        this.calcTextIsOverflow();
        this.tooltipContent = textEl?.innerText || textEl?.textContent || '';
      }, 60);
      let tooltipProps = {
        placement: 'top',
        transitionName: 'scale',
        ...(typeof showTooltip == 'object' ? showTooltip : {}),
        disabled: this.tooltipContent.length == 0 || !this.textIsOverflow,
        content: this.tooltipContent
      };
      if (tooltipProps.disabled) {
        return (<div ref="textElRef" class={[ellipsisClass, 'bs-table-cell-show-tooltip']}>{customContent()}</div>);
      }
      return (
        <BsTooltip {...tooltipProps}>
          <div ref="textElRef" class={[ellipsisClass, 'bs-table-cell-show-tooltip']}>{ customContent() }</div>
        </BsTooltip>
      );
    }
    if (ellipsis) {
      return (<div class={ellipsisClass}>{ customContent() }</div>);
    }
    return customContent();
  }
});

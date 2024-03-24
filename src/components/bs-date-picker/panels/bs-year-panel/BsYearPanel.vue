<template>
<div class="bs-picker-year-panel">
  <PanelHeader
    v-if="showHeader"
    :onSuperPrev="onSuperPrev"
    :onSuperNext="onSuperNext">
    <button
      type="button"
      tabindex="-1"
      class="bs-picker-header-year-btn"
      @click="onDecadeClick">{{ decadeInfo.startYear }}-{{ decadeInfo.endYear }}</button>
  </PanelHeader>
  <PanelBody
    :show-header="false"
    :body-cells="tableBody"
    :get-cell-text="setCellText"
    :get-row-classname="getRowClassname"
    :get-cell-classname="setCellClassname"
    :get-cell-title="setCellTitle"
    :get-cell-node="setCellNode"
    @cell-click="onCellClick"></PanelBody>
</div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  PropType,
  ref,
  watch
} from 'vue';
import { isFunction, NOOP } from '@vue/shared';
import PanelHeader from '../panel-header/PanelHeader.vue';
import PanelBody from '../panel-body/PanelBody.vue';
import dayjs, { Dayjs } from 'dayjs';
import { dayjsUtil, getDecade, getMonthDays, yearDecadeCount } from '../../../../utils/dayjsUtil';
import { usePanelViewDate } from '../../hooks/usePanelViewDate';
import { panelsCommonProps } from '../panels-common-props';

// let defaultFormat = 'YYYY';
let panelYearCount = 12;
export default defineComponent({
  name: 'BsYearPanel',
  components: {
    PanelHeader,
    PanelBody
  },
  props: {
    ...panelsCommonProps,
    /* modelValue: {
      type: Object as PropType<Dayjs>,
      default: null
    },
    dateRender: { // 自定义日期单元格的内容
      type: Function,
      default: null
    },
    disabledDate: { // 禁用的日期
      type: Function,
      default: null
    },
    showHeader: { // 是否显头部
      type: Boolean,
      default: true
    },
    getRowClassname: { // 自定义表格行classname
      type: Function,
      default () {
        return () => [];
      }
    },
    getCellClassname: { // 自定义表格单元格classname
      type: Function,
      default () {
        return [];
      }
    }, */
    onDecadeClick: {
      type: Function,
      default () {
        return NOOP;
      }
    }
  },
  emits: ['update:modelValue', 'viewDateChange', 'cell-click'],
  setup (props: any, ctx: any) {
    // let now = dayjs();
    let yearNumberNow = dayjs().year();
    // 用于面板展示的日期
    let {
      panelViewDate,
      setPanelViewDate,
      getPanelViewDate
    } = usePanelViewDate(props, ctx);

    // 年份信息
    let decadeInfo = computed(function () {
      let currentYear = dayjsUtil.getYear(panelViewDate.value);
      /* let startYear = Math.floor(currentYear / yearDecadeCount) * yearDecadeCount;
      let endYear = startYear + yearDecadeCount - 1;

      // console.log('decadeInfo', currentYear, startYear, endYear);
      return {
        currentYear,
        startYear,
        endYear
      }; */
      return getDecade(currentYear);
    });

    let tableBody = computed(function () {
      let yearArr: any = [];
      let decadeVal = decadeInfo.value;
      let startYear = decadeVal.startYear;
      let baseYearDate = dayjs((startYear - 1) + '', 'YYYY');
      let tempYearArr: Record<string, any>[] = [];
      let disabledDate = props.disabledDate;
      while (tempYearArr.length < panelYearCount) {
        let date = dayjsUtil.addYear(baseYearDate, tempYearArr.length);
        let yearName = dayjsUtil.locale.format(date, 'zh-cn', 'YYYY');
        tempYearArr.push({
          yearName,
          decade: decadeVal,
          dayjsIns: date,
          disabled: typeof disabledDate === 'function' ? !!disabledDate(date) : false
        });
      }

      while (tempYearArr.length > 0) {
        yearArr.push(tempYearArr.splice(0, 3));
      }

      return yearArr;
    });

    // 单元格点击事件
    let onCellClick = function (cellData: any) {
      // let modelValue = props.modelValue;
      if (cellData.disabled) {
        return;
      }
      // 选择的是已经选中的日期则不进行后续操作
      // 不阻止已选中的日期再次被选中，如果这里阻止了，当用户切换面板后就无法切换回去了
      /* if (modelValue && (modelValue.year() === cellData.dayjsIns.year())) {
        return;
      } */
      ctx.emit('update:modelValue', cellData.dayjsIns);
      ctx.emit('cell-click', cellData);
    };

    let dateRender = props.dateRender;
    return {
      decadeInfo,
      tableBody,
      panelViewDate,
      // 设置单元格的classname
      setCellClassname (cellData: any, cellIndex: number, rowIndex: number, externalData: Record<string, any>) {
        let modelValue = props.modelValue;
        let dayjsIns = cellData.dayjsIns;
        let classnames: string[] = [];
        let { startYear, endYear } = decadeInfo.value;
        let yearNumber = dayjsIns.year();
        if (modelValue && (modelValue.year() === yearNumber)) {
          classnames.push('is-selected');
        }
        if (yearNumber >= startYear && yearNumber <= endYear) {
          classnames.push('active-cell');
        }
        if (yearNumber === yearNumberNow) {
          classnames.push('is-this-year');
        }
        if (cellData.disabled) {
          classnames.push('is-disabled');
        }
        let getCellClassnames = props.getCellClassname;
        if (isFunction(getCellClassnames)) {
          let extraCellClassnames = getCellClassnames(cellData, cellIndex, rowIndex, externalData);
          if (extraCellClassnames) {
            classnames.push(extraCellClassnames);
          }
        }
        return classnames;
      },
      setCellNode: props.dateRender ? (cellData: any) => {
        return dateRender(cellData);
      } : undefined,
      setCellText (cellData: any) {
        return cellData.yearName;
      },
      setCellTitle (cellData: any) {
        return cellData.yearName;
      },
      onSuperPrev () {
        setPanelViewDate(dayjsUtil.addYear(panelViewDate.value, -yearDecadeCount));
      },
      onSuperNext () {
        setPanelViewDate(dayjsUtil.addYear(panelViewDate.value, yearDecadeCount));
      },
      onCellClick,
      setPanelViewDate (date: Dayjs) {
        setPanelViewDate(date, false);
      },
      getPanelViewDate,
      /**
       * 获取单元格单数据
       * @param rowIndex 行索引
       * @param cellIndex 单元格索引
       */
      getCellData (rowIndex: number, cellIndex: number) {
        let tableDataRaw = tableBody.value;
        if (rowIndex < 0 || cellIndex < 0) {
          return;
        }
        let rowData = tableDataRaw[rowIndex];
        return rowData?.[cellIndex];
      }
    };
  }
});
</script>

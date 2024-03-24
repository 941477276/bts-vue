<template>
  <div class="bs-picker-quarter-panel">
    <PanelHeader
      v-if="showHeader"
      :onSuperPrev="onSuperPrev"
      :onSuperNext="onSuperNext">
      <button
        type="button"
        tabindex="-1"
        class="bs-picker-header-year-btn"
        @click="onYearClick">{{ yearName }}</button>
    </PanelHeader>
    <PanelBody
      :show-header="false"
      :body-cells="tableBody"
      :get-cell-text="setCellText"
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
import {
  NOOP
} from '@vue/shared';
import PanelHeader from '../panel-header/PanelHeader.vue';
import PanelBody from '../panel-body/PanelBody.vue';
import dayjs, { Dayjs } from 'dayjs';
import { dayjsUtil, getMonthDays } from '../../../../utils/dayjsUtil';
import { usePanelViewDate } from '../../hooks/usePanelViewDate';
import { panelsCommonProps } from '../panels-common-props';

let defaultFormat = 'YYYY-[Q]Q';
export default defineComponent({
  name: 'BsQuarterPanel',
  components: {
    PanelHeader,
    PanelBody
  },
  props: {
    ...panelsCommonProps
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
    onYearClick: {
      type: Function,
      default () {
        return NOOP;
      }
    } */
  },
  emits: ['update:modelValue', 'viewDateChange'],
  setup (props: any, ctx: any) {
    let now = dayjs();
    let quarterValueNow = dayjs().format(defaultFormat);
    /* let panelViewDate = ref(dayjs(props.modelValue ? props.modelValue : undefined));
    let setPanelViewDate = (date: Dayjs, emitEvents = true) => {
      if (!date || !(date instanceof dayjs)) {
        return;
      }
      panelViewDate.value = date;
      if (emitEvents) {
        ctx.emit('viewDateChange', date);
      }
    };
    watch(() => props.modelValue, function (modelValue) {
      setPanelViewDate(modelValue || dayjs());
    }); */
    let {
      panelViewDate,
      setPanelViewDate,
      getPanelViewDate
    } = usePanelViewDate(props, ctx);

    let yearName = computed(function () {
      let lang = 'zh-cn';
      return dayjsUtil.locale.format(panelViewDate.value, lang, 'YYYY年');
    });

    let tableBody = computed(function () {
      let dateStart = panelViewDate.value.date(1);
      let quarterArr: any = [];
      let disabledDate = props.disabledDate;
      while (quarterArr.length < 4) {
        let len = quarterArr.length;
        let quarter = dateStart.quarter(len + 1);
        let quarterName = dayjsUtil.locale.format(quarter, 'zh-cn', '[Q]Q');

        quarterArr.push({
          quarter,
          dayjsIns: quarter,
          quarterName,
          disabled: typeof disabledDate === 'function' ? !!disabledDate(quarter, quarterName) : false
        });
      }

      return [quarterArr];
    });

    // 单元格点击事件
    let onCellClick = function (cellData: any) {
      let modelValue = props.modelValue;
      if (cellData.disabled) {
        return;
      }
      // 选择的是已经选中的日期则不进行后续操作
      // 不阻止已选中的日期再次被选中，如果这里阻止了，当用户切换面板后就无法切换回去了
      /* if (modelValue && (modelValue.quarter() === cellData.quarter.quarter())) {
        return;
      } */
      ctx.emit('update:modelValue', cellData.quarter);
    };

    let dateRender = props.dateRender;
    return {
      yearName,
      tableBody,
      // 设置单元格的classname
      setCellClassname (cellData: any, cellIndex: number) {
        // let currentDate = panelViewDate.value;
        let modelValue = props.modelValue;
        let dayjsIns = cellData.quarter;
        let classnames: string[] = ['active-cell'];

        if (modelValue && (modelValue.format(defaultFormat) === dayjsIns.format(defaultFormat))) {
          classnames.push('is-selected');
        }
        if (dayjsIns.format(defaultFormat) === quarterValueNow) {
          classnames.push('is-this-quarter');
        }
        if (cellData.disabled) {
          classnames.push('is-disabled');
        }
        return classnames;
      },
      setCellNode: props.dateRender ? (cellData: any) => {
        return dateRender(cellData);
      } : undefined,
      setCellText (cellData: any) {
        return cellData.quarterName;
      },
      setCellTitle (cellData: any) {
        return cellData.quarter.format(defaultFormat);
      },
      onSuperPrev () {
        setPanelViewDate(dayjsUtil.addYear(panelViewDate.value, -1));
      },
      onSuperNext () {
        setPanelViewDate(dayjsUtil.addYear(panelViewDate.value, 1));
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

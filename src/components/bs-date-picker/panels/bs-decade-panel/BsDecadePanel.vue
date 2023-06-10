<template>
<div class="bs-picker-decade-panel">
  <!--<PanelHeader
    v-if="showHeader">
    <button
      type="button"
      tabindex="-1"
      class="bs-picker-header-year-btn">{{ yearNumberInfo.startYear }}-{{ yearNumberInfo.endYear }}</button>
  </PanelHeader>-->
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
  defineComponent, PropType, ref, watch
} from 'vue';
// import PanelHeader from '../panel-header/PanelHeader.vue';
import PanelBody from '../panel-body/PanelBody.vue';
import dayjs, { Dayjs } from 'dayjs';
import { dayjsUtil, getMonthDays } from '../../../../utils/dayjsUtil';
import { usePanelViewDate } from '../../hooks/usePanelViewDate';

let yearDecadeCount = 10;
let panelDecadeCount = 12;
let decadeDistanceCount = yearDecadeCount * 10;
export default defineComponent({
  name: 'BsDecadePanel',
  components: {
    // PanelHeader,
    PanelBody
  },
  props: {
    modelValue: {
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
    }
  },
  emits: ['update:modelValue', 'change', 'viewDateChange'],
  setup (props: any, ctx: any) {
    let now = dayjs();
    // 用于面板展示的日期
    let {
      panelViewDate,
      setPanelViewDate
    } = usePanelViewDate(props, ctx);

    // 年份区间信息
    let decadeNumberInfo = computed(function () {
      let currentYear = dayjsUtil.getYear(panelViewDate.value);
      let startDecadeYear = Math.floor(currentYear / decadeDistanceCount) * decadeDistanceCount;
      let endDecadeYear = startDecadeYear + decadeDistanceCount - 1;

      return {
        currentYear,
        startDecadeYear,
        endDecadeYear
      };
    });
    let tableBody = computed(function () {
      let yearDecadeArr: any = [];
      let { currentYear, startDecadeYear, endDecadeYear } = decadeNumberInfo.value;
      let baseDecadeYearDate = dayjsUtil.addYear(dayjs(startDecadeYear + '', 'YYYY'), -10);
      let tempYearArr = [];
      let disabledDate = props.disabledDate;
      let lastDecadeEndDate = null;
      while (tempYearArr.length < panelDecadeCount) {
        let startDecadeDate = !lastDecadeEndDate ? baseDecadeYearDate : dayjsUtil.addYear(lastDecadeEndDate, 1);
        let endDecadeDate = dayjsUtil.addYear(startDecadeDate, yearDecadeCount - 1);
        lastDecadeEndDate = endDecadeDate;
        tempYearArr.push({
          startDecadeDate,
          endDecadeDate,
          dayjsIns: startDecadeDate,
          disabled: typeof disabledDate === 'function' ? !!disabledDate({ startDecadeDate, endDecadeDate }) : false
        });
      }

      while (tempYearArr.length > 0) {
        yearDecadeArr.push(tempYearArr.splice(0, 3));
      }
      return yearDecadeArr;
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
      ctx.emit('update:modelValue', cellData.dayjsIns, cellData);
      ctx.emit('change', cellData.dayjsIns, cellData);
    };

    let dateRender = props.dateRender;
    return {
      decadeNumberInfo,
      tableBody,
      // 设置单元格的classname
      setCellClassname (cellData: any, cellIndex: number) {
        let modelValue = props.modelValue;
        let classnames: string[] = [];
        let { startDecadeYear, endDecadeYear, currentYear } = decadeNumberInfo.value;
        let { startDecadeDate, endDecadeDate } = cellData;
        let startYear = startDecadeDate.year();
        let endYear = endDecadeDate.year();
        let modelValueYear = modelValue ? modelValue.year() : 0;
        let yearNow = now.year();
        if (modelValueYear >= startYear && modelValueYear <= endYear) {
          classnames.push('is-selected');
        }
        if (yearNow >= startYear && yearNow <= endYear) {
          classnames.push('is-this-decade-year');
        }
        if (startYear >= startDecadeYear && endYear <= endDecadeYear) {
          classnames.push('active-cell');
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
        let { startDecadeDate, endDecadeDate } = cellData;
        return `${startDecadeDate.year()}-${endDecadeDate.year()}`;
      },
      setCellTitle (cellData: any) {
        let { startDecadeDate, endDecadeDate } = cellData;
        return `${startDecadeDate.year()}-${endDecadeDate.year()}`;
      },
      /* onSuperPrev () {
        setPanelViewDate(dayjsUtil.addYear(panelViewDate.value, -10));
      },
      onSuperNext () {
        setPanelViewDate(dayjsUtil.addYear(panelViewDate.value, 10));
      }, */
      onCellClick,
      setPanelViewDate (date: Dayjs) {
        setPanelViewDate(date, false);
      }
    };
  }
});
</script>

<template>
<div class="bs-picker-month-panel">
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
import { NOOP } from '@vue/shared';
import PanelHeader from '../panel-header/PanelHeader.vue';
import PanelBody from '../panel-body/PanelBody.vue';
import dayjs, { Dayjs } from 'dayjs';
import { dayjsUtil, getMonthDays } from '../../../../utils/dayjsUtil';
import { usePanelViewDate } from '../../hooks/usePanelViewDate';

let defaultFormat = 'YYYY-MM';
export default defineComponent({
  name: 'BsMonthPanel',
  components: {
    PanelHeader,
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
    },
    onYearClick: {
      type: Function,
      default () {
        return NOOP;
      }
    }
  },
  emits: ['update:modelValue', 'viewDateChange'],
  setup (props: any, ctx: any) {
    let now = dayjs();
    let monthValueNow = dayjs().format(defaultFormat);
    /* let panelViewDate = ref(dayjs(props.modelValue ? props.modelValue : undefined));
    let setPanelViewDate = (date: Dayjs, emitEvents = true) => {
      if (!date || !(date instanceof dayjs)) {
        return;
      }
      // panelViewDate.value = date.year(panelViewDate.value.year());
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
      setPanelViewDate
    } = usePanelViewDate(props, ctx);

    let yearName = computed(function () {
      let lang = 'zh-cn';
      return dayjsUtil.locale.format(panelViewDate.value, lang, 'YYYY年');
    });

    let tableBody = computed(function () {
      let monthArr: any = [];
      let currentMonth = dayjsUtil.setDate(panelViewDate.value, 1);
      let monthsShort = dayjsUtil.locale.monthsShort('zh-cn');
      let disabledDate = props.disabledDate;
      let tempMonthArr = monthsShort.map((monthName: string, index: number) => {
        let date = dayjsUtil.setMonth(currentMonth, index);
        return {
          monthName,
          date,
          dayjsIns: date,
          disabled: typeof disabledDate === 'function' ? !!disabledDate(date, monthName) : false
        };
      });

      while (tempMonthArr.length > 0) {
        monthArr.push(tempMonthArr.splice(0, 3));
      }

      return monthArr;
    });

    // 单元格点击事件
    let onCellClick = function (cellData: any) {
      let modelValue = props.modelValue;
      if (cellData.disabled) {
        return;
      }
      // 选择的是已经选中的日期则不进行后续操作
      // 不阻止已选中的日期再次被选中，如果这里阻止了，当用户切换面板后就无法切换回去了
      /* if (modelValue && (modelValue.format(defaultFormat) === cellData.date.format(defaultFormat))) {
        return;
      } */
      ctx.emit('update:modelValue', cellData.date);
    };

    let dateRender = props.dateRender;
    return {
      yearName,
      tableBody,
      // 设置单元格的classname
      setCellClassname (cellData: any, cellIndex: number) {
        // let currentDate = panelViewDate.value;
        let modelValue = props.modelValue;
        let dayjsIns = cellData.date;
        let classnames: string[] = ['active-cell'];
        if (modelValue && (modelValue.format(defaultFormat) === dayjsIns.format(defaultFormat))) {
          classnames.push('is-selected');
        }
        if (dayjsIns.format(defaultFormat) === monthValueNow) {
          classnames.push('is-this-month');
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
        return cellData.monthName;
      },
      setCellTitle (cellData: any) {
        return cellData.monthName;
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
      }
    };
  }
});
</script>

import {
  defineComponent,
  PropType,
  ref,
  Ref,
  watch,
  provide,
  computed,
  VNode,
  nextTick,
  toRef
} from 'vue';
import {
  PickerType
} from '../../bs-date-picker/bs-date-picker-types';
import BsDatePanel from '../../bs-date-picker/panels/bs-date-panel/BsDatePanel.vue';
import BsMonthPanel from '../../bs-date-picker/panels/bs-month-panel/BsMonthPanel.vue';
// import BsQuarterPanel from '../../bs-date-picker/panels/bs-quarter-panel/BsQuarterPanel.vue';
import BsYearPanel from '../../bs-date-picker/panels/bs-year-panel/BsYearPanel.vue';
import BsDecadePanel from '../../bs-date-picker/panels/bs-decade-panel/BsDecadePanel.vue';
// import BsWeekPanel from '../../bs-date-picker/panels/bs-week-panel/BsWeekPanel.vue';
// import BsDateTimePanel from '../../bs-date-picker/panels/bs-date-time-panel/BsDateTimePanel.vue';
import dayjs, { Dayjs } from 'dayjs';
import { bsDatePanelProps } from '../../bs-date-picker/panels/bs-date-panel/bs-date-panel-props';

let pickerCounts: any = {
  date: 0,
  week: 0,
  month: 0,
  quarter: 0,
  year: 0,
  dateTime: 0
};
export default defineComponent({
  name: 'BsDatePanelAssemble',
  props: {
    pickerType: {
      type: String as PropType<PickerType>,
      default: 'date'
    },
    mode: { // 面板的状态
      type: String as PropType<PickerType>,
      default: ''
    },
    useModelValue: { // 是否使用modelValue
      type: Boolean,
      default: true
    },
    panelDecadeCount: { // 面板中显示的十年日期数量
      type: Number,
      default: 12
    },
    ...bsDatePanelProps
  },
  emits: ['update:modelValue', 'change', 'panel-mode-change', 'view-date-change'],
  setup (props: any, ctx: any) {
    let bsCommonPicker = ref();
    let pickerId = ref(props.id || `bs-date-panel-assemble_${props.pickerType}_${++pickerCounts[props.pickerType]}`);
    let visible = ref(false);

    // 面板当前状态
    let currentMode = ref('');
    let prevMode = ref(''); // 上一步的面板状态
    let setCurrentMode = function (mode: string, panelViewDate?: Dayjs, emitEvent?: boolean) {
      if (emitEvent !== false) {
        ctx.emit('panel-mode-change', mode);
      }

      // 在宏任务中切换面板状态，防止错误的判断鼠标点击到了面板外面
      let timer = setTimeout(function () {
        clearTimeout(timer);
        prevMode.value = currentMode.value;
        currentMode.value = mode;
        // 当用户切换面板模式与pickerType一致时需要像外抛出面板显示日期改变事件
        if (mode == props.pickerType && panelViewDate) {
          emitViewDateChange(panelViewDate);
        }
      }, 0);
    };

    let date = ref<Dayjs | null>();
    let viewDate = ref<Dayjs | null>();

    // 组件ref
    let dateRef = ref<any>(null);
    let weekRef = ref<any>(null);
    let monthRef = ref<any>(null);
    let yearRef = ref<any>(null);
    let quarterRef = ref<any>(null);
    let decadeRef = ref<any>(null);
    let dateTimeRef = ref<any>(null);
    let refs: { [key: string]: Ref<any> } = {
      dateRef,
      weekRef,
      monthRef,
      yearRef,
      quarterRef,
      decadeRef,
      dateTimeRef
    };

    // 设置面板显示的日期
    let setPanelViewDate = function (date: Date | Dayjs) {
      let mode = currentMode.value || props.pickerType;
      refs[mode + 'Ref']?.value?.setPanelViewDate(date);
    };
    // 获取面板显示的日期
    let getPanelViewDate = function () {
      let mode = currentMode.value || props.pickerType;
      return refs[mode + 'Ref']?.value?.getPanelViewDate();
    };

    // 面板状态变换事件处理函数
    let handlePickerModeChange = (mode: string, pickerType: string, newDate: Dayjs) => {
      // 以当前面板中的日期为基础进行变换，没有则以选中的日期为基础进行变换，否则以当前日期为基础进行变换
      let clonedDate = viewDate.value?.clone() || date.value?.clone() || dayjs();
      let prevModeValue = prevMode.value;
      let nextMode = pickerType;
      let panelViewDate: Dayjs;
      switch (mode) {
        case 'decade':
          // setDate(clonedDate ? clonedDate.year(newDate.year()) : newDate);
          panelViewDate = clonedDate ? clonedDate.year(newDate.year()) : newDate;
          nextMode = 'year';
          break;
        case 'year':
          // setDate(clonedDate ? clonedDate.year(newDate.year()) : newDate);
          panelViewDate = clonedDate ? clonedDate.year(newDate.year()) : newDate;
          if (['decade', 'month'].includes(prevModeValue) && pickerType !== 'quarter') {
            nextMode = 'month';
          }
          /*  else {
          nextMode = 'date';
          } */
          break;
        case 'month':
          // setDate(clonedDate ? clonedDate.month(newDate.month()) : newDate);
          panelViewDate = clonedDate ? clonedDate.month(newDate.month()) : newDate;
          break;
      }
      setCurrentMode(nextMode, panelViewDate!);
      let timer = setTimeout(() => {
        clearTimeout(timer);
        viewDate.value = panelViewDate;
        refs[nextMode + 'Ref']?.value?.setPanelViewDate(panelViewDate);
      }, 0);
    };
    // 向外抛出面板显示时间改吧事件
    let emitViewDateChange = function (viewDate: Dayjs) {
      ctx.emit('view-date-change', viewDate.clone());
    };

    //  日期控件model-value值改变事件
    let onDatePanelModelValueChange = function (newDate: Dayjs, hideDropdown: boolean) {
      let pickerType = props.pickerType;
      let mode = currentMode.value;
      // 如果面板状态有值且面板状态不等于面板类型，此时用户只是在切换面板，并非在赋值
      if (mode && (pickerType != mode)) {
        handlePickerModeChange(mode, pickerType, newDate);
        return;
      }
      console.log('onDatePanelModelValueChange', newDate);
      if (props.useModelValue) {
        date.value = newDate;
      }
      ctx.emit('update:modelValue', newDate);
      ctx.emit('change', newDate);
    };

    watch(() => props.modelValue, function (newDate) {
      if (newDate == date.value || !props.useModelValue) {
        return;
      }
      date.value = newDate;
    }, { immediate: true });

    return {
      bsCommonPicker,
      pickerId,

      visible,
      date,
      viewDate,
      currentMode,

      setCurrentMode,
      setPanelViewDate,
      getPanelViewDate,
      /**
       * 获取单元格单数据
       * @param rowIndex 行索引
       * @param cellIndex 单元格索引
       */
      getCellData (rowIndex: number, cellIndex: number) {
        return (refs[props.pickerType + 'Ref'] as any).value?.getCellData?.(rowIndex, cellIndex);
      },
      emitViewDateChange,

      dateRef,
      weekRef,
      monthRef,
      yearRef,
      quarterRef,
      decadeRef,
      dateTimeRef,

      onDatePanelModelValueChange
    };
  },
  render () {
    let {
      pickerType,
      currentMode
    } = this;

    // 面板公共属性
    let panelcommonProps: Record<string, any> = {
      'model-value': this.date,
      // 'date-render': this.dateRender,
      // 'disabled-date': this.disabledDate,
      // 'get-cell-classname': this.getCellClassname,
      // 'get-row-classname': this.getRowClassname,
      'yearButtonDisabled': this.yearButtonDisabled,
      'monthButtonDisabled': this.monthButtonDisabled,
      'showHeader': this.showHeader,
      'onUpdate:modelValue': this.onDatePanelModelValueChange
    };

    console.log('currentMode == pickerType', currentMode, pickerType);
    // 只有当前的面板类型与选择器类型一致时才需要添加这些属性，否则在用户切换面板后以下这些函数执行时可能会报错
    if ((!currentMode && pickerType) || (currentMode == pickerType)) {
      panelcommonProps.dateRender = this.dateRender;
      panelcommonProps.disabledDate = this.disabledDate;
      panelcommonProps.getCellClassname = this.getCellClassname;
      panelcommonProps.getRowClassname = this.getRowClassname;
    }

    // 年份按钮点击事件
    let onYearButtonClick = () => {
      this.setCurrentMode('year');
      let timer = setTimeout(() => {
        clearTimeout(timer);
        (this.$refs.yearRef as any)?.setPanelViewDate(this.viewDate);
      }, 0);
    };
    // 月份按钮点击事件
    let onMonthButtonClick = () => {
      this.setCurrentMode('month');
      let timer = setTimeout(() => {
        clearTimeout(timer);
        (this.$refs.monthRef as any)?.setPanelViewDate(this.viewDate);
      }, 0);
    };
    // 十年按钮点击事件
    let onDecadeClick = () => {
      this.setCurrentMode('decade');
      let timer = setTimeout(() => {
        clearTimeout(timer);
        (this.$refs.decadeRef as any)?.setPanelViewDate(this.viewDate);
      }, 0);
    };
    let onViewDateChange = (viewDate: Dayjs) => {
      this.viewDate = viewDate;
      this.emitViewDateChange(viewDate);
    };
    /* let onYearViewDateChange = (viewDate: Dayjs) => {
      this.viewDate = this.viewDate?.year(viewDate.year());
    }; */
    /* let onMonthViewDateChange = (viewDate: Dayjs) => {
      this.viewDate = this.viewDate?.month(viewDate.month());
    }; */

    let datePanel = () => {
      return <BsDatePanel
        ref="dateRef"
        {...panelcommonProps}
        onYearClick={onYearButtonClick}
        onMonthClick={onMonthButtonClick}
        onViewDateChange={onViewDateChange}></BsDatePanel>;
    };
    let panels: { [key: string]: () => VNode } = {
      datePanel: datePanel,
      // dateTimePanel: datePanel,
      /* weekPanel: () => {
        return <BsWeekPanel
          ref="weekRef"
          {...panelcommonProps}
          onYearClick={onYearButtonClick}
          onMonthClick={onMonthButtonClick}
          onViewDateChange={onViewDateChange}></BsWeekPanel>;
      }, */
      monthPanel: () => {
        return <BsMonthPanel
          ref="monthRef"
          {...panelcommonProps}
          onYearClick={onYearButtonClick}
          onViewDateChange={onViewDateChange}></BsMonthPanel>;
      },
      yearPanel: () => {
        return <BsYearPanel
          ref="yearRef"
          {...panelcommonProps}
          onDecadeClick={onDecadeClick}
          onViewDateChange={onViewDateChange}></BsYearPanel>;
      },
      /* quarterPanel: () => {
        return <BsQuarterPanel
          ref="quarterRef"
          {...panelcommonProps}
          onYearClick={onYearButtonClick}
          onViewDateChange={onViewDateChange}></BsQuarterPanel>;
      }, */
      decadePanel: () => {
        return <BsDecadePanel
          ref="decadeRef"
          panelDecadeCount={this.panelDecadeCount}
          {...panelcommonProps}
          onViewDateChange={onViewDateChange}></BsDecadePanel>;
      }
    };
    let currentModePanel = panels[currentMode + 'Panel'];
    let pickerContent = currentModePanel || panels[pickerType + 'Panel'];

    return (<div
      class="bs-date-panel-assemble"
      id={ this.pickerId }>
      {pickerContent?.()}
    </div>);
  }
});

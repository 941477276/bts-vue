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
  isFunction
} from '@vue/shared';
import BsCommonPicker from '../bs-common-picker/BsCommonPicker.vue';
import {
  bsDatePickerTypes,
  PickerType,
  datePickerCtx,
  allowedPickerType
} from './bs-date-picker-types';
import BsDatePanel from './panels/bs-date-panel/BsDatePanel.vue';
import BsMonthPanel from './panels/bs-month-panel/BsMonthPanel.vue';
import BsQuarterPanel from './panels/bs-quarter-panel/BsQuarterPanel.vue';
import BsYearPanel from './panels/bs-year-panel/BsYearPanel.vue';
import BsDecadePanel from './panels/bs-decade-panel/BsDecadePanel.vue';
import BsWeekPanel from './panels/bs-week-panel/BsWeekPanel.vue';
import BsDateTimePanel from './panels/bs-date-time-panel/BsDateTimePanel.vue';
import BsButton from '../bs-button/BsButton.vue';
import dayjs, { Dayjs } from 'dayjs';
import { dayjsUtil } from '../../utils/dayjsUtil';
import { getUpdateModelValue } from '../../components/bs-time-picker/useTimePicker';
import { useDeliverContextToFormItem } from '../../hooks/useDeliverContextToFormItem';

let pickerCounts: any = {
  date: 0,
  week: 0,
  month: 0,
  quarter: 0,
  year: 0,
  dateTime: 0
};
// js编写日历思路：https://www.cnblogs.com/zaijin-yang/p/12009727.html
export default defineComponent({
  name: 'BsDatePicker',
  // components: {
  //   BsCommonPicker,
  //   BsDatePanel,
  //   BsMonthPanel,
  //   BsQuarterPanel,
  //   BsYearPanel,
  //   BsDecadePanel,
  //   BsWeekPanel,
  //   BsDateTimePanel
  //   // PanelSidebar
  // },
  props: {
    ...bsDatePickerTypes
  },
  emits: ['update:modelValue', 'change', 'show', 'hide'],
  setup (props: any, ctx: any) {
    let bsCommonPicker = ref();
    let pickerId = ref(props.id || `bs-${props.pickerType}-picker_${++pickerCounts[props.pickerType]}`);
    let visible = ref(false);
    let now = dayjs();

    // 格式模板
    let formatInner = computed(function () {
      let format = props.format;
      if (format) {
        return format;
      }
      let pickerType = props.pickerType;
      let formatMap: any = {
        date: 'YYYY-MM-DD',
        dateTime: 'YYYY-MM-DD',
        week: 'YYYY-wo',
        month: 'YYYY-MM',
        quarter: 'YYYY-[Q]Q',
        year: 'YYYY'
      };
      formatMap.dateTime += props.timePanelProps.use12Hours ? ' hh:mm:ss' : ' HH:mm:ss';
      let formatValue = formatMap[pickerType];
      return formatValue;
    });

    // 面板当前状态
    let currentMode = ref('');
    let prevMode = ref(''); // 上一步的面板状态
    let setCurrentMode = function (mode: string) {
      // 在宏任务中切换面板状态，防止错误的判断鼠标点击到了面板外面
      let timer = setTimeout(function () {
        clearTimeout(timer);
        prevMode.value = currentMode.value;
        currentMode.value = mode;
      }, 0);
    };

    let date = ref<Dayjs|null>();
    let viewDate = ref<Dayjs|null>();
    // 显示的文本
    let viewDateText = ref('');
    let setViewDateTxt = function (modelValue: Dayjs|string) {
      if (!modelValue) {
        viewDateText.value = '';
        return;
      }
      if (typeof modelValue === 'string') {
        viewDateText.value = modelValue;
        return;
      }
      let format = formatInner.value;
      let valueFormat = props.valueFormat;
      let dayjsIns;
      let pickerType = props.pickerType;
      if (pickerType == 'quarter') {
        dayjsIns = dayjsUtil.parseQuarter(modelValue, format);
      } else if (pickerType == 'week') {
        dayjsIns = dayjsUtil.parseWeek(modelValue, format, 'zh-cn');
      } else {
        dayjsIns = dayjsUtil.parseToDayjs(modelValue, format);
      }
      if (!dayjsIns) {
        viewDateText.value = '';
        return;
      }
      let viewText = '';
      if (pickerType == 'dateTime') {
        let { timePanelProps, datePanelProps } = props;
        let timePanelFormat = timePanelProps.format;
        let datePanelFormat = datePanelProps.format;
        if (!datePanelFormat) {
          datePanelFormat = 'YYYY-MM-DD';
        }
        if (!timePanelFormat) {
          timePanelFormat = timePanelProps.user12Hours ? 'hh:mm:ss' : 'HH:mm:ss';
        }
        format = datePanelFormat + props.formatSpliter + timePanelFormat;
        viewText = dayjsUtil.locale.format(dayjsIns, 'en', format);
      } else {
        viewText = dayjsIns.format(format);
      }
      viewDateText.value = viewText;
    };
    watch(() => props.modelValue, function (modelValue: Dayjs|string) {
      if (!modelValue) {
        date.value = null;
      } else {
        let dayjsIns;
        let pickerType = props.pickerType;
        let format = formatInner.value;
        let valueFormat = props.valueFormat;
        if (props.pickerType == 'quarter') {
          dayjsIns = dayjsUtil.parseQuarter(modelValue, valueFormat || format);
        } else if (pickerType == 'week') {
          dayjsIns = dayjsUtil.parseWeek(modelValue, valueFormat || format, 'zh-cn');
        } else {
          if (pickerType == 'dateTime' && typeof modelValue == 'string') {
            let upperCaseValue = modelValue.toUpperCase();
            let { timePanelProps, datePanelProps } = props;
            let timePanelValueFormat = timePanelProps.valueFormat;
            let datePanelValueFormat = datePanelProps.valueFormat;
            // let tempFormat = 'YYYY-MM-DD HH:mm:ss';
            let tempFormat = '';
            if (timePanelValueFormat && datePanelValueFormat) {
              tempFormat = datePanelValueFormat + props.valueFormatSpliter + timePanelValueFormat;
            }
            let dateTemp = dayjsUtil.parseToDayjs(modelValue, tempFormat || format);
            let hour = dateTemp.hour();
            let periods = '';
            if (upperCaseValue.endsWith('PM')) {
              periods = 'PM';
            }
            if (upperCaseValue.endsWith('AM')) {
              periods = 'AM';
            }
            if (timePanelProps.use12Hours && !upperCaseValue.endsWith('PM') && !upperCaseValue.endsWith('AM')) {
              periods = hour > 12 ? 'PM' : 'AM';
              modelValue += ' ' + periods;
            }
            if (periods == 'AM' && hour > 12) {
              dateTemp = dateTemp.hour(hour - 12);
            }
            if (periods == 'PM' && hour < 12) {
              dateTemp = dateTemp.hour(hour + 12);
            }
            if (timePanelProps.use12Hours) {
              let newHour = dateTemp.hour();
              if (newHour > 12) {
                dateTemp = dateTemp.hour(newHour - 12);
              }
            }
            dayjsIns = dateTemp;
          }
          if (!dayjsIns) {
            dayjsIns = dayjsUtil.parseToDayjs(modelValue, valueFormat || format);
          }
        }
        date.value = dayjsIns;
      }

      setViewDateTxt(date.value as Dayjs);
      viewDate.value = date.value;
    }, { immediate: true });

    // 输入框提示文字
    let inputPlaceholder = computed(function () {
      let placeholder = props.placeholder;
      if (placeholder) {
        return placeholder;
      }
      let picker = props.pickerType;
      let pickerText = '';
      switch (picker) {
        case 'date':
          pickerText = '日期';
          break;
        case 'dateTime':
          pickerText = '时间';
          break;
        case 'week':
          pickerText = '周';
          break;
        case 'month':
          pickerText = '月份';
          break;
        case 'quarter':
          pickerText = '季度';
          break;
        case 'year':
          pickerText = '年份';
          break;
      }
      return '请选择' + pickerText;
    });

    // 今天是否被禁用
    let todayIsDisabled = computed(function () {
      let pickerType = props.pickerType;
      if (pickerType != 'date' && pickerType != 'dateTime') {
        return true;
      }
      let disabledDate = props.disabledDate;
      if (typeof disabledDate !== 'function') {
        return false;
      }
      let now = dayjs();
      let flag = false;
      if (pickerType == 'quarter') {
        let quarterName = dayjsUtil.locale.format(now, 'zh-cn', '[Q]Q');
        flag = disabledDate(now.quarter(), quarterName);
      } else {
        flag = disabledDate(now);
      }

      return flag;
    });

    // 是否显示footer
    let footerVisible = computed(function () {
      let pickerType = props.pickerType;
      let showFooter = props.showFooter;
      if (typeof showFooter !== 'boolean') {
        if (pickerType == 'date' || pickerType == 'dateTime') {
          return true;
        }
      }
      return !!showFooter;
    });

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

    // 设置值
    let setDate = function (newDate?: Dayjs) {
      if (!newDate) {
        ctx.emit('update:modelValue', '');
        ctx.emit('change', '', null);
        callFormItem('validate', 'change');
        return;
      }
      let valueFormat = props.valueFormat;
      let value;
      if (props.pickerType == 'dateTime') {
        let period = '';
        let timePanelProps = props.timePanelProps;
        let datePanelProps = props.datePanelProps;
        let use12Hours = timePanelProps.use12Hours;

        if (!timePanelProps.valueFormat || !datePanelProps.valueFormat) {
          value = newDate.clone();
        } else {
          if (use12Hours) {
            period = newDate.hour() > 12 ? 'pm' : 'am';
          }
          let { disabledHours, disabledMinutes, disabledSeconds } = timePanelProps;
          let timeValue = getUpdateModelValue({
            valueFormat: timePanelProps.valueFormat,
            // valueFormat: valueFormat,
            use12Hours,
            date: newDate,
            period,
            originDate: date.value as Dayjs,
            disabledFns: {
              disabledHours,
              disabledMinutes,
              disabledSeconds
            }
          });
          let dateValue = newDate.format(props.datePanelProps.valueFormat);
          value = dateValue + ' ' + timeValue;
        }
      } else {
        if (!valueFormat) {
          value = newDate.clone();
        } else {
          value = newDate.format(valueFormat);
        }
      }

      // let value = !valueFormat ? date.clone() : date.format(valueFormat);
      ctx.emit('update:modelValue', value);
      ctx.emit('change', value, newDate.clone());
      callFormItem('validate', 'change');
    };
    // 设置面板显示的日期
    let setPanelViewDate = function (date: Date|Dayjs) {
      let mode = currentMode.value || props.pickerType;
      refs[mode + 'Ref']?.value?.setPanelViewDate(date);
    };
    // 清空内容
    let clear = function () {
      setDate();
    };
    // 隐藏下拉面板
    let hide = function (delay = 0) {
      if (delay > 0) {
        let timer = setTimeout(function () {
          clearTimeout(timer);
          (bsCommonPicker.value as any)?.showDropdown(false);
        }, delay);
        return;
      }
      (bsCommonPicker.value as any)?.showDropdown(false);
    };
    // 显示下拉面板
    let show = function () {
      (bsCommonPicker.value as any)?.showDropdown(true);
    };
    // 设置今天
    let setNow = function () {
      setDate(dayjs());
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
      setCurrentMode(nextMode);
      let timer = setTimeout(() => {
        clearTimeout(timer);
        // viewDate
        viewDate.value = panelViewDate;
        refs[nextMode + 'Ref']?.value?.setPanelViewDate(panelViewDate);
      }, 0);
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
      setDate(newDate);
      if (typeof hideDropdown === 'boolean' && !hideDropdown) { // 判断是否隐藏下拉面板
        return;
      }
      // 隐藏下拉面板
      hide(300);
    };

    // 开启输入与操作同步功能
    let isInputTextValid = true;
    // 输入框输入事件
    let onInput = function (value: string) {
      if (!value) {
        isInputTextValid = false;
        return;
      }
      let format = formatInner.value;
      let pickerType = props.pickerType;
      let disabledDate = props.disabledDate;
      isInputTextValid = false;
      if (pickerType == 'quarter' || pickerType == 'week') {
        let dayjsIns = pickerType == 'quarter' ? dayjsUtil.parseQuarter(value, format) : dayjsUtil.parseWeek(value, format, 'zh-cn');
        if (!dayjsIns) {
          return;
        }
        if (isFunction(disabledDate)) {
          let flag = false;
          if (pickerType == 'quarter') {
            let quarterName = dayjsUtil.locale.format(dayjsIns, 'zh-cn', '[Q]Q');
            flag = disabledDate(dayjsIns.quarter(), quarterName);
          } else {
            flag = disabledDate(dayjsIns);
          }
          if (flag) {
            return;
          }
        }
        setDate(dayjsIns);
        isInputTextValid = true;
        return;
      }
      let dayjsIns;
      let periods = '';

      if (pickerType == 'dateTime' && typeof value == 'string') {
        let upperCaseValue = value.toUpperCase();
        if (upperCaseValue.endsWith('AM')) {
          value = value.replace(/AM/i, '').trim();
          periods = 'AM';
        }
        if (upperCaseValue.endsWith('PM')) {
          value = value.replace(/PM/i, '').trim();
          periods = 'PM';
        }
        // value = value.replace(/[am|pm]/ig, '').trim();
        if (periods) {
          format = format.replace(/[a|p]/ig, '').trim();
        }
      }
      // 开启严格校验，如不开启严格校验，当遇到格式如HH:mm:ss，输入框初始值为11:03:20，用户想改成11:30:20，当用户选中“03”然后再输入“3”时值就改变了
      if (!dayjsIns) {
        dayjsIns = dayjsUtil.strictDayjs(value, format);
      }
      if (dayjsIns.isValid()) {
        if (isFunction(disabledDate) && disabledDate(dayjsIns)) {
          return;
        }
        let hour = dayjsIns.hour();
        if (periods == 'AM' && hour > 12) {
          dayjsIns = dayjsIns.hour(hour - 12);
        } else if (periods == 'PM' && hour < 12) {
          dayjsIns = dayjsIns.hour(hour + 12);
        }
        setDate(dayjsIns);
        isInputTextValid = true;
      } else {
        isInputTextValid = false;
      }
    };
    let onInputBlur = function () {
      if (!isInputTextValid) {
        setViewDateTxt(props.modelValue);
      }
    };

    // 设置输入框校验状态
    let setValidateStatus = function (status: string) {
      (bsCommonPicker.value as any)?.setValidateStatus(status);
    };

    let { callFormItem } = useDeliverContextToFormItem(props, {
      id: pickerId.value,
      setValidateStatus
    });

    // 向子孙组件提供当前组件的上下问
    provide(datePickerCtx, {
      ctx,
      pickerType: toRef(props, 'pickerType'),
      currentMode
    });

    let defaultPanelViewDate: any = null;
    return {
      bsCommonPicker,
      pickerId,

      visible,
      viewDateText,
      date,
      viewDate,
      inputPlaceholder,
      todayIsDisabled,
      footerVisible,
      currentMode,

      clear,
      hide,
      show,
      setNow,
      setValidateStatus,
      setCurrentMode,
      setPanelViewDate,

      dateRef,
      weekRef,
      monthRef,
      yearRef,
      quarterRef,
      decadeRef,
      dateTimeRef,

      onDatePanelModelValueChange,
      onNowBtnClick () {
        setNow();
        hide(300);
      },
      onConfirmBtnClick () {
        if (props.pickerType === 'dateTime') {
          if (!props.modelValue) {
            setDate(dayjs());
            hide(300);
            return;
          }
        }
        hide();
      },
      onInput,
      onInputBlur,
      onShow () {
        let mode = props.mode;
        if (mode) {
          currentMode.value = allowedPickerType.includes(mode) ? mode : props.pickerType;
        }
        visible.value = true;
        let panelViewDate = props.panelViewDate;
        if (!props.modelValue && (defaultPanelViewDate !== panelViewDate)) {
          nextTick(function () {
            defaultPanelViewDate = panelViewDate;
            setPanelViewDate(panelViewDate);
          });
        }
        ctx.emit('show');
      },
      onHidden () {
        visible.value = false;
        ctx.emit('hide');
      }
    };
  },
  render () {
    let $slots = this.$slots;
    let {
      pickerType,
      currentMode
    } = this;

    let commonPickerSlots = {
      trigger: $slots.default
    };

    // 面板公共属性
    let panelcommonProps = {
      'model-value': this.date,
      'date-render': this.dateRender,
      'disabled-date': this.disabledDate,
      'show-header': this.showHeader,
      'onUpdate:modelValue': this.onDatePanelModelValueChange
    };

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
    };
    let onYearViewDateChange = (viewDate: Dayjs) => {
      this.viewDate = this.viewDate?.year(viewDate.year());
    };
    let onMonthViewDateChange = (viewDate: Dayjs) => {
      this.viewDate = this.viewDate?.month(viewDate.month());
    };

    let panels: {[key: string]: () => VNode} = {
      datePanel: () => {
        return <BsDatePanel
          ref="dateRef"
          { ...panelcommonProps }
          onYearClick={ onYearButtonClick }
          onMonthClick={ onMonthButtonClick }
          onViewDateChange={ onViewDateChange }></BsDatePanel>;
      },
      weekPanel: () => {
        return <BsWeekPanel
          ref="weekRef"
          { ...panelcommonProps }
          onYearClick={ onYearButtonClick }
          onMonthClick={ onMonthButtonClick }
          onViewDateChange={ onViewDateChange }></BsWeekPanel>;
      },
      monthPanel: () => {
        return <BsMonthPanel
          ref="monthRef"
          { ...panelcommonProps }
          onYearClick={ onYearButtonClick }
          onViewDateChange={ onViewDateChange }></BsMonthPanel>;
      },
      yearPanel: () => {
        return <BsYearPanel
          ref="yearRef"
          { ...panelcommonProps }
          onDecadeClick={ onDecadeClick }
          onViewDateChange={ onYearViewDateChange }></BsYearPanel>;
      },
      quarterPanel: () => {
        return <BsQuarterPanel
          ref="quarterRef"
          { ...panelcommonProps }
          onYearClick={ onYearButtonClick }
          onViewDateChange={ onViewDateChange }></BsQuarterPanel>;
      },
      decadePanel: () => {
        return <BsDecadePanel
          ref="decadeRef"
          { ...panelcommonProps }
          onViewDateChange={ onViewDateChange }></BsDecadePanel>;
      },
      dateTimePanel: () => {
        return <BsDateTimePanel
          ref="dateTimeRef"
          visible={ this.visible }
          date-panel-props={ this.datePanelProps }
          time-panel-props={ this.timePanelProps }
          onYearClick={ onYearButtonClick }
          onMonthClick={ onMonthButtonClick }
          onViewDateChange={ onViewDateChange }

          { ...panelcommonProps }></BsDateTimePanel>;
      }
    };
    let currentModePanel = panels[currentMode + 'Panel'];
    let pickerContent = currentModePanel || panels[pickerType + 'Panel'];

    // 侧边栏
    let sideBar = () => {
      return (<div
        class={[
          'bs-panel-sidebar',
          {
            'sidebar-in-right': this.sidebarInRight
          }
        ]}>
        {$slots.sidebar ? $slots.sidebar({
          date: this.date,
          show: this.show,
          hide: this.hide
        }) : null}
      </div>);
    };

    return (<BsCommonPicker
      class="bs-date-editor"
      ref="bsCommonPicker"
      suffix-icon="calendar"
      size={ this.size }
      show-footer={ this.showFooter }
      input-model-value={ this.viewDateText }
      delive-context-to-form-item={ this.deliveContextToFormItem }
      disabled={ this.disabled }
      id={ this.pickerId }
      name={ this.name }
      placeholder={ this.inputPlaceholder }
      input-readonly={ this.inputReadOnly }
      dropdown-class={ this.dropdownClass }
      native-attrs={ this.nativeAttrs }
      {
        ...{
          'onUpdate:inputModelValue': ($event: any) => { this.viewDateText = $event; }
        }
      }
      onInput={ this.onInput }
      onBlur={ this.onInputBlur }
      onClear={ this.clear }
      onShow={ this.onShow }
      onHidden={ this.onHidden }
      v-slots={ commonPickerSlots }>
      <div
        class={['bs-picker-panel', {
          'has-panel-sidebar': this.showSidebar,
          'sidebar-in-right': this.sidebarInRight
        }]}>
        {/* <!--<PanelSidebar v-if="showSidebar"></PanelSidebar>--> */}
        {/* <div class="bs-panel-sidebar">
          { $slots.sidebar ? $slots.sidebar({ date: this.date }) : null }
        </div> */}
        { this.showSidebar && !this.sidebarInRight ? sideBar() : null }
        {/* { panels[(this.pickerType + 'Panel')]?.() } */}
        { pickerContent?.() }
        { this.showSidebar && this.sidebarInRight ? sideBar() : null }
      </div>
      {(this.footerVisible && (!currentMode || pickerType == currentMode)) ? <div class="bs-picker-footer">
        <div class="bs-picker-btns">
          {/* <!--TODO 按钮的禁用问题--> */}
          {pickerType == 'date' && (!currentMode || currentMode == 'date') ? <BsButton class="bs-picker-today" size="sm" disabled={ this.todayIsDisabled } onClick={ this.onNowBtnClick }>今天</BsButton> : null}
          {pickerType == 'dateTime' ? (
            <>
              <BsButton type="link" size="sm" disabled={ this.todayIsDisabled } onClick={ this.onNowBtnClick }>此刻</BsButton>
              <BsButton class="bs-picker-ok" type="primary" size="sm" onClick={ this.onConfirmBtnClick }>确定</BsButton>
            </>
          ) : null}
          {/* <slot name="footer"></slot> */}
          { $slots.footer ? $slots.footer() : null }
        </div>
      </div> : null}
      {/* <template #trigger>
          <slot></slot>
        </template> */}
    </BsCommonPicker>);
  }
});

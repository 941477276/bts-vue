<template>
  <div class="component-usage">
    <a-space direction="vertical" :size="12" style="margin-top: 2rem;">
      <a-date-picker
        v-model:value="value1"
        value-format="YYYY-MM-DD"
        show-time
        :defaultPickerValue="now"
        :disabledDate="disabledDate"
        :date-render="dateRender"/>
      <bs-button @click="updateNow">修改defaultPickerValue</bs-button>
      <a-date-picker v-model:value="value2" picker="week" />
      <a-date-picker v-model:value="value3" picker="month" />
      <a-date-picker v-model:value="value4" picker="quarter" data-value-format="YYYY-[Q]Q" />
      <a-date-picker v-model:value="value5" picker="year" />
    </a-space>
    <div>
      <h3>基本使用</h3>
      <Basic></Basic>
    </div>

    <div>
      <hr>
      <h3>选择时间</h3>
      <DateTime></DateTime>
    </div>

    <div>
      <hr>
      <h3>自定义渲染</h3>
      <CustomCell></CustomCell>
    </div>

    <div>
      <hr>
      <h3>禁用</h3>
      <Disabled></Disabled>
    </div>

    <div>
      <hr>
      <h3>带快捷按钮</h3>
      <Sidebar></Sidebar>
    </div>

    <div>
      <hr>
      <h3>默认显示日期</h3>
      <PanelViewDate></PanelViewDate>
    </div>

    <div>
      <hr>
      <h3>不同大小</h3>
      <Size></Size>
    </div>
  </div>
</template>

<script lang="ts">
import {
  ref,
  h,
  defineComponent
} from 'vue';
import BsDatePicker from './BsDatePicker';
import dayjs, { Dayjs } from 'dayjs';
import Basic from './demos/basic.vue';
import DateTime from './demos/date-time.vue';
import CustomCell from './demos/custom-cell.vue';
import Disabled from './demos/disabled.vue';
import Sidebar from './demos/sidebar.vue';
import PanelViewDate from './demos/panl-view-date.vue';
import Size from './demos/size.vue';

export default defineComponent({
  name: 'BsDatePickerUsage',
  components: {
    // BsDatePicker,
    Basic,
    DateTime,
    CustomCell,
    Disabled,
    Sidebar,
    PanelViewDate,
    Size
  },
  setup () {
    let disabledDate = function (currentDate: Dayjs) {
      let day = currentDate.date();
      // console.log('day', day);
      return day >= 1 && day <= 10;
    };
    let now = ref(dayjs().year(2021));
    let date1 = ref('2022-08-10');
    // let date1 = ref('');
    let date2 = ref();
    let date3 = ref();
    let date4 = ref();
    let date5 = ref();
    let date6 = ref('2022-08-20 19:37:50');
    let quarterDate = ref();
    let quarterDate2 = ref('2022-Q3');

    let year = ref();
    let year2 = ref(dayjs('2024', 'YYYY'));

    let decade = ref();

    let week1 = ref();
    let week2 = ref('2022-29周');

    // console.log('quarter date', dayjs('2022-Q3', 'YYYY-[Q]Q').quarter(2));
    // console.log('quarter date', dayjs().month(0).quarter(2));
    // console.log('year date', dayjs('2022', 'YYYY'));
    // console.log('week date', dayjs('2022-32周', 'YYYY-wo'));
    // console.log('week date2', dayjs('2022-01-01').week(33));
    // console.log('aaAaaaaaa', dayjs('2022-08-20 19:37:50 AM', 'YYYY-MM-DD hh:mm:ss am', true).isValid());
    return {
      value1: ref<Dayjs>(dayjs()),
      value2: ref<Dayjs>(),
      value3: ref<Dayjs>(),
      value4: ref<Dayjs>(dayjs()),
      value5: ref<Dayjs>(),

      date1,
      date2,
      date3,
      date4,
      date5,
      date6,
      quarterDate,
      quarterDate2,
      now,
      updateNow () {
        now.value = dayjs().year(2016);
      },

      year,
      year2,

      decade,

      week1,
      week2,

      disabledDate,
      dateRender (data: any) {
        console.log('data', data);
        return data.current.date();
      },
      dateRender2 (cellData: any) {
        let current = cellData.dayjsIns;
        console.log('cellData', cellData);
        return h('div', [
          current.date?.(),
          h('small', {
            style: {
              color: '#f60',
              marginLeft: '2px',
              opacity: 0.6
            }
          }, 'cn')
        ]);
      },
      disabledDate2 (current: Dayjs) {
        let now = dayjs();
        console.log('current', current);
        // console.log('disabledDate2', current);
        return (current.valueOf() < now.valueOf()) || (current.endOf?.('month').valueOf() > now.endOf('month').valueOf());
      },
      disabledYear (current: Dayjs) {
        let now = new Date().getFullYear();
        // console.log('current111', current);
        return current.year() < now;
      },
      disabledWeek (current: Dayjs) {
        let now = new Date().getTime();
        // console.log('disabledWeek', current);
        return current.valueOf() < now;
      }
    };
  }
});
</script>

<style lang="scss" scoped>
.component-usage{
  padding: 2rem 0;
}
</style>

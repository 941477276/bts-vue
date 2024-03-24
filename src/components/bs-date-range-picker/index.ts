import {
  App, Plugin
} from 'vue';
import BsDateRangePicker from './BsDateRangePicker';

BsDateRangePicker.install = function (vueApp: App) {
  vueApp.component(BsDateRangePicker.name, BsDateRangePicker);
  return vueApp;
};

export default BsDateRangePicker as typeof BsDateRangePicker & Plugin;

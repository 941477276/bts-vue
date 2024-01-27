import {
  App, Plugin
} from 'vue';
import BsDatePicker from './BsDatePicker';

BsDatePicker.install = function (vueApp: App) {
  vueApp.component(BsDatePicker.name, BsDatePicker);
  return vueApp;
};

export default BsDatePicker as typeof BsDatePicker & Plugin;

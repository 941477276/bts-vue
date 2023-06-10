import BsTimePicker from './BsTimePicker.vue';
import { Plugin } from 'vue';

BsTimePicker.install = function (vueApp: any) {
  vueApp.component(BsTimePicker.name, BsTimePicker);
  return vueApp;
};

export default BsTimePicker as typeof BsTimePicker & Plugin;

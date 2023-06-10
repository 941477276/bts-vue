import BsRadioGroup from './BsRadioGroup.vue';
import { Plugin } from 'vue';

BsRadioGroup.install = function (vueApp: any) {
  vueApp.component(BsRadioGroup.name, BsRadioGroup);
  return vueApp;
};

export default BsRadioGroup as typeof BsRadioGroup & Plugin;

import BsCheckboxGroup from './BsCheckboxGroup.vue';
import { Plugin } from 'vue';

BsCheckboxGroup.install = function (vueApp: any) {
  vueApp.component(BsCheckboxGroup.name, BsCheckboxGroup);
  return vueApp;
};

export default BsCheckboxGroup as typeof BsCheckboxGroup & Plugin;

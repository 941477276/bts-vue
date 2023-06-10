import BsCheckbox from './BsCheckbox.vue';
import { Plugin } from 'vue';

BsCheckbox.install = function (vueApp: any) {
  vueApp.component(BsCheckbox.name, BsCheckbox);
  return vueApp;
};

export default BsCheckbox as typeof BsCheckbox & Plugin;

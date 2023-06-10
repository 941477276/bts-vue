import BsSelectInput from './BsSelectInput.vue';
import { Plugin } from 'vue';

BsSelectInput.install = function (vueApp: any) {
  vueApp.component(BsSelectInput.name, BsSelectInput);
  return vueApp;
};

export default BsSelectInput as typeof BsSelectInput & Plugin;

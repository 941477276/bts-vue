import BsInputNumber from './BsInputNumber.vue';
import { Plugin } from 'vue';

BsInputNumber.install = function (vueApp: any) {
  vueApp.component(BsInputNumber.name, BsInputNumber);
  return vueApp;
};

export default BsInputNumber as typeof BsInputNumber & Plugin;

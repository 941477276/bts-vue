import BsRadio from './BsRadio.vue';
import { Plugin } from 'vue';

BsRadio.install = function (vueApp: any) {
  vueApp.component(BsRadio.name, BsRadio);
  return vueApp;
};

export default BsRadio as typeof BsRadio & Plugin;

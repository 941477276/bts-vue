import BsSpinner from './BsSpinner.vue';
import { Plugin } from 'vue';

BsSpinner.install = function (vueApp: any) {
  vueApp.component(BsSpinner.name, BsSpinner);
  return vueApp;
};

export default BsSpinner as typeof BsSpinner & Plugin;

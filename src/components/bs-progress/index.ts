import BsProgress from './BsProgress.vue';
import { Plugin } from 'vue';

BsProgress.install = function (vueApp: any) {
  vueApp.component(BsProgress.name, BsProgress);
  return vueApp;
};

export default BsProgress as typeof BsProgress & Plugin;

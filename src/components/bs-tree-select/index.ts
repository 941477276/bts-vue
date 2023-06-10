import BsTreeSelect from './BsTreeSelect.vue';
import { Plugin } from 'vue';

BsTreeSelect.install = function (vueApp: any) {
  vueApp.component(BsTreeSelect.name, BsTreeSelect);
  return vueApp;
};

export default BsTreeSelect as typeof BsTreeSelect & Plugin;

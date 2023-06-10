import BsPopConfirm from './BsPopConfirm.vue';
import { Plugin } from 'vue';

BsPopConfirm.install = function (vueApp: any) {
  vueApp.component(BsPopConfirm.name, BsPopConfirm);
  return vueApp;
};

export default BsPopConfirm as typeof BsPopConfirm & Plugin;

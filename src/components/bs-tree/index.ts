import BsTree from './BsTree.vue';
import { Plugin } from 'vue';

BsTree.install = function (vueApp: any) {
  vueApp.component(BsTree.name, BsTree);
  return vueApp;
};

export default BsTree as typeof BsTree & Plugin;

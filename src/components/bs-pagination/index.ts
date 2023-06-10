import BsPagination from './BsPagination.vue';
import { Plugin } from 'vue';

BsPagination.install = function (vueApp: any) {
  vueApp.component(BsPagination.name, BsPagination);
  return vueApp;
};

export default BsPagination as typeof BsPagination & Plugin;

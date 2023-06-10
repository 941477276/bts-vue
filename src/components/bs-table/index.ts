import { App, Plugin } from 'vue';

import BsTable from './BsTable.vue';

BsTable.install = function (vueApp: App) {
  vueApp.component(BsTable.name, BsTable);
  return vueApp;
};

export default BsTable as typeof BsTable & Plugin;

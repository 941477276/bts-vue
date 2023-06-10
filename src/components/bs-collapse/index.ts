import BsCollapse from './BsCollapse.vue';
import BsCollapseItem from './widgets/BsCollapseItem.vue';
import { Plugin } from 'vue';

BsCollapse.install = function (vueApp: any) {
  vueApp.component(BsCollapse.name, BsCollapse);
  vueApp.component(BsCollapseItem.name, BsCollapseItem);
  return vueApp;
};

export default BsCollapse as typeof BsCollapse  & Plugin;

import { App, Plugin } from 'vue';
import BsBreadcrumb from './BsBreadcrumb.vue';
import BreadcrumbItem from './widgets/BsBreadcrumbItem.vue';

BsBreadcrumb.install = function (vueApp: App) {
  vueApp.component(BreadcrumbItem.name, BreadcrumbItem);
  return vueApp;
};

export default BsBreadcrumb as typeof BsBreadcrumb & Plugin;

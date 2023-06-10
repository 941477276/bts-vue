import {
  App, Plugin
} from 'vue';
import BsToastComponent from './BsToast.vue';
import { BsToast } from './bs-toast';

BsToastComponent.install = function (vueApp: App) {
  // 全局注册toast组件
  vueApp.component(BsToastComponent.name, BsToastComponent);
  // 全局挂载toast函数
  vueApp.config.globalProperties.$bsToast = BsToast;
  return vueApp;
};

export default BsToastComponent as typeof BsToastComponent & Plugin;
export { BsToast };

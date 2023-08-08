import { App } from 'vue';
import * as components from './components';
import BsLoadingDefault from './bs-loading';
import version from '../version';

export * from './components';
export * from './types';

console.log('components', components);
export default {
  name: 'BtsVue',
  version,
  install (vueApp: App<any>) {
    // 全局注册组件
    Object.keys(components).forEach((key: string) => {
      let component = (components as any)[key];
      if (typeof component.install == 'function') {
        vueApp.use(component);
      }
    });
    vueApp.use(BsLoadingDefault);
    return vueApp;
  }
};

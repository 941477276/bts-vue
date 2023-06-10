import { App } from 'vue';
import * as components from './components';
import version from '../version';

export * from './components';
export * from './types';

export default {
  name: 'BsVue',
  version,
  install (vueApp: App<any>) {
    // 全局注册组件
    Object.keys(components).forEach((key: string) => {
      let component = (components as any)[key];
      if (typeof component.install == 'function') {
        vueApp.use(component);
      }
    });
    return vueApp;
  }
};

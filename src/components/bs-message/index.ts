import {
  App, Plugin
} from 'vue';
import {
  closeAllMessage,
  closeMessage,
  BsMessage
} from './bs-message';

export {
  closeAllMessage,
  closeMessage,
  BsMessage
};
export default {
  install (app: App) {
    // 全局挂载 $message 函数
    app.config.globalProperties.$message = BsMessage;
    app.config.globalProperties.$closeAllMessage = closeAllMessage;
    app.config.globalProperties.$closeMessage = closeMessage;
    return app;
  }
} as Plugin;

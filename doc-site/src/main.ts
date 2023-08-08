import { createApp } from 'vue';
import App from './App.vue';

// 导入router
import router from './router';
// 导入bootstrap css
// import 'bootstrap/scss/bootstrap.scss';
// 导入代码高亮插件css
import 'prism-themes/themes/prism-atom-dark.css';
import '../../src/styles/index';
import '../../src/styles/bootstrap-other.scss';
import BtsVue from '../../src/components/index';
import { setupI18n, getStorageLangCode } from './i18n/i18nUtil';
import { langCode } from './store/lang';
import '../../src/components/style';
// 导入全局组件
import DemoBox from './components/DemoBox.vue';
import ComponentDoc from './components/ComponentDoc.vue';
import BtsVueDoc from './components/BtsVueDoc.vue';

const app = createApp(App);
let defaultLangCode = getStorageLangCode() || 'cn';
const i18n = setupI18n({
  locale: defaultLangCode,
  legacy: false
});
langCode.value = defaultLangCode;
app.use(i18n);
app.use(BtsVue);
console.log('BtsVue', BtsVue);

// initBootstrapComponents(app);
app.component(DemoBox.name, DemoBox);
app.component(ComponentDoc.name, ComponentDoc);
app.component(BtsVueDoc.name, BtsVueDoc);
app.use(router);

app.mount('#app');

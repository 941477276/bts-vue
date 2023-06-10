import { getCodeByTagName } from './fetchCode';
// import matter from 'gray-matter';
// @ts-ignore
// import MarkdownIt from 'markdown-it';
// @ts-ignore
import path from 'path';

export function apiDocTransform () {
  // let mt = new MarkdownIt();
  console.log('apiDocTransform插件启动了');
  // 获取api文档元数据正则
  // let metaDataReg = /---([\s\S]*)---/;
  // 获取组件名称，项目名为bts-vue，因此需要将bts-vue排除
  let componentNameReg = /bs-([^vue][\w\-]+)/;
  let envConfig = { mode: 'development', command: 'serve' };
  return {
    name: 'apiDocTransform',
    config (config: any, env: any) {
      // console.log('config', config);
      envConfig = env;
    },
    transform (code: string, id: string) {
      // 判断条件中必须加上以.vue结尾的条件，因为vue文件中的style也会进到这个插件中
      if (id.includes('/demos/') && id.endsWith('index.vue')) {
        let componentName = id.match(componentNameReg)![1];
        let templateCode = getCodeByTagName(code, 'template', true).trim();
        let script = getCodeByTagName(code, 'script');
        let style = getCodeByTagName(code, 'style');
        // 新代码
        let newCode = `
          <template>
            <component-doc
              component-name="${componentName}">
              ${templateCode}
            </component-doc>
          </template>
          ${script}
          ${style}
        `;
        return { code: newCode.trim() };
      }
    }
  };
};

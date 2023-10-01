/**
 * 构建文档路由
 * */
const fs = require('fs');
const path = require('path');
// 从字符串或文件解析front-matter。快速、可靠、使用方便。默认情况下解析YAML前端内容
const matter = require('gray-matter');
const MarkdownIt = require('markdown-it');
const Prism = require('prismjs');
// 导入typescript插件
require('prismjs/components/prism-typescript');

// 菜单分类排序
const menuCategoryOrder = [
  { title: '通用', code: 'generic' },
  { title: '数据录入', code: 'data_input' },
  { title: '导航', code: 'navigation' },
  { title: '数据展示', code: 'data_display' },
  { title: '反馈', code: 'feedback' },
  { title: '工具组件', code: 'tool_component' },
  { title: '其他', code: 'other' }
];
;(async function () {
  // 用于模式匹配目录文件
  const globby = await import('globby');
  // 获取所有组件文档md文件路径
  const mdPaths = globby.globbySync('src/components/*/docs/index.*.md');
  // console.log(mdPaths);

  // 菜单集合
  let langMenusMap = {};
  // 路由集合
  let baseRouteMap = {};
  // 文档集合
  let docInfoMap = {};

  mdPaths.forEach(function (mdPath) {
    let componentName = mdPath.split('/')[2].replace(/^bs-/, '');
    let mdFileName = path.parse(mdPath).name; // 取到的文件名是不带后缀名的
    let lang = mdFileName.split('.');
    lang = lang[lang.length - 1];
    let matterResult = matter.read(mdPath);
    let matterData = matterResult.data;
    if (lang == 'zh-CN') {
      baseRouteMap[componentName] = {
        // markdownString: matterResult.content,
        matter: matterData,
        lang
      };
    }

    if (!langMenusMap[lang]) {
      langMenusMap[lang] = {};
    }
    let menus = langMenusMap[lang];
    let typeCode = matterData.typeCode;
    if (!menus[typeCode]) { // 按分类存储菜单
      menus[typeCode] = {
        typeName: matterData.type,
        typeCode: typeCode,
        children: []
      };
    }
    menus[typeCode].children.push({
      type: matterData.type,
      typeCode: typeCode,
      title: matterData.title,
      subtitle: matterData.subtitle,
      startVersion: matterData.startVersion,
      componentName
    });

    if (!docInfoMap[lang]) {
      docInfoMap[lang] = {};
    }
    docInfoMap[lang][componentName] = {
      type: matterData.type,
      typeCode: typeCode,
      title: matterData.title,
      subtitle: matterData.subtitle,
      componentName,
      markdownString: matterResult.content
    };
  });
  // 生成路由
  generateRoutes(baseRouteMap);
  // 生成菜单
  generateMenus(langMenusMap);
  // 生成组件文档
  generateApiDocs(docInfoMap);
})();

function generateRoutes (componentDocs) {
  console.time('----构建文档路由----');
  let template = `
// 由 generateRoutes.js 自动构建的路由文件
/* eslint-disable */
export default [
  ${Object.keys(componentDocs).map(componentName => {
    return (`
    {
      path: '${componentName}',
      name: '${componentName}',
      meta: ${JSON.stringify(componentDocs[componentName].matter)},
      component: () => import('../../../src/components/bs-${componentName}/demos/index.vue')
    }`);
  }).join(',')}
];`;

  fs.writeFileSync(path.resolve(__dirname, '../src/router/docRoutes.ts'), template, 'utf-8');
  console.timeEnd('----构建文档路由----');
}

function generateMenus (langMenusMap) {
  console.time('----构建文档菜单----');
  Object.entries(langMenusMap).forEach(entry => {
    let fileName = `menu.${entry[0]}.ts`;
    let menus = Object.entries(entry[1]);
    // 对菜单进行排序
    let newMenus = menuCategoryOrder.map((categoryItem, index) => {
      let categoryCode = categoryItem.code;
      let categoryIndex = menus.findIndex(entry => entry[0] === categoryCode);
      return menus[categoryIndex];
    });
    let menuContent = `
// 由 generateRoutes.js 自动构建的菜单文件
export interface MenuItem {
  type: string;
  typeCode: string;
  title: string;
  subtitle?: string;
  startVersion?: string;
  componentName: string;
};

export interface Menus {
  type: string;
  typeCode: string;
  children: MenuItem[];
}

/* eslint-disable */
let menus: Menus[] = [
${
      newMenus.map(menuEntry => {
        return `{
    type: '${menuEntry[1].typeName}',
    typeCode: '${menuEntry[0]}',
    children: ${JSON.stringify(menuEntry[1].children)}
  }`;
      }).join(',')
    }
];

export default menus;
    `;
    fs.writeFileSync(path.resolve(__dirname, `../src/router/${fileName}`), menuContent.trim(), 'utf-8');
  });
  console.timeEnd('----构建文档菜单----');
};

function generateApiDocs (docInfoMap) {
  console.time('----构建api文档----');
  let langMap = {
    ts: 'typescript',
    js: 'javascript'
  };
  let mt = new MarkdownIt({
    highlight (str, lang) {
      // console.log('highlight----------------');
      // console.log(str);
      // console.log('highlight============');
      // console.log(lang);
      if (lang in langMap) {
        lang = langMap[lang];
      }
      let html = '';
      try {
        html = Prism.highlight(str, Prism.languages[lang], lang);
      } catch (e) {
        console.error(`[generateRoutes.js] Prism.highlight parse "${lang}" error: ${e.message}`);
      }
      if (html) {
        // console.log(html);
        return `<pre class="language-${lang}"><code>${html}</code></pre>`;
      }
    }
  });
  Object.entries(docInfoMap).forEach(([lang, langDocMap]) => {
    Object.entries(langDocMap).forEach(([componentName, docInfo]) => {
      let markdownString = docInfo.markdownString;
      // 获取markdown第一个标题标识符的位置
      let mdHeaderIdentityIndex = markdownString.indexOf('## ');
      if (mdHeaderIdentityIndex < 0) {
        return;
      }
      let mdDesc = markdownString.substring(0, mdHeaderIdentityIndex);
      let newMarkdownString = markdownString.substring(mdHeaderIdentityIndex);
      let desc = mt.render(mdDesc);
      let apiContent = mt.render(newMarkdownString);
      apiContent = apiContent.replace(/<h2>/g, '<h2 class="api-h2" id="API_h2">');
      apiContent = apiContent.replace(/<table>/g, '<div class="table-responsive"><table class="api-table table table-hover">');
      apiContent = apiContent.replace(/<\/table>/g, '</table></div>');
      apiContent = apiContent.replace(/<thead>/g, '<thead class="thead-light">');
      let jsonContent = {
        ...docInfo,
        description: desc,
        apiContent
      };
      delete jsonContent.markdownString;
      let dir = path.resolve(__dirname, `../src/apiDocs/${componentName}`);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(dir + `/${lang}.json`, JSON.stringify(jsonContent, null, 2), 'utf-8');
    });
  });
  console.timeEnd('----构建api文档----');
};

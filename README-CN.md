# bts-vue
`bts-vue`是一个基于`vue3.x`和`Bootstrap UI 4.x`的Vue组件库！它在Bootstrap UI的基础上进行增强改进，使得`bts-vue`
比bootstrap ui更美观，体验友好。

`bts-vue`继承了`Bootstrap`的CSS响应式特性，因此它适用于各种跨端的项目。


## 安装
1. 使用`npm`安装
```bash
npm install bts-vue -S
```

[文档和Demo](https://941477276.github.io/bts-vue/doc-site/dist)

## 注册
如果使用 Vue 默认的模板语法，需要注册组件后方可使用，有如下三种方式注册组件：
### 全局完整注册
```js
import { createApp } from 'vue';
import App from './App';
// 导入bts-vue
import BtsVue from 'bts-vue';
// 导入bts-vue组件样式
// import 'bts-vue/es/components/index.js'; // 导入的是.scss文件
import 'bts-vue/es/components/css.js'; // 导入的是.css文件
// 导入除bootstrap组件样式外的其他样式（如果您需要的话），如栅格系统、导航栏、卡片、布局等
// import 'bts-vue/es/styles/bootstrap-other.scss';
import 'bts-vue/es/styles/bootstrap-other.css';

const app = createApp(App);

app.use(BtsVue).mount('#app');
```

### 全局部分注册
```javascript
import { createApp } from 'vue';
import { BsButton, BsInput, BsDropdown, BsMessage } from 'bts-vue';
/** 导入组件样式方式1：手动按需导入
 * // 如果您未使用按需导入插件，那么您需要手动导入组件的样式
 * import 'bts-vue/es/components/bs-button/style/index.js'; // 组件style目录下的index.js文件为导入的是.scss文件
 * // import 'bts-vue/es/components/bs-button/style/css.js'; // 组件style目录下的index.js文件为导入的是.css文件
 */

/** 导入组件样式方式2：一次性导入所有组件样式
 * import 'bts-vue/es/compoents/style.js'; // 导入的是.scss文件
 * // import 'bts-vue/es/compoents/css.js'; // 导入的是.css文件
 */
import 'bts-vue/es/compoents/style.js'; // 导入的是.scss文件
// import 'bts-vue/es/compoents/css.js'; // 导入的是.css文件

import App from './App';

const app = createApp(App);
app.use(BsButton);
app.use(BsInput);
/* 会自动注册 Dropdown 下的子组件, 例如 BsDropdownItem */
app.use(BsDropdown);
  
app.mount('#app');

app.config.globalProperties.$message = BsMessage;
```

### 组件级局部注册
此种方式需要分别注册组件子组件，如 BsDropdown、BsDropdownItem，并且注册后仅在当前组件中有效。所以我们推荐使用上述两种方式。
```html
<template>
  <bs-button>Add</bs-button>
</template>
<script>
  import { BsButton, BsDropdown, BsDropdownItem } from 'bts-vue';
  import 'bts-vue/es/compoents/bs-button/style'; // 导入的是.scss文件
  import 'bts-vue/es/compoents/bs-dropdown/style'; // 导入的是.scss文件

  export default {
    components: {
      BsButton,
      BsDropdown,
      BsDropdownItem
    },
  };
</script>
```

## 浏览器引入

在浏览器中使用`script`和`link`标签直接引入文件，并使用全局变量`BtsVue`

在 npm 发布包内的 `bd-vue/dist` 目录下有 `bts-vue.js`、`bts-vue.css`、`bootstrap-other.css`文件，你可以手动的引入它们
```html
<link rel="stylesheet" href="bts-vue.css">
<!--导入除bootstrap组件样式外的其他样式（如果您需要的话），如栅格系统、导航栏、卡片、布局等-->
<link rel="stylesheet" href="bootstrap-other.css">
<script src="bts-vue.js"></script>
```

## 按需加载
### 手动按需导入
如果您未使用任何按需加载插件，您可以通过手动导入的方式来按需加载组件：
```javascript
import BsButton from 'bts-vue/es/components/bs-button';
import 'bts-vue/es/components/bs-button/style'; // 导入的是.scss文件
// 或 import 'bts-vue/es/components/bs-button/style/css'; 导入的是.css文件

import BsForm from 'bts-vue/es/components/bs-form';
import BsFormItem from 'bts-vue/es/components/bs-form/widgets/BsofromItem';
import 'bts-vue/es/components/bs-form/style'; // 导入的是.scss文件
// 或 import 'bts-vue/es/components/bs-form/style/css'; 导入的是.css文件
```

### vite按需导入
如果你使用的 Vite，你可以使用 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) 来进行按需加载

1. 首先你需要将下面这段`unplugin-vue-components-resolver`插件代码复制到你的项目中
```javascript
import type { ComponentResolver, SideEffectsInfo } from 'unplugin-vue-components';

export interface BtsVueResolverOptions {
  /**
   * exclude components that do not require automatic import
   *
   * @default []
   */
  exclude?: string[]
  /**
   * import style along with components
   *
   * @default 'css'
   */
  importStyle?: boolean | 'css' | 'scss'
  /**
   * resolve `vue3-bootstrap-icon' icons
   *
   * requires package `vue3-bootstrap-icon`
   *
   * @default false
   */
  resolveIcons?: boolean

  /**
   * @deprecated use `importStyle: 'css'` instead
   */
  importCss?: boolean
  /**
   * @deprecated use `importStyle: 'scss'` instead
   */
  importScss?: boolean

  /**
   * use commonjs build default false
   */
  cjs?: boolean

  /**
   * rename package
   *
   * @default 'bts-vue'
   */
  packageName?: string
};

interface ChildComponentDirInfo {
  componentDir: string,
  componentNames: string[]
};

// 子组件目录配置列表
const childComponentDirs: ChildComponentDirInfo[] = [
  {
    componentDir: 'bs-breadcrumb',
    componentNames: ['BsBreadcrumbItem']
  },
  {
    componentDir: 'bs-collapse',
    componentNames: ['BsCollapseItem']
  },
  {
    componentDir: 'bs-form',
    componentNames: ['BsFormItem']
  },
  {
    componentDir: 'bs-menu',
    componentNames: ['BsMenuItem', 'BsMenuItemGroup', 'BsSubMenu']
  },
  {
    componentDir: 'bs-table',
    componentNames: []
  },
  {
    componentDir: 'bs-tabs',
    componentNames: ['BsTabPane']
  },
  {
    componentDir: 'bs-select',
    componentNames: ['BsOption', 'BsOptionGroup']
  }
];

/**
 * 获取子组件目录
 * @param componentName
 */
function getChildComponentDir (componentName: string) {
  return childComponentDirs.find(dirInfo => {
    return dirInfo.componentNames.includes(componentName);
  });
}

function kebabCase (camelStr: string): string {
  return camelStr.replace(/(\w)?([A-Z])/g, function (matched, $1, $2) {
    return ($1 ? ($1 + '-') : '') + $2.toLowerCase();
  });
};

function getSideEffects(compName: string, options: BtsVueResolverOptions): SideEffectsInfo {
  const {
    importStyle = true,
    importScss = false
  } = options;

  if (!importStyle) {
    return;
  }
  // 不导入图标的样式
  if (options.resolveIcons && compName.startsWith('Bsi')) {
    return;
  }

  const lib = options.cjs ? 'lib' : 'es';
  const packageName = options?.packageName || 'bts-vue';

  let childComponentDir = getChildComponentDir(compName);
  let styleDir = childComponentDir ? childComponentDir.componentDir : kebabCase(compName);
  if (importStyle === 'scss' || importScss) {
    return `${packageName}/${lib}/components/${styleDir}/style`;
  } else {
    return `${packageName}/${lib}/components/${styleDir}/style/css`;
  }
}

/**
 * Resolver for BtsVue
 */
export function BtsVueResolver(options: BtsVueResolverOptions = {}): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      const { cjs = false, packageName = 'bts-vue' } = options;
      if (options.resolveIcons && name.startsWith('Bsi')) {
        let iconPath = `vue3-bootstrap-icon/${cjs ? 'cjs' : 'es'}/icons/${name}`;
        return {
          name,
          from: iconPath
        };
      }

      if (name.startsWith('Bs') && !name.startsWith('Bsi') && !options?.exclude?.includes(name)) {
        let componentDir = kebabCase(name);
        let childComponentDir = getChildComponentDir(name);
        let path = `${packageName}/${cjs ? 'lib' : 'es'}/components`;
        if (childComponentDir) {
          path += `/${childComponentDir.componentDir}/widgets/${name}`;
        } else {
          path += `/${componentDir}`;
        }

        return {
          name: 'default', // 这里的name为组件文件导出的变量名称
          from: path,
          sideEffects: getSideEffects(name, options)
        };
      }
    }
  };
}
```
2. 在你项目中的`vite.config.js`中使用该插件
```javascript
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { BtsVueResolver } from './unplugin-vue-components-resolver';

export default defineConfig({
  base: './',
  plugins: [
    vue(),
    // 按需加载
    Components({
      dts: true,
      resolvers: [
        BtsVueResolver({
          // exclude: ['BsButton'], // 需要排除自动导入的组件
          importStyle: 'scss' // 导入组件的哪种样式文件，可选值：boolean、scss、css。默认导入css样式文件
          // importCss: boolean, // 是否导入组件的css文件
          // importScss: boolean, // 是否导入组件的scss文件
          // resolveIcons: boolean, // 是否自动按需导入`vue3-bootstrap-icon`图标中的图标
          // cjs: boolean, // 是否导入commonjs格式的js文件
          // packageName: string, // 组件库名称，默认为：bts-vue
        })
      ]
    })
  ]
});
```
3. 此插件无法处理非组件模块，如BsMessage、BsToast、BsMessageBox，这种组件需要手动加载：
```javascript
import { BsMessage, BsToast, BsMessageBox } from 'bts-vue';

import 'bts-vue/es/components/bs-message/style'; // 或 import 'bts-vue/es/components/bs-message/style/css';
import 'bts-vue/es/components/bs-message-box/style';
import 'bts-vue/es/components/bs-toast/style';
```

## `bts-vue`组件库的来源
`bts-vue`组件库原本只是本人学习`vue3`时的一个产物，在学习的过程中逐渐形成了一个体量不小的组件库，因此将其开源出来。

`bts-vue`组件库既可以商用，也非常适合初、中级开发者去学习vue3，学习组件库开发。这套组件库中没有太过高深、难以理解的代码，组件嵌套层级基本不会超过4层，
因此非常适合初、中级开发者去学习它，去看它的源码，顺便改正一下代码中的不足之处。

如果你对`bts-vue`感兴趣，或使用过程中、或学习源码中发现有问题可以加入`QQ`群进行咨询：
![bts-vue qq群1](./imgs/qq1.jpeg)

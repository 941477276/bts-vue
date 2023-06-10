# Get started quickly
This section describes how to use Bootstrap Vue in your project.

## Import Bootstrap Vue

### Install
1. Install using `npm`
```bash
npm install bts-vue -S
```

## register
If you use Vue's default template syntax, you need to register components before using them. There are three ways to register components:
### Global full registration
```js
import { createApp } from 'vue';
import App from './App';
// import bts-vue
import BsVue from 'bts-vue';
// import bts-vue component style
// import 'bts-vue/es/components/index.js'; // import is .scss file
import 'bts-vue/es/components/css.js'; // import is .css file
// Import other styles (if you need) other than bootstrap component styles, such as grid system, navbar, cards, layout, etc.
// import 'bts-vue/es/styles/bootstrap-other.scss';
import 'bts-vue/es/styles/bootstrap-other.css';

const app = createApp(App);

app.use(BsVue).mount('#app');
```
### Global Part Registration
```javascript
import { createApp } from 'vue';
import { BsButton, BsInput, BsDropdown, BsMessage } from 'bts-vue';
/** Import component style method 1: Manually import on demand
  * // If you are not using the on-demand import plugin, then you need to manually import the styles of the component
  * import 'bts-vue/es/components/bs-button/style/index.js'; // The index.js file in the component style directory imports the .scss file
  * // import 'bts-vue/es/components/bs-button/style/css.js'; // The index.js file in the component style directory imports the .css file
  */

/** Import component style method 2: import all component styles at once
  * import 'bts-vue/es/components/style.js'; // import is .scss file
  * // import 'bts-vue/es/components/css.js'; // import is .css file
  */
import 'bts-vue/es/components/style.js'; // import is .scss file
// import 'bts-vue/es/components/css.js'; // imports the .css file

import App from './App';

const app = createApp(App);
app. use(BsButton);
app.use(BsInput);
/* Subcomponents under Dropdown will be automatically registered, such as BsDropdownItem */
app.use(BsDropdown);
  
app.mount('#app');

app.config.globalProperties.$message = BsMessage;
```

### Component-level local registration
This method needs to register component subcomponents separately, such as BsDropdown, BsDropdownItem, and the registration is only valid in the current component. So we recommend using the above two methods.
```html
<template>
   <bs-button>Add</bs-button>
</template>
<script>
   import { BsButton, BsDropdown, BsDropdownItem } from 'bts-vue';
   import 'bts-vue/es/components/bs-button/style'; // import is .scss file
   import 'bts-vue/es/components/bs-dropdown/style'; // import is .scss file

   export default {
     components: {
       BsButton,
       Bs Dropdown,
       BsDropdownItem
     },
   };
</script>
```

## Browser introduction

Use the `script` and `link` tags in the browser to directly import the file, and use the global variable `BsVue`

There are `bts-vue.js`, `bts-vue.css`, `bootstrap-other.css` files in the `bd-vue/dist` directory in the npm release package, you can import them manually
```html
<link rel="stylesheet" href="bts-vue.css">
<!--Import other styles (if you need) other than bootstrap component styles, such as grid system, navigation bar, card, layout, etc. -->
<link rel="stylesheet" href="bootstrap-other.css">
<script src="bts-vue.js"></script>
```

## Load on demand
### Manual import on demand
If you are not using any on-demand plugins, you can manually import components on-demand:
```javascript
import BsButton from 'bts-vue/es/components/bs-button';
import 'bts-vue/es/components/bs-button/style'; // import is .scss file
// or import 'bts-vue/es/components/bs-button/style/css'; the imported .css file

import BsForm from 'bts-vue/es/components/bs-form';
import BsFormItem from 'bts-vue/es/components/bs-form/widgets/BsofromItem';
import 'bts-vue/es/components/bs-form/style'; // import is .scss file
// or import 'bts-vue/es/components/bs-form/style/css'; the imported .css file
```
### vite import on demand
If you use Vite, you can use [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) for on-demand loading

1. First you need to copy the following `unplugin-vue-components-resolver` plugin code into your project
```javascript
import type { ComponentResolver, SideEffectsInfo } from 'unplugin-vue-components';

export interface BsVueResolverOptions {
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

function getSideEffects(compName: string, options: BsVueResolverOptions): SideEffectsInfo {
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
 * Resolver for BsVue
 */
export function BsVueResolver(options: BsVueResolverOptions = {}): ComponentResolver {
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
2. Use the plugin in `vite.config.js` in your project
```javascript
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { BsVueResolver } from './unplugin-vue-components-resolver';

export default defineConfig({
   base: './',
   plugins: [
     vue(),
     // load on demand
     Components({
       dts: true,
       resolvers: [
         BsVueResolver({
           // exclude: ['BsButton'], // need to exclude auto-imported components
           importStyle: 'scss' // Which style file to import the component, optional values: boolean, scss, css. Import css style files by default
           // importCss: boolean, // Whether to import the css file of the component
           // importScss: boolean, // Whether to import the scss file of the component
           // resolveIcons: boolean, // Whether to automatically import the icons in the `vue3-bootstrap-icon` icon on demand
           // cjs: boolean, // Whether to import js files in commonjs format
           // packageName: string, // component library name, the default is: bts-vue
         })
       ]
     })
   ]
});
```
3. This plugin cannot handle non-component modules, such as BsMessage, BsToast, BsMessageBox, such components need to be loaded manually:
```javascript
import { BsMessage, BsToast, BsMessageBox } from 'bts-vue';

import 'bts-vue/es/components/bs-message/style'; // or import 'bts-vue/es/components/bs-message/style/css';
import 'bts-vue/es/components/bs-message-box/style';
import 'bts-vue/es/components/bs-toast/style';
```

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
  },
  {
    componentDir: 'bs-dropdown',
    componentNames: ['BsDropdownItem']
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

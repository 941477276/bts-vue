const path = require('path');
const fs = require('fs');
const { defineConfig, build } = require('vite');
const vue = require('@vitejs/plugin-vue');
const vueJsx = require('@vitejs/plugin-vue-jsx');
const utils = require('./utils');
// const os = require('os');
const nodeCMD = require('node-cmd');

// 目标目录路径
// const targetDirPath = path.resolve(__dirname, '../lib');
// const componentsDirPath = path.resolve(__dirname, '../src/components');

/* const baseConfig = {
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()]
}; */
// 外部依赖列表
const externalList = ['vue', 'dayjs', 'vue3-bootstrap-icon', 'bignumber.js', 'async-validator', '@popperjs/core', '@vue/shared'];

// 修改作为外部依赖的文件后缀名为.js的rollup插件
const modifyExternalImportFileExtToJs = function () {
  let externalSuffixs = ['.vue', '.ts', '.tsx', '.jsx', '.scss'];
  let excludeFiles = ['/version.ts', '/version'];
  return {
    name: 'modify-external-import-file-ext-to-js',
    resolveId: {
      order: 'pre', // 该钩子函数必须提前运行，否则不会执行到
      handler (source, importer, options) {
        // console.log('source: ', source);
        let isExcludeFile = excludeFiles.some(fileName => source.endsWith(fileName));
        if (isExcludeFile) {
          return;
        }
        let isExternalListExternal = externalList.some(externalItem => source.startsWith(externalItem));
        // 将src目录下的所有文件及vue3-bootstrap-icon图标都视为外部依赖
        if ((source.startsWith('./') || source.startsWith('../')) || isExternalListExternal) {
          let result = {
            external: true,
            id: source
          };
          let isExternal = externalSuffixs.some(suffix => source.endsWith(suffix));
          // 修改打包后的文件中的外部依赖导入的后缀名为js，否则在使用时会报错
          if (isExternal) {
            let newSource = source;
            /* if (source.endsWith('.scss')) {
              newSource = newSource.replace('.scss', '.css');
            } else {
              newSource = newSource.replace('.vue', '.js');
              newSource = newSource.replace('.ts', '.js');
              newSource = newSource.replace('.tsx', '.js');
              newSource = newSource.replace('.js', '.js');
            } */
            newSource = newSource.replace('.vue', '.js');
            newSource = newSource.replace('.ts', '.js');
            newSource = newSource.replace('.tsx', '.js');
            newSource = newSource.replace('.js', '.js');
            result.id = newSource;
          }
          // console.log('result', result);
          return result;
        }
      }
    }
  };
};

/**
 * 将vue、ts、tsx、js文件转成js
 * @param entry 入口文件
 * @param outDir 输出目录
 * @param fileName 输出的文件名称
 * @param formats 打包后的js的格式，支持es、cjs、amd、iife、umd、system
 */
async function buildVueFileToJs (entry, outDir, fileName, formats = 'es') {
  const rollupOptions = {
    // 确保外部化处理那些你不想打包进库的依赖
    // external: ['vue', 'dayjs', 'vue3-bootstrap-icon', 'bignumber.js', 'async-validator', '@popperjs/core'],
    external: externalList,
    output: {
      globals: {
        vue: 'Vue' // 在 umd / iife 模式 中，将vue作为外部依赖
      }
    },
    plugins: [modifyExternalImportFileExtToJs()]
  };
  await build(defineConfig({
    configFile: false,
    publicDir: false,
    plugins: [vue(), vueJsx()],
    logLevel: 'warn',
    build: {
      target: 'es2015',
      rollupOptions,
      emptyOutDir: false,
      lib: {
        entry: entry,
        name: fileName,
        fileName: fileName,
        formats: Array.isArray(formats) ? formats : [formats]
      },
      outDir: outDir
    },
    css: {
      postcss: {
        plugins: [
          require('autoprefixer')({
            overrideBrowserslist: [
              'Android 4.1',
              'iOS 7.1',
              'ie >= 10',
              '> 0.3%'
            ],
            grid: true
          })
        ]
      }
    },
    esbuild: {
      drop: ['console', 'debugger'] // 移除代码中的console
    }
  }));
}

/* buildVueFileToJs(
  path.resolve(__dirname, '../src/components/bs-button/style/bs-button.scss'),
  path.resolve(__dirname, '../es/components/bs-button/style'),
  'bs-button',
  'es'
); */

/**
 * 构建css
 * @param entry
 * @param outDir
 * @param fileName
 * @param formats
 * @returns {Promise<void>}
 */
async function buildCss (entry, outDir, fileName, formats = 'es') {
  await buildVueFileToJs(
    entry,
    outDir,
    fileName,
    formats
  );
  let { dir: entryFileDir } = path.parse(entry);
  // vite构建scss文件后会生成 {fileName}.js、style.css，这里我们需要将{fileName}.js删掉，style.css重命名为{fileName}.scss
  utils.deleteFile(`${outDir}${path.sep}${fileName}.mjs`);
  utils.deleteFile(`${outDir}${path.sep}${fileName}.js`);
  // 重命名style.css为{fileName}.css
  let styleFilePath = `${outDir}${path.sep}style.css`;
  if (fs.existsSync(styleFilePath)) {
    fs.renameSync(`${outDir}${path.sep}style.css`, `${outDir}${path.sep}${fileName}.css`);
  }
  // 复制index.ts到目标目录
  // utils.copy(`${entryFileDir}${path.sep}index.ts`, `${outDir}${path.sep}index.ts`);
  // 复制源scss到目标目录
  utils.copy(entry, `${outDir}${path.sep}${fileName}.scss`);
};

/* buildCss(
  path.resolve(__dirname, '../src/components/bs-button/style/bs-button.scss'),
  path.resolve(__dirname, '../es/components/bs-button/style'),
  'bs-button',
  'es'
); */

/**
 * 生成 css.js 文件（根据构建好的index.js文件生成）
 * @param globby
 * @param targetDir 目标目录
 */
function generateCssJsFile (globby, targetDir, format) {
  console.log('生成 css.js 中...');
  let startTime = new Date().getTime();
  // 查找style、styles目录下的index.js、style.js
  let styleIndexFilePaths = globby.globbySync(`(${targetDir}/**/(style|styles)/index.js)|${targetDir}/**/style.js`);

  styleIndexFilePaths.forEach(indexFilePath => {
    let { dir } = path.parse(indexFilePath);
    let indexFileContent = fs.readFileSync(indexFilePath, 'utf-8');
    let cssFileContent = indexFileContent.replace(/\.scss/g, '.css');
    let cssFileContentArr = cssFileContent.split(format == 'cjs' ? ');' : ';');
    cssFileContentArr.forEach((lineString, index) => {
      if (lineString == '"use strict"') {
        return;
      }
      if (lineString.endsWith('/css"') || lineString.endsWith('.css"') || lineString.trim().length == 0) {
        return;
      }
      if (!lineString.endsWith('/css.js"')) {
        let newLine = lineString.substring(0, lineString.length - 1); // 去除尾部双引号
        if (!newLine.endsWith('/')) {
          newLine = newLine + '/';
        }
        newLine += 'css.js"';
        cssFileContentArr[index] = newLine;
      }
    });
    cssFileContent = cssFileContentArr.join(format == 'cjs' ? ');' : ';');
    fs.writeFileSync(path.resolve(__dirname, `../${dir}/css.js`), `// The file is automatically generated by "build-lib.js"! \r\n${cssFileContent}`, 'utf-8');
  });
  console.log(`生成 css.js 结束，耗时：${new Date().getTime() - startTime}ms！`);
};

/**
 *  生成 .d.ts 类型文件并拷贝到目标目录
 * @param globby
 * @param targetDir
 */
function doTsc (globby, targetDir) {
  console.log('生成ts类型文件中...');
  let startTime = new Date().getTime();
  let tsFilePaths = globby.globbySync('(src/**/*-types.ts)|src/components/(components|index|types|style).ts|src/utils/*.ts|src/hooks/*.ts');
  // console.log(tsFilePaths);
  // return;
  // 使用vue-tsc生成ts类型文件
  nodeCMD.runSync(`vue-tsc ${tsFilePaths.join(' ')} --declaration --emitDeclarationOnly`);
  // nodeCMD.runSync(`vue-tsc src/hooks/*.ts src/utils/*.ts src/components/**/*.ts src/components/**/*.vue --declaration --emitDeclarationOnly`);
  // 复制ts类型文件到目标目录
  globby.globbySync('src/**/*.d.ts').forEach(filePath => {
    // console.log(filePath);
    if (filePath.endsWith('declaration.d.ts') || filePath.endsWith('shims-vue.d.ts')) {
      return;
    }
    let { dir, name } = path.parse(filePath);
    utils.copy(filePath, filePath.replace('src/', targetDir + '/').replace('.vue', ''));
    /* if (filePath.includes('/components/bs-') && filePath.endsWith('-types.d.ts')) {
      fs.writeFileSync(path.resolve(__dirname, `../${dir.replace('src/', targetDir + '/')}/index.d.ts`), `// The file is automatically generated by "build-lib.js"! \r\n export * from "./${name}.ts"`, 'utf-8');
    } */
    utils.deleteFile(filePath);
  });
  console.log(`生成ts类型文件完成，耗时：${new Date().getTime() - startTime}ms！`);
}

/**
 * 构建组件库
 * @param format 打包后的格式
 * @returns {Promise<void>}
 */
async function buildLib (format = 'es') {
  // 用于模式匹配目录文件
  const globby = await import('globby');
  // 获取src目录下除了demos、docs目录下的所有js、vue文件
  const vueFilePaths = globby.globbySync('src/(components|hooks|ts-tokens|utils|styles)/**/*.(vue|tsx|jsx|ts|js|scss)');
  // console.log(vueFilePaths.length);
  // console.log(path.parse('src/components/bs-button/BsButtonUsage.vue'));
  const targetFileParentDir = format == 'cjs' ? 'lib' : 'es';
  // doTsc(globby, targetFileParentDir, format);
  // return;
  console.log('待构建模块数量：', vueFilePaths.length);
  let buildCompletedCount = 0;
  for (let i = 0, len = vueFilePaths.length; i < len; i++) {
    let filePath = vueFilePaths[i];
    let { dir, name, ext } = path.parse(filePath);
    if (name.endsWith('Usage') || name.endsWith('_copy') || dir.includes('/demos') || dir.includes('/docs')) { // 不对使用示例文件、demo、文档进行构建
      buildCompletedCount++;
      continue;
    }
    dir = dir.replace('src/', targetFileParentDir + '/');
    let targetDir = path.resolve(__dirname, `../${dir}`);
    await buildVueFileToJs(
      path.resolve(__dirname, `../${filePath}`),
      targetDir,
      name,
      format
    );
    // console.log('filePath', filePath);
    // 构建组件目录下的scss文件
    if (filePath.includes('/style') && filePath.endsWith('.scss')) {
      await buildCss(
        path.resolve(__dirname, `../${filePath}`),
        targetDir,
        name,
        format
      );
    }
    buildCompletedCount++;
    console.log(`构建进度：${(buildCompletedCount / len * 100).toFixed(2)}%`);
  }
  // 重命名.mjs为.js
  if (format == 'es') {
    let startTime = new Date().getTime();
    let mjsFilePaths = globby.globbySync('es/**/*.mjs');
    console.log('重命名.mjs为.js中...');
    mjsFilePaths.forEach(mjsFilePath => {
      fs.renameSync(mjsFilePath, mjsFilePath.replace('.mjs', '.js'));
    });
    console.log(`重命名.mjs为.js完成，耗时：${new Date().getTime() - startTime}ms！`);
  }
  // 创建 css.js 文件
  generateCssJsFile(globby, targetFileParentDir, format);
  // 生成 .d.ts 文件
  doTsc(globby, targetFileParentDir);
};

// buildLib();
// buildLib('cjs');

/**
 * 构建浏览器可直接访问的js库
 * @param format 构建的js库格式，支持iife、umd
 * @returns {Promise<void>}
 */
async function buildDistLib (format) {
  const outDir = path.resolve(__dirname, '../dist');
  if (!format || (format && (format != 'iife' && format != 'umd'))) {
    format = 'umd';
  }
  await build(defineConfig({
    configFile: false,
    publicDir: false,
    plugins: [vue(), vueJsx()],
    // logLevel: 'warn',
    build: {
      target: 'es2015',
      sourcemap: true,
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        // external: ['vue', 'dayjs', 'vue3-bootstrap-icon', 'bignumber.js', 'async-validator', '@popperjs/core'],
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue' // 在 umd / iife 模式 中，将vue作为外部依赖
          }
          // exports: 'default' // 使用默认导出
        },
        plugins: [
          {
            writeBundle (options) { // 文件写入磁盘后的回调函数
              // 重命名js文件
              fs.renameSync(path.resolve(outDir, 'bts-vue.umd.js'), path.resolve(outDir, 'bts-vue.js'));
              fs.renameSync(path.resolve(outDir, 'bts-vue.umd.js.map'), path.resolve(outDir, 'bts-vue.js.map'));
            }
          }
        ]
      },
      emptyOutDir: false,
      lib: {
        entry: path.resolve(__dirname, '../src/components/dist.ts'),
        name: 'BsVue',
        fileName: 'bts-vue',
        formats: [format]
      },
      outDir
    },
    define: {
      'process.env': {}
    },
    css: {
      postcss: {
        plugins: [
          require('autoprefixer')({
            overrideBrowserslist: [
              'Android 4.1',
              'iOS 7.1',
              'ie >= 10',
              '> 0.3%'
            ],
            grid: true
          })
        ]
      }
    },
    esbuild: {
      drop: ['console', 'debugger'] // 移除代码中的console
    }
  }));

  /**
   * 构建css完成后的插件
   * @param fileName 文件名称
   * @returns {{writeBundle(*): void}}
   */
  let onGenerateCssEnd = function (fileName) {
    return {
      writeBundle (options) { // 文件写入磁盘后的回调函数
        let jsFilePath = path.resolve(outDir, `./${fileName}.mjs`);
        // 删除构建css后余留的js文件
        utils.deleteFile(jsFilePath);
        // 重命名style.css为bts-vue.css
        fs.renameSync(path.resolve(outDir, 'style.css'), path.resolve(outDir, `${fileName}.css`));
      }
    };
  };

  /**
   * 构建dist css
   * @param entry 入口文件
   * @param fileName css文件名称
   * @returns {Promise<void>}
   */
  let buildDistCss = async function (entry, fileName) {
    await build(defineConfig({
      configFile: false,
      publicDir: false,
      plugins: [vue(), vueJsx()],
      logLevel: 'warn',
      build: {
        target: 'es2015',
        rollupOptions: {
          plugins: [onGenerateCssEnd(fileName)]
        },
        emptyOutDir: false,
        lib: {
          entry: entry,
          name: fileName,
          fileName: fileName,
          formats: ['es']
        },
        outDir
      },
      css: {
        postcss: {
          plugins: [
            require('autoprefixer')({
              overrideBrowserslist: [
                'Android 4.1',
                'iOS 7.1',
                'ie >= 10',
                '> 0.3%'
              ],
              grid: true
            })
          ]
        }
      }
    }));
  };

  await buildDistCss(path.resolve(__dirname, '../src/components/dist-style.ts'), 'bts-vue');
  await buildDistCss(path.resolve(__dirname, '../src/styles/bootstrap-other.scss'), 'bootstrap-other');
}

// buildDistLib();

;(async function (){
  let args = process.argv.slice(2);
  let formatParamNameIndex = args.findIndex(paramName => paramName === '--format');
  let format = '';
  if (formatParamNameIndex > -1) {
    format = args[formatParamNameIndex + 1];
  }
  if (format) {
    console.log(`【构建 ${format} 格式组件】`);
    if (format != 'iife' && format != 'umd') {
      await buildLib(format);
    } else {
      await buildDistLib(format);
    }
  } else {
    console.log('【构建所有格式组件】');
    await buildLib('es');
    await buildLib('cjs');
    await buildDistLib();
  }
})();

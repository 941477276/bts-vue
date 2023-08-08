import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { exampleTransform } from './plugin/exampleTransform';
import { apiDocTransform } from './plugin/apiDocTransform';
import { siteDocTransform } from './plugin/siteDocTransform';

// https://vitejs.dev/config/
const imgSuffixs = ['.jpg', '.jpeg', '.gif', '.png', '.webp', '.bmp'];
const isDev = process.env.NODE_ENV == 'development';
export default defineConfig({
  base: './',
  server: {
    host: '0.0.0.0',
    port: 9527,
    open: true
  },
  plugins: [
    apiDocTransform(),
    exampleTransform(),
    siteDocTransform(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    vue({
      // 将 .vue、.md 结尾的文件都使用vue插件进行解析
      include: [/\.vue$/, /\.md$/]
    })
  ],
  build: {
    rollupOptions: {
      output: {
        format: 'esm',
        entryFileNames: 'static/js/[name]-[hash].js',
        chunkFileNames: 'static/js/[name]-[hash].js',
        assetFileNames (assetInfo) {
          // console.log('assetInfo', assetInfo);
          let assetDir = '[ext]';
          let isImg = imgSuffixs.some(suffix => {
            return assetInfo.name?.endsWith(suffix);
          });
          if (isImg) {
            assetDir = 'img';
          }
          return `static/${assetDir}/[name]-[hash].[ext]`;
        }
      }
    }
  },
  esbuild: {
    drop: isDev ? [] : ['console', 'debugger'] // 移除代码中的console
  }
});

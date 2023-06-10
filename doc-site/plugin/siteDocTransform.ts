// @ts-ignore
import MarkdownIt from 'markdown-it';
// @ts-ignore
import path from 'path';
import { isString } from '../../src/utils/bs-util';
// @ts-ignore;
import prism from 'prismjs';
import 'prismjs/components/prism-bash';

function kebabCase2CamelCase (kebabStr: string): string {
  if (!isString(kebabStr)) {
    return kebabStr;
  }
  return kebabStr.replace(/-(.)/g, function (matched, $1) {
    return $1.toUpperCase();
  });
};
export function siteDocTransform () {
  let mt = new MarkdownIt({
    highlight (str: string, lang: string) {
      console.log('str', str);
      // console.log('lang', lang);
      if (lang) {
        try {
          let html = prism.highlight(str, prism.languages[lang], lang);
          if (html) {
            return `<pre class="language-${lang}"><code>${html}</code></pre>`;
          }
        } catch (e: any) {
          console.error(`[siteDocTransform.js] Prism.highlight parse "${lang}" error: ${e.message}`);
        }
      }
      return '';
    }
  });
  console.log('siteDocTransform插件启动了');
  return {
    name: 'exampleTransform',
    transform (code: string, id: string) {
      // 判断条件中必须加上以.vue结尾的条件，因为vue文件中的style也会进到这个插件中
      if (id.includes('/siteDocs/') && id.endsWith('.md')) {
        let content = mt.render(code);
        content = content.replace(/<table>/g, '<div class="table-responsive"><table class="article-table table table-hover">');
        content = content.replace(/<\/table>/g, '</table></div>');
        content = content.replace(/<thead>/g, '<thead class="thead-light">');

        let fileName = path.parse(id).name; // 取到的文件名是不带后缀名的
        fileName = fileName.split('.')[0];
        let componentName = kebabCase2CamelCase(fileName);
        componentName = componentName.charAt(0).toUpperCase() + componentName.substring(1);

        // 新代码
        let newCode = `
          <template>
            <bts-vue-doc>
              <article class="bts-vue-doc-article ${fileName}-article">
                ${content}
              </article>
            </bts-vue-doc>
          </template>
          <script>
            export default {
              name: "Doc${componentName}"
            };
          </script>
        `;
        return { code: newCode.trim() };
      }
    }
  };
};

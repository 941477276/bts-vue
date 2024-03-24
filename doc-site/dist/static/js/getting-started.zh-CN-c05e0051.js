import{_ as a,r as o,c as e,w as p,o as c,a as n,b as s}from"./index-897cf5f9.js";const l={name:"DocGettingStarted"},u=n("article",{class:"bts-vue-doc-article getting-started-article"},[n("h1",null,"快速上手"),n("p",null,"本节将介绍如何在项目中使用 Bootstrap Vue。"),n("h2",null,"引入 Bootstrap Vue"),n("h3",null,"安装"),n("ol",null,[n("li",null,[s("使用"),n("code",null,"npm"),s("安装")])]),n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(" bts-vue "),n("span",{class:"token parameter variable"},"-S"),s(`
`)])]),n("h2",null,"注册"),n("p",null,"如果使用 Vue 默认的模板语法，需要注册组件后方可使用，有如下三种方式注册组件："),n("h3",null,"全局完整注册"),n("pre",{class:"language-js"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" createApp "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" App "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./App'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// 导入bts-vue"),s(`
`),n("span",{class:"token keyword"},"import"),s(" BtsVue "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'bts-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// 导入bts-vue组件样式"),s(`
`),n("span",{class:"token comment"},"// import 'bts-vue/es/components/index.js'; // 导入的是.scss文件"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},"'bts-vue/es/components/css.js'"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 导入的是.css文件"),s(`
`),n("span",{class:"token comment"},"// 导入除bootstrap组件样式外的其他样式（如果您需要的话），如栅格系统、导航栏、卡片、布局等"),s(`
`),n("span",{class:"token comment"},"// import 'bts-vue/es/styles/bootstrap-other.scss';"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},"'bts-vue/es/styles/bootstrap-other.css'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" app "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"createApp"),n("span",{class:"token punctuation"},"("),s("App"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("BtsVue"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"mount"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'#app'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("h3",null,"全局部分注册"),n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" createApp "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" BsButton"),n("span",{class:"token punctuation"},","),s(" BsInput"),n("span",{class:"token punctuation"},","),s(" BsDropdown"),n("span",{class:"token punctuation"},","),s(" BsMessage "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'bts-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},`/** 导入组件样式方式1：手动按需导入
 * // 如果您未使用按需导入插件，那么您需要手动导入组件的样式
 * import 'bts-vue/es/components/bs-button/style/index.js'; // 组件style目录下的index.js文件为导入的是.scss文件
 * // import 'bts-vue/es/components/bs-button/style/css.js'; // 组件style目录下的index.js文件为导入的是.css文件
 */`),s(`

`),n("span",{class:"token comment"},`/** 导入组件样式方式2：一次性导入所有组件样式
 * import 'bts-vue/es/compoents/style.js'; // 导入的是.scss文件
 * // import 'bts-vue/es/compoents/css.js'; // 导入的是.css文件
 */`),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},"'bts-vue/es/compoents/style.js'"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 导入的是.scss文件"),s(`
`),n("span",{class:"token comment"},"// import 'bts-vue/es/compoents/css.js'; // 导入的是.css文件"),s(`

`),n("span",{class:"token keyword"},"import"),s(" App "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./App'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" app "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"createApp"),n("span",{class:"token punctuation"},"("),s("App"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("BsButton"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("BsInput"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"/* 会自动注册 Dropdown 下的子组件, 例如 BsDropdownItem */"),s(`
app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("BsDropdown"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  
app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"mount"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'#app'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

app`),n("span",{class:"token punctuation"},"."),s("config"),n("span",{class:"token punctuation"},"."),s("globalProperties"),n("span",{class:"token punctuation"},"."),s("$message "),n("span",{class:"token operator"},"="),s(" BsMessage"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("h3",null,"组件级局部注册"),n("p",null,"此种方式需要分别注册组件子组件，如 BsDropdown、BsDropdownItem，并且注册后仅在当前组件中有效。所以我们推荐使用上述两种方式。"),n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("bs-button")]),n("span",{class:"token punctuation"},">")]),s("Add"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("bs-button")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
  `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" BsButton"),n("span",{class:"token punctuation"},","),s(" BsDropdown"),n("span",{class:"token punctuation"},","),s(" BsDropdownItem "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'bts-vue'"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},"'bts-vue/es/compoents/bs-button/style'"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 导入的是.scss文件"),s(`
  `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},"'bts-vue/es/compoents/bs-dropdown/style'"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 导入的是.scss文件"),s(`

  `),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      BsButton`),n("span",{class:"token punctuation"},","),s(`
      BsDropdown`),n("span",{class:"token punctuation"},","),s(`
      BsDropdownItem
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("h2",null,"浏览器引入"),n("p",null,[s("在浏览器中使用"),n("code",null,"script"),s("和"),n("code",null,"link"),s("标签直接引入文件，并使用全局变量"),n("code",null,"BtsVue")]),n("p",null,[s("在 npm 发布包内的 "),n("code",null,"bd-vue/dist"),s(" 目录下有 "),n("code",null,"bts-vue.js"),s("、"),n("code",null,"bts-vue.css"),s("、"),n("code",null,"bootstrap-other.css"),s("文件，你可以手动的引入它们")]),n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("link")]),s(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("stylesheet"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("bts-vue.css"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token comment"},"<!--导入除bootstrap组件样式外的其他样式（如果您需要的话），如栅格系统、导航栏、卡片、布局等-->"),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("link")]),s(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("stylesheet"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("bootstrap-other.css"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("bts-vue.js"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"}),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("h2",null,"按需加载"),n("h3",null,"手动按需导入"),n("p",null,"如果您未使用任何按需加载插件，您可以通过手动导入的方式来按需加载组件："),n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" BsButton "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'bts-vue/es/components/bs-button'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},"'bts-vue/es/components/bs-button/style'"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 导入的是.scss文件"),s(`
`),n("span",{class:"token comment"},"// 或 import 'bts-vue/es/components/bs-button/style/css'; 导入的是.css文件"),s(`

`),n("span",{class:"token keyword"},"import"),s(" BsForm "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'bts-vue/es/components/bs-form'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" BsFormItem "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'bts-vue/es/components/bs-form/widgets/BsofromItem'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},"'bts-vue/es/components/bs-form/style'"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 导入的是.scss文件"),s(`
`),n("span",{class:"token comment"},"// 或 import 'bts-vue/es/components/bs-form/style/css'; 导入的是.css文件"),s(`
`)])]),n("h3",null,"vite按需导入"),n("p",null,[s("如果你使用的 Vite，你可以使用 "),n("a",{href:"https://github.com/antfu/unplugin-vue-components"},"unplugin-vue-components"),s(" 来进行按需加载")]),n("ol",null,[n("li",null,[s("首先你需要将下面这段"),n("code",null,"unplugin-vue-components-resolver"),s("插件代码复制到你的项目中")])]),n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" type "),n("span",{class:"token punctuation"},"{"),s(" ComponentResolver"),n("span",{class:"token punctuation"},","),s(" SideEffectsInfo "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'unplugin-vue-components'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"BtsVueResolverOptions"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},`/**
   * exclude components that do not require automatic import
   *
   * @default []
   */`),s(`
  exclude`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token comment"},`/**
   * import style along with components
   *
   * @default 'css'
   */`),s(`
  importStyle`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(" boolean "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},"'css'"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token string"},"'scss'"),s(`
  `),n("span",{class:"token comment"},`/**
   * resolve \`vue3-bootstrap-icon' icons
   *
   * requires package \`vue3-bootstrap-icon\`
   *
   * @default false
   */`),s(`
  resolveIcons`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(` boolean

  `),n("span",{class:"token comment"},"/**\n   * @deprecated use `importStyle: 'css'` instead\n   */"),s(`
  importCss`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(` boolean
  `),n("span",{class:"token comment"},"/**\n   * @deprecated use `importStyle: 'scss'` instead\n   */"),s(`
  importScss`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(` boolean

  `),n("span",{class:"token comment"},`/**
   * use commonjs build default false
   */`),s(`
  cjs`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(` boolean

  `),n("span",{class:"token comment"},`/**
   * rename package
   *
   * @default 'bts-vue'
   */`),s(`
  packageName`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),s(` string
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"ChildComponentDirInfo"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"componentDir"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"componentNames"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// 子组件目录配置列表"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token literal-property property"},"childComponentDirs"),n("span",{class:"token operator"},":"),s(" ChildComponentDirInfo"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"componentDir"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'bs-breadcrumb'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"componentNames"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'BsBreadcrumbItem'"),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"componentDir"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'bs-collapse'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"componentNames"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'BsCollapseItem'"),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"componentDir"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'bs-form'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"componentNames"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'BsFormItem'"),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"componentDir"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'bs-menu'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"componentNames"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'BsMenuItem'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'BsMenuItemGroup'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'BsSubMenu'"),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"componentDir"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'bs-table'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"componentNames"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"componentDir"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'bs-tabs'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"componentNames"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'BsTabPane'"),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"componentDir"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'bs-select'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"componentNames"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'BsOption'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'BsOptionGroup'"),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},`/**
 * 获取子组件目录
 * @param componentName
 */`),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"getChildComponentDir"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"componentName"),n("span",{class:"token operator"},":"),s(" string")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(" childComponentDirs"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"find"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"dirInfo"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" dirInfo"),n("span",{class:"token punctuation"},"."),s("componentNames"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"includes"),n("span",{class:"token punctuation"},"("),s("componentName"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"kebabCase"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"camelStr"),n("span",{class:"token operator"},":"),s(" string")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(" string "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(" camelStr"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"(\\w)?([A-Z])"),n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-flags"},"g")]),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("matched"),n("span",{class:"token punctuation"},","),s(" $1"),n("span",{class:"token punctuation"},","),s(" $2")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s("$1 "),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token punctuation"},"("),s("$1 "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token string"},"'-'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(" $2"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLowerCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"getSideEffects"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"compName"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"options"),n("span",{class:"token operator"},":"),s(" BtsVueResolverOptions")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(" SideEffectsInfo "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(`
    importStyle `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    importScss `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" options"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("importStyle"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token comment"},"// 不导入图标的样式"),s(`
  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("options"),n("span",{class:"token punctuation"},"."),s("resolveIcons "),n("span",{class:"token operator"},"&&"),s(" compName"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"startsWith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Bsi'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"const"),s(" lib "),n("span",{class:"token operator"},"="),s(" options"),n("span",{class:"token punctuation"},"."),s("cjs "),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token string"},"'lib'"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'es'"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" packageName "),n("span",{class:"token operator"},"="),s(" options"),n("span",{class:"token operator"},"?."),s("packageName "),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token string"},"'bts-vue'"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"let"),s(" childComponentDir "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"getChildComponentDir"),n("span",{class:"token punctuation"},"("),s("compName"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" styleDir "),n("span",{class:"token operator"},"="),s(" childComponentDir "),n("span",{class:"token operator"},"?"),s(" childComponentDir"),n("span",{class:"token punctuation"},"."),s("componentDir "),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"kebabCase"),n("span",{class:"token punctuation"},"("),s("compName"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("importStyle "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'scss'"),s(),n("span",{class:"token operator"},"||"),s(" importScss"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("packageName"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"/"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("lib"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"/components/"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("styleDir"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"/style"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("packageName"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"/"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("lib"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"/components/"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("styleDir"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"/style/css"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},`/**
 * Resolver for BtsVue
 */`),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"BtsVueResolver"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"options"),n("span",{class:"token operator"},":"),s(" BtsVueResolverOptions "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(" ComponentResolver "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'component'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function-variable function"},"resolve"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(" string")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" cjs "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(" packageName "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'bts-vue'"),s(),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" options"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("options"),n("span",{class:"token punctuation"},"."),s("resolveIcons "),n("span",{class:"token operator"},"&&"),s(" name"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"startsWith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Bsi'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" iconPath "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"vue3-bootstrap-icon/"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("cjs "),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token string"},"'cjs'"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'es'"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"/icons/"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
          name`),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"from"),n("span",{class:"token operator"},":"),s(` iconPath
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`

      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("name"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"startsWith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Bs'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token operator"},"!"),s("name"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"startsWith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Bsi'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token operator"},"!"),s("options"),n("span",{class:"token operator"},"?."),s("exclude"),n("span",{class:"token operator"},"?."),n("span",{class:"token function"},"includes"),n("span",{class:"token punctuation"},"("),s("name"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" componentDir "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"kebabCase"),n("span",{class:"token punctuation"},"("),s("name"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" childComponentDir "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"getChildComponentDir"),n("span",{class:"token punctuation"},"("),s("name"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" path "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("packageName"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"/"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("cjs "),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token string"},"'lib'"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'es'"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"/components"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("childComponentDir"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
          path `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"/"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("childComponentDir"),n("span",{class:"token punctuation"},"."),s("componentDir"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"/widgets/"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
          path `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"/"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("componentDir"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'default'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 这里的name为组件文件导出的变量名称"),s(`
          `),n("span",{class:"token literal-property property"},"from"),n("span",{class:"token operator"},":"),s(" path"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"sideEffects"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"getSideEffects"),n("span",{class:"token punctuation"},"("),s("name"),n("span",{class:"token punctuation"},","),s(" options"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("ol",{start:"2"},[n("li",null,[s("在你项目中的"),n("code",null,"vite.config.js"),s("中使用该插件")])]),n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vite'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" vue "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@vitejs/plugin-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" Components "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'unplugin-vue-components/vite'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" BtsVueResolver "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./unplugin-vue-components-resolver'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"base"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'./'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"vue"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token comment"},"// 按需加载"),s(`
    `),n("span",{class:"token function"},"Components"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"dts"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"resolvers"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token function"},"BtsVueResolver"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token comment"},"// exclude: ['BsButton'], // 需要排除自动导入的组件"),s(`
          `),n("span",{class:"token literal-property property"},"importStyle"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'scss'"),s(),n("span",{class:"token comment"},"// 导入组件的哪种样式文件，可选值：boolean、scss、css。默认导入css样式文件"),s(`
          `),n("span",{class:"token comment"},"// importCss: boolean, // 是否导入组件的css文件"),s(`
          `),n("span",{class:"token comment"},"// importScss: boolean, // 是否导入组件的scss文件"),s(`
          `),n("span",{class:"token comment"},"// resolveIcons: boolean, // 是否自动按需导入`vue3-bootstrap-icon`图标中的图标"),s(`
          `),n("span",{class:"token comment"},"// cjs: boolean, // 是否导入commonjs格式的js文件"),s(`
          `),n("span",{class:"token comment"},"// packageName: string, // 组件库名称，默认为：bts-vue"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("ol",{start:"3"},[n("li",null,"此插件无法处理非组件模块，如BsMessage、BsToast、BsMessageBox，这种组件需要手动加载：")]),n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" BsMessage"),n("span",{class:"token punctuation"},","),s(" BsToast"),n("span",{class:"token punctuation"},","),s(" BsMessageBox "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'bts-vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},"'bts-vue/es/components/bs-message/style'"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 或 import 'bts-vue/es/components/bs-message/style/css';"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},"'bts-vue/es/components/bs-message-box/style'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},"'bts-vue/es/components/bs-toast/style'"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1);function k(r,i,m,g,d,y){const t=o("BtsVueDoc");return c(),e(t,null,{default:p(()=>[u]),_:1})}const f=a(l,[["render",k]]);export{f as default};

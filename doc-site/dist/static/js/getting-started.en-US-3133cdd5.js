import{_ as a,r as o,c as e,w as p,o as c,a as n,b as s}from"./index-c2c69b7b.js";const l={name:"DocGettingStarted"},u=n("article",{class:"bts-vue-doc-article getting-started-article"},[n("h1",null,"Get started quickly"),n("p",null,"This section describes how to use Bootstrap Vue in your project."),n("h2",null,"Import Bootstrap Vue"),n("h3",null,"Install"),n("ol",null,[n("li",null,[s("Install using "),n("code",null,"npm")])]),n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(" bts-vue "),n("span",{class:"token parameter variable"},"-S"),s(`
`)])]),n("h2",null,"register"),n("p",null,"If you use Vue's default template syntax, you need to register components before using them. There are three ways to register components:"),n("h3",null,"Global full registration"),n("pre",{class:"language-js"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" createApp "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" App "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./App'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// import bts-vue"),s(`
`),n("span",{class:"token keyword"},"import"),s(" BtsVue "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'bts-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// import bts-vue component style"),s(`
`),n("span",{class:"token comment"},"// import 'bts-vue/es/components/index.js'; // import is .scss file"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},"'bts-vue/es/components/css.js'"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// import is .css file"),s(`
`),n("span",{class:"token comment"},"// Import other styles (if you need) other than bootstrap component styles, such as grid system, navbar, cards, layout, etc."),s(`
`),n("span",{class:"token comment"},"// import 'bts-vue/es/styles/bootstrap-other.scss';"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},"'bts-vue/es/styles/bootstrap-other.css'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" app "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"createApp"),n("span",{class:"token punctuation"},"("),s("App"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("BtsVue"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"mount"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'#app'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("h3",null,"Global Part Registration"),n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" createApp "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" BsButton"),n("span",{class:"token punctuation"},","),s(" BsInput"),n("span",{class:"token punctuation"},","),s(" BsDropdown"),n("span",{class:"token punctuation"},","),s(" BsMessage "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'bts-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},`/** Import component style method 1: Manually import on demand
  * // If you are not using the on-demand import plugin, then you need to manually import the styles of the component
  * import 'bts-vue/es/components/bs-button/style/index.js'; // The index.js file in the component style directory imports the .scss file
  * // import 'bts-vue/es/components/bs-button/style/css.js'; // The index.js file in the component style directory imports the .css file
  */`),s(`

`),n("span",{class:"token comment"},`/** Import component style method 2: import all component styles at once
  * import 'bts-vue/es/components/style.js'; // import is .scss file
  * // import 'bts-vue/es/components/css.js'; // import is .css file
  */`),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},"'bts-vue/es/components/style.js'"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// import is .scss file"),s(`
`),n("span",{class:"token comment"},"// import 'bts-vue/es/components/css.js'; // imports the .css file"),s(`

`),n("span",{class:"token keyword"},"import"),s(" App "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./App'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" app "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"createApp"),n("span",{class:"token punctuation"},"("),s("App"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
app`),n("span",{class:"token punctuation"},"."),s(),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("BsButton"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("BsInput"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"/* Subcomponents under Dropdown will be automatically registered, such as BsDropdownItem */"),s(`
app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("BsDropdown"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  
app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"mount"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'#app'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

app`),n("span",{class:"token punctuation"},"."),s("config"),n("span",{class:"token punctuation"},"."),s("globalProperties"),n("span",{class:"token punctuation"},"."),s("$message "),n("span",{class:"token operator"},"="),s(" BsMessage"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("h3",null,"Component-level local registration"),n("p",null,"This method needs to register component subcomponents separately, such as BsDropdown, BsDropdownItem, and the registration is only valid in the current component. So we recommend using the above two methods."),n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
   `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("bs-button")]),n("span",{class:"token punctuation"},">")]),s("Add"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("bs-button")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
   `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" BsButton"),n("span",{class:"token punctuation"},","),s(" BsDropdown"),n("span",{class:"token punctuation"},","),s(" BsDropdownItem "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'bts-vue'"),n("span",{class:"token punctuation"},";"),s(`
   `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},"'bts-vue/es/components/bs-button/style'"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// import is .scss file"),s(`
   `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},"'bts-vue/es/components/bs-dropdown/style'"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// import is .scss file"),s(`

   `),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
     `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
       BsButton`),n("span",{class:"token punctuation"},","),s(`
       Bs Dropdown`),n("span",{class:"token punctuation"},","),s(`
       BsDropdownItem
     `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
   `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("h2",null,"Browser introduction"),n("p",null,[s("Use the "),n("code",null,"script"),s(" and "),n("code",null,"link"),s(" tags in the browser to directly import the file, and use the global variable "),n("code",null,"BtsVue")]),n("p",null,[s("There are "),n("code",null,"bts-vue.js"),s(", "),n("code",null,"bts-vue.css"),s(", "),n("code",null,"bootstrap-other.css"),s(" files in the "),n("code",null,"bd-vue/dist"),s(" directory in the npm release package, you can import them manually")]),n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("link")]),s(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("stylesheet"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("bts-vue.css"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token comment"},"<!--Import other styles (if you need) other than bootstrap component styles, such as grid system, navigation bar, card, layout, etc. -->"),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("link")]),s(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("stylesheet"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("bootstrap-other.css"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("bts-vue.js"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"}),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("h2",null,"Load on demand"),n("h3",null,"Manual import on demand"),n("p",null,"If you are not using any on-demand plugins, you can manually import components on-demand:"),n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" BsButton "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'bts-vue/es/components/bs-button'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},"'bts-vue/es/components/bs-button/style'"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// import is .scss file"),s(`
`),n("span",{class:"token comment"},"// or import 'bts-vue/es/components/bs-button/style/css'; the imported .css file"),s(`

`),n("span",{class:"token keyword"},"import"),s(" BsForm "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'bts-vue/es/components/bs-form'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" BsFormItem "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'bts-vue/es/components/bs-form/widgets/BsofromItem'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},"'bts-vue/es/components/bs-form/style'"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// import is .scss file"),s(`
`),n("span",{class:"token comment"},"// or import 'bts-vue/es/components/bs-form/style/css'; the imported .css file"),s(`
`)])]),n("h3",null,"vite import on demand"),n("p",null,[s("If you use Vite, you can use "),n("a",{href:"https://github.com/antfu/unplugin-vue-components"},"unplugin-vue-components"),s(" for on-demand loading")]),n("ol",null,[n("li",null,[s("First you need to copy the following "),n("code",null,"unplugin-vue-components-resolver"),s(" plugin code into your project")])]),n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" type "),n("span",{class:"token punctuation"},"{"),s(" ComponentResolver"),n("span",{class:"token punctuation"},","),s(" SideEffectsInfo "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'unplugin-vue-components'"),n("span",{class:"token punctuation"},";"),s(`

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
`)])]),n("ol",{start:"2"},[n("li",null,[s("Use the plugin in "),n("code",null,"vite.config.js"),s(" in your project")])]),n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vite'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" vue "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@vitejs/plugin-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" Components "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'unplugin-vue-components/vite'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" BtsVueResolver "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./unplugin-vue-components-resolver'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
   `),n("span",{class:"token literal-property property"},"base"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'./'"),n("span",{class:"token punctuation"},","),s(`
   `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
     `),n("span",{class:"token function"},"vue"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
     `),n("span",{class:"token comment"},"// load on demand"),s(`
     `),n("span",{class:"token function"},"Components"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
       `),n("span",{class:"token literal-property property"},"dts"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
       `),n("span",{class:"token literal-property property"},"resolvers"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
         `),n("span",{class:"token function"},"BtsVueResolver"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
           `),n("span",{class:"token comment"},"// exclude: ['BsButton'], // need to exclude auto-imported components"),s(`
           `),n("span",{class:"token literal-property property"},"importStyle"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'scss'"),s(),n("span",{class:"token comment"},"// Which style file to import the component, optional values: boolean, scss, css. Import css style files by default"),s(`
           `),n("span",{class:"token comment"},"// importCss: boolean, // Whether to import the css file of the component"),s(`
           `),n("span",{class:"token comment"},"// importScss: boolean, // Whether to import the scss file of the component"),s(`
           `),n("span",{class:"token comment"},"// resolveIcons: boolean, // Whether to automatically import the icons in the `vue3-bootstrap-icon` icon on demand"),s(`
           `),n("span",{class:"token comment"},"// cjs: boolean, // Whether to import js files in commonjs format"),s(`
           `),n("span",{class:"token comment"},"// packageName: string, // component library name, the default is: bts-vue"),s(`
         `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
       `),n("span",{class:"token punctuation"},"]"),s(`
     `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
   `),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("ol",{start:"3"},[n("li",null,"This plugin cannot handle non-component modules, such as BsMessage, BsToast, BsMessageBox, such components need to be loaded manually:")]),n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" BsMessage"),n("span",{class:"token punctuation"},","),s(" BsToast"),n("span",{class:"token punctuation"},","),s(" BsMessageBox "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'bts-vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},"'bts-vue/es/components/bs-message/style'"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// or import 'bts-vue/es/components/bs-message/style/css';"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},"'bts-vue/es/components/bs-message-box/style'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},"'bts-vue/es/components/bs-toast/style'"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1);function i(r,k,m,d,y,g){const t=o("BtsVueDoc");return c(),e(t,null,{default:p(()=>[u]),_:1})}const b=a(l,[["render",i]]);export{b as default};

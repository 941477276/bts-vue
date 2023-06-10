module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-extra-semi': "off",
    'no-unused-vars': 'off',
    'prefer-const': 'off',
    'no-trailing-spaces': 'off',
    'eqeqeq': 'off',
    'no-case-declarations': 'off',
    'no-unused-expressions': 'off',
    'no-useless-escape': 'off',
    'no-unneeded-ternary': 'off',
    'quote-props': 'off',
    'no-useless-return': 'off',
    'semi': ["error", "always"],
    'prefer-promise-reject-errors': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'vue/no-setup-props-destructure': 'off',
    'no-var': 'off',
    'no-template-curly-in-string': 'off', // 关闭不允许在普通字符串中使用字符串模板
    'eol-last': 'off' // 文件最后一行是否需添加一行空行
  }
}

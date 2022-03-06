module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'semi': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  // 一些比较出名的组织，制定的规则，拿来即用
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ]
}

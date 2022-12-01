module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'max-len': ['warn', { 'code': 80, 'ignoreUrls': true }],

    'comma-dangle': ['error',
      { arrays: 'always-multiline', objects: 'always-multiline' },
    ],
  },
}

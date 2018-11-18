module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'template-curly-spacing': ['error', 'always'],
    'vue/max-attributes-per-line': [2, {
      'singleline': 5,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }]
  }
}

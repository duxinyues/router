module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'], // 如果变量字符串不使用单引号就会有红色提醒
    'jsx-quotes': ['error', 'prefer-single'], // 在组件属性或html标签如果不使用单引号就会有红色提醒
    'linebreak-style': ['error', 'windows'], // 解决换行后的提醒
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }], // 使js也能使用jsx代码格式
  },
};

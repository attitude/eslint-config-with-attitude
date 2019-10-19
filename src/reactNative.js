export default {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'react-native',
  ],
  plugins: [
    'react-native',
  ],
  env: {
    es6: true,
    'react-native/react-native': true,
  },
  rules: {
    'import/no-namespace': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-wrap-multilines': 'off',
  },
}

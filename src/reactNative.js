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
    'babel',
    'react-native',
  ],
  env: {
    es6: true,
    'react-native/react-native': true,
  },
  rules: {
    'no-invalid-this': 'off',
		'babel/no-invalid-this': 'error',
    'import/no-namespace': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-wrap-multilines': 'off',
  },
}

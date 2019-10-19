export default {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'plugin:flowtype/recommended',
  ],
  plugins: [
    'flowtype',
  ],
  env: {
    es6: true,
  },
  rules: {
    'flowtype/array-style-complex-type': ['error', 'shorthand'],
    'flowtype/array-style-simple-type': ['error', 'shorthand'],
    'flowtype/arrow-parens': ['error', 'as-needed'],
    'flowtype/boolean-style': ['error', 'boolean'],
    'flowtype/delimiter-dangle': ['error', 'always-multiline'],
    'flowtype/generic-spacing': ['error', 'never'],
    'flowtype/no-dupe-keys': 'error',
    'flowtype/no-flow-fix-me-comments': ['warn', 'TODO:'],
    'flowtype/no-primitive-constructor-types': 'error',
    'flowtype/no-types-missing-file-annotation': 0,
    'flowtype/object-type-delimiter': ['error', 'comma'],
    'flowtype/require-parameter-type': 'warn',
    'flowtype/require-readonly-react-props': 'warn',
    'flowtype/semi': ['error', 'never'],
    'flowtype/sort-keys': 'error',
    'flowtype/type-id-match': ['error', '^([A-Z][a-z0-9]*)+$'],
  },
}

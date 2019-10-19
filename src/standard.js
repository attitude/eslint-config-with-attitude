export default {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'standard',
  ],
  plugins: [
    'standard',
  ],
  env: {
    es6: true,
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-newline': ['error', { consistent: true }],
    'quote-props': ['error', 'as-needed', { numbers: true }],
    'standard/array-bracket-even-spacing': [2, 'either'],
    'standard/computed-property-even-spacing': [2, 'even'],
    'standard/object-curly-even-spacing': [2, 'either'],
  },
}

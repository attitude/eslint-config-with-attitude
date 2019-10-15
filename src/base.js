export default {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'esnext',
    'plugin:import/recommended',
    'plugin:promise/recommended'
  ],
  env: {
    es6: true
  },
  plugins: [
    'import'
  ],
  rules: {
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'computed-property-spacing': ['error', 'never'],
    'function-paren-newline': ['error', 'consistent'],
    'import/no-namespace': 'off',
    'import/prefer-default-export': 'off',
    'no-multi-spaces': 'error',
    'no-spaced-func': 'error',
    'no-trailing-spaces': 'error',
    'object-curly-newline': ['error', { multiline: true }],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    'operator-linebreak': ['error', 'before'],
    'padded-blocks': ['error', 'never'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] }
    ],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'space-before-blocks': 'error',
    'space-in-parens': ['error', 'never'],
    'space-unary-ops': 'error',
  }
}

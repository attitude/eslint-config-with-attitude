export default {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: [
    'react',
    'react-hooks',
  ],
  env: {
    es6: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/no-typos': 'error',
    'react/no-unused-state': 'error',
    'react/no-access-state-in-setstate': 'error',
    'react/no-this-in-sfc': 'error',
    'react/prefer-read-only-props': 'off',
    'react/sort-comp': 'error',
    'react/sort-prop-types': ['error', {
      callbacksLast: true,
      sortShapeProp: true,
    }],

    'react/jsx-child-element-spacing': 'error',
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    'react/jsx-curly-newline': ['error', {
      multiline: 'consistent',
      singleline: 'consistent',
    }],
    'react/jsx-curly-spacing': ['error', {
      when: 'never',
      allowMultiline: true,
      spacing: {
        objectLiterals: 'never',
      },
    }],
    'react/jsx-closing-bracket-location': ['error', {
      nonEmpty: 'line-aligned',
      selfClosing: 'line-aligned',
    }],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-first-prop-new-line': ['error'],
    'react/jsx-indent': ['error', 2],
    'react/jsx-handler-names': ['error', {
      eventHandlerPrefix: '_?_?handle',
      eventHandlerPropPrefix: 'on',
    }],
    'react/jsx-max-props-per-line': ['error', { when: 'multiline' }],
    'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
    'react/jsx-sort-props': ['error', {
      callbacksLast: true,
      shorthandFirst: true,
      reservedFirst: true,
    }],
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never',
    }],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': 'off',

    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
  },
}

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-tabs': 'off',
    'max-len': 0,
    'no-console': 0,
    'quote-props': 0,
    'no-unused-vars': 0,
    'no-trailing-spaces': 0,
    'no-multi-assign': 0,
    'import/no-extraneous-dependencies': 0,
    'no-useless-escape': 0,
    'no-underscore-dangle': 0,
    'prefer-destructuring': 0,
    'no-irregular-whitespace': 0,
    'no-use-before-define': 0,
    'space-infix-ops': [
      'error',
      {
        'int32Hint': false,
      },
    ],
    'no-param-reassign': [
      2,
      {
        'props': false,
      },
    ],
    'no-shadow': 0,
    'no-bitwise': 0,
    'camelcase': 0,
    'no-extra-parens': 0,
  },
};

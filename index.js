const { rules, ...airbnb } = require('eslint-config-airbnb');

module.exports = {
  ...airbnb,
  rules: {
    ...rules,
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'import/no-extraneous-dependencies': [0],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'import/no-unresolved': [2, { 'ignore': ['@', 'umi'] }],
    'react/react-in-jsx-scope': [0],
  },
};

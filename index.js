const { rules, ...airbnb } = require('eslint-config-airbnb');

module.exports = {
  ...airbnb,
  rules: {
    ...rules,
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'import/no-extraneous-dependencies': [0],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'react/react-in-jsx-scope': [0],
  },
};

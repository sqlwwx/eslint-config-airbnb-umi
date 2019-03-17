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
    "react/prefer-stateless-function": [1, { "ignorePureComponents": true }],
    "react/forbid-prop-types": [1],
    "react/destructuring-assignment": [0],
    "react/prop-types": [1, { "skipUndeclared": true }],
    "import/prefer-default-export": [1],
    "max-len": [2, { "code": 150 }],
    "jsx-a11y/anchor-is-valid": ["off"],
    "jsx-a11y/click-events-have-key-events": ["off"],
    "jsx-a11y/no-static-element-interactions": ["off"],
    "jsx-a11y/no-noninteractive-element-interactions": ["off"],
    "class-methods-use-this": [1]
  },
};

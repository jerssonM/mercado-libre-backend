module.exports = {
  parser: 'babel-eslint',
  extends: ['prettier', 'eslint:recommended'],
  globals: {
    request: true,
    app: true,
    rootRequire: true
  },
  env: { node: true, es6: true },
  rules: {
    'comma-dangle': ['error', 'never'],
    eqeqeq: ['error', 'always'],
    'no-plusplus': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'no-use-before-define': ['error', { functions: false }],
    'no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true }
    ],
    'consistent-return': 'off',
    'import/no-dynamic-require': 'off',
    'no-param-reassign': 'off',
    'class-methods-use-this': 'off',
    'no-empty-function': 'off'
  }
};

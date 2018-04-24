module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended', 'universe', 'prettier'],
  globals: {
    fetch: true,
    __DEV__: true
  }
};

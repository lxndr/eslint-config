module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
  },
  extends: [
    './eslint/errors',
    './eslint/strict',
    './import',
  ],
}

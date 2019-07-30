module.exports = {
  env: {
    node: true,
  },
  plugins: [
    'node',
  ],
  rules: {
    /* possible errors */
    'node/no-extraneous-import': 'error',
    'node/no-extraneous-require': 'error',
    'node/no-missing-import': 'error',
    'node/no-missing-require': 'error',
    'node/no-unpublished-bin': 'error',
    'node/no-unpublished-import': 'error',
    'node/no-unpublished-require': 'error',
    'node/no-unsupported-features/es-builtins': 'error',
    'node/no-unsupported-features/es-syntax': 'error',
    'node/no-unsupported-features/node-builtins': 'error',
    'node/process-exit-as-throw': 'error',
    'node/shebang': 'error',

    /* best practices */
    'node/no-deprecated-api': 'error',

    /* stylistic issues */
    'node/exports-style': ['error', 'module.exports', {
      allowBatchAssign: false,
    }],
    'node/file-extension-in-import': 'off', /* use import/extensions */
    'node/prefer-global/buffer': ['error', 'always'],
    'node/prefer-global/console': ['error', 'always'],
    'node/prefer-global/process': ['error', 'always'],
    'node/prefer-global/text-decoder': ['error', 'never'],
    'node/prefer-global/text-encoder': ['error', 'never'],
    'node/prefer-global/url-search-params': ['error', 'never'],
    'node/prefer-global/url': ['error', 'never'],
    'node/prefer-promises/dns': 'off',
    'node/prefer-promises/fs': 'off',
  },
}

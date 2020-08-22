/* eslint-plugin-node@11.1.0 */

module.exports = {
  env: {
    node: true,
  },
  plugins: [
    'node',
  ],
  rules: {

    /* possible errors */
    'node/handle-callback-err': ['error', 'err'],
    'node/no-callback-literal': 'error',
    'node/no-exports-assign': 'error',
    'node/no-extraneous-import': 'error',
    'node/no-extraneous-require': 'error',
    'node/no-missing-import': 'off', // ??
    'node/no-missing-require': 'off', // ??
    'node/no-new-require': 'error',
    'node/no-path-concat': 'error',
    'node/no-process-exit': 'error', // do process.exitCode and shutdown gracefully
    'node/no-unpublished-bin': 'error',
    'node/no-unpublished-import': 'error',
    'node/no-unpublished-require': 'error',
    'node/no-unsupported-features/es-builtins': 'error',
    'node/no-unsupported-features/es-syntax': ['error', {
      ignores: ['modules'],
    }],
    'node/no-unsupported-features/node-builtins': 'error',
    'node/process-exit-as-throw': 'error',
    'node/shebang': 'error',

    /* best practices */
    'node/no-deprecated-api': 'error',

    /* stylistic issues */
    'node/callback-return': 'error',
    'node/exports-style': ['error', 'module.exports', {
      allowBatchAssign: false,
    }],
    'node/file-extension-in-import': 'off', // use import/extensions
    'node/global-require': 'off', // sometimes it is cleaner
    'node/no-mixed-requires': ['error', {
      grouping: false,
      allowCall: false,
    }],
    'node/no-process-env': 'off', // process.env is commonly used
    'node/no-restricted-import': 'error',
    'node/no-restricted-require': 'error',
    'node/no-sync': ['error', {
      allowAtRootLevel: true,
    }],
    'node/prefer-global/buffer': ['error', 'always'],
    'node/prefer-global/console': ['error', 'always'],
    'node/prefer-global/process': ['error', 'always'],
    'node/prefer-global/text-decoder': ['error', 'never'],
    'node/prefer-global/text-encoder': ['error', 'never'],
    'node/prefer-global/url-search-params': ['error', 'never'],
    'node/prefer-global/url': ['error', 'never'],
    'node/prefer-promises/dns': 'error',
    'node/prefer-promises/fs': 'error',

    /* deprecated */
    'node/no-hide-core-modules': 'off',
    'node/no-unsupported-features': 'off',
  },
}

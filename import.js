module.exports = {
  plugins: [
    'import',
  ],
  rules: {
    /* static analysis */
    'import/no-unresolved': ['error', {
      commonjs: true,
      amd: true,
    }],
    'import/named': 'error',
    'import/default': 'error',
    'import/namespace': ['error', {
      allowComputed: true,
    }],
    'import/no-restricted-paths': 'off', // project specific
    'import/no-absolute-path': ['error', {
      esmodule: true,
      commonjs: true,
      amd: false,
    }],
    'import/no-dynamic-require': 'error',
    'import/no-internal-modules': ['error', {
      allow: [],
    }],
    'import/no-webpack-loader-syntax': 'error',
    'import/no-self-import': 'error',
    'import/no-cycle': 'error',
    'import/no-useless-path-segments': ['error', {
      noUselessIndex: true,
    }],
    'import/no-relative-parent-imports': 'off', // too tough
    'import/no-unused-modules': ['error', {
      missingExports: true,
      unusedExports: true,
    }],

    /* helpful warnings */
    'import/export': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-deprecated': 'error',
    'import/no-extraneous-dependencies': ['error', {
      'devDependencies': true,
      'optionalDependencies': true,
      'peerDependencies': true,
    }],
    'import/no-mutable-exports': 'error',

    /* module systems */
    'import/unambiguous': 'error',
    'import/no-commonjs': ['error', {
      allowRequire: false,
      allowPrimitiveModules: false,
    }],
    'import/no-amd': 'error',
    'import/no-nodejs-modules': 'error', // project specific

    /* style guide */
    'import/first': 'error',
    'import/exports-last': 'error',
    'import/no-duplicates': 'error',
    'import/no-namespace': 'error',
    'import/extensions': ['error', 'always', {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
    'import/order': ['error', {
      'groups': ['builtin', 'external', 'parent', 'sibling', 'index'],
      'newlines-between': 'ignore',
    }],
    'import/newline-after-import': ['error', {
      count: 1,
    }],
    'import/prefer-default-export': 'off',
    'import/max-dependencies': 'off',
    'import/no-unassigned-import': 'error',
    'import/no-named-default': 'error',
    'import/no-default-export': 'error',
    'import/no-named-export': 'off',
    'import/no-anonymous-default-export': ['error', {
      allowArray: true,
      allowArrowFunction: false,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowCallExpression: true,
      allowLiteral: true,
      allowObject: true,
    }],
    'import/group-exports': 'off',
    'import/dynamic-import-chunkname': 'error',
  },
}

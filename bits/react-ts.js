module.exports = {
  rules: {
    'react/prop-types': 'off',
    'react/jsx-filename-extension': ['error', {
      extensions: ['.tsx'],
    }],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE'],
      },
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'require',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'variable',
        types: ['function'],
        format: ['camelCase', 'PascalCase'],
      },
    ],
  },
}

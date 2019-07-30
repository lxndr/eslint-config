module.exports = {
  extends: [
    './bits/react',
    './bits/fp',
  ],
  rules: {
    'fp/no-unused-expression': 'off',
    'fp/no-mutation': ['error', {
      exceptions: [
        { property: 'propTypes' },
        { property: 'defaultProps' },
        { property: 'contextTypes' },
      ],
    }],
  },
}

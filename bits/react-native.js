module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: ['react-native'],

  rules: {
    'react-native/no-unused-styles': 'error',
    'react-native/no-inline-styles': 'error',
    'react-native/no-color-literals': 'error',
    'react-native/sort-styles': 'off',
    'react-native/split-platform-components': 'error',
    'react-native/no-raw-text': 'error',
  },
}

module.exports = {
  plugins: [
    'react',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/boolean-prop-naming': 'off',
    'react/button-has-type': ['error', {
      button: true,
      submit: true,
      reset: true,
    }],
    'react/default-props-match-prop-types': ['error', {
      allowRequiredDefaults: false,
    }],
    'react/destructuring-assignment': ['error', 'always', {
      ignoreClassFields: false,
    }],
    'react/display-name': ['error', {
      ignoreTranspilerName: false,
    }],
    'react/forbid-component-props': 'off',
    'react/forbid-dom-props': 'off',
    'react/forbid-elements': 'off',
    'react/forbid-prop-types': ['error', {
      forbid: ['any', 'array', 'object'],
      checkContextTypes: true,
      checkChildContextTypes: true,
    }],
    'react/forbid-foreign-prop-types': ['error', {
      allowInPropTypes: true,
    }],
    'react/no-access-state-in-setstate': 'off', // for classes
    'react/no-array-index-key': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': 'off', // for classes
    'react/no-did-update-set-state': 'off', // for classes
    'react/no-direct-mutation-state': 'off', // for classes
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'off', // for classes
    'react/no-multi-comp': ['error', {
      ignoreStateless: true,
    }],
    'react/no-redundant-should-component-update': 'off', // for classes
    'react/no-render-return-value': 'error',
    'react/no-set-state': 'off', // for classes
    'react/no-typos': 'error',
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unsafe': ['error', {
      checkAliases: true,
    }],
    'react/no-unused-prop-types': 'error',
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': 'off', // for classes
    'react/prefer-es6-class': 'off', // for classes
    'react/prefer-read-only-props': 'error',
    'react/prefer-stateless-function': ['error', {
      ignorePureComponents: false,
    }],
    'react/prop-types': ['error', {
      ignore: [],
      customValidators: [],
      skipUndeclared: false,
    }],
    'react/react-in-jsx-scope': 'off', // react@17
    'react/require-default-props': ['error', {
      forbidDefaultForRequired: true,
    }],
    'react/require-optimization': 'off', // for classes
    'react/require-render-return': 'off', // for classes
    'react/self-closing-comp': ['error', {
      component: true,
      html: true,
    }],
    'react/sort-comp': 'off', // for classes
    'react/sort-prop-types': 'off',
    'react/state-in-constructor': 'off', // for classes
    'react/static-property-placement': 'off', // for classes
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',

    /* jsx */
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-child-element-spacing': ['error', {
    }],
    'react/jsx-closing-bracket-location': ['error', {
      nonEmpty: 'tag-aligned',
      selfClosing: 'tag-aligned',
    }],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-newline': ['error', {
      multiline: 'forbid',
      singleline: 'forbid',
    }],
    'react/jsx-curly-spacing': ['error', 'never'],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-filename-extension': ['error', {
      extensions: ['.jsx'],
    }],
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-handler-names': ['error', {
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on',
    }],
    'react/jsx-indent': ['error', 2, {
      checkAttributes: true,
      indentLogicalExpressions: true,
    }],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-key': 'error',
    'react/jsx-max-depth': ['error', {
      max: 5,
    }],
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-no-bind': ['error', {
      ignoreDOMComponents: true,
      ignoreRefs: false,
      allowArrowFunctions: true,
      allowFunctions: false,
      allowBind: false,
    }],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': ['error', {
      ignoreCase: false,
    }],
    'react/jsx-no-literals': ['error', {
      noStrings: false,
      allowedStrings: [],
      ignoreProps: true,
    }],
    'react/jsx-no-target-blank': ['error', {
      enforceDynamicLinks: 'always',
    }],
    'react/jsx-no-undef': ['error', {
      allowGlobals: true,
    }],
    'react/jsx-one-expression-per-line': ['error', {
      allow: 'single-child',
    }],
    'react/jsx-curly-brace-presence': ['error', {
      props: 'never',
      children: 'never',
    }],
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-pascal-case': 'error',
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-default-props': ['error', {
      ignoreCase: false,
    }],
    'react/jsx-sort-props': ['error', {
      callbacksLast: true,
      shorthandFirst: true,
      ignoreCase: false,
      noSortAlphabetically: true,
      reservedFirst: true,
    }],
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never',
    }],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': ['error', {
      declaration: 'ignore',
      assignment: 'ignore',
      return: 'parens-new-line',
      arrow: 'ignore',
      condition: 'ignore',
      logical: 'ignore',
      prop: 'ignore',
    }],
  },
}

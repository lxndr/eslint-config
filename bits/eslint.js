module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  rules: {
    /* errors */
    'for-direction': 'error',
    'getter-return': ['error', {
      allowImplicit: false,
    }],
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'off',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': ['error', 'always'],
    'no-console': ['error', {
    }],
    'no-constant-condition': ['error', {
      checkLoops: false,
    }],
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': ['error', {
      allowEmptyCatch: true,
    }],
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': ['error', 'all'],
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': ['error', 'functions'],
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': ['error', {
      skipStrings: false,
      skipComments: false,
      skipRegExps: false,
      skipTemplates: false,
    }],
    'no-loss-of-precision': 'error',
    'no-misleading-character-class': 'error',
    'no-obj-calls': 'error',
    'no-prototype-builtins': 'error',
    'no-regex-spaces': 'error',
    'no-setter-return': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'off',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-useless-backreference': 'error',
    'require-atomic-updates': 'off', // i don't get it...
    'use-isnan': 'error',
    'valid-typeof': 'error',

    /* best practices */
    'accessor-pairs': ['error', {
      setWithoutGet: true,
      getWithoutSet: false,
    }],
    'array-callback-return': ['error', {
      allowImplicit: false,
    }],
    'block-scoped-var': 'error',
    'class-methods-use-this': 'error',
    'complexity': 'off', // makes to write unnecessary functions
    'consistent-return': ['error', {
      treatUndefinedAsUnspecified: false,
    }],
    'curly': ['error', 'all'],
    'default-case': 'error',
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': ['error', {
      allowKeywords: true,
    }],
    'eqeqeq': ['error', 'always', {
      null: 'ignore',
    }],
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],
    'guard-for-in': 'error',
    'max-classes-per-file': 'off',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-div-regex': 'error',
    'no-else-return': ['error', {
      allowElseIf: false,
    }],
    'no-empty-function': ['error', {
      allow: ['functions'],
    }],
    'no-empty-pattern': 'error',
    'no-eq-null': 'off',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'off',
    'no-floating-decimal': 'error',
    'no-global-assign': ['error', {
      exceptions: [],
    }],
    'no-implicit-coercion': ['error', { // ! and !! are common idioms
      allow: ['!!'],
    }],
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': ['error', {
      capIsConstructor: true,
    }],
    'no-iterator': 'error',
    'no-labels': ['error', {
      allowLoop: false,
      allowSwitch: false,
    }],
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': ['error', {
      ignore: [],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false,
    }],
    'no-multi-spaces': ['error', {
      ignoreEOLComments: false,
    }],
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': ['error', {
      props: true,
    }],
    'no-proto': 'error',
    'no-redeclare': ['error', {
      builtinGlobals: true,
    }],
    'no-restricted-properties': 'off', // project specific
    'no-return-assign': ['error', 'always'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': ['error', {
      props: false,
    }],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': ['error', {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: false,
    }],
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-void': ['error', {
      allowAsStatement: true,
    }],
    'no-warning-comments': ['error', {
      terms: ['todo', 'fixme', 'xxx'],
      location: 'start',
    }],
    'no-with': 'error',
    'prefer-named-capture-group': 'off',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': ['error', {
      disallowRedundantWrapping: true,
    }],
    'radix': ['error', 'always'],
    'require-await': 'error',
    'require-unicode-regexp': 'error',
    'vars-on-top': 'error',
    'wrap-iife': ['error', 'inside'],
    'yoda': ['error', 'never'],

    /* strict */
    'strict': ['error', 'never'],

    /* variables */
    'init-declarations': 'off', // sometimes it's useful
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': 'off', // project specific
    'no-shadow': 'off',
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-unused-vars': ['error', {
      vars: 'all',
      args: 'after-used',
      ignoreRestSiblings: false,
    }],
    'no-use-before-define': ['error', {
      functions: false,
      classes: true,
      variables: true,
    }],

    /* style */
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': ['error', 'consistent'],
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs', {
      allowSingleLine: false,
    }],
    'camelcase': ['error', {
      properties: 'always',
      ignoreDestructuring: true,
      allow: [],
    }],
    'capitalized-comments': ['error', 'always', {
      ignoreInlineComments: true,
      ignoreConsecutiveComments: true,
    }],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', {
      before: false,
      after: true,
    }],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never', {
      enforceForClassMembers: true,
    }],
    'consistent-this': ['error', 'self'],
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'func-name-matching': ['error', 'always', {
      considerPropertyDescriptor: true,
      includeCommonJSModuleExports: true,
    }],
    'func-names': ['error', 'never', {
      generators: 'never',
    }],
    'func-style': ['error', 'expression', {
      allowArrowFunctions: true,
    }],
    'function-paren-newline': ['error', 'consistent'],
    'function-call-argument-newline': ['error', 'consistent'],
    'id-denylist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'implicit-arrow-linebreak': 'off',
    'indent': ['error', 2],
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': ['error', {
      beforeColon: false,
      afterColon: true,
      mode: 'strict',
    }],
    'keyword-spacing': ['error', {
      before: true,
      after: true,
    }],
    'line-comment-position': 'off',
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': ['error', {
      'beforeBlockComment': true,
      'afterBlockComment': false,
      'beforeLineComment': true,
      'afterLineComment': false,
      'allowBlockStart': true,
      'allowBlockEnd': false,
      'allowObjectStart': true,
      'allowObjectEnd': false,
      'allowArrayStart': true,
      'allowArrayEnd': false,
      'allowClassStart': true,
      'allowClassEnd': false,
    }],
    'lines-between-class-members': ['error', 'always', {
      exceptAfterSingleLine: false,
    }],
    'max-depth': ['error', 4],
    'max-len': ['error', {
      code: 120,
      tabWidth: 2,
      ignoreComments: false,
      ignoreTrailingComments: false,
      ignoreUrls: false,
      ignoreStrings: false,
      ignoreTemplateLiterals: false,
      ignoreRegExpLiterals: false,
    }],
    'max-lines': ['error', {
      max: 300,
      skipBlankLines: true,
      skipComments: true,
    }],
    'max-lines-per-function': 'off', // too harsh
    'max-nested-callbacks': ['error', {
      max: 3,
    }],
    'max-params': ['error', {
      max: 4,
    }],
    'max-statements': 'off', // makes to write unnecessary functions
    'max-statements-per-line': ['error', {
      max: 2,
    }],
    'multiline-comment-style': ['error', 'starred-block'],
    'multiline-ternary': ['error', 'always-multiline'],
    'new-cap': ['error', {
      newIsCap: true,
      capIsNew: true,
      properties: true,
    }],
    'new-parens': 'error',
    'newline-per-chained-call': ['error', {
      ignoreChainWithDepth: 4,
    }],
    'no-array-constructor': 'error',
    'no-bitwise': 'off',
    'no-continue': 'off',
    'no-inline-comments': 'off',
    'no-lonely-if': 'error',
    'no-mixed-operators': ['error', {
      allowSamePrecedence: true,
    }],
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-tabs': ['error', {
      allowIndentationTabs: false,
    }],
    'no-ternary': 'off',
    'no-trailing-spaces': ['error', {
      skipBlankLines: false,
      ignoreComments: false,
    }],
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': ['error', 'beside'],
    'object-curly-newline': ['error', {
      consistent: true,
    }],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: true,
    }],
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': ['error', 'always'],
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': ['error', 'after', {
      overrides: { "?": "before", ":": "before" },
    }],
    'padded-blocks': ['error', 'never'],
    'padding-line-between-statements': [
      'error',
      {
        next: 'block-like',
        prev: '*',
        blankLine: 'always',
      },
      {
        next: '*',
        prev: 'block-like',
        blankLine: 'always',
      },
    ],
    'prefer-exponentiation-operator': 'error',
    'prefer-object-spread': 'error',
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': ['error', 'single', {
      allowTemplateLiterals: false,
      avoidEscape: false,
    }],
    'semi': ['error', 'never', {
      beforeStatementContinuationChars: 'always',
    }],
    'semi-spacing': ['error', {
      before: false,
      after: true,
    }],
    'semi-style': ['error', 'last'],
    'sort-keys': 'off',
    'sort-vars': ['error', {
      ignoreCase: false,
    }],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      asyncArrow: 'always',
      named: 'never',
    }],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': ['error', {
      int32Hint: false,
    }],
    'space-unary-ops': ['error', {
      words: true,
      nonwords: false,
    }],
    'spaced-comment': ['error', 'always'],
    'switch-colon-spacing': ['error', {
      before: false,
      after: true,
    }],
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': ['error', 'never'],
    'wrap-regex': 'off',

    /* es6 */
    'arrow-body-style': ['error', 'as-needed', {
      requireReturnForObjectLiteral: false,
    }],
    'arrow-parens': ['error', 'as-needed', {
      requireForBlockBody: false,
    }],
    'arrow-spacing': ['error', {
      before: true,
      after: true,
    }],
    'constructor-super': 'error',
    'generator-star-spacing': ['error', {
      before: false,
      after: true,
    }],
    'no-class-assign': 'error',
    'no-confusing-arrow': ['error', {
      allowParens: true,
    }],
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': ['error', {
      includeExports: false,
    }],
    'no-new-symbol': 'error',
    'no-restricted-exports': 'off',
    'no-restricted-imports': 'off',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': ['error', {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    }],
    'no-var': 'error',
    'object-shorthand': ['error', 'always', {
      avoidQuotes: false,
      ignoreConstructors: false,
      avoidExplicitReturnArrows: false,
    }],
    'prefer-arrow-callback': ['error', {
      allowNamedFunctions: true,
      allowUnboundThis: true,
    }],
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: false,
    }],
    'prefer-destructuring': ['error', {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: true,
        object: true,
      },
    }, {
      enforceForRenamedProperties: false,
    }],
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'sort-imports': ['error', {
      ignoreCase: false,
      ignoreDeclarationSort: true,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
    }],
    'symbol-description': 'error',
    'template-curly-spacing': ['error', 'never'],
    'yield-star-spacing': ['error', 'after'],
  },
}

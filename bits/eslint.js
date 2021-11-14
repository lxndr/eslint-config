/* eslint-disable max-lines */
/* eslint@8.2.0 */

module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    /* Possible Problems */
    'array-callback-return': ['error', {
      allowImplicit: false,
      checkForEach: true,
    }],
    'constructor-super': 'error',
    'for-direction': 'error',
    'getter-return': ['error', {
      allowImplicit: false,
    }],
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'off',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': ['error', 'always'],
    'no-const-assign': 'error',
    'no-constant-condition': ['error', {
      checkLoops: false,
    }],
    'no-constructor-return': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': ['error', {
      includeExports: false,
    }],
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-ex-assign': 'error',
    'no-fallthrough': 'error',
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
    'no-new-symbol': 'error',
    'no-obj-calls': 'error',
    'no-promise-executor-return': 'error',
    'no-prototype-builtins': 'error',
    'no-self-assign': ['error', {
      props: false,
    }],
    'no-self-compare': 'error',
    'no-setter-return': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-this-before-super': 'error',
    'no-undef': 'error',
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unreachable': 'error',
    'no-unreachable-loop': ['error', {
      ignore: [],
    }],
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': ['error', {
      enforceForOrderingRelations: true,
    }],
    'no-unsafe-optional-chaining': ['error', {
      disallowArithmeticOperators: true,
    }],
    'no-unused-private-class-members': 'error',
    'no-unused-vars': ['error', {
      vars: 'all',
      args: 'after-used',
      ignoreRestSiblings: false,
      caughtErrors: 'all',
    }],
    'no-use-before-define': ['error', {
      functions: false,
      classes: true,
      variables: true,
    }],
    'no-useless-backreference': 'error',
    'require-atomic-updates': 'off', // i don't get it...
    'use-isnan': ['error', {
      enforceForSwitchCase: true,
      enforceForIndexOf: true,
    }],
    'valid-typeof': ['error', {
      requireStringLiterals: true,
    }],

    /* Suggestions */
    'accessor-pairs': ['error', {
      setWithoutGet: true,
      getWithoutSet: false,
      enforceForClassMembers: true,
    }],
    'arrow-body-style': ['error', 'as-needed', {
      requireReturnForObjectLiteral: false,
    }],
    'block-scoped-var': 'error',
    'camelcase': ['error', {
      properties: 'always',
      ignoreDestructuring: true,
      ignoreImports: false,
      ignoreGlobals: false,
      allow: [],
    }],
    'capitalized-comments': 'off',
    'class-methods-use-this': ['error', {
      exceptMethods: [],
      enforceForClassFields: true,
    }],
    'complexity': 'off', // makes to write unnecessary functions
    'consistent-return': ['error', {
      treatUndefinedAsUnspecified: false,
    }],
    'consistent-this': ['error', 'self'],
    'curly': ['error', 'all'],
    'default-case': 'error',
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-notation': ['error', {
      allowKeywords: true,
    }],
    'eqeqeq': ['error', 'always', {
      null: 'ignore',
    }],
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
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],
    'guard-for-in': 'error',
    'id-denylist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'init-declarations': 'off', // sometimes it's useful
    'max-classes-per-file': 'off',
    'max-depth': ['error', 4],
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
    'multiline-comment-style': ['error', 'starred-block'],
    'new-cap': ['error', {
      newIsCap: true,
      capIsNew: true,
      properties: true,
    }],
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'off',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-confusing-arrow': ['error', {
      allowParens: true,
    }],
    'no-console': 'error',
    'no-continue': 'off',
    'no-delete-var': 'error',
    'no-div-regex': 'error',
    'no-else-return': ['error', {
      allowElseIf: false,
    }],
    'no-empty': ['error', {
      allowEmptyCatch: true,
    }],
    'no-empty-function': ['error', {
      allow: [],
    }],
    'no-eq-null': 'off',
    'no-eval': ['error', {
      allowIndirect: false,
    }],
    'no-extend-native': ['error', {
      exceptions: [],
    }],
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': ['error', {
      enforceForLogicalOperands: false,
    }],
    'no-extra-label': 'error',
    'no-extra-semi': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': ['error', {
      exceptions: [],
    }],
    'no-implicit-coercion': ['error', { // ! and !! are common idioms
      allow: ['!!'],
    }],
    'no-implicit-globals': ['error', {
      lexicalBindings: false,
    }],
    'no-implied-eval': 'error',
    'no-inline-comments': 'off',
    'no-invalid-this': ['error', {
      capIsConstructor: true,
    }],
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': ['error', {
      allowLoop: false,
      allowSwitch: false,
    }],
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': ['error', {
      ignore: [],
      ignoreArrayIndexes: true,
      ignoreDefaultValues: false,
      enforceConst: true,
      detectObjects: true,
    }],
    'no-mixed-operators': ['error', {
      allowSamePrecedence: true,
    }],
    'no-multi-assign': ['error', {
      ignoreNonDeclaration: false,
    }],
    'no-multi-str': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [],
      ignorePropertyModificationsForRegex: [],
    }],
    'no-plusplus': 'off',
    'no-proto': 'error',
    'no-redeclare': ['error', {
      builtinGlobals: true,
    }],
    'no-regex-spaces': 'error',
    'no-restricted-exports': 'off', // project specific
    'no-restricted-globals': 'off', // project specific
    'no-restricted-imports': 'off', // project specific
    'no-restricted-properties': 'off', // project specific
    'no-restricted-syntax': ['error', 'WithStatement'],
    'no-return-assign': ['error', 'always'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-sequences': 'error',
    'no-shadow': ['error', {
      builtinGlobals: false,
      hoist: 'all',
      allow: [],
    }],
    'no-shadow-restricted-names': 'error',
    'no-ternary': 'off',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': ['error', {
      defaultAssignment: false,
    }],
    'no-unused-expressions': ['error', {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: false,
      enforceForJSX: true,
    }],
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-computed-key': ['error', {
      enforceForClassMembers: true,
    }],
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': ['error', {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    }],
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': ['error', {
      allowAsStatement: true,
    }],
    'no-warning-comments': ['error', {
      terms: ['todo', 'fixme'],
      location: 'start',
    }],
    'no-with': 'error',
    'object-shorthand': ['error', 'always', {
      avoidQuotes: false,
      ignoreConstructors: false,
      avoidExplicitReturnArrows: false,
    }],
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': ['error', 'always'],
    'operator-assignment': ['error', 'always'],
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
    'prefer-exponentiation-operator': 'error',
    'prefer-named-capture-group': 'off',
    'prefer-numeric-literals': 'error',
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': ['error', {
      allowEmptyReject: false,
    }],
    'prefer-regex-literals': ['error', {
      disallowRedundantWrapping: true,
    }],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quote-props': ['error', 'consistent-as-needed'],
    'radix': ['error', 'always'],
    'require-await': 'error',
    'require-unicode-regexp': 'error',
    'require-yield': 'error',
    'sort-imports': ['error', {
      ignoreCase: false,
      ignoreDeclarationSort: true,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      allowSeparatedGroups: false,
    }],
    'sort-keys': 'off',
    'sort-vars': ['error', {
      ignoreCase: false,
    }],
    'spaced-comment': ['error', 'always'],
    'strict': ['error', 'never'],
    'symbol-description': 'error',
    'vars-on-top': 'error',
    'yoda': ['error', 'never'],

    /* Layout & Formatting */
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': ['error', 'never', {
      singleValue: false,
      objectsInArrays: false,
      arraysInArrays: false,
    }],
    'array-element-newline': ['error', 'consistent'],
    'arrow-parens': ['error', 'as-needed', {
      requireForBlockBody: false,
    }],
    'arrow-spacing': ['error', {
      before: true,
      after: true,
    }],
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs', {
      allowSingleLine: false,
    }],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', {
      before: false,
      after: true,
    }],
    'comma-style': ['error', 'last', {
      exceptions: {},
    }],
    'computed-property-spacing': ['error', 'never', {
      enforceForClassMembers: true,
    }],
    'dot-location': ['error', 'property'],
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'function-call-argument-newline': ['error', 'consistent'],
    'function-paren-newline': ['error', 'consistent'],
    'generator-star-spacing': ['error', {
      before: false,
      after: true,
    }],
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
      beforeBlockComment: true,
      afterBlockComment: false,
      beforeLineComment: true,
      afterLineComment: false,
      allowBlockStart: true,
      allowBlockEnd: false,
      allowObjectStart: true,
      allowObjectEnd: false,
      allowArrayStart: true,
      allowArrayEnd: false,
      allowClassStart: true,
      allowClassEnd: false,
    }],
    'lines-between-class-members': ['error', 'always', {
      exceptAfterSingleLine: false,
    }],
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
    'max-statements-per-line': ['error', {
      max: 2,
    }],
    'multiline-ternary': ['error', 'always-multiline'],
    'new-parens': ['error', 'always'],
    'newline-per-chained-call': ['error', {
      ignoreChainWithDepth: 2,
    }],
    'no-extra-parens': ['error', 'all', {
      conditionalAssign: true,
      returnAssign: true,
      nestedBinaryExpressions: true,
      ignoreJSX: 'none',
      enforceForArrowConditionals: false,
      enforceForSequenceExpressions: true,
      enforceForNewInMemberExpressions: true,
      enforceForFunctionPrototypeMethods: true,
    }],
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': ['error', {
      ignoreEOLComments: false,
    }],
    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxEOF: 1,
      maxBOF: 0,
    }],
    'no-tabs': ['error', {
      allowIndentationTabs: false,
    }],
    'no-trailing-spaces': ['error', {
      skipBlankLines: false,
      ignoreComments: false,
    }],
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': ['error', 'beside'],
    'object-curly-newline': ['error', {
      consistent: true,
    }],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: true,
    }],
    'operator-linebreak': ['error', 'after', {
      overrides: { '?': 'before', ':': 'before' },
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
    'quotes': ['error', 'single', {
      allowTemplateLiterals: false,
      avoidEscape: false,
    }],
    'rest-spread-spacing': ['error', 'never'],
    'semi': ['error', 'never', {
      beforeStatementContinuationChars: 'always',
    }],
    'semi-spacing': ['error', {
      before: false,
      after: true,
    }],
    'semi-style': ['error', 'last'],
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
    'switch-colon-spacing': ['error', {
      before: false,
      after: true,
    }],
    'template-curly-spacing': ['error', 'never'],
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': ['error', 'never'],
    'wrap-iife': ['error', 'inside', {
      functionPrototypeMethods: true,
    }],
    'wrap-regex': 'off',
    'yield-star-spacing': ['error', 'after'],
  },
}

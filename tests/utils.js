/* eslint-env jest */
/* eslint-disable no-loop-func */
const { CLIEngine } = require('eslint')

const testConfig = (testName, configs) => {
  describe(testName, () => {
    const cli = new CLIEngine({
      useEslintrc: false,
      baseConfig: {
        extends: configs,
      },
    })

    const calculatedConfig = cli.getConfigForFile('./index.js')
    const rules = cli.getRules()

    for (const [ruleName, rule] of rules) {
      describe(ruleName, () => {
        const { meta: { deprecated, schema = [] } = {} } = rule || {}
        const calculatedRule = calculatedConfig.rules[ruleName]

        if (deprecated) {
          it('should not be defined because it is deprecated', () => {
            expect(calculatedRule).toBeUndefined()
          })
        } else {
          it('should be defined', () => {
            expect(calculatedRule).not.toBeUndefined()
          })

          if (calculatedRule) {
            const [severity] = calculatedRule

            if (Array.isArray(schema) && severity !== 'off') {
              if (!(schema[0] && schema[0].type === 'object' &&
                  Object.keys(schema[0].properties).length === 0)) {
                it('should have necessary options', () => {
                  expect(calculatedRule).toHaveLength(schema.length + 1)
                })
              }
            }
          }
        }
      })
    }

    it('should be correct', () => {
      expect(calculatedConfig).toMatchSnapshot()
    })
  })
}

module.exports = {
  testConfig,
}

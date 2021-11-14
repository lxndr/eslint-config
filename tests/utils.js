/* eslint-env jest */
const { ESLint } = require('eslint')

const testConfig = (testName, configs) => {
  describe(testName, () => {
    const cli = new ESLint({
      useEslintrc: false,
      baseConfig: {
        extends: configs,
      },
    })

    it('should be correct', async () => {
      const calculatedConfig = await cli.calculateConfigForFile('./index.js')
      expect(calculatedConfig).toMatchSnapshot()
    })
  })
}

module.exports = {
  testConfig,
}

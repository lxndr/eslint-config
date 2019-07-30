const { testConfig } = require('./utils');

testConfig('browser config', [
  './browser',
])

testConfig('browser+react config', [
  './browser',
  './react',
])

testConfig('browser+react+ts config', [
  './browser',
  './react',
  './ts',
])

testConfig('node config', [
  './node',
])

testConfig('node+ts config', [
  './node',
  './ts',
])

---
to: packages/<%= h.changeCase.param(name) %>/jest.config.js
---
module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^@uicr/(.*)$': '<rootDir>/../$1/src',
  },
}

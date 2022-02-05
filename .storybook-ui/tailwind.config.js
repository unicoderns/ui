const uiTailwindConfig = require('../packages/common-tw/src/tailwind.config')

module.exports = {
  ...uiTailwindConfig,
  content: [
    './packages/**/ui-*-theme.config.ts',
  ],
}
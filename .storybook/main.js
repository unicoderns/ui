module.exports = {
  stories: [
    "../docs/*.mdx",
    "../**/stories/*.bs.stories.mdx",
    "../**/stories/*.bs.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
    {
      name: "@storybook/addon-docs",
      options: {
        transcludeMarkdown: true,
      },
    },
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
}
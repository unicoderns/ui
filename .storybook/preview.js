export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    exclude: /^(class|aria):*/,
  },
  html: {
    prettier: {
      tabWidth: 4,
      useTabs: false,
      htmlWhitespaceSensitivity: 'strict',
    },
    removeEmptyComments: true,
    highlighter: {
      showLineNumbers: true,
    },
  },
}

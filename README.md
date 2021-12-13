# UI Component Repository - UI.CR

## Project setup
you need to have yarn installed
```
npm install --global yarn
```
Then run install
```
yarn install
```

### run storybook
```
yarn storybook
```

### run storybook for tailwind
```
yarn storybook-tailwind
```

### Compiles and minifies for production
```
yarn transpile
```

### Run your unit tests
```
yarn test
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## How to Contribute
To create a new component, make sure you have npx installed
then run
```
npx hygen component new <componentName>
```
i.e
```
npx hygen component new textArea
```
#### Add path to global tsconfig.json
After this you should manually include the new path in the tsconfig.json paths
```
"paths": {
  "@unicodernsui/core": ["packages/core/src"],
  "@unicodernsui/button-close": ["packages/button-close/src"],
  ...
  "@unicodernsui/<component-name>": ["packages/<component-name>/src"],
},
```

This are the steps that the hygen command will execute

#### Add other dependencies
If your project uses other dependencies from other components add the, to your package local package.json
i.e lets say your project needs the transition component
```
"dependencies": {
  "core-js": "^3.6.5",
  "vue": "3.1.5",
  "@unicodernsui/core": "*",
  ...
  "@unicodernsui/transition": "*"
},
```

### What does hyden do
1. Create a package: This creates a folder inside the packages dir with the next structure
```
-- packages
   -- <component-name>
      -- src
        -- defaults
          -- bs-ui-<component-name>-theme.config.ts
          -- ui-<component-name>-aria.config.ts
        -- models
          -- ui-<component-name>-aria.model.ts
          -- ui-<component-name>-theme.model.ts
          -- ui-<component-name>.model.ts
        -- stories
          -- <ComponentName>.bs.stories.ts
          -- <ComponentName>.tw.stories.ts
          -- tw-ui-<component-name>-theme.config.ts
        -- index.ts
        -- shims-vue.d.ts
        -- ui-<component-name>.component.vue
      -- babel.config.js
      -- package.json
      -- tsconfig.json
```
1. Create a custom model: This includes 3 files:
  - the theme model `ui-<component-name>-aria.model.ts`
  - the aria model `ui-<component-name>-aria.model.ts`
  - the main component model `ui-<component-name>.model.ts`: this one reflects the props for the main component
1. Create a default bootstrap theme: `bs-ui-<component-name>-theme.config.ts` is the default file for theaming based on bootstrap clases
1. Create a default aria config: `ui-<component-name>-aria.config.ts` is the default values for aria strings
1. Create a custom tailwind config: `tw-ui-<component-name>-theme.config.ts` this is the configuration that overrides bootstrap with tailwind classes.
1. Create the bootstrap stories: `<ComponentName>.bs.stories.ts`
1. Create the tailwind stories: `<ComponentName>.tw.stories.ts`
1. Create the main vue component using composition api for Vue 3 with the respective project configuration files.
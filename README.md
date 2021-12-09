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

### Create a package
- Add tsconfig.json path
- Add other component dependencies if any
### Create a custom model
### Create a default bootstrap theme
### Create a default aria config
### Create a custom tailwind config
### Create the bootstrap stories
### Create the tailwind stories
### Add path to global tsconfig.json
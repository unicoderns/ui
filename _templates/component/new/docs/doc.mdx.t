---
to: packages/<%= h.changeCase.param(name) %>/src/docs/<%= h.changeCase.pascal(name) %>.doc.mdx
---
import { Story, Canvas } from '@storybook/addon-docs';

# <%= h.changeCase.pascal(name) %>s
Display an <%= h.changeCase.param(name) %> with text to users.

[Github repo](https://github.com/unicoderns/ui/tree/master/packages/<%= h.changeCase.pascal(name) %>)

```html
    <ui-<%= h.changeCase.param(name) %> :="args" :show="toggle" @show="show" @close="close" @hide="hide">{{ args.default }}</ui-<%= h.changeCase.param(name) %>>
```

## Variants

Support multiple variants

<Canvas>
  <Story id="ui-bootstrap-<%= h.changeCase.param(name) %>--primary"/>
  <Story id="ui-bootstrap-<%= h.changeCase.param(name) %>--secondary" />
  <Story id="ui-bootstrap-<%= h.changeCase.param(name) %>--success" />
  <Story id="ui-bootstrap-<%= h.changeCase.param(name) %>--danger" />
  <Story id="ui-bootstrap-<%= h.changeCase.param(name) %>--warning" />
  <Story id="ui-bootstrap-<%= h.changeCase.param(name) %>--info" />
  <Story id="ui-bootstrap-<%= h.changeCase.param(name) %>--light" />
  <Story id="ui-bootstrap-<%= h.changeCase.param(name) %>--dark" />
</Canvas>

## Props

| Name | Type  | Description |
| ---- | ---- | ----------- |
| `variant` | `string` | variant class defined in the theme |

## Slots

| Name | Description |
| ---- | ----------- |
| `default` | actual span content |

# Events
<%= h.changeCase.pascal(name) %> will emit this events while changing state

| Event | Params | Desription |
| ---- | ---- | ----------- |
| Toggle | active: `boolean` | Will only raise when `toggle = true` |

# Accessibility
Change the next properties to change the default accessibility text

| Name | Property | Default |
| ---- | ---- | ----------- |
| role | aria:role | `<%= h.changeCase.lower(name) %>` |

Check the page [what is aria](/docs/docs-aria--page#what-is-aria-config) to see how to config accessibility globally for <%= h.changeCase.lower(name) %>s.

# Theme
Use the next `json` to define a new theme for the component

```json
{
  cssClass: {
    main: string, // main class
    variants: { // define a custom list of variants
      'variant1': string,
      'variant2': string,
      ...
      'variantN': string,
    },
  },
}
```

Check the page [what is a theme](/docs/docs-theming--page#what-is-a-theme) to see how to use this json

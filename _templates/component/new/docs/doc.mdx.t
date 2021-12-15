---
to: packages/<%= h.changeCase.param(name) %>/src/docs/<%= h.changeCase.pascal(name) %>.doc.mdx
---
import { Story, Canvas, Preview } from '@storybook/addon-docs';

# <%= h.changeCase.pascal(name) %>
Display an <%= h.changeCase.param(name) %> with text to users.

```javascript
    <ui-<%= h.changeCase.param(name) %> :="args" :show="toggle" @show="show" @close="close" @hide="hide">{{ args.default }}</ui-<%= h.changeCase.param(name) %>>
```

## Variants

Support multiple variants

- [Primary](?path=/docs/ui-bootstrap-<%= h.changeCase.param(name) %>--primary&args=#primary)
- [Secondary](?path=/docs/ui-bootstrap-<%= h.changeCase.param(name) %>--secondary&args=#secondary)
- [Success](?path=/docs/ui-bootstrap-<%= h.changeCase.param(name) %>--success&args=#success)
- [Danger](?path=/docs/ui-bootstrap-<%= h.changeCase.param(name) %>--danger&args=#danger)
- [Warning](?path=/docs/ui-bootstrap-<%= h.changeCase.param(name) %>--warning&args=#warning)
- [Info](?path=/docs/ui-bootstrap-<%= h.changeCase.param(name) %>--info&args=#info)
- [Light](?path=/docs/ui-bootstrap-<%= h.changeCase.param(name) %>--light&args=#light)
- [Dark](?path=/docs/ui-bootstrap-<%= h.changeCase.param(name) %>--dark&args=#dark)
- [Inverted](?path=/docs/ui-bootstrap-<%= h.changeCase.param(name) %>--inverted&args=#inverted)
- [Animated](?path=/docs/ui-bootstrap-<%= h.changeCase.param(name) %>--animated&args=#animated)

<>

### Primary
<Canvas>
  <Story id="ui-bootstrap-<%= h.changeCase.param(name) %>--primary"/>
</Canvas>

### Secondary
<Canvas>
  <Story id="ui-bootstrap-<%= h.changeCase.param(name) %>--secondary" />
</Canvas>

### Success
<Canvas>
  <Story id="ui-bootstrap-<%= h.changeCase.param(name) %>--success" />
</Canvas>

### Danger
<Canvas>
  <Story id="ui-bootstrap-<%= h.changeCase.param(name) %>--danger" />
</Canvas>

### Warning
<Canvas>
  <Story id="ui-bootstrap-<%= h.changeCase.param(name) %>--warning" />
</Canvas>

### Info
<Canvas>
  <Story id="ui-bootstrap-<%= h.changeCase.param(name) %>--info" />
</Canvas>

### Light
<Canvas>
  <Story id="ui-bootstrap-<%= h.changeCase.param(name) %>--light" />
</Canvas>

### Dark
<Canvas>
  <Story id="ui-bootstrap-<%= h.changeCase.param(name) %>--dark" />
</Canvas>

### Inverted

Use the `invert` prop to alternate styles 
<Canvas>
  <Story id="ui-bootstrap-<%= h.changeCase.param(name) %>--inverted" />
</Canvas>

### Dismissible

Use the `dismissible` prop to add a closable <%= h.changeCase.param(name) %>
<Canvas>
  <Story id="ui-bootstrap-<%= h.changeCase.param(name) %>--dismissible" />
</Canvas>

### Animated

Use the `animate` prop to animate an <%= h.changeCase.param(name) %>
<Canvas>
  <Story id="ui-bootstrap-<%= h.changeCase.param(name) %>--animated" />
</Canvas>
</>

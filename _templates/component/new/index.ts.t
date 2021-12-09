---
to: packages/<%= h.changeCase.param(name) %>/src/index.ts
---
import Ui<%= h.changeCase.pascal(name) %> from './ui-<%= h.changeCase.param(name) %>.component.vue'

export { Ui<%= h.changeCase.pascal(name) %> }
export * from './models/ui-<%= h.changeCase.param(name) %>.model'
export * from './models/ui-<%= h.changeCase.param(name) %>-theme-config.model'
export * from './models/ui-<%= h.changeCase.param(name) %>-aria-config.model'

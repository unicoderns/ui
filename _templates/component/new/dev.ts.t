---
to: packages/<%= h.changeCase.param(name) %>/src/dev.ts
---
import Ui<%= h.changeCase.pascal(name) %>Doc from './docs/<%= h.changeCase.pascal(name) %>.doc.mdx'

export { Ui<%= h.changeCase.pascal(name) %>Doc }
export * from './stories/tw-ui-<%= h.changeCase.param(name) %>-theme.config'

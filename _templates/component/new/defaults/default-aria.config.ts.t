---
to: packages/<%= h.changeCase.param(name) %>/src/defaults/ui-<%= h.changeCase.param(name) %>-aria.config.ts
---
import { Ui<%= h.changeCase.pascal(name) %>AriaConfigModel } from '..'

export const ui<%= h.changeCase.pascal(name) %>AriaDefaults: Ui<%= h.changeCase.pascal(name) %>AriaConfigModel = {
  role: '<%= h.changeCase.camel(name) %>',
}

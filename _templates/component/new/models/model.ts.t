---
to: packages/<%= h.changeCase.param(name) %>/src/models/ui-<%= h.changeCase.param(name) %>.model.ts
---
export interface Ui<%= h.changeCase.pascal(name) %>Model {
  variant: string
  ['aria:role']: string
}

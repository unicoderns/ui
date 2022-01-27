---
to: packages/<%= h.changeCase.param(name) %>/src/models/ui-<%= h.changeCase.param(name) %>-aria-config.model.ts
---
import { UiComponentAriaConfigModel } from '@uicr/core'

export interface Ui<%= h.changeCase.pascal(name) %>AriaConfigModel extends UiComponentAriaConfigModel {
  role: string
}

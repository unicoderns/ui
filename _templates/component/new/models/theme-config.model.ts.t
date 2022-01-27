---
to: packages/<%= h.changeCase.param(name) %>/src/models/ui-<%= h.changeCase.param(name) %>-theme-config.model.ts
---
import { UiComponentThemeConfigModel, KeyPairString } from '@uicr/core'

export interface Ui<%= h.changeCase.pascal(name) %>ThemeConfigModel
  extends UiComponentThemeConfigModel {
  cssClass: {
    main: string
    variants: KeyPairString
  }
}

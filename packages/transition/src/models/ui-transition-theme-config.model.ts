import { UiComponentThemeConfigModel } from '@uicr/core'

export interface UiTransitionThemeConfigModel
  extends UiComponentThemeConfigModel {
  cssClass: {
    persistent: string
  }
}

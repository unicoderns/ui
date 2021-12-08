import { UiComponentThemeConfigModel } from '@unicodernsui/core'

export interface UiTransitionThemeConfigModel
  extends UiComponentThemeConfigModel {
  cssClass: {
    persistent: string
  }
}

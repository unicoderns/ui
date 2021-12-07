import { UiComponentThemeConfigModel } from '@unicodernsui/core'

export interface TransitionPersistThemeConfigModel
  extends UiComponentThemeConfigModel {
  cssClass: {
    persistent: string
  }
}

import { UiComponentThemeConfigModel } from '../../../types'

export interface TransitionPersistThemeConfigModel
  extends UiComponentThemeConfigModel {
  cssClass: {
    persistent: string
  }
}

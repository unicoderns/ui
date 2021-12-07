import { UiComponentThemeConfigModel } from '@unicodernsui/core'

export interface UiButtonCloseThemeConfigModel
  extends UiComponentThemeConfigModel {
  cssClass: {
    main: string
    inverted: string
  }
}

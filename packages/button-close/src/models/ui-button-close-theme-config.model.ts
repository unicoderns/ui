import { UiComponentThemeConfigModel } from '@uicr/core'

export interface UiButtonCloseThemeConfigModel
  extends UiComponentThemeConfigModel {
  cssClass: {
    main: string
    inverted: string
  }
}

import { UiComponentThemeConfigModel } from '../../../types'

export interface ButtonCloseThemeConfigModel
  extends UiComponentThemeConfigModel {
  cssClass: {
    main: string
    inverted: string
  }
}

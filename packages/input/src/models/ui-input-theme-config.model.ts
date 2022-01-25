import { UiComponentThemeConfigModel } from '@unicodernsui/core'

export interface UiInputThemeConfigModel extends UiComponentThemeConfigModel {
  cssClass: {
    main: string
    label: string
  }
}

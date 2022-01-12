import { UiComponentThemeConfigModel } from '@unicodernsui/core'

export interface UiRangeThemeConfigModel extends UiComponentThemeConfigModel {
  cssClass: {
    main: string
    label: string
  }
}

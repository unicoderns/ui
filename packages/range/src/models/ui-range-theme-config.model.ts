import { UiComponentThemeConfigModel } from '@uicr/core'

export interface UiRangeThemeConfigModel extends UiComponentThemeConfigModel {
  cssClass: {
    main: string
    label: string
  }
}

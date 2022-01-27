import { UiComponentThemeConfigModel } from '@uicr/core'

export interface UiInputThemeConfigModel extends UiComponentThemeConfigModel {
  cssClass: {
    main: string
    label: string
  }
}

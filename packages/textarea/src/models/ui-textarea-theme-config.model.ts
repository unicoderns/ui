import { UiComponentThemeConfigModel } from '@unicodernsui/core'

export interface UiTextareaThemeConfigModel
  extends UiComponentThemeConfigModel {
  cssClass: {
    main: string
    disabled: string
    label: string
    textArea: string
  }
}

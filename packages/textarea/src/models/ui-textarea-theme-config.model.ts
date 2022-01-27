import { UiComponentThemeConfigModel } from '@uicr/core'

export interface UiTextareaThemeConfigModel
  extends UiComponentThemeConfigModel {
  cssClass: {
    main: string
    disabled: string
    label: string
    textArea: string
  }
}

import { UiComponentThemeConfigModel, SizeVariants } from '@unicodernsui/core'

export interface UiTextareaThemeConfigModel
  extends UiComponentThemeConfigModel {
  cssClass: {
    main: string
    disabled: string
    inputGroupText: string
    label: string
    textArea: string
    sizes: {
      [SizeVariants.Large]: string
      [SizeVariants.Medium]: string
      [SizeVariants.Small]: string
    }
  }
}

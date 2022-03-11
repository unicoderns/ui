import { UiComponentThemeConfigModel, InputSizeVariants } from '@uicr/core'

export interface UiInputGroupThemeConfigModel
  extends UiComponentThemeConfigModel {
  cssClass: {
    main: string
    nowrap: string
    label: string
    inputGroupText: string
    sizes: {
      [InputSizeVariants.Large]: string
      [InputSizeVariants.Medium]: string
      [InputSizeVariants.Small]: string
    }
  }
}

import { UiComponentThemeConfigModel, InputSizeVariants } from '@uicr/core'

export interface UiSelectThemeConfigModel extends UiComponentThemeConfigModel {
  cssClass: {
    main: string
    sizes: {
      [InputSizeVariants.Large]: string
      [InputSizeVariants.Medium]: string
      [InputSizeVariants.Small]: string
    }
  }
}

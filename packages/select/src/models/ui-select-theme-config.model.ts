import {
  UiComponentThemeConfigModel,
  InputSizeVariants,
} from '@unicodernsui/core'

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

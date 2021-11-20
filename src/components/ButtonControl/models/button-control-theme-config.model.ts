import { KeyPairString, SizeVariants, UiComponentThemeConfigModel } from '../../../types'

export interface ButtonControlThemeConfigModel
  extends UiComponentThemeConfigModel {
  cssClass: {
    main: string
    active: string
    outline: string
    variants: KeyPairString
    outlineVariants: KeyPairString
    sizes: {
      [SizeVariants.Large]: string
      [SizeVariants.Medium]: string
      [SizeVariants.Small]: string
    }
  }
}

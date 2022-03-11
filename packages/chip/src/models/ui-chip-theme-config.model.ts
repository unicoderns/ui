import { UiComponentThemeConfigModel, KeyPairString } from '@uicr/core'

export interface UiChipThemeConfigModel extends UiComponentThemeConfigModel {
  cssClass: {
    main: string
    pill: string
    textDark: string
    variants: KeyPairString
  }
}

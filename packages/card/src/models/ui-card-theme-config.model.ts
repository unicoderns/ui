import { UiComponentThemeConfigModel, KeyPairString } from '@uicr/core'

export interface UiCardThemeConfigModel extends UiComponentThemeConfigModel {
  cssClass: {
    main: string
    header: string
    body: string
    title: string
    subtitle: string
    img: string
    imgBottom: string
    footer: string
    center: string
    text: string
    variants: KeyPairString
    textVariants: KeyPairString
    outlineVariants: KeyPairString
    outlineTextVariants: KeyPairString
  }
}

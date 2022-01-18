import { UiComponentThemeConfigModel, KeyPairString } from '@unicodernsui/core'

export interface UiCardThemeConfigModel extends UiComponentThemeConfigModel {
  cssClass: {
    main: string
    header: string
    body: string
    title: string
    subtitle: string
    link: string
    img: string
    imgBottom: string
    footer: string
    center: string
    text: string
    variants: KeyPairString
    borderVariants: KeyPairString
    textBorderVariants: KeyPairString
  }
}

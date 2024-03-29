import { UiComponentThemeConfigModel, KeyPairString } from '@uicr/core'

export interface UiPaginationThemeConfigModel
  extends UiComponentThemeConfigModel {
  cssClass: {
    main: string
    item: string
    link: string
    itemActive: string
    disabled: string
    sizes: KeyPairString
  }
}

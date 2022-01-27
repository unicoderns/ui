import { KeyPairString, UiComponentThemeConfigModel } from '@uicr/core'

export interface UiAlertThemeConfigModel extends UiComponentThemeConfigModel {
  cssClass: {
    main: string
    dismissible: string
    animated: string
    variants: KeyPairString
    components: {
      buttonClose: string
    }
  }
}

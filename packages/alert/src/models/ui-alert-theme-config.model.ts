import { KeyPairString, UiComponentThemeConfigModel } from '@unicodernsui/core'

export interface UiAlertThemeConfigModel extends UiComponentThemeConfigModel {
  cssClass: {
    main: string
    dismissible: string
    animated: string
    variants: KeyPairString
    components: {
      buttonClose: string,
    }
  }
}

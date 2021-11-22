import { KeyPairString, UiComponentThemeConfigModel } from '../../../types'

export interface AlertMessageThemeConfigModel extends UiComponentThemeConfigModel {
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

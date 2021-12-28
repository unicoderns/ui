import {
  Position,
  KeyPairString,
  UiComponentThemeConfigModel,
} from '@unicodernsui/core'

export interface UiToastThemeConfigModel extends UiComponentThemeConfigModel {
  cssClass: {
    main: string
    container: string
    animated: string
    textLight: string
    header: string
    body: string
    message: string
    variants: KeyPairString
    components: {
      buttonCloseHeader: string
      buttonCloseBody: string
    }
    positions: {
      [Position.TopLeft]: string
      [Position.TopCenter]: string
      [Position.TopRight]: string
      [Position.MiddleLeft]: string
      [Position.MiddleCenter]: string
      [Position.MiddleRight]: string
      [Position.BottomLeft]: string
      [Position.BottomCenter]: string
      [Position.BottomRight]: string
    }
  }
}

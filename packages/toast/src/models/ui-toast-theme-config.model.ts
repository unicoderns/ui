import {
  Positions,
  KeyPairString,
  UiComponentThemeConfigModel,
} from '@uicr/core'

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
      [Positions.TopLeft]: string
      [Positions.TopCenter]: string
      [Positions.TopRight]: string
      [Positions.MiddleLeft]: string
      [Positions.MiddleCenter]: string
      [Positions.MiddleRight]: string
      [Positions.BottomLeft]: string
      [Positions.BottomCenter]: string
      [Positions.BottomRight]: string
    }
  }
}

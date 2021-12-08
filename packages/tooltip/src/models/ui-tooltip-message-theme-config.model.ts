import {
  UiComponentThemeConfigModel,
  PopperPlacement,
} from '@unicodernsui/core'

export interface UiTooltipMessageThemeConfigModel
  extends UiComponentThemeConfigModel {
  cssClass: {
    main: string
    animated: string
    message: string
    arrow: string
    positions: {
      [PopperPlacement.Top]: string
      [PopperPlacement.Bottom]: string
      [PopperPlacement.Right]: string
      [PopperPlacement.Left]: string
    }
  }
}

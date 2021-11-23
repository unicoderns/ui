import { UiComponentThemeConfigModel, PopperPlacement } from '../../../types'

export interface TooltipMessageThemeConfigModel
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

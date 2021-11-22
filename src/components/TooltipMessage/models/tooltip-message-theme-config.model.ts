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
      [PopperPlacement.TopStart]: string
      [PopperPlacement.TopEnd]: string
      [PopperPlacement.Bottom]: string
      [PopperPlacement.BottomStart]: string
      [PopperPlacement.BottomEnd]: string
      [PopperPlacement.RightStart]: string
      [PopperPlacement.RightEnd]: string
      [PopperPlacement.Right]: string
      [PopperPlacement.LeftStart]: string
      [PopperPlacement.LeftEnd]: string
      [PopperPlacement.Left]: string
    }
  }
}

import {
  UiComponentThemeConfigModel,
  PopperCardinalPlacements,
} from '@unicodernsui/core'

export interface UiTooltipThemeConfigModel extends UiComponentThemeConfigModel {
  cssClass: {
    main: string
    animated: string
    message: string
    arrow: string
    positions: {
      [PopperCardinalPlacements.Top]: string
      [PopperCardinalPlacements.Bottom]: string
      [PopperCardinalPlacements.Right]: string
      [PopperCardinalPlacements.Left]: string
    }
  }
}

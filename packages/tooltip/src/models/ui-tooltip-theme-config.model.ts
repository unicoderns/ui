import {
  UiComponentThemeConfigModel,
  PopperCardinalPlacement,
} from '@unicodernsui/core'

export interface UiTooltipThemeConfigModel extends UiComponentThemeConfigModel {
  cssClass: {
    main: string
    animated: string
    message: string
    arrow: string
    positions: {
      [PopperCardinalPlacement.Top]: string
      [PopperCardinalPlacement.Bottom]: string
      [PopperCardinalPlacement.Right]: string
      [PopperCardinalPlacement.Left]: string
    }
  }
}

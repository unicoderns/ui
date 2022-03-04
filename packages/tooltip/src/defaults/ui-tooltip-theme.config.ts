import { PopperCardinalPlacements } from '@uicr/core'
import { UiTooltipThemeConfigModel } from '../models/ui-tooltip-theme-config.model'

const baseClass = 'tooltip'

const getPlacement = (value: PopperCardinalPlacements | string) =>
  `bs-tooltip-${value}`

export const uiTooltipThemeConfigDefaults: UiTooltipThemeConfigModel = {
  cssClass: {
    main: `${baseClass} show`,
    animated: 'fade',
    message: 'tooltip-inner',
    arrow: 'tooltip-arrow',
    positions: {
      [PopperCardinalPlacements.Top]: getPlacement(
        PopperCardinalPlacements.Top
      ),
      [PopperCardinalPlacements.Bottom]: getPlacement(
        PopperCardinalPlacements.Bottom
      ),
      [PopperCardinalPlacements.Right]: getPlacement('end'),
      [PopperCardinalPlacements.Left]: getPlacement('start'),
    },
  },
}

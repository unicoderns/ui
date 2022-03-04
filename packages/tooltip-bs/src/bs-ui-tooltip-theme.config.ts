import { PopperCardinalPlacements } from '@uicr/core'
import { UiTooltipThemeConfigModel } from '@uicr/tooltip'

const baseClass = 'tooltip'

const getPlacement = (value: PopperCardinalPlacements | string) =>
  `bs-tooltip-${value}`

export const bsUiTooltipThemeConfigDefaults: UiTooltipThemeConfigModel = {
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

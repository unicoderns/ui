import { PopperCardinalPlacement } from '@unicodernsui/core'
import { UiTooltipThemeConfigModel } from '../models/ui-tooltip-theme-config.model'

const baseClass = 'tooltip'

const getPlacement = (value: PopperCardinalPlacement | string) => `bs-tooltip-${value}`

export const bsUiTooltipThemeConfigDefaults: UiTooltipThemeConfigModel = {
  cssClass: {
    main: `${baseClass} show`,
    animated: 'fade',
    message: 'tooltip-inner',
    arrow: 'tooltip-arrow',
    positions: {
      [PopperCardinalPlacement.Top]: getPlacement(PopperCardinalPlacement.Top),
      [PopperCardinalPlacement.Bottom]: getPlacement(
        PopperCardinalPlacement.Bottom
      ),
      [PopperCardinalPlacement.Right]: getPlacement('end'),
      [PopperCardinalPlacement.Left]: getPlacement('start'),
    },
  },
}

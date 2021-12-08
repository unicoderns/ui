import { PopperPlacement } from '@unicodernsui/core'
import { UiTooltipThemeConfigModel } from '../models/ui-tooltip-theme-config.model'

const baseClass = 'tooltip'

const getPlacement = (value: PopperPlacement | string) => `bs-tooltip-${value}`

export const bsUiTooltipThemeConfigDefaults: UiTooltipThemeConfigModel = {
  cssClass: {
    main: `${baseClass} show`,
    animated: 'fade',
    message: 'tooltip-inner',
    arrow: 'tooltip-arrow',
    positions: {
      [PopperPlacement.Top]: getPlacement(PopperPlacement.Top),
      [PopperPlacement.Bottom]: getPlacement(PopperPlacement.Bottom),
      [PopperPlacement.Right]: getPlacement('end'),
      [PopperPlacement.Left]: getPlacement('start'),
    },
  },
}

import { PopperPlacement } from '@unicodernsui/core'
import { UiTooltipMessageThemeConfigModel } from '../models/ui-tooltip-message-theme-config.model'

const baseClass = 'tooltip'

const getPlacement = (value: PopperPlacement | string) => `bs-tooltip-${value}`

export const bsTooltipMessageThemeConfigDefaults: UiTooltipMessageThemeConfigModel = {
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

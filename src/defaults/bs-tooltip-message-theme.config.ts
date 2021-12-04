import { TooltipMessageThemeConfigModel } from '../components'
import { PopperPlacement } from '../types'

const baseClass = 'tooltip'

const getPlacement = (value: PopperPlacement | string) => `bs-tooltip-${value}`

export const bsTooltipMessageThemeConfigDefaults: TooltipMessageThemeConfigModel = {
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

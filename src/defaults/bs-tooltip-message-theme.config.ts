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
      [PopperPlacement.TopStart]: getPlacement(PopperPlacement.TopStart),
      [PopperPlacement.TopEnd]: getPlacement(PopperPlacement.TopEnd),
      [PopperPlacement.Bottom]: getPlacement(PopperPlacement.Bottom),
      [PopperPlacement.BottomStart]: getPlacement(PopperPlacement.BottomStart),
      [PopperPlacement.BottomEnd]: getPlacement(PopperPlacement.BottomEnd),
      [PopperPlacement.RightStart]: getPlacement(PopperPlacement.RightStart),
      [PopperPlacement.RightEnd]: getPlacement(PopperPlacement.RightEnd),
      [PopperPlacement.Right]: getPlacement('end'),
      [PopperPlacement.LeftStart]: getPlacement(PopperPlacement.LeftStart),
      [PopperPlacement.LeftEnd]: getPlacement(PopperPlacement.LeftEnd),
      [PopperPlacement.Left]: getPlacement('start'),
    },
  },
}

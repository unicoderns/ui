import { setComponentThemeConfig } from '@uicr/core'
import { uiTooltipTag } from '@uicr/tooltip'
import { bsUiTooltipThemeConfigDefaults } from './bs-ui-tooltip-theme.config'

export function install() {
  setComponentThemeConfig(uiTooltipTag, bsUiTooltipThemeConfigDefaults)
}

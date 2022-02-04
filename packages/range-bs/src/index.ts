import { setComponentThemeConfig } from '@uicr/core'
import { UiRange } from '@uicr/range'
import { bsUiRangeThemeConfigDefaults } from './bs-ui-range-theme.config'

export function install() {
  setComponentThemeConfig(UiRange, bsUiRangeThemeConfigDefaults)
}

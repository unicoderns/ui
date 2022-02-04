import { bsUiCardThemeConfigDefaults } from './bs-ui-card-theme.config'
import { setComponentThemeConfig } from '@uicr/core'
import { UiCard } from '@uicr/card'

export function install() {
  setComponentThemeConfig(UiCard, bsUiCardThemeConfigDefaults)
}

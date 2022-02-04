import { setComponentThemeConfig } from '@uicr/core'
import { UiTransition } from '@uicr/transition'
import { bsUiTransitionThemeConfigDefaults } from './bs-ui-transition-theme.config'

export function install() {
  setComponentThemeConfig(UiTransition, bsUiTransitionThemeConfigDefaults)
}

export { bsUiTransitionThemeConfigDefaults }

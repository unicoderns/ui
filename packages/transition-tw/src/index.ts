import { setComponentThemeConfig } from '@uicr/core'
import { UiTransition } from '@uicr/transition'
import { twUiTransitionThemeConfigDefaults } from './tw-ui-transition-theme.config'

export function install() {
  setComponentThemeConfig(UiTransition, twUiTransitionThemeConfigDefaults)
}

export { twUiTransitionThemeConfigDefaults }

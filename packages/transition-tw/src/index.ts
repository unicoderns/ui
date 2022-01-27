import { setComponentThemeConfig } from '@uicr/core'
import { UiTransition } from '@uicr/transition'
import { twUiTransitionThemeConfigDefaults } from './tw-ui-transition-persist-theme.config'


export function install() {
  setComponentThemeConfig(UiTransition, twUiTransitionThemeConfigDefaults)
}

export { twUiTransitionThemeConfigDefaults }

import { twUiTransitionThemeConfigDefaults } from './tw-ui-transition-persist-theme.config'
import { setComponentThemeConfig } from '@unicodernsui/core'
import { UiTransition } from '@unicodernsui/transition'


export function install() {
  setComponentThemeConfig(UiTransition, twUiTransitionThemeConfigDefaults)
}

export { twUiTransitionThemeConfigDefaults }

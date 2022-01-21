import { twUiButtonThemeConfigDefaults } from './tw-ui-button-theme.config'
import { setComponentThemeConfig } from '@unicodernsui/core'
import { UiButton } from '@unicodernsui/button'


export function install() {
  setComponentThemeConfig(UiButton, twUiButtonThemeConfigDefaults)
}

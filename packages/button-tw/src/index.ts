import { twUiButtonThemeConfigDefaults } from './tw-ui-button-theme.config'
import { setComponentThemeConfig } from '@uicr/core'
import { UiButton } from '@uicr/button'

export function install() {
  setComponentThemeConfig(UiButton, twUiButtonThemeConfigDefaults)
}

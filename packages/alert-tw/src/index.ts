import { setComponentThemeConfig } from '@unicodernsui/core'
import { UiAlert } from '@unicodernsui/alert'
import { install as twUiTransitionInstall } from '@unicodernsui/transition-tw'
import { install as twUiButtonCloseInstall } from '@unicodernsui/button-close-tw'
import { twUiAlertThemeConfigDefaults } from './tw-ui-alert-theme.config'

export function install() {
  twUiTransitionInstall()
  twUiButtonCloseInstall()
  setComponentThemeConfig(UiAlert, twUiAlertThemeConfigDefaults)
}

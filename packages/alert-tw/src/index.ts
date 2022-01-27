import { setComponentThemeConfig } from '@uicr/core'
import { UiAlert } from '@uicr/alert'
import { install as twUiTransitionInstall } from '@uicr/transition-tw'
import { install as twUiButtonCloseInstall } from '@uicr/button-close-tw'
import { twUiAlertThemeConfigDefaults } from './tw-ui-alert-theme.config'

export function install() {
  twUiTransitionInstall()
  twUiButtonCloseInstall()
  setComponentThemeConfig(UiAlert, twUiAlertThemeConfigDefaults)
}

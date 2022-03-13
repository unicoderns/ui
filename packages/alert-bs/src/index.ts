import { setComponentThemeConfig } from '@uicr/core'
import { UiAlert } from '@uicr/alert'
import { install as bsUiTransitionInstall } from '@uicr/transition-bs'
import { install as bsUiButtonCloseInstall } from '@uicr/button-close-bs'
import { bsUiAlertThemeConfigDefaults } from './bs-ui-alert-theme.config'

export function install() {
  bsUiTransitionInstall()
  bsUiButtonCloseInstall()
  setComponentThemeConfig(UiAlert, bsUiAlertThemeConfigDefaults)
}

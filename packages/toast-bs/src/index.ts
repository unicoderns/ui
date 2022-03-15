import { setComponentThemeConfig } from '@uicr/core'
import { UiToastContainer } from '@uicr/toast'
import { install as bsUiTransitionInstall } from '@uicr/transition-bs'
import { install as bsUiButtonCloseInstall } from '@uicr/button-close-bs'
import { bsUiToastThemeConfigDefaults } from './bs-ui-toast-theme.config'

export function install() {
  bsUiTransitionInstall()
  bsUiButtonCloseInstall()
  setComponentThemeConfig(UiToastContainer, bsUiToastThemeConfigDefaults)
}

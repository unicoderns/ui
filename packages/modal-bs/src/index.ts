import { setComponentThemeConfig } from '@uicr/core'
import { UiModal } from '@uicr/modal'
import { install as bsUiTransitionInstall } from '@uicr/transition-bs'
import { install as bsUiButtonCloseInstall } from '@uicr/button-close-bs'
import { bsUiModalThemeConfigDefaults } from './bs-ui-modal-theme.config'

export function install() {
  bsUiTransitionInstall()
  bsUiButtonCloseInstall()
  setComponentThemeConfig(UiModal, bsUiModalThemeConfigDefaults)
}

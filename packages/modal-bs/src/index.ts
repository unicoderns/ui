import { setComponentThemeConfig } from '@uicr/core'
import { UiModal } from '@uicr/modal'
import { bsUiModalThemeConfigDefaults } from './bs-ui-modal-theme.config'

export function install() {
  setComponentThemeConfig(UiModal, bsUiModalThemeConfigDefaults)
}

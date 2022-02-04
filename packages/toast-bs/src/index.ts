import { setComponentThemeConfig } from '@uicr/core'
import { UiToastContainer } from '@uicr/toast'
import { bsUiToastThemeConfigDefaults } from './bs-ui-toast-theme.config'

export function install() {
  setComponentThemeConfig(UiToastContainer, bsUiToastThemeConfigDefaults)
}

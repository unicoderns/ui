import { setComponentThemeConfig } from '@uicr/core'
import { UiButtonClose } from '@uicr/button-close'
import { bsUiButtonCloseThemeConfigDefaults } from './bs-ui-button-close-theme.config'

export function install() {
  setComponentThemeConfig(UiButtonClose, bsUiButtonCloseThemeConfigDefaults)
}

export { bsUiButtonCloseThemeConfigDefaults }

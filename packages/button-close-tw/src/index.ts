import { setComponentThemeConfig } from '@uicr/core'
import { UiButtonClose } from '@uicr/button-close'
import { twUiButtonCloseThemeConfigDefaults } from './tw-ui-button-close-theme.config'

export function install() {
  setComponentThemeConfig(UiButtonClose, twUiButtonCloseThemeConfigDefaults)
}

export { twUiButtonCloseThemeConfigDefaults }

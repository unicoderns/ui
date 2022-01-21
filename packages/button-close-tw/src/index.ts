import { twUiButtonCloseThemeConfigDefaults } from './tw-ui-button-close-theme.config'
import { setComponentThemeConfig } from '@unicodernsui/core'
import { UiButtonClose } from '@unicodernsui/button-close'

export function install() {
  setComponentThemeConfig(UiButtonClose, twUiButtonCloseThemeConfigDefaults)
}

export { twUiButtonCloseThemeConfigDefaults }

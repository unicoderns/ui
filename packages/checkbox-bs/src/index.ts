import { setComponentThemeConfig } from '@uicr/core'
import { UiCheckbox } from '@uicr/checkbox'
import { bsUiCheckboxThemeConfigDefaults } from './bs-ui-checkbox-theme.config'

export function install() {
  setComponentThemeConfig(UiCheckbox, bsUiCheckboxThemeConfigDefaults)
}

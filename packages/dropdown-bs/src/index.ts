import { setComponentThemeConfig } from '@uicr/core'
import { UiDropdown } from '@uicr/dropdown'
import { bsUiDropdownThemeConfigDefaults } from './bs-ui-dropdown-theme.config'

export function install() {
  setComponentThemeConfig(UiDropdown, bsUiDropdownThemeConfigDefaults)
}

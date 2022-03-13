import { setComponentThemeConfig } from '@uicr/core'
import { UiDropdown } from '@uicr/dropdown'
import { install as bsUiButtonInstall } from '@uicr/button-bs'
import { install as bsUiMenuInstall } from '@uicr/menu-bs'
import { bsUiDropdownThemeConfigDefaults } from './bs-ui-dropdown-theme.config'

export function install() {
  bsUiButtonInstall()
  bsUiMenuInstall()
  setComponentThemeConfig(UiDropdown, bsUiDropdownThemeConfigDefaults)
}

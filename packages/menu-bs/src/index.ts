import { setComponentThemeConfig } from '@uicr/core'
import { UiMenu } from '@uicr/menu'
import { bsUiMenuThemeConfigDefaults } from './bs-ui-menu-theme.config'

export function install() {
  setComponentThemeConfig(UiMenu, bsUiMenuThemeConfigDefaults)
}

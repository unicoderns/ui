import { setComponentThemeConfig } from '@uicr/core'
import { UiInputGroup } from '@uicr/input-group'
import { bsUiInputGroupThemeConfigDefaults } from './bs-ui-input-group-theme.config'

export function install() {
  setComponentThemeConfig(UiInputGroup, bsUiInputGroupThemeConfigDefaults)
}

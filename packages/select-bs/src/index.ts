import { setComponentThemeConfig } from '@uicr/core'
import { UiSelect } from '@uicr/select'
import { bsUiSelectThemeConfigDefaults } from './bs-ui-select-theme.config'

export function install() {
  setComponentThemeConfig(UiSelect, bsUiSelectThemeConfigDefaults)
}

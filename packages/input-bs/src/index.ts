import { setComponentThemeConfig } from '@uicr/core'
import { UiInput } from '@uicr/input'
import { bsUiInputThemeConfigDefaults } from './bs-ui-input-theme.config'

export function install() {
  setComponentThemeConfig(UiInput, bsUiInputThemeConfigDefaults)
}

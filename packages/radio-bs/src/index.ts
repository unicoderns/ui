import { setComponentThemeConfig } from '@uicr/core'
import { UiRadio } from '@uicr/radio'
import { bsUiRadioThemeConfigDefaults } from './bs-ui-radio-theme.config'

export function install() {
  setComponentThemeConfig(UiRadio, bsUiRadioThemeConfigDefaults)
}

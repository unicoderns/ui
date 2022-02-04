import { setComponentThemeConfig } from '@uicr/core'
import { UiTextarea } from '@uicr/textarea'
import { bsUiTextareaThemeConfigDefaults } from './bs-ui-textarea-theme.config'

export function install() {
  setComponentThemeConfig(UiTextarea, bsUiTextareaThemeConfigDefaults)
}

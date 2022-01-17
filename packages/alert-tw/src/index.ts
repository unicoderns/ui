import { twUiAlertThemeConfigDefaults } from './tw-ui-alert-theme.config'
import { setThemeConfig } from '@unicodernsui/core'
import { UiTransition } from '@unicodernsui/transition'
import { UiButtonClose } from '@unicodernsui/button-close'
import { twUiTransitionThemeConfigDefaults } from '@unicodernsui/transition-tw'
import { twUiButtonCloseThemeConfigDefaults } from '@unicodernsui/button-close-tw'
import { UiAlert } from '@unicodernsui/alert'

export function install() {
  setThemeConfig({
    [UiTransition.TAG_NAME]: twUiTransitionThemeConfigDefaults,
    [UiButtonClose.TAG_NAME]: twUiButtonCloseThemeConfigDefaults,
    [UiAlert.TAG_NAME]: twUiAlertThemeConfigDefaults,
  })
}

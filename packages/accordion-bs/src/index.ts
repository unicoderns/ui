import { setComponentThemeConfig } from '@uicr/core'
import { UiAccordion } from '@uicr/accordion'
import { install as bsUiTransitionInstall } from '@uicr/transition-bs'
import { install as bsUiButtonCloseInstall } from '@uicr/button-close-bs'
import { bsUiAccordionThemeConfigDefaults } from './bs-ui-accordion-theme.config'

export function install() {
  bsUiTransitionInstall()
  bsUiButtonCloseInstall()
  setComponentThemeConfig(UiAccordion, bsUiAccordionThemeConfigDefaults)
}

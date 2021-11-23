import { UiAccessibilityConfigModel, UiThemeConfigModel } from '../types'
import { alertMessageAccessibilityDefaults } from './alert-message-accessibility.config'
import { bsAlertMessageThemeConfigDefaults } from './bs-alert-message-theme.config'
import { bsButtonCloseThemeConfigDefaults } from './bs-button-close-theme.config'
import { bsButtonControlThemeConfigDefaults } from './bs-button-control-theme.config'
import { bsControlDropdownThemeConfigDefaults } from './bs-control-dropdown-theme.config'
import { bsControlMenuThemeConfigDefaults } from './bs-control-menu-theme.config'
import { bsModalDialogThemeConfigDefaults } from './bs-modal-dialog-theme.config'
import { bsToastMessageThemeConfigDefaults } from './bs-toast-message-theme.config'
import { bsTooltipMessageThemeConfigDefaults } from './bs-tooltip-message-theme.config'
import { bsTransitionPersistThemeConfigDefaults } from './bs-transition-persist-theme.config'
import { buttonCloseAccessibilityDefaults } from './button-close-accessibility.config'
import { buttonControlAccessibilityDefaults } from './button-control-accessibility.config'
import { controlDropdownAccessibilityDefaults } from './control-dropdown-accessibility.config'
import { modalDialogAccessibilityDefaults } from './modal-dialog-accessibility.config'
import { toastMessageAccessibilityDefaults } from './toast-message-accessibility.config'
export * from './bootstrap-variant'

export const uiAccessibilityDefauls: UiAccessibilityConfigModel = {
  alertMessage: alertMessageAccessibilityDefaults,
  buttonClose: buttonCloseAccessibilityDefaults,
  buttonControl: buttonControlAccessibilityDefaults,
  dropdown: controlDropdownAccessibilityDefaults,
  toast: toastMessageAccessibilityDefaults,
  modal: modalDialogAccessibilityDefaults,
}

export const bsThemeDefauls: UiThemeConfigModel = {
  transitionPersist: bsTransitionPersistThemeConfigDefaults,
  alertMessage: bsAlertMessageThemeConfigDefaults,
  buttonClose: bsButtonCloseThemeConfigDefaults,
  buttonControl: bsButtonControlThemeConfigDefaults,
  dropdown: bsControlDropdownThemeConfigDefaults,
  menu: bsControlMenuThemeConfigDefaults,
  toast: bsToastMessageThemeConfigDefaults,
  modal: bsModalDialogThemeConfigDefaults,
  tooltipMessage: bsTooltipMessageThemeConfigDefaults,
}

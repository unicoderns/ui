
import { twAlertMessageThemeConfigDefaults } from './tw-alert-message-theme.config'
import { twButtonCloseThemeConfigDefaults } from './tw-button-close-theme.config'
import { twButtonControlThemeConfigDefaults } from './tw-button-control-theme.config'
import { twControlDropdownThemeConfigDefaults } from './tw-control-dropdown-theme.config'
import { twControlMenuThemeConfigDefaults } from './tw-control-menu-theme.config'
import { twModalDialogThemeConfigDefaults } from './tw-modal-dialog-theme.config'
import { twToastMessageThemeConfigDefaults } from './tw-toast-message-theme.config'
import { twTransitionPersistThemeConfigDefaults } from './tw-transition-persist-theme.config'
import { uiThemeConfigInjectionToken, UiThemeConfigModel } from '../../../types';
import { provide } from 'vue';
export { TailwindVariants } from './variants'


export const twThemeDefauls: UiThemeConfigModel = {
  transitionPersist: twTransitionPersistThemeConfigDefaults,
  alertMessage: twAlertMessageThemeConfigDefaults,
  buttonClose: twButtonCloseThemeConfigDefaults,
  buttonControl: twButtonControlThemeConfigDefaults,
  dropdown: twControlDropdownThemeConfigDefaults,
  menu: twControlMenuThemeConfigDefaults,
  toast: twToastMessageThemeConfigDefaults,
  modal: twModalDialogThemeConfigDefaults,
}


export const provideTailwind = () => {
  provide(uiThemeConfigInjectionToken, twThemeDefauls)
}
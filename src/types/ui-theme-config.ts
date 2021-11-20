import { KeyPairString } from './base'
import {
  AlertMessageThemeConfigModel,
  ButtonCloseThemeConfigModel,
  ButtonControlThemeConfigModel,
  ControlDropdownThemeConfigModel,
  ControlMenuThemeConfigModel,
  ToastMessageThemeConfigModel,
  TransitionPersistThemeConfigModel,
} from '../components'

export const uiThemeConfigInjectionToken = Symbol('UiThemeConfig')

export interface UiComponentThemeConfigModel {
  cssClass:
    | KeyPairString
    | { variants: KeyPairString }
    | { sizes: KeyPairString }
    | { directions: KeyPairString }
    | { positions: KeyPairString }
    | { components: KeyPairString }
}
declare type UiThemeConfigObject = {
  [key: string]: UiComponentThemeConfigModel
}
export interface UiThemeConfigModel extends UiThemeConfigObject {
  transitionPersist: TransitionPersistThemeConfigModel
  alertMessage: AlertMessageThemeConfigModel
  buttonClose: ButtonCloseThemeConfigModel
  buttonControl: ButtonControlThemeConfigModel
  dropdown: ControlDropdownThemeConfigModel
  menu: ControlMenuThemeConfigModel
  toast: ToastMessageThemeConfigModel
}

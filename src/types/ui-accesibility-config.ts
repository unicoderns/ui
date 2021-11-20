import {
  AlertMessageAccessibilityConfigModel,
  ButtonCloseAccessibilityConfigModel,
  ButtonControlAccessibilityConfigModel,
  ControlDropdownAccessibilityConfigModel,
  ModalDialogAccessibilityConfigModel,
} from '../components'

export const uiAccessibilityConfigInjectionToken = Symbol(
  'UiAccessibilityConfig'
)

export interface UiComponentAccessibilityConfigModel {
  [key: string]: string
}

declare type UiAccessibilityConfigObject = {
  [key: string]: UiComponentAccessibilityConfigModel
}

export interface UiAccessibilityConfigModel
  extends UiAccessibilityConfigObject {
  alertMessage: AlertMessageAccessibilityConfigModel
  buttonClose: ButtonCloseAccessibilityConfigModel
  buttonControl: ButtonControlAccessibilityConfigModel
  dropdown: ControlDropdownAccessibilityConfigModel
  modal: ModalDialogAccessibilityConfigModel
}

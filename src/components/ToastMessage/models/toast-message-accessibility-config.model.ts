import { UiComponentAccessibilityConfigModel } from '../../../types'

export interface ToastMessageAccessibilityConfigModel
  extends UiComponentAccessibilityConfigModel {
  buttonClose: string
  live: string
  role: string
}

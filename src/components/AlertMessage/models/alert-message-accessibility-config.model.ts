import { UiComponentAccessibilityConfigModel } from '../../../types'

export interface AlertMessageAccessibilityConfigModel
  extends UiComponentAccessibilityConfigModel {
  role: string
  buttonClose: string
}

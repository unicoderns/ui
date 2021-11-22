import { UiComponentAccessibilityConfigModel } from '../../../types'

export interface ModalDialogAccessibilityConfigModel
  extends UiComponentAccessibilityConfigModel {
  buttonClose: string
  role: string
  title: string
  body: string
}

import { UiComponentAriaConfigModel } from '@unicodernsui/core'

export interface UiAlertAriaConfigModel
  extends UiComponentAriaConfigModel {
  role: string
  buttonClose: string
}

import { UiComponentAriaConfigModel } from '@unicodernsui/core'

export interface UiModalAriaConfigModel extends UiComponentAriaConfigModel {
  buttonClose: string
  role: string
  title: string
  body: string
}

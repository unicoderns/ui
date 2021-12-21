import { UiComponentAriaConfigModel } from '@unicodernsui/core'

export interface UiTabsPanelAriaConfigModel extends UiComponentAriaConfigModel {
  currentPage: string
  role: string
}

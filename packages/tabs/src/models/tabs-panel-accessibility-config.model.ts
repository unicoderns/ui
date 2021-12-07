import { UiComponentAriaConfigModel } from '@unicodernsui/core'

export interface TabsPanelAriaConfigModel
  extends UiComponentAriaConfigModel {
  currentPage: string
  role: string
}

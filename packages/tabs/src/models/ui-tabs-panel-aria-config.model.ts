import { UiComponentAriaConfigModel } from '@uicr/core'

export interface UiTabsPanelAriaConfigModel extends UiComponentAriaConfigModel {
  currentPage: string
  role: string
}

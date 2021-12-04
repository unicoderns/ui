import { UiComponentAccessibilityConfigModel } from '../../../types'

export interface TabsPanelAccessibilityConfigModel
  extends UiComponentAccessibilityConfigModel {
  currentPage: string
  role: string
}

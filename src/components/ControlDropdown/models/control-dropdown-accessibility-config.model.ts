import { UiComponentAccessibilityConfigModel } from '../../../types'

export interface ControlDropdownAccessibilityConfigModel
  extends UiComponentAccessibilityConfigModel {
  expanded: string
  groupRole: string
}

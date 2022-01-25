import { UiComponentAriaConfigModel } from '@unicodernsui/core'

export interface UiPaginationAriaConfigModel
  extends UiComponentAriaConfigModel {
  label: string
  currentPage: string | any
}

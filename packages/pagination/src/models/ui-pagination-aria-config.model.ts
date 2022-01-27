import { UiComponentAriaConfigModel } from '@uicr/core'

export interface UiPaginationAriaConfigModel
  extends UiComponentAriaConfigModel {
  label: string
  currentPage: string | any
}

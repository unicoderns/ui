import { InputSizeVariants } from '@uicr/core'

export interface UiPaginationModel {
  page?: number
  maxVisiblePages?: number
  totalItems: number
  itemsPerPage?: number
  size?: InputSizeVariants
}

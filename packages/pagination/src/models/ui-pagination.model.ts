import { InputSizeVariants } from '@unicodernsui/core'

export interface UiPaginationModel {
  page?: number
  maxVisiblePages?: number
  totalItems: number
  itemsPerPage?: number
  size?: InputSizeVariants
  ['aria:role']: string
}

import { setComponentThemeConfig } from '@uicr/core'
import { UiPagination } from '@uicr/pagination'
import { bsUiPaginationThemeConfigDefaults } from './bs-ui-pagination-theme.config'

export function install() {
  setComponentThemeConfig(UiPagination, bsUiPaginationThemeConfigDefaults)
}

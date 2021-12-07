import { MenuItem } from '@unicodernsui/core'

export interface UiMenuModel {
  datasource?: MenuItem[]
  defaultSelectedIndex?: number
  invert?: boolean
  dropdown?: boolean
}

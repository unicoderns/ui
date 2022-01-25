import { MenuItem } from '@uicr/core'

export interface UiMenuModel {
  datasource?: MenuItem[]
  defaultSelectedIndex?: number
  invert?: boolean
  dropdown?: boolean
}

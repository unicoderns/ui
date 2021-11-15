import { MenuItem } from '../../../types'

export interface ControlMenuModel {
  datasource?: MenuItem[]
  defaultSelectedIndex?: number
  invert?: boolean
  dropdown?: boolean
}
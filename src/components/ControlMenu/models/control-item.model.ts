import { MenuItemType } from '@/types'

export interface ControlMenuItemModel {
  type?: MenuItemType
  active?: boolean
  disabled?: boolean
  elementAttrs?: { [key: string]: unknown }
}
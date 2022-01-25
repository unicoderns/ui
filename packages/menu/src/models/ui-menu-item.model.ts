import { MenuItemType } from '@uicr/core'

export interface UiMenuItemModel {
  type?: MenuItemType
  active?: boolean
  disabled?: boolean
  elementAttrs?: { [key: string]: unknown }
}

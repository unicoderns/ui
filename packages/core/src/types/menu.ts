export enum MenuItemTypes {
  Link = 'link',
  Button = 'button',
  Header = 'header',
  Text = 'text',
  Divider = 'divider',
  Raw = 'raw',
}

export type MenuItemType =
  | MenuItemTypes.Link
  | MenuItemTypes.Button
  | MenuItemTypes.Header
  | MenuItemTypes.Text
  | MenuItemTypes.Divider
  | MenuItemTypes.Raw

export enum Directions {
  Up = 'up',
  Down = 'down',
  Right = 'right',
  Left = 'left',
}

export type Direction =
  | Directions.Up
  | Directions.Down
  | Directions.Right
  | Directions.Left

class MenuItemLink {
  type = MenuItemTypes.Link
  disabled?: boolean = false
  elementAttrs?: { [key: string]: string }
  content?: unknown
}

class MenuItemButton {
  type = MenuItemTypes.Button
  disabled?: boolean = false
  elementAttrs?: { [key: string]: string }
  content?: unknown
}

class MenuItemHeader {
  type = MenuItemTypes.Header
  elementAttrs?: { [key: string]: string }
  content?: unknown
}

class MenuItemText {
  type = MenuItemTypes.Text
  elementAttrs?: { [key: string]: string }
  content?: unknown
}

class MenuItemDivider {
  type = MenuItemTypes.Divider
}

class MenuItemRaw {
  type = MenuItemTypes.Raw
  selectable?: boolean = true
  disabled?: boolean = false
  elementAttrs?: { [key: string]: string }
  content?: unknown
}

export type MenuItem =
  | MenuItemLink
  | MenuItemButton
  | MenuItemHeader
  | MenuItemText
  | MenuItemDivider
  | MenuItemRaw
// TODO: | string

export const isSelectable = (item: MenuItem): boolean => {
  if (typeof item === 'string') return false
  if ('disabled' in item && item.disabled) return false
  if ([MenuItemTypes.Link, MenuItemTypes.Button].indexOf(item.type) >= 0) {
    return true
  }
  if (
    item.type === MenuItemTypes.Raw &&
    'selectable' in item &&
    item.selectable
  )
    return true
  return false
}

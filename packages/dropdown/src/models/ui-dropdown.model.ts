import { SizeVariant, Direction, MenuItem } from '@uicr/core'

export interface UiDropdownModel {
  label?: string
  datasource?: MenuItem[]
  invert?: boolean
  anchor?: boolean
  outline?: boolean
  variant: string
  size?: SizeVariant
  splitButton?: boolean
  disableBackdrop?: boolean
  defaultSelectedIndex?: number
  arrowDirection?: Direction
  menuAlignEnd?: boolean
  ['aria:expanded']?: string
  ['aria:groupRole']?: string
}

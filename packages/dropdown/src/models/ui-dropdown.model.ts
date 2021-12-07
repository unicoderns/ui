import {
  SizeVariant,
  Direction,
  MenuItem,
} from '@unicodernsui/core'

export interface UiDropdownModel {
  label?: string
  datasource?: MenuItem[]
  invert?: boolean
  anchor?: boolean
  outline?: boolean
  variant: string
  size?: SizeVariant
  splitButton?: boolean
  defaultSelectedIndex?: number
  arrowDirection?: Direction
  ['menuAlignEnd']: boolean
  ['menuAlignEnd:xs']: boolean
  ['menuAlignEnd:sm']: boolean
  ['menuAlignEnd:md']: boolean
  ['menuAlignEnd:lg']: boolean
  ['menuAlignEnd:xl']: boolean
  ['menuAlignEnd:xxl']: boolean
  ['aria:expanded']: string
  ['aria:groupRole']: string
}
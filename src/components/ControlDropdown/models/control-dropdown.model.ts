import {
  ContextualVariants,
  Responsive,
  SizeVariant,
  Direction,
  MenuItem,
} from '@/types'

export interface ControlDropdownModel {
  variant: ContextualVariants
  size?: SizeVariant
  datasource?: MenuItem[]
  arrowDirection?: Direction
  menuAlignEnd?: Responsive<boolean> | boolean
  label?: string
  invert?: boolean
  anchor?: boolean
  outline?: boolean
  splitButton?: boolean
  defaultSelectedIndex?: number
}
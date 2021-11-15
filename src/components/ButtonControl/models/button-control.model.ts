import { ContextualVariant, SizeVariant } from '../../../types'

export interface ButtonControlModel {
  variant: ContextualVariant
  size?: SizeVariant
  anchor?: boolean
  toggle?: boolean
  outline?: boolean
  active?: boolean
}
import { SizeVariant } from '../../../types'

export interface ButtonControlModel {
  variant: string
  size?: SizeVariant
  anchor?: boolean
  toggle?: boolean
  outline?: boolean
  active?: boolean
  ['aria:role']: string
}
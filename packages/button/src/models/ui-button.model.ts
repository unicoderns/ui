import { SizeVariant } from '@uicr/core'

export interface UiButtonModel {
  variant: string
  size?: SizeVariant
  anchor?: boolean
  toggle?: boolean
  outline?: boolean
  active?: boolean
  disabled?: boolean
  ['aria:role']: string
}

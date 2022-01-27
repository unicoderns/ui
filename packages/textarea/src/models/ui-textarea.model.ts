import { SizeVariant } from '@uicr/core'

export interface UiTextareaModel {
  size: SizeVariant
  label: string
  disabled: boolean
  maxLength: string
  ['aria:role']: string
}

import { SizeVariant } from '@unicodernsui/core'

export interface UiTextareaModel {
  size: SizeVariant
  label: string
  disabled: boolean
  maxLength: string
  ['aria:role']: string
}

import { ContextualVariant } from '@/types'

export interface ToastMessageModel {
  variant?: ContextualVariant
  headerText?: string
  message?: string
  animate?: boolean
  ariaLabelCloseButton?: string
  ariaLive?: string
  role?: string
  dismissible?: boolean
  show?: boolean
  msTimer?: number
}

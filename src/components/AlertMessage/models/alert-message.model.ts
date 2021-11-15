import { ContextualVariant } from '../../../types'

export interface AlertMessageModel {
  variant: ContextualVariant
  animate?: boolean
  ariaLabelCloseButton?: string
  dismissible?: boolean
  show?: boolean
}

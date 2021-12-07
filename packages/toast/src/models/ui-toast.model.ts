import { Position } from '@unicodernsui/core'

export interface UiToastModel {
  animate?: boolean
  headerText?: string
  message?: string
  dismissible?: boolean
  msTimer?: number
  show?: boolean
  variant?: string
  position?: Position
  ['aria:live']: string
  ['aria:role']: string
  ['aria:buttonClose']: string
}

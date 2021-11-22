import { Position } from '../../../types';

export interface ToastMessageModel {
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

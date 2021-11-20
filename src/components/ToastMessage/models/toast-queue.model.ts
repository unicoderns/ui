import { ToastMessageModel } from './toast-message.model'

export interface ToastQueueModel {
  key: string
  messages: [string, ToastMessageModel][]
}
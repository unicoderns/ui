import { ToastMessageModel } from './toast-message.model'

export interface ToastMessageService {
  add(message: ToastMessageModel): void
  remove(key: string): void
}

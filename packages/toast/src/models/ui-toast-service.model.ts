import { UiToastModel } from './toast-message.model'

export interface UiToastService {
  add(message: UiToastModel): void
  remove(key: string): void
  clear(): void
}

import { UiToastModel } from './ui-toast.model'

export interface UiToastService {
  add(message: UiToastModel): key
  remove(key: string): void
  clear(): void
}

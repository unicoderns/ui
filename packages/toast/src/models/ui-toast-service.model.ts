import { UiToastModel } from './ui-toast.model'

export interface UiToastService {
  add(message: UiToastModel): void
  remove(key: string): void
  clear(): void
}

import { UiToastModel } from './ui-toast.model'

export interface UiToastService {
  add(message: UiToastModel): string
  remove(key: string): void
  clear(): void
}

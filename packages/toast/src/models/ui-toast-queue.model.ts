import { UiToastModel } from './toast-message.model'

export interface UiToastQueueModel {
  key: string
  messages: [string, UiToastModel][]
}

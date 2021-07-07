import { ToastMessageModel } from './models/toast-message.model'
import { ref } from 'vue'

export class ToastMessageService {
  private queueHash: { [key: string]: ToastMessageModel } = {}
  public queue = ref([] as [string, ToastMessageModel][])

  public add(message: ToastMessageModel) {
    const key = new Date().getTime() + (Math.random() * 1e32).toString(36)
    this.queueHash[key] = {
      ...message,
    }
    this.queue.value = Object.entries(this.queueHash)
  }

  public remove(key: string) {
    delete this.queueHash[key]
    this.queue.value = Object.entries(this.queueHash)
  }
}

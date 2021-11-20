import { Ref, ref } from 'vue'

import { ToastMessageModel } from './models/toast-message.model'
import { ToastMessageService } from './models/toast-message-service.model'
import { ToastQueueModel } from './models/toast-queue.model'

export class ToastMessageQueueService implements ToastMessageService {
  private queueHash: { [key: string]: ToastMessageModel } = {}
  private queueList: Ref<ToastQueueModel>[] = []

  public static singletonInstance: ToastMessageQueueService

  constructor() {
    ToastMessageQueueService.singletonInstance = this
  }

  public add(message: ToastMessageModel) {
    if (!this.queueList.length) {
      throw new Error('No container has been register yet')
    }
    const key = this.newKey()
    this.queueHash[key] = {
      ...message,
    }

    const queue = this.queueList[this.queueList.length - 1]
    queue.value = { ...queue.value, messages: Object.entries(this.queueHash) }
  }

  public remove(key: string) {
    if (!this.queueList.length) {
      throw new Error('No container has been register yet')
    }
    delete this.queueHash[key]

    const queue = this.queueList[this.queueList.length - 1]
    queue.value = { ...queue.value, messages: Object.entries(this.queueHash) }
  }

  public register(): Ref<ToastQueueModel> {
    const queue = ref({
      key: this.newKey(),
      messages: [],
    } as ToastQueueModel)

    this.queueList.forEach(q => (q.value = { ...q.value, messages: [] }))
    this.queueList.push(queue)
    queue.value = { ...queue.value, messages: Object.entries(this.queueHash) }
    return queue
  }

  public unregister(queue: Ref<ToastQueueModel>) {
    queue.value = { ...queue.value, messages: [] }
    this.queueList = this.queueList.filter(q => q.value.key !== queue.value.key)

    if (this.queueList.length > 0) {
      const lastQueue = this.queueList[this.queueList.length - 1]
      lastQueue.value = {
        ...lastQueue.value,
        messages: Object.entries(this.queueHash),
      }
    }
  }

  private newKey(): string {
    return new Date().getTime() + (Math.random() * 1e32).toString(36)
  }
}

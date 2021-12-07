import { Ref, ref } from 'vue'
import { UiToastQueueModel } from './models/ui-toast-queue.model'
import { UiToastModel } from './models/toast-message.model'
import { UiToastService } from './models/ui-toast-service.model'

export class ToastMessageQueueService implements UiToastService {
  private queueHash: { [key: string]: UiToastModel } = {}
  private queueList: Ref<UiToastQueueModel>[] = []

  public static singletonInstance: ToastMessageQueueService

  constructor() {
    ToastMessageQueueService.singletonInstance = this
  }

  public add(message: UiToastModel) {
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

  public clear() {
    const keys = Object.keys(this.queueHash)
    keys.forEach(key => delete this.queueHash[key])
    this.queueList.forEach(q => (q.value = { ...q.value, messages: [] }))
  }

  public register(): Ref<UiToastQueueModel> {
    const queue = ref({
      key: this.newKey(),
      messages: [],
    } as UiToastQueueModel)

    this.queueList.forEach(q => (q.value = { ...q.value, messages: [] }))
    this.queueList.push(queue)
    queue.value = { ...queue.value, messages: Object.entries(this.queueHash) }
    return queue
  }

  public unregister(queue: Ref<UiToastQueueModel>) {
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

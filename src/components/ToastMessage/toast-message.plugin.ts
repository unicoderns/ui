import { App, ComponentPublicInstance, createApp } from 'vue'

import { ToastMessageService } from './models/toast-message-service.model'
import { ToastMessageQueueService } from './toast-message-queue.service'
import ToastContainer from './toast-container.component.vue'
import { ToastMessageModel } from '.'

const ServiceInjectionToken = Symbol('toastService')

type ToastContainerPublicInstance = ComponentPublicInstance & {
  service: ToastMessageService
}

class PluginToastMessageService implements ToastMessageService {
  constructor(private VueApp: App) {}

  add(message: ToastMessageModel): void {
    this.queueService.add(message)
  }
  remove(key: string): void {
    this.queueService.remove(key)
  }

  private get queueService(): ToastMessageService {
    if (ToastMessageQueueService.singletonInstance) {
      return ToastMessageQueueService.singletonInstance
    }

    const toastMountDiv = document.createElement('div')
    document.body.appendChild(toastMountDiv)
    const app = createApp(ToastContainer)
    const toastPlugin = app.mount(toastMountDiv) as ToastContainerPublicInstance
    return toastPlugin.service
  }

}

export default {
  ServiceInjectionToken,
  install(VueApp: App) {
    const service = new PluginToastMessageService(VueApp)
    VueApp.provide(ServiceInjectionToken, service)
  },
}
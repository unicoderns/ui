import { App, ComponentPublicInstance, createApp } from 'vue'
import { ToastMessageQueueService } from './toast-message-queue.service'
import { UiToastModel } from './models/ui-toast.model'
import { UiToastService } from './models/ui-toast-service.model'
import UiToastContainer from './ui-toast-container.component.vue'

const ServiceInjectionToken = Symbol('uiToastService')

type ToastContainerPublicInstance = ComponentPublicInstance & {
  service: UiToastService
}

class PluginToastMessageService implements UiToastService {
  add(message: UiToastModel): string {
    return this.queueService.add(message)
  }
  remove(key: string): void {
    this.queueService.remove(key)
  }

  clear(): void {
    this.queueService.clear()
  }

  private get queueService(): UiToastService {
    if (ToastMessageQueueService.singletonInstance) {
      return ToastMessageQueueService.singletonInstance
    }

    const toastMountDiv = document.createElement('div')
    document.body.appendChild(toastMountDiv)
    const app = createApp(UiToastContainer)
    const toastPlugin = app.mount(toastMountDiv) as ToastContainerPublicInstance
    return toastPlugin.service
  }
}

export default {
  ServiceInjectionToken,
  install(VueApp: App) {
    const service = new PluginToastMessageService()
    VueApp.provide(ServiceInjectionToken, service)
  },
}

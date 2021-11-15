import { App, ComponentPublicInstance, createApp } from 'vue'
import ToastContainer from './toast-container.component.vue'
import { ToastMessageService } from './toast-message.service';

const ServiceInjectionToken = Symbol('toastService');

type ToastContainerPublicInstance = ComponentPublicInstance & {
  service: ToastMessageService
}

export default {
  ServiceInjectionToken,
  install(VueApp: App) {
    const toastMountDiv = document.createElement('div');
    document.body.appendChild(toastMountDiv);
    const app = createApp(ToastContainer);
    const toastPlugin = app.mount(toastMountDiv) as ToastContainerPublicInstance;

    VueApp.provide(ServiceInjectionToken, toastPlugin.service);
  },
}
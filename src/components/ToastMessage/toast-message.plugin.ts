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
    //TODO: if alredy exists
    document.body.appendChild(toastMountDiv);
    const app = createApp(ToastContainer);
    const toastPlugin = app.mount(toastMountDiv) as ToastContainerPublicInstance;

    VueApp.provide(ServiceInjectionToken, toastPlugin.service);
  },
}
/*
TODO:
Models for each component Toast and ToastDefaults
index for each component
Toast Service into container (with emit event)
What is second div in toast message?
UT
Readme rules
import @/
*/